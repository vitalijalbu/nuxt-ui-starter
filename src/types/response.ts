export interface GlobalResponse<T = undefined> {
    success: boolean
    data: T
}

export interface AuthCsrfTokenResponse<T> {
    token?: string
}

export interface AuthResponse<T> {
    success: boolean
    token?: string
    data: T
}

export interface RequestError {
    errors: { [key: string]: string[] }
    messages?: string
    message?: string
}
