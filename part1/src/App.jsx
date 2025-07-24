const Hola = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        Hola {props.name} de edad {props.age} años
      </p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h1>Bienvendi@</h1>
      <Hola name="Paco" age="20" />
      <Hola name="Pedro" age={12 + 10} />
    </>
  );
};

export default App;
