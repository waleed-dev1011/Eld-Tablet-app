import { gql } from "@apollo/client";

export const GET_LICENCES = gql`
  query GetLicenses {
    getLicenses {
      id
      client {
        firstName
        lastName
        organizationName
        email
      }
      invoices {
        invoiceNumber
        issuedOn
        amount
        paymentMethod {
          type
        }
      }
      device {
        type
      }
      licenseNumber
      plan
      subscriptionEnd
      subscriptionStart
    }
  }
`;
