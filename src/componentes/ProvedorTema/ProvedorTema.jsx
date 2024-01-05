import {ThemeProvider} from '@emotion/react';

const tema={
    cores:{
        branco:"#FFFFFF",
        atencao:"",
        focus:"B009FF",
        primarias:{
            a:"#5754ED",
            b:"#D93114",
            c:"#168070"
        },
        secundarias:{
            a:'#EBEAF9',
            b:"",
            c:"#EBFCF9"
        },
        neutras:{
            a:'#373737',
            b:"",
            c:"#F5F5F5",
            d:""
        },
        dark:{
            a:'',
            b:"#B61B00",
            
        }
    },
    espacamentos:{
        xs:'8px',
        l : '32px',
        s : '16px',
        xl:'64px'

    },
    fontFamily:"'Montserrat',sans-serif"
}

export const ProvedorDoTema=({children})=>{
    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    )
}