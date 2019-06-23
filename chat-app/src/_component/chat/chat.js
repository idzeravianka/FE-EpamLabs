import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Firebase from 'firebase';
import './chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      username: ''
    };
  }

  componentWillMount() {
    const username = this.props.testStore.username;
    this.setState({username: username ? username : 'Unknown'})
    const messagesRef = Firebase.database().ref('messages')
      .orderByKey()
      .limitToLast(10);

    messagesRef.on('value', snapshot => {
      let messagesObj = snapshot.val();
      let messages = [];
      Object.keys(messagesObj).forEach(key =>  messages.push(messagesObj[key]));
      messages = messages.map((message) => { return {text: message.text, user: message.user, id: message.key}})
      this.setState({
        messages: messages,
      });
    });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  onAddMessage = (event) => {
    event.preventDefault();
    Firebase.database().ref('messages').push({text: this.input.value, user: this.state.username});
    this.props.onAddMessage(this.input.value);
    this.input.value = '';
  }

  signOut = () =>{
    Firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>
            {this.state.messages.map((message) => {
             const _class = message.user === this.state.username ? 'chat-component__message_left chat-component' : 'chat-component__message_right chat-component';
            return (
                <div className={_class}>
                  <h3>{message.user}</h3>
                  <p>{message.text}</p>
                </div>
            )
            })}
            <div style={{ float:"left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
        </div>
      <div className="chat-component">
        <textarea className="chat-component__text-area" ref={node => this.input = node}></textarea>
        <button className="chat-component__send-btn " onClick={this.onAddMessage}>Send</button>
      </div>
      <button onClick={this.signOut}>SignOut</button>
    </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddMessage: (message) => {
      dispatch({ type: 'SEND_MESSAGE', payload: message});
    }
  })
)(Chat);