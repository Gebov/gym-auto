import { COMPONENTS as UCMP, SERVICES as USRV, STATE_PROVIDERS as USTATE, EFFECTS as UEFF, ROUTES as UR } from "./users";
import { COMPONENTS as CTCMP, SERVICES as CT_SRV, STATE_PROVIDERS as CT_STATE, EFFECTS as CT_EFF, ROUTES as CT_R } from "./card-types";
import { COMPONENTS as CCMP, SERVICES as C_SRV, STATE_PROVIDERS as C_STATE, EFFECTS as C_EFF, ROUTES as C_R } from "./cards";

export const COMPONENTS = [
	...UCMP,
	...CTCMP,
	...CCMP
]

export const PROVIDERS = [
	...USTATE,
	...USRV,
	...CT_STATE,
	...CT_SRV,
	...C_STATE,
	...C_SRV
]

export const EFFECTS = [
	...UEFF,
	...CT_EFF,
	...C_EFF
]

export const ROUTES = [
	...UR,
	...CT_R,
	...C_R
]
