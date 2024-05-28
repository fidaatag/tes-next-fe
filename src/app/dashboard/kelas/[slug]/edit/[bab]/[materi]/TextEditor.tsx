"use client"

import React from "react";
import TextEditorToolbar, { modules, formats } from './TextEditorToolbar'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"


type TextEditorProps = {
  valueText? : (data: any) => void;
	value? : any
}


const TextEditor = ({valueText, value} : TextEditorProps) => {

  return (
    <>
      	<TextEditorToolbar toolbarId={'t1'} />
				<ReactQuill
					theme="snow"
					placeholder={"Deskripsikan inovasimu secara rinci dan detail."}
					modules={modules('t1')}
					formats={formats}
					className='h-96'
          onChange={valueText}
					value={value}
				/>
    </>
  );
};

export default TextEditor;
