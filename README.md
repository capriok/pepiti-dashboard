This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributors

To make any contributions please create a pull request. You will not be able to merge into master, someone will need to review the PR.

## Next.js 13 Beta app directory

The plan is to adopt Next.js new app directory. That is why you will see a little bit of CSS in the components folder. Ultimate plan is to move away from CSS-in-JS as that is where React seems to want.

If you use VS Code add the CSS Modules extension, it will help a ton.

## Styling

We are currently using Mantine UI library in the project. Links to their documentation can be found here: [Mantine](https://mantine.dev/pages/getting-started/).

We combine some inline styling with module css files. Mantine provides a lot of great components but with Next.js's new initiative it's a little difficult to fully adopt server components.
