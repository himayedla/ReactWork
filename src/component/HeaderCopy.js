import React,{Component} from 'react';

/*class based Component*/
class Header extends Component{
    render(){
        
        const mystyles = {
            header:{
                background:'teal'
            },
            logo:{
                color:'white',
                padding:'5px',
                fontSize:'30px',
                textAlign:'center'
            }
        }
        
        
        return(
            <header style={mystyles.header}>
                <div style={mystyles.logo}>My First React App</div>
                
                <hr/>
        
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