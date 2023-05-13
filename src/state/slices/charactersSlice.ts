import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchSWData } from "../../servise/fetchData";
import { FetchPeopleType, CharactersInitialType } from "../../types";

const pageSize = 10;

export const fetchCharacters = createAsyncThunk(
	"characters/fetchCharacters",
	async ({
		currentPage,
		searchValue,
	}: {
		currentPage: number;
		searchValue: string;
	}): Promise<FetchPeopleType> => {
		try {
			const response = await fetchSWData("people", {
				page: currentPage,
				search: searchValue,
				pageSize,
			});
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

const initialState: CharactersInitialType = {
	items: [],
	status: "idle",
	currentPage: 1,
	searchValue: "",
	pageCount: 1,
};

const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		setCurrentPage(state, { payload }: PayloadAction<number>) {
			return { ...state, currentPage: payload };
		},
		setSearchItem(state, { payload }: PayloadAction<string>) {
			return { ...state, searchValue: payload };
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCharacters.pending, state => ({
			...state,
			status: "loading",
		}));
		builder.addCase(fetchCharacters.fulfilled, (state, action) => ({
			...state,
			status: "succeeded",
			items: action.payload.results,
			pageCount: Math.ceil(action.payload.count / pageSize),
		}));
		builder.addCase(fetchCharacters.rejected, state => ({
			...state,
			status: "failed",
		}));
	},
});

export const { setCurrentPage, setSearchItem } = charactersSlice.actions;

export default charactersSlice.reducer;
