import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Home } from './views/Home';
import { ListarCli } from './views/Cliente/Listar';
import { ListarServ } from './views/Servico/Listar';
import { ListarPed } from './views/Pedido/Listar';
import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={ ListarCli }/>
          <Route path="/listar-servico" component={ ListarServ }/>
          <Route path="/listar-pedido" component={ ListarPed }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
