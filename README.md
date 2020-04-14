## NextJS + WordPress

👉🏻 https://nextjs-wordpress-indol.now.sh/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) and hosted on [Now](https://zeit.co/).

## Table of Contents

- [View Demo](https://nextjs-wordpress-indol.now.sh/)
- [Features](#features)
- [Development](#development)
  - [Getting Started](#getting-started)
  - [Image Optimization](#image-optimization)
  - [Linting and Code Formatting](#linting-and-code-formatting)

## Features

- Perfect 100 scores on Lighthouse
- Automatic linting and code formating via ESLint and Prettier
- [Next Optimized Images](https://github.com/cyrilwanner/next-optimized-images) for pages
- Using [data fetching](https://nextjs.org/docs/basic-features/data-fetching), Next.js will grab, route, and server-side render (SSR) posts from a [WordPress blog](https://webdevstudios.com/blog/)

## Development

### Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Image Optimization

This website uses [Next Optimized Images](https://github.com/cyrilwanner/next-optimized-images) to automatically scale and smush static images. The following example would auto-optimize (via Mozjpeg) and resize `foo-photo.jpg` to `640px`.

```js
<img
  alt="foo photo"
  className="photo full-width"
  src={require('../public/images/foo-photo.jpg?resize&size=640')}
/>
```

### Linting and Code Formatting

Make sure you have both the ESLint and Prettier extensions installed in your favorite code editor. That's pretty much it!
