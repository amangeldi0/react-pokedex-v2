import { useDocument } from "react-firebase-hooks/firestore";
import { useUser } from "shared/lib/hooks/useUser";
import { doc } from "firebase/firestore";
import { db } from "shared/lib/firebase";



export const useUserData = () => {

    const {user} = useUser()
    const [firestoreValue, firestoreLoading, firestoreError] = useDocument(
        doc(db, 'users', `${user?.uid}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return{
        firestoreValue,
        firestoreLoading,
        firestoreError
    }
}