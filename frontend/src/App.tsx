import Footer from "conponents/Footer";
import NavBar from "conponents/NavBar";

function App() {
  return (
//serve pra fragmentar o componente 
<>
    <NavBar/>
    <div>
    <h1 className="text-primary">Olá Mundo!</h1>
    </div>
    <Footer/>
    </>
  );
}

export default App;
