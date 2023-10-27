import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="container-login">
      <div className="login-title">INGRESAR</div>
      <div className="linea-title"></div>
      <form>
        <input className="Input-label" type="email" placeholder="E-mail" required />
        <input className="Input-label" type="password" placeholder="Password" required />
        <div className="linea-login2"></div>
        <div className='bottom-btns'>
            <input className="Input-submit" type="submit" value="INGRESAR" />
            <div className="linea-login3">o</div>
            <Link className="Input-submit" to="/signup">REGISTRAR</Link>
            <Link className='links-login' to="">Recuperar Contraseña</Link>
        </div>
        
      </form>
    </div>
  );
};