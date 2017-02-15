import { addReducer } from "./../../../../state";
import { cardsReducer, selectCardReducer } from "./state/reducer";

addReducer("cardsState", cardsReducer);
addReducer("selectedCard", selectCardReducer);

export * from "./components";
export * from "./services";
export * from "./state";
export * from "./routes";
