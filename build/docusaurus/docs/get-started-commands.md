---
id: get-started-commands
title: Commands
---

Turple's commands are very simple but very powerful. There are so many commands and options to control sophisticated operations. On this page let's take a look at some of them.

## Turple Shell

Basically Turple provides four shell types as development environment, Dev, Test, Staging and Product. You can select the environment by simply using a different shell. The example is to run the shell for dev environment.


```bash
$ ./tp.dev
```

## ls

`ls` is used to see the information of all instances in the current environment.

```bash
tp.dev > ls
```

## create-world

`create-world` is used to create a whole environment of Turple with configurations. This will create all cluster instances and initialize them to be ready to start microservices.

```bash
tp.dev > create-world
```

## ssh

`ssh` is used to connect ssh to a node in Turple environment.

```bash
tp.dev > ssh dev-ci1
```

## make

`make` is usually used to build and deploy microservices on CI machine. The example is for building service applications and deploying them to `dev-gw` cluster.

```bash
dev-ci1 $ make RUN_TARGET_CLUSTER=dev-gw apps
```

## Example 1

The following example shows how Turple environment is deployed with only three commands.

<script id="asciicast-fx5YPUOAIAs7NrvmkVqoUVTw9" src="https://asciinema.org/a/fx5YPUOAIAs7NrvmkVqoUVTw9.js" async></script>

## Example 2

The following example shows how the microservices `app` and `rproxy` are built and deployed to `dev-gw` cluster.
<script id="asciicast-Y35dKkAB3TRLBvw72QMFSR6Pw" src="https://asciinema.org/a/Y35dKkAB3TRLBvw72QMFSR6Pw.js" async></script>