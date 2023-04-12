import { read, write } from "../01/script";
import { User } from "../types";

function register(user: User) {
  write("./bd.json", user);
  return user;
}

function listUser() {
  return read("./bd.json").users;
}

const user1: User = {
  name: "Sloth",
  email: "Sloth@mail.com",
  cpf: "41346622574",
  address: null,
};

const user2: User = {
  name: "Miuga",
  email: "muiga@mail.com",
  cpf: "55511512559",
  profession: "Flea",
  address: {
    cep: "40715-532",
    city: "Salvador",
    district: "Rio Sena",
    street: "Rua Moura Brasil",
  },
};

register(user1);
register(user2);

console.log(listUser());
