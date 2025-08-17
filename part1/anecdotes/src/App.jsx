import { useState } from "react";

//////////////////////////////////////////////////////////

// Button component to handle random selection of anecdotes
const ButtonRandom = ({ onNextAnecdote }) => {
  return <button onClick={onNextAnecdote}>Next andecdote</button>;
};

//////////////////////////////////////////////////////////

// Button component to handle voting for anecdotes
const ButtonVote = ({ onVote }) => {
  return <button onClick={onVote}>Vote</button>;
};

//////////////////////////////////////////////////////////

const DisplayMostVoted = ({ anecdotes, votes }) => {
  // Calculate the maximum number of votes
  const maxVotes = Math.max(...votes);

  // Find the index of the anecdote with the most votes
  const mostVotedIndex = votes.indexOf(maxVotes);

  return (
    <div>
      {maxVotes > 0 ? (
        <>
          <h3>{anecdotes[mostVotedIndex]}</h3>
          <div>Has {votes[mostVotedIndex]} votes</div>
        </>
      ) : (
        <p>No votes yet.</p>
      )}
    </div>
  );
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

  ////////////////////////////////////////////////////////////////

  // State to manage the selected anecdote index
  const [selected, setSelected] = useState(0);

  // Event handler for selecting a random anecdote
  const handleAnecdote = () => {
    //Generate a random number based on the length of the anecdotes array
    const randomIndex = Math.floor(Math.random() * anecdotes.length);

    // Update the selected anecdote index with a new random index
    setSelected(randomIndex);
  };

  ////////////////////////////////////////////////////////////////

  // State to manage the votes for each anecdote and initialize it with zeros
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  // Event handler for voting
  const handleVote = () => {
    // Create a copy of the votes array
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  /////////////////////////////////////////////////////////////////

  return (
    <>
      <h1>Anecdotes</h1>
      <div>{anecdotes[selected]}</div>

      <br />

      <div>Has {votes[selected]} votes</div>

      <br />

      <ButtonRandom onNextAnecdote={handleAnecdote} />
      <ButtonVote onVote={handleVote} />

      <br />

      <h2>Anecdotes with most votes</h2>
      <DisplayMostVoted anecdotes={anecdotes} votes={votes} />
    </>
  );
}

export default App;