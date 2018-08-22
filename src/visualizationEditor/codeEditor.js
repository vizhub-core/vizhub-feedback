import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

// This component depends on the following CSS:
//   codemirror/lib/codemirror.css
//   ../css/ubuntu.css

const modes = {
  '.html': 'htmlmixed',
  '.css': 'css',
  '.js': 'javascript'
};
const extension = fileName => fileName.substr(fileName.lastIndexOf('.'));
const getMode = fileName => modes[extension(fileName)];

export class CodeEditor extends Component {

  constructor(props) {
    super(props);

    // For end-to-end testing.
    this.containerDiv = React.createRef();
    this.exposeValueOnContainerDiv = value => {
      this.containerDiv.current.value = value;
    };
  }

  componentDidMount() {
    this.exposeValueOnContainerDiv(this.value);
  }

  render() {
    const { fileName, value, onTextChange } = this.props;

    if (!process.browser) {
      return null;
    }

    require('codemirror/mode/javascript/javascript');
    require('codemirror/mode/xml/xml');
    require('codemirror/mode/css/css');
    require('codemirror/mode/htmlmixed/htmlmixed');

    return (
      <div
        className='code-editor-container test-code-editor'
        ref={this.containerDiv}
      >
        <CodeMirror
          value={value}
          options={{
            mode: getMode(fileName),
            theme: 'ubuntu',
            lineNumbers: true,
            lineWrapping: true
          }}
          onBeforeChange={(editor, data, value) => {
            onTextChange(value)
          }}
          editorDidMount={editor => {
            this.value = editor.getValue();
          }}
        />
      </div>
    );
  }
}
