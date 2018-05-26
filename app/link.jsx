var React = require("react");
var ReactDOM = require("react-dom");

//minxins已经被废弃了
export default class EasyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : "坚持学习，就会成功",
            isEasy : true
        }
    }
    render(){
        return(
            <div>
                <p>我想说{this.state.message}</p>
                <h1>学习React简单吗？ {this.state.isEasy ? "很简单" : "不简单"}</h1>
    
            </div>
        )
    }
}