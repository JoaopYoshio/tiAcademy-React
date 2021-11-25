import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarPed = () => {

    const [data, setData] = useState([]);
    const [itens, setItens] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos)
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                })
                // console.log("Sem conexão com a API")
            });
    };
    const getItens = async () => {
        await axios.get(api + "/listaitenspedidos")
            .then((response) => {
                setItens(response.data.itemPedidos)
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                })
                // console.log("Sem conexão com a API")
            });
    };
    const excluirPedido = async (id) => {

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluirpedido/" + id , { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
                getPedidos();
            })
            .catch(() => {
                setStatus({
                    type: "error",
                    message: "Erro: sem conexão com a API."
                })
            })
    }
    

    useEffect(() => {
        getPedidos();
        getItens();
    }, [])


    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar informações dos pedidos</h1>
                </div>
                {status.type === 'error' ?
                    <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                <hr className="m-1"></hr>

                <div>
                    <h3>Pedidos</h3>
                </div>
                <div className="p-2">
                    <Link to="/cadastrar-pedidos" className="btn btn-outline-success btn-sm">Cadastrar Pedidos</Link>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ClientId</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(ped => (
                            <tr key={ped.id}>
                                <td>{ped.id}</td>
                                <td>{ped.ClienteId}</td>
                                <td>{ped.data}</td>
                                <td className="texte-center">
                                    <span className="btn btn-outline-danger btn-sm" onClick={() => excluirPedido(ped.id)}>
                                        Excluir
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <h3>Itens Pedidos</h3>
                </div>
                <div className="p-2">
                    <Link to="/cadastrar-itens" className="btn btn-outline-success btn-sm">Cadastrar Itens</Link>
                </div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>PedidoId</th>
                            <th>ServicoId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens.map(item => (
                            <tr key={item.id}>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                                <td>{item.PedidoId}</td>
                                <td>{item.ServicoId}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};