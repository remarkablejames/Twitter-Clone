import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        {/* Sidebar */}
        <SideBar />
        {/* Feeds */}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
