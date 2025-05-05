# Patient Registration App (Frontend-only)

A simple, frontend-only patient registration system built with React, TypeScript, and PGlite (PostgreSQL in the browser). The app persists data using IndexedDB and supports real-time multi-tab synchronization using the BroadcastChannel API.

---

## 🚀 Features

- Register patients with name, age, gender, and contact
- View patient records in a table
- Data stored persistently in browser using IndexedDB
- Multi-tab synchronization using BroadcastChannel API

---

## 📦 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [PGlite (ElectricSQL)](https://electric-sql.dev/docs/pglite)
- Native `BroadcastChannel` API

---

## 🛠 Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Smriti1208/patient-test
   cd patient-registration-app
   npm install
   npm run dev

Test multi-tab support
- Open multiple browser tabs
- Register a patient in one tab
- See the new entry instantly appear in the others

---

## ⚠️ Challenges Faced

- Pglite Integration: Adapting SQLite-like behavior to work seamlessly within the browser required ensuring async data handling and correct schema initialization.

- Data Persistence: Making sure IndexedDB-backed storage retained records accurately across refreshes and tabs involved careful state management.

- Multi-Tab State Consistency: Implementing real-time updates across tabs without backend communication was handled via BroadcastChannel.
