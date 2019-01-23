import * as React from "react";

export default class HelloForm extends React.Component {
  render() {
    return (
      <div>
        <input
          value={this.props.name}
          onChange={e => this.props.handleChange(e)}
        />
      </div>
    );
  }
}
