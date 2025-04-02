import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>{name}</h2>
      <h3>Software Engineer</h3>
      <h3>Full Stack Developer</h3>
      <h3>@z4k7</h3>
    </div>
  );
};

export default User;
