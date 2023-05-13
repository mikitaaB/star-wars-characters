import { RootState } from "../store";

export const selectAllCharacters = (state: RootState) => state.characters.items;

export const selectCurrentPage = (state: RootState) =>
	state.characters.currentPage;
export const selectPageCount = (state: RootState) => state.characters.pageCount;

export const selectSearchValue = (state: RootState) =>
	state.characters.searchValue;

export const selectStatusLoading = (state: RootState) =>
	state.characters.status;
