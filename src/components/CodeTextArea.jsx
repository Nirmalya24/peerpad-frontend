import MonacoEditor from "@uiw/react-monacoeditor";

export default function CodeTextArea(props) {
  return (
    <MonacoEditor
      language={props.language}
      value={props.value}
      options={{
        theme: "vs-dark",
        bracketPairColorization: true,
        inlineSuggest: true,
        autoClosingBrackets: true,
        autoIndent: true,
        autoComplete: true,
      }}
    />
  );
}
