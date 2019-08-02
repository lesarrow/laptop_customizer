import React from 'react';
import Feature from './Feature';

class FeatureCategory extends React.Component {


    buildFeatureList() {

        return this.props.category.map((item, index) => {

            return (
                <li key={index} className="feature__item">
                    <Feature category={this.props.title} item={item} name={item.name} cost={item.cost} currentSelected={this.props.currentSelected} updateFeature={this.props.updateFeature} />
                </li>
            );




        });
    }
  
    
    render() {

        return (
            <div className="feature" key={this.props.title}>
                <div className="feature__name">{this.props.title}</div>
                <ul className="feature__list">
                    {this.buildFeatureList()}
                </ul>
            </div>
        );
    }

}

export default FeatureCategory;

