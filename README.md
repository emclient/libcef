# libcef

## Tools

### pak.exe [chrome-pak-customizer](https://github.com/myfreeer/chrome-pak-customizer)
Enables (un)packing of *.pak files. This is needed in order for us to modify built-in extension files.
- unpack:
```
pak.exe -u ..\runtimes\win-x86\native\libcef\cef_extensions.pak ..\cef_extensions
```

- pack:
```
pak.exe -p ..\cef_extensions\pak_index.ini ..\runtimes\win-x86\native\libcef\cef_extensions.pak
```

make sure tu pak your changes before publish