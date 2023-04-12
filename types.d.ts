type Address = {
  cep: string;
  street: string;
  complement?: string;
  district: string;
  city: string;
};

export type User = {
  name: string;
  email: string;
  cpf: string;
  profession?: string;
  address: Address | null;
};

export type File = {
  users: User[];
};