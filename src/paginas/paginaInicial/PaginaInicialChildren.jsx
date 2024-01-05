import { Col, Container } from "react-grid-system"
import { Banner } from "./banner/banner"
import { CardBloco } from "./cardBloco/cardBloco"
import { CardFreelas, cardClientes, habilidades } from "./cardBloco/ItensBloco"
import { CardsClientes } from "./CardsBlocos/CardsCliente"
import { EstruturaBlocos } from "./cardBloco/EstruturaBlocos"
import { CardsFreela } from "./CardsBlocos/CardsFreela"
import { Chip } from "../../componentes/Chip/Chip"
export const PaginaInicialChildren=()=>{
    return(
        <>
            <Banner/>
            <Container>
                <EstruturaBlocos cards={cardClientes} titulo="Vantagens para contratantes">
                    {cardClientes.map(card=><CardsClientes
                        key={card.descricao}
                        icone={card.caminho}
                        texto={card.descricao}
                        />)}
                </EstruturaBlocos>
                <EstruturaBlocos cards={CardFreelas} titulo="Vantagens para freelas">
                    {CardFreelas.map(card=><CardsFreela
                        key={card.descricao}
                        icone={card.caminho}
                        texto={card.descricao}
                        />)}
                </EstruturaBlocos>
                <EstruturaBlocos cards={CardFreelas} titulo="Quais habilidades você encontra por aqui?">
                    <Col sm={12}>
                        {habilidades.map(habilidade=><Chip
                            key={habilidade}>{habilidade}</Chip>)}
                    </Col>
                </EstruturaBlocos>
            </Container>
        </>
    )
}