import React, { Component } from 'react';
import {motion} from "framer-motion";
import {styled} from 'frontity';

const Styledpopshower = styled.div`
position:fixed;
height: 80%;
width: 80%;
max-width: 780px;
margin: 0 auto;
top: 20% !important;
left: 10%;
z-index: 9999999;
.closer{
  position: absolute;
  top:0;
  left: 0;
}
`;

class Popshower extends Component {
closeMe = () => {
  frontity.state.vars.showpopper = false;
}

  render() {
    const { popimage } = this.props;

    return (
      <Styledpopshower>
      <motion.div animate={{y:-10}} transition={{duration:.3}}>
      <div className="popshower">
      <div className="card">
      <button className="button closer" onClick={this.closeMe}>Close</button>
            <img src={popimage} alt="Placeholder image" />
      </div>
      </div>
      </motion.div>
      </Styledpopshower>
    );
  }

}

export default Popshower;