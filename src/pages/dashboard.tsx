import { useGetProfile } from '@hooks/rq';
import { appState } from '@state/index';
import { observer } from 'mobx-react-lite';

const DashBoardPage = observer(() => {
  const { data, isLoading } = useGetProfile();
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
      <h1>Dashboard Page</h1>
      <div>{isLoading ? 'Loading...' : `Hello ${data?.email}`}</div>
      <button
        onClick={() => appState.logout()}
        style={{ padding: '10px', cursor: 'pointer' }}>
        {'Logout'}
      </button>
    </div>
  );
});

export default DashBoardPage;
