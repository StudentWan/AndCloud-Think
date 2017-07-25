
Application created by [ThinkJS](http://www.thinkjs.org)

## Install dependencies

```
npm install
```

## first run mysql

```
mysqld start
```

## Start server


In development env:
```
npm start
```

In production env:

```
npm run product
```

## Deploy with pm2

Use pm2 to deploy app on production enviroment.

```
pm2 start www/production.js
```

## Use browser-sync to watch

```
./browser-sync.sh
```
