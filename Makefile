dc := docker-compose
dr := $(dc) run --rm either

node_modules/time:
	$(dr) yarn
	touch node_modules/time

.PHONY: start
start: node_modules/time # Run tests
	$(dr) yarn start

.PHONY: build
build: node_modules/time # Build library
	$(dr) yarn build
	
.PHONY: publish
publish: node_modules/time # Publish library
	$(dr) npm login --scope=@OWNER --registry=https://npm.pkg.github.com
	$(dr) yarn publish
	
