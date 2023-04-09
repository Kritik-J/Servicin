import { useAppSelector } from "./useReduce";

const useAuth = () => {
  const { 
    error,
    isLoading,
    isAuth,
    user,
   } = useAppSelector((state) => state.auth);
   
  return {
    error,
    isLoading,
    isAuth,
    user,
  }
};

export default useAuth;
