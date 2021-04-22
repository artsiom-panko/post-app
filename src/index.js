import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component{
//     constructor(props) {
//       super(props);
//       this.state = {
//         years: 26
//       }

//     this.nextYear = this.nextYear.bind(this);
//     }

//     nextYear() {
//       console.log(1);
//       this.setState(state => ({
//         state: ++state.years
//       }))
//     }

//     render() {
//       const {name, surname, link} = this.props;
//       const {years} = this.state;
//       return (
//         <React.Fragment>
//           <h1>My name is: {name}, surname name: {surname}, years: {years}</h1>
//           <a href={link}>My profile</a>
//         </React.Fragment>
//       )
//     }
// }

// const All = () => {
//   return (
//     <React.Fragment>
//       {/* <button onClick={this.nextYear}>++</button> */}
//       <WhoAmI name="john" surname="Smith" link="vk.com"/>
//       <WhoAmI name="Art" surname="Smith" link="vk.com"/>
//       <WhoAmI name="Dim" surname="Smith" link="vk.com"/>
//     </React.Fragment>
//   )
// }

ReactDOM.render(<App/>, document.getElementById('root'));