# Overview

This test framework is built using Node.js 20 LTS, Playwright, and TypeScript. It aims to provide a robust and efficient platform for automated testing, specifically designed to verify functionalities on the Carnival Cruise website.

# Test Suite

The test suite included in this framework consists of pre-written test cases tailored to validate various functionalities on the Carnival Cruise website. These test cases cover a wide range of scenarios to ensure thorough testing of the website's features.

# Setup Framework

To set up the framework, ensure you have Node.js 20 LTS installed on your system. You can download and install it from the official Node.js website: Node.js.

# Getting Started

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Ensure Node.js 20 LTS is installed on your system, if you don't have it please follow these instructions: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/ .

## NOTE: if this is the first time that you run Playwright run this:

```
npx playwright install
```

# Usage - Running Tests

### UI Mode - VSCode Debbuger:
NOTE: I like to use VSCODE due to the native integration with Playwright.

Open this link and follow the instructions to configure your local environment in VSCODE

https://playwright.dev/docs/getting-started-vscode

Once you have installed the extensions and followed the instructions, you can go to:

- Testing (left side bar)
- Click "Show Browser"
- The click play on any test to see the execution

## UI Mode - CLI

To run the test suite in UI mode, use the following command:

```
npm run test:ui
```

This command launches the Playwright test runner with a graphical user interface for interactive test execution.

## Headless Mode

To run the test suite in headless mode, use the following command:

```
npm run test:headless
```

This command executes the test suite in headless mode, suitable for automated testing without a visible browser window.

## Docker

Building Docker Image
To build a Docker image for the test automation, use the following command:

```
npm run docker:build
```

This command builds a Docker image named "carnival-test-automation" based on the Dockerfile provided.

To run the tests using docker just run:

```
docker run carnival-test-automation
```

## Linting

To lint the TypeScript files and configuration, use the following command:

```
npm run lint
```

This command runs ESLint on the test files, library files, and Playwright configuration to ensure code consistency and identify potential issues.

## Linting with Fix

To run ESLint and automatically fix fixable issues, use the following command:

```
npm run lint:fix
```

This command runs ESLint with the --fix flag to automatically fix fixable issues in the TypeScript files and configuration.

## Formatting

To format TypeScript files, JSON files, and Markdown files, use the following command:

```
npm run format
```

This command uses Prettier to format TypeScript files, JSON files, and Markdown files in the project directory, excluding certain directories and files specified in the configuration.

# Other

## Prepare

The prepare script is used by Husky, a Git hooks manager, to set up Git hooks for the project.

```
npm run prepare
```

# Report Generation

After every test run, a detailed report is automatically generated and stored for reference. This report provides insights into the test execution, including passed and failed test cases, along with any errors encountered during the process. You can find the reports on this folder:

```
./playwright-report/index.html
```
