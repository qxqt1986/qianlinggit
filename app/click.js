var React = require("react");
var ReactDOM = require("react-dom");

class ClickCountApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            ClickCount: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            ClickCount : this.state.ClickCount + 1,
        })
    }
    render(){
        return(
            <div>
                <h1>请点击下面的按钮</h1>
                <button onClick={this.handleClick}>请点击我</button>
                <h1>你一共点击了{this.state.ClickCount}次</h1>
            </div>
        )
    }
}

export default ClickCountApp