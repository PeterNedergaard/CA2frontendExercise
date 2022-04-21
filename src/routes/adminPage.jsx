import React from 'react';
import ApiFacade from "../apiFacade";
import CreateBoat from "./createBoat";

const AdminPage = () => {

        return (
            <div>
                {ApiFacade.getRoles() === "admin" ?
                    (
                        <CreateBoat/>
                    )
                    :
                    (<h1 className="title">You are not an admin</h1>)
                }
            </div>
        );
};


export default AdminPage;