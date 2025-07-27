// Component to display course information
const Header = (props) => {
  console.log(props);

  return <h1>{props.course}</h1>;
};

// Component to display the content of the course
const Content = ({ parts }) => {
  console.log(parts);

  return (
    <>
      <p>
        {parts[0].part} {parts[0].exercises}
      </p>
      <p>
        {parts[1].part} {parts[1].exercises}
      </p>
      <p>
        {parts[2].part} {parts[2].exercises}
      </p>
    </>
  );
};

// Component to display the total number of exercises
const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>;
};

// Main App component
const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };

  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />
      <Content
        parts={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 },
        ]}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

// Exporting the App component as default
export default App;
