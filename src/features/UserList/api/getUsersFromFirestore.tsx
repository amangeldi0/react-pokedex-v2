import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from 'shared/lib/firebase';
import { useUser } from 'shared/lib/hooks/useUser';

interface getUsersFromFirestoreReturn {
    users: string[];
    loading: boolean;
    error: string | boolean;
}

export const getUsersFromFirestore = (): getUsersFromFirestoreReturn => {
    const [users, setUsers] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | boolean>(false);

    const { user } = useUser();

    const querySnapshot = getDocs(collection(db, 'users'));

    const settingUsers = (uid: string) => {
        setUsers((prevState) => [...prevState, uid]);
    };

    useEffect(() => {
        querySnapshot.then((data) => data.forEach((doc) => {
            settingUsers((doc.id, ' => ', doc.data().uid));
        })).then(() => setLoading(false)).catch((err) => setError(err));
    }, []);

    const filterUsers = users.filter((uid) => user?.uid !== uid);

    return {
        users: filterUsers,
        loading,
        error,
    };
};
