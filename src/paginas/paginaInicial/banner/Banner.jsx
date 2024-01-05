import { Col, Container, Row } from "react-grid-system"
import { Tipografia } from "../../../componentes/Tipografia/Tipografia"
import { Link } from "react-router-dom"
import { Botao } from "../../../componentes/Botao/Botao"
import styled from "@emotion/styled"
import imagemBanner from "./pessoas.png"
const ImgEstilizada=styled.img`
    max-width:100%;
`
const FigureEstilizada=styled.figure`
    margin:0;
    padding:${props=>props.theme.espacamentos.l};
    color:${props=>props.theme.cores.primarias.b};
    background:${props=>props.theme.cores.neutras.c};
`
export const Banner=()=>{
    return(
       <FigureEstilizada>
            <Container>
                <Row align="center">
                    <Col md={5} sm={12}>
                        <figcaption>
                            <Tipografia componente="h1" variante="h1">
                               Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
                            </Tipografia>
                        </figcaption>
                   
                        <Link to="cadastro">
                            <Botao>
                                Quero me cadastrar
                            </Botao>
                        </Link>
                    </Col>
                    <Col md={7} sm={12}>
                        <ImgEstilizada src={imagemBanner} alt="imagem do banner"/>
                    </Col>
                </Row>
            </Container>
        </FigureEstilizada>
    )
}