import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import NewsList from './component/NewsList';
import JSON from './db.json';
import Todo from './component/TodoList';

class App extends Component {
    constructor(){
        super()

        this.state = {
            news: JSON,
            filtered:JSON,
            todos: [],
            
        }
    }


    filterNews(userInput){
        let output = this.state.news.filter((item) => {
            return (item.title.toLowerCase().indexOf(userInput) > -1 || item.type.toLowerCase().indexOf(userInput) > -1)

        })
        this.setState({filtered:output})
    }

    addTodo(todo){
        this.setState({
            todos: [todo,...this.state.todos]
        })

     }


    render(){
       // console.log(this.state.news);
        return (
            <React.Fragment>
                <Header newsSearch={(data) => {this.filterNews(data)}}></Header>
                <div>This is my first App</div>
                <NewsList newsData={this.state.filtered}></NewsList>
                <Todo onSubmit={(item)=> {this.addTodo(item)}}></Todo>
                <h1>
                    {
                         this.state.todos.map(todo => (
                             <div>
                                 <div key={todo.id}><input className="box" type="checkbox"></input>{todo.text}</div>
                            </div>
                         ))
                    }
                </h1>
            </React.Fragment>        
        ) 

    }
    
}

ReactDOM.render(<App />, document.getElementById('root'));


/**
 From parent to child, to pass the data we use props
 From child to parent we use function(call back)
 */
