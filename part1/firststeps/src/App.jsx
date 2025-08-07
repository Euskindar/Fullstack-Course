const Amigos = () => {
  console.log("Amigos");

  const amigos = [
    { name: "Paco", age: 20 },
    { name: "Pedro", age: 22 },
  ];

  return (
    <div>
      <p>
        Hola {amigos[0].name} de edad {amigos[0].age} años
      </p>
      <p>
        Hola {amigos[1].name} de edad {amigos[1].age} años
      </p>
    </div>
  );
};

const App = () => {
  return (
    // Fragment para no crear un div extra
    <>
      <h1>Bienvendi@</h1>
      <Amigos />
    </>
  );
};

export default App;
