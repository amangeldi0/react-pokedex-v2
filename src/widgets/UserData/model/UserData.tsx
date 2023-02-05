import { useParams } from "react-router-dom";

import { getUsersFromFirestore } from "features/UserList/api/getUsersFromFirestore";

import { Layout } from "shared/ui/Layout/Layout";
import { UserInfo } from "features/UserInfo/model/UserInfo";
import { UsersHeader } from "entities/UsersHeader/model/UsersHeader";
import { UserPokemons } from "features/UserPokemons/model/UserPokemons";
import { NotFind } from "entities/NotFind/model/NotFind";
import { Loading } from "entities/Loading/model/Loading";


export const UserData = () => {

    const { userUID } = useParams()

    const { users, loading, error } = getUsersFromFirestore()

    if (!users.includes(userUID)){
        return <NotFind />
    }

    if (loading){
        return <Loading />
    }

    if (error){
        return <NotFind />
    }

    return (
        <div>
            <UsersHeader/>
            <Layout>
               <UserInfo  uid={userUID}/>
               <UserPokemons uid={userUID} delButton={false}/>
            </Layout>
        </div>
    );
};
