import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development"
import { Alert, Container, Table } from "reactstrap"
import { api } from "../../../config";

export const PedidosCliente = (props) => {
    console.log(props.match.params.id)

    const [data, setData] = useState([]);
    const [compra, setCompra] = useState([]);

    const [id] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    useEffect(() => {
        const getPedidos = async () => {
            await axios.get(api + "/cliente/" + id + "/pedidos")
                .then((response) => {
                    console.log(response.data.peds)
                    setData(response.data.peds)
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: sem conexão com a API.'
                    })
                });
        }
        const getCompras = async () => {
            await axios.get(api + "/cliente/" + id + "/compras")
                .then((response) => {
                    console.log(response.data.compras)
                    setCompra(response.data.compras)
                })
                .catch(() => {
                    setStatus({
                        type: 'error',
                        message: 'Erro: sem conexão com a API.'
                    })
                });
        }
        getCompras();
        getPedidos();
    }, [id])

    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar informações dos pedidos e compras</h1>
                </div>
                <div className="d-flex">
                    <div className="p-2">
                        <Link to="/listar-cliente" className="btn btn-outline-primary btn-sm">Cliente</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-pedidos" className="btn btn-outline-primary btn-sm">Pedido</Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-compra" className="btn btn-outline-primary btn-sm">Compra</Link>
                    </div>
                </div>
                {status.type === 'error' ?
                    <Alert color="danger">
                        {status.message}
                    </Alert> : ""}

                <div>
                    <h3>Pedidos</h3>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(ped => (
                            <tr key={ped.id}>
                                <td>{ped.id}</td>
                                <td>{ped.data}</td>
                                <td className="texte-center">
                                    <Link to={"/"}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar</Link>
                                    <Link to={"/"}
                                        className="btn btn-outline-warning btn-sm">
                                        Editar</Link>
                                    <Link to={"/"}
                                        className="btn btn-outline-danger btn-sm">
                                        Excluir</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <h3>Compras</h3>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compra.map(comp => (
                            <tr key={comp.id}>
                                <td>{comp.id}</td>
                                <td>{comp.data}</td>
                                <td className="texte-center">
                                    <Link to={"/"}
                                        className="btn btn-outline-primary btn-sm">
                                        Consultar</Link>
                                    <Link to={"/"}
                                        className="btn btn-outline-warning btn-sm">
                                        Editar</Link>
                                    <Link to={"/"}
                                        className="btn btn-outline-danger btn-sm">
                                        Excluir</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}