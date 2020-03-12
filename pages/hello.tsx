import * as React from "react";

import { HelloComponent } from "../generated/apolloComponents";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout title="hello">
      <HelloComponent>
        {({ data }) => (
          <div>{data && data.Hello ? data.Hello : "loading..."}</div>
        )}
      </HelloComponent>
    </Layout>
  );
};
