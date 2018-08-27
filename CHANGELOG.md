# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/atomist/sdm-pack-spring/compare/0.1.16...HEAD)

## [0.1.16](https://github.com/atomist/sdm-pack-spring/compare/0.1.15...0.1.16) - 2018-08-27

### Changed

-   **BREAKING** Switch to newer style parameters object from decorator model
for Spring generator parameters

## [0.1.15](https://github.com/atomist/sdm-pack-spring/compare/0.1.14...0.1.15) - 2018-08-25

## [0.1.14](https://github.com/atomist/sdm-pack-spring/compare/0.1.13...0.1.14) - 2018-08-24

## [0.1.13](https://github.com/atomist/sdm-pack-spring/compare/0.1.12...0.1.13) - 2018-08-24

## [0.1.12](https://github.com/atomist/sdm-pack-spring/compare/0.1.11...0.1.12) - 2018-08-24

## [0.1.11](https://github.com/atomist/sdm-pack-spring/compare/0.1.10...0.1.11) - 2018-08-24

### Added

-   Add command to list branch deploys. [#20](https://github.com/atomist/sdm-pack-spring/issues/20)

### Changed

-   Maven deployer per branch goal should wait on build goal. [#21](https://github.com/atomist/sdm-pack-spring/issues/21)

## [0.1.10](https://github.com/atomist/sdm-pack-spring/compare/0.1.9...0.1.10) - 2018-08-22

## [0.1.9](https://github.com/atomist/sdm-pack-spring/compare/0.1.8...0.1.9) - 2018-08-09

### Added

-   Add more exports to index.

## [0.1.8](https://github.com/atomist/sdm-pack-spring/tree/0.1.8) - 2018-08-08

### Added

-   Added support for per-branch local Spring Boot deployment with Maven

### Fixed

-   Using `package` in a top comment of a seed project file breaks package renaming in generator. [#8](https://github.com/atomist/sdm-pack-spring/issues/8)
-   Local jar deployer should not be a const. [#13](https://github.com/atomist/sdm-pack-spring/issues/13)
