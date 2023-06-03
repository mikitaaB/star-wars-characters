import { memo } from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { CharacterItemType } from "../../../types";
import s from "./characterListItem.module.css";

export const CharacterListItem = memo(function CharacterListItem({
	name,
	id,
}: CharacterItemType) {
	return (
		<ListItem
			component={Link}
			to={`/character/${id}`}
			key={id}
			className={s.listItem}
		>
			<ListItemText primary={name} className={s.listItem__text} />
		</ListItem>
	);
});
