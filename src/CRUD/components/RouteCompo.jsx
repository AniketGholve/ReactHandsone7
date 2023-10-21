import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'
import Navbar from './Navbar'

const RouteCompo = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/student' element={<Student />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/addStudent' element={<AddStudent />} />
                    <Route path='/editStudent/:id' element={<EditStudent />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouteCompo