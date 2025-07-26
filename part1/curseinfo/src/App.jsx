const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

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

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return <p>Number of exercises: {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = "Fundamentals of React - ";
  const exercises1 = 10;

  const part2 = "Using props to pass data - ";
  const exercises2 = 7;

  const part3 = "State of a component - ";
  const exercises3 = 14;

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

export default App;
