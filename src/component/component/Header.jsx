import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <>
    <header>
    <div className={style.container}>
        <div className={style.logo}>
          <h1>GeekFood</h1>
        </div>
        <div className={style.list}>
          <ul>
            <li>Home</li>
            <li>Quote</li>
            <li>Resturant</li>
            <li>Food</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={style.button}>
          <button>Get Started</button>
        </div>
      
    </div>
    </header>

    <div className={style.content}>
      <div className={style.box}>
        <h1>Let Us Find Your</h1>
        <h2>Forever Food</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <div className='Btn'>
          <button>Search Now</button>
          <button>Know More</button>
        </div>
      </div>
      <img src="/src/assets/home.jpeg" alt="" srcset="" />

    </div>

    <div className={style.second}>


    <div className={style.house}>
      <img src="/src/assets/house.jpeg" alt="" srcset=""/>
    </div>

    <div className={style.description}>
      <div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
      <button>Get In Touch</button>
      </div>

    </div>

    </div>

    

    </>
  )
}

export default Header
