import React from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField";
import { ForgotPasswordComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Forgot Password Page">
      <ForgotPasswordComponent>
        {forgotPassword => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async data => {
              const response = await forgotPassword({
                variables: data
              });
              console.log(response);
              Router.push("/check-email");
            }}
            initialValues={{
              email: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <button type="submit">forgot password</button>
              </form>
            )}
          </Formik>
        )}
      </ForgotPasswordComponent>
    </Layout>
  );
};
