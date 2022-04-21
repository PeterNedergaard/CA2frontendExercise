import React, {useEffect, useState} from 'react';
import URL from "../settings";
import ApiFacade from "../apiFacade";
import "../owners.css"



const Owners = props => {

    const [owners, setOwners] = useState([]);

    useEffect(() => {

        const fetchOwners = async() => {
            const ownerList = await ApiFacade.getOwners()

            setOwners(ownerList);
        }

        fetchOwners();

    }, [])



    return (
        <div>
            <h1 className="title">Boat owners</h1>

            <div className="owner-container">
                <div className="table-container owner-table">
                    <table className="table table-light table-striped table-style">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Owner name</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{owners[0]}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{owners[1]}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
};

export default Owners;