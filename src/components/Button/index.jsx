import { useNavigate } from 'react-router-dom';

const Button = ({ path }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`${path}`)} className='button'>
      Join Us
    </button>
  );
};

export default Button;
