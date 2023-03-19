import { doc } from 'firebase/firestore';
import { useDocument } from 'react-firebase-hooks/firestore';
import { db } from 'shared/lib/firebase';
import { useUser } from 'shared/lib/hooks/useUser';

export const useUserData = () => {
    const { user } = useUser();
    const [firestoreValue, firestoreLoading, firestoreError] = useDocument(
        doc(db, 'users', `${user?.uid}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        },
    );

    return {
        firestoreValue,
        firestoreLoading,
        firestoreError,
    };
};
