import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Button } from './components/Button';

const StyledButton = styled(Button)`
  margin: 5px;
`

function App() {
  return (
    <div className="App">
      <StyledButton variant="darkBlue">View our work</StyledButton>
      <Button variant='lightBlue' width="full">View our wor</Button>
      <Button variant="darkYellow" width={350}>View our wor</Button>
      <Button variant='lightYellow' width={150}>View our wor</Button>
    </div>
  );
}

export default App;

