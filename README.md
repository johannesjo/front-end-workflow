# Setup a basic front-end workflow

## Step 1: Installing node and node_modules
* Install node (and npm): https://github.com/joyent/node/wiki/Installation
*  !Important: prevent access right issues with manual build:
  *  ```git clone https://github.com/joyent/node.git```
  *  ```cd node```
  *  ```git checkout v0.10.26 #Try checking nodejs.org for what the stable version is```
  *  ```./configure --prefix=/home/yourusername/node # install to user-accessible dir```
  *  ```make && sudo make install```
  *  add the following to .bash_rc
     
```
export PATH=$PATH:/home/yourusername/node/bin
```
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
