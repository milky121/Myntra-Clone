import './App.css';
import DataProvider from './context/DataProvider'
import {BrowserRouter,Routes,Route, } from 'react-router-dom';
import ManShope from './comp/manproduct/ManShope';
import Header from './comp/header/Header';
import Home from './comp/home/Home'
import WomanShop from './comp/womanproduct/WomanShop';
import KidsShop from './comp/kidsproduct/KidsShop';
import HomeLiving from './comp/home & living/HomeLiving';
import ProductItems from './comp/items/ProductItems'
import ProductMain from './comp/ProductDisplay/ProductMain';
import Bagitem from './comp/BagItems/BagItems';
import Footer from './comp/Footer/Footer';
// import AllProduct from './Aproducts/Allproduct/AllProduct'
import Wishlist from './comp/Wishlist/Wishlist'
import MyorderStatus from './comp/Order/MyOrdersStatus';
import MyOrders from './comp/Order/MyOrders';
import CancelOrders from './comp/Order/CancelOrders'

function App() {
  return (
    <BrowserRouter >
    <DataProvider>
    <Header/>
<Routes>
<Route path='/'  element={<Home/>}   />
<Route path='/men' element={<ManShope/>} />
<Route path='/women' element={<WomanShop/>} />
<Route path='/kids' element={<KidsShop/>} />
<Route path='/homeliving' element={<HomeLiving/>} />

<Route path='/item'  element={<ProductItems web="myntra" />} />

<Route path='/man' element={<ProductItems  category="Man"/>}  />

<Route path='/manshirt' element={<ProductItems   category2="Man Shirts"/>}   />

<Route path='/manTshirt' element={<ProductItems category2="Man Tshirts"/>} />

<Route path='/manJeans' element={<ProductItems category2="Man Jeans"/>} />

<Route path='/jeans&sportShoes' element={<ProductItems category="Sports" category2="Man Jeans"  />} />

<Route path='/manShorts'  />

<Route path='/manTshirt&sportsShoes' element={<ProductItems category="Sports" category2="Man Tshirts"/>} />

<Route path='/shoes' element={<ProductItems category2="Shoes"/>} />

<Route path='/sportsShoes' element={<ProductItems category="Sports"/>} />

<Route path='/sportsAll' element={<ProductItems category="Sports" category2="Sports"/>} />

<Route path='/sportsWear' element={<ProductItems category2="Sports"/>} />


<Route path='/watch' element={<ProductItems category="Watches"/>} />
<Route path='/watch&jewellery' element={<ProductItems category="Watches" category2="Jewellery" />} />

<Route path='/manshirt&watches' element={<ProductItems category="Watches" category2="Man Shirts"/>}   />

<Route path='/woman' element={<ProductItems  category="Woman"  />} />
<Route path='/kurtas' element ={<ProductItems  category2="Kurta"/>}/>
<Route path='/sarees' element ={<ProductItems  category2="Sarees"/>} />

<Route path='/jewellery' element ={<ProductItems  category2="Jewellery"/>} />

<Route path='/handbags' element ={<ProductItems  category2="Handbag"/>} />

<Route path='/flats&heels' element ={<ProductItems  category2="Flats & Heels"/>} />

<Route path='/dresses' element ={<ProductItems  category2="Dresses"/>} />

<Route path='/sareesBeauty' element ={<ProductItems category="Beauty" category2="Sarees"/>} />


<Route path='/kid' element={<ProductItems  category="Kids" />} />


{/* <Route path='/kids teenswear' element /> */}


<Route path='/homeProduct' element={<ProductItems category="Home"/>}  />

<Route path='/beauty' element={<ProductItems  category="Beauty"/>} />

<Route path="/man/:id" element={<ProductMain/>} />
<Route path="/Bag" element={<Bagitem/>} />
<Route path="/wishlist" element={<Wishlist/>}/>
<Route  path='/myorder' element={<MyorderStatus/>} />
<Route  path='/myorderlist' element={<MyOrders/>} />
<Route path='/ordercancel' element={<CancelOrders/>}/>
</Routes>

<Footer/>
     </DataProvider>
     </BrowserRouter>
  );
}

export default App;
