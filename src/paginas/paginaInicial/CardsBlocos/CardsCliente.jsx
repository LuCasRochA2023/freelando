import { Col } from "react-grid-system"
import { Card } from "../../../componentes/Card/Card"
import { Tipografia } from "../../../componentes/Tipografia/Tipografia"
import styled from "@emotion/styled"

const SpanEstilizado=styled.div`
    color:${props=>props.theme.cores.primarias.a};
    
   
    
`
export const CardsClientes=({icone, texto})=>{
    return(
        <Col sm={6} md={6} lg={3}>
            <Card comBorda={false} >
                    {icone}
                
                <Tipografia variante="body" componente="body">
                    <SpanEstilizado>
                        {texto}
                    </SpanEstilizado>
                </Tipografia>
            </Card>
        </Col>
    )
}