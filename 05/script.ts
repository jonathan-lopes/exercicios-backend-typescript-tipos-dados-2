import { read } from "../01/script";

function listUser(profession?: string) {
  const file = read("./bd.json");

  if (profession) {
    return file.users.filter(
      (user) => user.profession?.toLowerCase() === profession.toLowerCase()
    );
  }

  return file.users;
}

console.log(listUser("streamer"));
