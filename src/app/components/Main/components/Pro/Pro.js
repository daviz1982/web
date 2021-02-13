import React, { useEffect, useState } from 'react'

import './Pro.scss'

export default function Pro() {
  const project = {
    title: 'Proyecto',
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet non culpa officia impedit asperiores magni nobis rem quam ad. Id, neque alias ducimus magnam odit reiciendis in officiis unde consectetur.',
  }
  const [listProjects, setListProjects] = useState()

  useEffect(() => {
    setListProjects(() => {
      return [0, 0, 0].fill(project, 0, 3)
    })
  }, [])

  return (
    <section className='portfolio-section section-projects'>
      <h3>Proyectos</h3>
      <div className='projects--container'>
        {listProjects !== undefined &&
          listProjects.map((element, index) => (
            <div className='project' key={index}>
              <h4>{`${element.title} ${index + 1}`}</h4>
              <p>{element.desc}</p>
            </div>
          ))}
      </div>
    </section>
  )
}
