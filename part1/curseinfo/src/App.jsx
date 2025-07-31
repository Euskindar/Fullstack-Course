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

  // State variables for left and right counters
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  // Functions to handle button clicks
  const increaseOne = () => setCounter(counter + 1);
  const decreaseOne = () => setCounter(counter - 1);
  const refreshClick = () => setCounter(0);
  const refreshLeft = () => setLeft(0);
  const refreshRight = () => setRight(0);

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
      <Button onClick={() => setLeft(left + 1)} text={"Left"} />
      <Button onClick={() => setRight(right + 1)} text="right" />
      {right}
      <br />
      <Button onClick={refreshLeft} text="Refresh Left" />
      <Button onClick={refreshRight} text="Refresh Right" />
    </>
  );
};

// Exporting the App component as default
export default App;
