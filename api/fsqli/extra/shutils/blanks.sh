#!/bin/bash

# Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
# See the file 'LICENSE' for copying permission

# Removes trailing spaces from blank lines inside project files
find . -type f -iname '*.py' -exec sed -i 's/^[ \t]*$//' {} \;
