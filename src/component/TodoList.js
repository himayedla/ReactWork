import React,{Component} from 'react';
import shortid from 'shortid';


class Todo extends Component{
    constructor(props){
        super(props)

        this.state = {
            text:'',
            

         }
        

    }

    handleChange(event){
        this.setState({
            text: event.target.value
            
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //submit the form
        this.props.onSubmit({
            id:shortid.generate(),
            text: this.state.text,
            complete:false
            
        })
        this.setState({
            text:" "
        })
    }


    render(){
        return(
            <div>
                <h1>My Todo List</h1>
                <hr/>
                <div className="mytodolist">
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input name="text" value={this.state.text} onChange={this.handleChange.bind(this)} placeholder="enter task"/>
                            <button type="submit" onClick={this.handleSubmit}>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Todo;




/*const Todo = () => {
    return (
        <div>
            <h1>My Todo List</h1>
            <hr/>


        </div>
    )
}
*/