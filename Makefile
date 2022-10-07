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
	
