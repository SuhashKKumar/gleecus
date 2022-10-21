import React, { useState } from 'react'
import OrdersAndEpisodes from '../OrdersAndEpisodes/OrdersAndEpisodes'
import PreMain from '../premain/PreMain'
import SentNav from '../sentNav/SentNav'
import Table from '../Table/Table'

const Sent = () => {
    const [sent, setSent]= useState(true)
  return (
    <div>
    <PreMain sent={sent} />
    <SentNav/>
    <OrdersAndEpisodes/>
    <Table/>
    </div>
  )
}

export default Sent