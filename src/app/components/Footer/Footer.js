import React from 'react'

export default function Footer() {
  return (
    <footer className='main--footer'>
      <nav>
        <ul className='inline-list'>
          <li>
            <a
              href='https://linkedin.com/in/davidcruzc'
              title='Linkedin'
              rel='external'
              target='_blank'
            >
              <i className='fa fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              href='https://codepen.io/daviz1982'
              title='Codepen'
              rel='external'
              target='_blank'
            >
              <i className='fa fa-codepen'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/daviz1982'
              title='Github'
              rel='external'
              target='_blank'
            >
              <i className='fa fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/daviz1982'
              title='Twitter'
              rel='external'
              target='_blank'
            >
              <i className='fa fa-twitter'></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className='footer-legend'>Code and design: David Cruz, 2021</div>
    </footer>
  )
}
