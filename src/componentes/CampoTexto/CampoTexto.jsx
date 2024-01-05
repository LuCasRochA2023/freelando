import styled from "@emotion/styled"

const LabelEstilizada=styled.label`
    display:block;
    width:100%;
    box-sizing:border-box;
    font-weight:400;
    font-size:20px;
    line-height:24px;
    
`
const InputEstilizado=styled.input`
    display:block;
    width:100%;
    margin-top: ${props=>props.theme.espacamentos.xs};
    margin-bottom: ${props=>props.theme.espacamentos.xs};
    background: ${props=>props.theme.cores.branco};
    border:1px solid;
    border-color:${props=>props.theme.cores.neutras.a};
    border-radius:16px;
    height:${props=>props.theme.espacamentos.l};
    font-size:14px;
    line-height:17px;
`

export const CampoTexto=({titulo,valor,onChange,tipo='text'})=>{
    return(
      <>
        <LabelEstilizada>
            {titulo}
            <InputEstilizado value={valor} 
            onChange={evento=>onChange(evento.target.value)}
            type={tipo}/>
        </LabelEstilizada>
        
      </>
    )
}