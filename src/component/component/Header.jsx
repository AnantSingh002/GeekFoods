import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <>
    <header>
    <div className={style.container}>
        <div className={style.logo}>
          <img src="/home/logo.svg" alt="" srcset="" />
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
        <h2>Forever Food...</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maiores!</p>
        <div className={style.btnn}>
          <button id={style.search}>Search Now</button>
          <button id={style.knowMore}>Know More</button>
        </div>
      </div>
      <img src="/home/home.jpeg" alt="" srcset="" />

    </div>

    <div className={style.second}>


    <div className={style.house}>
      <img src="/home/house.jpeg" alt="" srcset=""/>
    </div>

    <div className={style.description}>
      <div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
      <button id={style.inTouch}>Get In Touch</button>
      </div>

    </div>

    </div>

    <div className={style.masonry}>
      <div className={style.card} id={style.c1}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis libero est veritatis similique tempora. Cum quis pariatur dolorem obcaecati illo asperiores odio mollitia iste aspernatur sequi molestias, voluptatem beatae esse. Et libero placeat itaque voluptas ut saepe natus. Ullam similique, aperiam nemo neque magni reiciendis sequi iure earum autem!</p>
        
        <div className={style.subDiv}>
          <img src="/home/dp.jpeg"/>

          <div className={style.name}>
          <h3>Gladis Lennon</h3>
          <span>Head of SEO</span>
          </div>
        </div>
      </div>


      <div className={style.card} id={style.c2}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quisquam, architecto recusandae culpa ipsum esse deleniti alias facere? Ipsum, inventore.</p>
        <div className={style.subDiv}>
          <img src="/home/dp.jpeg"/>

          <div className={style.name}>
          <h3>Gladis Lennon</h3>
          <span>Head of SEO</span>
          </div>
        </div>


      </div>


      <div className={style.card} id={style.c3}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quisquam, </p>
      <div className={style.subDiv}>
          <img src="/home/dp.jpeg"/>

          <div className={style.name}>
          <h3>Gladis Lennon</h3>
          <span>Head of SEO</span>
          </div>
        </div>


      </div>


      <div className={style.card} id={style.c4}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis libero est veritatis similique tempora. Cum quis pariatur dolorem obcaecati illo asperiores odio mollitia iste aspernatur sequi molestias, voluptatem beatae esse. </p>
        
        <div className={style.subDiv}>
          <img src="/home/dp.jpeg"/>

          <div className={style.name}>
          <h3>Gladis Lennon</h3>
          <span>Head of SEO</span>
          </div>
        </div>
      </div>



      <div className={style.card} id={style.c5}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis libero est veritatis similique tempora. Cum quis pariatur dolorem obcaecati illo  </p>
        
        <div className={style.subDiv}>
          <img src="/home/dp.jpeg"/>

          <div className={style.name}>
          <h3>Gladis Lennon</h3>
          <span>Head of SEO</span>
          </div>
        </div>
      
      </div>


      <div className={style.card} id={style.c6}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis libero est veritatis similique tempora. </p>
        
        <div className={style.subDiv}>
          <img src="/home/dp.jpeg"/>

          <div className={style.name}>
          <h3>Gladis Lennon</h3>
          <span>Head of SEO</span>
          </div>
        </div>
      </div>
      
 
    </div>

    <footer>
    <div>
     <img src="/home/footereLogo.svg" alt="" srcset="" />    
    </div>

    <div>
    <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, corporis.</p>
    <br />
    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </div>

    <div className={style.des}>
    <p>About</p>
    <p>Carrer</p>
    <p>History</p>
    <p>Service</p>
    <p>Blog</p>
    </div>

    <div className={style.icons}>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    </div>

    </footer>

    

    </>
  )
}

export default Header
