This is project for my website. Vue.js is used so that I can create reusuable components but website is supposed to be rendered to static html files.

**Commands:**

- `npm run start` - starts http server with current `dist`
- `npm run generate` - builds static files to `dist` directory

**Directory structure:**

- `/components` - is direcotry for reusable copmonents. It should conain no content only parst of html with parameters to provide
- `/pages` - each file in this direcotry should be seperate page. This files are supposed to have content of the page whcih will be provided to components used on that page.
- `/static` - all of the files I know website will need to show content like fonts, icons, images, static css
