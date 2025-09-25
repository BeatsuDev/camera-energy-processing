# Rules and guidelines for the project

## General

The rules for the project are defined in cursor mdc rule files in the .cursor/rules directory. Read these carefully before EVERY ACTION.
This project uses mise-en-place to manage tools and tasks. .env files are used for environment variables. bun is used in place for npm.
The root directory of this project is a monorepo. Read the README.md in each directory for more information.

## Code quality

To ensure quality and reduce AI hallucinations, you MUST proactively use linter rules, formatting rules, unit tests and integration tests
to ensure the objective is met. You MUST NEVER change unit tests or integration tests without stopping first, then telling the user about
a request to change the test.

## AI Notes
