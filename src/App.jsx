
import { RouterProvider } from "react-router-dom";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorDoTema } from "./componentes/ProvedorTema/ProvedorTema";
import { router } from "./Router/Router";
import { SessaoUsuarioProvider } from "./componentes/contexto/SessaoUsuario";


function App(){
  return (<ProvedorDoTema>
    <Estilos/>
    <SessaoUsuarioProvider >
        <RouterProvider router={router}/>
    </SessaoUsuarioProvider>
  </ProvedorDoTema>
 
   
  )
}

export default App
