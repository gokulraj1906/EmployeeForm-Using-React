import React, { useMemo, useState } from "react";
function Footer(){
   const[number,setNumber]=useState(0);
   function SquareNum(num)
   {
    console.log("calculation successful")
    return Math.pow(num,4)
    
   }
   const result=useMemo(()=>SquareNum(number),[number]);
   return(
    <div>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}></input>
        <h1>Square of the number:{result}</h1>
    </div>
   )
}
export default Footer;