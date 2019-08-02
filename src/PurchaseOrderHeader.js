import React from 'react';

class PurchaseOrderHeader extends React.Component {

    render() {

        return(
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
                <h5>{this.props.subsubtitle}</h5>  
            </div>
        );
    }
}

export default PurchaseOrderHeader;