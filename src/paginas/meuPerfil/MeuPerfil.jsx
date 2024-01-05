import styled from "@emotion/styled"
import banner from "./imagem.png"
import { Logo } from "../../componentes/Icones/Logo"
import { Col, Container, Row } from "react-grid-system"
import avatar from "./avatar.png"
import { Card } from "../../componentes/Card/Card"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto"
import { Botao } from "../../componentes/Botao/Botao"
import { useEffect } from "react"
import http from "../../http"
import { ArmazenadorDeToken } from "../../utils/ArmazenadorDeToken"
const ImagemEstilizada=styled.h1`
    margin:0;
    background:url(${banner}) no-repeat;
    font-weight:600;
    font-size:40px;
    background-position:center;
    line-height:246px;
    text-align:center;
    max-width:100%;
`
const LinksEstilizados=styled.a`
    color:${props=>props.theme.cores.neutras.c};
    text-align:center;
    

`

const HeaderPerfil=styled.header`

    background:${props=>props.theme.cores.primarias.a};
    padding:${props=>props.theme.espacamentos.l};
    height:80px;
    align-items:center;
    padding:24px 170px;
    display:flex;
    justify-content:space-between;
    
`
const ImgEstilizada=styled.img`


`
const ContainerDoAvatar=styled.div`
    background:${props=>props.theme.cores.neutras.a};
`
const aoSubmeter=(evento)=>{
    evento.preventDefault()
}

const MeuPerfil=()=>{
    useEffect(()=>{
    
        http.get('profile')
    
            .then(resposta=>console.log(resposta.data))
            .catch(erro=>console.error(erro))
    },[])
    return(
        <>
       
       
        <Container>
            <form onSubmit={aoSubmeter}>
            
                <Row >
                    <Col md={5} sm={12}>
                        <Card>
                            <div style={{textAlign:'center'}}>
                                <Tipografia componente='h3' variante='h3'>
                                    Nome Completo
                                </Tipografia>
                                <ImgEstilizada src={avatar} alt="imagem da pessoa"/>
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={7}>
                        <Tipografia componente='h3' variante='h3'>
                            Revise seus dados
                        </Tipografia>
                        <CampoTexto
                            titulo='Nome'/>
                        <CampoTexto
                            titulo='Sobrenome'/>
                   
                
                <Row>
                    <Col sm={12} md={6}>
                        <CampoTexto 
                            titulo='celular'/>
                    </Col>
                    <Col sm={12} md={6}>
                        <CampoTexto 
                            titulo='E-mail' tipo="email"/>
                    </Col>
                    <Col sm={12} md={6}>
                        <CampoTexto
                            titulo='Código postal'/>
                    </Col>
                    <Col sm={12} md={6}>
                        <CampoTexto
                            titulo='País'
                            />
                    </Col>
                    <Col sm={12} md={6}>
                        <Botao fluido>
                            Salvar
                        </Botao>
                    </Col>
                </Row>
                </Col>
                </Row>
                

            </form>
          
        </Container>
        
        </>
    )
}
export default MeuPerfil