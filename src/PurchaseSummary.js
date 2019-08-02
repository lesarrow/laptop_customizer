import React from 'react';
import PurchaseItems from './PurchaseItems';

class PurchaseSummary extends React.Component {


    render() {

        return(
            <div>
                <h3>{this.props.title}</h3>
                <PurchaseItems selected={this.props.selected} />
            </div>
        );
    }
}

export default PurchaseSummary;