import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './components/create'
import Datashow from './components/datashow'
import Edit from './components/edit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/data' element={<Datashow />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
