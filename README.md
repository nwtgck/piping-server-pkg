# piping-server-pkg
[![CI](https://github.com/nwtgck/piping-server-pkg/actions/workflows/ci.yml/badge.svg)](https://github.com/nwtgck/piping-server-pkg/actions/workflows/ci.yml)

[Piping Server](https://github.com/nwtgck/piping-server) into an portable executable by [vercel/pkg](https://github.com/vercel/pkg) for Linux, macOS, Windows and Alpine

## Run on Linux

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.7.0-1/piping-server-linuxstatic-x64
chmod +x piping-server-linuxstatic-x64
./piping-server-linuxstatic-x64 --http-port=8888
```

## Run on macOS

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.7.0-1/piping-server-macos-x64
chmod +x piping-server-macos-x64
./piping-server-macos-x64 --http-port=8888
```

## Run on Windows

Run the command below in PowerShell, and a server runs on <http://localhost:8888>.

```ps1
iwr https://github.com/nwtgck/piping-server-pkg/releases/download/v1.7.0-1/piping-server-win-x64.exe -OutFile piping-server-win-x64.exe
.\piping-server-win-x64.exe --http-port=8888
```

or download from <https://github.com/nwtgck/piping-server-pkg/releases/download/v1.7.0-1/piping-server-win.exe>.

## Run on Alpine

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.7.0-1/piping-server-alpine-x64
chmod +x piping-server-alpine-x64
./piping-server-alpine-x64 --http-port=8888
```

## Run on Linux on ARM

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -LO https://github.com/nwtgck/piping-server-pkg/releases/download/v1.7.0-1/piping-server-linuxstatic-arm64
chmod +x piping-server-linuxstatic-arm64
./piping-server-linuxstatic-arm64 --http-port=8888
```

Other built binaries found in <https://github.com/nwtgck/piping-server-pkg/releases> 

## Automation

These releases are automatically published by GitHub Actions.

## Generate executables in local

```bash
cd <this repo>
npm ci
npm run build-x64
```

```bash
cd <this repo>
npm ci
npm run build-arm64
```
