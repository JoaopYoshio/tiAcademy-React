import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const EditarCli = (props) => {

    console.log(props.match.params.id)

    const [data, setData] = useState([]);

    const [id] = useState(props.match.params.id)

    const [cliente, setCliente] = useState({
        nome: '',
        endereco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: '',
    });

    const valorInput = e => setCliente({
        ...cliente,
        [e.target.name]: e.target.value
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCliente = async () => {
        await axios.get(api + "/cliente/" + id)
            .then((response) => {
                console.log(response.data.cli)
                setData(response.data.cli)
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: sem conexão com a API.'
                })
            });
    };

    const excluirCliente = async () => {

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.delete(api + "/excluircliente/" + id, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            })
            .catch(() => {
                setStatus({
                    type: "error",
                    message: "Erro: sem conexão com a API."
                })
            })
    }

    const editCLiente = async e => {
        e.preventDefault();
        console.log("Editar")

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/cliente/" + id + "/editar", cliente, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Sem conexão com a API."
                });
            });
    }

    useEffect(() => {
        getCliente();
    }, [])


    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div>
                        <h1>Editar Cliente</h1>
                    </div>
                    <div className="m-auto p-2">
                        <Link to="/listar-cliente" className="btn btn-outline-primary btn-sm">
                            Cliente
                        </Link>
                    </div>
                </div>
                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

                <Form className="p-2" onSubmit={editCLiente}>
                    <FormGroup className="p2">
                        <Label>
                            Nome
                        </Label>
                        <Input
                            name="nome"
                            placeholder="Nome do Cliente"
                            type="text"
                            defaultValue= {data.nome}
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label className="p-2">
                            Endereço
                        </Label>
                        <Input
                            name="endereco"
                            placeholder="Endereço do Cliente"
                            type="text"
                            defaultValue= {data.endereco}
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup className="p2">
                        <Label>
                            Cidade
                        </Label>
                        <Input
                            name="cidade"
                            placeholder="Cidade do Cliente"
                            type="text"
                            defaultValue= {data.cidade}
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup className="p2">
                        <Label>
                            UF
                        </Label>
                        <Input
                            name="uf"
                            placeholder="UF"
                            type="text"
                            defaultValue= {data.uf}
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup className="p2">
                        <Label>
                            Nascimento
                        </Label>
                        <Input
                            name="nascimento"
                            placeholder="Nascimento do Cliente"
                            type="date"
                            defaultValue= {data.nascimento}
                            onChange={valorInput}
                        />
                    </FormGroup>
                    <FormGroup className="p2">
                        <Label>
                            Cliente Desde
                        </Label>
                        <Input
                            name="clienteDesde"
                            placeholder="Cliente Desde"
                            type="date"
                            defaultValue= {data.clienteDesde}
                            onChange={valorInput}
                        />
                    </FormGroup>


                    <Button type="button" outline color="danger" onClick={excluirCliente}>
                        Excluir
                    </Button>

                    <Button type ="submit" outline color="success">
                        Salvar
                    </Button>

                </Form>

            </Container>
        </div>
    );
};