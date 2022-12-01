import React, { useEffect } from 'react'
import styled from 'styled-components'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useQuery } from '@apollo/client'
import { GET_ALL_INVOICE, INVOICE_CREATED } from '../api/queries'
import ItemList from '../components/ItemList/ItemList'

const InvoiceContainer = styled.div`
  margin-left: 200px;
  margin-top: 60px;
  padding: 25px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Invoice: React.FC = () => {
  const { data, loading, error, refetch, subscribeToMore } = useQuery(
    GET_ALL_INVOICE,
    {
      variables: { status: 'pending' },
    },
  )

  useEffect(() => {
    subscribeToMore({
      document: INVOICE_CREATED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newInvoice = subscriptionData.data.invoiceCreated

        return {
          getAllInvoices: [...prev.getAllInvoices, newInvoice],
        }
      },
    })
  }, [subscribeToMore])

  if (loading) return <div>{'Loading...'}</div>

  if (error) return <div>{error.message}</div>

  return (
    <InvoiceContainer>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <h2 style={{ textAlign: 'center', paddingBottom: '25px' }}>
          List of Pending Invoices
        </h2>

        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell key={'invoice_number'}>Invoice Number</TableCell>
                <TableCell key={'vendor_name'}>Vendor Name</TableCell>
                <TableCell key={'remittance_address'}>Vendor Address</TableCell>
                <TableCell key={'invoice_total'}>Invoice Total</TableCell>
                <TableCell key={'invoice_date'}>Invoice Date</TableCell>
                <TableCell key={'due_date'}>Due Date</TableCell>

                <TableCell key={'action_button'} style={{ minWidth: 100 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.getAllInvoices.map((invoice: any) => {
                return <ItemList invoice={invoice} refetch={refetch} />
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </InvoiceContainer>
  )
}

export default Invoice
