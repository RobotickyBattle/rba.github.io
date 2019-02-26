---
layout: rules
title: Pravidlá
permalink: rules/
common_directives: false
schedule: false
racing: false
roboticka_vyzva: false
vlastny_model: false
---

{% assign post = site.posts | where: "categories", "rules" | first %}
{{ post.content }}
