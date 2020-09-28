const Carousel = ({ images }) => (
  <div
    id='carouselExampleIndicators'
    className='carousel slide my-4'
    data-ride='carousel'
  >
    <ol className='carousel-indicators'>
      {images.map((image, index) => (
        <li
          key={index}
          data-target='#carouselExampleIndicators'
          data-slide-to={index}
          className={index === 0 ? 'active' : ''}
        ></li>
      ))}
    </ol>
    <div className='carousel-inner' role='listbox'>
      {images.map((img, index) => (
        <div
          key={index}
          className={index === 0 ? 'carousel-item active' : 'carousel-item'}
        >
          <img className='d-block img-fluid' src={img} alt='First slide' />
        </div>
      ))}
      {/* <div className='carousel-item active'>
        <img
          className='d-block img-fluid'
          src='http://placehold.it/900x350'
          alt='First slide'
        />
      </div>
      <div className='carousel-item'>
        <img
          className='d-block img-fluid'
          src='http://placehold.it/900x350'
          alt='Second slide'
        />
      </div>
      <div className='carousel-item'>
        <img
          className='d-block img-fluid'
          src='http://placehold.it/900x350'
          alt='Third slide'
        />
      </div> */}
    </div>
    <a
      className='carousel-control-prev'
      href='#carouselExampleIndicators'
      role='button'
      data-slide='prev'
    >
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      <span className='sr-only'>Previous</span>
    </a>
    <a
      className='carousel-control-next'
      href='#carouselExampleIndicators'
      role='button'
      data-slide='next'
    >
      <span className='carousel-control-next-icon' aria-hidden='true'></span>
      <span className='sr-only'>Next</span>
    </a>
  </div>
);

export default Carousel;
