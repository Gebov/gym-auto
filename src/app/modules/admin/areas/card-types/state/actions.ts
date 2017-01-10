import { Injectable } from "@angular/core";

@Injectable()
export class Actions {
	public static GET_CARD_TYPES_INIT = "[Products/CardTypes] Get Card types init";
	public static GET_CARD_TYPES_END = "[Products/CardTypes] Get Card types end";

	public static ARCHIVE_CARD_TYPE_INIT = "[Products/CardTypes] Archive init";
	public static ARCHIVE_CARD_TYPE_END = "[Products/CardTypes] Archive end";
}
