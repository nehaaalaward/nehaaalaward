import Head from 'next/head'
import Modal from '../componenets/Modal'
import Image from 'next/image'
import { useState } from 'react'

export default function HomePage() {
  const [isModal, setIsModal] = useState(false)

  const handleButtonPress = (e) => {
    setIsModal(modal => !modal)
  }

  return <div>
    <Head>
      <title>Nehaaal Award</title>
    </Head>
    <main>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">Nehaaal Award.</h1>
          <p className="description">that&apos;s why we care for your worthless(nehaaal) work.</p>

          <div className="image">
            <Image src="/bg.png" height="600" width="846" alt="worthless" />
          </div>

          <div className="text">
            <h4>Are you worthy for this award?</h4>
            <button onClick={handleButtonPress}>Let&apos;s find out.</button>
          </div>

        </div>
      </div>
      {isModal && <Modal onClose={() => setIsModal(false)} />}
    </main>
  </div >
}
