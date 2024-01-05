import styled from "@emotion/styled";



const BotaoAnterior=styled.button`
    padding:${props=>props.theme.espacamentos.s} ${props=>props.theme.espacamentos.xs};
    background:transparent;
    color:${props=>props.theme.cores.primarias.b};
    border-radius:${props=>props.theme.espacamentos.s};
    box-sizing:border-box;
    font-weight:700;
    font-size:16px;
    line-height:20px;
    text-align:center;
    cursor:pointer;
    &:hover{
        border-color:${props=>props.theme.cores.dark.b};
        color:${props=>props.theme.cores.dark.b};
    }
    &:focus{
        outline-color:${props=>props.theme.cores.focus};
    }
`
const BotaoProximo=styled.button`
    padding:${props=>props.theme.espacamentos.s} ${props=>props.theme.espacamentos.xs};
    background:${props=>props.theme.cores.primarias.b};
    color: ${props=>props.theme.cores.branco};
    box-sizing:border-box;
    font-weight:700;
    border-radius:${props=>props.theme.espacamentos.s};
    font-size:16px;
    line-height:20px;
    text-align:center;
    border:none;
    cursor:pointer;
    &:hover{
        background: ${props=>props.theme.cores.primarias.b};
    }
    &:focus{
        outline-color:${props=>props.theme.cores.dark.b}
    }
`

export const Botao=({children, variante='primaria'})=>{
    if(variante==='primaria'){
       return <BotaoProximo>
            {children}
        </BotaoProximo>
    }
    return <BotaoAnterior>
        {children}
    </BotaoAnterior>
    
}