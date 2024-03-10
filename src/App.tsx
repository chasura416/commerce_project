import Router from "./router/Router";
import AuthProvider from "./context/auth/AuthContext";
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

const ErrorFallbackRender = ({error}: FallbackProps) => {
  return (
    <p className="mt-6 text-base leading-7 text-gray-600">{error.message}</p>  
  )
}

function App() {
  return (
    <>
      <ErrorBoundary fallbackRender={ErrorFallbackRender}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
