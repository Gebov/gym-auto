import { ServerCollection } from "./../../../../../data/server-collection";
import { CardType } from "./model";
import { tassign } from "./../../../../../state";
import { Action } from '@ngrx/store';
import { Actions } from "./actions";

const cardTypesState: ServerCollection<CardType> = {
	data: [],
	totalCount: 0
}

export const cardTypesReducer = (state: ServerCollection<CardType> = cardTypesState, action: Action): ServerCollection<CardType> => {
	switch (action.type) {
		case Actions.GET_CARD_TYPES_END:
			return tassign(state, action.payload);
		case Actions.ARCHIVE_CARD_TYPE_END:
			let updateIndex = state.data.findIndex((cardType) => {
				return cardType.id == action.payload.id;
			});

			if (updateIndex != -1) {
				let toUpdate = state.data[updateIndex];
				toUpdate = Object.assign(toUpdate, action.payload);
				return tassign(state);
			}
		case Actions.CREATE_CARD_TYPES_END:
			let modifiedData = [].concat(state.data);
			modifiedData.push(action.payload);

			return tassign(state, { data: modifiedData, totalCount: ++state.totalCount });
	}

	return state;
}
