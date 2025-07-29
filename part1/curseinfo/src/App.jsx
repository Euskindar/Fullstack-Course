// Component to display course information
const Header = (props) => {
  console.log(props);

  return <h1>{props.course}</h1>;
};

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
const Total = ({ exercises1, exercises2, exercises3 }) => {
  console.log(exercises1, exercises2, exercises3);

  return <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>;
};

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// Main App component
const App = () => {
  const course = "Half Stack application development";

  const parts = [
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
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </>
  );
};

// Exporting the App component as default
export default App;
