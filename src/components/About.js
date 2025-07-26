import ProfileFC from "./ProfileFC";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <ProfileFC name="Tirth Patel" city="Gujrat" email="tirthpatel@gmail.com" />
//       <ProfileClass name="Patel Lali" city="Mumbai" email="lalipatel@gmail.com" />
//     </div>
//   );
// };
// export default About;

class About extends Component {
  constructor() {
    super();
  };


  render() {

    return (
      <div>
        <ProfileClass name="Patel Lali" city="Mumbai" email="lalipatel@gmail.com" />
      </div>
    );
  };
};

export default About;

// this is life cycle of react component with // componentDidMount

// parent ctr is called
// parent render is called
// child ctr is called
// child render is called
// child ctr is called
// child render is called

// child mount is called
// child mount is called
// parent mount is called