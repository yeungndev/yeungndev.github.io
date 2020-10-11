---
layout: post
title: quick tips
---

### Quick Tip
* Managing multiple git accounts with ssh
  * `ssh-add -l` listing keys stored in ssh-agent
  * `eval "$(ssh-agent -s)"` running the ssh agent
    * `ssh-add ~/.ssh/name_of_keys` adding key to agent  
  * `ssh-add -D` removes all ssh entries from the ssh-agent