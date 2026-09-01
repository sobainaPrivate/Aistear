---
layout: default
title: Contact
description: "Get in touch with Aistear — phone, email, WhatsApp, and our location in DHA Phase 1, Lahore."
---

<section class="hero" style="padding:60px 0;">
  <div class="hero-inner">
    <p class="eyebrow" style="color:var(--color-white);opacity:0.8;">Contact</p>
    <h1 style="color:var(--color-white);">Get in Touch</h1>
    <p class="hero-tagline">The fastest way to reach us is WhatsApp — message us any time.</p>
    {% include cta-whatsapp.html text="Message Us on WhatsApp" class="btn-lg" %}
  </div>
</section>

<section>
  <div class="container contact-grid">
    <div class="contact-card reveal" style="transition-delay: 0ms;">
      <div class="contact-row">
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
        <div>
          <h4>Our Location</h4>
          <p>{{ site.address }}</p>
        </div>
      </div>
      <div class="contact-row">
        <i class="fa-solid fa-phone" aria-hidden="true"></i>
        <div>
          <h4>Call or WhatsApp</h4>
          <p><a href="tel:{{ site.phone_display | replace: ' ', '' }}">{{ site.phone_display }}</a></p>
        </div>
      </div>
      <div class="contact-row">
        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
        <div>
          <h4>Email Us</h4>
          <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
        </div>
      </div>
      <div class="contact-row">
        <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
        <div>
          <h4>LinkedIn</h4>
          <p><a href="{{ site.linkedin }}" target="_blank" rel="noopener">linkedin.com/company/aistear</a></p>
        </div>
      </div>
    </div>

    <iframe
      class="map-frame reveal"
      style="transition-delay: 90ms;"
      title="Aistear location map"
      src="https://www.google.com/maps?q={{ site.address | url_encode }}&output=embed"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</section>
