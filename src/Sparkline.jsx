const PINK = '#FF10F0'

export default function Sparkline({ data, color = PINK }) {
  if (!data || data.length < 2) return null
  const vals = data.map(d => d.weight)
  const min = Math.min(...vals), max = Math.max(...vals)
  const range = max - min || 1
  const W = 70, H = 24, p = 3
  const pts = vals.map((v, i) => {
    const x = p + (i / (vals.length - 1)) * (W - p * 2)
    const y = H - p - ((v - min) / range) * (H - p * 2)
    return `${x},${y}`
  }).join(' ')
  const last = vals[vals.length - 1], prev = vals[vals.length - 2]
  const up = last > prev, down = last < prev
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <svg width={W} height={H}>
        <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        {vals.map((v, i) => {
          const x = p + (i / (vals.length - 1)) * (W - p * 2)
          const y = H - p - ((v - min) / range) * (H - p * 2)
          return <circle key={i} cx={x} cy={y} r={i === vals.length - 1 ? 2.5 : 1.5} fill={i === vals.length - 1 ? color : '#2A2A2A'} />
        })}
      </svg>
      <span style={{ fontSize: 10, color: up ? '#00FF88' : down ? '#FF4444' : '#888', fontWeight: 700 }}>
        {up ? '↑' : down ? '↓' : '→'}
      </span>
    </div>
  )
}
