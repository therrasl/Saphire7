import { Button, Form, Input } from "antd";
import s from "./loginForm.module.scss";

export const LoginForm = () => {
  return (
    <Form className={s.form}>
      <h2>Please Login</h2>

      <Input className={s.formInput} type="text" />

      <Input className={s.formInput} type="password" name="password" />

      <Button className={s.formBtn} color="primary" type="primary">
        Login
      </Button>
    </Form>
  );
};
