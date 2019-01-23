import * as React from "react";

export default class HelloContent extends React.Component {
  render = () => <div>Hello {this.props.name}!</div>;
}
