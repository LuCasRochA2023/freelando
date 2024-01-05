import {createBrowserRouter} from "react-router-dom"
import LayoutBase from "../paginas/cadastro/LayoutBase";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro/LayoutBaseCadastro";
import SelecaoDeCliente from "../paginas/cadastro/SelecaoDoCliente";
import { CadastroDoCliente } from "../paginas/cadastro/CadastroDoCliente/CadastroDoCliente";
import { DadosPessoais } from "../paginas/cadastro/CadastroDoCliente/DadosPessoais";
import { Concluido } from "../paginas/cadastro/Concluido";
import { PaginaInicialChildren } from "../paginas/paginaInicial/PaginaInicialChildren";
import { Login } from "../paginas/cadastro/Login/Login";
import  MeuPerfil  from "../paginas/meuPerfil/meuPerfil";

 export const router = createBrowserRouter([
    {
      path: "/", 
      element:<LayoutBase/>,
    
    
      children:[
        {
            path:'',
            element:<PaginaInicialChildren/>
        },{
            path:'/meuperfil',
            element:<MeuPerfil/>,
        },{
            path:'login',
            element:<Login/>
        },
        
        {
            path:'cadastro',
            element:<LayoutBaseCadastro/>,
            children:[{
                path:'',
                element:<SelecaoDeCliente/>

            },
            {
                path:'interesses',
                element:<CadastroDoCliente/>
            },
            {
                path:'dados-pessoais',
                element:<DadosPessoais/>

            },
            {
                path:'concluido',
                element:<Concluido/>
            }

            ]
        }
      ]
  
        
    }] 
    
    );

