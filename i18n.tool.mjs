import fs from "fs"
import path from "path"

/**
 * @type { import('./src/lib/i18n').SUPPORT_LANGUAGES }
 */
const LANGUAGE = ["ar", "de", "en", "es", "fr", "it", "nl", "pt", "ja"]

const assetsDir = "./public/locales"

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir)
}

// const lngFile = LANGUAGE.map(lng => path.join(assetsDir, lng + '.json'))

// for (const file of lngFile) {
//   if (!fs.existsSync(file)) {
//     fs.writeFileSync(file, '{}', 'utf-8')
//   }
// }

const lngDir = LANGUAGE.map((lng) => path.join(assetsDir, lng))

/**
 * @type { import('./src/lib/i18n').LANGUAGE_NAMESPACES }
 */
const files = [
  "common",
  "home"
]

for (const dir of lngDir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  for (const file of files) {
    const p = path.join(dir, file + ".json")
    if (!fs.existsSync(p)) {
      fs.writeFileSync(p, "{}", "utf-8")
    }
  }
}
