import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import cliente from "./assets/cliente.png"
import freela from "./assets/freela.png"
import { Link } from "react-router-dom"
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro"
import { useCadastroUsuarioContext } from "../../componentes/contexto/CadastroUsuario"

const SelecaoDeCliente=()=>{ 
    const {setPerfil}=useCadastroUsuarioContext()
    return(<div style={{textAlign:"center"}}>
            <CabecalhoCadastro titulo=" Crie seu cadastro" subtitulo="Como podemos te ajudar">
                
            </CabecalhoCadastro>
            
            <Row>
                <Col md={6} sm={12}>
                    <Link to="interesses" onClick={()=>setPerfil('cliente')}>

                        <img src={cliente} alt="imagem de cliente"/>
                        <CabecalhoCadastro descricao="Sou cliente e preciso de freela!"/>
                    </Link>
                   
                </Col>
                <Col md={6} sm={12}>
                   
                        <img src={freela} alt="imagem freela"/>                    
                        <CabecalhoCadastro descricao=" Sou freela e preciso de clientes!"/>
                    
                </Col>
            </Row>
            <div >
                <Tipografia variante="body2" componente="body2">
                    Já é cliente?
                </Tipografia>
                <p>
                    <a>Faça login</a>
                </p>
            </div>
        </div>
    )
}
export default SelecaoDeCliente