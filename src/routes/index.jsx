import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Router() {
   return(
      <BrowserRouter>
         <AppRoutes />
      </BrowserRouter>
   );
}