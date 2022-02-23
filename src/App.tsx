import Home from "@/home";

function App() {
  const add = () => {
    let c = 2 + 1;
    let b = 100;
    console.log(c);

    Home.show();
  };

  add();

  return (
    <div>
      React
      <Home />
    </div>
  );
}

export default App;
