import { useContext } from "react"
import { createContext } from "react"
import http from "../../http"
import { ArmazenadorDeToken } from "../../utils/ArmazenadorDeToken"
const SessaoUsuarioContext=createContext({
    usuarioEstaLogado:false,
    login:(email,senha)=>null,
    logout:()=>null,
    perfil:{}
})

export const UseUsuarioContext=()=>{
    return useContext(SessaoUsuarioContext)

}
export const SessaoUsuarioProvider=({children})=>{
   
    const login=(email,senha)=>{
        http.post('auth/login',{
            email,
            senha,
            
        })
        .then(resposta=> ArmazenadorDeToken.definirTokens(
            resposta.data.access_token,
            resposta.data.refresh_token,
            ))
        .catch(erro=>console.error(erro))
    }
    const value={
        login
        
    }
    return(<SessaoUsuarioContext.Provider value={value}>
        {children}
    </SessaoUsuarioContext.Provider>
    )
}