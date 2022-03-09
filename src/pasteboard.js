import Modal from "./modal";
import { useState } from "react";


function App() {

  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div>

      <div className="flex justify-center">
        <div className="flex  cursor-pointer justify-center w-1/3  bg-blue-400 p-4  m-6 rounded-md text-white"
          onClick={clicked}>
          Bite Me
        </div>
      </div>


      {choice &&
      <div className="flex justify-center">
        <div className="flex  justify-center w-1/3 bg-red-400 m-4 p-6 text-lg text-white "> You have been bitten !!!</div>
        </div>
      }

      {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}

    </div >
  );
}

export default App;
