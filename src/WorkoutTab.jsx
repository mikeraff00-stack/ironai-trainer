import Sparkline from './Sparkline.jsx'
import { phaseColors, GOAL } from './data.js'

const CYAN = '#00FFFF'
const PINK = '#FF10F0'

export default function WorkoutTab({
  workout, activeDay, days, workoutData,
  setActiveDay, checked, toggleCheck,
  editingKey, editValue, setEditValue,
  startEdit, commitEdit, setEditingKey,
  editableWeights, editableReps, weightHistory
}) {
  const totalChecked = workout.exercises.filter((_, i) => checked[`${activeDay}-${i}`]).length
  const pct  = Math.round((totalChecked / GOAL) * 100)
  const barW = Math.min(pct, 100)

  const inputStyle = (color) => ({
    background: '#0A0A0A', border: `1px solid ${color}`, borderRadius: 4,
    color, fontSize: 12, padding: '2px 7px', fontFamily: 'inherit',
    outline: 'none', width: 90,
  })

  return (
    <>
      {/* Day tabs */}
      <div style={{ display: 'flex', marginTop: 14, marginBottom: 16, borderBottom: '1px solid #1E1E1E' }}>
        {days.map(day => {
          const d = workoutData[day], on = day === activeDay
          return (
            <button key={day} onClick={() => setActiveDay(day)} style={{
              flex: 1, minWidth: 54, padding: '9px 2px', background: 'transparent', border: 'none',
              borderBottom: on ? `2px solid ${d.color}` : '2px solid transparent',
              color: on ? '#FFF' : '#666', cursor: 'pointer', fontSize: 9, fontWeight: 700,
              letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'inherit',
              transition: 'all 0.15s', marginBottom: -1,
            }}>
              {day.slice(0, 3)}
              <div style={{ fontSize: 8, marginTop: 2, color: on ? d.color : '#444' }}>{d.label}</div>
            </button>
          )
        })}
      </div>

      {/* Day header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -1 }}>{activeDay}</div>
          <div style={{ fontSize: 11, color: '#DDD', marginTop: 2 }}>{workout.sub}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: totalChecked >= GOAL ? PINK : workout.color }}>{pct}%</div>
          <div style={{ fontSize: 11, color: PINK }}>{totalChecked}/{workout.exercises.length} {totalChecked >= GOAL ? '🔥' : 'done'}</div>
        </div>
      </div>

      {/* Coach note */}
      <div style={{ background: '#131313', borderLeft: `3px solid ${PINK}`, borderRadius: 6, padding: '8px 12px', marginBottom: 12, fontSize: 11, color: PINK, lineHeight: 1.5 }}>
        📋 {workout.note}
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: '#1E1E1E', borderRadius: 2, marginBottom: 12, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${barW}%`, background: totalChecked >= GOAL ? PINK : workout.color, transition: 'width 0.3s' }} />
      </div>

      {/* Color key */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 12, fontSize: 9 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#AAA' }}>
          <div style={{ width: 9, height: 9, borderRadius: 2, background: CYAN }} />REPS — tap to edit
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#AAA' }}>
          <div style={{ width: 9, height: 9, borderRadius: 2, background: PINK }} />WEIGHT — tap to edit
        </div>
      </div>

      {/* Exercise list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {workout.exercises.map((ex, i) => {
          const key   = `${activeDay}-${i}`
          const done  = checked[key]
          const pc    = phaseColors[ex.phase] || '#666'
          const curW  = editableWeights[ex.name] ?? ex.weight
          const curR  = editableReps[ex.name]    ?? ex.sets
          const hist  = weightHistory[ex.name]
          const editW = editingKey === `weight:${ex.name}`
          const editR = editingKey === `reps:${ex.name}`

          return (
            <div key={i} onClick={() => toggleCheck(key)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '11px 12px',
              background: done ? '#0D0D0D' : '#161616', borderRadius: 8, cursor: 'pointer',
              border: `1px solid ${done ? '#1A1A1A' : '#242424'}`,
              opacity: done ? 0.4 : 1, transition: 'all 0.15s',
            }}>
              <div style={{ width: 3, height: 30, borderRadius: 2, background: pc, flexShrink: 0 }} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: done ? '#555' : '#FFF', textDecoration: done ? 'line-through' : 'none', marginBottom: 5, letterSpacing: -0.2 }}>
                  {ex.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>

                  {/* REPS — CYAN */}
                  {editR ? (
                    <input autoFocus value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      onBlur={commitEdit}
                      onKeyDown={e => { if (e.key === 'Enter') commitEdit(); if (e.key === 'Escape') setEditingKey(null) }}
                      onClick={e => e.stopPropagation()}
                      style={inputStyle(CYAN)}
                    />
                  ) : (
                    <span onClick={e => startEdit(e, 'reps', ex.name, curR)}
                      style={{ fontSize: 13, fontWeight: 700, color: CYAN, borderBottom: `1px dashed ${CYAN}55`, cursor: 'text' }}>
                      {curR}
                    </span>
                  )}

                  {/* WEIGHT — PINK */}
                  {editW ? (
                    <input autoFocus value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      onBlur={commitEdit}
                      onKeyDown={e => { if (e.key === 'Enter') commitEdit(); if (e.key === 'Escape') setEditingKey(null) }}
                      onClick={e => e.stopPropagation()}
                      style={inputStyle(PINK)}
                    />
                  ) : (
                    <span onClick={e => startEdit(e, 'weight', ex.name, curW)}
                      style={{ fontSize: 12, fontWeight: 600, color: PINK, borderBottom: `1px dashed ${PINK}55`, cursor: 'text' }}>
                      {curW || <span style={{ color: `${PINK}44`, fontStyle: 'italic' }}>add weight</span>}
                    </span>
                  )}

                  {hist && hist.length >= 2 && !done && <Sparkline data={hist} color={PINK} />}
                </div>
              </div>

              <div style={{ width: 20, height: 20, borderRadius: 4, flexShrink: 0, border: `1.5px solid ${done ? pc : '#3A3A3A'}`, background: done ? pc : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.15s' }}>
                {done && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="1.8" strokeLinecap="round" /></svg>}
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ textAlign: 'center', fontSize: 9, color: '#444', marginTop: 20, letterSpacing: 1 }}>
        ~60 MIN · EXPLOSIVE → STRENGTH → ACCESSORY → CORE → MOBILITY
      </div>
    </>
  )
}
