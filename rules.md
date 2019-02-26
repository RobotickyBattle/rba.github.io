---
layout: rules
title: Pravidlá
permalink: rules/
---

{% assign post = site.posts | where: "categories", "rules" | first %}
{{ post.content }}
