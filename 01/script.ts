import fs from "fs";
import { File, User } from "../types";

export function read(path: string): File {
  try {
    return JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));
  } catch {
    throw new Error(`Não foi possivel ler o arquivo ${path}.`);
  }
}

export function write(path: string, data: User | User[]) {
  try {
    const file: File = JSON.parse(fs.readFileSync(path, { encoding: "utf-8" }));

    if (Array.isArray(data)) {
      file.users = data;
    } else {
      file.users.push(data);
    }

    fs.writeFileSync(path, JSON.stringify(file, null, 2));
  } catch {
    throw new Error(`Ocorreu um erro ao grava os dados no arquivo ${path}.`);
  }
}
