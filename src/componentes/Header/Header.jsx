import styled from "@emotion/styled"
import { Logo } from "../Icones/Logo"
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-grid-system"
import { ArmazenadorDeToken } from "../../utils/ArmazenadorDeToken"

 export const Header=styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:${props=>props.theme.cores.primarias.a};
    padding:${props=>props.theme.espacamentos.l};
    height:80px;
    
    
    
`
export const LinkEstilizado=styled.a`
    font-size:20px;
    color:${props=>props.theme.cores.neutras.c};
`
export const Cabecalho=()=>{
    return(
        <Header>
            <Container>
                <Row align="center">
                    <Col>
                        <Logo/>
                    </Col>
                    <Col style={{textAlign:'right'}}>
                        <LinkEstilizado to="/login">
                            <Link style={{color:'white'}}onClick={()=>ArmazenadorDeToken.efetuarLogout('quero efetuar logout') }>
                                Logout
                            </Link>
                        </LinkEstilizado>
                    </Col>
                
                <Col style={{textAlign:"right"}}>
                    <LinkEstilizado>
                        <Link style={{color:"white"}}to="login">Login</Link>
                    </LinkEstilizado>
                </Col>
                </Row>
            </Container>
            
            
        </Header>
    )
}


