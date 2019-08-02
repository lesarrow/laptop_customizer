import React from 'react';
import FeatureCategory from './FeatureCategory';

class FeatureCategoryList extends React.Component {

    getFeatureLists() {

        return Object.keys(this.props.features).map(key => {
            return <FeatureCategory category={this.props.features[key]} title={key} currentSelected={this.props.currentSelected[key]} updateFeature={this.props.updateFeature} />;
        });

    }

    render() {

        return(
            <div>
                <h3>{this.props.title}</h3>
                {this.getFeatureLists()}
            </div>
        );
    }

}

export default FeatureCategoryList;