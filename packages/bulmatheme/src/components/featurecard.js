import React, { Component } from 'react';
import {styled} from 'frontity';

const Styledfeaturecard = styled.div`
.card{
  background-color: #7c40ff;
border-bottom:3px solid #b99aff;
.boxcont{
h4{
  font-size:1.1rem;
  color: #fff;
}
}
}
.opener{
  position: absolute;
  top:0;
  left: 0;
  font-size:.8rem;
  background-color:#9b6dff;
  border: 0;
  color: #fff;
  padding:.25rem .5rem;
}
`;


class Featurecard extends Component {

usePic = (geturl) => {
  frontity.state.vars.urlholder = geturl;
  frontity.state.vars.showpopper = true;
}


  render() {
    const { featuredimage } = this.props;
    return (
      <Styledfeaturecard className="column is-half-mobile is-one-third-desktop">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={featuredimage} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content boxcont">
          <div className="content">
          <h4>{this.props.title}</h4>
<button className="button opener"onClick={() => {this.usePic(featuredimage) }}>View</button>
         
          </div>
        </div>
      </div>

      </Styledfeaturecard>
    );
  }

}

export default Featurecard;
