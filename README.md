# piping-server-pkg
[![CI](https://github.com/nwtgck/piping-server-pkg/actions/workflows/ci.yml/badge.svg)](https://github.com/nwtgck/piping-server-pkg/actions/workflows/ci.yml)

[Piping Server](https://github.com/nwtgck/piping-server) into an portable executable by [vercel/pkg](https://github.com/vercel/pkg) for Linux, macOS, Windows and Alpine

## Run on Linux (x64, amd64)

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -L https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-linuxstatic-x64.tar.gz | tar xzvf -
./piping-server-pkg-linuxstatic-x64/piping-server --http-port=8888
```

## Run on Linux (ARM64)

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -L https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-linuxstatic-arm64.tar.gz | tar xzvf -
./piping-server-pkg-linuxstatic-arm64/piping-server --http-port=8888
```

## Run on Linux (ARMv7 32bit)

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -L https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-linuxstatic-armv7.tar.gz | tar xzvf -
./piping-server-pkg-linuxstatic-armv7/piping-server --http-port=8888
```


## Run on macOS (Intel)

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -L https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-mac-x64.tar.gz | tar xzvf -
xattr -d com.apple.quarantine ./piping-server-pkg-mac-x64/piping-server
./piping-server-pkg-mac-x64/piping-server --http-port=8888
```

## Run on macOS (Apple Silicon)

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -L https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-mac-arm64.tar.gz | tar xzvf -
./piping-server-pkg-mac-arm64/piping-server --http-port=8888
```

## Brew

Run the command below, and a server runs on <http://localhost:8888>.

```bash
brew install nwtgck/piping-server-pkg/piping-server
piping-server --http-port=8888
```

You can brew-install on both macOS and Linux. Repository: <https://github.com/nwtgck/homebrew-piping-server-pkg>

## Run on Windows

Download zip from <https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-win-x64.zip>, extract it and run the command below, and a server runs on <http://localhost:8888>.

```ps1
.\piping-server.exe --http-port=8888
```

## Run on Alpine

Run the command below, and a server runs on <http://localhost:8888>.

```bash
curl -L https://github.com/nwtgck/piping-server-pkg/releases/download/v1.12.9-1/piping-server-pkg-alpine-x64.tar.gz | tar xzvf -
./piping-server-pkg-alpine-x64/piping-server --http-port=8888
```

Other built binaries found in <https://github.com/nwtgck/piping-server-pkg/releases> 

## Docker

Run the command below, and a server runs on <http://localhost:8888>.

```bash
docker run -p 8888:8888 nwtgck/piping-server-pkg --http-port=8888
```
<https://github.com/nwtgck/docker-piping-server-pkg>

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
npm run build-arm
```
