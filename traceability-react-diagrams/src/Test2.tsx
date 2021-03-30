import React from 'react';
import './Test.css';

import createEngine, { 
    // DefaultLinkModel, 
    DefaultNodeModel,
    DiagramModel, 
    DefaultDiagramState,
    DefaultLinkModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

class Test2 extends React.Component {

getData() {
    /* 
    
    http://192.168.1.35:3000/
    */

// create an instance of the engine with all the defaults
const engine = createEngine();
// node 1
const node1 = new DefaultNodeModel({
    name: 'Child Part',
    color:'rgb(0,192,255)',
});
node1.setPosition(100, 250);
let port1 = node1.addOutPort('');
node1.addOutPort('0: {_id: 5f52a6987416d97af52688bd}');
node1.addOutPort('Date_assemblyLineId: {_id: 5ec62b1a93482f1f0037662b, shiftSupersedeFactory: NO, name: pcsv_honda_line 2,…}');
// node1.addOutPort('Barcode - 2101100101');
// node1.addOutPort('Airgap - 0');
// node1.addOutPort('Resist - 0');
// node1.addOutPort('ModelName - pcsv_honda');
// const link = port1.link<DefaultLinkModel>(port2);
// node 2
const node2 = new DefaultNodeModel({
    name: 'Air Gap Setting & valve Assembly (Workstation 1)',
    color: 'rgb(0,192,255)',
});
node2.setPosition(70,450);
let port2 = node2.addInPort('');
// let port2 = node2.addOutPort('Housing Resistance');
node2.addOutPort('Housing Depth');
node2.addOutPort('Fix core & moving core Height');
node2.addOutPort('Air Gap');
node2.addOutPort('Air Pressure');
node2.addOutPort('U-Bracket CD condition');
node2.addOutPort('Manual Assembly');
node2.addOutPort('Bar Code Generation');
// link them and add a label to the link
// const link = port1.link<DefaultLinkModel>(port2);
 const link = port1.link<DefaultLinkModel>(port2);
//  link.addLabel('prodcution starts');

// node 3
const node3 = new DefaultNodeModel({
    name: 'End of Line (Workstation 2)',
    color: 'rgb(0,192,255)'
});

node3.setPosition(70, 650);
let port3 = node3.addInPort('');
let port3Out = node3.addOutPort('Crimping of Slotted Bracted & Threaded Bracket assy');
node3.addOutPort('Resistance Checking');
node3.addOutPort('Mininmum Operating Voltage');
node3.addOutPort('Maximum Reset Voltage');
node3.addOutPort('Seat leakage');
node3.addOutPort('Body leakage');

 const link2 = port2.link<DefaultLinkModel>(port3);
// const link2 = port2Out.link(port3);
// link.addLabel('Semi-finished goods');

// node 4
const node4 = new DefaultNodeModel({
    name: 'Finished good',
    color: 'rgb(0,192,255)'
});
node4.setPosition(70, 850);
let port4 = node4.addInPort('');
node4.addOutPort('Operator - a');
node4.addOutPort('Status - GO');

const link3 = port3.link<DefaultLinkModel>(port4);
// const link3 = port3Out.link<DefaultLinkModel>(port4);


const node5 = new DefaultNodeModel({
    name: 'End of Line (Workstation 3)',
    color: 'rgb(0,192,255)'
});

node5.setPosition(470, 250);
let port5 = node5.addInPort('');
 node5.addOutPort('Crimping of Slotted Bracted & Threaded Bracket assy');
node5.addOutPort('Resistance Checking');
node5.addOutPort('Mininmum Operating Voltage');
node5.addOutPort('Maximum Reset Voltage');
node5.addOutPort('Seat leakage');
node5.addOutPort('Body leakage');

// const link2 = port2.link<DefaultLinkModel>(port3);



const node6 = new DefaultNodeModel({
    name: 'End of Line (Workstation 4)',
    color: 'rgb(0,192,255)'
});

node6.setPosition(470, 450);
let port6 = node6.addInPort('');
 node6.addOutPort('Crimping of Slotted Bracted & Threaded Bracket assy');
node6.addOutPort('Resistance Checking');
node6.addOutPort('Mininmum Operating Voltage');
node6.addOutPort('Maximum Reset Voltage');
node6.addOutPort('Seat leakage');
node6.addOutPort('Body leakage');

const link4 = port5.link<DefaultLinkModel>(port6);



const node7 = new DefaultNodeModel({
    name: 'End of Line (Workstation 4)',
    color: 'rgb(0,192,255)'
});

node7.setPosition(470, 650);
let port7 = node7.addInPort('');
 node7.addOutPort('Crimping of Slotted Bracted & Threaded Bracket assy');
node7.addOutPort('Resistance Checking');
node7.addOutPort('Mininmum Operating Voltage');
node7.addOutPort('Maximum Reset Voltage');
node7.addOutPort('Seat leakage');
node7.addOutPort('Body leakage');

const link5 = port6.link<DefaultLinkModel>(port7);


const node8= new DefaultNodeModel({
    name: 'End of Line (Workstation 2)',
    color: 'rgb(0,192,255)'
});

node8.setPosition(180, 5);
// let port8 = node8.addInPort('');
let port8 = node8.addOutPort('Crimping of Slotted Bracted & Threaded Bracket assy');
node8.addOutPort('Resistance Checking');
node8.addOutPort('Mininmum Operating Voltage');
node8.addOutPort('Maximum Reset Voltage');
node8.addOutPort('Seat leakage');
node8.addOutPort('Body leakage');

 const link6 = port1.link<DefaultLinkModel>(port8);
 const link7 = port5.link<DefaultLinkModel>(port8);




const node9= new DefaultNodeModel({
    name: 'End of Line (Workstation 2)',
    color: 'rgb(0,192,255)'
});

node9.setPosition(980, 250);
// let port8 = node8.addInPort('');
let port9 = node9.addOutPort('Crimping of Slotted Bracted & Threaded Bracket assy');
node9.addOutPort('Resistance Checking');
node9.addOutPort('Mininmum Operating Voltage');
node9.addOutPort('Maximum Reset Voltage');
node9.addOutPort('Seat leakage');
node9.addOutPort('Body leakage');

 const link8 = port5.link<DefaultLinkModel>(port9);
 const link9 = port6.link<DefaultLinkModel>(port9);
 const link10 = port9.link<DefaultLinkModel>(port8);
// const link4 = port3Out.link<DefaultLinkModel>(port5);
// link.addLabel('Semi-finished goods');
// link.addLabel('Hello World!');
const model = new DiagramModel();
model.addAll(node1, node2, node3, node4,node5,node6,node7,node8,node9,link,link2,link3,link4,link5,link6,link7,link8,link9,link10);
engine.setModel(model);

const state = engine.getStateMachine().getCurrentState();
if (state instanceof DefaultDiagramState) {
    state.dragNewLink.config.allowLooseLinks = false;

}

return engine;

}

render() {
    return (
        <div className="Test">
            <CanvasWidget className="diagram-container" engine={this.getData()} />
         </div>
    );

}

}

export default Test2;