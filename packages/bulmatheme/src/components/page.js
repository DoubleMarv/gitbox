import React, { Component } from 'react';
import { styled } from "frontity";
import {connect} from "frontity"

const Page = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]


    return (
      <StyledDiv>
<div className="columns is-marginless">
<div className="column is-half">
<h2>Testing {post.title.rendered}</h2>
</div>
</div>
      </StyledDiv>
    )
}

// We create a new component, that is a div with these styles.
const StyledDiv = styled.section`
    color: #33bec3;
`;

export default connect(Page);
