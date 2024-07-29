import './index.css';

function App({image,name}) {

 
  return (
    <div>
      <div className=" text-center card  w-96 h-full  border-2 border-black  text-white p-3">

      <img className="m-auto p-2 w-64 h-64" src={image} alt="" />
      <h1 className="text-4xl font-serif py-4 space-y-3 text-white " >{name}</h1>
      
      </div>
      
    </div>
  )
}

export default App

