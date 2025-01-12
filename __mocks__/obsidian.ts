
//  App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting

export class Modal {}
export class Notice {}
export class Plugin {
  loadData() {}
  saveData() {}
  addRibbonIcon() {
    return {
      addClass: () => {}
    }
  }
  addStatusBarItem() {
    return {
      setText: () => {}
    }
  }
  addCommand() {}
  addSettingTab() {}
  registerDomEvent() {}
  registerInterval() {}
}
export class PluginSettingTab {}
export class Setting {}

// mocking these classes is not necessary. They're part of the import but only access as a type.
// export class App {}
//export class MarkdownView {}
// export class Editor {}