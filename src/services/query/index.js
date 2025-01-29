import { gql } from "@apollo/client";

export const GET_IVOICES=gql`
query GetInvoices {
  getInvoices {
    id
  }
}`