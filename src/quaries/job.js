import gql from "graphql-tag";

export const GET_JOB_DETAILS = gql`
  query getJob($input: JobInput!) {
    job(input: $input) {
      id
      title
      description
      tags {
        name
      }
      applyUrl
      commitment {
        title
      }
    }
  }
`;
