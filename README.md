# Unsplash Mini-clone using Nuxt.js

This project based on real world practice and ready to use. Have a fun!

## Features
- Search for images that you love which are arrange with CSS Grid
- Click on images to zoom in
- Error Page if images doesn't exist
- Interactive UI with css animations and transitions
- Loading placeholders when waiting for data
- Vuex Store setup
- SCSS

## Project structure
- [`src`](#src)
  - [`api`](#api)
  - [`assets`](#assets)
  - [`components`](#components)
  - [`config`](#config)
  - [`layouts`](#layouts)
  - [`pages`](#pages)
  - [`plugins`](#plugins)
  - [`store`](#store)

### `src`
Source =)

### `api`
- This is where I did my axios configuration. Setup headers, and baseUrl

### `assets`
Images/Scss.

### `components`
Shared components folder.
- `Icons` The svg icons that were used in the project
- `AppHeader` The header of the application
- `Loader` Loading Placeholders. Useful to give users a glimpse of things to come while awaiting API data
- `Error Page` Shows the error page when your search index is not found.
- `Image Modal` The modal to show the image when you zoom in.
- `ModalPhotoFigure` The figure tag that holds the zoomed in image in the modal.
- `PhotoFigure` The figure tag for the images when you search. Arranged using staggered grid
- `SearchBar` - The search input field located on the header
- `SearchProgressBar` - The search progress bar which gives feedback on search results
- ...

### `config`
BaseUrl for the Unsplash api

### `layouts`
House of the application. The is the parent of the AppHeader and Index page

### `pages`
Various pages in the application. This application has just the index page

### `store`
Vuex store for state management. Actions, State, Getters and Mutations

## Build Setup
``` bash
# clone repo
git clone https://github.com/iamayoakinti/Unsplash-miniclone.git

# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run generate
```

__!!! Project still in progress !!!__

_2021 ..._
