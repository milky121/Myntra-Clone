import './Bag.css'
import AllProduct from '../../Aproducts/Allproduct/AllProduct';
import { useContext } from 'react';
import { MyContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';

const  Bagitem =()=>{
const {allproduct,getTotalCartAmount,cartItems,removeFromCart}=useContext(MyContext)
  
    
    return(
        <div className="cartitem">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Titel</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
          {allproduct.map((e)=>{
            if(cartItems[e.id]>0){
             
                  return   <div>
                <div className="cartitem-format cartitems-format-main">
                    <img src={e.url} alt="" className="cartitem-product-icon"/>
                    <p>{e.title}</p>
                    <p>RS{e.price}</p>
                    <button className="cartitem-quantity">{cartItems[e.id]}</button>
                    <p>{e.price*cartItems[e.id]}</p>
                 <h1 onClick={()=>{removeFromCart(e.id)}} >X</h1>
                </div>
                <hr/>
                </div>
            }
            
          })}
          <div className="cartitem-down">
            <div className="cartitem-total">
              <div className='btn'>
                  <Link to="/myorder"><button >PLACE ORDER</button></Link>
                  </div>
              
            </div>
            <div className="cartitem-promocode">
              <p>If you have a promo code, Enter it here</p>
              <div className="cartitem-promobox">
                <input type="text" placeholder="Promo code" />
                <button onClick={window.scrollTo(0,0)}>Sumbit</button>
              </div>
            </div>

          </div>

          <div className="cartitem-total">
              <h1>Bag Totals</h1>
              <div>
                <div className="cartitem-total-item">
                  <p>Subtatal</p>
                  <p>RS{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                  <p>Shopping</p>
                  <p>Free</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                  <h3>Total</h3>
                  <h3>RS{getTotalCartAmount()}</h3>
                </div>
              </div>  
            </div>
            
        </div>
    )
    
}

export default Bagitem;