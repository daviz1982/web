import React from 'react'
import './Footer.scss'
export default function Footer() {
  const socialLinks = [
    {
      id: 0,
      title: 'Linkedin',
      url: '//linkedin.com/in/davidcruzc',
      icon: 'fa-linkedin'
    },
    {
      id: 1,
      title: 'Codepen',
      url: '//codepen.io/daviz1982',
      icon: 'fa-codepen'
    },
    {
      id: 2,
      title: 'Github',
      url: '//github.com/daviz1982',
      icon: 'fa-github'
    },
    {
      id: 3,
      title: 'Twitter',
      url: '//twitter.com/daviz1982',
      icon: 'fa-twitter'
    },
  ]

  return (
    <footer className='main--footer'>
      <nav>
        <ul className='inline-list'>
          {socialLinks.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={link.url}
                  title={link.title}
                  target='_blank'
                  rel='external'
                >
                  <i className={`fa ${link.icon}`}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className='footer-legend'>Code and design: David Cruz, 2021</div>
    </footer>
  )
}
