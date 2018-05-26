var React = require("react");
var ReactDOM = require("react-dom");

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : "坚持学习，就会成功",
            isEasy : true
        }
        console.log('constructor.......')
        this.remove = this.remove.bind(this)
    }
    componentWillMount(){
        console.log('componentWillMount...');
        this.setState({
            message : 'componentWillMount'
        })
    }
    componentDidMount(){
        console.log('componentDidMount...');
        this.setState({
            message : 'componentDidMount'
        })
    }
    componentWillUnmount(){
        alert('componentWillUnmount...')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps...')
    }
    componentWillUpdate(){
        console.log('componentWillUpdate...')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate...')
    }
    componentDidCatch(){
        console.log('componentDidCatch...')
    }
    remove(){
        React.remove(0);
    }
    render(){
        console.log('render...')
        return(
            <div>
                <p>{this.state.message}</p>
               
            </div>
        )
    }
}