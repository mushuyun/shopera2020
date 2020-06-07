import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../orderManage/orderActions';
import "../../styles/user.css";

function Order(props) {

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
              <h3>
                Shipping
              </h3>
              <div>
                  {order.shipping.firstName}, {order.shipping.lastName},
                  {order.shipping.streetAddress}, {order.shipping.aptNumber},
                  {order.shipping.cityName}, {order.shipping.state},
                  {order.shipping.zipCode}
              </div>
              <div>
                {order.createdAt}, {order.updatedAt}
              </div>
        </div>
    <div>
      
          
           <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
                </h3>
                <div>
                  Price
                </div>
              </li>
              {
                // order.orderItems.length === 0 ?
                //   <div>
                //     Cart is empty
                //   </div>
                //   :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        ${item.price}
                      </div>
                    </li>
                  )
              }
            </ul>
           </div>
         </div>
        {/* <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {loadingPay && <div>Finishing Payment...</div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
              }
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>${order.itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${order.shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${order.taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${order.totalPrice}</div>
            </li>
          </ul> */}



        </div>

      </div> 
    </div>

}


export default Order;