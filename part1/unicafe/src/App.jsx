import { use, useState } from "react";

//////////////////////////////////////////////////////////

// Button component to handle feedback
const FeedbackButton = ({ name, count }) => {
  // Using useState to manage the count for each feedback type
  const [countValue, setCountValue] = count;

  // Increment the count when the button is clicked and update the state accordingly
  return <button onClick={() => setCountValue(countValue + 1)}>{name}</button>;
};

////////////////////////////////////////////////////////////

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
  return <p>{total}</p>;
};

//////////////////////////////////////////////////////////

// Component to calculate the average feedback score
const AverageFeedback = ({ stats, total }) => {
  const average = total ? (stats[0].count[0] - stats[2].count[0]) / total : 0; // Handle division by zero
  return <p>{average.toFixed(2)}</p>;
};

//////////////////////////////////////////////////////////

// Component to calculate the positive feedback percentage
const PositivePerecentageFeedback = ({ stats, total }) => {
  const positivePercentage = total ? (stats[0].count[0] / total) * 100 : 0; // Handle division by zero\
  return <p>{positivePercentage.toFixed(2)}%</p>;
};

//////////////////////////////////////////////////////////

// Component to display the feedback statistics when feedback is given
const DisplayStatsBasics = ({ stats }) => {
  // Check if there are any feedback counts to display
  if (stats.every((stat) => stat.count[0] === 0)) {
    return <p>No feedback given</p>;
  }

  // Render the individual feedback counts
  return (
    <div>
      <Display name={stats[0].name} count={stats[0].count} />
      <Display name={stats[1].name} count={stats[1].count} />
      <Display name={stats[2].name} count={stats[2].count} />
    </div>
  );
};

//////////////////////////////////////////////////////////

// Component to display the advanced feedback statistics
const DisplayStatsAdvanced = ({ stats }) => {
  // Check if there are any feedback counts to display
  if (stats.every((stat) => stat.count[0] === 0)) {
    return;
  }

  // Calculate total feedback once
  const totalDisplay = stats.reduce((sum, stat) => sum + stat.count[0], 0);

  return (
    <div>
      <p>Total: </p>
      <TotalFeedback stats={stats} />
      <p>Average: </p>
      <AverageFeedback stats={stats} total={totalDisplay} />
      <p>Positive %: </p>
      <PositivePerecentageFeedback stats={stats} total={totalDisplay} />
    </div>
  );
};

//////////////////////////////////////////////////////////

// Component to display statistics in table format
const DisplayStatsTable = ({ stats }) => {
  // Check if there are any feedback counts to display
  if (stats.every((stat) => stat.count[0] === 0)) {
    return;
  }

  // Calculate stats for total, average, and positive percentage
  const total = stats.reduce((sum, stat) => sum + stat.count[0], 0);
  const average = total ? (stats[0].count[0] - stats[2].count[0]) / total : 0; // Handle division by zero
  const positivePercentage = total ? (stats[0].count[0] / total) * 100 : 0; // Handle division by zero

  // Render the statistics in a table format
  return (
    <table>
      <thead>
        <tr>
          <th>Feedback</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat) => (
          <tr key={stat.name}>
            <td>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}</td>
            <td>{stat.count[0]}</td>
          </tr>
        ))}
        <tr>
          {/* // Empty cell for spacing */}
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Positive (%)</td>
          <td>{positivePercentage.toFixed(2)}%</td>
        </tr>
      </tbody>
    </table>
  );
};

//////////////////////////////////////////////////////////

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
      {/* <DisplayStatsBasics stats={stats} /> */}
      {/* <DisplayStatsAdvanced stats={stats} /> */}
      <DisplayStatsTable stats={stats} />
    </>
  );
}

export default App;
