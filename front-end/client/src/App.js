import './App.css';
import { Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { verifyUser } from './services/users'
import Authors from './screens/Authors'
import Books from './screens/Books';

function App() {

  
  const [user, setUser] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const user = await verifyUser()
        user ? setUser(user) : setUser(null)
      }
      fetchUser()
    } catch (error) {
      console.log(error)
    }
  }, [])




  

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<h1>HOME</h1>} />
        <Route path={'/books'} element={<Books user={user} toggle={toggle }/>} />
        <Route path={'/books/:id'} element={<h1>BOOK DETAIL</h1>} />
        <Route path={'/books/:id/edit'} element={<h1>BOOK EDIT</h1>} />
        <Route path={'/add-book'} element={<h1>CREATE BOOK</h1>} />
        <Route path={'/authors'} element={<Authors user={user} toggle={toggle} />} />
        <Route path={'/authors/:id'} element={<h1>AUTHOR DETAIL</h1>} />
        <Route path={'/authors/:id/edit'} element={<h1>AUTHOR EDIT</h1>} />
        <Route path={'/add-author'} element={<h1> ADD AUTHORS</h1>} />
        <Route path={'/sign-in'} element={<h1>SIGN IN</h1>} />
        <Route path={'/sign-up'} element={<h1>SIGN UP</h1>} />
        <Route path ={'/sign-out'} element={<h1>SIGN OUT</h1>} />
      </Routes>
    </div>
  );
}

export default App;
