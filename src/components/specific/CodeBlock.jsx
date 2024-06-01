import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";

function CodeBlock() {
  const [copy, setCopy] = useState(false);

  const codeString = `import SyntaxHighlighter from 'react-syntax-highlighter';
  import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    );
  };`;

  return (
    <div className="bg-[#282C34] rounded-xl overflow-hidden z-10 h-full">
      <div className="flex justify-between px-6 pt-6 pb-3">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        {copy ? (
          <button className="text-white">Copied</button>
        ) : (
          <button
            className="text-white"
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1500);
            }}
          >
            Copy
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: "27px" }}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
