const Modal = ({ setModalOn, setChoice }) => {

      const handleOKClick = () => {
          setChoice(true)
          setModalOn(false)
      }
      const handleCancelClick = () => {
          setChoice(false)
          setModalOn(false)
      }
  
      return (
  
          <div className="   bg-zinc-200 opacity-95 fixed inset-0 z-50   ">
  
              <div className="flex h-screen justify-center items-center ">
  
                  <div className="flex flex-col justify-center align-middle bg-white p-12 rounded-xl">

                      <div className="flex  mb-10"  >Are you sure ?</div>
                      <div className="flex">
                          <button onClick={handleOKClick} className=" rounded px-4 py-2 text-white  bg-green-400 ">Yes</button>
                          <button onClick={handleCancelClick} className="rounded px-4 py-2 ml-4 text-white bg-blue-500 ">No</button>
                      </div>


                  </div>
              </div>
          </div>
  
      );
  }
  
  export default Modal
  
  