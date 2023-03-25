import * as vscode from 'vscode';

const newUntitledFileCommand = 'workbench.action.files.newUntitledFile';

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('extension.newJSONFile', () => {
		vscode.commands.executeCommand(newUntitledFileCommand).then((x) => {
			const editor = vscode.window.activeTextEditor!;
			vscode.languages.setTextDocumentLanguage(editor.document, 'json');

			// TODO: Paste and format?
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
