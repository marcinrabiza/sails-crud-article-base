/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
 
 // Routes must point out not some views or actions2, but certain Controller operations such as CREATE or LIST!

 '/': { view: 'pages/homepage' },
 '/articles/list': 'ArticlesController.list',
 '/articles/add': { view: 'pages/add' },
 '/articles/create': 'ArticlesController.create', 
 '/articles/delete/:id' : 'ArticlesController.delete',  // Pass ID with :id
 '/articles/edit/:id' : 'ArticlesController.edit',
 '/articles/update/:id' : 'ArticlesController.update'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
