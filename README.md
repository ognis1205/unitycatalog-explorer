<p align="center">
  <img height="128" width="128" src="/docs/logo.svg">
</p>

Unity Catalog Explorer
==============================

Unity Catalog Explorer is a [TypeScript](https://www.typescriptlang.org/) + [Next.js](https://nextjs.org/) + [Chakra UI](https://v2.chakra-ui.com/) based Web UI for the [Unity Catalog OSS](https://www.unitycatalog.io/).

Starting Unity Catalog Explorer Server
==============================

As of 2024/06/25, the code implemented in this repository is still a mockup. Additionally, for convenience, the [Just](https://github.com/casey/just) command runner is being used, but the following steps can also be executed using [npm](https://www.npmjs.com/) commands. For more details, please check the contents of the [Justfile](/Justfile).

 - Installs the depedendencies and in the `package.json` and builds Unity Catalog Explorer:

```bash
 $ just install && just build
```

 - Starts the Unity Catalog Explorer server:

```bash
 $ just start
```

 - To start the Unity Catalog server mock, please execute the following command:

```bash
 $ just mock
```
