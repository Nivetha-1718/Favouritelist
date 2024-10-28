import Container from './components/contain';
import Student from './components/studlist';
import Favourite from './components/favour';

import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';

function App()
{
  return(
    <Container>
      <BrowserRouter>
      <nav className="bg-red-400 p-10 border rounded-md flex flex-row gap-10 text-center">
      <div><Link to={"/"} className="underline text-white">List of Students</Link></div>
      <div><Link to={"/fav"} className="underline text-white">Favourite Students</Link></div>
      </nav>
      <Routes> 
        <Route path='/' element={<Student/>}></Route>
        <Route path='/fav' element={<Favourite/>}></Route>
      </Routes>
      </BrowserRouter>
    </Container>    
  )
}
export default App