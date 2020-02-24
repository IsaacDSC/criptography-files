const fs = require('fs')
const crypto = require('crypto')

const alg = 'aes-256-ctr'
const passwd = '123456'

const read = fs.createReadStream('output.txt')
const write = fs.createWriteStream('input.txt')
const cipher = crypto.createDecipher(alg, passwd)

read.pipe(cipher).pipe(write)