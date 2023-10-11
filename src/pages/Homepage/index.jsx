import Button from '../../components/Button';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div>
        <img
          className='destructuring'
          src='/assets/img/destructuring.svg'
          alt='destructuring'
        />
        <img
          className='webpage_logo'
          src='/assets/img/WebPage_logo.svg'
          alt='WebPage_logo'
        />
      </div>
      <Button path={'form'} />
    </div>
  );
};

export default Homepage;
