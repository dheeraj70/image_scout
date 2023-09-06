import React, { Component } from 'react'


export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            searchItem:""
        }

    }
    render() {
        
        return (
            <div className="nav">
                <div className='lf'>
                    {//<img className='logo' src="imgs/logo.png" alt="logo" />
                    }
                    <h1 style={{ color: "#2E2B69" }}>Image Scout</h1>
                </div>
                <div className="rf">
                    <div className="searchdiv">
                        <input id='search' onChange={(e)=>{this.setState({searchItem:e.target.value})}} className='search' type="text" placeholder='Search &#x1F50E;&#xFE0E;' />
                        <button id='sebtn' className='sbtn' onClick={()=>{this.props.changeType(this.state.searchItem);this.props.cclick(true);}}>&#x1F50E;&#xFE0E;</button>
                    
                    </div>

                    <button className='navbtn fw-bolder'>Categories</button>
                    <button className='navbtn fw-bolder'>Somethig</button>
                </div>
            </div>
        )
        
    }
}
