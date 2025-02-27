import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { InlineConfig, normalizePath } from 'vite'

export const root = new URL('./fixtures/', import.meta.url)

const fileURLToNormalizedPath = (url: URL) => normalizePath(fileURLToPath(url))

export const config: InlineConfig = {
  logLevel: 'silent',
  root: fileURLToNormalizedPath(root),
  configFile: fileURLToNormalizedPath(new URL('./vite.config.ts', root))
}

export const loadFileContent = async (path: string) => {
  const absolutePath = new URL(path, root)
  const content = await readFile(absolutePath, 'utf8')
  return content
}
