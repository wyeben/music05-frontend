import React, { Component } from 'react';
import './HeaderComponent.css';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header className='header2'>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className='vibez'><a href= "http://23vibez.net" className="navbar-brand">23vibez</a></div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;