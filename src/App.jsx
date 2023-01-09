
import { useState } from 'react'


import { Modal } from './components/Modal'
import { Main } from './Main'

const AIRPLANE = 
'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80'

const BEACH =
'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const CITY =
'https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'


function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [bg, setBG]= useState(`url(${AIRPLANE})`)

  return (
      <Main style={{'--bg-image' : bg}}>

        <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
          <h2>teste</h2>
        </Modal>

        <button onClick={()=> { setModalOpen(true) }}>Open Modal</button>
   
      </Main>
  )
}

export default App
