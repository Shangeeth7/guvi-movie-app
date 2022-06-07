import "./App.css";

function App() {
  const data = [
    {
      name: "shangeeth",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9aBdfsvxEzOMDtM9j2-vJaxnVm1Wo9E6Q5Q&usqp=CAU",
    },
    {
      name: "sanjay",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHF8z_QXtdI5IMk5Cv5vLnUwtuN12Z3BMMg&usqp=CAU",
    },
    {
      name: "gova",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYYOHnj5-q1F5MEyGo70krnR782gFhN0pOw&usqp=CAU",
    },

    {
      name: "kesab",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6UMCO5W1z__o8oZ5SEUsIewHr9Vqvjumw-w&usqp=CAU",
    },
  ];

  return (
    <div className="App">
      {data.map((all) => (
        <Message name={all.name} url={all.url} />
      ))}
    </div>
  );
}

export default App;

function Message({ name, url }) {
  return (
    <div>
      <img className="profilePic" src={url} alt={name} />
      <h1>Hai I am {name}</h1>
    </div>
  );
}
