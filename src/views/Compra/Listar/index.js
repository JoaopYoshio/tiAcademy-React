import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";

import { api } from "../../../config";

export const ListarCompr = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/listascompras")
            .then((response) => {
                console.log(response.data.compras);
                setData(response.data.compras)
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
        getCompras();
    }, [])


    return (
        <div>
            <Container>
                <div>
                    <h1>Visualizar informações das compras</h1>
                </div>
                {status.type == 'error' ?
                    <Alert color="danger">
                        {status.message}
                    </Alert> : ""}


                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>ClientId</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.ClienteId}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};