export interface Card {
	id: string;
	price: number;
	paid: boolean;
	user: {
		id: string;
		username: string;
	}
	dateCreated: Date;
	type: {
		id: string,
		title: string;
	};
	visits: Array<Visit>
}

export interface Visit {
	id: string;
	dateCreated: Date;
}
