import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Please input valid query!');
      return;
    }
    onSubmit(query);
    setQuery('');
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        required
        autoFocus
      />
    </form>
  );

  // return <h2>Form</h2>;
};
