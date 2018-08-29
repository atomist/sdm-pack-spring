# @atomist/sdm-pack-spring

[![atomist sdm goals](http://badge.atomist.com/T29E48P34/atomist/sdm-pack-spring/e514504a-2927-468c-8f8a-93568636b896)](https://app.atomist.com/workspace/T29E48P34)
[![npm version](https://img.shields.io/npm/v/@atomist/sdm-pack-spring/next.svg)](https://www.npmjs.com/package/@atomist/sdm-pack-spring/v/next)

[Atomist][atomist] software delivery machine (SDM) extension pack
providing automated creation, building, and delivery of
[Spring][spring] and [Spring Boot][spring-boot] applications.

Also includes Maven and Java support.

[spring]: https://spring.io/ (Spring)
[spring-boot]: http://spring.io/projects/spring-boot (Spring Boot)

See the [Atomist documentation][atomist-doc] for more information on
what SDMs are and what they can do for you using the Atomist API for
software.

[atomist-doc]: https://docs.atomist.com/ (Atomist Documentation)

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

---

Created by [Atomist][atomist].
Need Help?  [Join our Slack workspace][slack].

[atomist]: https://atomist.com/ (Atomist - How Teams Deliver Software)
[slack]: https://join.atomist.com/ (Atomist Community Slack)
