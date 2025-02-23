export interface AuthContextType {
   auth: Record<string, any>;
   isAuthenticated: boolean;
}

export interface AuthStateType {
   authData: Record<string, any>;
   isAuthenticated: boolean;
}
