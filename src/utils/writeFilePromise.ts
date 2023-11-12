import fs from "fs";

export const writeFilePromise = (path: string, json: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, json, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        reject(err);
      }
    });
  });
};
