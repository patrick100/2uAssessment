import React, { useState } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { post } from '../api/client'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const HomeContainer = styled.div`
  margin-left: 200px;
  margin-top: 100px;
  padding: 25px;
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MySwal = withReactContent(Swal)

const Home: React.FC = () => {
  const [inputs, setInputs] = useState({
    invoice_number: '',
    total: 0,
    currency: 'USD',
    invoice_date: '',
    due_date: '',
    vendor_name: '',
    remittance_address: '',
  })

  function handleChange(e: any) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit() {
    const response = await post({
      path: 'invoice',
      data: inputs,
    })

    const { message } = await response.json()

    MySwal.fire('Message', message, 'info')
  }

  return (
    <HomeContainer>
      <Grid
        container
        direction={'column'}
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <h2>Create Invoice</h2>
        </Grid>

        <Grid item>
          <TextField
            name="invoice_number"
            onChange={handleChange}
            value={inputs.invoice_number}
            label="Invoice Number"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            name="total"
            onChange={handleChange}
            value={inputs.total}
            label="Total"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            name="currency"
            onChange={handleChange}
            value={inputs.currency}
            label="Currency"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            name="invoice_date"
            onChange={handleChange}
            value={inputs.invoice_date}
            label="Invoice Date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="due_date"
            onChange={handleChange}
            value={inputs.due_date}
            label="Due Date"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item>
          <TextField
            name="vendor_name"
            onChange={handleChange}
            value={inputs.vendor_name}
            label="Vendor Name"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            name="remittance_address"
            onChange={handleChange}
            value={inputs.remittance_address}
            label="Remittance Address"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </HomeContainer>
  )
}

export default Home
