import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,convertFromRaw  } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./RichEditor.scss"
export default function RichEditor(props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    if(props.value){
      const content = convertFromRaw(props.value);
      setEditorState(EditorState.createWithContent(content)) 
    }
  }, []);
  const richEditorClass = () =>{
    let optionClass =  ''
    if(props.isReadOnly) optionClass = 'disabled'
    return "rich-editor "+ optionClass 
  }
  const handleChangeEditor = (value) =>{
    props.onChangeEditor(convertToRaw(value.getCurrentContent()))
    setEditorState(value)
  }
  return (
    <div className={richEditorClass()}>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleChangeEditor}
          readOnly={props.isReadOnly}
        />
    </div>
  );
}
RichEditor.defaultProps={
  isReadOnly:false
}