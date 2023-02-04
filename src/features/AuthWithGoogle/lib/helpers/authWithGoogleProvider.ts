import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import {
    doc,
    query,
    where,
    setDoc,
    getDocs,
    collection,
} from 'firebase/firestore';

import { auth, db } from 'shared/lib/firebase';

export const authWithGoogleProvider = () => {

    const [signInWithGoogle, googleLoading, googleError] = useSignInWithGoogle(auth);

    const toWithGoogle = async (): Promise<void> => {
        const res = await signInWithGoogle();

        if (res !== undefined){

            const user = res.user;
            const q = await query(collection(db, 'users'), where('uid', '==', user.uid));
            const docs = await getDocs(q);

            if (docs.docs.length === 0) {
                await setDoc(doc(db, 'users', `${user.uid}`), {
                    uid: user.uid,
                    firstName: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    pokemons: []
                });
            }
        }
    };

    return {
        toWithGoogle,
        googleLoading,
        googleError
    };
};