import { gql } from "@apollo/client";

export const GET_GSMDATA = gql`
  query GetGSMData($phoneNumber: String!) {
    getGSMData(phoneNumber: $phoneNumber) {
      latitude
      longitude
    }
  }
`;
