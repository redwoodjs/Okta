import { command, description, builder, handler } from '../setup'

test('standard exports', () => {
  expect(command).toEqual('okta')
  expect(description).toMatch(/Okta/)
  expect(typeof builder).toEqual('function')
  expect(typeof handler).toEqual('function')
})
