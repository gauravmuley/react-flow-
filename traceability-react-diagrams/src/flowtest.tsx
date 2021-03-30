import { render } from '@testing-library/react';
import React from 'react';
import ReactFlow from 'react-flow-renderer';

class flowtest extends React.Component{
  
elements= [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

render(){
    return (
        <div className="flowtest" style={{ height: 300 }}>
            <ReactFlow elements={this.elements} />
         </div>
    );

}
}
export default flowtest;