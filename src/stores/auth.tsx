import create, { UseStore } from "zustand";

interface IAuthStore {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}
interface IUserInfoStore {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
}

interface IUserInfo {
  fullName: string;
  fistName: string;
  lastName: string;
  id: string;
}

export const useAuthStore: UseStore<IAuthStore> = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set((state) => ({ isAuthenticated })),
}));

export const useUserInfoStore: UseStore<IUserInfoStore> = create((set) => ({
  userInfo: {
    fistName: "",
    lastName: "",
    fullName: "",
    id: "",
  },
  setUserInfo: (userInfo: IUserInfo) => set((state) => ({ userInfo })),
}));
