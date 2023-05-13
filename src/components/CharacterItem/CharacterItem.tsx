import { memo } from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { CharacterItemType } from "../../types";
import s from "./characterItem.module.css";

export const CharacterItem = memo(function CharacterItem({
	name,
	characterId,
}: CharacterItemType) {
	return (
		<ListItem
			component={Link}
			to={`/character/${characterId}`}
			key={characterId}
			className={s.listItem}
		>
			<ListItemText primary={name} className={s.listItem__text} />
		</ListItem>
	);
});
