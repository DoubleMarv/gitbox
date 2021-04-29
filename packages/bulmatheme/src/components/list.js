import React from "react"
import Featurecard from "../components/featurecard.js"
import { connect } from "frontity"

const List = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      <div className="columns is-multiline is-marginless is-mobile">
        {data.items.map(
          (item) => {

    const post = state.source[item.type][item.id];
          return (
              <Featurecard 
              title={post.title.rendered}
              featuredimage={post.jetpack_featured_media_url}/>
          )
        })}
      </div>
    </>
  )
}

export default connect(List)
