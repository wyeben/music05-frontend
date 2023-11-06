import React, { Component } from 'react';
import './FooterComponent.css';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">
                        <h1>All Rights Reserved 2023 @23vibez</h1>
                    </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;