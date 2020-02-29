import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Mutation
        mutation={gql`
          mutation {
            login(email: "test@test@gmail.com", password: "qqq") {
              id
              firstName
              lastName
              email
              name
            }
          }
        `}
      >
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate();
              console.log(response);
            }}
          >
            Call login mutation
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
