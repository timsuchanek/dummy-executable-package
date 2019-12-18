#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')

function getMessage() {
  return new Promise((resolve, reject) => {
    const child = spawn(path.join(__dirname, './executable'), {
      stdio: ['ignore', 'pipe', 'inherit'],
    })
    child.stdout.on('data', data => {
      resolve(String(data))
    })
    child.on('error', e => {
      reject(e)
    })
  })
}

module.exports = getMessage
