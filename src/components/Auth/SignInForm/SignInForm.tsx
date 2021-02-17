import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { RootState } from "../../../redux/root-reducer";
import { signInRequest } from "../../../redux/user/user.actions";
import { UserState } from "../../../redux/user/user.reducer";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SendIcon from "@material-ui/icons/Send";
import { Button } from "@material-ui/core";

interface loginValues {
  email: string;
  password: string;
}

const loginSchema = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8),
});

const initialLoginValues: loginValues = {
  email: "",
  password: "",
};

const SignInForm = ({ Classes }: any) => {
  const state: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialLoginValues}
      validateOnBlur={true}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        // authUpdatings.login({ email: values.email, password: values.password });
        dispatch(
          signInRequest({ email: values.email, password: values.password })
        );
      }}
    >
      {(formikProps) => (
        <Form className={Classes.Form} autoComplete="Off">
          <div className={Classes.InputContainer}>
            <div className={Classes.IconContainer}>
              <AccountCircleOutlinedIcon color="action" fontSize="default" />
            </div>
            <div className={Classes.Field}>
              <Field
                type="email"
                name="email"
                placeholder="Your email ..."
                className={Classes.InputText}
              />
            </div>
          </div>
          <ErrorMessage
            name="email"
            component="span"
            className={Classes.ErrorText}
          />
          <div className={Classes.InputContainer}>
            <div className={Classes.IconContainer}>
              <AccountCircleOutlinedIcon color="action" fontSize="default" />
            </div>
            <div className={Classes.Field}>
              <Field
                type="password"
                name="password"
                placeholder="Your password ..."
                className={Classes.InputText}
              />
            </div>
          </div>
          <ErrorMessage
            name="password"
            component="span"
            className={Classes.ErrorText}
          />
          <div className={Classes.ButtonContainer}>
            <Button
              // type="submit"
              // disabled={formikProps.isSubmitting}
              onClick={() => formikProps.handleSubmit()}
              color="primary"
              variant="contained"
              size="large"
              startIcon={<SendIcon />}
              className={Classes.SubmitButton}
            >
              {state.loading ? "Loading ..." : "Submit"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
