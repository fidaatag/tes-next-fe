"use client";

import TextEditorToolbar, { modules, formats } from "./TextEditorToolbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TextEditorProps = {
  onChange?: (data: any) => void;
  value?: any;
};

const TextEditor = ({ onChange, value }: TextEditorProps) => {
  return (
    <>
      <TextEditorToolbar toolbarId={"t1"} />
      <ReactQuill
        theme="snow"
        placeholder={"Deskripsikan inovasimu secara rinci dan detail."}
        modules={modules("t1")}
        formats={formats}
        className="h-96"
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default TextEditor;
