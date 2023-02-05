import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "shared/lib/firebase";

export const useUserDataWithUid = (uid: string) => {

    const [firestoreValue, firestoreLoading, firestoreError] = useDocument(
        doc(db, 'users', `${uid}`),
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