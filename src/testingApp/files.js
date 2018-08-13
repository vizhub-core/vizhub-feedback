const defaultIndexHTML =
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Untitled</title>
    <link rel="stylesheet" href="styles.css">
    <script src="index.js"></script>
  </head>
  <body>
    Hello
  </body>
</html>`;

const defaultStylesCSS =
`body {
  background-color: red;
  margin: 0px;
  font-size: 5em;
}`;

const defaultIndexJS =
`console.log('Hello World!');`;

const defaultReadmeMD =
`This is a cool [dataviz](https://twitter.com/search?q=%23dataviz)!`;

export const files = [
  { name: 'index.html', text: defaultIndexHTML },
  { name: 'styles.css', text: defaultStylesCSS },
  { name: 'index.js', text: defaultIndexJS },
  { name: 'README.md', text: defaultReadmeMD },
];
