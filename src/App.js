import React from 'react'
import CreateAccount from './component/createAccount/creratBody'
import  {ChoosePackageBody}  from './component/choosePackage/ChoosePackageBody'
import CardPaymentBody from './component/choosePackage/CardPayment/CardPaymentBody'
import { BrowserRouter ,Routes, Route  } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
      <CreateAccount  />

        } />
         <Route path='/ChoosePackage' element={
      <ChoosePackageBody  />

        } />
     
     <Route path='/CardPay' element={
      <CardPaymentBody />

        } />
      
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App