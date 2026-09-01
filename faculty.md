---
layout: default
title: Faculty
description: "Meet the educators behind Aistear's programs."
---

<section class="hero" style="padding:60px 0;">
  <div class="hero-inner">
    <p class="eyebrow" style="color:var(--color-white);opacity:0.8;">Educators</p>
    <h1 style="color:var(--color-white);">Meet Our Team</h1>
  </div>
</section>

<section>
  <div class="container">
    <!-- CLIENT TODO (brief §8): confirm whether additional staff should be listed
         and whether these bios/credentials are still current. -->
    <div class="faculty-grid">
      {% for member in site.data.faculty %}
      <div class="faculty-card reveal" style="transition-delay: {{ forloop.index0 | times: 90 }}ms;">
        <div class="faculty-avatar">{{ member.name | slice: 0 }}{{ member.name | split: ' ' | last | slice: 0 }}</div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.credentials }}</p>
        {% if member.linkedin %}
        <a class="linkedin" href="{{ member.linkedin }}" target="_blank" rel="noopener" aria-label="{{ member.name }} on LinkedIn">
          <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
        </a>
        {% endif %}
      </div>
      {% endfor %}
    </div>
  </div>
</section>
