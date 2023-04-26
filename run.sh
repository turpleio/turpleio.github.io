#!/bin/bash

docker run --rm -p 80:80 --name nginx -v $(pwd):/usr/share/nginx/html:ro nginx
