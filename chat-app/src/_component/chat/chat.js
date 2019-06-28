import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Firebase from 'firebase/app';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = () => ({
  root: {
    borderRadius: "20px",
    padding: "1px 25px",
    wordWrap: "break-word"
  },
  authUser:{
    margin: "10px 0 0 auto",
    backgroundColor: "rgba(215, 228, 250, 0.3)",
    border: "1px solid #afc7f0"
  },
  otherUsers:{
    margin: "10px auto 0 0",
    backgroundColor: "rgba(247, 236, 193, 0.3)",
    border: "1px solid #e8d89b"
  }
});

class Chat extends Component {

  componentWillMount() {
    const messagesRef = Firebase.database().ref('messages')
      .orderByKey()
      .limitToLast(10);

    messagesRef.on('value', snapshot => {
      let messagesObj = snapshot.val();
      this.props.onGetMessages(messagesObj);
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

  keyPreddes = (event) => {
    if (event.key === 'Enter') {
      this.onAddMessage(event);
    }
  }

  onAddMessage = (event) => {
    event.preventDefault();
    this.props.onSendMessage(this.props.testStore.username, this.input.value);
    this.input.value = '';
  }

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Container>
          {this.props.testStore.messages.map((message, index) => {
            const _class = String(message.user) === String(this.props.testStore.username) ? classes.authUser : classes.otherUsers;
            return (
              <Container maxWidth="sm" key={index} className={`${_class} ${classes.root}`}>
                <h3>{message.user}</h3>
                <p>{message.text}</p>
              </Container >
            )
          })}
          <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
        </Container>
        <Grid container spacing={1} justify="center" alignItems='center'>
          <Grid item xs={11}>
            <TextField
              id="outlined-full-width"
              placeholder="Your message..."
              fullWidth
              margin="dense"
              multiline
              rows="3"
              variant="outlined"
              inputProps={{ ref: input => this.input = input }}
              onKeyPress={this.keyPreddes}
            />
          </Grid>
          <Grid item xs={1}>
            <Button onClick={this.onAddMessage}>Send</Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onSendMessage: (username, message) => {
      dispatch({ type: 'SEND_MESSAGE', payload: message, user: username });
    },

    onGetMessages: (messagesObj) => {
      dispatch({ type: 'GET_MESSAGES', payload: messagesObj })
    }
  })
)(withStyles(styles)(Chat));