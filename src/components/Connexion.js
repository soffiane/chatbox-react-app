import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
//Redirect permet de faire des redirection

class Connexion extends Component {
    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        //on annule l'evenement par defaut du formulaire : on gere nous meme l'action Submit
        event.preventDefault()
        this.setState({goToChat: true})
    }



    render() {
        //si le bouton est cliqué, on cree un component redirect
        if (this.state.goToChat) {
            //cette forme de Redirect n'enregistre pas l'historique de navigation
            //il faut utiliser la props push pour garder l'historique
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
        }

        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.handleSubmit}>
                    {/* quand on submit le forme, le redirect va nous envoyer sur une autre page */}
                    <input value={this.state.pseudo} onChange={this.handleChange} placeholder='Pseudo' type='text' required />
                    <button type='submit'>Connexion</button>
                </form>

            </div>
        );
    }
}

export default Connexion;