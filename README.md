# "Gendiff" console utility

### Hexlet tests and linter status:
[![Actions Status](https://github.com/gobacktosleep/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/gobacktosleep/frontend-project-46/actions)

[![Node CI](https://github.com/gobacktosleep/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/gobacktosleep/frontend-project-46/actions/workflows/nodejs.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/15e766bc88c9216813f4/maintainability)](https://codeclimate.com/github/gobacktosleep/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/15e766bc88c9216813f4/test_coverage)](https://codeclimate.com/github/gobacktosleep/frontend-project-46/test_coverage)

## Description:
"Gendiff" is a program that compares two data structures and shows the difference between them.
- Utility supports two different input formats: `yaml` & `json`
- Generates output data in `plain text`, `stylish`, `json` formats.

## Installation:
- Clone this repository on your computer.
- Go to the directory where you downloaded it: `$ cd directory-name`
- Sequentially type these commands in your Terminal:
```
# setup
$ make install

# this command is responsible for linking commands from package.json to "./bin" directory
$ npm link
```
Now you can use the program.

## How to use:
```
$ gendiff [options] <filepath1> <filepath2>
```
### Supported options:
- `-V` or `--version` - output the version number
- `-f` or `--format <type>` - output format (default: "stylish")
- `-h` or `--help` - display help for command

## Usage examples:
#### Run help
[![asciicast](https://asciinema.org/a/SaX87AoHhEZais4kjYdSfNWrs.svg)](https://asciinema.org/a/SaX87AoHhEZais4kjYdSfNWrs)

#### Comparing json files in stylish format
[![asciicast](https://asciinema.org/a/WGbDeau3in3LN9uckyYTuwXbM.svg)](https://asciinema.org/a/WGbDeau3in3LN9uckyYTuwXbM)

#### Comparing json files in plain format
[![asciicast](https://asciinema.org/a/acharCeNmEZFrMsSiEN3lKIoR.svg)](https://asciinema.org/a/acharCeNmEZFrMsSiEN3lKIoR)

#### Comparing json files in json format
[![asciicast](https://asciinema.org/a/M5qOVKXzkGrZT3S90LViBPRGD.svg)](https://asciinema.org/a/M5qOVKXzkGrZT3S90LViBPRGD)

#### Comparing yaml files in stylish format
[![asciicast](https://asciinema.org/a/ggZVMDeijSUpbdBTIOUcVPdR9.svg)](https://asciinema.org/a/ggZVMDeijSUpbdBTIOUcVPdR9)

#### Comparing yaml files in plain format
[![asciicast](https://asciinema.org/a/BXWUAyBwkt7klOjbgCnAiG21X.svg)](https://asciinema.org/a/BXWUAyBwkt7klOjbgCnAiG21X)

#### Comparing yaml files in json format
[![asciicast](https://asciinema.org/a/dWSmlaX53QEPkUtlh2KlrI4ye.svg)](https://asciinema.org/a/dWSmlaX53QEPkUtlh2KlrI4ye)