import { FetchParamsType } from "../types";

const configureQuery = (conf_params: FetchParamsType) => {
	if (Object.keys(conf_params).length === 0) {
		return "";
	}
	if (conf_params.id) {
		return `/${conf_params.id}`;
	}
	if (conf_params.search) {
		return `?search=${conf_params.search}&page=${conf_params.page}&page_size=${conf_params.pageSize}`;
	}
	if (conf_params.page) {
		return `?page=${conf_params.page}&page_size=${conf_params.pageSize}`;
	}
	return "";
};

export const fetchSWData = async (
	category: string,
	conf_params: FetchParamsType
) => {
	const response = await fetch(
		`https://swapi.dev/api/${category}${configureQuery(conf_params)}`
	);
	const charactersData = await response.json();
	if (response.ok) {
		return charactersData;
	}
	return Promise.reject(charactersData);
};
