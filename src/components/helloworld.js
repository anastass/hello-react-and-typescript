import * as React from "react";
import HelloForm from "./helloform";
import HelloContent from "./hellocontent";
import PropTypes from "prop-types";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.defaultName };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => this.setState({ name: event.target.value });

  render() {
    return (
      <div>
        <HelloForm name={this.state.name} handleChange={this.handleChange} />
        <HelloContent name={this.state.name} />
      </div>
    );
  }
}

HelloWorld.propTypes = {
  defaultName: PropTypes.string
}