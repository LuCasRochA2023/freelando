import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../../http";
const usuarioInicial={
    perfil:'',
    interesse:'',
    nomeCompleto:'',
    uf:'',
    cidade:'',
    email:'',
    senha:'',
    senhaConfirmada:'',
    mensagem:'',
    erroNome:'',
    erroEmail:'',
    erroSenha:'',
    erroSenhaRepetida:''



}
export const CadastroUsuarioContext=createContext({
    usuario:usuarioInicial,
    erros:{setErroNome:()=>null,setErroSenhaRepetida:()=>null,setErroSenha:()=>null,setErroEmail:()=>null},
    setPerfil:()=>null,
    setInteresse:()=>null,
    setNomeCompleto:()=>null,
    setUf:()=>null,
    setCidade:()=>null,
    setEmail:()=>null,
    setSenha:()=>null,
    setSenhaConfirmada:()=>null

})
export const useCadastroUsuarioContext=()=>{
    return useContext(CadastroUsuarioContext);
}

export const CadastroUsuarioProvider=({children})=>{

    const navegar=useNavigate()
    const [usuario,setUsuario]=useState(usuarioInicial)
    const [erros,setErros]=useState(usuarioInicial);
    const setPerfil=(perfil)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                perfil
        }
        })
    }
    const setInteresse=(interesse)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                interesse
        }
        })
    }
    const setErroSenha=(erroSenha)=>{
        setErros(estadoAnterior=>{
            return{
                ...estadoAnterior,
                erroSenha
            }
        })
    }
    const setErroNome=(erroNome)=>{
        setErros(estadoAnterior=>{
            return{
                ...estadoAnterior,
                erroNome
            }
        })
    }
    const setErroSenhaRepetida=(erroSenhaRepetida)=>{
        setErros(estadoAnterior=>{
            return{
                ...estadoAnterior,
                erroSenhaRepetida
            }
        })
    }
    const setNomeCompleto=(nomeCompleto)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                nomeCompleto
        }
        })
    }
    const setErroEmail=(erroEmail)=>{
        setUsuario(estadoAnterior=>{
            return{
                ...estadoAnterior,
                erroEmail
            }
        })
    }
    const setUf=(uf)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                uf
        }
        })
    }
    const setCidade=(cidade)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                cidade
        }
        })
    }
    const setEmail=(email)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                email
        }
        })
    }
    const setSenha=(senha)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                senha
        }
        })
    }
    const setSenhaConfirmada=(senhaConfirmada)=>{
        setUsuario(estadoAnterior =>{
            return{
                ...estadoAnterior,
                senhaConfirmada
        }
        })
    }
    const submeterUsuario=()=>{
        http.post('auth/register',usuario)
            .then(()=>{
                navegar('concluido')
            }) 
            .catch(erro=>{
                if(usuario.senha.length<=7){
                    setErroSenha('Erro! Senha menor que 8 dígitos');
                    return false;
                    
                 }else if(usuario.nomeCompleto.length===0 ){
                     setErroNome("Erro! Nome inválido!");
                     console.log(erros.erroNome)
                     return false;
                }else if(usuario.senhaConfirmada!==usuario.senha){
                     setErroSenhaRepetida("Erro! Senha diferente!");
                     console.log(erros.erroSenhaRepetida)
                     return false;
               
                }
                console.error(erro)
            })
       
        
        
        
    }

    const possoSelecionarInteresse = () => {
        return !!usuario.perfil
    }
    const contexto={
        usuario,
        erros,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        possoSelecionarInteresse,
        setErroNome,
        setErroEmail,
        setErroSenhaRepetida,
        setErroSenha

    }

        
        return(<CadastroUsuarioContext.Provider value={contexto}>
            {children}
        </CadastroUsuarioContext.Provider>
            )
    }