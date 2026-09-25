# FitLog

**Live demo:** [fitlogbd.vercel.app](https://fitlogbd.vercel.app)

A dark, no-nonsense gym companion built with Next.js — browse a workout library, lock exercises into today's plan, and track the week's work as it adds up.

## Description

FitLog is a workout tracking web app focused on speed and simplicity. Users browse a library of exercises filtered by muscle group and equipment, add lifts to a daily plan (capped at five), and see running totals for exercises, minutes, and calories as they build out their session.

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (via PostCSS)
- [ESLint](https://eslint.org/)
- Deployed on [Vercel](https://vercel.com/)

## Key Features

- **Workout Library** — Browse a curated set of exercises (e.g. Barbell Bench Press, Pull-Up, Back Squat, Deadlift) tagged by muscle group and required equipment.
- **Exercise Detail Pages** — Each exercise has its own page with duration, calories burned, and a user rating.
- **Daily Plan Builder** — Add exercises to "My Plan" with a cap of five lifts per day, keeping sessions focused.
- **Live Session Stats** — Real-time totals for exercises added, minutes, and calories as the plan is built.
- **Sort & Filter** — Sort planned/saved exercises by duration, calories, or rating.

## Getting Started

```bash
git clone https://github.com/nafismahamudshahin/fitlog.git
cd fitlog
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.