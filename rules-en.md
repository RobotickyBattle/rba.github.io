---
layout: rules
title: Rules
lang: en
permalink: rules/
common_directives: true
schedule: true
racing: true
roboticka_vyzva: true
vlastny_model: true
---

{% assign post = site.posts | where: "categories", "rules" | first %}
{{ post.content }}
