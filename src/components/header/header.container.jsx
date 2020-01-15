import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Header from "./header.component";

// graphQL query
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

// because of the client we are looking for the query
// GET_CART_HIDDEN on the local cache
const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {({ data: { cartHidden } }) => <Header hidden={cartHidden} />}
  </Query>
);
export default HeaderContainer;
