import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import dynamic from 'next/dynamic'

type MarkdownEditorProps = {
  text: string | undefined
  setText: React.Dispatch<React.SetStateAction<string | undefined>>
}

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false })

const MarkdownEditor = (props: MarkdownEditorProps) => {
  const { text, setText } = props
  return (
    <>
      <div>
        <MDEditor
          height={420}
          value={text}
          onChange={(value?: string | undefined) => setText(value)}
        />
      </div>
    </>
  )
}

export default MarkdownEditor
