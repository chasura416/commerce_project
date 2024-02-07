import Router from "./router/Router";
import AuthProvider from "./context/auth/AuthContext";

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
