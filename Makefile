deps:
	npm install --save react react-dom react-redux redux redux-logger html-webpack-plugin webpack babel-core babel-loader babel-preset-react babel-preset-es2015 
dev_deps:
	npm install --save-dev webpack-dev-server
create_files:
	mkdir app && cd app && touch index.html index.js && cd .. && touch webpack.config.js .babelrc .gitignore