import { useState } from 'react'
import { workoutData, days } from './data.js'
import { useLocalStorage } from './useLocalStorage.js'
import WorkoutTab from './WorkoutTab.jsx'
import ProgressTab from './ProgressTab.jsx'
import PromptTab from './PromptTab.jsx'

const PINK = '#FF10F0'
const CYAN = '#00FFFF'

// Build initial editable state from workout data
const buildInitialWeights = () => {
  const out = {}
  Object.values(workoutData).forEach(day => day.exercises.forEach(ex => { out[ex.name] = ex.weight }))
  return out
}
const buildInitialReps = () => {
  const out = {}
  Object.values(workoutData).forEach(day => day.exercises.forEach(ex => { out[ex.name] = ex.sets }))
  return out
}
const buildInitialHistory = () => {
  const out = {}
  Object.values(workoutData).forEach(day => {
    day.exercises.forEach(ex => {
      const n = parseFloat(ex.weight)
      if (!isNaN(n)) out[ex.name] = [
        { week: 7, weight: n - 10 },
        { week: 8, weight: n - 5 },
        { week: 9, weight: n }
      ]
    })
  })
  return out
}

export default function App() {
  const [activeDay, setActiveDay]     = useState('Monday')
  const [activeTab, setActiveTab]     = useState('workout')
  const [editingKey, setEditingKey]   = useState(null)
  const [editValue, setEditValue]     = useState('')

  // All persisted in localStorage — survives refresh
  const [checked, setChecked]               = useLocalStorage('ironai-checked', {})
  const [editableWeights, setEditableWeights] = useLocalStorage('ironai-weights', buildInitialWeights())
  const [editableReps, setEditableReps]       = useLocalStorage('ironai-reps', buildInitialReps())
  const [weightHistory, setWeightHistory]     = useLocalStorage('ironai-history', buildInitialHistory())

  const toggleCheck = (key) => {
    if (editingKey) return
    setChecked(p => ({ ...p, [key]: !p[key] }))
  }

  const startEdit = (e, type, name, val) => {
    e.stopPropagation()
    setEditingKey(`${type}:${name}`)
    setEditValue(val)
  }

  const commitEdit = () => {
    if (!editingKey) return
    const colonIdx = editingKey.indexOf(':')
    const type = editingKey.slice(0, colonIdx)
    const name = editingKey.slice(colonIdx + 1)
    if (type === 'weight') {
      setEditableWeights(p => ({ ...p, [name]: editValue }))
      const n = parseFloat(editValue)
      if (!isNaN(n)) {
        setWeightHistory(p => {
          const hist     = p[name] || []
          const lastWeek = hist.length ? hist[hist.length - 1].week : 8
          return { ...p, [name]: [...hist, { week: lastWeek + 1, weight: n }] }
        })
      }
    } else {
      setEditableReps(p => ({ ...p, [name]: editValue }))
    }
    setEditingKey(null)
  }

  const workout = workoutData[activeDay]

  const tabBtn = (t, label) => (
    <button onClick={() => setActiveTab(t)} style={{
      flex: 1, padding: '11px 4px', background: 'transparent', border: 'none',
      borderBottom: activeTab === t ? `2px solid ${PINK}` : '2px solid #222',
      color: activeTab === t ? '#FFF' : '#666', cursor: 'pointer',
      fontSize: 9, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
      fontFamily: 'inherit', transition: 'all 0.15s',
    }}>{label}</button>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0A0A0A', fontFamily: "'DM Mono','Courier New',monospace", color: '#FFF' }}>

      {/* HEADER */}
      <div style={{ background: '#111', borderBottom: '1px solid #222', padding: '16px 16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 4, height: 24, background: PINK, borderRadius: 2 }} />
            <div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: '#AAA', textTransform: 'uppercase' }}>IronAI Trainer · Week 9</div>
              <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: -0.5 }}>Joint-Friendly Performance</div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            {tabBtn('workout', 'Workout')}
            {tabBtn('progress', 'Progress')}
            {tabBtn('prompt', 'Agent Prompt')}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 14px 80px' }}>
        {activeTab === 'workout' && (
          <WorkoutTab
            workout={workout}
            activeDay={activeDay}
            days={days}
            workoutData={workoutData}
            setActiveDay={setActiveDay}
            checked={checked}
            toggleCheck={toggleCheck}
            editingKey={editingKey}
            editValue={editValue}
            setEditValue={setEditValue}
            startEdit={startEdit}
            commitEdit={commitEdit}
            setEditingKey={setEditingKey}
            editableWeights={editableWeights}
            editableReps={editableReps}
            weightHistory={weightHistory}
          />
        )}
        {activeTab === 'progress'  && <ProgressTab weightHistory={weightHistory} />}
        {activeTab === 'prompt'    && <PromptTab />}
      </div>
    </div>
  )
}
