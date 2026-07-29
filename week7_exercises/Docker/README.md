# Docker Lab

## Overview

This lab demonstrates Docker fundamentals using an Ubuntu container. It covers:

- verifying Docker installation
- pulling an image from Docker Hub
- running an interactive container
- inspecting container OS details
- stopping and removing containers
- removing images
- validating images in Docker Desktop

## Prerequisites

- Docker Desktop installed and running
- PowerShell or Command Prompt
- Internet access

## Commands

```bash
docker version
docker pull ubuntu
docker images
docker run -it --name ubuntu-practice ubuntu
pwd
ls
cat /etc/os-release
echo "Hello Docker"
exit
docker ps -a
docker stop ubuntu-practice
docker rm ubuntu-practice
docker rmi ubuntu
```

## Results

The lab includes screenshots for:

1. Docker installation and Ubuntu image pull
2. available Docker images
3. running an Ubuntu container
4. container status with `docker ps -a`
5. stopping and removing the container
6. removing the Ubuntu image
7. confirming images in Docker Desktop

## Outcome

Completed the Docker lab and confirmed the core container workflow: image pull, container creation, in-container commands, cleanup, and GUI verification.