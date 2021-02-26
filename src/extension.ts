// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as parser from 'fast-xml-parser';
import * as fs from 'fs';
// import 'isomorphic-fetch'

import PolicyParser from './lib/b2c-policy-parser';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "b2c-policy-visualizer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('b2c-policy-visualizer.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from b2c-policy-visualizer!');
	});

	let webshit = vscode.commands.registerCommand('b2c-policy-visualizer.showWebPanel', () => {
		// Create and show panel
		const panel = vscode.window.createWebviewPanel(
			'catCoding',
			'Cat Coding',
			vscode.ViewColumn.One,
			{}
		);
		// Get path to resource on disk
		const filepath = path.join(context.extensionPath, 'policies', 'StarterPack', 'SignUpOrSignin.xml');

		const policyContent = fs.readFileSync(filepath, 'utf-8');

		// Create a new ARM parser, giving icon prefix based on theme, and name it "main"
		// Additionally passing reporter and editor enables telemetry and linked template discovery in VS Code workspace
		const parser = new PolicyParser(policyContent);


		// And set its HTML content
		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(webshit);
}

function getWebviewContent() {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() { }