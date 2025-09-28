# KidFinance-P2

A financial education app designed to help children learn about money management through an interactive and user-friendly interface.

## Features

- **Balance Display**: Shows current financial balance
- **Transaction Management**: Add and track financial transactions
- **Parent Dashboard**: Monitor and manage children's financial activities
- **Educational Interface**: Clean, simplified design focused on learning

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atsang081/KidFinance-P2.git
   cd KidFinance-P2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be generated in the `dist` directory.

### Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

Live Demo: [https://atsang081.github.io/KidFinance-P2/](https://atsang081.github.io/KidFinance-P2/)

## Project Structure

```
src/
├── components/
│   ├── BalanceDisplay.jsx
│   ├── ParentDashboard.jsx
│   ├── PiggyBank.jsx
│   └── TransactionForm.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Design Philosophy

This application follows a clean, educational-focused design philosophy with:
- Simplified interface without decorative elements
- Focus on numerical financial values
- Uncluttered design to enhance learning
- Child-friendly user experience

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Project Link: [https://github.com/atsang081/KidFinance-P2](https://github.com/atsang081/KidFinance-P2)