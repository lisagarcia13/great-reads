import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { verifyUser } from './services/users'
import Authors from './screens/Authors'
import Books from './screens/Books'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import SignOut from './screens/SignOut'
import Home from './screens/Home'
import AddBook from './screens/AddBook'
import AddAuthor from './screens/AddAuthor'

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
        <Route path={'/'} element={<Home />} />
        <Route path={'/books'} element={<Books user={user} toggle={toggle }/>} />
        <Route path={'/books/:id'} element={<h1>BOOK DETAIL</h1>} />
        <Route path={'/books/:id/edit'} element={<h1>BOOK EDIT</h1>} />
        <Route path={'/add-book'} element={ <AddBook user={user} setToggle={setToggle}/> } />
        <Route path={'/authors'} element={<Authors user={user} toggle={toggle} />} />
        <Route path={'/authors/:id'} element={<h1>AUTHOR DETAIL</h1>} />
        <Route path={'/authors/:id/edit'} element={<h1>AUTHOR EDIT</h1>} />
        <Route path={'/add-author'} element={<AddAuthor user={user} setToggle={setToggle} />} />
        <Route path={'/sign-in'} element={<SignIn setUser={setUser}/>} />
        <Route path={'/sign-up'} element={<SignUp setUser={setUser}/>} />
        <Route path ={'/sign-out'} element={<SignOut setUser={setUser}/>} />
      </Routes>
    </div>
  );
} 

export default App;
///user ? >: <Navigate to='/sign-up'/>