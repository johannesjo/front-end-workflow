# Getting a basic front-end setup to run

## Step 1: Installing node and node_modules
* Install node (and npm): http://howtonode.org/how-to-install-nodejs
* add basic package.json file ```npm init```
* install node modules bower and grunt-cli via ```npm install -g bower grunt-cli``` globally 
* install node module for grunt ```npm install --save-dev grunt``` only for the current project (we want --save-dev here as the node_modules usually are just helpers and are not needed as deployed files)

## Step 2: Installing bower and bower-components
* add bower.json ```bower init```
* ```bower install -S bootstra-sass```

## Step 3: Basic sass-styling
* adding basic html file and basic scss file
* installing ruby, sass and compass
 * http://compass-style.org/install/
*  compile scss via ```sass --watch styles```

## Step 4: Using grunt as task-runner
* adding basic Gruntfile, live-reload-example
 * ```npm install grunt-contrib-sass --save-dev```
 * ```npm install grunt-contrib-watch --save-dev```
 * Installing livereload chrome extension: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
 * loading modules and adding tasks to Gruntfile

## Step 5: Basic css-file structure

## Step 6: Hacking bootstrap

## Step 7: JavaScript and other components

## (Step 8): Concactination, minification and advanced build features

## (Step: 9): Advanced grunt-setup using load-grunt-config
* http://firstandthird.github.io/load-grunt-config/
