#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const targetDir = process.argv[2] || "my-chrome-extension";

// Function to copy files
function copyTemplateFiles(templatePath, targetPath) {
  // Ensure the target directory exists
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  // List of files and directories to copy
  const itemsToCopy = [
    ".gitignore.template",
    "package.json.template",
    "tsconfig.json",
    "webpack.common.js",
    "webpack.dev.js",
    "webpack.prod.js",
    "src",
  ];

  itemsToCopy.forEach((item) => {
    const sourcePath = path.join(templatePath, item);
    const destinationPath = path.join(targetPath, item.replace(".template", ""));

    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Recursively copy directories
      copyDirectoryRecursive(sourcePath, destinationPath);
    } else {
      // Copy files
      fs.copyFileSync(sourcePath, destinationPath);
    }
  });
}

// Helper function to copy directories recursively
function copyDirectoryRecursive(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const items = fs.readdirSync(source);

  items.forEach((item) => {
    const sourceItem = path.join(source, item);
    const destinationItem = path.join(destination, item);

    if (fs.lstatSync(sourceItem).isDirectory()) {
      copyDirectoryRecursive(sourceItem, destinationItem);
    } else {
      fs.copyFileSync(sourceItem, destinationItem);
    }
  });
}

// Function to install dependencies
function installDependencies(targetPath) {
  execSync("npm install", { cwd: targetPath, stdio: "inherit" });
}

// Main function
function main() {
  const templatePath = __dirname;
  const targetPath = path.join(process.cwd(), targetDir);

  copyTemplateFiles(templatePath, targetPath);
  installDependencies(targetPath);

  console.log("Chrome extension project setup complete!");
}

main();
