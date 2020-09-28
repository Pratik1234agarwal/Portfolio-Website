import { useState } from 'react';

export const MovieCreateForm = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    rating: 0,
    longDes: '',
    image: '',
    cover: ''
  });
  const formChange = e => {
    setForm(formData => ({
      ...formData,
      [e.target.name]: e.target.value
    }));
  };
  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [name]: value
    });
  };
  return (
    <div>
      <form>
        <div className='form-group'>
          <label for='name'>Name</label>
          <input
            onChange={handleChange}
            value={form.name}
            type='text'
            name='name'
            className='form-control'
            id='name'
            aria-describedby='emailHelp'
            placeholder='Lord of the Rings'
          />
        </div>
        <div className='form-group'>
          <label for='description'>Description</label>
          <input
            name='description'
            value={form.description}
            type='text'
            className='form-control'
            id='description'
            placeholder='Somewhere in Middle-earth...'
          />
        </div>
        <div className='form-group'>
          <label for='description'>Rating</label>
          <input
            name='rating'
            value={form.rating}
            type='number'
            max='5'
            min='0'
            className='form-control'
            id='rating'
            placeholder='3'
          />
          <small id='emailHelp' className='form-text text-muted'>
            Max: 5, Min: 0{' '}
          </small>
        </div>
        <div className='form-group'>
          <label for='image'>Image</label>
          <input
            name='image'
            value={form.image}
            type='text'
            className='form-control'
            id='image'
            placeholder='http://.....'
          />
        </div>
        <div className='form-group'>
          <label for='cover'>Cover</label>
          <input
            name='cover'
            value={form.cover}
            type='text'
            className='form-control'
            id='cover'
            placeholder='http://......'
          />
        </div>
        <div className='form-group'>
          <label for='longDesc'>Long Description</label>
          <textarea
            name='longDes'
            value={form.longDes}
            className='form-control'
            id='longDesc'
            rows='3'
          ></textarea>
        </div>
        <div className='form-group'>
          <label for='genre'>Genre</label>
          <select multiple className='form-control' id='genre'>
            <option>drama</option>
            <option>music</option>
            <option>adventure</option>
            <option>historical</option>
            <option>action</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default MovieCreateForm;
