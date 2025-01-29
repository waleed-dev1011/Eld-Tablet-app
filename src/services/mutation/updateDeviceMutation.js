import { gql } from "@apollo/client";

export const UPDATE_DEVICE_MUTATION = gql`
  mutation Mutation($input: UpdateDeviceInput!) {
    updateDevice(input: $input) {
      id
      status
      vehicle {
        id
        registrationNumber
      }
    }
  }
`;
