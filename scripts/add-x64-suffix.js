const fsPromise = require("fs/promises");
const path = require("path");


(async () => {
  const projectRootDir = path.resolve(".");
  const distDir = path.join(projectRootDir, "dist");
  const fileNames = await fsPromise.readdir(distDir);
  for (const fileName of fileNames) {
    const extname = path.extname(fileName);
    const basename = path.basename(fileName, extname);
    const newFileName = `${basename}-x64${extname}`;
    const filePath = path.join(distDir, fileName);
    const newFilePath = path.join(distDir, newFileName);
    await fsPromise.rename(filePath, newFilePath);
  }
})();
