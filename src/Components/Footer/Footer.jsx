import React, {Component,Fragment} from 'react'
// import  styles from "./style.module.css";
class Footer extends Component {
    render() {
        return (
<Fragment>
            <footer className="bg-light text-center text-lg-start footer-style">
      <div className="text-center p-3">
    © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>

</Fragment>
        );
    }
}


export default Footer;