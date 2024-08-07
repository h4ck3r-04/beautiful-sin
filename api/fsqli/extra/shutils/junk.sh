#!/bin/bash

# Copyright (c) 2006-2024 fsqli developers (https://fsqli.org/)
# See the file 'LICENSE' for copying permission

find . -type d -name "__pycache__" -exec rm -rf {} \; &>/dev/null
find . -name "*.pyc" -exec rm -f {} \; &>/dev/null
