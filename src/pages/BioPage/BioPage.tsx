import { startTransition, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import List from "@mui/material/List/List";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import { BioListItem } from "../../components/BioListItem/BioListItem";
import { FilmType, SpecieType } from "../../types";
import {
	characterStatusErrorText,
	filmsErrorText,
	speciesErrorText,
	statusFailed,
	statusLoading,
	statusSucceeded,
} from "../../constants";
import {
	selectCharacterFilms,
	selectCharacterInfo,
	selectCharacterSpecies,
	selectStatusFilmsLoading,
	selectStatusInfoLoading,
	selectStatusSpeciesLoading,
} from "../../state/selectors/characterByIdSelector";
import {
	fetchCharacterFilms,
	fetchCharacterInfo,
	fetchCharacterSpecies,
	setZeroFilms,
	setZeroSpecies,
} from "../../state/slices/characterByIdSlice";
import { BioEditPanel } from "../../components/BioEditPanel/BioEditPanel";
import { AppDispatch } from "../../state/store";

const BioPage = () => {
	const navigate = useNavigate();
	const { characterId } = useParams();

	const characterInfo = useSelector(selectCharacterInfo, shallowEqual);
	const statusInfoLoading = useSelector(selectStatusInfoLoading);
	const characterFilms = useSelector(selectCharacterFilms, shallowEqual);
	const statusFilmsLoading = useSelector(selectStatusFilmsLoading);
	const characterSpecies = useSelector(selectCharacterSpecies, shallowEqual);
	const statusSpeciesLoading = useSelector(selectStatusSpeciesLoading);
	const dispatch = useDispatch<AppDispatch>();

	if (typeof characterId !== "string") {
		navigate("/", { replace: true });
	}

	useEffect(() => {
		if (characterId && typeof characterId === "string") {
			dispatch(setZeroFilms());
			dispatch(setZeroSpecies());
			dispatch(fetchCharacterInfo(characterId));
		}
	}, [characterId, dispatch]);

	useEffect(() => {
		startTransition(() => {
			if (characterInfo?.films?.length || characterFilms.length === 0) {
				dispatch(fetchCharacterFilms(characterInfo.films));
			}
			if (
				characterInfo.species?.length ||
				characterSpecies.length === 0
			) {
				dispatch(fetchCharacterSpecies(characterInfo.species));
			}
		});
	}, [characterInfo, dispatch]);

	return (
		<div>
			<Link to="/">
				<Button variant="outlined">Back</Button>
			</Link>

			<div>
				{statusInfoLoading === statusFailed && (
					<p>{characterStatusErrorText}</p>
				)}
				{statusInfoLoading === statusLoading && <CircularProgress />}
			</div>
			{statusInfoLoading === statusSucceeded &&
				characterInfo &&
				typeof characterInfo === "object" &&
				Object.keys(characterInfo).length && (
					<BioEditPanel characterInfo={characterInfo} />
				)}

			<div>
				{statusFilmsLoading === statusFailed && <p>{filmsErrorText}</p>}
				{statusFilmsLoading === statusLoading && <CircularProgress />}
			</div>
			{statusFilmsLoading === statusSucceeded &&
				characterFilms &&
				characterFilms.length > 0 && (
					<>
						<Typography variant="h5">Films:</Typography>
						<List>
							{characterFilms.map((film: FilmType) => (
								<BioListItem
									title={`${film.episode_id}. ${film.title}`}
									key={film.url.split("/").at(-2)}
								/>
							))}
						</List>
					</>
				)}

			<div>
				{statusSpeciesLoading === statusFailed && (
					<p>{speciesErrorText}</p>
				)}
				{statusSpeciesLoading === statusLoading && <CircularProgress />}
			</div>
			{statusSpeciesLoading === statusSucceeded &&
				characterSpecies &&
				characterSpecies.length > 0 && (
					<>
						<Typography variant="h5">Species:</Typography>
						<List>
							{characterSpecies.map((specie: SpecieType) => (
								<BioListItem
									title={`${specie.name} - ${specie.classification} - ${specie.designation}`}
									key={specie.url.split("/").at(-2)}
								/>
							))}
						</List>
					</>
				)}
		</div>
	);
};

export default BioPage;
