---
layout: default
title: Programs
description: "Explore Aistear's four program streams: Quran (Tarteel and Tasdeed), e-Maktab, Tahqeeq, and Bayaan."
---

<section class="hero hero-page">
  <div class="hero-inner">
    <p class="eyebrow">Aistear</p>
    <h1>Our <span class="hl">Programs</span></h1>
    <p class="hero-tagline">Four streams, one journey: nurturing Quran, character, expression, and inquiry.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="programs-landing-grid">
      {% for program in site.data.programs %}
      <a class="stream-card reveal" href="{{ '/programs/' | append: program.slug | append: '/' | relative_url }}" style="--card-accent: {{ program.accent }}; transition-delay: {{ forloop.index0 | times: 90 }}ms;">
        <span class="stream-icon-wrap"><i class="fa-solid {{ program.icon }} stream-icon" aria-hidden="true"></i></span>
        <h3>{{ program.name }}</h3>
        <p>{{ program.summary }}</p>
        <p class="offering-meta"><strong>Focus:</strong> {{ program.focus }}</p>
        <span class="stream-link">View program <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span>
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Target of the home hero's "Register" button. Lists every stream's ongoing_programs. -->
<section class="bg-light" id="ongoing">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Register</p>
      <h2>Ongoing <span class="hl">Programs</span></h2>
      <p>Programs currently running and open for enrolment. Tap a card to register on WhatsApp.</p>
    </div>
    <div class="card-grid">
      {% assign n = 0 %}
      {% for program in site.data.programs %}
      {% for p in program.ongoing_programs %}
      {% assign delay = n | modulo: 4 | times: 90 %}
      {% include offering-card.html item=p label=program.name delay=delay %}
      {% assign n = n | plus: 1 %}
      {% endfor %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-dark cta-band">
  <div class="container">
    <h2>Not Sure Which Stream Is Right for Your Child?</h2>
    <p>Message us on WhatsApp and we'll help you find the best fit.</p>
    {% include cta-whatsapp.html text="Ask Us on WhatsApp" class="btn-lg" %}
  </div>
</section>
