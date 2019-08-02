import React from 'react';

class Feature extends React.Component {

    render() {

      const selectedClass = this.props.name === this.props.currentSelected.name ? 'feature__selected' : '';
      const featureClass = 'feature__option ' + selectedClass;
      return (
        <div className={featureClass} onClick={() => this.props.updateFeature(this.props.category, this.props.item)}>
          { this.props.name }
          ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(this.props.cost) })
        </div>
      );
    }
}

export default Feature;



