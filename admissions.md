---
layout: default
title: Admissions
description: "How to enroll at Aistear — message us on WhatsApp to get started."
---

<section class="hero" style="padding:60px 0;">
  <div class="hero-inner">
    <p class="eyebrow" style="color:var(--color-white);opacity:0.8;">Admissions</p>
    <h1 style="color:var(--color-white);">Enrolling Is Simple</h1>
    <p class="hero-tagline">We keep admissions personal — everything happens over a WhatsApp conversation with our team.</p>
    {% include cta-whatsapp.html text="Enroll on WhatsApp" class="btn-lg" %}
  </div>
</section>

<section>
  <div class="container" style="max-width:760px;">
    <div class="section-heading align-left">
      <p class="eyebrow">How It Works</p>
      <h2>Our Admissions Process</h2>
    </div>
    <div class="admissions-steps">
      <div class="admissions-step">
        <div class="admissions-step-number">1</div>
        <div>
          <h4>Message Us on WhatsApp</h4>
          <p>Tap "Enroll on WhatsApp" anywhere on this site, or message us directly at {{ site.phone_display }}. Tell us which program stream interests you.</p>
        </div>
      </div>
      <div class="admissions-step">
        <div class="admissions-step-number">2</div>
        <div>
          <h4>Share a Few Details</h4>
          <p>For first-time students, we'll ask for some preliminary information about the student and parent/guardian so we can place your child in the right cohort.</p>
        </div>
      </div>
      <div class="admissions-step">
        <div class="admissions-step-number">3</div>
        <div>
          <h4>Confirm Your Spot</h4>
          <p>We'll share fee and schedule details for your chosen program, and once payment is made, simply send us the screenshot on WhatsApp to confirm your child's spot.</p>
        </div>
      </div>
    </div>
    <!-- CLIENT TODO (brief §7): a Google Form + Sheet may replace step 2's manual info
         collection later; WhatsApp will remain for fee-screenshot confirmation either way. -->
    <p style="margin-top:30px;color:var(--color-grey-mid);font-size:0.92rem;">An online enrollment form is in the works to make step 2 even faster — for now, WhatsApp is the fastest way to reach us.</p>
  </div>
</section>

<section class="bg-light">
  <div class="container" style="max-width:820px;">
    <div class="section-heading align-left">
      <p class="eyebrow">Fees</p>
      <h2>Program Fees</h2>
    </div>
    <table class="fee-table">
      <thead>
        <tr><th>Stream</th><th>Program</th><th>Fee</th><th></th></tr>
      </thead>
      <tbody>
        {% for program in site.data.programs %}
          {% for p in program.ongoing_programs %}
          <tr>
            <td>{{ program.name }}</td>
            <td>{{ p.name }}</td>
            <td>{% if p.fee %}{{ p.fee }}{% else %}Contact us{% endif %}</td>
            <td class="fee-cta">{% include cta-whatsapp.html text="Enroll" message=p.name %}</td>
          </tr>
          {% endfor %}
        {% endfor %}
      </tbody>
    </table>
    <!-- CLIENT TODO (brief §6/§10): fill in _data/programs.yml `fee` fields once confirmed. -->
  </div>
</section>
