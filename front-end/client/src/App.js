import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom'
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
import EditBooks from './screens/EditBooks'
import EditAuthors from './screens/EditAuthors'
import BookDetails from './screens/BookDetails'
import AuthorDetails from './screens/AuthorDetails';

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
        <Route path={'/books/:id'} element={<BookDetails  user={user} setToggle={setToggle} /> } />
        <Route path={'/books/:id/edit'} element={ user ? <EditBooks user={user} setToggle={setToggle} /> : <Navigate to='/sign-up'/>} />
        <Route path={'/add-book'} element={ user ?  <AddBook user={user} setToggle={setToggle}/> : <Navigate to='/sign-up'/>} />
        <Route path={'/authors'} element={<Authors user={user} toggle={toggle} />} />
        <Route path={'/authors/:id'} element={<AuthorDetails user={user} setToggle={setToggle}/>} />
        <Route path={'/authors/:id/edit'} element={user ? <EditAuthors user={user} toggle={toggle} />: <Navigate to='/sign-up'/>} />
        <Route path={'/add-author'} element={ user ? <AddAuthor user={user} setToggle={setToggle} /> : <Navigate to='/sign-up'/>} />
        <Route path={'/sign-in'} element={<SignIn setUser={setUser}/>} />
        <Route path={'/sign-up'} element={<SignUp setUser={setUser}/>} />
        <Route path ={'/sign-out'} element={<SignOut setUser={setUser}/>} />
      </Routes>
    </div>
  );
} 

export default App;
///user ? >: <Navigate to='/sign-up'/>