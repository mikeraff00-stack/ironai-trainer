# IronAI Trainer

Your personal volleyball performance coach. Built with React + Vite. Deploys to Vercel in under 10 minutes.

---

## Deploy to Vercel (10 minutes, free)

### Option A — GitHub (recommended, easiest updates later)

1. Create a free account at github.com
2. Create a new repo called `ironai-trainer`
3. Upload all these files (drag and drop in the GitHub UI)
4. Go to vercel.com → Sign up free → "Add New Project"
5. Connect your GitHub account → select `ironai-trainer`
6. Vercel auto-detects Vite — just click **Deploy**
7. You get a live URL like `ironai-trainer.vercel.app`

### Option B — Vercel CLI (fastest)

```bash
npm install -g vercel
cd ironai
npm install
vercel
```
Follow the prompts. Done.

---

## Install on iPhone (feels like a real app)

1. Open your Vercel URL in **Safari** (must be Safari, not Chrome)
2. Tap the **Share** button (box with arrow)
3. Tap **"Add to Home Screen"**
4. Name it "IronAI" → tap Add
5. It now appears on your home screen like a native app — no App Store needed

---

## Run locally

```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`

---

## Project structure

```
ironai/
├── index.html              # Entry point + PWA meta tags
├── vite.config.js          # Vite config
├── package.json
├── public/
│   └── manifest.json       # PWA manifest (enables iPhone install)
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # Main app + localStorage state
    ├── data.js             # All workout data + agent prompt
    ├── useLocalStorage.js  # Persistence hook
    ├── WorkoutTab.jsx      # Daily workout view
    ├── ProgressTab.jsx     # Weight history + sparklines
    ├── PromptTab.jsx       # Agent prompt copy tool
    └── Sparkline.jsx       # Mini chart component
```

---

## Data persistence

All data is saved to `localStorage` automatically:
- `ironai-checked` — which exercises you've completed
- `ironai-weights` — your edited weights
- `ironai-reps` — your edited rep schemes
- `ironai-history` — weight history for progress charts

Data survives page refresh and closing the browser. It's stored locally on your device.

**To clear all data:** Open browser console → `localStorage.clear()` → refresh.

---

## Updating your workout each week

1. Open `src/data.js`
2. Edit the exercise names, sets, and weights for each day
3. Push to GitHub → Vercel auto-redeploys in ~30 seconds

Or ask Claude: *"Here's my Week 9 data. Generate Week 10 and give me the updated data.js file."*

---

## Next steps (ask Claude for any of these)

- **Add Supabase** — sync data across devices, never lose progress
- **Wire in Claude API** — "Generate Next Week" button that auto-progresses your weights
- **Add app icons** — replace `/public/icon-192.png` and `/public/icon-512.png` with real images
- **Push notifications** — remind you to train each morning

---

Built with React · Vite · localStorage · love for the game
