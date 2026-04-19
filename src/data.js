export const GOAL = 10

export const phaseColors = {
  Explosive: '#FF4500', Primary: '#FF9800', Secondary: '#FFD700',
  Triceps: '#FFD700', Stability: '#00FF88', Core: '#00BFFF',
  Mobility: '#DA70D6', Optional: '#666',
}

export const workoutData = {
  Monday: {
    label: 'Pull', sub: 'Back + Biceps + Core', color: '#FF4500',
    note: '↑ Row volume slightly. Added scap pulldown for lat-shoulder connection.',
    exercises: [
      { phase: 'Explosive', name: 'Low Amplitude Pogo Hops',        sets: '2x15',      weight: 'Bodyweight' },
      { phase: 'Explosive', name: 'Med Ball Rotational Throw',       sets: '2x5/side',  weight: '20 lb' },
      { phase: 'Primary',   name: 'Close-Grip Lat Pulldown',         sets: '4x6',       weight: '175 lb' },
      { phase: 'Primary',   name: 'Chest-Supported Machine Row',     sets: '4x8',       weight: '260 lb' },
      { phase: 'Primary',   name: 'Single-Arm High Cable Row',       sets: '3x10',      weight: '90 lb' },
      { phase: 'Primary',   name: 'Meadows Row',                     sets: '3x8',       weight: '160 lb' },
      { phase: 'Secondary', name: 'Cable Lat Prayer Pulldown',       sets: '3x12',      weight: '95 lb' },
      { phase: 'Secondary', name: 'Incline Hammer Curls',            sets: '3x10',      weight: '47.5 lb' },
      { phase: 'Secondary', name: 'Reverse Cable Curls',             sets: '3x12',      weight: '52 lb' },
      { phase: 'Secondary', name: 'Bayesian Curls',                  sets: '3x10',      weight: '37 lb' },
      { phase: 'Stability', name: 'Cable External Rotations',        sets: '2x15',      weight: '20 lb' },
      { phase: 'Stability', name: 'Face Pulls',                      sets: '2x12',      weight: '67 lb' },
      { phase: 'Core',      name: 'Hanging Knee Raises',             sets: '3x12',      weight: 'Bodyweight' },
      { phase: 'Core',      name: 'Cable Anti-Extension Pressdowns', sets: '3x12',      weight: '90 lb' },
      { phase: 'Mobility',  name: 'Banded Ankle Dorsiflexion',       sets: '2x20',      weight: '—' },
      { phase: 'Mobility',  name: 'Tibialis Raises',                 sets: '2x20',      weight: '—' },
    ]
  },
  Tuesday: {
    label: 'Legs', sub: 'Strength + Low-Impact Jump', color: '#FF9800',
    note: 'Hack squat at 760. Isometric calf hold extended to 35s — key for ankle and jump.',
    exercises: [
      { phase: 'Explosive', name: 'Snap-Downs',                      sets: '3x5',        weight: 'Bodyweight' },
      { phase: 'Explosive', name: 'Box Jumps',                       sets: '3x3',        weight: 'Lower height' },
      { phase: 'Primary',   name: 'Hack Squat',                      sets: '4x5',        weight: '760 lb' },
      { phase: 'Primary',   name: 'Trap Bar Deadlift',               sets: '4x4',        weight: '450 lb' },
      { phase: 'Secondary', name: 'Bulgarian Split Squat',           sets: '3x8/side',   weight: '72.5 lb' },
      { phase: 'Secondary', name: 'Seated Calf Raises',              sets: '3x12',       weight: '270 lb' },
      { phase: 'Stability', name: 'Isometric Calf Hold (Top)',       sets: '3x35s',      weight: 'Single leg' },
      { phase: 'Core',      name: 'Cable Anti-Rotation Hold',        sets: '3x25s/side', weight: '70 lb' },
      { phase: 'Core',      name: 'Heel Elevated Dead Bug',          sets: '2x14/side',  weight: 'Bodyweight' },
      { phase: 'Mobility',  name: 'Deep Squat Hold',                 sets: '2x45s',      weight: '—' },
      { phase: 'Mobility',  name: 'Ankle Dorsiflexion Stretch',      sets: '2x20',       weight: '—' },
      { phase: 'Mobility',  name: 'Single-Leg Balance Barefoot',     sets: '2x30s',      weight: 'Eyes closed if easy' },
      { phase: 'Optional',  name: 'Approach Jumps',                  sets: '2x2',        weight: 'Only if ankles good' },
    ]
  },
  Wednesday: {
    label: 'Push', sub: 'Chest + Triceps + Core', color: '#FFD700',
    note: 'Swapped landmine press in for variety. Tricep volume held — focus on full extension.',
    exercises: [
      { phase: 'Explosive', name: 'Med Ball Chest Throw',            sets: '2x5',        weight: '20 lb' },
      { phase: 'Explosive', name: 'Explosive Push-Ups',              sets: '3x5',        weight: 'Bodyweight' },
      { phase: 'Primary',   name: 'Machine Incline Press',           sets: '3x8',        weight: '260 lb' },
      { phase: 'Primary',   name: 'Flat Dumbbell Bench',             sets: '4x6',        weight: '102.5 lb' },
      { phase: 'Secondary', name: 'Single-Arm Landmine Press',       sets: '3x10',       weight: '105 lb' },
      { phase: 'Secondary', name: 'Cable Chest Fly (High to Low)',   sets: '3x12',       weight: '47 lb' },
      { phase: 'Secondary', name: 'Cable Pallof Press Incline',      sets: '2x12',       weight: '52 lb' },
      { phase: 'Triceps',   name: 'Cable Rope Overhead Extensions',  sets: '3x12',       weight: '72 lb' },
      { phase: 'Triceps',   name: 'Dip Machine / Assisted Dips',     sets: '3x10',       weight: 'Bodyweight' },
      { phase: 'Triceps',   name: 'Single-Arm Cable Pushdown',       sets: '2x12',       weight: '35 lb' },
      { phase: 'Stability', name: 'Serratus Wall Slides',            sets: '2x12',       weight: 'Bodyweight' },
      { phase: 'Stability', name: 'Band Pull-Aparts',                sets: '2x20',       weight: 'Light band' },
      { phase: 'Core',      name: 'Cable Rotations',                 sets: '3x12/side',  weight: '67 lb' },
      { phase: 'Core',      name: 'Plank Reach-Outs',                sets: '2x45s',      weight: 'Bodyweight' },
      { phase: 'Mobility',  name: 'Wall Angels',                     sets: '2x12',       weight: '—' },
      { phase: 'Mobility',  name: 'Band External Rotations',         sets: '2x15',       weight: 'Light band' },
    ]
  },
  Thursday: {
    label: 'Posterior', sub: 'Posterior Chain + Elastic Strength', color: '#00FF88',
    note: 'RDL up to 275. Added single-leg RDL for balance + ankle stability.',
    exercises: [
      { phase: 'Explosive', name: 'Lateral Bounds',                  sets: '3x3/side',   weight: 'Bodyweight' },
      { phase: 'Explosive', name: 'Pogo Jumps',                      sets: '2x15',       weight: 'Bodyweight' },
      { phase: 'Primary',   name: 'Deficit Reverse Lunges',          sets: '3x8/side',   weight: '77.5 lb' },
      { phase: 'Primary',   name: 'Barbell RDL',                     sets: '4x6',        weight: '275 lb' },
      { phase: 'Secondary', name: 'Nordic Ham Curls',                sets: '3x6',        weight: 'Bodyweight' },
      { phase: 'Secondary', name: 'Cable Pull-Throughs',             sets: '3x12',       weight: '125 lb' },
      { phase: 'Secondary', name: 'Single-Leg RDL (DB)',             sets: '3x8/side',   weight: '50 lb' },
      { phase: 'Core',      name: 'Suitcase Carries',                sets: '4x40m',      weight: '122 lb' },
      { phase: 'Mobility',  name: 'Hamstring Stretch',               sets: '2x45s/side', weight: '—' },
      { phase: 'Mobility',  name: 'Hip Flexor Stretch',              sets: '2x45s/side', weight: '—' },
      { phase: 'Mobility',  name: 'Banded Ankle Work',               sets: '2x20',       weight: '—' },
      { phase: 'Optional',  name: 'Approach Jumps',                  sets: '2x2',        weight: 'Only if ankles good' },
    ]
  },
  Friday: {
    label: 'Shoulders', sub: 'Shoulders + Arms + Core', color: '#DA70D6',
    note: 'Kept landmine arc press. Added cable Y-raise for trap-3 + rotator cuff combo.',
    exercises: [
      { phase: 'Explosive', name: 'Rotational Med Ball Throws',      sets: '2x5/side',   weight: '20 lb' },
      { phase: 'Primary',   name: 'Standing DB Shoulder Press',      sets: '4x6',        weight: '72 lb' },
      { phase: 'Primary',   name: 'Cable Shoulder Press (Dual)',     sets: '3x10',       weight: '62 lb' },
      { phase: 'Primary',   name: 'Landmine Arc Press',              sets: '3x8',        weight: '117 lb' },
      { phase: 'Primary',   name: 'Landmine Shoulder Press',         sets: '4x6',        weight: '92 lb' },
      { phase: 'Secondary', name: 'Cable Lateral Raises',            sets: '3x15',       weight: '25 lb' },
      { phase: 'Secondary', name: 'Rear Delt Machine',               sets: '3x12',       weight: '155 lb' },
      { phase: 'Secondary', name: 'EZ Bar Curls',                    sets: '3x8',        weight: '147 lb' },
      { phase: 'Secondary', name: 'Cable Triceps Pushdowns',         sets: '3x12',       weight: '77 lb' },
      { phase: 'Secondary', name: 'Forearm BB Curls',                sets: '4x6',        weight: '117 lb' },
      { phase: 'Stability', name: 'Trap 3 Raises',                   sets: '3x12',       weight: '15 lb' },
      { phase: 'Stability', name: 'Cable Y-Raise',                   sets: '3x12',       weight: '10 lb' },
      { phase: 'Stability', name: 'Scap Push-Ups',                   sets: '3x15',       weight: 'Bodyweight' },
      { phase: 'Stability', name: 'Face Pulls',                      sets: '3x12',       weight: '72 lb' },
      { phase: 'Core',      name: 'Hanging Leg Raises',              sets: '3x12',       weight: 'Bodyweight' },
      { phase: 'Core',      name: 'Cable Chops',                     sets: '2x15/side',  weight: '77 lb' },
      { phase: 'Core',      name: 'Back Extension Holds',            sets: '3x40s',      weight: 'Bodyweight' },
      { phase: 'Mobility',  name: 'Shoulder Dislocates',             sets: '2x10',       weight: 'Band' },
      { phase: 'Mobility',  name: 'Band External Rotations',         sets: '2x15',       weight: 'Light band' },
    ]
  }
}

export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

export const AGENT_PROMPT = `You are IronAI — an elite strength and conditioning coach for volleyball athletes who also want to build muscle, reduce injury risk, and improve athletic performance.

ATHLETE PROFILE:
- Primary goal: Increase vertical jump
- Secondary goals: Build muscle (shoulders, arms, chest), maintain strength
- Injury focus: Ankle durability, shoulder stability
- Training schedule: 5 days/week, ~60 min max, 10 exercises per session
- Lift numbers: Hack Squat ~760 lb, Trap Bar ~450 lb, Hip Thrust ~415 lb, Bench ~225 lb, Shoulder Press ~155 lb

WEEKLY SPLIT:
- Monday: Back + Biceps + Core (Pull)
- Tuesday: Lower Body Strength + Low-Impact Jump
- Wednesday: Chest + Triceps + Core (Push)
- Thursday: Posterior Chain + Elastic Strength
- Friday: Shoulders + Arms + Core

PROGRAMMING RULES:
1. Each workout = max 10 primary exercises (athlete trains 60 min hard cap)
2. Structure every day: Explosive → Primary Strength → Secondary → Stability → Core → Mobility
3. Reduce jump volume — quality over quantity, controlled landings only
4. Daily ankle work: tibialis raises, isometric calf holds, dorsiflexion
5. Shoulder stability 3-5x/week: face pulls, external rotations, trap raises
6. Prioritize strength movements that transfer to jump: squats, hinges, single-leg
7. Include isometric work for tendon health every week
8. Vary exercises week to week — no exact repeats back to back

WEIGHT PROGRESSION RULES:
- Primary lifts: +5-10 lb/week when all reps completed cleanly
- Secondary lifts: +2-5 lb/week
- If athlete reports pain or failed reps: hold weight or drop 5-10%
- Always show the weight delta from last week (e.g., 760 -> 770, +10)

OUTPUT FORMAT per exercise:
Exercise Name | Sets x Reps | Weight (+ delta from last week)

When generating a new week:
- Open with 2-3 lines: what changed, why, and any injury flags
- List every weight increase with the delta
- Close with one short, earned motivational line`
