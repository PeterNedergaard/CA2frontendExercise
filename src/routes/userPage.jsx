import React, {useEffect, useState} from 'react';
import ApiFacade from "../apiFacade";
import Owners from "./owners";
import URL from "../settings";


const UserPage = props => {





    return (
        <div>

            {ApiFacade.getRoles() === "user" ?
                (
                    <Owners/>
                )
                :
                (<h1>You are not a user</h1>)
            }
        </div>
    );
};


export default UserPage;