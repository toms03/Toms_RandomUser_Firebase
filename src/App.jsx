import './App.css'
import NotFound from './NotFound'
import Home from './Home'
import Users from './Users'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

export default function App() {
  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={<h2>An Error has Occured</h2>}>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route exact path='/users' element={<Users />} />
        <Route path='*' element={<NotFound />} />
      </Routes></BrowserRouter></ErrorBoundary>
    </div>
  )
}
