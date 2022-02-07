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
}
export {};
