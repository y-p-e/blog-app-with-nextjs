import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

const MarkdownEditor = () => {
  const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
  return (
    <>
    <div>
      <MDEditor height={1200} value={value} onChange={(value?: string) => setValue(value)} />
    </div>
    </>
  );
}

export default MarkdownEditor;