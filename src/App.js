
import { useState } from "react";
import "./App.css";

function App() {
 
  const[count, setCount] = useState(0);

  function decrementHandler (){
 setCount (count-1);
  }
  function incrementHandler (){
 setCount (count+1);
  }
  function resetHandler (){
 setCount (0);
  }


  return (
<div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
<div className="text-[#0398d4] font-medium text-2xl">
  increment && Decrement

</div>
<div className="bg-white flex items-center gap-12 text-[25px] py-3 rounded-sm text-[#344151]">
  <button onClick={decrementHandler}  className=" w-20 text-[40px]">
    -
    </button>

<div className="w-[120px] text-center font-bold gap-12 text-3xl text-[25px] border-[#bfbfbf] border-x-2 ">
{count}
</div>

  <button onClick={incrementHandler} className="text-center w-20 text-[40px]">
    +
    </button>
</div>
<div onClick={resetHandler}  className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg leading-1 cursor-pointer">Reset</div>

</div>
  );
}

export default App;
