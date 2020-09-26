// Import styles
import 'antd/dist/antd.css'
import '../styles/style.css'
import '../styles/menu.css'
import 'pure-react-carousel/dist/react-carousel.es.css';

/** Shops styles sheets */
import '../styles/tardan.css'

import UserProvider from '../lib/auth/userContext'

const App = ({ Component, pageProps }) => {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
  )
}

export default App

/**
 * 

 *    - Implementar next-seo y react-helmet (revisar ejemplos de la documentacion de next y la documentacion de cada dependencia)
 *    - Inspeccionar el codigo html en la consola de desarrollador
 *    - agradecer $$ a los autores de todos los icons utilizados 
 *    - solucionar problema del menu cuando ya estas en la pagina que se cierre
 *    - Cookies y terminos y condiciones
 * 
 * Rapidas
 *    - Agregar marginBottom al "olvidaste tu contraseña de los forms0"
 * 
 */