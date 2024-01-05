import { Col, Container, Row } from "react-grid-system"
import CabecalhoCadastro from "../../../componentes/CabecalhoCadastro/CabecalhoCadastro"
import { Card } from "../../../componentes/Card/Card"
import { CampoTexto } from "../../../componentes/CampoTexto/CampoTexto"
import {IconeLogin}  from "./IconeLogin"
import styled from "@emotion/styled"
import { Botao } from "../../../componentes/Botao/Botao"
import { useState } from "react"
import { Tipografia } from "../../../componentes/Tipografia/Tipografia"
import { Link as RouterLink } from "react-router-dom"
import { Link } from "../../../componentes/Link/Link"
import { UseUsuarioContext } from "../../../componentes/contexto/SessaoUsuario"

const FormEstilizado=styled.form`
    border-bottom:1px solid;
    padding-bottom:${props=>props.theme.espacamentos.l};
    border-color:${props=>props.theme.cores.primarias.a};
`
export const Login=()=>{
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');
    const {login}=UseUsuarioContext();
    const tentarEfetuarLogin=async (evento)=>{
        evento.preventDefault();
        login(email,senha);
        
    }
   
    return (
        
        <Container>
            <div style={{textAlign:"center"}} >
                <IconeLogin/>
            </div>
             <Row justify="center">
                <Col lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                    <Card>
                        <FormEstilizado onSubmit={tentarEfetuarLogin}>
                            <CabecalhoCadastro titulo="Efetuar login"/>
                            <CampoTexto titulo="Email"
                            valor={email}
                            onChange={setEmail}
                            tipo="email"/>
                            <CampoTexto titulo="Senha"
                            valor={senha}
                            onChange={setSenha}
                            tipo="password"
                            />
                            <div style={{textAlign:"right"}}>                            
                                <RouterLink to="">
                                    <Tipografia componente="legenda" variante="legenda">
                                        Esquceu sua senha?
                                    </Tipografia>
                                </RouterLink>
                            </div>

                            <div style={{textAlign:"center"}}>
                                <Botao>
                                    Login
                                </Botao>
                            </div>
                        </FormEstilizado>
                        <div style={{textAlign:"center"}}>
                            <Tipografia componente="legenda" variante="legenda">
                                Ainda não criou sua conta no Freelando?
                            </Tipografia>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <Link variante="secundario">
                                <RouterLink to='/cadastro'>
                                    Cadastre-se clicando aqui!
                                </RouterLink>
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
            
        
    )
}