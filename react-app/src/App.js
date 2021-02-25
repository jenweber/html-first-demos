import './App.css';
import BestPractices from './components/BestPractices';
import Mistakes from './components/Mistakes';

function App() {
  return (
    <div>
      <header>
        <h1>
          Comparing mistakes and best practices for HTML-first React
        </h1>
      </header>
      <section>
        <h2>Reviewing for mistakes</h2>
        <Mistakes />
      </section>
      <section>
        <h2>Best Practices</h2>
        <BestPractices />
      </section>
    </div>
  );
}

export default App;
