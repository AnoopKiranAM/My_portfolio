import React from 'react'
import './Experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5> What skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'> Experienced</small>
                </div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Css</h4>
                <small className='text-light'> Intermediate</small></div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div> <h4>Javascript</h4>
                <small className='text-light'> Experience</small></div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Bootstraped</h4>
                <small className='text-light'> Experience</small></div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Tailwind</h4>
                <small className='text-light'> Experience</small></div>

            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div> <h4>React</h4>
                <small className='text-light'> Experience</small></div>

            </article>
          </div>

        </div>


        {/* End of Front end */}



        <div className="experience__backend">

        <h3>BackEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Node js</h4>
              <small className='text-light'> Experienced</small>
              </div>
              
            </article> 

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Mongo DB</h4>
              <small className='text-light'> Intermediate</small></div>
              
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>PHP</h4>
              <small className='text-light'> Experience</small></div>
              
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Mysql</h4>
              <small className='text-light'> Experience</small></div>
              
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div><h4>Python</h4>
              <small className='text-light'> Experience</small></div>
              
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div> <h4>Django</h4>
              <small className='text-light'> Experience</small></div>

             
            </article>
          </div>


        </div>

      </div>
    </section>
  )
}

export default Experience