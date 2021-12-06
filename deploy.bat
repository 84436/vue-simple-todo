:: Manual deployment to GitHub Pages
:: https://vitejs.dev/guide/static-deploy.html#github-pages
@ECHO OFF

CALL yarn build

SET CD_ORIGINAL=%CD%
CD dist

CALL git init
CALL git add -A
CALL git commit -m "manual deploy"

CALL git push -f git@github.com:84436/vue-simple-todo.git master:gh-pages

CD %CD_ORIGINAL%
