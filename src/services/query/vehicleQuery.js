import { gql } from "@apollo/client";

export const GET_VEHICLES=gql`
query Query {
  getVehicles {
    id
    registrationNumber
    devices {
      id
      type
    }
  }
}
    `

