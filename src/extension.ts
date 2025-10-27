import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const update = () => {
    const editor = vscode.window.activeTextEditor;
    vscode.commands.executeCommand(
      "setContext",
      "cursor.onNumber",
      !!editor?.document.getWordRangeAtPosition(editor.selection.active, /\d+/)
    );
  };

  context.subscriptions.push(
    vscode.window.onDidChangeTextEditorSelection(update),
    vscode.window.onDidChangeActiveTextEditor(update)
  );

  update();
}

export function deactivate() {}
