// import { COMPONENTS  } from "./components";
// import { SERVICES } from "./services";
// import { STATE_PROVIDERS } from "./state";

// export const USERS_COMPONENTS = COMPONENTS;
// export const USERS_SERVICES = SERVICES;
// export const USERS_STATE_PROVIDERS = STATE_PROVIDERS;

import { addReducer } from "./../../../../state";
import { usersReducer, editedUserReducer } from "./state/users.reducer";

addReducer("usersState", usersReducer);
addReducer("editUserState", editedUserReducer);

export * from "./components";
export * from "./services";
export * from "./state";
export * from "./routes";
