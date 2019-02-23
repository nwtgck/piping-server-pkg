# piping-server-pkg
[![CircleCI](https://circleci.com/gh/nwtgck/piping-server-pkg.svg?style=shield)](https://circleci.com/gh/nwtgck/piping-server-pkg)

[Piping server](https://github.com/nwtgck/piping-server) into an portable executable by [zeit/pkg](https://github.com/zeit/pkg)  
(NOTE: This project may be merged into [piping-server](https://github.com/nwtgck/piping-server))

## Download & Run

```
wget https://github.com/nwtgck/piping-server-pkg/releases/download/v0.8.9/piping-server-macos
chmod +x piping-server-macos
./piping-server-macos --http-port=8888
```

Then, a server is running on <http://localhost:8888>.  
Other portable executables are found in [GitHub Releases](https://github.com/nwtgck/piping-server-pkg/releases).  

## Automation

These releases are automatically published by CircleCI.

## Generate executables in local

```bash
cd <this repo>
npm run build
```
