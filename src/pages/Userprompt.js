import React from 'react';
import { Link } from 'react-router-dom';

function Userprompt(){
    return(
        <div className="userprompt">
            <p>Enter Your Unique Customer Number</p>
            <input type="number" id="custno" name="userno" className="custno" placeholder="Customer Number"></input>
            <Link onClick={openPage} className="send" to="/watchlist">Sign In</Link>
        </div>
    )
}

export default Userprompt;

function openPage() {
    const custno = document.getElementById("custno").value;
    sessionStorage.setItem("userid", custno)
    var custid = sessionStorage.getItem("userid")
    console.log(custid)
}