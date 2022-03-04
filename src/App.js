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

      <div className="flex-col  justify-items-center ">

        <div className="cursor-pointer flex  justify-center  bg-red-500 p-6  m-4 rounded-md text-white"
          onClick={clicked}>
          Bite Me
        </div>

        {choice &&
          <div className="flex  justify-center "> You have been bitten</div>
        }
      </div>

      {modalOn && <   Modal setModalOn={setModalOn} setChoice={setChoice} />}

    </div >
  );
}

export default App;
