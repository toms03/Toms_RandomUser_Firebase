import './App.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Users from './pages/Users'
import AuthPage from './pages/AuthPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

export default function App() {
  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={<h2>An Error has Occured</h2>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' exact element={<AuthPage />} />
            <Route exact path='/users' element={<Users />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  )
}
