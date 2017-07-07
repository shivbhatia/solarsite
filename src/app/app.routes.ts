import { homeRoutes } from "./home/routes";
import { registerRoutes } from "./register/routes";
import { registernewRoutes } from "./registernew/routes";
import { registerformRoutes } from "./registerform/routes";
import { loginRoutes } from "./login/routes";
export const appRoutes = [
	...homeRoutes,
	...registerRoutes,
	...registernewRoutes,
	...registerformRoutes,
	...loginRoutes,
];
