---
layout: default
title: About
description: "Learn about Aistear's mission, values, and approach to Islamic education for children in Lahore."
---

<section class="hero hero-page">
  <div class="hero-inner">
    <p class="eyebrow" style="color:var(--color-white);opacity:0.8;">About Us</p>
    <h1 style="color:var(--color-white);">Our Story</h1>
  </div>
</section>

<div class="container" style="padding:60px 20px;max-width:760px;">
  <h2>Aistear — A Journey of Lifelong Learning</h2>

  <p>Aistear is the Gaelic word for "journey," and it profoundly reflects our core value of lifelong learning. We are rooted in an Islamic worldview and committed to nurturing each child's unique fitrah in a space filled with creativity, curiosity, and companionship.</p>

  <p>We aim to support every learner's individual growth by helping them strengthen their bond with Allah (SWT) and flourish as future leaders who love and live the Quran with excellence (Ihsan).</p>

  <!-- CLIENT TODO (brief §10/§8): replace this paragraph with the client's final
       mission/vision copy ("Our Aistear Story") once supplied. -->
  <p>Our approach brings together certified educators, child-led pedagogy, and a curriculum that spans Quran, character, expression, and inquiry — six streams, one journey, built around the children of Lahore.</p>

  <!-- CLIENT TODO (brief §8): confirm accreditation/affiliations to feature here, if any. -->
</div>

<section class="bg-light">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Educators</p>
      <h2>Meet Our Team</h2>
    </div>
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

<section class="bg-light">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Why Choose Us?</p>
      <h2>What Sets Aistear Apart</h2>
    </div>
    <div class="feature-list" style="max-width:760px;margin:0 auto;">
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></div>
        <div>
          <h4>Certified Educators</h4>
          <p>Our team combines formal pedagogical training with Islamic scholarship, so every session is both rigorous and rooted.</p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-certificate" aria-hidden="true"></i></div>
        <div>
          <h4>Child-Led Education</h4>
          <p>We design around each child's pace and curiosity rather than a one-size-fits-all curriculum.</p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon"><i class="fa-solid fa-book-open-reader" aria-hidden="true"></i></div>
        <div>
          <h4>21st Century Skills</h4>
          <p>From robotics to public speaking, our programs build the practical skills today's learners need alongside their deen.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section style="text-align:center;">
  <div class="container">
    <h2>Want to Learn More About Our Programs?</h2>
    <p style="max-width:520px;margin:0 auto 26px;color:var(--color-grey-mid);">Explore our six streams or reach out on WhatsApp with any questions.</p>
    {% include cta-whatsapp.html text="Chat with Us on WhatsApp" class="btn-lg" %}
  </div>
</section>
