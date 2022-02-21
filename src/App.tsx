import a from "@/home";

function App() {
  const add = () => {
    let c = 2 + 1 + a.a;
    let b = 100;
    console.log(c);
  };

  add();

  return <div>React</div>;
}

export default App;
