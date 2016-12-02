let reducers = {};

export function getReducers() {
	return reducers;
}

export function addReducer(name: string, reducer: any): void {
	reducers[name] = reducer;
}
