import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
       <div className="counter-container" > 
        
       <button className="dec-btn"
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
        
        <h1>Count: {count}</h1>
        <button className="inc-btn"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
          >
          +
        </button>
        </div>
        <h2>{name}</h2>
        <h3>Software Engineer</h3>
        <h3>Full Stack Developer</h3>
        <h3>@z4k7</h3>
      </div>
    );
  }
}

export default UserClass;
