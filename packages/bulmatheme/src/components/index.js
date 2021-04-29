import React, { Component } from 'react';
import Navbar from '../components/navbar.js';
import Page from '../components/page.js';
import List from '../components/list.js';
import { Global, css } from "frontity";
import Switch from "@frontity/components/switch"
import externalCss from "bulma/css/bulma.css";
import {connect} from "frontity"

const Root = ({state}) => {
  const data = state.source.get(state.router.link)
  return(
    <>
  <Navbar/>
  <main class="container">
        <Switch>
          <div when={data.isArchive}>
          <List />
          </div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.isPage }>
          <Page/>
          </div>
        </Switch>
      </main>
  <Global styles={css(externalCss)} />
    </>
  )
}

export default connect(Root)
