const port = 8000
const config = {
  databaseURL: `http://localhost${port !== 80 ? `:${port}` : ""}/api`
}

const base = config
const BASE_URL = config.databaseURL

export default base
export { BASE_URL }
