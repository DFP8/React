//Linha que importa o histórico
import history from "./assets/data/history.json"
import { MeuHistorico } from "./MeuHistorico";

function App() {

  //Como podes ver na consola, é um array de objetos
  console.log(history)

  return (
    <div className="App">
      <MeuHistorico/>
    </div>
  );
}

export default App;
