import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import concluido from "./assets/Concluido.png"
import styled from "@emotion/styled"
import seta from "./assets/arrow.png"
import { Botao } from "../../componentes/Botao/Botao"
import { Link } from "react-router-dom"
const ImagemEstilizada=styled.img`
    max-width:100%;

`

export const Concluido=()=>{
    return (
        <div style={{textAlign:"center"}}>
            <Tipografia variante="h1" componente="h1">
                Seu perfil está completo!
            </Tipografia>
            <Tipografia variante="body" componente="body">
                Agora é só começar a se conectar com os melhores freelancers do mercado!
            </Tipografia>
            
                <figure>
                    <ImagemEstilizada src={concluido}/>
                </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{textAlign:"center"}}>
                    <Link to="..">
                        <Botao variante="secundaria">Voltar para home</Botao>
                    </Link>
                </Col>
            </Row>
           
            

        </div>
    )
}