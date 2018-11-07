export const certOptions = {
    key: fs.readFileSync(path.resolve('build/cert/server.key')),
    cert: fs.readFileSync(path.resolve('build/cert/server.crt'))
}