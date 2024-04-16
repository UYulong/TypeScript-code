import { useEffect } from "react";

function App() {

  // const data = [0, 1, 2, [3, 4]];
  const data = [0, 1, [2, [3, [4, 5]]]];
  const res = data.flat(3)
  console.log(res);


  return (
    <div className="App">
      1
    </div>
  );
}

export default App;
