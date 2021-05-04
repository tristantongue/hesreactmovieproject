import React, { useState } from 'react';

const ratings = [
    {
        "id": 1,
        "name": ""
    },
    {
        "id": 2,
        "name": "G"
    },
    {
        "id": 3,
        "name": "PG"
    },
    {
        "id": 4,
        "name": "PG-13"
    },
    {
        "id": 5,
        "name": "R"
    }
]

function CheckBox(props) {

    console.log('hello checkbox props',props.filterschecked)


    return (
        <div>
            {
                ratings.map((value, index) => (
                    <div>
                    <input key={index} 
                    type="checkbox" 
                    onChange={() => props.handletoggle(value)} 
                    checked={props.filterschecked.indexOf(value) === -1 ? false : true}></input>
                    <span>{value.name === "" ? "Unrated" : value.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default CheckBox