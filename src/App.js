import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';
import ValidatorContainer from './components/ValidatorContainer';
import PalindromeInput from './components/PalindromeInput';

function App() {
  return (
    <div className="App">

      <MainContainer>
        <ValidatorContainer>
          <h1>Palindrome Validator</h1>

          <PalindromeInput/>
        </ValidatorContainer>
      </MainContainer>

    </div>
  );
}

export default App;
