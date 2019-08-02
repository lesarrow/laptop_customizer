import React, { Component } from 'react';
import './App.css';
import FeatureCategoryList from './FeatureCategoryList';
import PurchaseSummary from './PurchaseSummary';
import PurchaseTotal from './PurchaseTotal';
import PurchaseOrderHeader from './PurchaseOrderHeader';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: {
        Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
        "Operating System": {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
        "Video Card":{
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
        Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
      }
    }
    this.updateFeature = this.updateFeature.bind(this);
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    
  

    return (
      <div className="App">
        <header>
          <PurchaseOrderHeader title="ELF Computing" subtitle="Laptops" subsubtitle="Customize your laptop" />
        </header>      
        <main>
          <section className="main__form">
            <FeatureCategoryList title="TECH SPECS AND CUSTOMIZATIONS" currentSelected={this.state.selected} features={this.props.features} updateFeature={this.updateFeature} />
          </section>
          <section className="main__summary">
            <PurchaseSummary title="NEW GREENLEAF 2018" selected={this.state.selected} />
            <PurchaseTotal title="Your Price: " total={total}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;  
