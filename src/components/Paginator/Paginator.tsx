import { ChangeEvent, memo } from "react";
import { useDispatch } from "react-redux";
import Pagination from "@mui/material/Pagination/Pagination";
import { setCurrentPage } from "../../state/slices/charactersSlice";
import { PaginationPropsType } from "../../types";

export const Paginator = memo(
	({ currentPage, pageCount }: PaginationPropsType) => {
		const dispatch = useDispatch();

		const onHandlePageChange = (
			_event: ChangeEvent<unknown>,
			value: number
		) => {
			dispatch(setCurrentPage(value));
		};

		const paginationStyle = {
			display: "flex",
			justifyContent: "center",
			margin: "40px",
		};

		return (
			<Pagination
				count={pageCount}
				page={currentPage}
				variant="outlined"
				shape="rounded"
				color="primary"
				size="large"
				onChange={onHandlePageChange}
				sx={paginationStyle}
			/>
		);
	}
);
