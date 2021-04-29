import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Page from '../components/page.js';
import Popshower from '../components/popshower.js';
import List from '../components/list.js';
import { Global, css } from "frontity";
import Switch from "@frontity/components/switch"
import externalCss from "bulma/css/bulma.css";
import {connect} from "frontity";
import {styled} from "frontity";

const Styledmain = styled.main`
padding: 3em 0;
`;

const Root = ({state}) => {
  const data = state.source.get(state.router.link);
  const showpopper = state.vars.showpopper;
  const popurl = state.vars.urlholder;
function showPop(){
  if(showpopper){
    return <Popshower popimage={popurl}/>
  } 
}

  return(
    <>
  <Navbar/>
  <Styledmain className="container">
        <Switch>
          <div when={data.isArchive}>
          <List />
          </div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.isPage }>
          <Page/>
          </div>
        </Switch>
        {showPop()}
      </Styledmain>
  <Global styles={css(externalCss)} />
    </>
  )
}

export default connect(Root)
