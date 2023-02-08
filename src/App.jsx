import NavBar from "./components/NavBar";
import PromoApp from "./components/PromoApp";
import Footer from "./components/Footer";
import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";

function App() { // Llamar a cada componente para ver como se van renderizando
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos"}/>
      <Destacado />
      <PromoApp />
      <Footer />
    </div>
  );
}

export default App;
