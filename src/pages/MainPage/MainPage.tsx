import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List/List";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { CharacterItem } from "../../components/CharacterItem/CharacterItem";
import { CharacterType } from "../../types";
import { mainErrorText, nothingFound } from "../../constants";
import { SearchField } from "../../components/SearchField/SearchField";
import { Paginator } from "../../components/Paginator/Paginator";
import { AppDispatch } from "../../state/store";
import s from "./mainPage.module.css";
import { fetchCharacters } from "../../state/slices/charactersSlice";
import {
	selectAllCharacters,
	selectCurrentPage,
	selectPageCount,
	selectSearchValue,
	selectStatusLoading,
} from "../../state/selectors/charactersSelector";

export const MainPage = () => {
	const charactersData = useSelector(selectAllCharacters);
	const charactersStatusLoading = useSelector(selectStatusLoading);
	const currentPage = useSelector(selectCurrentPage);
	const pageCount = useSelector(selectPageCount);
	const searchValue = useSelector(selectSearchValue);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchCharacters({ currentPage, searchValue }));
	}, [currentPage, searchValue, dispatch]);

	return (
		<>
			<Paginator currentPage={currentPage} pageCount={pageCount} />
			<SearchField searchValue={searchValue} />
			<div className={s.specialStatuses}>
				{charactersStatusLoading === "failed" && <p>{mainErrorText}</p>}
				{charactersStatusLoading === "loading" && <CircularProgress />}
				{charactersStatusLoading === "succeeded" &&
					charactersData.length === 0 && <p>{nothingFound}</p>}
			</div>
			{charactersStatusLoading === "succeeded" &&
				charactersData.length > 0 && (
					<List>
						{charactersData.map((character: CharacterType) => (
							<CharacterItem
								key={character.url.split("/").at(-2)}
								name={character.name}
								characterId={character.url.split("/").at(-2)}
							/>
						))}
					</List>
				)}
			<Paginator currentPage={currentPage} pageCount={pageCount} />
		</>
	);
};
