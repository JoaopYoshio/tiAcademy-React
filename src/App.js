import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Home } from './views/Home';
import { ListarCli } from './views/Cliente/Listar';
import { ListarServ } from './views/Servico/Listar';
import { CadastrarServ } from './views/Servico/Cadastrar';
import { ListarPed } from './views/Pedido/Listar'
import { Menu } from './components/Menu';
import { Item } from './views/Servico/Item'

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={ ListarCli }/>
          <Route path="/listar-servico" component={ ListarServ }/>
          <Route path="/cadastrar-servico" component= {CadastrarServ}/>
          <Route path="/listar-pedidos" component={ ListarPed }/>
          <Route path="/listar-pedido/:id" component={ Item }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
