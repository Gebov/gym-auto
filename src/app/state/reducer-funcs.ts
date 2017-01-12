import { ServerCollection } from "./../data/model/server-collection";

export function addItem<T>(state: ServerCollection<T>, toAdd: T, idName: string): ServerCollection<T> {
		let updateIndex = state.data.findIndex((x) => {
				return x[idName] == toAdd[idName];
		});

		if (updateIndex != -1) {
				let toUpdate = state.data[updateIndex];
				toUpdate = Object.assign(toUpdate, toAdd);
				return tassign(state);
		}

		return state;
}

export function deleteItem<T>(state: ServerCollection<T>, toDelete: T, idName: string): ServerCollection<T> {
		let deleteIndex = state.data.findIndex((user) => {
				return user[idName] == toDelete[idName];
		});

		if (deleteIndex !== -1) {
				state.data.splice(deleteIndex, 1);
				return tassign(state);
		}

		return state;
}

export function tassign<T extends U, U>(target: T, ...source: U[]): T {
	return Object.assign({}, target, ...source);
}
