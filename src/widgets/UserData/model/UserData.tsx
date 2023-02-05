import {useParams} from "react-router-dom";


import { Layout } from "shared/ui/Layout/Layout";
import { UserInfo } from "features/UserInfo/model/UserInfo";
import { UsersHeader } from "entities/UsersHeader/model/UsersHeader";
import { UserPokemons } from "features/UserPokemons/model/UserPokemons";

export const UserData = () => {

    const { userUID } = useParams()

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
