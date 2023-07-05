import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';


  // class WhoAmI extends Component{
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       years:24
  //     }
  //     //  Firts version
  //     //this.nextYears = this.nextYears.bind(this);

  //     //  Second version 
  //     this.nextYears = () =>{
  //       this.setState(state =>({
  //         years: ++state.years
  //       }))
  //     }
  //     this.lastYears = () =>{
  //       this.setState(state =>({
  //           years: --state.years
  //       }))
  //     }
  //   }
  //   //State first version
  // /* nextYears(){
  //     console.log(1);
  //     this.setState(state =>({
  //       years: ++state.years
  //     }))
  //   }
  //   /* lastYears(){
  //     console.log(1);
  //     this.setState(state =>({
  //       years: --state.years
  //     }))
  //   }*/
  //   render(){
  //       const {name, surname , link} = this.props;
  //       const  {years} = this.state;
  //       return(
  //         <>
            
  //           <h1> Name is {name} , surname - {surname},years {years}</h1> 
  //           <button onClick={this.nextYears}>+</button> <button onClick={this.lastYears}>-</button><br/>
  //           <a href={link}>My profile</a>
  //         </>
  //       )
  //   }
  // }


  // const All = () =>{
  //   return (
  //     <div className='state'>
  //   <WhoAmI name ="Bruce"
  //             surname="Waine"
  //             link="https://www.google.ru" 
  //             />
    
  //   <WhoAmI name ="Oliver"
  //             surname="Queen"
  //             link="https://www.google.ru" />
    
  //   <WhoAmI name ="Peter"
  //             surname="Parker"
  //             link="https://www.google.ru" />

  //     </div>
  //   )
  // }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/> 
  </React.StrictMode>
);
