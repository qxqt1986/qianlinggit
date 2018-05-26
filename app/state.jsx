var React = require("react");
var ReactDOM = require("react-dom");

export default class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isVisible:true,
            msg:'你好世界（来自state哦！）'
        }
        this.handleClick = this.handleClick.bind(this);//
    };

    handleClick(){
         this.setState({
            isVisible : this.state.isVisible ? false : true
         })
    };

    render(){
        var styleObj = {display : this.state.isVisible ?  'block' : 'none'}
        return(
            <div >
                <button onClick={this.handleClick}>点我切换是否显示</button><br/>
                <div style={styleObj}>{this.state.msg}</div>
            </div>
        )
    }

}