import Sparkline from './Sparkline.jsx'

const PINK = '#FF10F0'

export default function ProgressTab({ weightHistory }) {
  const tracked = Object.entries(weightHistory)
    .filter(([, h]) => h.length >= 2)
    .sort((a, b) => a[0].localeCompare(b[0]))

  return (
    <div style={{ paddingTop: 20 }}>
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Weight History</div>
      <div style={{ fontSize: 11, color: '#AAA', marginBottom: 18, lineHeight: 1.6 }}>
        Edit any weight in the Workout tab and it logs here automatically. Green = up. Red = down.
      </div>

      {tracked.length === 0 && (
        <div style={{ fontSize: 12, color: '#555', textAlign: 'center', marginTop: 40 }}>
          No history yet — tap any weight in the Workout tab to start tracking.
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {tracked.map(([name, hist]) => {
          const latest = hist[hist.length - 1], prev = hist[hist.length - 2]
          const delta  = latest.weight - prev.weight
          const dColor = delta > 0 ? '#00FF88' : delta < 0 ? '#FF4444' : '#888'
          return (
            <div key={name} style={{ background: '#141414', border: '1px solid #1E1E1E', borderRadius: 8, padding: '11px 13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{name}</div>
                  <div style={{ fontSize: 11, marginTop: 2 }}>
                    <span style={{ color: '#AAA' }}>W{latest.week}: </span>
                    <span style={{ color: PINK, fontWeight: 700 }}>{latest.weight} lb</span>
                    <span style={{ color: dColor, marginLeft: 8, fontWeight: 700 }}>
                      {delta > 0 ? `+${delta}` : `${delta}`} lb
                    </span>
                  </div>
                </div>
                <Sparkline data={hist} color={PINK} />
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {hist.map((h, i) => (
                  <span key={i} style={{ fontSize: 10, color: i === hist.length - 1 ? PINK : '#555' }}>
                    W{h.week}: {h.weight}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
