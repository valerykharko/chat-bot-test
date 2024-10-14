import { Route, Routes } from 'react-router-dom'

import { Home, NotFound } from '@/pages'
import { Layout } from '@/components'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
