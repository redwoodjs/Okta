import fs from 'fs'
import path from 'path'

import { standardAuthHandler } from '@redwoodjs/cli-helpers'

import { Args } from './setup'

const { version } = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8'))

export const handler = async ({ force: forceArg }: Args) => {
  standardAuthHandler({
    basedir: __dirname,
    forceArg,
    provider: 'okta',
    authDecoderImport:
      "import { authDecoder } from '@redwoodjs/auth-okta-api'",
    webPackages: [
      '@okta/okta-auth-js',
      `@redwoodjs/auth-okta-web@${version}`,
    ],
    apiPackages: [
      '@okta/jwt-verifier',
      `@redwoodjs/auth-okta-api@${version}`,
    ],
  })
}
