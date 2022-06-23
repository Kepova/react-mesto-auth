import React from 'react';
import { Route, Link } from 'react-router-dom';

function PopupWithForm({ title, name, nameButton, children, isOpen, onClose, onSubmit, loggedIn }) {

    const formloggedInClassName = ` ${loggedIn ? `popup popup_for_${name} ${isOpen ? 'popup_opened' : ''}` : `popup_for_${name}`}`
    return (
        <div className={formloggedInClassName}>
            <div className={`${loggedIn ? 'popup__container' : 'popup__container-login'}`} >
                <form className={`popup__form popup__form-${name}`} name={`${name}-form`} onSubmit={onSubmit} noValidate>
                    <h2 className={`popup__title ${!loggedIn && 'popup__title-login'}`}>{title}</h2>
                    {children}
                    <button type="submit" className={`${loggedIn ? 'popup__save-button' : 'popup__button-login'}`}>{nameButton}</button>

                    <Route path="/sign-up">
                        <Link to='/sign-in' className='popup__save-button-link'>Уже зарегистрированы? Войти</Link>
                    </Route>
                </form>
                {loggedIn && <button type="button" className="popup__close-button" onClick={onClose}></button>}
            </div>
        </div>
    );
}

export default PopupWithForm;
