/// <reference types="vitest" />

import { defineConfig } from 'vite'
import GithubActionsReporter from 'vitest-github-actions-reporter'

export default defineConfig({
  test: {
    reporters: process.env.CI ? new GithubActionsReporter() : 'default'
  }
})
