import React from 'react';
import "./content.css";
function Websitecontent(){
    return(
    <div>
        <div className='table'>
       <table className='tb'>
        <tr >
            <th>S.no</th>
            <th>Reg No</th>
            <th>Name</th>
            <th>Dept</th>
            <th>College</th>
        </tr>
        <tr>
            <td>1</td>
            <td>92</td>
            <td>Raj</td>
            <td>CSE</td>
            <td>HITECH</td>
        </tr>
        <tr>
            <td>2</td>
            <td>92</td>
            <td>Raj</td>
            <td>CSE</td>
            <td>HITECH</td>
        </tr>
        <tr>
            <td>3</td>
            <td>89</td>
            <td>Singaram</td>
            <td>CSE</td>
            <td>HICET</td>
        </tr>
        <tr>
            <td>4</td>
            <td>42</td>
            <td>Deva</td>
            <td>CSE</td>
            <td>HITECH</td>
        </tr>
        <tr>
            <td>14</td>
            <td>142</td>
            <td>Jeeva</td>
            <td>IT</td>
            <td>HITECH</td>
        </tr>
       </table>
       </div>
       <div className='form'>
        <form>
        <h1 >Welcome</h1>
                    <h5>Login with Email</h5>
                    <label>Email</label>
                    <input type="email"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <h5>Forgot your Password?</h5>
                    <button id="login">LOGIN</button>
        </form>
       </div>
        
       
     </div>
    );
}
export default Websitecontent;