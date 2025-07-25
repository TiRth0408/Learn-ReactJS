import React from "react";

class ProfileClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  };

  render() {
    return (
      <div
        style={{
          "border": "1px solid black",
          padding: "10px",
          margin: "10px"
        }}
      >
        <h1>Profile Class Component</h1>
        <h3>Name: {this.props.name}</h3>
        <h3>Address:{this.props.city}</h3>
        <h3>Email: {this.props.email}</h3>
        <h2>Count - {this.state.count}</h2>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Increment</button>
      </div>
    );
  };
};

export default ProfileClass;