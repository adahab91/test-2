import React, {PropTypes} from "react";

export default class Layout extends React.Component {
    render(){
        return (
            <div className="[ container ]">
            <h1>Test app, include nav here</h1>
            <div className="[ row ]">
                {this.props.children}
            </div>
            </div>
        )
    }
}