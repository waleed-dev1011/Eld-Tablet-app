import { gql } from "@apollo/client";

export const GET_LICENCE = gql`
query GetLicenses {
  getLicenses {
        plan
    subscriptionEnd
    subscriptionStart
    status
     billingType
    device {
      id
      vehicle {
        id
        registrationNumber
      }
    }
    invoices {
      id
      invoiceNumber
      amount
    }
  }
}
`;

