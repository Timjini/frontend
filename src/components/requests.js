import React from "react";

function Requests(props){
    return <div>
        <h1>Requests from API</h1>
        {props.requests.map((request) => {
            return <div key={request.id}>
                <h2>{request.address}</h2>
                <h3> {request.category}</h3>
                <h4> {request.status}</h4>
                <p> {request.description}</p>
                
                

                </div>
        } )}
    </div>;
}

export default Requests;