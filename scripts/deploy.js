const ghpages = require('gh-pages');

ghpages.publish(
  './app/build',
  {
    branch: 'master',
    repo: 'git@github.com:JonnyPickard/JonnyPickard.github.io.git'
  },
  (err, res) => {
    if (err) {
      console.log(`err`, err);
    }
    if (res) {
      console.log(`res`, res);
    }
  }
);
