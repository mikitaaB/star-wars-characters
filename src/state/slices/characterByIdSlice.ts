import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSWData } from "../../service/fetchData";
import {
	CharacterBioInfo,
	CharacterByIdInitialType,
	FilmType,
	SpecieType,
} from "../../types";
import {
	statusFailed,
	statusIdle,
	statusLoading,
	statusSucceeded,
} from "../../constants";

export const fetchCharacterInfo = createAsyncThunk(
	"characterById/fetchCharacterInfo",
	async (characterId: string): Promise<CharacterBioInfo> => {
		try {
			const response = await fetchSWData("people", {
				id: characterId,
			});
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);
export const fetchCharacterFilms = createAsyncThunk(
	"characterById/fetchCharacterFilms",
	async (films: string[]): Promise<{ results: FilmType[] }> => {
		try {
			const filmData = await Promise.all(
				films.map(film =>
					fetchSWData("films", {
						id: film.split("/").at(-2),
					})
				)
			);
			return { results: filmData };
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);
export const fetchCharacterSpecies = createAsyncThunk(
	"characterById/fetchCharacterSpecies",
	async (species: string[]): Promise<{ results: SpecieType[] }> => {
		try {
			const speceisData = await Promise.all(
				species.map(specie =>
					fetchSWData("species", {
						id: specie.split("/").at(-2),
					})
				)
			);
			return { results: speceisData };
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
);

const initialState: CharacterByIdInitialType = {
	itemsInfo: {
		name: "",
		height: 0,
		mass: 0,
		hair_color: "",
		skin_color: "",
		eye_color: "",
		birth_year: "",
		gender: "",
		homeworld: "",
		films: [],
		species: [],
		vehicles: [],
		starships: [],
		created: "",
		edited: "",
		url: "",
	},
	statusInfo: statusIdle,
	itemsFilms: [],
	statusFilms: statusIdle,
	itemsSpecies: [],
	statusSpecies: statusIdle,
};

const characterByIdSlice = createSlice({
	name: "charactersById",
	initialState,
	reducers: {
		setCharacterInfo(state, action) {
			return {
				...state,
				itemsInfo: {
					...state.itemsInfo,
					[action.payload.name]: action.payload.value,
				},
			};
		},
		setZeroFilms(state) {
			return { ...state, itemsFilms: [] };
		},
		setZeroSpecies(state) {
			return { ...state, itemsSpecies: [] };
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCharacterInfo.pending, state => ({
			...state,
			statusInfo: statusLoading,
		}));
		builder.addCase(fetchCharacterInfo.fulfilled, (state, action) => ({
			...state,
			statusInfo: statusSucceeded,
			itemsInfo: action.payload,
		}));
		builder.addCase(fetchCharacterInfo.rejected, state => ({
			...state,
			statusInfo: statusFailed,
		}));

		builder.addCase(fetchCharacterFilms.pending, state => ({
			...state,
			statusFilms: statusLoading,
		}));
		builder.addCase(fetchCharacterFilms.fulfilled, (state, action) => ({
			...state,
			statusFilms: statusSucceeded,
			itemsFilms: action.payload.results,
		}));
		builder.addCase(fetchCharacterFilms.rejected, state => ({
			...state,
			statusFilms: statusFailed,
		}));

		builder.addCase(fetchCharacterSpecies.pending, state => ({
			...state,
			statusSpecies: statusLoading,
		}));
		builder.addCase(fetchCharacterSpecies.fulfilled, (state, action) => ({
			...state,
			statusSpecies: statusSucceeded,
			itemsSpecies: action.payload.results,
		}));
		builder.addCase(fetchCharacterSpecies.rejected, state => ({
			...state,
			statusSpecies: statusFailed,
		}));
	},
});

export const { setCharacterInfo, setZeroFilms, setZeroSpecies } =
	characterByIdSlice.actions;

export default characterByIdSlice.reducer;
