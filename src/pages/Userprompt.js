import React, { useState } from 'react';

function Userprompt(){
    return(
        <div className="userprompt">
            <p>Enter Your Unique Customer Number</p>
            <input type="number" id="custno" name="userno" className="custno" placeholder="Customer Number"></input>
            <button onClick={openPage} className="send">Sign In</button>
        </div>
    )
}

export default Userprompt;

function openPage() {
    const custno = document.getElementById("custno").value;
    console.log(custno);
}