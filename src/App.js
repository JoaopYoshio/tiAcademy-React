import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { ListarCli } from './views/Cliente/Listar';
import { ListarServ } from './views/Servico/Listar';
import { CadastrarServ } from './views/Servico/Cadastrar';
import { EditarServ } from './views/Servico/Editar'
import { CadastrarCli } from './views/Cliente/Cadastrar';
import { ListarPed } from './views/Pedido/Listar'
import { Menu } from './components/Header/Menu';
import { Footer } from './components/Footer/Footer';
import { Item } from './views/Servico/Item';
import { EditarCli } from './views/Cliente/Editar';
import { PedidosCliente } from './views/Cliente/Consulta'
import { ListarProd } from './views/Produto/Listar'
import { CadastrarProd } from './views/Produto/Cadastrar'
import { ListarCompr } from './views/Compra/Listar'
import { CadastrarPed } from './views/Pedido/Cadastrar'
import { CadastrarItem } from './views/Pedido/CadastrarItem'
import { CadastrarCompra } from './views/Compra/Cadastrar'
import { EditarProd } from './views/Produto/Editar';
import { CadastrarItemCompra } from './views/Compra/CadastrarItem';

function App() {
  return (
    <div className="main">
      <Router>
        <Menu/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listar-cliente" component={ListarCli} />
            <Route path="/listar-servico" component={ListarServ} />
            <Route path="/cadastrar-servico" component={CadastrarServ} />
            <Route path="/cadastrar-cliente" component={CadastrarCli} />
            <Route path="/cadastrar-pedidos" component={CadastrarPed} />
            <Route path="/cadastrar-itens" component={CadastrarItem} />
            <Route path="/cadastrar-itenscompra" component={CadastrarItemCompra} />
            <Route path="/cadastrar-compras" component={CadastrarCompra} />
            <Route path="/listar-pedidos" component={ListarPed} />
            <Route path="/listar-pedido/:id" component={Item} />
            <Route path="/editar-servico/:id" component={EditarServ} />
            <Route path="/editar-produto/:id" component={EditarProd} />
            <Route path="/listar-pedidos" component={ListarPed} />
            <Route path="/editar-cliente/:id" component={EditarCli} />
            <Route path="/pedidos-cliente/:id" component={PedidosCliente} />
            <Route path="/listar-produto" component={ListarProd} />
            <Route path="/cadastrar-produto" component={CadastrarProd} />
            <Route path="/listar-compra" component={ListarCompr} />
          </Switch>
        </div>
        <Footer/>
      </Router >
    </div >
  );
}

export default App;
