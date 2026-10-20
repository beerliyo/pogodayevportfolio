(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+`;function t(t){if(t.dataset.decrypting===`true`)return;t.dataset.decrypting=`true`;let n=t.getAttribute(`data-text`)||t.textContent.trim(),r=n.length,i=0,a=0,o=setInterval(()=>{let s=``;for(let t=0;t<r;t++)t<i?s+=n[t]:n[t]===` `?s+=` `:s+=e[Math.floor(Math.random()*81)];t.textContent=s,a++,a%2==0&&i++,i>r&&(clearInterval(o),t.textContent=n,t.dataset.decrypting=`false`)},35)}function n(){document.querySelectorAll(`.section-heading-cipher, .cipher-title`).forEach(e=>{t(e),e.addEventListener(`mouseenter`,()=>t(e))})}var r={"/":`
    <section class="page-section mb-12">
      <span class="section-heading-cipher" data-text="привет,">привет,</span>
      <div class="space-y-8">
        <p class="text-body-p">Меня зовут Миша.</p>
        <p class="text-body-p">
          Делаю интерфейсы и продукты, которые понятны с первого экрана. 
          Учился на <span class="site-link">Computer Security в IITU</span>, поэтому знаю, из чего продукт собирается под капотом.
        </p>
        <p class="text-body-p">
          Люблю дизайн, музыку, еду, игры и всё, что сделано руками и имеет культурную ценность.
        </p>
      </div>
    </section>

    <section class="page-section mb-12">
      <span class="section-heading-cipher" data-text="recently">recently</span>
      <div class="space-y-4">
        <div>
          <p class="text-body-p">
            <a href="/cases/uiren-go" class="font-medium site-link">Uiren Go</a>
          </p>
          <p class="text-subtle-p">Платформа для поиска репетиторов и учебных центров</p>
          <p class="text-subtle-p" style="opacity: 0.8;">Роль: Middle Product Designer / Brand Designer</p>
        </div>

        <div>
          <p class="text-body-p">
            <a href="/cases/spichka" class="font-medium site-link">Спичка</a>
          </p>
          <p class="text-subtle-p">Билетный агрегатор камерных событий</p>
          <p class="text-subtle-p" style="opacity: 0.8;">Роль: Junior Product Designer</p>
        </div>

        <div>
          <p class="text-body-p">
            <a href="/cases/leadership-academy" class="font-medium site-link">Академия Лидерства</a>
          </p>
          <p class="text-subtle-p">Лендинг для лагеря лидерских качеств</p>
          <p class="text-subtle-p" style="opacity: 0.8;">Роль: UX/UI Design, фриланс</p>
        </div>

        <div>
          <p class="text-body-p">
            <a href="/cases/good-restaurants" class="font-medium site-link">Good Restaurants</a>
          </p>
          <p class="text-subtle-p">Единый сайт для четырёх ресторанов</p>
          <p class="text-subtle-p" style="opacity: 0.8;">Роль: UX/UI Design, фриланс</p>
        </div>
      </div>
    </section>
  `,"/cases":`
    <section class="page-section mb-12 page--cases">
      <span class="section-heading-cipher" data-text="Кейсы">Кейсы</span>
      <div class="cases-feed">
        <a href="/cases/uiren-go" class="case-card">
          <div class="case-card-banner">
            <img src="/uiren-go/banner.png" alt="Uiren Go" loading="lazy" />
          </div>
          <div class="case-card-info">
            <h3 class="case-card-title">Uiren Go</h3>
            <p class="case-card-desc">Платформа для поиска репетиторов и учебных центров</p>
            <p class="case-card-role">Роль: Middle Product Designer / Brand Designer</p>
          </div>
        </a>

        <a href="/cases/spichka" class="case-card">
          <div class="case-card-banner">
            <img src="/spichka/banner.png" alt="Спичка" loading="lazy" />
          </div>
          <div class="case-card-info">
            <h3 class="case-card-title">Спичка</h3>
            <p class="case-card-desc">Билетный агрегатор камерных событий</p>
            <p class="case-card-role">Роль: Junior Product Designer</p>
          </div>
        </a>

        <a href="/cases/leadership-academy" class="case-card">
          <div class="case-card-banner">
            <img src="/leadership-academy/banner.png" alt="Академия Лидерства" loading="lazy" />
          </div>
          <div class="case-card-info">
            <h3 class="case-card-title">Академия Лидерства</h3>
            <p class="case-card-desc">Лендинг для лагеря лидерских качеств</p>
            <p class="case-card-role">Роль: UX/UI Design, фриланс</p>
          </div>
        </a>

        <a href="/cases/good-restaurants" class="case-card">
          <div class="case-card-banner">
            <img src="/good-restaurants/banner.png" alt="Good Restaurants" loading="lazy" />
          </div>
          <div class="case-card-info">
            <h3 class="case-card-title">Good Restaurants</h3>
            <p class="case-card-desc">Единый сайт для четырёх ресторанов</p>
            <p class="case-card-role">Роль: UX/UI Design, фриланс</p>
          </div>
        </a>
      </div>
    </section>
  `,"/cases/uiren-go":`
    <article class="page--case">
      <h1 class="title cipher-title" data-text="Uiren Go">Uiren Go</h1>
      <p class="case-date">Платформа для поиска репетиторов и учебных центров</p>

      <div class="case-flow">
        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/uiren-go/banner.png" alt="Uiren Go" />
          </div>
        </div>

        <dl class="case-facts">
          <div class="case-fact">
            <dt>Аудитория</dt>
            <dd><p class="body">Школьники и студенты, зумеры, которые ищут репетиторов и учебные центры.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Задача</dt>
            <dd><p class="body">Занять нишу и упростить поиск репетиторов и центров.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Роль</dt>
            <dd>
              <ul class="case-list">
                <li class="body">С нуля собрал дизайн продукта: от исследований до экранов.</li>
                <li class="body">После анализа метрик упростил пользовательский путь и перестроил онбординг.</li>
                <li class="body">Спустя 4 месяца взял на себя бренд: полностью пересобрал брендбук и бренд-систему.</li>
                <li class="body">Работал с разработчиками и маркетинг-отделом.</li>
                <li class="body">Передал в разработку дизайн-токены, прототипы и макеты.</li>
              </ul>
            </dd>
          </div>
        </dl>

        <section class="case-story">
          <h2 class="case-heading">Контекст и старт</h2>
          <p class="body">Продукт мы делали с нуля. Аналитика показала низкую конверсию, и путь пользователя оказался неоптимальным, поэтому понадобился редизайн. Я начал с исследований: нужно было понять, где люди теряются, и убрать лишнее.</p>
          <p class="body">Бренд пришёл в работу позже: через 4 месяца я взял его на себя, чтобы продукт и коммуникация говорили одним языком.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/uiren-go/onboarding.png" alt="Uiren Go" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Концепция и дизайн</h2>
          <p class="body">Я перестроил онбординг: квиз из 6 шагов до регистрации, а сбор данных перенёс на после неё. Спроектировал профили репетитора и ученика, оплату, подписку, сессии, блок статистики и блок сертификата IELTS.</p>
          <p class="body">Параллельно собрал бренд-систему: палитра (
#21C3FF, 
#84D6FF, 
#FD5B2A), шрифты Syne/Unbounded и Manrope, тон бренда на «ты» с призывом «Го в Uiren Go». Для соцсетей сделал шаблоны постов, карусели, обложки Reels и Highlights.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/uiren-go/branding.jpg" alt="Uiren Go" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Результат</h2>
          <p class="body">Проанализировал пользовательские сценарии и упростил онбординг: конверсия выросла с 42% до 68%. Когда обновил фирменный стиль и визуальные коммуникации, охваты аудитории увеличились на 34%, а вовлечённость пользователей на 21%. Дизайн-токены, интерактивные прототипы и финальные макеты переданы в разработку.</p>
          <div class="case-app-links">
            <a href="https://apps.apple.com/ru/app/uiren-go/id6756267198" target="_blank" rel="noopener noreferrer" class="case-app-btn">
              <svg class="app-btn-icon" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.56.64-1.05 1.7-0.92 2.73 1 .08 2-.47 2.61-1.22z"/>
              </svg>
              <span>App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=kz.ugo.client&hl=ru&pli=1" target="_blank" rel="noopener noreferrer" class="case-app-btn">
              <svg class="app-btn-icon" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.307-.282-.501-.692-.501-1.157V2.971c0-.465.194-.875.5-1.157zm11.266 11.267l2.298 2.298-11.83 6.812 9.532-9.11zm0-2.162L5.343 1.809l11.83 6.812-2.298 2.298zm1.082 1.081l3.057-1.761c.884-.509.884-1.338 0-1.848l-3.057-1.761-2.476 2.476 2.476 2.476z"/>
              </svg>
              <span>Google Play</span>
            </a>
          </div>
        </section>
      </div>

      <nav class="case-end">
        <a href="/cases">← Все проекты</a>
        <a href="/cases/spichka" class="case-end-next">К Спичке →</a>
      </nav>
    </article>
  `,"/cases/spichka":`
    <article class="page--case">
      <h1 class="title cipher-title" data-text="Спичка">Спичка</h1>
      <p class="case-date">Билетный агрегатор камерных событий</p>

      <div class="case-flow">
        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/spichka/banner.png" alt="Спичка" />
          </div>
        </div>

        <dl class="case-facts">
          <div class="case-fact">
            <dt>Аудитория</dt>
            <dd><p class="body">Жители Алматы, которым интересны необычные форматы: камерные события для небольшого круга гостей, где важна атмосфера, а не масштаб.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Задача</dt>
            <dd><p class="body">Сделать камерные мероприятия заметными и собрать их в одном билетном агрегаторе. Главная проблема: чтобы события находили, а не только узнавали о них из чатов и сторис.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Роль</dt>
            <dd>
              <ul class="case-list">
                <li class="body">С нуля спроектировал продуктовую часть Spichka и вёл дизайн самостоятельно.</li>
                <li class="body">Продуктовые решения принимал вместе с основательницей.</li>
                <li class="body">Провёл ресёрч и анализ конкурентов, построил user flow и вайрфреймы.</li>
                <li class="body">Работал напрямую с разработчиками.</li>
                <li class="body">Передал в разработку макеты, вайрфреймы, прототипы и дизайн-систему.</li>
              </ul>
            </dd>
          </div>
        </dl>

        <section class="case-story">
          <h2 class="case-heading">Контекст и старт</h2>
          <p class="body">Идея пришла от организатора камерных мероприятий: она предложила сделать агрегатор именно для таких событий. Я начал с ресёрча и конкурентов, затем мы собрали user flow и перешли к вайрфреймам.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/spichka/mockup-street.jpg" alt="Спичка — афиши в городе" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Концепция и дизайн</h2>
          <p class="body">Я спроектировал единый сценарий, в котором организатор работает как дополнительный слой, а не отдельный продукт. Разделил «Афиши» и «Главную»: в первой человек ищет конкретное событие, на второй видит подборки и то, что стоит заметить.</p>
          <p class="body">Чтобы события находили, сделал вход необязательным: посмотреть афишу и освоиться можно без регистрации, не тратя время на вход. Основой поиска стали поиск и категории событий, а режим поиска по карте мы планировали добавить следующим шагом.</p>
          <p class="body">Кроме экранов, описал архитектуру MVP, тексты онбординга и редакторских подборок, а также стратегию пуш-уведомлений.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/spichka/mockup-hands.png" alt="Спичка — мобильный интерфейс" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Результат</h2>
          <p class="body">Проект не дошёл до релиза: команда решила сменить направление и перейти на аутсорс-разработку. Всё, что я спроектировал (макеты, вайрфреймы, прототипы и дизайн-система), передано в разработку.</p>
        </section>
      </div>

      <nav class="case-end">
        <a href="/cases">← Все проекты</a>
        <a href="/cases/leadership-academy" class="case-end-next">К Академии Лидерства →</a>
      </nav>
    </article>
  `,"/cases/leadership-academy":`
    <article class="page--case">
      <h1 class="title cipher-title" data-text="Академия Лидерства">Академия Лидерства</h1>
      <p class="case-date">Лендинг для лагеря лидерских качеств</p>

      <div class="case-flow">
        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/leadership-academy/banner.png" alt="Академия Лидерства" />
          </div>
        </div>

        <dl class="case-facts">
          <div class="case-fact">
            <dt>Аудитория</dt>
            <dd><p class="body">Родители, которые выбирают лагерь, где ребёнок или подросток развивает лидерские качества и другие навыки.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Задача</dt>
            <dd><p class="body">Заказчику нужен был лендинг, чтобы показать услуги лагеря и привлечь родителей к продукту.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Роль</dt>
            <dd>
              <ul class="case-list">
                <li class="body">С нуля спроектировал дизайн лендинга.</li>
                <li class="body">Провёл интервью с заказчиком, разобрал конкурентов и провёл ресёрч.</li>
                <li class="body">Передал утверждённый дизайн разработчику на вёрстку.</li>
              </ul>
            </dd>
          </div>
        </dl>

        <section class="case-story">
          <h2 class="case-heading">Контекст и старт</h2>
          <p class="body">Работа началась с интервью с заказчиком. Они сами прислали конкурентов, а дальше я погрузился в их разбор и исследование, чтобы понять, чем лагерь может выделиться.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/leadership-academy/qualities.png" alt="Академия Лидерства — программы и качества" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Концепция и дизайн</h2>
          <p class="body">Главный акцент я сделал на доверии: родителям важно увидеть, что происходит с ребёнком. Поэтому показал фото детей из лагеря и то, чем они там занимаются, а также отзывы родителей.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/leadership-academy/programs.jpg" alt="Академия Лидерства — ступени программ" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Результат</h2>
          <p class="body">Лендинг запущен. Версия, которую утвердил заказчик, отличается от показанной здесь: этот дизайн я сделал сам для портфолио, поэтому ссылки на живой сайт в кейсе нет.</p>
        </section>
      </div>

      <nav class="case-end">
        <a href="/cases">← Все проекты</a>
        <a href="/cases/good-restaurants" class="case-end-next">К Good Restaurants →</a>
      </nav>
    </article>
  `,"/cases/good-restaurants":`
    <article class="page--case">
      <h1 class="title cipher-title" data-text="Good Restaurants">Good Restaurants</h1>
      <p class="case-date">Единый сайт для четырёх ресторанов</p>

      <div class="case-flow">
        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/good-restaurants/banner.png" alt="Good Restaurants" />
          </div>
        </div>

        <dl class="case-facts">
          <div class="case-fact">
            <dt>Аудитория</dt>
            <dd><p class="body">Люди, которые хотят познакомиться с ресторанами группы и выбрать, куда пойти.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Задача</dt>
            <dd><p class="body">Заказчик хотел сделать хаб-сайт для всех четырёх своих ресторанов: одно место, где о группе и каждом заведении можно узнать всё нужное.</p></dd>
          </div>
          <div class="case-fact">
            <dt>Роль</dt>
            <dd>
              <ul class="case-list">
                <li class="body">Спроектировал структуру и дизайн сайта.</li>
                <li class="body">Подготовил презентацию с набросками того, как вижу сайт, и согласовал направление с заказчиком.</li>
                <li class="body">Работал с текстами, которые предоставил заказчик.</li>
              </ul>
            </dd>
          </div>
        </dl>

        <section class="case-story">
          <h2 class="case-heading">Контекст и старт</h2>
          <p class="body">Я начал не с макетов, а с презентации: собрал наброски того, каким вижу сайт, и показал заказчику. Ему понравилось направление, и он дал мне свободу в дизайне.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/good-restaurants/mockup-table.jpg" alt="Good Restaurants — сайт на ноутбуке" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Концепция и дизайн</h2>
          <p class="body">Сайт устроен как хаб. На главной собраны информация о ресторанах, команде, истории и кредо группы. У каждого ресторана есть отдельная страница с меню, адресом, контактами и фотографиями заведения. Так человек сначала понимает, что это за группа, а потом выбирает конкретное место.</p>
        </section>

        <div class="case-media case-media--single">
          <div class="case-shot">
            <img src="/good-restaurants/mockup-dark.jpg" alt="Good Restaurants — страница команды" />
          </div>
        </div>

        <section class="case-story">
          <h2 class="case-heading">Результат</h2>
          <p class="body">Сайт запущен: <a href="https://goodrest.kz" target="_blank" rel="noopener noreferrer">goodrest.kz</a>.</p>
        </section>
      </div>

      <nav class="case-end">
        <a href="/cases">← Все проекты</a>
        <a href="/cases/uiren-go" class="case-end-next">К Uiren Go →</a>
      </nav>
    </article>
  `,"/contact":`
    <section class="page-section mb-12">
      <span class="section-heading-cipher" data-text="Контакты">Контакты</span>
      <div class="space-y-4 text-body-p">
        <p>Telegram: <a href="https://t.me/kuroiyo" target="_blank" rel="noopener noreferrer" class="site-link">t.me/kuroiyo</a></p>
        <p>Email: <a href="mailto:pogodayew@gmail.com" class="site-link">pogodayew@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0%D0%B5%D0%B2-5081bb397" target="_blank" rel="noopener noreferrer" class="site-link">linkedin.com/in/михаил-погодаев-5081bb397</a></p>
        <p>Локация: Алматы, Казахстан</p>
      </div>
    </section>
  `};function i(e){let t=e.replace(/\/index\.html$/,``).replace(/\/$/,``);return t===``?`/`:t}function a(e,t=!0){let a=i(e),s=r[a]||r[`/`],c=document.getElementById(`pageContent`);c&&(c.innerHTML=s),t&&window.location.pathname!==a&&window.history.pushState(null,``,a),window.scrollTo({top:0,behavior:`instant`}),o(a),n()}function o(e){let t=e.startsWith(`/cases`);document.querySelectorAll(`.desktop-nav-link`).forEach(n=>{let r=n.getAttribute(`data-route`);r===`/cases`&&t||r===e?n.classList.add(`active`):n.classList.remove(`active`)}),document.querySelectorAll(`.mobile-nav-link`).forEach(n=>{let r=n.getAttribute(`data-route`);r===`/cases`&&t||r===e?n.classList.add(`active`):n.classList.remove(`active`)})}function s(){document.body.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`),r=t.getAttribute(`target`);!n||r===`_blank`||n.startsWith(`mailto:`)||n.startsWith(`http`)||n.startsWith(`/`)&&(e.preventDefault(),a(n,!0))}),window.addEventListener(`popstate`,()=>{a(window.location.pathname,!1)})}function c(){let e=document.getElementById(`themeToggleGroup`),t=document.getElementById(`mobileThemeToggleGroup`),n=document.getElementById(`darkOpt`),r=document.getElementById(`lightOpt`),i=document.getElementById(`mobileDarkOpt`),a=document.getElementById(`mobileLightOpt`),o=document.querySelector(`meta[name="theme-color"]`);function s(e){e?(document.documentElement.classList.add(`dark`),o?.setAttribute(`content`,`#181818`),n?.classList.add(`active`),r?.classList.remove(`active`),i?.classList.add(`active`),a?.classList.remove(`active`),localStorage.setItem(`theme`,`dark`)):(document.documentElement.classList.remove(`dark`),o?.setAttribute(`content`,`#ffffff`),r?.classList.add(`active`),n?.classList.remove(`active`),a?.classList.add(`active`),i?.classList.remove(`active`),localStorage.setItem(`theme`,`light`))}let c=localStorage.getItem(`theme`);s(!c||c===`dark`);function l(e){s(e)}function u(){s(!document.documentElement.classList.contains(`dark`))}n?.addEventListener(`click`,e=>{e.stopPropagation(),l(!0)}),r?.addEventListener(`click`,e=>{e.stopPropagation(),l(!1)}),e?.addEventListener(`click`,u),i?.addEventListener(`click`,e=>{e.stopPropagation(),l(!0)}),a?.addEventListener(`click`,e=>{e.stopPropagation(),l(!1)}),t?.addEventListener(`click`,u)}document.addEventListener(`DOMContentLoaded`,()=>{c(),s(),a(window.location.pathname,!1)});