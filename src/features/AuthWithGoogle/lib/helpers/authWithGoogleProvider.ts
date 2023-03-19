import {
    collection,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from 'firebase/firestore';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, db } from 'shared/lib/firebase';

interface authWithGoogleProvider {
    toWithGoogle: () => Promise<void>,
    googleLoading: boolean,
    googleError: Error,

}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authWithGoogleProvider = (): authWithGoogleProvider => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [signInWithGoogle, _user, googleLoading, googleError] = useSignInWithGoogle(auth);

    const toWithGoogle = async (): Promise<void> => {
        const res = await signInWithGoogle();
        if (res !== undefined) {
            const user = await res.user;
            const q = await query(collection(db, 'users'), where('uid', '==', user.uid));
            const docs = await getDocs(q);

            if (docs.docs.length === 0) {
                await setDoc(doc(db, 'users', `${user.uid}`), {
                    uid: user.uid,
                    firstName: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    pokemons: [],
                });
            }
        }
    };

    return {
        toWithGoogle,
        googleLoading,
        googleError,
    };
};
