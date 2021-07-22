# piping-server-pkg
[![CircleCI](https://circleci.com/gh/nwtgck/piping-server-pkg.svg?style=shield)](https://circleci.com/gh/nwtgck/piping-server-pkg)

[Piping Server](https://github.com/nwtgck/piping-server) into an portable executable by [vercel/pkg](https://github.com/vercel/pkg) for macOS, Linux and Windows  
(NOTE: This project may be merged into [piping-server](https://github.com/nwtgck/piping-server))

## Run on Linux

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.2.3/piping-server-linux
chmod +x piping-server-linux
./piping-server-linux --http-port=8888
```

## Run on macOS

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.2.3/piping-server-macos
chmod +x piping-server-macos
./piping-server-macos --http-port=8888
```

## Run on Windows

Run the command below in PowerShell, and a server runs on <http://localhost:8888>.

```ps1
iwr https://github.com/nwtgck/piping-server-pkg/releases/download/v1.2.3/piping-server-win.exe -OutFile piping-server-win.exe
.\piping-server-win.exe --http-port=8888
```

## Run on Alpine

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.2.3/piping-server-alpine
chmod +x piping-server-alpine
./piping-server-alpine --http-port=8888
```

## Automation

These releases are automatically published by CircleCI.

## Generate executables in local

```bash
cd <this repo>
npm ci
npm run build
```
