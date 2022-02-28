import { useEffect, useState } from "react";
import "./index.css";

interface HomeType {
  params: string;
}

function Home(props: HomeType) {
  const [count, setCount] = useState(0);
  const a = 2;
  const b = 2;

  if (a == b) {
    console.log("c", a + b);
    console.log("props.params", props.params);
  }

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <div className="flex">
      <h1
        className="txt-3xl font-bold underline w-50"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        react
      </h1>
      <img
        className="w-100"
        src="static/svg/square-big.svg"
        width="100"
        height="100"
      />
    </div>
  );
}

export default Home;
