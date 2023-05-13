import { RootState } from "../store";

export const selectCharacterInfo = (state: RootState) =>
	state.characterById.itemsInfo;
export const selectStatusInfoLoading = (state: RootState) =>
	state.characterById.statusInfo;

export const selectCharacterFilms = (state: RootState) =>
	state.characterById.itemsFilms;
export const selectStatusFilmsLoading = (state: RootState) =>
	state.characterById.statusFilms;

export const selectCharacterSpecies = (state: RootState) =>
	state.characterById.itemsSpecies;
export const selectStatusSpeciesLoading = (state: RootState) =>
	state.characterById.statusSpecies;
