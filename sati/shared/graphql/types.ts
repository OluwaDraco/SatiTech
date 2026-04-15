// GraphQL response types
export interface User {
    id: string;
    full_name: string;
    title: string;
    rate?: number;
    location?: string;
    skills: string[];
    overview: string;
    admin: boolean;
    email: string;
    profile_url: string;
    reviews: string[];
}

export interface LoginResult {
    success: boolean;
    user?: { id: string };
    error?: string;
    redirect?: string;
}

export interface LoginResponse {
    login: {
        token: string;
        user: {
            id: string;
        };
    };
}

export interface SignupResult {
    success: boolean;
    user?: { id: string };
    error?: string;
    redirect?: string;
}

export interface SignupResponse {
    signup: {
        success: boolean;
        token: string;

        user: {
            id: string;
        };
    };
}

export interface CreateUserInput {
    full_name: string;
    title: string;
    rate?: number;
    location?: string;
    skills?: string[];
    overview?: string;
    admin?: boolean;
    email: string;
    profile_url?: string;
    reviews?: string[];
    password: string;
}
