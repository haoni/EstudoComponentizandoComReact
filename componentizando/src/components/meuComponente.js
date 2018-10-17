import React from 'react'

class MeuComponente extends React.Component {

    constructor(props){
        super(props)
        this.state = { value: props.initialValue}
    }

    Somar(valor){
        this.setState({...this.state, value: this.state.value + valor});
    }

    render(){
        return (
            <div>
                <button onClick={() => { this.Somar(1)}} >{this.props.encrementText}</button>
                <h1>{this.state.value}</h1>
                <button onClick={() => {this.Somar(-1)}}>{this.props.dencrementText}</button>
            </div>
        );
    }
}

export default MeuComponente;