// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
let duckyActivator: vscode.StatusBarItem;
let duckyRunningSpace: vscode.StatusBarItem;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ducky" is now active!');
	duckyActivator = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	duckyRunningSpace = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, -1000);
	context.subscriptions.push(duckyActivator);
	context.subscriptions.push(duckyRunningSpace);

	vscode.commands.registerCommand('ducky.activateDucky', () => {
		runDucky();
	});

	// update status bar item once at start
	duckyActivator.text = `$(ducky-icon)`;
	duckyActivator.command = 'ducky.activateDucky';
	duckyActivator.tooltip = 'Toggle Ducky';
	duckyActivator.show();

}

function runDucky() {
	duckyRunningSpace.show();
	var steps = 0;
	var reverse = false;
	var running = setInterval(() => {
		var duckySteps = "_ ".repeat(steps);
		var icon = !reverse ? "$(ducky-icon)" : "$(ducky-reverse-icon)";
		duckyRunningSpace.text = `${duckySteps} ${icon} `;
		duckyRunningSpace.color = "yellow";
		if (steps > 10 && !reverse) {
			reverse = true;
		}
		reverse ? steps-- : steps++;
		if (steps < 0 && reverse) {
			duckyRunningSpace.text += " < It was a nice little walk, thanks!";
			setTimeout(() => {
				clearInterval(running);
				duckyRunningSpace.hide();
			}, 2000);
		}
	}, 200);
}

// This method is called when your extension is deactivated
export function deactivate() {}
