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
