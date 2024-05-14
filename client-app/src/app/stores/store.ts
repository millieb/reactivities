import { createContext, useContext } from 'react';
import ActivityStore from './activityStore';

interface Store {
  activityStore: ActivityStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
};

export const StoreContext = createContext(store);

// Hook to use our stores inside our components
export function useStore() {
  return useContext(StoreContext);
}
