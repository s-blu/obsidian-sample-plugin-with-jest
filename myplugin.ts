export default class MyPluginLogic {
  static ribbonIconCallback(notice: any) {
    // Called when the user clicks the icon.
    new notice('This is a notice!');
  }
}