import { useNavigate, useParams } from 'react-router-dom';

function ProfileIndex() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      THIS IS THE PROFILE PAGE FOR {username}!
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        {' '}
        Change to about page
      </button>
    </div>
  );
}

export default ProfileIndex;
