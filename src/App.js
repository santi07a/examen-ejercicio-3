import Formulario from "./Componentes/Formulario";
import Series from "./Componentes/Series";

function App() {
  return (
    <>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Mis series</h1>
        </header>
        <Formulario />
        <Series />
      </div>
    </>
  );
}

export default App;
