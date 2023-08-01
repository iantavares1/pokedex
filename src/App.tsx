import { useState } from 'react'

import { Page } from './types/page/Page'

import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <>
      {page === 'home' && <Home onOpen={setPage} />}
      {page === 'favorites' && <Favorites onOpen={setPage} />}
    </>
  )
}
