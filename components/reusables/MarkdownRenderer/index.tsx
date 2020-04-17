import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SyntaxHighlighter } from './SyntaxHighlighter';

const customRenders: {
  [nodeType: string]: React.ElementType<any>;
} = {
  'code': SyntaxHighlighter
}

interface MarkdownRendererProps {
  markdown: string;
}


export const MarkdownRenderer = ({
  markdown
}: MarkdownRendererProps) => {
  return (
    <ReactMarkdown renderers={customRenders} children={markdown} />
  )
}
