import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { produce } from 'immer';

interface State {
  user: User | null;
  isAuth: boolean;
  sessionToken: string | null;
  registerToken: string | null;
}

interface Store extends State {
  setState: (key: keyof State, value: any) => void;
}

const initialState: State = {
  user: null,
  isAuth: false,
  sessionToken: null,
  registerToken: null,
};

export const useGlobalStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setState: (state, value) =>
          set(
            produce(get(), (draft) => {
              draft[state] = value as never;
            }),
          ),
        initState: () => set(initialState),
      }),
      {
        name: 'useRequestShiftStore',
        partialize: ({ user, isAuth, sessionToken, registerToken }: Store) => ({
          user,
          isAuth,
          sessionToken,
          registerToken,
        }),
      },
    ),
  ),
);
