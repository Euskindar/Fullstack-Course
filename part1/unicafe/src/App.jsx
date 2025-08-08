import { useState } from "react";

//////////////////////////////////////////////////////////

// Button component to handle feedback
const FeedbackButton = ({ name, count }) => {
  // Using useState to manage the count for each feedback type
  const [countValue, setCountValue] = count;

  // Increment the count when the button is clicked and update the state accordingly
  return <button onClick={() => setCountValue(countValue + 1)}>{name}</button>;
};

// Display component for the feedback statistics
const Display = ({ name, count }) => {
  // Capitalize the first letter of the feedback type
  const displayName = name.charAt(0).toUpperCase() + name.slice(1);
  const [displayCount] = count; // Destructuring the count value

  return (
    <div>
      <h3>
        {displayName} : {displayCount}
      </h3>
    </div>
  );
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

function App() {
  // Array to hold the statistics
  const stats = [
    { name: "good", count: useState(0) },
    { name: "neutral", count: useState(0) },
    { name: "bad", count: useState(0) },
  ];

  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <FeedbackButton name={stats[0].name} count={stats[0].count} />
        <FeedbackButton name={stats[1].name} count={stats[1].count} />
        <FeedbackButton name={stats[2].name} count={stats[2].count} />
      </div>

      <br />

      <h1>Statistics</h1>
      <div>
        <Display name={stats[0].name} count={stats[0].count} />
        <Display name={stats[1].name} count={stats[1].count} />
        <Display name={stats[2].name} count={stats[2].count} />
      </div>
    </>
  );
}

export default App;
