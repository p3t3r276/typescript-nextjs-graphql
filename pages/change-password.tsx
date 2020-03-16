import React from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField";
import { ChangePasswordComponent } from "../generated/polloComponents";
import MyContext from "../interfaces/MyContext";

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Layout title="Register Page">
      <ChangePasswordComponent>
        {changePassword => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async data => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token
                  }
                }
              });
              console.log(response);
              Router.push("/check-email");
            }}
            initialValues={{
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  component={InputField}
                />
                <button type="submit">change password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordComponent>
    </Layout>
  );
};

ChangePassword.getInitialProps = ({ query: { token } }: MyContext) => {
  return { token };
};

export default ChangePassword;
