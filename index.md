﻿---
layout: default
---

<div id="index-banner" class="parallax-container">
  <div class="section no-pad-bot">
    <div class="container">
      <h1 class="header center orange-text "><b>{{ site.title | escape }}</b></h1>
      <div class="section">
        <div class="row center">
          <h5 class="header col s12 light" style="color:white"><b>Jedenásty ročník RBA sa uskutoční vo pondelok 6.6.2022 na Gymnáziu, Alejová 1 v Košiciach. Registrácia bude spustená začiatkom apríla.</b></h5>
        </div>
        <div class="row center">
          <a class="btn-large waves-effect waves-light orange disabled"
            href="{{ registration }}">
            Registrovať!
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="parallax"><img src="/img/parallax.jpg" style="filter: brightness(50%)" alt="parallax"></div>
</div>

<div class="container">
  <div class="section">

    <!--   Icon Section   -->
    <div class="row">
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center light-blue-text"><i class="fas fa-flag-checkered"></i>
          </h2>
          <h5 class="center">Racing</h5>
          <p class="light">
            V tejto kategórií je potrebné skonštruovať čo najrýchlejšie a najobratnejšie auto,
    ktoré bude schopné zdolávať rôzne prekážky na trati. Celá kategória má formu pretekov a vyhráva družstvo,
    ktoré prejde trať za najkratší čas a splní pri tom všetky podmienky. Okrem samotných pretekov,
    bude prebiehať hodnotenie najlepšieho technického prevedenia modelov, za ktoré je možné získať špeciálnu cenu.
          </p>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center light-blue-text"><i class="fas fa-rocket"></i>
          </h2>
          <h5 class="center">Vlastný model</h5>
          <p class="light">
            Úlohou je postaviť čo najzaujímavejší model s ľubovoľnou tématikou, ktorý musí zaujať porotu.
    Hodnotí sa vzhľad, konštrukcia, kreativita, funkčnosť, ale aj program a vlastná práca.
    Je vhodné vopred si pripraviť prezentáciu, v ktorej svoj model predstavíte a popíšete.
    K dispozícii sú pravidlá aj vzorová prezentácia.
          </p>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center light-blue-text"><i class="fas fa-cogs"></i>
          </h2>
          <h5 class="center">Robotická výzva</h5>
          <p class="light">
            Robotickú výzvu hrajú súčasne dva roboty proti sebe.
    Roboty štartujú v rôznych koncoch ihriska.
    Obe ihriská sú zakončené spoločnou časťou - kde sa roboty stretávajú.
    Cieľom je získať najvyššie skóre.
    V prípade rovnosti bodov rozhoduje čas. Pozrite si Pravidlá.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>
<div class="container">
  <div class="section">
    <div class="row center">
      <h4><b>Organizátori</b></h4>
    </div>
    <div class="row center">
      {% for org in site.data.org_logo %}
      <div class="col s8 offset-s2 m4">
        <a href="{{org.url}}">
          <img class="responsive-img" src="{{ org.logo | relative_url }}" alt="{{ org.name }}">
        </a>
      </div>
      {% endfor %}
    </div>
  </div>

  <div>
    <div class="section">
      <div class="row center">
        <h4><b>Partneri</b></h4>
      </div>
      {% assign PER_LINE = 6 %}
      {% assign N = site.data.partner_logo | size | divided_by: PER_LINE | ceil %}
      {% for I in (i..N)%}
      {% assign OFFSET = I | times: PER_LINE%}
      <div class="row center">
        {% for org in site.data.partner_logo offset: OFFSET limit: PER_LINE %}
        <div class="col s6 offset-s3 m2">
          <a href="{{org.url}}"><img class="responsive-img" src="{{ org.logo | relative_url }}" alt="{{ org.name }}"
              style="vertical-align: middle;"></a>
        </div>
        {% endfor %}
      </div>
      {% endfor %}
    </div>

    <div class="card-panel grey lighten-5 z-depth-1">
      <div class="row center">
        <a><img class="responsive-img" src="/img/eu/akademia.png" style="margin-right:30px" alt="IT akadémia"></a>
        <a><img class="responsive-img" src="/img/eu/esf.png" style="margin-right:30px" alt="EFRR"></a>
        <a><img class="responsive-img" src="/img/eu/oplz.png" style="margin-right:30px" alt="OPLZ"></a>
        <p>
          Tento projekt sa organizuje vďaka podpore z Európskeho sociálneho fondu a Európskeho fondu regionálneho
          rozvoja v rámci Operačného programu Ľudské zdroje.
        </p>
      </div>
    </div>
  </div>
</div>