import React, { Component } from 'react';

class Formulaire extends Component {

state = {
    message: '',
    length: this.props.length
}

    //quand on submit le form, on ajoute le message dans la liste de messages
    handleSubmit = event => {
        event.preventDefault()
        //ici on doit recuperer le message et le pseudo a ajouter dans la liste de message
        this.createMessage()
    }

    //cette emthode permet de destructurer le message et d'y ajouter le pseudo passé en props
    createMessage = () => {
        //on recupere les props passé en parametre depuis App.js
        const {addMessage, pseudo, length} = this.props
        
        //on fabrique notre message avec le pseudo et le contenu
        const message = {
            pseudo,
            message: this.state.message
        }

        //on l'ajoute a la state massages
        addMessage(message)
        //reset du champ de saisie et du compteur de char
        this.setState({message:'', length})
    }

    //le formulaire met à jour le state
    handleChange = event => {
        event.preventDefault()
        const message = event.target.value
        const length = this.props.length -  message.length
        this.setState({message,length})
    }

    //valider le message en appuyant sur entree
    handleKeyUp = event => {
        if(event.key === 'Enter'){
            this.createMessage()
        }
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                {/* onKeyUp est l'evenement quand on relache une touche */}
                <textarea onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.message} required maxLength='140' />
                <div className='info'>
                    {this.state.length}
               </div>
                <button type='submit'>
                    Envoyer
                </button>
            </form>
        );
    }
}

export default Formulaire;