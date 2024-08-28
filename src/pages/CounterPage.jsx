import { useState } from 'react';
import '../App.css';
import Counter from '../components/Counter';

const User = ({ name }) => {
  return (
    <div className='User'>
      <h1 className="title">
        Hello, {name} <span class="wave">👋</span>
      </h1>
    </div>
  );
};

function CounterPage() {
  const [name] = useState('Haikal Asad');

  return (
    <div className="App">
      <div class="falling-stars"></div>
      <User name={name} />
      <Counter initialCount={0} />
    </div>
  );
}

export default CounterPage;
