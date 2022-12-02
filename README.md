# ChaiBapchya.github.io
Chaitanya Bapat's Personal Website

- Feel free to clone it/fork it.
- Create issues on this repo if you find 'em.

## Tech Stack

This personal website leverages Github Pages. It supports Jekyll & Liquid.

### Jekyll
Jekyll is a blog-aware static site generator in Ruby
- Github: https://github.com/jekyll/jekyll
- Website: https://jekyllrb.com/

### Liquid
Liquid is a template / markup language
- Github: https://github.com/Shopify/liquid
- Website: https://shopify.github.io/liquid/


## Local Development

### Environment
Since this website is based on Jekyll, you'd need Ruby, Bundler & Jekyll installed
On Mac
```
brew upgrade
brew install rbenv ruby-build
gem update --system
gem install jekyll bundler
```

Confirm jekyll properly installed
```
cd ChaiBapchya.github.io/
bundle exec jekyll --version
```

## Build & serve
- `bundle exec <command>` executes the command in the context of the current bundle
In other ensures that the gem versions mentioned in the Gemfile are respected
For more - https://bundler.io/man/bundle-exec.1.html

```
bundle exec jekyll b
bundle exec jekyll s
```

jekyll b short for jekyll build
jekyll s short for jekyll serve

For more - https://jekyllrb.com/docs/usage/
