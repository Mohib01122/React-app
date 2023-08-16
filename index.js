import React from "react";
import ReactDOM from "react-dom";
import Cards from './Cards';
import './index.css';
import sData from './SData';

ReactDOM.render(
    <>
    <h1>Users</h1>     
    {sData.map((val) => {
    return (
        <>
        <Cards
        avatar={val.avatar}
        first_name={val.first_name}
        last_name = {val.last_name}
        email ={val.email}
       /> 
       </>
    )
     } )};
    </>
    ,
    document.getElementById('root')
);