import { gql } from '@apollo/client'

export const GET_ALL_INVOICE = gql`
  query getInvoices($status: String!) {
    getAllInvoices(status: $status) {
      uuid
      invoice_number
      vendor_name
      remittance_address
      total
      invoice_date
      due_date
    }
  }
`

export const UPDATE_INVOICE = gql`
  mutation updateInvoice($uuid: ID!) {
    updateInvoice(uuid: $uuid) {
      uuid
    }
  }
`

export const INVOICE_CREATED = gql`
  subscription invoiceCreated {
    invoiceCreated {
      uuid
      invoice_number
      vendor_name
      remittance_address
      total
      invoice_date
      due_date
    }
  }
`
