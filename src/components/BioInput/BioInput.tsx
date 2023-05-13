import { memo } from "react";
import TextField from "@mui/material/TextField/TextField";
import { BioInputType } from "../../types";

export const BioInput = memo(function BioInput({
	label,
	value,
	name,
	type,
	handleChange,
}: BioInputType) {
	return (
		<TextField
			label={label}
			name={name}
			value={value}
			type={type}
			onChange={handleChange}
			variant="standard"
		/>
	);
});
