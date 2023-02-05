import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const useUser = () => {

    const [user, loading, error] = useAuthState(auth);

    return {
        user,
        loading,
        error
    }
}