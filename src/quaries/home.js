import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
  query getHome {
    jobs {
      id
      title
      slug
      locationNames
      commitment {
        title
      }
      company {
        name
        slug
      }
      tags {
        id
        name
      }
    }
  }
`;
