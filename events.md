---
layout: default
title: Events
description: "Upcoming events and past highlights from Aistear."
---

<section class="hero" style="padding:60px 0;">
  <div class="hero-inner">
    <p class="eyebrow" style="color:var(--color-white);opacity:0.8;">Aistear Events</p>
    <h1 style="color:var(--color-white);">Gather, Learn, Grow</h1>
    <p class="hero-tagline">Workshops and experiences that nurture character, confidence, and community.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Coming Up</p>
      <h2>Upcoming Events</h2>
    </div>
    <div class="card-grid">
      {% for event in site.data.events.upcoming %}
      <a class="card reveal" href="{{ '/events/' | append: event.slug | append: '/' | relative_url }}">
        <span class="card-media">
          {% if event.image %}<img src="{{ event.image | relative_url }}" alt="{{ event.title }} poster" loading="lazy">{% else %}<span class="event-placeholder" aria-hidden="true"><i class="fa-solid fa-calendar-days"></i></span>{% endif %}
        </span>
        <span class="card-body">
          <span class="card-label">{{ event.tagline | default: "Upcoming" }}</span>
          <span class="card-title">{{ event.title }}</span>
          <span class="card-meta">
            <span><i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ event.date }}</span>
            {% if event.time %}<span><i class="fa-regular fa-clock" aria-hidden="true"></i> {{ event.time }}</span>{% endif %}
          </span>
          {% if event.fee %}<span class="card-price">{{ event.fee }}</span>{% endif %}
          <span class="card-action card-more">View event <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
        </span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-light">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">From Our Community</p>
      <h2>Past Event Highlights</h2>
    </div>
    <div class="card-grid">
      {% for event in site.data.events.past %}
      <article class="card reveal">
        {% if event.image %}
        <a class="card-media" href="{{ event.image | relative_url }}" target="_blank" rel="noopener" aria-label="View the full {{ event.title }} poster">
          <img src="{{ event.image | relative_url }}" alt="{{ event.title }} poster" loading="lazy">
        </a>
        {% else %}
        <span class="card-media"><span class="event-placeholder" aria-hidden="true"><i class="fa-solid fa-calendar-days"></i></span></span>
        {% endif %}
        <div class="card-body">
          <p class="card-label">{{ event.date }}</p>
          <h3 class="card-title">{{ event.title }}</h3>
          <p class="card-desc">{{ event.summary }}</p>
        </div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
