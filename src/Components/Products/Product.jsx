import React, { Component, Fragment } from "react";
import styles from "./style.module.css";

class Product extends Component {
  state = {};

  goToDetails = (id) => {
    this.props.history.push(`/ProductDetails/${id}`);
  };
  //history ==> array of slash
  //PUSH==> بتضيف سلاش جديده علي الهيستوري ف لما اعمل باك ارجع لها
  //REPLACE ==> بيبدل السلاش بسلاش تاني ف بالتالي مش هيكون موجود في الهيستوري

  render() {
    let { id, name, type, author, imgURL } = this.props.productDetails;
    // يتم إستقبال الاوبجكت من هناك من خلال المندوب بتاعهم . ك
    // البروبس هو مستقبل أي ضيف خارجي

    return (
      <Fragment>
        {/* <div className={`${styles.box}`}> */}
        <div className="col-md-4" >
          <div className={`${styles.card} card my-5`}>
            <div className="card-body ">
              <img className="card-img-top img-fluid" src={imgURL} alt="...." />
              <h4 className="text-danger">{name}</h4>
              <h4>Type: {type}</h4>
              <h4>Author: {author}</h4>
            </div>
            <button className="btn btn-outline-info " 
            onClick= {()=>this.goToDetails(id)}>
               اعرف أكثر 
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteProduct(id)}
            >
              {" "}
              Delete User{" "}
            </button>
            <button
              className="btn btn-info"
              onClick={() =>
                this.props.UbdateProductType(this.props.productDetails)
              }
            >
              {" "}
              Update type{" "}
            </button>
            <button
              className="btn btn-btn-light"
              onClick={() =>
                this.props.UbdateProductAuthor(this.props.productDetails)
              }
            >
              {" "}
              Update author{" "}
            </button>
          </div>
        </div>
        {/* </div> */}
      </Fragment>
    );
  }
}
export default Product;
