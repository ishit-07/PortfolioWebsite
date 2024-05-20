import Navbar from "./Components/Navbar";


const App = () => {
  return (
    <div>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
      <Navbar />
      <h1 className="text-black font-bold underline">Hello world!</h1>
    </div>
  );
}
 
export default App; 