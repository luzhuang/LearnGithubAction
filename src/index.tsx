import React from 'react'


export default class Example extends React.Component {
  render() {
    return (
      <div className="x6-graph-wrap">
        <div className="x6-graph">test</div>
        <canvas id="canvas" style={{background: "blue"}}></canvas>
      </div>
    )
  }
}
