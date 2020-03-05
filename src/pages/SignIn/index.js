import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/fastfeet-logo.png';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        }
      );

      // Validation passed

      console.tron.log({ email, password });
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    }
  }
  return (
    <>
      <img src={logo} alt="Fastfeet" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>SEU E-MAIL</div>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <div>SUA SENHA</div>
        <Input name="password" type="password" placeholder="***********" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
