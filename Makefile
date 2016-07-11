deps:
	npm install --save react react-dom
dev_deps:
	npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react
create_files:
	mkdir app && cd app && touch index.html index.js && cd .. && touch webpack.config.js && touch .babelrc
