deps:
	npm install --save \
	react react-dom react-redux redux redux-logger \
	webpack html-webpack-plugin \
	babel-core babel-loader babel-preset-react babel-preset-es2015 babel-preset-stage-0 \
	material-ui react-tap-event-plugin
dev_deps:
	npm install --save-dev \
	webpack-dev-server \
	mocha \
	babel-register \
	expect
create_files:
	mkdir app && cd app && touch index.html index.js && cd .. && touch webpack.config.js .babelrc .gitignore