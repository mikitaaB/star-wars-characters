import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography/Typography";
import { BioInput } from "../BioInput/BioInput";
import { CharacterBioInfo } from "../../types";
import s from "./bioEditPanel.module.css";
import { AppDispatch } from "../../state/store";
import { setCharacterInfo } from "../../state/slices/characterByIdSlice";

export const BioEditPanel = ({
	characterInfo,
}: {
	characterInfo: CharacterBioInfo;
}) => {
	const dispatch = useDispatch<AppDispatch>();

	const onHandleChange = (e: ChangeEvent<unknown>) => {
		const { name, value } = e.currentTarget as HTMLInputElement;
		dispatch(setCharacterInfo({ name, value }));
	};

	if (!characterInfo) {
		return null;
	}

	return (
		<>
			<Typography variant="h6">Name: {characterInfo.name}</Typography>
			<form>
				<div className={s.editInputs}>
					{Object.entries(characterInfo)
						.filter(
							([key, value]) =>
								!Array.isArray(value) &&
								key !== "url" &&
								key !== "name"
						)
						.map(([key, value]) => (
							<BioInput
								key={key}
								label={key
									.replace(/^./, firstSym =>
										firstSym.toUpperCase()
									)
									.replace(/_/g, " ")}
								name={key}
								value={value}
								type={
									typeof value === "number"
										? "number"
										: "text"
								}
								handleChange={onHandleChange}
							/>
						))}
				</div>
			</form>
		</>
	);
};
