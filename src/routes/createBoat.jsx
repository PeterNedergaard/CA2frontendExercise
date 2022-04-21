import React, {useEffect, useState} from 'react';
import ApiFacade from "../apiFacade";
import "../createBoat.css"

const CreateBoat = props => {

    const [brand, setBrand] = useState("");
    const [make, setMake] = useState("");
    const [name, setName] = useState("");
    const [clicked, setClicked] = useState(false);
    const [successText, setSuccessText] = useState("")


    const clickHandler = () => {
        ApiFacade.createBoat(brand, make, name);

        setSuccessText("BOAT CREATED");
    }


    return (
        <div>
            <h1 className="title">Create boat</h1>

            <div className="container-container">
                <div className="create-container">

                    <div>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" onChange={event => {setBrand(event.target.value)}}
                               className="form-control" id="brand" placeholder="Enter brand"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="make">Make</label>
                        <input type="text" onChange={event => {setMake(event.target.value)}}
                               className="form-control" id="make" placeholder="Enter make"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={event => {setName(event.target.value)}}
                               className="form-control" id="name" placeholder="Enter name"/>
                    </div>
                    <br/>
                    <button className="btn btn-primary login-element" onClick={clickHandler}>Create</button>
                    <br/>

                    <p className="success-text">{successText}</p>
                </div>

            </div>
        </div>
    );
};


export default CreateBoat;