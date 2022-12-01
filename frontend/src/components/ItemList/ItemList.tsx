import React from 'react'
import TableRow from '@mui/material/TableRow'
import { Button } from '@material-ui/core'
import TableCell from '@mui/material/TableCell'
import { ApolloQueryResult, useMutation } from '@apollo/client'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { UPDATE_INVOICE } from '../../api/queries'

interface Props {
  invoice: any
  refetch: (
    variables?:
      | Partial<{
          status: string
        }>
      | undefined,
  ) => Promise<ApolloQueryResult<any>>
}

const MySwal = withReactContent(Swal)

export const ItemList: React.FC<Props> = ({ invoice, refetch }) => {
  const [onUpdateHandler] = useMutation(UPDATE_INVOICE)

  const updateInvoice = (event: { currentTarget: { id: any } }) => {
    onUpdateHandler({ variables: { uuid: event.currentTarget.id } })

    MySwal.fire('Message', 'updated successfully', 'info')
    refetch()
  }

  return (
    <TableRow>
      <TableCell key={'invoice_number'}>{invoice.invoice_number}</TableCell>

      <TableCell key={'vendor_name'}>{invoice.vendor_name}</TableCell>

      <TableCell key={'remittance_address'}>
        {invoice.remittance_address}
      </TableCell>

      <TableCell key={'invoice_total'}>{invoice.total}</TableCell>

      <TableCell key={'invoice_date'}>{invoice.invoice_date}</TableCell>

      <TableCell key={'due_date'}>{invoice.due_date}</TableCell>

      <TableCell key={'action_button'}>
        <Button
          variant="contained"
          color="success"
          id={invoice.uuid}
          onClick={updateInvoice}
        >
          Approve
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default ItemList
