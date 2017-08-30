import React from 'react';
import { Text } from 'react-native';
import { Container, TextInput, Seperator } from '../../styles'
import update from 'immutability-helper';

export default class NewBlog extends React.Component {
  textInputRefs = []
  state = {
    lines: [{
      type: 'PARAGRAPH',
      value: ''
    }] // [{ type: 'PARAGRAPH', value: '.....' }]
  }

  updateParagraph = (index) => (value) => {
    this.setState(update(this.state, {
      lines: {
        [index]: {
          value: {
            $set: value
          }
        }
      }
    }))
  }

  createNewLine = () => {
    this.setState(update(this.state, {
      lines: {
        $push: [{
          type: 'PARAGRAPH',
          value: ''
        }]
      }
    }), () => {
      this.textInputRefs[this.textInputRefs.length - 1].focus();
    })
  }

  textInputRef = (index) => (elem) => {
    this.textInputRefs[index] = elem;
  }

  render() {
    const { lines } = this.state

    return (
      <Container>
        <TextInput
          placeholder={'Title'}
          h1
        />

        <Seperator/>

        {lines.map((line, index) =>
          line.type === 'PARAGRAPH' ?
            <TextInput
              key={index}
              innerRef={this.textInputRef(index)}
              value={line.value}
              onChangeText={this.updateParagraph(index)}
              placeholder={index === 0 ? 'Start typing' : ''}
              onSubmitEditing={this.createNewLine}
            /> :
            null
        )}
      </Container>
    );
  }
}
