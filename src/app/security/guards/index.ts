import { AuthGuard } from "./auth.guard";
import { RoleGuard } from "./role.guard";

export const GUARDS = [
	AuthGuard, RoleGuard
]
