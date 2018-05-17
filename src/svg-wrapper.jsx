import React from 'react';
import Trunk from './trunk';

class SvgWrapper extends React.Component {
  render() {
   return (
		<svg
		width="100%"
		height="600px"
		xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<style>
				{ `.bark { fill:${this.props.barkColor} }` }
			</style>

			  <Trunk 
				translateX={ this.props.translateX } 
				translateY={ this.props.translateY }
				rotateDegree={ this.props.rotateDegree }
				rotateFromX={ this.props.rotateFromX }
				rotateFromY={ this.props.rotateFromY }
				scaleX = { this.props.scaleX }
				scaleY = { this.props.scaleY } />

		</svg>
    );
  }

  recursivelyBranch() {

  }

}

export default SvgWrapper;