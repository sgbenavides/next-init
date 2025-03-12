# Next.js Project Template 🚀

A modern, feature-rich Next.js starter template with best practices and powerful development tools preconfigured.

## ✨ Features

- ⚡️ [Next.js 15](https://nextjs.org/) with App Router
- 🎨 [Tailwind CSS](https://tailwindcss.com/) for styling
- 📦 [shadcn/ui](https://ui.shadcn.com/) components
- 🔍 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🎯 [ESLint](https://eslint.org/) for code linting
- 💅 [Prettier](https://prettier.io/) for code formatting
- 🚦 [Husky](https://typicode.github.io/husky/) for Git hooks
- 📝 [Commitlint](https://commitlint.js.org/) for commit message linting
- 🔄 [lint-staged](https://github.com/okonet/lint-staged) for pre-commit linting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd [your-repo-name]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── .husky/               # Git hooks
├── public/               # Static files
├── src/
│   ├── app/             # App router pages
│   ├── components/      # React components
│   ├── lib/            # Utility functions
│   └── hooks/          # Custom React hooks
├── .eslintrc.js        # ESLint configuration
├── .prettierrc         # Prettier configuration
└── tailwind.config.js  # Tailwind configuration
```

## 🛠️ Development Tools

### Code Quality

- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **TypeScript**: Static type checking

### Git Workflow

- **Husky**: Manages Git hooks
- **lint-staged**: Runs linters on staged files
- **commitlint**: Enforces conventional commit messages

### Commit Message Format

This project follows [Conventional Commits](https://www.conventionalcommits.org/). Examples:

```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
perf: improve performance
test: add tests
chore: update dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📦 Dependencies

### Production Dependencies

- `next`: ^15.2.1
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `tailwindcss`: ^4.0.0
- `class-variance-authority`: ^0.7.1
- `clsx`: ^2.1.1
- `lucide-react`: ^0.479.0

### Development Dependencies

- `typescript`: ^5.0.0
- `eslint`: ^9.0.0
- `prettier`: ^3.5.3
- `husky`: ^9.1.7
- `lint-staged`: ^15.4.3

## 🚀 Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💖 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
