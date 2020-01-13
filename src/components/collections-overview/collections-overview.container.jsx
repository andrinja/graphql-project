import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionsOverview from "./collection-overview.component";
import Spinner from "../spinner/spinner.component";

// constance
const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, error, data }) => {
      console.log({ loading });
      console.log({ error });
      console.group({ data });
      if (loading) return <Spinner />;
      return <CollectionsOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionsOverviewContainer;
