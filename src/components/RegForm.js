import React from "react";

export default function RegForm(props) {

  return (
    <div className="login_block">
      <h2 className="page_heading">Создать новый аккаунт</h2>
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
          <label htmlFor="username" >Имя</label>
          <input
            className="input_control"
            type="text"
            id="username"
            placeholder="Имя"
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
            value="Создать"
            onClick={props.onAcountFormSubmit} />
          <input
            type="button"
            value="Назад"
            onClick={props.onRegClick} />
        </div>
      </form>
    </div>
  )
}