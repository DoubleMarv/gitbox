import React, { Component } from 'react';
class Featurecard extends Component {


  render() {
    const { featuredimage } = this.props;
    return (
      <>
      <div className="column is-half-mobile is-one-third-desktop">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={featuredimage} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
          {this.props.title}
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }

}

export default Featurecard;
