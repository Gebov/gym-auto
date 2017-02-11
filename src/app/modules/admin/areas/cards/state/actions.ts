import { Injectable } from "@angular/core";

@Injectable()
export class Actions {
	public static GET_CARDS_INIT = "[Products/Card] Get Card types init";
	public static GET_CARDS_END = "[Products/Card] Get Card types end";

	public static CREATE_CARD_INIT = "[Products/Card] Create Card types init";
	public static CREATE_CARD_END = "[Products/Card] Create Card types end";

	public static EDIT_CARD_INIT = "[Products/Card] Edit init";
	public static EDIT_CARD_END = "[Products/Card] Edit end";

	public static UPDATE_CARD_INIT = "[Products/Card] Update init";
	public static UPDATE_CARD_END = "[Products/Card] Update end";

	public static DELETE_CARD_INIT = "[Products/Card] Delete init";
	public static DELETE_CARD_END = "[Products/Card] Delete end";

	public static SHOW_VISITS_INIT = "[Products/Card] Show visits init";
	public static SHOW_VISITS_END = "[Products/Card] Show visits end";
}
