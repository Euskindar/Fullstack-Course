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
              {element.part}: {element.exercises}
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
          { part: part1.name, exercises: part1.exercises },
          { part: part2.name, exercises: part2.exercises },
          { part: part3.name, exercises: part3.exercises },
        ]}
      />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </>
  );
};

// Exporting the App component as default
export default App;
