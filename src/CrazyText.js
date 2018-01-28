import React from 'react';
import { createStyleTag, removeStyleTag, insertStyle } from './styleSheets';

class CrazyText extends React.Component {
  constructor(props) {
    super(props);

    this.componentId = Math.round(Math.random() * 100000);
    this.styleElementId = 'crazyText_' + this.componentId;
    createStyleTag(this.styleElementId);

    const newKeyframesName = 'rotateDegs_' + this.componentId;
    const newKeyframes = `@keyframes ${newKeyframesName} {
			0% { transform: rotate(0.0turn); transform-origin: center; }
			100% { transform: rotate(${props.degsToRotate}deg) }
		}`;
    insertStyle(this.styleElementId, newKeyframes);

    this.myClassName = 'crazyText_' + this.componentId;
    const newClass = `.${this.myClassName} {
			color: ${props.textColor};
      display: inline-block;
			font-size: 2em;
			animation-name: ${newKeyframesName};
			animation-duration: 1s;
			animation-iteration-count: 1;
			animation-fill-mode: forwards;
		}`;
    insertStyle(this.styleElementId, newClass);
  }

  componentWillUnmount() {
    removeStyleTag(this.styleElementId);
  }

  render() {
    return <div className={this.myClassName}>{this.props.children}</div>;
  }
}

export default CrazyText;
