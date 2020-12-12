// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const variablesCopyRaw = vscode.commands.registerCommand('variables.copyraw', async (param: any) => {
		let forClipboard : string = param?.variable?.value ?? "<null>";
		if (forClipboard.startsWith('"') && forClipboard.endsWith('"'))
		{
			forClipboard = forClipboard.substring(1, forClipboard.length - 1);
			forClipboard = unescapeCharacters(forClipboard);
		}

		vscode.env.clipboard.writeText(forClipboard);
	});

	context.subscriptions.push(variablesCopyRaw);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function unescapeCharacters(value: string): string {
	const escapeSequences : any = {
		'0': '\0',
		'b': '\b',
		'f': '\f',
		'n': '\n',
		'r': '\r',
		't': '\t',
		'v': '\v',
		'\'': '\'',
		'"': '"',
		'\\': '\\'
	};

	value = value.replace(/\\(['"tbrnfv0\\])/g, (_, specialCharacter) => {
		return escapeSequences[specialCharacter];
	});

	return value;
}
