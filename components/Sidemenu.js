import { useState } from 'react';
import Modal from './modal';
import MovieCreateForm from './MovieCreateForm';
import { CreateMovie, createMovie } from '../actions';

const Sidemenu = ({ categories }) => {
  const handleCreateMovie = movie => {
    createMovie(movie).then(movies => {
      console.log(JSON.stringify(movies));
    });
  };
  return (
    <div>
      <Modal hasSubmitButton={false}>
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className='my-4'>Shop Name</h1>
      <div className='list-group'>
        {categories.map(category => (
          <a key={category.id} href='' className='list-group-item'>
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidemenu;
