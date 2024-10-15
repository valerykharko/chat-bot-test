import { Route, Routes } from 'react-router-dom'

import { Home, Settings, NotFound } from '@/pages'

import { Layout, PrivateRoute } from '@/components'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
