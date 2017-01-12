import { COMPONENTS as UCMP, SERVICES as USRV, STATE_PROVIDERS as USTATE, EFFECTS as UEFF, ROUTES as UR } from "./users";
import { COMPONENTS as CTCMP, SERVICES as CT_SRV, STATE_PROVIDERS as CT_STATE, EFFECTS as CT_EFF, ROUTES as CT_R } from "./card-types";

export const COMPONENTS = [
	...UCMP,
	...CTCMP
]

export const PROVIDERS = [
	...USTATE,
	...USRV,
	...CT_STATE,
	...CT_SRV
]

export const EFFECTS = [
	...UEFF,
	...CT_EFF
]

export const ROUTES = [
	...UR,
	...CT_R
]
