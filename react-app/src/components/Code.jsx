import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

export default function Code({ exampleCode }) {
  return (
    <Highlight {...defaultProps} code={exampleCode} language="jsx" theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className + ' extra-padding'} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
