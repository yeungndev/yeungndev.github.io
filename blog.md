---
layout: page
---

<ul class="posts">
  {% for post in site.posts %}
    {% if post.layout != "none" %}
    <li>{% if post.category == "speaking" %}<i class="fa fa-microphone"></i> {% endif %}<span>{{ post.date | date: "%B %d, %Y" }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>