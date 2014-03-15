# Setup a basic front-end workflow

## Step 1: Installing node and node_modules
* Install node (and np): https://github.com/joyent/node/wiki/Installation
	* !Important: prevent access right issues with manual build, e.g.:
  * ```git clone https://github.com/joyent/node.git```
  * ```cd node```
  * ```git checkout v0.10.26 #Try checking nodejs.org for what the stable version is```
  * ```./configure --prefix=/home/yourusername/node # install to user-accessible dir```
  * ```make && sudo make install```
  *  add the following to ```.bash_rc```: ```export PATH=$PATH:/home/yourusername/node/bin```
	* for other options see: https://gist.github.com/isaacs/579814
* create basic package.json file ```npm init```
* install node modules bower and grunt-cli via ```npm install -g bower grunt-cli``` globally 
* install node module for grunt ```npm install --save-dev grunt``` only for the current project (we want --save-dev here as the node_modules usually are just helpers and are not needed as deployed files)

## Step 2: Installing bower-components
* create bower.json ```bower init```
* ```bower install -S bootstrap-sass```

## Step 3: Basic sass-styling and sass to css conversion
* adding basic html file and basic scss file for testing purposes
* installing ruby, sass and compass
 * https://www.ruby-lang.org/en/installation/#rvm
 * ```gem install sass``` or ```sudo gem install sass``` depending on configuration
 * ```gem install compass``` or ```sudo gem install compass``` depending on configuration
*  test scss-compilation via ```sass --watch your-css-directory```

## Step 4: Using grunt as task-runner
* adding basic Gruntfile, live-reload-example
 * ```npm install grunt-contrib-sass --save-dev```
 * ```npm install grunt-contrib-watch --save-dev```
 * Installing livereload chrome extension: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
 * loading modules and adding tasks in Gruntfile (see Gruntfile.js)

## Step 5: Basic css-file structure
```
base/ => basic elements like tables, forms, p-tags, headings, etc.
components/ => mostly context-independend (responsive) components
modules/ => abstract mostly unstyled css classes (e.g. tabs; rarely used, as mixins or hacking components is usually prefered)
layout/ => main content blocks, custom-grids
design/ => main page styles
mixins/ => mixins and extensions
themes/ => page-level style-sets
vendor/ => placeholder files including libraries and parts of it as needed
_config.scss => configuration variables, including bootstraps variables
main.scss => file inclusions
main.css => outputted css file
```
* The file structure varies from project to project depending on scale and type of project. Usually the basic pattern is maintained. 
* But there usually will be at least one config file and components are normally separated.
* Depending on the number of contents there might be single files, e.g. _components.scss _base.scss or directory used for the separation of styles. Example:

```
components/_video-container.scss 
components/_search-bar.scss 
components/_calendar.scss 
components/_carousel.scss 
```

or even:
```
components/calendar/_calendar-week.scss 
components/calendar/_calendar-month.scss 
components/calendar/_calendar-agenda.scss 
components/_carousel.scss
components/_video.scss 
```

## Step 6: Hacking bootstrap
When it comes to coding css, working with a lot of overwrites is generally not a good strategy with the exception of base-styles and states like hover. The same is true for css-frameworks like bootstrap, which usually offer a great deal of features, but can beceome quite painful to deal with, when someone includes only the bootstrap.css and tries to modify components via overwrites. 
Usually it is much easier to use the sass or less version of bootstrap and include only the compoenents you need. Furthermore you can take the source of components and modify them directly. Bootstrap is usually also not updated that often, that it is required to stay on its latest version. 
Hacked components can be simply put into the components directory.

## Step 7: JavaScript and other components

## Step 8: Getting an existing repo to run, when node, bower, grunt and sass are installed
1. Clone via git
2. cd to base-directory
3. run ```npm install```
4. run ```bower install```

## (Step 9): Concactination, minification and advanced build features

## (Step: 10): Advanced grunt-setup using load-grunt-config
* http://firstandthird.github.io/load-grunt-config/
