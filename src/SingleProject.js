import React, { Component } from 'react'
import './App.css'
import { ProjectSlides } from './index';


class SingleProject extends Component {

  render() {
    console.log('PROPS', this.props)
    let data = this.props.data
    return (
        <div key={data.id}
          className="project-container shadow" >
        <div className="project-header">
          <h1 className="project-title">{data.name}</h1>
        </div>
        <div className="proj-desc-container">
          <h1 className="proj-section-title" >Description: </h1>
          <p className="project-description">
            {data.description}
        </p>
        </div>
        <div className="proj-desc-container">
          <h1 className="proj-section-title" >Technologies Used: </h1>
          <p className="project-description">
            {data.technologies}
        </p>
        </div>

        {data.images ? <ProjectSlides id={data.id} imageData={data.images}/> : <div></div>}

        <div className="proj-links-container" >
        <a className= "project-links" href={data.github} target="_blank" rel="noopener noreferrer">
          Github</a>
        {data.deployed
          ? <a className= "project-links" href={data.deployed} target="_blank" rel="noopener noreferrer">
          Deployed Site</a>
          : <div></div>}
        {data.video
        ? <a className= "project-links" href={data.video} target="_blank" rel="noopener noreferrer">
          Video Presentation</a>
        : <div></div>}
        </div>
      </div>
      )
  }
}

export default SingleProject