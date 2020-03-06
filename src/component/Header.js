import React,{Component} from 'react';
import './Header.css'

/*class based Component*/
class Header extends Component{
    constructor(props){
        super()

        this.state = {
            title:"My First React App",
            keywords:'User Input here'
        }
    }

    inputChange(event){
        console.log(event.target.value);
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value);
    }
    render(){
        
        return(
            <header>
                <div className="logo"
                    onClick={()=>console.log("clicked")}>
                        {this.state.title}
                </div>
                <center>
                    <input type='text'
                    onChange={this.inputChange.bind(this)}/>
                    <p>{this.state.keywords}</p>
                </center>
            </header>
            
         )
    }
}










/* Functional Component*/

/*const Header = () => {
    return(
        <div>
            <center>
            <h1>My First React App</h1>
            </center>
            <hr/>
        </div>
        
    )
}
*/

export default Header;