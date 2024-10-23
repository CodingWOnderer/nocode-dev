import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
    username: string;
    email: string;
    userImage: string;

    city: string;
    state: string;
    pincode: string;
    country: string;
    phonemnumber: string;

    twitter: string;
    facebook: string;
    linkedin: string;
}

interface AuthState {
    user: Partial<IUser>;

    token: string;
    isAuthenticated: boolean;
    isLoading: boolean;

    logOut: () => void;

    signIn: (email: string, password: string) => Promise<void>;
    signUp: () => void;
}

export const useAuthState = create<AuthState>()(
    persist(
        (set) => ({
            user: {},
            token: "",
            isAuthenticated: false,
            isLoading: false,
            logOut: () => set({ isAuthenticated: false, token: "", user: {} }),
            async signIn(email: string, password: string) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(
                            set({
                                token: "asdas-a5476tasgv",
                                user: {
                                    userImage: "Vipin Bhati",
                                    email: "Vipinbhati347@gmail.com",
                                    username:
                                        "https://assets.lummi.ai/assets/QmQQkGAiCfk4VTCVmLywKcBNkPztmSjzJtn4ggg4jneQY2?auto=format&w=1500",
                                    city: "Greater Noida",
                                    state: "Uttar Pradesh",
                                    pincode: "201308",
                                    phonemnumber: "9319217256",
                                    country: "India",
                                },
                                isAuthenticated: true,
                            })
                        );
                    }, 3000);
                });
            },
            signUp() { },
        }),
        {
            name: "sage-token",
            partialize: (state) => {
                return {
                    token: state.token,
                    user: state.user,
                };
            },
        }
    )
);
