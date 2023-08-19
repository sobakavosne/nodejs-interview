/*
Translate markdown text into HTML.
The markdown text is presented as multiline string.
*/

const input =
  `
Lorem ipsum dolor sit amet, 

> consectetur adipiscing elit, sed do 
> eiusmod tempor incididunt ut labore et 
> dolore magna aliqua. Ut enim ad minim 

  - veniam, quis nostrud exercitation ullamco laboris 
  - nisi ut aliquip ex ea commodo consequat. Duis aute 
  - irure dolor in reprehenderit in voluptate velit esse 
  
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 

cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`


const biscuit =
  <T>(x: string) => {
    const stack: [] = [];

    return x === ''
      ? "<p>"
      : x.startsWith("> ")
        ? "<br>" + x.slice(2) + "</br>"
        : x.startsWith("  - ")
          ? handleStack(x, stack)
          : x
  }

const handleStack =
  <T>(x: string, stack: string[]) => {
    stack.push(x);

    return x;
  }

// "<ul>" + x.slice(4) + "</ul>"

const markdownToHtml =
  <T>(markdown: string): string[] =>
    markdown
      .split(/\n/)
      .map(biscuit)

console.log(markdownToHtml(input));
