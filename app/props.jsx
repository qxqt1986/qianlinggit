var React = require("react");
var ReactDOM = require("react-dom");

//props由父组件传入，在父组件中从state中获取
//数组的遍历
export default class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:[
                '你好世界',
                '我要去搬砖',
                '我要去学习'
            ]
        }
    }

    render(){
        return (
            <div>
             <SubMessage msgs={this.state.msg}/>
            </div>
        )
    }
}

class SubMessage extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        var messages = [];
        var ii = 0;
        this.props.msgs.forEach(element => {
            messages.push(
                <p key={ii}>{element}</p>
            )
            ii++
        });
        return(
            <div >{messages}</div>
        )
    }
}

{/*由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，
 class的属性只能定义在class之外。所以defaultProps要写在组件外部。*/}
 SubMessage.defaultProps = {
    msgs: ['默认的消息！']
};
