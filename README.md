# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

✅ Small Feature Dev Checklist (React)
🧠 Plan
 What is the goal of this feature?

 What components will be affected or created?

 Do I need any new state, props, or context?

🛠️ Implement
 Create or update the component (keep it small & focused).

 Add necessary state/hooks (e.g., useState, useEffect).

 Make sure props are typed and validated (consider using TypeScript or PropTypes).

 Use utility functions or a custom hook if logic is reused or complex.

🎨 Style
 Is the UI styled using Tailwind or your CSS system?

 Is it responsive and accessible (e.g., aria, keyboard nav)?

 Are class names meaningful and scoped?

🔍 Test
 Manually test the feature in the UI.

 Test edge cases (empty input, slow network, etc.).

 Optional: Add test(s) (unit with Jest, UI with Cypress or RTL).

🔄 Refactor & Clean Up
 Remove any unused variables or imports.

 Split large logic into functions/hooks if needed.

 Add comments or documentation if something is non-obvious.

📦 Git & Commit
 Review the diff (unstaged changes).

 Commit with a clear message (e.g., feat: add delete button to post card).