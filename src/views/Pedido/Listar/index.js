import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarPed = () => {

    const [data, setData] = useState([]);

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

    useEffect(() => {
        getPedidos();
    }, [])


    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar informações dos pedidos</h1>
                </div>
                <div className="p-2">
                    <Link to="/cadastrar-pedidos" className="btn btn-outline-success btn-sm">Cadastrar</Link>
                </div>
                {status.type === 'error' ?
                    <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                <hr className="m-1"></hr>


                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ClientId</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(ped => (
                            <tr key={ped.id}>
                                <td>{ped.id}</td>
                                <td>{ped.ClienteId}</td>
                                <td>{ped.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};