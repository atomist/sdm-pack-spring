# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/atomist/sdm-pack-spring/compare/0.1.8...HEAD)

## [0.1.8](https://github.com/atomist/sdm-pack-spring/tree/0.1.8) - 2018-08-08

### Added
-   Added support for per-branch local Spring Boot deployment with Maven

### Fixed

-   Using `package` in a top comment of a seed project file breaks package renaming in generator. [#8](https://github.com/atomist/sdm-pack-spring/issues/8)
-   Local jar deployer should not be a const. [#13](https://github.com/atomist/sdm-pack-spring/issues/13)
