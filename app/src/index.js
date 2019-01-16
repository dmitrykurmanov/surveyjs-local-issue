import React, { Component } from "react";
import ReactDOM from "react-dom";

import { SurveyEditor } from "surveyjs-editor";
// import {SurveyEditor} from '../../editor/package/surveyeditor.min.js';

import "./widgets.js";

import "./styles.css";

import "surveyjs-editor/surveyeditor.min.css";

class App extends Component {
  /** @type { SurveyEditor } */
  editor;

  componentDidMount() {
    this.editor = new SurveyEditor("surveyEditorContainer", {
      showJSONEditorTab: false,
      haveCommercialLicense: true
    });

    this.editor.text = `{
        elements: [
          {
            type: 'text',
            inputMask: 'datetime',
            inputFormat: 'dd/mm/yyyy',
            name: 'date1',
            title: 'Date:',
          },
          {
            type: 'text',
            inputMask: 'datetime',
            inputFormat: 'mm/dd/yyyy',
            name: 'date2',
            title: 'Date:',
          },
          {
            type: 'text',
            inputMask: 'currency',
            name: 'currency',
            title: 'Currency:',
          },
          {
            type: 'text',
            inputMask: 'decimal',
            name: 'decimal',
            title: 'Decimal:',
          },
          {
            type: 'text',
            inputMask: 'phone',
            name: 'phone',
            title: 'Phone:',
          },
          {
            type: 'text',
            inputMask: 'ip',
            name: 'ip',
            title: 'IP address:',
          },
          {
            type: 'text',
            inputMask: 'email',
            name: 'email',
            title: 'Email address:',
          },
        ],
      }`;

    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <h1>InputMask example</h1>
        <div id="surveyEditorContainer" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
