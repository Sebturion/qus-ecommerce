import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="container-signup">
      <div className="login-title">REGISTRAR</div>
      <div className="linea-title"></div>
      <form>
        <input className="Input-label" type="text" placeholder="Complete Name" required />
        <input className="Input-label" type="email" placeholder="E-mail" required />
        <div>
            <select className='Select-label'>
                <option>T.I</option>
                <option>C.C</option>
                <option>C.E</option>
            </select>
            <input className="Input-label2" type="number" placeholder="Document" required />
        </div>
        <input className="Input-label" type="number" placeholder="Cellphone" required />
        <input className="Input-label" type="password" placeholder="Password" required />
        <input className="Input-label" type="password" placeholder="Confirm Password" required />
        <div className="linea-login2"></div>
        <div className='bottom-btns-signup'>
            <input className="Input-submit" type="submit" value="REGISTRAR" />
            <Link className='links-login' to="/login">Ya tengo una cuenta</Link>
        </div> 
      </form>
    </div>
  );
};