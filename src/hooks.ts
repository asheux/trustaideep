import { useContext } from "react";

import { PreviousRouteContext } from "src/routes/context";

export const usePreviousRoute = () => useContext(PreviousRouteContext);
