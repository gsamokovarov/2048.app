build: grunt-dependencies
	@./node_modules/.bin/grunt

grunt-dependencies:
	@npm install .
	@bundle install

install: build
	@cp -r build/releases/2048/mac/2048.app /Applications
