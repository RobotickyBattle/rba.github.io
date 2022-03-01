

# RBA page
[![Build Status](https://travis-ci.org/RobotickyBattle/rba.github.io.svg?branch=master)](https://travis-ci.org/RobotickyBattle/rba.github.io)

# Dev docker

```
docker-compose pull
docker-compose up
```

```
Bundler: Skipping "bundle install" as it fails due to the Nix wrapper.
Bundler: Please enter the new directory and run the following commands to serve the page:
Bundler: nix-shell -p bundler --run "bundle install --gemfile=Gemfile --path vendor/cache"
Bundler: nix-shell -p bundler --run "bundle exec jekyll serve"
```
