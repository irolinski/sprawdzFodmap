npm run deploy to deploy the page to gh-pages; 
modifying the stylesheet + script ('./' instead of '/') links is necessary in the gh-pages build post-auto-commit;


deployment notes:


deploying on gh-pages using this guide (https://github.com/gitname/react-gh-pages)

the page goes blank and throws 404 on load; turns out to be a problem with vite confing which needed to know the base route;

then, while the home page started working fine, there appeared a problem with routing; fixed that by using this guide (https://github.com/ErickKS/vite-react-router)


___

Deploying on own domain brought a new problem:

The page was blank even though the assets loaded fine. 

It was resolved by:

- removing the sub-path from the 'homepage' parameter in package.json
- changing the basename in the router to 'basename={process.env.PUBLIC_URL}'
- setting the base in site config to '/' (which is the default iirc)
- in the built html file, correcting routes to start with './' instead of '/'





