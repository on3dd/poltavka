export default interface User {
  id?: number;
  name: string;
  country: string;
  prefix: '+7';
  phone: string;
  password?: string;
  role?: 'ordinary' | 'dispatcher' | 'admin';
}
