import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import Checkout from './Checkout'
import FooterPagePro from './Footer'
const Cart = () => {
  const [items, setItems] = useState([])
  const [run, setRun] = useState(false)

  const noItemsMessage = () => (
    <h3 className="border border-warning p-3 my-4 h3 rounded shadow text-center">
      You haven't selected any room yet <br />
      <br />{' '}
      <Link to="/" className="text-info font-weight-bold h4">
        Opt your room
      </Link>
    </h3>
  )

  return (
    <Layout title="" description="" className="">
      <div className="row my-2">
        <div className="col-4 offset-1">
          <div className="cart-product-details">
            {items.length > 0 ? '' : noItemsMessage()}
          </div>
        </div>
        <div className="col-5 offset-1">
          <div className="my-4 card p-3">
            <h2 className="my-2 p-3 border rounded shadow text-warning text-center">
              Your selected Rooms
            </h2>
            <hr />
            <Checkout products={items} setRun={setRun} run={run} />
          </div>
        </div>
      </div>
      <FooterPagePro />
    </Layout>
  )
}

export default Cart
