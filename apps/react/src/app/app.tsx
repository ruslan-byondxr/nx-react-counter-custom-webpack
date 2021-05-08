import { Title, Counter, Container } from '@nx-react-counter-custom-webpack/ui';

export function App() {
  return (
    <>
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
