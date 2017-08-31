import React from 'react';
import { Text, KeyboardAvoidingView, ScrollView, View, Button, findNodeHandle, Platform, Keyboard, UIManager } from 'react-native';
import { Container, TextInput, Seperator } from '../../styles'
import update from 'immutability-helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AutoGrowInputText from 'react-native-auto-grow-textinput';
console.log(AutoGrowInputText)

export default class NewBlog extends React.Component {
  textInputRefs = []
  cachedKeyboardFrame = null
  state = {
    lines: [{
      type: 'PARAGRAPH',
      value: ''
    }] // [{ type: 'PARAGRAPH', value: '.....' }]
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      this.keyboardWillShowEvent = Keyboard.addListener('keyboardWillShow', this.cacheKeyboardFrame)
    } else if (Platform.OS === 'android' && this.props.enableOnAndroid) {
      this.keyboardWillShowEvent = Keyboard.addListener('keyboardDidShow', this.cacheKeyboardFrame)
    }
  }

  cacheKeyboardFrame = (frames) => {
    this.cachedKeyboardFrame = frames;
  }

  componentWillUnmount() {
    this.keyboardWillShowEvent && this.keyboardWillShowEvent.remove()
    this.keyboardWillHideEvent && this.keyboardWillHideEvent.remove()
  }

  updateParagraph = (index) => (value) => {
    if (value[value.length - 1] === '\n') {
      this.createNewLine(index)();
    } else {
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
  }

  onContentSizeChange = (index) => () => {
    const node = findNodeHandle(this.textInputRefs[index]);
    UIManager.measureInWindow(node, (x, y, width, height) => {
      if (this.cachedKeyboardFrame) {
        const textInputBottomPosition = y + height
        const keyboardPosition = this.cachedKeyboardFrame.endCoordinates.screenY;
        if (textInputBottomPosition > keyboardPosition) {
          this.keyboardAwareSV.scrollToFocusedInput(node);
        }
      }
    });

  }

  createNewLine = (currentLineIndex) => () => {
    this.setState(update(this.state, {
      lines: {
        $splice: [[currentLineIndex + 1, 0, {
          type: 'PARAGRAPH',
          value: ''
        }]]
      }
    }), () => {
      this.textInputRefs[currentLineIndex + 1].focus();
    })
  }

  textInputRef = (index) => (elem) => {
    this.textInputRefs[index] = elem;
  }

  postBlog = () => {
    const { lines } = this.state;
    console.log(lines.join('\n'));
  }

  render() {
    const { lines } = this.state

    return (
      <Container>
        <KeyboardAwareScrollView
          ref={(elem) => this.keyboardAwareSV = elem}
          keyboardOpeningTime={0}
        >
          <TextInput
            placeholder={'Title'}
            h1
          />

          <Seperator/>

          <View>
            {lines.map((line, index) =>
              line.type === 'PARAGRAPH' ?
                <TextInput
                  onMoveShouldSetPanResponder={() => console.log('onMoveShouldSetPanResponder')}
                  key={index}
                  multiline
                  numberOfLines={1}
                  innerRef={this.textInputRef(index)}
                  value={line.value}
                  onChangeText={this.updateParagraph(index)}
                  placeholder={index === 0 ? 'Start typing' : ''}
                  onContentSizeChange={this.onContentSizeChange(index)}
                  // onSubmitEditing={this.createNewLine(index)}
                /> :
                null
            )}
          </View>

          <Button title={'Post'} onPress={this.postBlog}/>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}
