import React from "react";

export default function AuthForm(props) {

  return (
    <div className="login_block">
      <h2 className="page_heading">Добро пожаловать!</h2>
      <form>
        <div className="form_group">
          <label htmlFor="email" >Email</label>
          <input
            className="input_control"
            type="text"
            id="email"
            placeholder="Электронная почта"
            autoComplete="off"
            onChange={props.onFieldChange}
          />
        </div>
        <div className="form_group">
          <label htmlFor="password">Пароль</label>
          <input
            className="input_control"
            type="password"
            id="password"
            placeholder="Пароль"
            autoComplete="off"
            onChange={props.onFieldChange}
          />
        </div>
        <div className="form_group_submit">
          <input
            type="submit"
            value="Войти"
            onClick={props.onFormSubmit} />
          <input 
            type="button"
            value="Создать новый аккаунт"
            onClick={props.onRegClick} />
        </div>
      </form>
    </div>
  )
}