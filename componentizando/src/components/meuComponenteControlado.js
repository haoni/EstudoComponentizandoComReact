import React from 'react'

class MeuComponenteControlado extends React.Component {
    constructor(props) {
        super(props)

        //this.state = { value: this.props.value }
        this.state = { value: '' }
        
        // Aqui faremos o bind do nosso método onChangeHandler ao this.
        // No javascript o this é dinâmico, ele nem sempre representar a contexto de quem o contém, 
        // mas sim o contexto de quem o envocou. logo se não fizessemos o código abaixo iria dar undefined
        // pois o componente que o envocou este componente pode não ter uma definição para o método onChangeHandler.
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event){
        this.setState({ value: event.target.value})
    }

    render (){
        return (
            <div>
                <input value={this.state.value} onChange={this.onChangeHandler}></input>
                <label>{this.state.value}</label>
            </div>
        );

    }
}

export default MeuComponenteControlado