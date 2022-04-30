import type { NextPage } from 'next'
import '../styles/reset.module.css'

import { Title } from '../components/Title'
import { Navbar } from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Title msg="" />
    </>
  )
}

export default Home
