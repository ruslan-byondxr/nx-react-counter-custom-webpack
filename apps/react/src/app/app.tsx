import { Title, Counter, Container } from '@nx-react-counter-custom-webpack/ui';
import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Count!</button>
      <Title />
      <Counter />
      <Container>
        <Title />
        <Counter />
      </Container>
    </>
  );
}

export default App;
