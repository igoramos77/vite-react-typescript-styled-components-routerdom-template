import { IRoleProps } from './Role';

export interface IUserProps {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  full_name: string;
  role: IRoleProps
}