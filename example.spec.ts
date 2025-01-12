import MyPluginLogic from "./myplugin";
import MyPlugin from "./main";

describe("MyPlugin Tests", () => {
	it("should be importable", () => {
		expect(MyPlugin).toBeTruthy();
	});

  it('onload should load default settings', async () => {
    const plugin = new MyPlugin({} as any, {}as any);
    await plugin.onload();

    expect(plugin.settings).toEqual({
      mySetting: 'default'
    })
  })

  it('should create a notice instance with This is a notice! as text', () => {
    const mockNotice = jest.fn();
    MyPluginLogic.ribbonIconCallback(mockNotice)

    expect(mockNotice).toHaveBeenCalledWith("This is a notice!")
  })
});
