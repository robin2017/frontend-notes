import React, { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './editor.scss';

export default (props) => {
  const { onChange, value } = props;
  const [editorValue, setEditorValue] = useState(BraftEditor.createEditorState(value));
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (!init && value) {
      setInit(true);
      setEditorValue(BraftEditor.createEditorState(value));
    }
  }, [value]);
  const handleChange = (st) => {
    setInit(true);
    const isEmpty = st.isEmpty();
    const html = st.toHTML();
    setEditorValue(st);
    onChange(isEmpty ? '' : html);
  };
  return <BraftEditor className="editor-container" {...props} value={editorValue} onChange={handleChange} />;
};
