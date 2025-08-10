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

// Component to display total feedback statistics
const TotalFeedback = ({ stats }) => {
  // Calculate the total feedback count
  const total = stats.reduce((sum, stat) => sum + stat.count[0], 0);
  return <p>Total: {total}</p>;
};

//////////////////////////////////////////////////////////

// Component to calculate the average feedback score
const AverageFeedback = ({ stats, total }) => {
  const average = total ? (stats[0].count[0] - stats[2].count[0]) / total : 0; // Handle division by zero
  return <p>Average: {average.toFixed(2)}</p>;
};

//////////////////////////////////////////////////////////

// Component to calculate the positive feedback percentage
const PositivePerecentageFeedback = ({ stats, total }) => {
  const positivePercentage = total ? (stats[0].count[0] / total) * 100 : 0; // Handle division by zero\
  return <p>Positive: {positivePercentage.toFixed(2)}%</p>;
};

//////////////////////////////////////////////////////////

// Component to display the feedback statistics when feedback is given
const DisplayStats = ({ stats }) => {
  // Check if there are any feedback counts to display
  if (stats.every((stat) => stat.count[0] === 0)) {
    return <p>No feedback given</p>;
  }

  // Calculate total feedback once
  const totalDisplay = stats.reduce((sum, stat) => sum + stat.count[0], 0);

  // Render the individual feedback counts
  return (
    <>
      <div>
        <Display name={stats[0].name} count={stats[0].count} />
        <Display name={stats[1].name} count={stats[1].count} />
        <Display name={stats[2].name} count={stats[2].count} />
      </div>

      <br />

      <div>
        <TotalFeedback stats={stats} />
        <AverageFeedback stats={stats} total={totalDisplay} />
        <PositivePerecentageFeedback stats={stats} total={totalDisplay} />
      </div>
    </>
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

      <DisplayStats stats={stats} />
    </>
  );
}

export default App;
