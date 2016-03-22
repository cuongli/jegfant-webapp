import React from "react";

export default React.createClass({
    render: function() {
        return (
            <div className="greeting">
                <img src="/public/jegfant_logo.png"/>
                Hello, {this.props.name}!
            </div>
        );
    }
});
