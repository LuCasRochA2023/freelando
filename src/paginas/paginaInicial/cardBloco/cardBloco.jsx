
import { CardsClientes } from "../CardsBlocos/CardsCliente"
import { EstruturaBlocos } from "./EstruturaBlocos"
import { cardClientes } from "./ItensBloco"

export const CardBloco=()=>{
    return(
        <>
            <EstruturaBlocos card=  {cardClientes} titulo="Vantagens para contratantes" >
                {cardClientes.map(card=><CardsClientes
                    key={card.descricao}
                    caminho={card.caminho}
                    descricao={card.descricao}
                />)}
            </EstruturaBlocos>

        </>
    )
}