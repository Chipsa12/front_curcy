import React, {useState} from "react";
import FormField from '../FormField/FormFeild'

type FormProps = {
  onChangeMessage: (message: string) => void;
}

const Form = (props: FormProps): React.ReactElement =>{
  const {onChangeMessage} = props;
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLoginInput = (ev: React.SyntheticEvent<HTMLInputElement>) =>{
    const { currentTarget: {value} } = ev;

    setLogin(value);
  };

  const handleChangePasswordInput = (ev: React.SyntheticEvent<HTMLInputElement>) =>{
    const { currentTarget: {value} } = ev;

    setPassword(value);
  };

  const handlerSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (login !== '' && password !== '') {
      onChangeMessage('авторизовался');
      return;
    }

    onChangeMessage('Ошибка');
  };

  return(
    <form onSubmit={handlerSubmit}>

      <FormField className={'formfield_login'} name={'Логин'} placeholder={'Логин'} value={login} onChange={setLogin} />
      <FormField className={'formfield_password'} name={'Пароль'} type={'password'} placeholder={'Пароль'} value={password} onChange={setPassword} />

      <button type='submit' onSubmit={handlerSubmit}>Авторизоваться</button>
    </form>
  );
};

export default Form
