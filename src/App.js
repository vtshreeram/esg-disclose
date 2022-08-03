import React from 'react'
import CreateAccount from './component/createAccount/CreateAccount'
import ChoosePackage from './component/choosePackage/ChoosePackage'
import CardPay from './component/choosePackage/CardPayment/CardPay'
import { BrowserRouter ,Routes, Route  } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
      <CreateAccount />

        } />
         <Route path='/ChoosePackage' element={
      <ChoosePackage />

        } />
     
     <Route path='/CardPay' element={
      <CardPay />

        } />
      
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App