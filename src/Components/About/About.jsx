import React, {Component,Fragment} from 'react'

class About extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="jumbotron">
  <h1 className="display-4">Hello From About Page !</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
            </Fragment>
        );
    }
}


export default About;