import { read, write } from "../01/script";

function deleteUser(cpf: string) {
  const file = read("./bd.json");

  const user = file.users.find((user) => user.cpf === cpf);

  if (!user) {
    throw new Error("Usuário não encontrado!");
  }

  const filteredUsers = file.users.filter((user) => user.cpf !== cpf);

  write("./bd.json", filteredUsers);

  return user;
}

console.log(deleteUser("41346622574"));
