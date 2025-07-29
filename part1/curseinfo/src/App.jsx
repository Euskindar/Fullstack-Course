// Component to display course information
const Header = (props) => {
  console.log("Header props ", props);

  return <h1>{props.course.name}</h1>;
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
const Total = ({ parts }) => {
  console.log(parts[0].exercises, parts[1].exercises, parts[2].exercises);

  return (
    <p>
      Number of exercises:{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// Main App component
const App = () => {
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

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

// Exporting the App component as default
export default App;
