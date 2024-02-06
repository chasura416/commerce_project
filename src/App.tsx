import Router from "./router/Router";
import AuthProvider from "./apis/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
