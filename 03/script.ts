import { read, write } from "../01/script";
import { User } from "../types";

function deatilUser(cpf: string) {
  const file = read("./bd.json");

  return file.users.find((user) => user.cpf === cpf) || null;
}

function updateUser(cpf: string, data: User) {
  const file = read("./bd.json");
  const user = file.users.find((user) => user.cpf === cpf);

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  Object.assign(user, data);

  write("./bd.json", file.users);
}

const user: User = {
  name: "Sloth",
  email: "Sloth@mail.com",
  cpf: "41346622574",
  profession: "Develop",
  address: null,
};

updateUser("41346622574", user);
console.log(deatilUser(user.cpf));
