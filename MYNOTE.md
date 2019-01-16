# My Note

## Run in Alpine-based Docker

Here is an example of `Dockerfile`. Note that `apk add --no-cache libstdc++` because an executable for alpine needs `libstdc++`.

```Dockerfile
FROM alpine:3.8

# Install libstdc++ 
RUN apk add --no-cache libstdc++

# Install piping-server
ADD https://github.com/nwtgck/piping-server-pkg/releases/download/v0.7.0-1/piping-server-alpine /usr/local/bin
RUN chmod +x /usr/local/bin/piping-server-alpine

ENTRYPOINT [ "piping-server-alpine" ]
```
