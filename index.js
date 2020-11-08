#!/usr/bin/env node
'use strict'

const program = require('commander')
const { runGenerator, convertSvgToJs } = require('./lib')

// Used to get version number from package.json
require('pkginfo')(module, 'version')

program
	.name("svg-maps")
	.version(module.exports.version, '-v, --version')

program.command('add')
	.description('Create a new map package for svg-maps project')
	.action(runGenerator)

program.command('generate <file>')
	.description('Generate JS file from SVG file')
	.action(convertSvgToJs)

program.parse(process.argv)
