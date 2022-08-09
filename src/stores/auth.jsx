import create from "zustand";

export const useAuthStore = create((set) => ({
    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set((state) => ({ isAuthenticated })),
}));

export const useUserInfoStore = create((set) => ({
    userInfo:{
    name:"",
    email:"",
    },
    setUserInfo: (userInfo) => set((state) => ({ userInfo })),
}));
