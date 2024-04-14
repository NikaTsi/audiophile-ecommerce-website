import React from 'react'
import Header from '../components/header'
import Section from '../components/section'
import Advertisement from '../components/advertisement'
import Footer from '../components/footer'


function Main() {
  return (
    <main className='flex flex-col w-full min-h-screen font-Manrope'>
        <Header />

        {/* <div>
          <Section />
        </div>

        <div>
          <Advertisement />
        </div> */}

        <div>
          <Footer />
        </div>
        
    </main>
  )
}

export default Main