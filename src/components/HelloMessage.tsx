import React from "react"
const style = {
    fontSize: 20,
    color: 'red',
    backgroundColor: 'white'
}
interface Props {
    name?: string;
    disabled?: boolean;
}
interface State {
    count: number;
}
class HelloMessage extends React.Component<Props> {
    state: State;
    constructor(props: Props) {
        super(props)
        this.state = { count: 0 }
    }
    handleClickCount() {
        this.setState({count: ++this.state.count})
    }
    render() {
        return (
            <div>
                <div style={style}>this is {this.props.name} </div>
                <div>Count: { this.state.count}</div>
                <button onClick={()=>this.setState({count: --this.state.count})}>reduce</button>
                <button onClick={this.handleClickCount.bind(this)}>plus</button>
            </div>
        )
    }
}

export default HelloMessage