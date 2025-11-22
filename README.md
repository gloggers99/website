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

Here is the process for deploying this site:

```shell
npm run build
```

Then, open the generated `dist/index.html` file and change the asset URLs to remove the `/website/` part.

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lucas Marta</title>
    <!-- The URL must not have the /website/ part. -->
    
    <!-- <script type="module" crossorigin src="/website/assets/index-ME9-cFQF.js"></script> -->
    <!-- <link rel="stylesheet" crossorigin href="/website/assets/index-C5mRudEH.css"> -->
    
    <!-- Corrected: -->
    <script type="module" crossorigin src="/assets/index-ME9-cFQF.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index-C5mRudEH.css">
</head>
<body>
<div id="root"></div>

</body>
</html>

```

Then deploy with:

```shell
npx gh-pages -d dist
```