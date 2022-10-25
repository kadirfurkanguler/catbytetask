interface Company {
  address: Address;
}
interface Address {
  address: string;
  state: string;
  postal_code: string;
}
export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  company: Company;
  city: string;
  image: string;
}