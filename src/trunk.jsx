import React from 'react';

class Trunk extends React.Component {
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
	      <g id="layer1">
		    <path
		       className="bark"
		       style={{ strokeWidth:'0.190264'}}
		       d="m 90.51406,157.1488 h 14.46387 c 2.16567,0 3.90915,3.37155 3.90915,7.55952 l -3.90915,34.77382 3.90915,51.40477 c 0.31509,4.14341 -1.74348,7.55952 -3.90915,7.55952 H 90.51406 c -2.165671,0 0.941523,-18.90708 10e-7,-22.67857 l 1.563661,-27.97024 -3.127323,-29.48216 c -0.435178,-4.10254 -0.60201,-21.16666 1.563661,-21.16666 z"
		       id="trunk"
		       transform={transform} />
		  </g>
		</svg>
    );
  }
}

export default Trunk;

