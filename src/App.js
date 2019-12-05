import React, { Component, createRef } from 'react';
import './App.css';
import Formulaire from './components/Formulaire'
import Message from './components/Message';
//import rebase - firebase
import base from './firebase'
//gerer les animations : on va englober du code avec ces component pour les styliser
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './animations.css'

class App extends Component {
  //on gere le state de messages dans le component le plus "haut" de l'application
  state = {
    //objet vide
    messages: {},
    //on peut recuperer le pseudo en utilisant les informations stockée par react router
    //et notamment la props 'match', l'attribut params qui est le parametre de l'URL
    pseudo: this.props.match.params.pseudo
  }

  //on crée une Ref sur l'element du DOM messages pour scroller 
  //automatiquement à l'ajout d'un message (MAJ du state messages)
  //REF permet de travailler sur les éléments liés au DOM
  messagesRef = createRef()

  //methode executée au chargement du component
  componentDidMount() {
    //on va synchroniser un state avec la BDD
    //premier param : le chemin dans la BDD
    //deuxieme param : options (contexte et state a synchro)
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  //methode executée a la modification du component
  componentDidUpdate() {
    const ref = this.messagesRef.current
    //pour laisser le scroll en bas
    ref.scrollTop = ref.scrollHigh
  }

  //on ajoute au state messages le message passé depuis le Formulaire
  //cette methode doit etre executée au moment de valider le Formulaire
  addMessage = message => {
    const messages = { ...this.state.messages }
    //on ajoute notre message a la liste de message avec comme id un timestamp
    messages[`message-${Date.now()}`] = message
    //on va supprimer les elements de messages au dela de 10
    //plutot que de faire un delete : on va mettre les elements a supprimer a null
    //pour que Firebase les efface de son coté
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => messages[key] = null)
    this.setState({ messages })
  }

  //on compare le pseudo de la personne connectée avec celui du message
  isCurrentUser = pseudo => pseudo === this.state.pseudo

  render() {

    //on recupere un tableau (Array) des id des messages
    //pour chaque clé, on fait le rendu du component Message
    //on instancie le component Message en lui passant les props message et pseudo
    //on va entourer chaque message d'un CSSTransition : il recupere la cle puisqu'il devient l'element rendu par render()
    //timeout = durée de l'animation en ms
    //classNames = feuille de CSS,on crée un fichier css dont les methodes contiennent .fade+un evenement : animations.css
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition key={key} timeout={500} classNames='fade'>
          <Message
            isCurrentUser={this.isCurrentUser}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo} />
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <div>
          <div className='messages' ref={this.messagesRef}>
            {/* on remplace la balise div du message par TransitionGroup */}
            <TransitionGroup className="message">
              {messages}
            </TransitionGroup>
          </div>
        </div>
        {/* on passe la methode en parametre du formulaire et le pseudo et la taille des commentaires dont on va avoir besoin dans le formulaire*/}
        <Formulaire length={140} addMessage={this.addMessage} pseudo={this.state.pseudo} />
      </div>
    );
  }
}

export default App;
