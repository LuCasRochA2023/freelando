import styled from "@emotion/styled"
import { Tipografia } from "../../../componentes/Tipografia/Tipografia"
import { Col, Container, Row } from "react-grid-system"

const DivEstilizada=styled.div`
    text-align:center;
`

export const EstruturaBlocos=({titulo, children})=>{
    return(
       <DivEstilizada> 
            <Tipografia componente="h2" variante="h2">
                {titulo}
            </Tipografia>
            <Row>
                {children}
            </Row>
        </DivEstilizada>       
         
        
       
    )
}