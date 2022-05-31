const express = require('express')
const path = require('path')

const app = express()

app.use('/dist', express.static(path.resolve(__dirname, 'frontend', 'dist')))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html')) // 파일 경로 설정 (frontend/index.html)
})

app.listen(8080)
