// Importing state to manage the counter value
import { useState } from "react";

// Component to display course information
const Header = (props) => <h1>{props.course.name}</h1>;

// Component to display the content of the course
const Content = ({ parts }) => {
  return (
    <>
      {/* Mapping through parts to display each part's name and exercises */}
      {parts.map(
        (element, index) =>
          console.log("Content element: ", element) || ( // Logging each part
            <p key={index}>
              {element.name}: {element.exercises}
            </p>
          )
      )}
    </>
  );
};

// Component to display the total number of exercises
const Total = ({ parts }) => (
  <p>
    Number of exercises:{" "}
    {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
);

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// Component to display the counter value
const Display = ({ counter }) => <div>{counter}</div>;

// Component for a button that can be reused
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// Component to display the history of clicks
const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used pressing the buttons</div>;
  }
  return <div>Button press history: {props.allClicks.join(" - ")}</div>;
};

// Component for a button that handles history actions
const ButtonHistory = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// Main App component
const App = () => {
  // State variable to track the counter value
  const [counter, setCounter] = useState(0);

  // Course information
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // Functions to handle button clicks
  const increaseOne = () => setCounter(counter + 1);
  const decreaseOne = () => setCounter(counter - 1);
  const refreshClick = () => setCounter(0);

  // State variables for left and right counters
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  // State variable to track all clicks
  const [allClicks, setAll] = useState([]);

  // Functions to handle left and right button clicks
  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const newLeft = left + 1;
    setLeft(newLeft);
    setTotal(newLeft + right); // Update total clicks
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const newRight = right + 1;
    setRight(newRight);
    setTotal(left + newRight); // Update total clicks
  };

  // Functions to refresh left and right counters
  const refresClicks = () => {
    setLeft(0);
    setRight(0);
    setAll([]);
    setTotal(0);
  };

  // State variable to track the total number of clicks
  const [total, setTotal] = useState(0);

  return (
    <>
      {/* Displaying the counter value */}
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

      <h2>Counter</h2>
      <Display counter={counter} />
      <Button onClick={decreaseOne} text="-" />
      <Button onClick={increaseOne} text="+" />
      <Button onClick={refreshClick} text="Refresh" />

      <h2>Left and Right Counter</h2>
      {left}
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      {right}

      <br />
      <p>{allClicks.join(" - ")}</p>
      <Button onClick={refresClicks} text="Refresh" />
      <p>Total clicks: {total}</p>

      <h2>Press History</h2>
      <History allClicks={allClicks} />

      <ButtonHistory
        handleClick={() => console.log("History of clicks: ", allClicks)}
        text={"History"}
      />
    </>
  );
};

// Exporting the App component as default
export default App;
