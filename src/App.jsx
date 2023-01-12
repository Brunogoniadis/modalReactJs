
import { useState } from 'react'


import { Modal } from './components/Modal'
import { Main } from './Main'



function App() {

  const [modalOpen, setModalOpen] = useState(false)

  return (
      <Main >


        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <h2>Content is Here</h2>
        </Modal>

        <button onClick={()=> { setModalOpen(true) }}>
          Open Modal
        </button>
   
      </Main>
  )
}

export default App
