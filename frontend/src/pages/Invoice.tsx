import React from 'react'
import styled from 'styled-components'

const InvoiceContainer = styled.div`
  margin-left: 200px;
  margin-top: 60px;
  padding: 25px;
  overflow: scroll;
`

const Home: React.FC = () => {
  return (
    <InvoiceContainer>
      {' '}
      <h2>Sidebar</h2>
      <p>This sidebar is of full height (100%) and always shown.</p>
      <p>Scroll down the page to see the result.</p>
    </InvoiceContainer>
  )
}

export default Home
