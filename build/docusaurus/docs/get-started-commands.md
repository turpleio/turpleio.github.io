---
id: get-started-commands
title: Commands
---

Turple's commands are very simple but very powerful. There are many commands and options to control a variety of operations. This page explains four commands of them.

## Turple Shell

Bascially Turple proivdes four types of shell. You can select Turple environment by simply using a different shell. The example is to enter the shell for dev environment.

```bash
$ ./tp.dev
```

## ls

`ls` is used to list all instances of the current environment. The example will list all instances in dev environment.

```bash
tp.dev > ls
```

## create-world

`create-world` is used to create Turple environment as configurations. This will create all cluster instances and initialize them to be ready to start microservices.

```bash
tp.dev > create-world
```

The following example show how Turple environment is deployed with only three commands.

<script id="asciicast-fx5YPUOAIAs7NrvmkVqoUVTw9" src="https://asciinema.org/a/fx5YPUOAIAs7NrvmkVqoUVTw9.js" async></script>

## ssh

`ssh` is used to connect ssh to a node. A node name is used instead of ip address.

```bash
tp.dev > ssh dev-ci1
```

## make

`make` is usually used to build and deploy microservices. The example is to build applications and deploy them to all nodes of `dev-gw` cluster. 

```bash
dev-ci1 $ make RUN_TARGET_CLUSTER=dev-gw apps
```

The following example shows how the microservice `app` and `rproxy` are built and deployed to `dev-gw` cluster.
<script id="asciicast-Y35dKkAB3TRLBvw72QMFSR6Pw" src="https://asciinema.org/a/Y35dKkAB3TRLBvw72QMFSR6Pw.js" async></script>