// URL = https://space-debris-2022-q3.akqa.dk/Umbraco/Api/Order/ConfirmOrder

import React, { useState } from 'react';

// {
//     "Size_M3": Number,
//     "Weight_Kg": Number,
//     "PackageGuidString": "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32",
//     "PickupService": null
// }

export default function TestPostOrder() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const PackageGuidString = "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32"; // test package

    const [order, setOrder] = useState({
        "Size_M3": 30,
        "Weight_Kg": 30,
        "PackageGuidString" : "e5fe39cc-f2e0-4b8b-934f-3e13084b2c32",
        "PlanetGuidString" : null,
        "PickupService": {
            "Address": "test",
            "District" : "test"
        },
        "personalInformation": {
            "SID" : "test",
            "Alias" : "test",
            "Email" : "test"
        }
    })

    async function createPost(newPost) {
        const url = "https://space-debris-2022-q3.akqa.dk/Umbraco/Api/Order/ConfirmOrder";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: myHeaders,
            redirect: 'follow'
        });
        if (response.ok) {
            const data = await response.json();
            console.log("New post created: ", data);
        } else {
            const data = await response.json();
            console.log("Sorry, something went wrong", data);
        }
    }

  return (
    <div className='h-[100vh] flex items-center justify-center bg-galaxyPurple'>
        <button onClick={() => createPost(order)}>Click here</button>
    </div>
  )
}
