import axios from 'axios'
import { ArmazenadorDeToken } from '../utils/ArmazenadorDeToken';
const http=axios.create({
    baseURL:'http://localhost:8080/'
})
http.interceptors.request.use(function(config){
    const token=ArmazenadorDeToken.ObterAccessToken
    if(token){
        config.headers.Authorization=`Bearer ${token}`
        console.log('token foi adicionado ao cabecalho')
    }
    return config;
}, function(error){
    return Promise.reject(error);
});

const rotasIgnoradasPelosErros= [
    'auth/login',
    'auth/refresh',
]

const tentaRenovarToken=async()=>{
    const token=ArmazenadorDeToken.ObterRefreshToken
    return axios.get('http://localhost:8080/auth/refresh',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(resposta=>{
        ArmazenadorDeToken.definirTokens(resposta.data.access_token,resposta.data.refresh_token)
    })
}
const lidarComErro401=async(erro)=>{
    await tentaRenovarToken()
        .then(()=>http(erro.config))
    return Promise.reject(erro)
}

http.interceptors.response.use((response)=>response,
function(error){
    if(rotasIgnoradasPelosErros.includes(error.config.url) && error.response.status === 401){
        return lidarComErro401(error)
    }


    return Promise.reject(error);
})
export default http