import { ChangeEvent } from "react";
import {
	statusIdle,
	statusLoading,
	statusSucceeded,
	statusFailed,
} from "../constants";

export type CharacterType = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

export type CharactersListPropsType = {
	data: CharacterItemType[];
};

export type CharacterItemType = {
	name: string;
	id: string | undefined;
};

export type FetchParamsType = {
	page?: number;
	search?: string;
	id?: string;
	pageSize?: number;
};

export type FetchSWReturnDataType = {
	charactersData: {
		count: number;
		next?: string;
		previous?: string;
		results: CharacterType[];
	};
	status: StatusLoadingType;
};

export type SearchFieldPropsType = {
	searchValue: string;
};

export type PaginationPropsType = {
	pageCount: number;
	currentPage: number;
};

export type BioListItemType = {
	title: string;
};

export type FilmType = {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: string;
	edited: string;
	url: string;
};

export type SpecieType = {
	name: string;
	classification: string;
	designation: string;
	average_height: string;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: null;
	language: string;
	people: string[];
	films: string[];
	created: string;
	edited: string;
	url: string;
};

export type BioInputType = {
	label: string;
	value: string | number | string[];
	name: string;
	type: "text" | "number";
	handleChange: (e: ChangeEvent<unknown>) => void;
};

export type StatusLoadingType =
	| typeof statusIdle
	| typeof statusLoading
	| typeof statusSucceeded
	| typeof statusFailed;

export type CharactersInitialType = {
	items: CharacterItemType[];
	status: StatusLoadingType;
	currentPage: number;
	searchValue: string;
	pageCount: number;
};

export type FetchPeopleType = {
	count: number;
	next: string | null;
	previous: string | null;
	results: CharacterItemType[];
};

export type CharacterBioInfo = {
	name: string;
	height: number;
	mass: number;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

export type CharacterByIdInitialType = {
	itemsInfo: CharacterBioInfo;
	statusInfo: StatusLoadingType;
	itemsFilms: FilmType[];
	statusFilms: StatusLoadingType;
	itemsSpecies: SpecieType[];
	statusSpecies: StatusLoadingType;
};
