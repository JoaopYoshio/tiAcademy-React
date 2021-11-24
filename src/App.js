import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { Home } from './views/Home';
import { ListarCli } from './views/Cliente/Listar';
import { ListarServ } from './views/Servico/Listar';
import { CadastrarServ } from './views/Servico/Cadastrar';
import{ EditarServ } from './views/Servico/Editar'
import{ ExcluirServ } from './views/Servico/Excluir'
import { CadastrarCli } from './views/Cliente/Cadastrar';
import { ListarPed } from './views/Pedido/Listar'
import { Menu } from './components/Menu';
import { Item } from './views/Servico/Item';
import { EditarCli } from './views/Cliente/Editar';
import { ExcluirCli } from './views/Cliente/Excluir';
import { PedidosCliente } from './views/Cliente/Consulta'
import { ListarProd } from'./views/Produto/Listar'
import { CadastrarProd } from'./views/Produto/Cadastrar'
import { ListarCompr } from './views/Compra/Listar'
import { CadastrarPed } from './views/Pedido/Cadastrar'
import{ CadastrarCompra } from './views/Compra/Cadastrar'

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={ ListarCli }/>
          <Route path="/listar-servico" component={ ListarServ }/>
          <Route path="/cadastrar-servico" component={ CadastrarServ }/>
          <Route path="/cadastrar-cliente" component={ CadastrarCli }/>
          <Route path="/cadastrar-pedidos" component={ CadastrarPed }/>
          <Route path="/cadastrar-compras" component={ CadastrarCompra}/>
          <Route path="/listar-pedidos" component={ ListarPed }/>
          <Route path="/listar-pedido/:id" component={ Item }/>
          <Route path="/editar-servico" component={ EditarServ }/>
          <Route path="/excluir-servico" component={ ExcluirServ }/>
          <Route path="/listar-pedidos" component={ ListarPed }/>
          <Route path="/editar-cliente/:id" component={ EditarCli }/>
          <Route path="/excluir-cliente/:id" component={ ExcluirCli }/>
          <Route path="/pedidos-cliente/:id" component={ PedidosCliente}/>
          <Route path="/listar-produto" component={ ListarProd }/>
          <Route path="/cadastrar-produto" component={ CadastrarProd }/>
          <Route path="/listar-compra" component={ ListarCompr }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
