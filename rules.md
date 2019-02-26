---
layout: rules
title: Pravidlá
permalink: rules/
common_directives: false
schedule: false
racing: true
roboticka_vyzva: false
vlastny_model: true
---

{% assign post = site.posts | where: "categories", "rules" | first %}
{{ post.content }}
