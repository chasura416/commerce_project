interface AuthorizationProps {
  redirectTo: string;
  children: React.ReactNode;
}
const isAuthenticated: string | null = localStorage.getItem('token');

const Authorization = ({
  redirectTo,
  children,
}: AuthorizationProps) => {
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to={redirectTo} />;
  }
};