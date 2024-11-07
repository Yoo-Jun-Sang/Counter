import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import Odd from "./components/Odd";
import {useState, useEffect, useRef} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  //마운트 : 탄생
  useEffect(() => {console.log("마운트 되었습니다.")}, []);
  
  //업데이트 : 변화, 리렌더링
  useEffect(() => {if (!isMount.current) {isMount.current = true; return;}
    console.log("업데이트 되었습니다.")
  });

  //언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : <Odd />}
      </section>
      <section>  
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  );
};

export default App;
