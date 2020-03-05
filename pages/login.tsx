import React from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField";
import { LoginComponent } from "../generated/apolloComponents";

export default () => {
  return (
    <Layout title="Login Page">
      <LoginComponent>
        {login => (
          <Formik
            onSubmit={async (data, { setErrors }) => {
              const response = await login({
                variables: {
                  ...data
                }
              });
              console.log(response);
              if (response && response.data && !response.data.login) {
                setErrors({
                  email: "invalid login"
                });
                return;
              }
              Router.push("/");
            }}
            initialValues={{
              email: "",
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  component={InputField}
                />
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};
