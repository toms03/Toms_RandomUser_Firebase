import './App.css'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Users from './pages/Users'
import AuthPage from './pages/AuthPage'
import NavBar from './components/NavBar'
import ErrorBoundaryPage from './pages/ErrorBoundary'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallBack'
import { useState } from 'react'

export default function App() {
  const [explode, setExplode] = useState(false)

  return (
    <div className='App'>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' exact element={<AuthPage />} />
            <Route exact path='/users' element={<Users />} />
            <Route exact path='/test-error' element={<ErrorBoundaryPage explode={explode} setExplode={setExplode} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  )
}
