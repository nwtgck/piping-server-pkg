# piping-server-pkg
[![CircleCI](https://circleci.com/gh/nwtgck/piping-server-pkg.svg?style=shield)](https://circleci.com/gh/nwtgck/piping-server-pkg)

[Piping Server](https://github.com/nwtgck/piping-server) into an portable executable by [zeit/pkg](https://github.com/zeit/pkg) for macOS, Linux and Windows  
(NOTE: This project may be merged into [piping-server](https://github.com/nwtgck/piping-server))

## Download & Run

```
wget https://github.com/nwtgck/piping-server-pkg/releases/download/v1.0.0/piping-server-linux
chmod +x piping-server-linux
./piping-server-linux --http-port=8888
```

Then, a server is running on <http://localhost:8888> in Linux.  
Other portable executables including Linux/macOS/Windows are found in [GitHub Releases](https://github.com/nwtgck/piping-server-pkg/releases).  

## Automation

These releases are automatically published by CircleCI.

## Generate executables in local

```bash
cd <this repo>
npm run build
```
