import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authorization } from "./Authorization";
import RouterInfo from "./RouterInfo";

const AutoRouter = () => {
  return (
    <Router>
      <Routes>
        {RouterInfo.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.withAuthorization ? (
                  <Authorization isAuthenticated={isAuthenticated} redirectTo="/login">
                    {route.element}
                  </Authorization>
                ) : (
                  route.element
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default AutoRouter;
