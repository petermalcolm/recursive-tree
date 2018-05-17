import React from 'react';
import Trunk from './trunk';

class SvgWrapper extends React.Component {
  render() {
  	const translate = 'translate('+this.props.translateX+' '+this.props.translateY+')';
  	const rotate = 'rotate('+this.props.rotateDegree+' '+this.props.rotateFromX+' '+this.props.rotateFromY+')';
  	const transform = translate + ' ' + rotate;
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
				barkColor={ this.props.barkColor }
				translateX={ this.props.translateX } 
				translateY={ this.props.translateY }
				rotateDegree={ this.props.rotateDegree }
				rotateFromX={ this.props.rotateFromX }
				rotateFromY={ this.props.rotateFromY } />

		</svg>
    );
  }
}

export default SvgWrapper;