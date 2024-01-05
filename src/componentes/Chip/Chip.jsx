import styled from "@emotion/styled"

const SpanEstilizado=styled.span`
    display:inline-block;
    font-weight:400;
    font-size:${props=>props.theme.espacamentos.s};
    line-weight:20px;
    border-radius:${props=>props.theme.espacamentos.s};
    border:1px solid;
    border-color:${props=>props.theme.cores.neutras.a};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    background:${props=>props.theme.cores.neutras.c};
    margin:12px;
    &:hover{
        color:${props=>props.theme.cores.primarias.b};
        border-color:${props=>props.theme.cores.primarias.b};
        background-color:${props=>props.theme.cores.secundarias.b}; 
    }


`

export const Chip=({children})=>{
    return(
        <>
        <SpanEstilizado>
            {children}
        </SpanEstilizado>
        </>
    )
}