import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Count!</button>
    </>
  );
}

export default Counter;
