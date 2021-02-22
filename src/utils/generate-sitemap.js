const sitemap = require('nextjs-sitemap-generator');
const fs = require('fs');

require('dotenv').config();

const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString();

sitemap({
  baseUrl: process.env.SITE_URL ? process.env.SITE_URL : '',
  pagesDirectory: __dirname + '/.next/server/pages',
  targetDirectory: 'public/',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]'],
});
