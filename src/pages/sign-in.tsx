import { useLogin } from '@hooks/rq/mutations/useLogin';
import { observer } from 'mobx-react-lite';

const SignInPage = observer(() => {
  const { mutate, isPending } = useLogin();

  const handleButtonClick = (email: string, password: string) => {
    const data = { email, password };
    mutate(data, {
      onSuccess: () => {
        console.log('Login Success');
      },
      onError: () => {
        console.log('Login Error');
      },
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <h1>Sign In Page</h1>
      <button
        onClick={() => handleButtonClick('XWf9P@example.com', 'password')}
        style={{ padding: '10px', cursor: 'pointer' }}>
        {isPending ? 'Loading...' : 'Sign In'}
      </button>
    </div>
  );
});

export default SignInPage;
