# Lists all availabe commands.
default:
    @just --list

# Conducts Prettier/ESLint linting.
lint:
    @npm run lint

# Finds and fixes the problems in the source code.
fix:
    @npm run fix

# Runs storybook.
story:
    @npm run storybook

# Installs the required packages.
install:
    @npm install

# Builds the package.
build:
    @npm run build

# Cleans up the pre-build target.
clean:
    @rm -rf node_modules

# Runs local docker emvironment
mock:
    @docker compose -f devops/local/docker-compose.yaml up -d