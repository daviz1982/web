import React from 'react'

export default function Contact() {
  return (
    <section className='contact'>
      <h3>Contacto</h3>
      <div className='form--container'>
        <form action='' method='post'>
          <div className='form--group'>
            <label for='nombre'>
              <input
                type='text'
                name='nombre'
                id='nombre'
                placeholder='Nombre'
              />
            </label>
          </div>
          <div className='form--group'>
            <label for='email'>
              <input type='text' name='email' id='email' placeholder='Email' />
            </label>
          </div>
          <div className='form--group'>
            <label for='motivacion'>
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
