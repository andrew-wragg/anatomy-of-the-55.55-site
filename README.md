# anatomy-of-the-55.55-site

 * Site hosted on GitHub Pages: https://andrew-wragg.github.io/anatomy-of-the-55.55-site/
 * Build folder: https://github.com/andrew-wragg/anatomy-of-the-55.55-site/tree/main/dist

This project is a single page responsive microsite with custom on-scroll css animation.

It uses ViteJS for development, with auto-deployment to github pages when pushing new commits.

# Key points
* The only dependency is Vite for development.
* The HTML is semantic and fully accessible with alt text and custom semantic HTML tags.
* All on-scroll animations are hand coded, no animation library was used.
* The expanding menu is hand coded.
* The site sizes itself to the viewport height to maximise the available space.
* The site is responsive and switches to single-column layout at screen widths of 1000px or less.
* The site scales gracefully from 1000px to 1920px screen widths.  
* Beyond 1920px the site does not scale, due to image quality limitations of the available assets.
* The Vite project has been configured to not minify or add polyfills to the built project files.  This is for the purpose of readability.  

# Setup
After cloning the repository, simply install the dependencies:
```shell
% npm i
```

# Development
The following command will build a dev version of the site and host it locally.
A localhost url and local network IP will be provided.
The local network IP can be used to view the site on any device connected to the local network.
```shell
% npm run dev
```

# Build
Running the build command will build the site to the `dist` folder.
Vite has been configured to not minify the built files or add the default polyfills, this is so that the output files are readable.
```shell
% npm run build
```

# Deploy
There is a github deploy script included in the project.
When git commits are pushed to github, this triggers the build script in github, which will build the site and deploy it to GitHub Pages.  You can find the URL at the top of the README.
```shell
% git push
```
