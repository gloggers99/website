### This script automates the publishing process for my website.
###
### The "quirk" listed in the README.md is automatically solved with this script.

import os

# Generate built website files.
print("Building the website...")
os.system("npm run build")

# Fix incorrect paths in index.html.
print("Fixing paths in index.html...")
try:
    with open("./dist/index.html", "r") as index_file:
        index_content = index_file.read()
        index_content = index_content.replace("/website", "")
        index_file.close()
    with open("./dist/index.html", "w") as index_file:
        index_file.write(index_content)
        index_file.close()
except IOError as e:
    print("Failed to read/write \"./dist/index.html\": ", e)

# Publish to GitHub Pages.
print("Publishing to GitHub Pages...")
os.system("npx gh-pages -d dist")
