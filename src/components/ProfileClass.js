import React from "react";
import UserContext from "../utils/UserContext";

class ProfileClass extends React.Component {

  constructor() {
    super();
    this.state = {
      userDetails: {
        name: "dummy name",
        user_view_type: "dummy view type",
        avatar_url: "https://dummyimage.com/100x100/000/fff"
      },
      count: 0
    }
    // console.log('ctr is called');

  };

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/TiRth0408");
    const resData = await data.json();
    this.setState({
      userDetails: resData
    });
    console.log('component did mount is called');
    this.timer = setTimeout(() => {
      // console.log('Tirth Called');
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('component did update is called');
    if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {
      // console.log('Count has changed:', this.state.count);

    }
  }

  componentWillUnmount() {
    // console.log('component will unmount is called');
    clearInterval(this.timer);
  }

  render() {
    // console.log('render is called')
    if (this.state.userDetails === null) {
      return <h1>Loading..</h1>
    }

    const { name, avatar_url } = this.state.userDetails;

    return (
      <div
        style={{
          "border": "1px solid black",
          padding: "10px",
          margin: "10px"
        }}
      >
        <h1>Profile Class Component</h1>
        {/* <h3>Name: {name}</h3> */}
        <UserContext.Consumer>
          {(data) => (
            <h1 className="font-bold text-lg">Name: {data.name}</h1>
          )}
        </UserContext.Consumer>
        <img src={avatar_url} />
      </div>
    );
  };
};

export default ProfileClass;