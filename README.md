<p align="center">
  <img height="128" width="128" src="/docs/logo.svg">
</p>

Unity Catalog Explorer
==============================

Unity Catalog Explorer is a [TypeScript](https://www.typescriptlang.org/) + [Next.js](https://nextjs.org/) + 
[Chakra UI](https://v2.chakra-ui.com/) based Web UI for the [Unity Catalog OSS](https://www.unitycatalog.io/).

Starting Unity Catalog Explorer Server
==============================

As of 2024/06/25, the code implemented in this repository is still a mockup. Additionally, for convenience,
the [Just](https://github.com/casey/just) command runner is being used, but the following steps can also be 
executed using [npm](https://www.npmjs.com/) commands. For more details, please check the contents of the 
[Justfile](/Justfile).

 - Installs the depedendencies and in the [package.json](/package.json) and builds Unity Catalog Explorer:

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

Atomic Design
==============================

We have adopted the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/) for structuring UI components, 
but some modifications are required. The following list explains the guide-line how to structure of your 
components' hierarchy:

 - Atoms

	According to the original Atomic Design methodology, ***atoms*** can be interpreted as components provided by
	Chakra UI. However, here we define the ***atom*** layer as a layer for re-exporting Chakra UI (for backward
	compatibility) and ensuring compatibility with the Next.js system.

 - Molecules

	***Molecules*** are the definition layer of ***atoms*** (according to the original Atomic Design methodology)
	specific to the Unity Catalog Explorer. The difference from the ***organisim*** layer is that the components
	defined here are versatile and relocatable components.

 - Organisms

	***Organisms*** can be regarded as identical to ***organisms*** in the original Atomic Design methodology.
	In other words, they are components that define page layouts, such as a navigation bar, and are not
	relocatable within the page.
