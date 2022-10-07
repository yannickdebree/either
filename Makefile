dc := docker-compose
dr := $(dc) run --rm either

node_modules/time:
	$(dr) yarn
	touch node_modules/time

.PHONY: test
test: node_modules/time # Run tests
	$(dr) yarn test

.PHONY: build
build: node_modules/time # Build library
	$(dr) yarn build
	
