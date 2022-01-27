import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<h1>HOME</h1>} />
        <Route path={'/books'} element={<h1>ALL BOOKS</h1>} />
        <Route path={'/books/:id'} element={<h1>BOOK DETAIL</h1>} />
        <Route path={'/books/:id/edit'} element={<h1>BOOK EDIT</h1>} />
        <Route path={'/add-books'} element={<h1>CREATE BOOK</h1>} />
        <Route path={'/authors'} element={<h1>AUTHORS</h1>} />
        <Route path={'/authors/:id'} element={<h1>AUTHOR DETAIL</h1>} />
        <Route path={'/authors/:id/edit'} element={<h1>AUTHOR EDIT</h1>} />
        <Route path={'/add-authors'} element={<h1> ADD AUTHORS</h1>} />
        <Route path={'/sign-in'} element={<h1>SIGN IN</h1>} />
        <Route path={'/sign-up'} element={<h1>SIGN UP</h1>} />
        <Route path ={'/sign-out'} element={<h1>SIGN OUT</h1>} />
      </Routes>
    </div>
  );
}

export default App;
