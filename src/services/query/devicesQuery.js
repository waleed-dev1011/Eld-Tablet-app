import { gql } from "@apollo/client";

export const GET_DEVICES = gql`
  query Query {
    getDevices {
      type
      number
      status
      id
      name
      vehicle {
        registrationNumber
      }
    }
  }
`;
