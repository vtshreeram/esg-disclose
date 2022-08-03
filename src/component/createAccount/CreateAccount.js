import React from 'react'
import logo from '../../assets/Account_info.png'
import style from './CreateAccount.module.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {RiArrowDropRightLine} from 'react-icons/ri'
import CreateBody from './creratBody'


const CreateAccount = () => {
  return (
    <div className={style.container}>
     
        <img height={620} src={logo} alt='logo' />
    
        <div className={style.menu}>
          <div className={style.head}>
            <div className={style.icon}>
              <BiHomeAlt size={25} className={style.icon1} />

              <div>
              <p className={style.title}>Account</p>
              <span className={style.suntitle}>Enter username</span>

              </div>
              <RiArrowDropRightLine size={25} style={{marginLeft: '8px'}} /> 
            </div>
            <div className={style.icon}>
              <AiOutlineUser size={25} className={style.icon2} />

              <div>
              <p className={style.title}>Choose Package</p>
              <span className={style.suntitle}>Enter Information</span>

              </div>
              <RiArrowDropRightLine size={25} style={{marginLeft: '8px'}}  /> 
             
            </div>

            <div className={style.icon}>
              <BiHomeAlt size={25} className={style.icon3}/>

              <div>
              <p className={style.title}>Login</p>
              <span className={style.suntitle}>System</span>

              </div>
           
            </div>
            <div></div>
            <div></div>
          </div>
          <hr />

        <CreateBody />
        </div>
    
    </div>


  )
}

export default CreateAccount