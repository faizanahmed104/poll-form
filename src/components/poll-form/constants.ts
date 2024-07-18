import { Step } from './types';

export const STEPS: Step[] = [
  {
    title: 'What is your preferred programming language?',
    options: [
      { icon: '🐍', label: 'Python' },
      { icon: '☕', label: 'Java' },
      { icon: '🟨', label: 'JavaScript' },
      { icon: '🦀', label: 'Rust' },
    ],
  },
  {
    title: 'Which cloud platform do you use most often?',
    options: [
      { icon: '☁️', label: 'AWS' },
      { icon: '🌤️', label: 'Azure' },
      { icon: '🌩️', label: 'Google Cloud' },
      { icon: '☁️', label: 'DigitalOcean' },
    ],
  },
  {
    title: "What's your favorite development environment?",
    options: [
      { icon: '💻', label: 'VS Code' },
      { icon: '🧠', label: 'JetBrains IDEs' },
      { icon: '🖥️', label: 'Sublime Text' },
      { icon: '📝', label: 'Vim' },
    ],
  },
  {
    title: 'Which version control system do you prefer?',
    options: [
      { icon: '🐙', label: 'Git' },
      { icon: '🗃️', label: 'SVN' },
      { icon: '📦', label: 'Mercurial' },
      { icon: '🗄️', label: 'Perforce' },
    ],
  },
  {
    title: "What's your primary operating system?",
    options: [
      { icon: '🪟', label: 'Windows' },
      { icon: '🍎', label: 'macOS' },
      { icon: '🐧', label: 'Linux' },
      { icon: '🤖', label: 'Chrome OS' },
    ],
  },
];