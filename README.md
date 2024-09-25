# next-webpack-typescript
  - node version use lates, currtly using this project 20
  - npm init 
  - npm install next@latest react@latest react-dom@latest
  - Add script in package.json from nextjs document
  - Using App Route, Add Home page in App directory with page.tsx
  - Add Root Layout in APP directory with layout.tsx

`Run the nextjs application in development` npm run dev
![Alt text](readmeimages/tsconfigCreated.png)

  - auto generated  tsconfig.json file and next-env.d.ts in root folder
    - - tsconfig.json is configuration file for Typescript
    - - next-env.d.ts is Typescript declartion file for Nextjs

  - go to the localhost:3000, shows our application

  `==========================================================`


  - add .gitignore file in root folder
    - - Git files and folders to ignore



# Routing Files

- layout (.js | .jsx | .tsx) for Layout
- page(.js | .jsx | .tsx) for Page


# Dynamic Route structure
- [floder] - Dynamic route segment
- [...folder] -> Catch all-route segment
- [[...folder]] --> Optional Catch all route segment

 

 # Meta Data in Nextjs
 - Static meta data
 - Dynamic meta data

* Static Meta Data
  - To define static metadata, export a Metadata object from a layout.js or static page.js file.

* Dynamic Meta Data
  - You can use generateMetadata function to fetch metadata that requires dynamic values.

* File based Meta Data
  - favicon.ico, apple-icon.jpg, and icon.jpg
  - opengraph-image.jpg and twitter-image.jpg
  - robots.txt
  - sitemap.xml

  * * Behavior
    - File-based metadata has the higher priority and will override any config-based metadata.
...

  