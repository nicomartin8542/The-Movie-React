/* eslint-disable no-unused-expressions */
const validaLogin = (values) => {
  let errors = {};

  //valido email
  !values.email
    ? (errors.email = "El email es obligatorio")
    : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ? (errors.email = "El email no es valido")
    : null;

  //Valido password
  !values.password
    ? (errors.password = "El password es oblitagorio")
    : values.password.length < 6
    ? (errors.password = "El password tiene que tener 6 caracteres")
    : null;

  return errors;
};

export default validaLogin;
