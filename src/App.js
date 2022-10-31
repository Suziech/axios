import {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

function App() {
  const [quote, setQuote] = useState('')
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content)
      setQuote(res.data.content)
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <ButtonWrapper>
    <Direction>Click the button to see the quote</Direction>
    <Button onClick={getQuote}>Get Quote</Button>
    {quote && <Quote>{quote}</Quote>}
    </ButtonWrapper>
  );
}

export default App;

const ButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
flex-direction: column;
background-color: black;
padding: 2rem;
`

const Direction = styled.h1`
color: white;
`
const Button = styled.button`
  background-color: darkcyan;
  color: white;
  font-size: 2rem;
  width: 200px;
  height: 100px;
  border-radius:30px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: lightcoral;
    transition: 1s;
  }
`

const Quote = styled.p`
font-size: 1.5rem;
color: white;
`
