const ACCESS_TOKEN='access_token';
const REFRESH_TOKEN='refresh_token';

export class ArmazenadorDeToken{
    static definirTokens(accessToken, refreshToken){
        sessionStorage.setItem(ACCESS_TOKEN,accessToken)
        sessionStorage.setItem(REFRESH_TOKEN,refreshToken)
    }
    static  get ObterAccessToken(){
        return sessionStorage.getItem(ACCESS_TOKEN);
    }
    static get ObterRefreshToken(){
        return sessionStorage.getItem(REFRESH_TOKEN);
    }
    static efetuarLogout(){
        sessionStorage.removeItem(ACCESS_TOKEN)
        sessionStorage.removeItem(REFRESH_TOKEN)
    }
}
