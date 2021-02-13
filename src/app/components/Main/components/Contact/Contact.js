import React from 'react'
import './Contact.scss'

export default function Contact() {
  return (
    <section className='portfolio-section section-contact'>
      <h3>Contacto</h3>
      <div className='form--container'>
        <form action='' method='post'>
          <div className='form--group'>
            <label htmlFor='nombre'>
              <input
                type='text'
                name='nombre'
                id='nombre'
                placeholder='Nombre'
              />
            </label>
          </div>
          <div className='form--group'>
            <label htmlFor='email'>
              <input type='text' name='email' id='email' placeholder='Email' />
            </label>
          </div>
          <div className='form--group'>
            <label htmlFor='motivacion'>
              <textarea id='motivacion'>Motivo de contacto</textarea>
            </label>
          </div>
          <div className='form--group'>
            <button type='submit'>
              <i className='fa fa-camera-retro'></i>Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
