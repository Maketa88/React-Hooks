import {Routes,Route} from 'react-router-dom'




import { Saludar } from './components/Saludar/Saludar'
import { Operaciones } from './components/Operaciones/Operaciones'
import { Color } from './components/Fondo/Fondo'
import { Header } from './components/Layouts/Home/Header/Header'
import { ListarTarea } from './components/ListarTarea/Listar'
import LogoPage from './components/Imagen/Imagen'
import { Formulario } from './components/Formulario/Formulario'
import { NotFound } from './components/NotFound/Notfound'












 export function App() {
 

  return (
    <>
    <Header/>
    <Routes>
   
      <Route path="/" element={<LogoPage/>}></Route>
      <Route path="/Saludar" element={<Saludar/>}></Route>
      <Route path="/Operaciones" element={<Operaciones/>}></Route>
      <Route path="/Fondo" element={<Color/>}></Route>
      <Route path="/ListarTarea" element={<ListarTarea/>}></Route>
      <Route path="/Formulario" element={<Formulario/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      

    </Routes>
   
      
    </>
  )
}


