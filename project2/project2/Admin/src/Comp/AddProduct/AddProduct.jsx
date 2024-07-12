import React, { useState } from "react"
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'

const AddProduct=()=> {
    const [image,setImage] = useState(false);
    const [image2,setImage2] = useState(false);

    const [productDetails, setProductDelails] = useState({
        title:"",
        web:"",
        url:"",
        url2:"",
        productCompany:"",
        category:"",
        category2:"",
        price:"",
        mrp:"",
        discount:""

    })

    const imageHandler =(e)=>{
        setImage(e.target.files[0]);
    }
    
    const imageHandler2 =(e)=>{
        setImage2(e.target.files[0]);
    }

    const changeHandler=(e)=>{
        setProductDelails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product= async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);  

        let formData2 = new FormData();
        formData2.append('product',image2);
    
        await fetch('http://localhost:5000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((res) => res.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
            product.url = responseData.Image_url;
            console.log(product);

                
        await fetch('http://localhost:5000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
           
            body:formData2,
          

        }).then((res) => res.json()).then((data)=>{responseData=data});

        if(responseData.success)
        {
          
            product.url2 = responseData.Image_url2;

        }
            await fetch('http://localhost:5000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',

                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }

  return (
    <div className="add-product">
     <div className="addproduct-itemfiles">
        <p>Product Titel</p>
        <input value={productDetails.title} onChange={changeHandler}  type="text" name="title" placeholder="Type Here"/>
     </div>
     <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>MRP</p>
            <input value={productDetails.mrp} onChange={changeHandler}  type="text" name="mrp" placeholder="Type Here"/>
        </div>
        <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Type Here"/>
        </div>
        <div className="addproduct-itemfield">
            <p>Discount(%)</p>
            <input value={productDetails.discount} onChange={changeHandler} type="text" name="discount" placeholder="Type Here"/>
        </div>
     </div>
     
     <div className="addproduct-price">
        <div className="addproduct-itemfield">
        <p>Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
        <option>--Select--</option>
            <option value="Moman">Woman</option>
            <option value="Man">Man</option>
            <option value="Kids">Kids</option>
            <option value="Watches">Watches</option>
            <option value="Sports">Sports</option>
            <option value="Beauty">Beauty</option>
            <option value="Home">Home</option>


        </select>
        </div>
        <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category2} onChange={changeHandler} name="category2" className="add-product-selector">
            <option>--Select--</option>
            <option value="Man Shirts">Man Shirts</option>
            <option value="Man Tshirts">Man Tshirts</option>
            <option value="Man Jeans">Man Jeans</option>
            <option value="Sports">Sports</option>
            <option value="Shoes">Shoes</option>
            <option value="Kurta">Kurta</option>
            <option value="Sarees">Sarees</option>
            <option value="Dresses">Dresses</option>
            <option value="Flats & Heels">Flats & Heels</option>
            <option value="Handbag">Handbag</option>
            <option value="Watches">Watches</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Beauty">Beauty</option>
            <option value="Home">Home</option>
            
        </select>
        </div>
     </div>

     <div className="addproduct-price">
     <div className="addproduct-itemfield">

        <p>Brand Name</p>
        <input value={productDetails.productCompany} onChange={changeHandler} type="text" name="productCompany" placeholder="Type Here"/>
     </div>
     <div className="addproduct-itemfield">
        <p>Web Name</p>
        <select value={productDetails.web} onChange={changeHandler} name="web" className="add-product-selector">
        <option>--Select--</option>
            <option value="myntra">myntra</option>
           s
        </select>
        </div>
</div>

     <div className="addproduct-price">
        <div className="addproduct-itemfield">
        <p>Image 1</p>
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnall-img" alt=""/>
        </label>
        <input onChange={imageHandler} type="file" name="url" id="file-input" hidden/>
        
        </div>
        <div className="addproduct-itemfield">
        <p>Image 2</p>
        <label htmlFor="file-input2">
            <img src={image2?URL.createObjectURL(image2):upload_area} className="addproduct-thumnall-img" alt=""/>
        </label>
        <input onChange={imageHandler2} type="file" name="url2" id="file-input2" hidden/>
       
        </div>

     </div>
     

    
     

     
     <button onClick={()=>{Add_Product()}} className="addproduct-btn">Add</button>

    </div>
  )
}

export default AddProduct
