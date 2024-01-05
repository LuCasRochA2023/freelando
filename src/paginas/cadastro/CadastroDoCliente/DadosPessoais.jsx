

import { Col , Row} from "react-grid-system"
import { Botao } from "../../../componentes/Botao/Botao"

import { ListaSuspensa } from "../../../componentes/ListaSupensa/ListaSuspensa"
import  {CampoTexto}  from "../../../componentes/CampoTexto/CampoTexto"
import { useCadastroUsuarioContext } from "../../../componentes/contexto/CadastroUsuario"
import CabecalhoCadastro from "../../../componentes/CabecalhoCadastro/CabecalhoCadastro"

const estadosBrasileiros = [
    { "text": "Acre", "value": "AC" },
    { "text": "Alagoas", "value": "AL" },
    { "text": "Amapá", "value": "AP" },
    { "text": "Amazonas", "value": "AM" },
    { "text": "Bahia", "value": "BA" },
    { "text": "Ceará", "value": "CE" },
    { "text": "Distrito Federal", "value": "DF" },
    { "text": "Espírito Santo", "value": "ES" },
    { "text": "Goiás", "value": "GO" },
    { "text": "Maranhão", "value": "MA" },
    { "text": "Mato Grosso", "value": "MT" },
    { "text": "Mato Grosso do Sul", "value": "MS" },
    { "text": "Minas Gerais", "value": "MG" },
    { "text": "Pará", "value": "PA" },
    { "text": "Paraíba", "value": "PB" },
    { "text": "Paraná", "value": "PR" },
    { "text": "Pernambuco", "value": "PE" },
    { "text": "Piauí", "value": "PI" },
    { "text": "Rio de Janeiro", "value": "RJ" },
    { "text": "Rio Grande do Norte", "value": "RN" },
    { "text": "Rio Grande do Sul", "value": "RS" },
    { "text": "Rondônia", "value": "RO" },
    { "text": "Roraima", "value": "RR"  },
    { "text": "Santa Catarina", "value": "SC" },
    { "text": "São Paulo", "value": "SP" },
    { "text": "Sergipe", "value": "SE" },
    { "text": "Tocantins", "value": "TO" }
  ] 

export const DadosPessoais=()=>{
    const {usuario,submeterUsuario,setNomeCompleto,setCidade,setEmail,setSenha,setSenhaConfirmada,setUf,erros}=useCadastroUsuarioContext()
    
    const finalizarCadastro=(evento)=>{
      evento.preventDefault();
      submeterUsuario()

    }
    
    return(
    <form onSubmit={finalizarCadastro}>
        <div style={{textAlign:"center"}}>
           <CabecalhoCadastro titulo="Crie seu cadastro"/>
            <CabecalhoCadastro 
            descricao="Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho."/>                       
            <Row>
                <Col lg={12} md={12} sm={12}>
                  <CampoTexto titulo="Nome Completo" 
                  valor={usuario.nomeCompleto}
                  onChange={setNomeCompleto} />
                  {erros.erroNome && <p style={{color:"red"}}>{erros.erroNome}</p>}
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <ListaSuspensa titulo="Estado" 
                  opcoes={estadosBrasileiros}
                  valor={usuario.uf}
                  onChange={setUf}/>
                </Col>
              

                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade " 
                  valor={usuario.cidade}
                  onChange={setCidade}/>
                </Col>
              </Row>
              <Row>
                <Col >
                  <CampoTexto titulo="Email "
                  valor={usuario.email}
                  onChange={setEmail}
                  tipo="email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha "
                  valor={usuario.senha}
                  onChange={setSenha} 
                  tipo="password"/>
                  {erros.erroSenha && <p style={{color:"red"}}>{erros.erroSenha}</p>}
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a senha " 
                  valor={usuario.senhaConfirmada}
                  onChange={setSenhaConfirmada}
                  tipo="password"/>
                  {erros.erroSenhaRepetida && <p style={{color:"red"}}>{erros.erroSenhaRepetida}</p>}
                </Col>
              </Row>
            <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">
                    Anterior
                  </Botao>
                </Col>
                
                  <Col lg={6} md={6} sm={6}>
                    <div style={{textAlign:'right'}}>
                      {/* <Link to="/cadastro/dados-pessoais/concluido"> */}
                        <Botao>
                            Próxima
                        </Botao>
                      
                    </div>
                  </Col>
              </Row>
        </div>
       
    </form>
    )
}