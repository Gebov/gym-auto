import { ServerCollection } from "./../../../../../data/model";
import { Card } from "./model";
import { tassign, addItem, deleteItem } from "./../../../../../state";
import { Action } from '@ngrx/store';
import { Actions } from "./actions";

const cardsState: ServerCollection<Card> = {
	data: [],
	totalCount: 0
}

export const cardsReducer = (state: ServerCollection<Card> = cardsState, action: Action): ServerCollection<Card> => {
	switch (action.type) {
		case Actions.GET_CARDS_END:
			return tassign(state, action.payload);
		case Actions.UPDATE_CARD_END:
			return addItem<Card>(state, action.payload, "id");
		case Actions.DELETE_CARD_END:
			return deleteItem<Card>(state, action.payload, "id");
		case Actions.CREATE_CARD_END:
			if (action.payload) {
				let modifiedData = [].concat(state.data);
				modifiedData.push(action.payload);

				return tassign(state, { data: modifiedData, totalCount: ++state.totalCount });
			}
			break;
	}

	return state;
}

interface EditCardState {
	card: Card;
}

const editCardState: EditCardState = {
	card: null
};

export const editCardReducer = (state: EditCardState = editCardState, action: Action): EditCardState => {
	switch (action.type) {
		case Actions.EDIT_CARD_INIT:
			return tassign(state, { card: action.payload });
		case Actions.EDIT_CARD_END:
			return tassign(state, { card: null });
	}

	return state;
}

interface SelectedCard {
	card: Card;
}

const selectedCard: SelectedCard = {
	card: null
}

export const selectCardReducer = (state: SelectedCard = selectedCard, action: Action): SelectedCard => {
	switch (action.type) {
		case Actions.SHOW_VISITS_INIT:
			return tassign(state, { card: action.payload });
		case Actions.SHOW_VISITS_END:
			return tassign(state, { card: null });
	}

	return state;
}
