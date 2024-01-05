import styled from "@emotion/styled";
import { IconeInstagram } from "../Icones/Instagram";
import { Logo } from "../Icones/Logo";
import { IconeTwitter } from "../Icones/Twitter";
import { IconeWhatsApp } from "../Icones/WhattsApp";
import { IconeTwitch } from "../Icones/Twitch";
import { Col, Container, Row } from "react-grid-system";
import { Tipografia } from "../Tipografia/Tipografia";

 const FooterEstilizado=styled.footer`
    background:${props=>props.theme.cores.primarias.a};
    padding:${props=>props.theme.espacamentos.l};
    color:${props=>props.theme.cores.branco};
    height:104px;

    
  
`
const ListaEmLinha=styled.ul`
    padding:0;
    margin:0;
    list-style:none;
    

`
const ItemDaLista=styled.li`
    display:inline-block;
   
    

`

export const Rodape=()=>{
    return(
        <FooterEstilizado>
            <Container>
            <Row align="center">
                <Col>
            
                <Logo/>
                <Tipografia variante="legenda" componente="legenda">Desenvolvido por estudante sem fins comerciais</Tipografia>
          
                </Col>
                <Col style={{textAlign:'right'}}>
                    <Tipografia variante="legenda" componente="legenda">Acesse nossas redes</Tipografia>
                    <ListaEmLinha>
                        <ItemDaLista>
                            <IconeWhatsApp/>
                        </ItemDaLista>
                        <ItemDaLista>
                            <IconeTwitch/>
                        </ItemDaLista>
                        <ItemDaLista>
                            <IconeInstagram/>
                        </ItemDaLista>
                        <ItemDaLista>
                            <IconeTwitter/>
                        </ItemDaLista>
                    </ListaEmLinha>
                </Col>
            
            </Row>
           
                
            
           
            </Container>
        </FooterEstilizado>
    )
}

