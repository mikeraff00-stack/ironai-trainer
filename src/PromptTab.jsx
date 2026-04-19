import { useState } from 'react'
import { AGENT_PROMPT } from './data.js'

const PINK = '#FF10F0'

export default function PromptTab() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(AGENT_PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>IronAI Agent Prompt</div>
      <div style={{ fontSize: 11, color: '#AAA', marginBottom: 6, lineHeight: 1.6 }}>
        Paste into a Claude Project or ChatGPT Custom GPT. IronAI knows your full profile every session — no re-explaining.
      </div>
      <div style={{ fontSize: 10, color: PINK, marginBottom: 14 }}>
        Works with: Claude Projects · ChatGPT Custom GPT · Any LLM system prompt
      </div>
      <button onClick={copy} style={{
        width: '100%', padding: '11px', marginBottom: 12,
        background: copied ? '#00FF8814' : '#141414',
        border: `1px solid ${copied ? '#00FF88' : PINK}`,
        borderRadius: 8, color: copied ? '#00FF88' : PINK,
        fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
        letterSpacing: 1, transition: 'all 0.2s',
      }}>
        {copied ? '✓  COPIED' : 'COPY PROMPT'}
      </button>
      <div style={{ background: '#0D0D0D', border: '1px solid #1E1E1E', borderRadius: 8, padding: '13px', fontSize: 10, color: '#CCC', lineHeight: 1.9, whiteSpace: 'pre-wrap', maxHeight: 420, overflowY: 'auto' }}>
        {AGENT_PROMPT}
      </div>
    </div>
  )
}
