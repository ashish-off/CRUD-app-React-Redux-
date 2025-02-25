export interface userType {
  name: string;
  email: string;
  age: string;
  gender: string;
  description: string;
  id: string;
}

export interface userDetailSliceType {
  users: userType[];
  loading: boolean;
  error: unknown | string;
  searchQuery: string;
}
