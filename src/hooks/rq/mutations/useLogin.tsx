import { doNothing, wait } from '@lib/index';
import { appState } from '@state/index';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      // const { data: tokens } = await api.authApi.adminSignIn({
      //   email,
      //   password,
      // });

      await wait(2000);

      doNothing(email, password);

      const tokens = {
        userId: 'userId',
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      };

      appState.setLoginInfo(tokens);
    },
  });

  return mutation;
};
