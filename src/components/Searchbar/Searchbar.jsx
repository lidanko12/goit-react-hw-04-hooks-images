import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Searchbar({onSubmit}) {
const [text, setText] = useState('');

const handleChange = event => {
  setText
    (event.target.value)
};
  const handleSubmit = event => {
    event.preventDefault();
    if (text.trim() === '') {
      return toast.error('Enter search');
    }
    onSubmit(text);
    setText('');
  };
  
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className= {s.SearchForm__button}>
            <span className= {s.SearchForm_button__label} >Search</span>
          </button>

          <input
            onChange={handleChange}
            className={s.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

