# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased](https://github.com/atomist/sdm-pack-spring/compare/1.0.0-M.4a...HEAD)

### Added

-   Add push test to check whether a project is using Spring Boot 2. [#59](https://github.com/atomist/sdm-pack-spring/issues/59)
-   Implement `removeAutowiredOnSoleConstructor` as an autofix. [#57](https://github.com/atomist/sdm-pack-spring/issues/57)

## [1.0.0-M.4a](https://github.com/atomist/sdm-pack-spring/compare/1.0.0-M.4...1.0.0-M.4a) - 2018-09-16

## [1.0.0-M.4](https://github.com/atomist/sdm-pack-spring/compare/1.0.0-M.3...1.0.0-M.4) - 2018-09-16

### Added

-   Add user agent to Spring Initializr call. [#41](https://github.com/atomist/sdm-pack-spring/issues/41)
-   Add MavenProgressReporter. [#c5259ec](https://github.com/atomist/sdm-pack-spring/commit/c5259ecca2dbae3c1c30be66c8ac0e2cb84db5d4)
-   Add Maven goal preparations and version helpers. [#45](https://github.com/atomist/sdm-pack-spring/issues/45)
-   Gradle support. [#44](https://github.com/atomist/sdm-pack-spring/issues/44)
-   XML path expression support in `XmldocFileParser`
-   Add CodeTransform to add a Spring Boot starter to a Maven POM. [#33](https://github.com/atomist/sdm-pack-spring/issues/33)

### Changed

-   Consider reading defaults from metadata rather than hardcoding them. [#40](https://github.com/atomist/sdm-pack-spring/issues/40)
-   Move from src to lib in dependencies. [#48](https://github.com/atomist/sdm-pack-spring/issues/48)

### Fixed

-   Use cross-spawn. [#51](https://github.com/atomist/sdm-pack-spring/issues/51)

## [1.0.0-M.3](https://github.com/atomist/sdm-pack-spring/compare/1.0.0-M.1...1.0.0-M.3) - 2018-09-04

### Added

-   Add code generator that uses start.spring.io as a seed. [#34](https://github.com/atomist/sdm-pack-spring/issues/34)

### Fixed

-   Spring Boot Maven plugin doesn't pass parameters when forked. [#7](https://github.com/atomist/sdm-pack-spring/issues/7)

## [1.0.0-M.1](https://github.com/atomist/sdm-pack-spring/compare/0.1.18...1.0.0-M.1) - 2018-08-27

## [0.1.18](https://github.com/atomist/sdm-pack-spring/compare/0.1.17...0.1.18) - 2018-08-27

## [0.1.17](https://github.com/atomist/sdm-pack-spring/compare/0.1.16...0.1.17) - 2018-08-27

## [0.1.16](https://github.com/atomist/sdm-pack-spring/compare/0.1.15...0.1.16) - 2018-08-27

### Changed

-   **BREAKING** Switch to newer style parameters object from decorator model

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
