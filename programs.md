---
layout: default
title: Programs
description: "Explore Aistear's five program streams: Tarteel, Tasdeed, Bayaan, Tahqeeq, and e-Maktab."
---

<section class="hero" style="padding:60px 0;">
  <div class="hero-inner">
    <p class="eyebrow" style="color:var(--color-white);opacity:0.8;">Aistear</p>
    <h1 style="color:var(--color-white);">Our Programs</h1>
    <p class="hero-tagline">Five streams, one journey — nurturing Quran, character, expression, and inquiry.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="programs-landing-grid">
      {% for program in site.data.programs %}
      <div class="stream-card reveal" style="--card-accent: {{ program.accent }}; transition-delay: {{ forloop.index0 | times: 90 }}ms;">
        <div class="stream-icon-wrap">
          <i class="fa-solid {{ program.icon }} stream-icon" aria-hidden="true"></i>
        </div>
        <h3>{{ program.name }}</h3>
        <p>{{ program.summary }}</p>
        <p class="offering-meta"><strong>Focus:</strong> {{ program.focus }}</p>
        <a class="stream-link" href="{{ '/programs/' | append: program.slug | append: '/' | relative_url }}">View program <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<section class="bg-navy" style="text-align:center;">
  <div class="container">
    <h2>Not Sure Which Stream Is Right for Your Child?</h2>
    <p style="max-width:520px;margin:0 auto 26px;opacity:0.9;">Message us on WhatsApp and we'll help you find the best fit.</p>
    {% include cta-whatsapp.html text="Ask Us on WhatsApp" class="btn-lg" %}
  </div>
</section>
