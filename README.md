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

make sure to pak your changes before publish

## Publish

1. pack nuget using nuget.exe in root directory (because there is not .NET project you can't use `dotnet` cmd tool). You can download nuget.exe [here](https://www.nuget.org/downloads).
	```
	nuget pack
	```
2. If you get an error:
	```
	NU5017: Cannot create a package that has no dependencies nor content.
	```
	You must change .nuspec directory separators in `<files>` from `/` to `\`
3. Ignore warnings like:
	```
	NU5100: The assembly 'contentFiles\any\any\libcef\chrome_elf.dll' is not inside the 'lib' folder and hence it won't be added as a reference when the package is installed into a project. Move it into the 'lib' folder if it needs to be referenced.
	NU5100: The assembly 'contentFiles\any\any\libcef\d3dcompiler_47.dll' is not inside the 'lib' folder and hence it won't be added as a reference when the package is installed into a project. Move it into the 'lib' folder if it needs to be referenced.
	NU5100: The assembly 'contentFiles\any\any\libcef\dbghelp.dll' is not inside the 'lib' folder and hence it won't be added as a reference when the package is installed into a project. Move it into the 'lib' folder if it needs to be referenced.
	NU5100: The assembly 'contentFiles\any\any\libcef\libcef.dll' is not inside the 'lib' folder and hence it won't be added as a reference when the package is installed into a project. Move it into the 'lib' folder if it needs to be referenced.
	NU5100: The assembly 'contentFiles\any\any\libcef\libEGL.dll' is not inside the 'lib' folder and hence it won't be added as a reference when the package is installed into a project. Move it into the 'lib' folder if it needs to be referenced.
	NU5100: The assembly 'contentFiles\any\any\libcef\libGLESv2.dll' is not inside the 'lib' folder and hence it won't be added as a reference when the package is installed into a project. Move it into the 'lib' folder if it needs to be referenced.
	```
4. Get or generate Personal GH access token **Classic** - it does not work with fine grained tokens. And it must have `write:packages` permission.
5. Publish package (this time you can use `dotnet` cmd tool)
	```
	dotnet nuget push <generated package filename - see step 1>.nupkg -s https://nuget.pkg.github.com/emclient/index.json -k <your GH access token>
	```
