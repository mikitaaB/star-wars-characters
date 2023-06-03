import { memo } from "react";
import List from "@mui/material/List/List";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import { CharacterItemType, CharactersListPropsType } from "../../types";

export const CharactersList = memo(function CharactersList({
	data,
}: CharactersListPropsType) {
	return (
		<List>
			{data.map(({ id, name }: CharacterItemType) => (
				<CharacterListItem key={id} name={name} id={id} />
			))}
		</List>
	);
});
