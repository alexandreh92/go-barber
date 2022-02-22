declare global {
  export interface User {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    name: string;
    provider: boolean;
    avatar: {
      url: string;
    };
  }

  export interface Notification {
    id: number;
    content: string;
    user_id: number;
    provider_id: number;
    read: boolean;
    created_at: string;
    updated_at: string;
  }

  export interface Appointment {
    id: number;
    date: string;
    user_id: number;
    provider_id: number;
    created_at: string;
    updated_at: string;
    cancelled_at?: string;
    user: User;
  }
}
export {};
