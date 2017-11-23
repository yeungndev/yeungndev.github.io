---
layout: post
title: "Some helpful commands"
description: ""
category: articles
tags: [commands, software, git, version control]
comments: true
---

# 2017-11-23

* # where to find your 

`git config --global` `~/.gitconfig` 

or in the command line `git config --list` 

settings on a mac (here is my setting from my iMac) 

```
~/.gitconfig

[core]
  whitespace=fix,-indent-with-non-tab,trailing-space,cr-at-eol
        excludesfile = ~/.gitignore_global
[alias]
  st = status
  ci = commit
  br = branch
  co = checkout
  df = diff
  lg = log -p
  who = shortlog -s --
  up = pull
  pr = pull --rebase
  pu = !"git fetch origin -v; git fetch upstream -v; git merge upstream/master"
  switch = !legit switch \"$@\"
  branches = !legit branches
  sprout = !legit sprout \"$@\"
  unpublish = !legit unpublish \"$@\"
  harvest = !legit harvest \"$@\"
  sync = !legit sync \"$@\"
  publish = !legit publish \"$@\"
  graft = !legit graft \"$@\"
[github]
  user = yeungn
  token = <API token> # https://github.com/settings/applications
  email = nin.yeung@gmail.com
[github "user"]
  user = yeungn
  token = <API token>
  email = nin.yeung@gmail.com
[user]
  name = yeungn
        email = nin.yeung@gmail.com
[color]
  ui = true
  diff = auto
  status = auto
  branch = auto
[format]
  pretty = %C(yellow)%h%Creset %s %C(red)(%an, %cr)%Creset
[diff "ruby"]
  funcname = ^ *\\(\\(class\\|module\\|def\\) .*\\)
[push]
  default = current
[difftool "sourcetree"]
  cmd = opendiff \"$LOCAL\" \"$REMOTE\"
  path =
[mergetool "sourcetree"]
  cmd = /Applications/SourceTree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\$
  trustExitCode = true
[merge]
  tool = opendiff

```

# links to other helpful resources
* [Git Book](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases)

<hr>


