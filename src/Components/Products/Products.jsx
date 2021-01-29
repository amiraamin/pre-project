import React, {Component} from 'react'
import Product from "./Product"





class Products extends Component {
 render() {
   //عشان أهندل البروبس الل جايه من ال app 
   // هعمل متغير يمسك كل البروبس عشان اباصيهم بسهوله تحت هنا 
 let {productsData,UbdateProductAuthor,UbdateProductType,deleteProduct,history} = this.props;
        /* 1-  we catch the array and do aloop on it(map) و  u=> every obj in array 
            2- import the product child so i can see it
            3- at every loop => call the element Product  <Product/> هيعرض البردوكت نفس عدد الاوبجكت الل عندي كل م ياخد اوبجكت جديدي هينفذ امر النداء  
            4- need to send the prev objects to the child => send in att details blow 
            5- the child dont know {u} so => receive it in props */
        return (
          <div className="container">
            <div className="row">
          {productsData.map((u,i)=><Product history={history} UbdateProductAuthor={UbdateProductAuthor} UbdateProductType={UbdateProductType} deleteProduct={deleteProduct} productDetails = {u} key={i}/>)}
            
            </div>
          </div>
    
  )

    }
}



export default Products;