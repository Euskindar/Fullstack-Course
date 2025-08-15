import { useState } from "react";

//////////////////////////////////////////////////////////

// Button component to handle random selection of anecdotes
const ButtonRandom = ({ length, setSelected }) => {
  const handleClick = () => {
    //Generate a random number based on the length of the anecdotes array
    const randomIndex = Math.floor(Math.random() * length);

    // Update the selected anecdote index with a new random index
    setSelected(randomIndex);
  };

  return <button onClick={handleClick}>Next andecdote</button>;
};

//////////////////////////////////////////////////////////

// Button component to handle voting for anecdotes
const ButtonVote = ({ vote, setVote }) => {
  const handleVote = () => {
    // Increment the vote count for the selected anecdote
    setVote(vote + 1);
  };
  return <button onClick={handleVote}>Vote</button>;
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

function App() {
  // Array of anecdotes to be displayed
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // State to manage the selected anecdote index
  const [selected, setSelected] = useState(0);

  // State to manage the vote count for the selected anecdote
  const [vote, setVote] = useState(0);

  return (
    <>
      <h1>Anecdotes</h1>
      <div>{anecdotes[selected]}</div>
      <br />
      <ButtonRandom length={anecdotes.length} setSelected={setSelected} />
      <ButtonVote vote={selected} setVote={setVote} />
    </>
  );
}

export default App;
