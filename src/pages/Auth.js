import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom/cjs/react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utilis/consts';
import { Context } from '../index';
import '../style/all.css';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const { user } = useContext(Context);

  const handleAuth = () => {
    user.setIsAuth(true);
    alert('Вы зашли')
  };

  return (
    <Container>
      {isLogin ? (
        <div className="container">
          <div className="main">
            <form className="form">
              <h3>Войти</h3>
              <fieldset className="fieldset">
                <label htmlFor="">E-mail</label>
                <input placeholder="Введите почту" />
              </fieldset>
              <fieldset className="fieldset">
                <label htmlFor="">Пароль</label>
                <input placeholder="Введите паоль" />
                <button className="fieldset" type="button" onClick={handleAuth}>
                  Войти
                </button>
              </fieldset>
              <p>
                У вас нету аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>{' '}
              </p>
            </form>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="main">
            <form className="form">
              <h3>Регистрация</h3>
              <fieldset className="fieldset">
                <label htmlFor="">E-mail</label>
                <input type="email" placeholder="Введите почту" />
              </fieldset>
              <fieldset className="fieldset">
                <label htmlFor="">Полное имя</label>
                <input type="text" placeholder="Введите полное имя" />
              </fieldset>
              <fieldset className="fieldset">
                <label htmlFor="">Пароль</label>
                <input type="password" placeholder="Введите пароль" />
              </fieldset>
              <fieldset className="fieldset">
                <label htmlFor="">Подтвердите пароль</label>
                <input type="password" placeholder="Подтвердите пароль" />
                <Button className="fieldset" type="button" onClick={handleAuth}>
                  Зарегистрироваться
                </Button>
              </fieldset>
              <p>
                У вас уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
              </p>
            </form>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Auth;
