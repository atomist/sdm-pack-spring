# @atomist/sdm-pack-spring

[![atomist sdm goals](http://badge.atomist.com/T29E48P34/atomist/sdm-pack-spring/e514504a-2927-468c-8f8a-93568636b896)](https://app.atomist.com/workspace/T29E48P34)
[![npm version](https://img.shields.io/npm/v/@atomist/sdm-pack-spring/next.svg)](https://www.npmjs.com/package/@atomist/sdm-pack-spring/v/next)

[Atomist][atomist] software delivery machine (SDM) extension pack
providing automated creation, building, and delivery of
[Spring][spring] and [Spring Boot][spring-boot] applications.

Also includes Java, Kotlin, Maven and Gradle support.

[spring]: https://spring.io/ (Spring)
[spring-boot]: http://spring.io/projects/spring-boot (Spring Boot)

See the [Atomist documentation][atomist-doc] for more information on
what SDMs are and what they can do for you using the Atomist API for
software.

[atomist-doc]: https://docs.atomist.com/ (Atomist Documentation)

## Purpose

This pack adds Spring Boot, Java and Kotlin functionality to an Atomist SDM. It includes:

- Building blocks for Atomist generators based on Spring Boot seed projects: core code transforms and parameter definitions
- Basic Java refactoring support
- Commands to add and configure Spring Boot starters, based on the [Spring Guides](https://spring.io/guides)
- Useful out of the box code transforms such as `try to upgrade spring boot`
- Code inspections to help ensure Spring Boot best practice, such as removing unnecessary annotations.
- PushTests supporting Spring, Spring Boot, Java, Kotlin, Maven and Gradle.
- Local deployment support for Spring Boot projects, using Maven or Gradle.

> This pack provides a basis on which to build further Spring Boot and Java functionality, such as custom support for additional Spring Boot starters. Community contributions welcome!

This functionality is based on the following low level building blocks:

- Code transform primitives for Java, including
	- Add import to a given class
	- Add annotation to a given class
	- Move package
	- Rename class
	- Add Maven dependency
- Code transform primitives for Spring, including
	- Add Spring Boot starter
	- Add annotation to Spring Boot class
- Structural inference
   - Infer Spring Boot package
- XML support
	- 	Support for parsing and editing XML using Atomist path expressions
- Properties file support
	- `PropertiesFile` type enabling querying and adding properties 

Java and Kotlin support depends on the support for Java and Kotlin grammars in the [@atomist/antlr-ts](https://github.com/atomist/antlr-ts) project.


## Usage

Install the dependency in your SDM project.

```
$ npm install @atomist/sdm-pack-spring
```

Then use its exported method to add the functionality to your SDM in
your machine definition.

```typescript
import {
    SoftwareDeliveryMachine,
    SoftwareDeliveryMachineConfiguration,
} from "@atomist/sdm";
import {
    createSoftwareDeliveryMachine,
} from "@atomist/sdm-core";
import { SpringSupport } from "@atomist/sdm-pack-spring";

export function machine(configuration: SoftwareDeliveryMachineConfiguration): SoftwareDeliveryMachine {
    const sdm = createSoftwareDeliveryMachine({
        name: "My Software Delivery Machine",
        configuration,
    });
    sdm.addExtensionPacks(SpringSupport);
    return sdm;
};
```

## Support

General support questions should be discussed in the `#support`
channel in the [Atomist community Slack workspace][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist/sdm-pack-spring/issues

## Development

You will need to install [Node.js][node] to build and test this project.

[node]: https://nodejs.org/ (Node.js)

### Build and test

Install dependencies.

```
$ npm install
```

Use the `build` package script to compile, test, lint, and build the
documentation.

```
$ npm run build
```

### Release

Releases are handled via the [Atomist SDM][atomist-sdm].  Just press
the 'Approve' button in the Atomist dashboard or Slack.

[atomist-sdm]: https://github.com/atomist/atomist-sdm (Atomist Software Delivery Machine)

## Roadmap

- While Kotlin generators are fully supported, not all code transform commands support Kotlin. This project should fully support Kotlin.
- Support further Spring Boot starters, including realistic configuration

Community contributions welcome!


## As a Model

This pack is intended as an example of an Atomist extension pack targeted at a developer-facing technology.

To achieve comparable functionality for any other framework, the following is a rough guide:

- *Add support for the underlying language*. Java, Kotlin, TypeScript and JavaScript are already supported in Atomist modules; to integrate other languages, look to Atomist's ANTLR integration. 
- *Add support for the relevant configuration formats*. XML and properties files are supported in this repository. (Basic functionality can be achieved using regular expressions and microgrammars.)
- *Implement language-oriented primitives such as 'add import'* using language support.
- *Implement support for the relevant build system, such as Maven or Gradle*. If possible, this should extend beyond build to deployment.
- *Add useful code transforms and expose them as commands*. For example, `setSpringBootVersion` in this repository.
- *Add useful code inspections*, for example to flag common errors.

---

Created by [Atomist][atomist].
Need Help?  [Join our Slack workspace][slack].

[atomist]: https://atomist.com/ (Atomist - How Teams Deliver Software)
[slack]: https://join.atomist.com/ (Atomist Community Slack)

## Riff Support

```
brew tap starkandwayne/cf

brew install riff 
```