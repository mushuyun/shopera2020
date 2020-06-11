import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "./../productManage/crudActions";
import { detailsProduct } from "./../productManage/crudActions";


let history = useHistory();
function Product(props) {
    
  // const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);
  
  async function addToCart(productId) {
    
    var e = document.getElementById("itemQty");

    let cart = [];
    if (localStorage.getItem("cart") !== null) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } 
    let alreadyExists = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i]["product"]["_id"] === productId) {
        alreadyExists = true;
        cart[i]["qty"] += 1;
        break;
      } 
    }
    if (!alreadyExists) {
      cart.push({"product": product, "qty": parseInt(e.options[e.selectedIndex].value)});
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // window.location.replace("/cart");
    history.push("/cart");
  } 

  return <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product" ></img>
            </div>
            <div className="details-info">
              <ul>
                <li className="details-name">
                  <h3>{product.name}</h3>
                </li>
                <li>
                  {product.rating} Stars ({product.numReviews} Reviews)
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div className="desc">
                    {product.description}
                  </div>
                </li>
              </ul>
            </div>
            <div className="details-action">
        <ul>
          <li>
            Price: {product.price}
          </li>
          <li>
            Status: {product.status}
          </li>
          <li>
            Qty: <select id="itemQty">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </li>
          <li>
              <button className="button primary" id="add" onClick={() => addToCart(product._id)}
              >Add to Cart</button>
          </li>
        </ul>
      </div>
          </div>
        )
    }

  </div>
}
export default Product;