import fs from "fs";

const encoding: BufferEncoding = "utf8";

export const readFilePromise = (path: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path,
      { encoding },
      (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};
