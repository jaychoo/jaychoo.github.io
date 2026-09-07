---
permalink: /
author_profile: false
---

<div class="hero" markdown="0">
  <h1>Hello, my name is Jay Choo.<br>Welcome to my site.</h1>
  <p>See <a href="/projects/">Projects</a> for what I've been building, or
  <a href="/about/">About</a> for more background.</p>
</div>

{% if site.posts.size > 0 %}
<div class="post-list">
  {% for post in site.posts %}
    <article class="post-list__item">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-list__date">{{ post.date | date: "%B %-d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </article>
  {% endfor %}
</div>
{% endif %}
