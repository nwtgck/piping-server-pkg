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


Without `libstdc++`, you will get errors as follows.

```txt
# ./piping-server-alpine
Error loading shared library libstdc++.so.6: No such file or directory (needed by ./piping-server-alpine)
Error relocating ./piping-server-alpine: _ZNSt7__cxx1118basic_stringstreamIcSt11char_traitsIcESaIcEEC1ESt13_Ios_Openmode: symbol not found
Error relocating ./piping-server-alpine: _ZNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEE6resizeEmc: symbol not found
Error relocating ./piping-server-alpine: _ZSt18_Rb_tree_incrementPKSt18_Rb_tree_node_base: symbol not found
Error relocating ./piping-server-alpine: _ZnwmRKSt9nothrow_t: symbol not found
Error relocating ./piping-server-alpine: _ZNSt7__cxx1118basic_stringstreamIcSt11char_traitsIcESaIcEED1Ev: symbol not found
Error relocating ./piping-server-alpine: _ZNSt6localeC1Ev: symbol not found
Error relocating ./piping-server-alpine: _ZNSt9basic_iosIcSt11char_traitsIcEE4initEPSt15basic_streambufIcS1_E: symbol not found
Error relocating ./piping-server-alpine: _ZNSt8ios_baseC2Ev: symbol not found
Error relocating ./piping-server-alpine: _ZNSt6localeD1Ev: symbol not found
...
...
...
Error relocating ./piping-server-alpine: _ZTVNSt7__cxx1118basic_stringstreamIcSt11char_traitsIcESaIcEEE: symbol not found
Error relocating ./piping-server-alpine: _ZTVSt14basic_ofstreamIcSt11char_traitsIcEE: symbol not found
Error relocating ./piping-server-alpine: _ZTTSt14basic_ofstreamIcSt11char_traitsIcEE: symbol not found
Error relocating ./piping-server-alpine: _ZTVSt9basic_iosIcSt11char_traitsIcEE: symbol not found
```
