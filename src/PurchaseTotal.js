import React from 'react';

class PurchaseTotal extends React.Component {

    render() {
        
        return (
            <div className="summary__total">
                <div className="summary__total__label">{this.props.title}</div>
                <div className="summary__total__value">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                            .format(this.props.total) }
                </div>
            </div>
        );
    }
}

export default PurchaseTotal;