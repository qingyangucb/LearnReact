const reactDescription = ["Core", "Crucial", "Fundamental"];
function getDescription(description) {
  const length = description.length;
  const index = Math.floor(Math.random() * length);
  return description[index];
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getDescription(reactDescription)} Fundamental React concepts you will
        need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
