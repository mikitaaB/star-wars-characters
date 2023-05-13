import { memo } from "react";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { BioListItemType } from "../../types";

export const BioListItem = memo(function BioListItem({
	title,
}: BioListItemType) {
	return (
		<ListItem>
			<ListItemText primary={title} />
		</ListItem>
	);
});
