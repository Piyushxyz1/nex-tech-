
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    toast.error('You Must be logged in to continue')
   
      return <Navigate to="/login" replace />;

  
  }

  return children;
};

export default ProtectedRoute;

