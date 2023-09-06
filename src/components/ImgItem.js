import React, { Component } from 'react'

export default class ImgItem extends Component {
  render() {
    let{server,id,secret,title}=this.props;
    let imgurl="https://live.staticflickr.com/"+server+"/"+id+"_"+secret+".jpg)"//"https://source.unsplash.com/random/"
    return (
      <div className="item" >
        <img className='thumb' src={imgurl} alt="Cannot load" />
        <h3 className='fw-bolder title'>{title.slice(0,17)+"..."}</h3>
      </div>
      
    )
  }
}
