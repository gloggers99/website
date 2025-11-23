# [My Website](https://lucasmarta.com)

## What's This?

This repository serves as the code behind my personal website.

My website serves as a portfolio and a hub for my projects and contact information.

## Technologies Used

This website also serves as a demonstration of my frontend skills. 

Here is a list of technologies used in building this website:

- General HTML/CSS/JS
- React
- TypeScript
- Tailwind

## Interesting Quirk

This website is hosted via GitHub Pages which is good, but there is an interesting quirk when deploying the site with a
custom domain.

The page speicifies a sort of "base path" for all the assets to be loaded from. When using a custom domain, GitHub
Pages expects this base path to be `/reponame/`, because it assumes the site will be loaded via
`https://username.github.io/reponame/` but that `reponame` isn't actually in the URL when using a custom domain.

To get around this, you have to manually change the built `/dist/index.html` file.

For the case of my website, I've written a small script (`publish.py`) to do this automatically.

```shell
# This will:
# - Build the website.
# - Modify the built index.html to have the correct base path. 
# - Deploy the site using gh-pages node package.
python publish.py
```
