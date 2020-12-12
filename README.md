# Copy Raw Value

This adds a new menu option in the `Run - Variables` window to copy the raw value of an string variable.  The normal `Copy Value` grabs an escaped version, which can be annoying.  Using `Copy Raw Value` will unescape the characters and remove the quotes so it's immediately usable.

![Demo](resources/demo.gif?raw=true)

Sadly, this only works in `Run - Variables`.  There isn't a way (yet?) to add items to the `Run - Watch` section, though `Run - Watch` does seem to support [Format Specifiers](https://docs.microsoft.com/en-us/visualstudio/debugger/format-specifiers-in-csharp?view=vs-2019) like "`,nq`".

## Release Notes

### [1.0.0] - 2020-12-12

 - Initial release

## Credit

A "Copy Raw Value" or feature has been requested a few times but always rejected by Microsoft. This extension uses code from one of the [PRs](https://github.com/microsoft/vscode/pull/71666) for VSCode first created by [jaqra](https://github.com/jaqra).
