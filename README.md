# article-base

A simple CRUD article management application made with [Sails.js](https://sailsjs.com), [EJS](https://ejs.co) and [MongoDB](https://www.mongodb.com).

### How to run?

1. To run the application you should have MongoDB installed. Look for the database at [localhost:27017](http://localhost:27017) (URI: ```mongodb://127.0.0.1:27017```). Take notice that *ID* field points on Mongo *ObjectID*, which is 12 bytes in length primary key consisting of timestamp value, random value and incrementing counter. 

2. To run the application you should have Node.js installed with some additional packages. Use ```sudo npm install <module>``` command in the project directory.

3. Initialize application server with ```sails.lift``` command in the project directory.

4. Test the app at [localhost:1337](http://localhost:1337).

### Screens
![ArticleBase Sails.js 1](screen%201.png)

![ArticleBase Sails.js 2](screen%202.png)

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Wed May 13 2020 16:04:28 GMT+0200 (GMT+02:00) using Sails v1.2.4.

<!-- Internally, Sails used [`sails-generate@1.17.1`](https://github.com/balderdashy/sails-generate/tree/v1.17.1/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

