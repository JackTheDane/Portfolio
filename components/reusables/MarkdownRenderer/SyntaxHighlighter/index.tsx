import React from 'react'

export interface SyntaxHighlighterProps {
  value: string;
  language: string;
}

export const SyntaxHighlighter = ({
  value,
  language
}: SyntaxHighlighterProps) => {
  return (
    <pre className="code" data-lang={language && language.toUpperCase()} ><code>{value}</code></pre>
  )
}
