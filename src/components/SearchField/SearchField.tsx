import { ChangeEvent, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField/TextField";
import { AppDispatch } from "../../state/store";
import {
	setCurrentPage,
	setSearchItem,
} from "../../state/slices/charactersSlice";
import { SearchFieldPropsType } from "../../types";
import { searchFieldPlaceholder } from "../../constants";
import { selectSearchValue } from "../../state/selectors/charactersSelector";

export const SearchField = memo(({ searchValue }: SearchFieldPropsType) => {
	const dispatch = useDispatch<AppDispatch>();
	const previousSearchValue = useSelector(selectSearchValue);

	const onHandleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		const currentSearchValue = e.target.value;
		dispatch(setSearchItem(currentSearchValue));
		if (
			currentSearchValue !== previousSearchValue ||
			previousSearchValue.length === 0
		) {
			dispatch(setCurrentPage(1));
		}
	};

	return (
		<TextField
			fullWidth
			onChange={onHandleSearchChange}
			label={searchFieldPlaceholder}
			value={searchValue}
			type="search"
			variant="standard"
		/>
	);
});
