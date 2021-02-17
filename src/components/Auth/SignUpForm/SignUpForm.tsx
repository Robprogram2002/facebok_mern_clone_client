import React from "react";

import { Button } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

//Icons
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import SendIcon from "@material-ui/icons/Send";
import { UserState } from "../../../redux/user/user.reducer";
import { RootState } from "../../../redux/root-reducer";
import { signUpRequest } from "../../../redux/user/user.actions";

interface singUpValues {
  userName: string;
  email: string;
  password: string;
  confimPassword: string;
}

const singUpSchema = Yup.object({
  userName: Yup.string()
    .required("The user name is required")
    .min(3, "The user name must have aleats 3 characters"),
  email: Yup.string().email().required(),
  password: Yup.string().required().min(8),
  confimPassword: Yup.string().required("The confirm password is required"),
});

const initialSingUpValues: singUpValues = {
  userName: "",
  email: "",
  password: "",
  confimPassword: "",
};

const SignUpForm = ({ Classes }: any) => {
  const state: UserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialSingUpValues}
      validateOnBlur={true}
      validationSchema={singUpSchema}
      onSubmit={(values, actions) => {
        if (values.password !== values.confimPassword) {
          return alert("the password must match");
        } else {
          //envias los datos al servidor y rediriges a login
          dispatch(
            signUpRequest({
              email: values.email,
              password: values.password,
              userName: values.userName,
            })
          );
        }
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
                type="text"
                name="userName"
                placeholder="Your user name ..."
                className={Classes.InputText}
              />
            </div>
          </div>
          <ErrorMessage
            name="userName"
            component="span"
            className={Classes.ErrorText}
          />
          <div>
            <div className={Classes.InputContainer}>
              <div className={Classes.IconContainer}>
                <AccountCircleOutlinedIcon color="action" fontSize="default" />
              </div>
              <div className={Classes.Field}>
                <Field
                  type="email"
                  name="email"
                  className={Classes.InputText}
                  placeholder="Email"
                />
              </div>
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
                className={Classes.InputText}
                placeholder="Password"
              />
            </div>
          </div>
          <ErrorMessage
            name="password"
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
                name="confimPassword"
                className={Classes.InputText}
                placeholder="Confirm your password"
              />
            </div>
          </div>
          <ErrorMessage
            name="confimPassword"
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

export default SignUpForm;
