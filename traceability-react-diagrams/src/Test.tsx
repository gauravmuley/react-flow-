import React from 'react';
import './Test.css';

import createEngine, { 
    DefaultLinkModel, 
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

class Test extends React.Component {

getData() {

// create an instance of the engine with all the defaults
const engine = createEngine();
// node 1
const node1 = new DefaultNodeModel({
    name: 'Workstation 1',
    color: 'rgb(0,192,255)',
});
node1.setPosition(100, 100);
let port1 = node1.addOutPort('Out');

// node 2
const node2 = new DefaultNodeModel({
    name: 'Workstation 2',
    color: 'rgb(0,192,255)',
});
node2.setPosition(250, 250);
let port2 = node2.addInPort('In');
// link them and add a label to the link
const link = port1.link<DefaultLinkModel>(port2);

link.addLabel('Hello World!');
const model = new DiagramModel();
model.addAll(node1, node2, link);
engine.setModel(model);

return engine;

}

render() {
    return (
        <div className="Test">
            <CanvasWidget className="diagram-container" engine={this.getData()}  />
         </div>
    );

}

}

export default Test;