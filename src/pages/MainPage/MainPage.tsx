import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import {
	mainErrorText,
	nothingFound,
	statusFailed,
	statusLoading,
	statusSucceeded,
} from "../../constants";
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
import { CharactersList } from "../../components/CharactersList/CharactersList";

const MainPage = () => {
	const charactersData = useSelector(selectAllCharacters, shallowEqual);
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
				{charactersStatusLoading === statusFailed && (
					<p>{mainErrorText}</p>
				)}
				{charactersStatusLoading === statusLoading && (
					<CircularProgress />
				)}
				{charactersStatusLoading === statusSucceeded &&
					charactersData.length === 0 && <p>{nothingFound}</p>}
			</div>
			{charactersStatusLoading === statusSucceeded &&
				charactersData.length > 0 && (
					<CharactersList data={charactersData} />
				)}
			<Paginator currentPage={currentPage} pageCount={pageCount} />
		</>
	);
};

export default MainPage;
