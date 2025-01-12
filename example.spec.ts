import MyPlugin from "./main"

//FIXME this throws an "Cannot find module 'obsidian' from 'example.spec.ts'" error
// jest.mock('obsidian');

describe('MyPlugin Tests', () => {
  it('should be importable', () => {
    expect(MyPlugin).toBeTruthy()
  })
})