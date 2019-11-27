import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Applink extends Component {
  render() {
    return (

		<Link to={this.props.path}>
				<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
					<rect width="16" height="16" fill={this.props.rect} />
				</svg>
				<p>{this.props.label}</p>
		</Link>

    );
  }
}

export default Applink;




