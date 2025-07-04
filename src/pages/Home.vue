<template>
  <div :class="$style.container">
    <!-- Hero Section -->
    <section :class="$style.hero">
      <div :class="$style.heroContent">
        <div :class="$style.heroGrid">
          <!-- Left Content -->
          <div :class="$style.heroLeft">
            <div :class="$style.heroText">
              <div :class="$style.titleSection">
                <h1 :class="$style.title">
                  Профессиональные танцевальные номера для вашей свадьбы
                </h1>
                <p :class="$style.subtitle">
                  Если нужно, чтобы свадьба запомнилась яркими танцевальными номерами - это ко мне.
                </p>
              </div>

              <div :class="$style.authorSection">
                <div>
                  <h2 :class="$style.authorName">Вадим Томилов</h2>
                  <p :class="$style.authorDescription">
                    Профессиональный хореограф<br />
                    Более 5 лет опыта в Челябинске и области
                  </p>
                </div>

                <div :class="$style.buttonGroup">
                  <a 
                    :href="contacts.phone.href" 
                    :class="[$style.button, $style.buttonPrimary]"
                  >
                    <PhoneIcon :class="$style.buttonIcon" />
                    {{ contacts.phone.display }}
                  </a>
                  <a 
                    :href="contacts.whatsapp.href" 
                    :class="[$style.button, $style.buttonSecondary]"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircleIcon :class="$style.buttonIcon" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Image -->
          <div :class="$style.heroRight">
            <div :class="$style.heroImage">
              <img 
                src="/placeholder.svg?height=800&width=600" 
                alt="Томилов Вадим - профессиональный танцор"
                :class="$style.image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section :class="$style.services">
      <div :class="$style.container">
        <h2 :class="$style.sectionTitle">Что я предлагаю</h2>

        <div :class="$style.servicesGrid">
          <div :class="$style.servicesColumn">
            <div 
              v-for="service in servicesLeft" 
              :key="service.id"
              :class="$style.serviceItem"
            >
              <h3 :class="$style.serviceTitle">{{ service.title }}</h3>
              <p :class="$style.serviceDescription">{{ service.description }}</p>
            </div>
          </div>

          <div :class="$style.servicesColumn">
            <div 
              v-for="service in servicesRight" 
              :key="service.id"
              :class="$style.serviceItem"
            >
              <h3 :class="$style.serviceTitle">{{ service.title }}</h3>
              <p :class="$style.serviceDescription">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section :class="$style.about">
      <div :class="$style.container">
        <h2 :class="$style.sectionTitle">О профессионале</h2>
        <div :class="$style.aboutContent">
          <p v-for="paragraph in aboutText" :key="paragraph" :class="$style.aboutParagraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section :class="$style.portfolio">
      <div :class="$style.container">
        <h2 :class="$style.sectionTitle">Портфолио</h2>

        <div :class="$style.portfolioGrid">
          <div 
            v-for="video in portfolioVideos" 
            :key="video.id"
            :class="$style.videoContainer"
          >
            <video 
                               controls
                        muted
                        loop
                        playsinline
              :class="$style.video"
              :poster="video.poster"
            >
              <source :src="video.src" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section :class="$style.contact">
      <div :class="$style.container">
        <h2 :class="$style.contactTitle">Свяжитесь со мной</h2>
        <p :class="$style.contactSubtitle">Готов обсудить ваш танцевальный номер</p>

        <div :class="$style.contactGrid">
          <div 
            v-for="contact in contactMethods" 
            :key="contact.id"
            :class="$style.contactItem"
          >
            <component :is="contact.icon" :class="$style.contactIcon" />
            <h3 :class="$style.contactItemTitle">{{ contact.title }}</h3>
            <a 
              :href="contact.href" 
              :class="$style.contactLink"
              :target="contact.external ? '_blank' : undefined"
              :rel="contact.external ? 'noopener noreferrer' : undefined"
            >
              {{ contact.text }}
            </a>
          </div>
        </div>

        <div :class="$style.contactButtons">
          <a 
            :href="contacts.phone.href" 
            :class="[$style.button, $style.buttonWhite]"
          >
            <PhoneIcon :class="$style.buttonIcon" />
            Позвонить сейчас
          </a>
          <a 
            :href="contacts.whatsapp.href" 
            :class="[$style.button, $style.buttonOutline]"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircleIcon :class="$style.buttonIcon" />
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer :class="$style.footer">
      <p :class="$style.footerText">
          © {{ currentYear }} Вадим Томилов. Челябинск и область.
        </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, h } from 'vue'
import { Phone as PhoneIcon, MessageCircle as MessageCircleIcon, Instagram as InstagramIcon } from 'lucide-vue-next'

interface Service {
  id: number
  title: string
  description: string
}

interface Contact {
  phone: {
    href: string
    display: string
  }
  whatsapp: {
    href: string
  }
}

interface ContactMethod {
  id: number
  title: string
  text: string
  href: string
  icon: any
  external?: boolean
}

interface PortfolioVideo {
  id: number
  src: string
  poster: string
}

const currentYear = computed(() => new Date().getFullYear())

const contacts: Contact = {
  phone: {
    href: 'tel:89226321111',
    display: '8(922)632-11-11'
  },
  whatsapp: {
    href: 'https://wa.me/89226321111'
  }
}

const servicesLeft: Service[] = [
  {
    id: 1,
    title: 'Оригинальные постановки',
    description: 'Под ваш бюджет и пожелания'
  },
  {
    id: 2,
    title: 'Подбор музыки и стиля',
    description: 'Под тематику свадьбы'
  }
]

const servicesRight: Service[] = [
  {
    id: 3,
    title: 'Участие молодоженов',
    description: 'Возможность участия в номере жениха и невесты'
  },
  {
    id: 4,
    title: 'Полный спектр услуг',
    description: 'От идеи до реализации'
  }
]

const aboutText: string[] = [
  'Являюсь действующим спортсменом и тренером по спортивным бальным танцам. Неоднократный призёр Всероссийских и Международных соревнований.',
  'Каждый номер создается индивидуально под вашу пару и особенности торжества, чтобы сделать ваш день незабываемым.'
]

const portfolioVideos: PortfolioVideo[] = [
    {
         id: 1,
  src: `/output1.mp4`,
  poster: `/first_output1.jpg`
    },
       {
         id: 2,
  src: `/output2.mp4`,
  poster: `/first_output2.jpg`
    }
]

const VkIcon = () => h('svg', {
  class: 'h-8 w-8',
  fill: 'currentColor',
  viewBox: '0 0 24 24'
}, [
  h('path', {
    d: 'M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 7.348c0-.254.102-.491.593-.491 1.068 0 1.491.763 1.915 1.694.458.966 1.017 2.098 1.694 2.098.254 0 .356-.118.356-.763V8.348c-.085-1.305-.763-1.422-.763-1.896 0-.203.169-.407.441-.407h2.729c.678 0 .932.347.932 1.388v3.659c0 .678.305.932.763.932.254 0 .695-.118 1.727-1.135 1.016-1.017 1.744-2.59 1.744-2.59.102-.254.356-.491.763-.491h1.744c1.017 0 1.253.525.932 1.237-.458 1.152-2.138 3.235-2.138 3.235-.254.356-.356.525 0 .932.254.305 1.084 1.068 1.643 1.727.932 1.118.525 1.694-.407 1.694z'
  })
])

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: 'Телефон',
    text: '8(922)632-11-11',
    href: 'tel:89226321111',
    icon: PhoneIcon
  },
  {
    id: 2,
    title: 'WhatsApp',
    text: 'Написать',
    href: 'https://wa.me/89226321111',
    icon: MessageCircleIcon,
    external: true
  },
  {
    id: 3,
    title: 'VK',
    text: 'Профиль',
    href: 'https://vk.com/id393654792',
    icon: VkIcon,
    external: true
  },
  {
    id: 4,
    title: 'Instagram',
    text: '@tomi_dancer111',
    href: 'https://www.instagram.com/tomi_dancer111?igsh=cDh6aXF2MzRxcnoy&utm_source=qr',
    icon: InstagramIcon,
    external: true
  }
]
</script>

<style module>
.container {
  max-width: 100%; /* Убедитесь, что контейнер не выходит за границы экрана */
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
      padding-top: 2rem;
    padding-bottom: 2rem;
}

.heroContent {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}

.heroGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 100vh;
}

@media (min-width: 1024px) {
  .heroGrid {
    grid-template-columns: 1fr 1fr;
  }
}

.heroLeft {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.titleSection {
  display: flex;
  flex-direction: column;
  gap: 1rem;
      margin-bottom: 1rem;
}

.title {
  font-size: calc(1.5em + 1.5vw);
  font-weight: 300;
  color: #dc2626;
  line-height: 1.1;
}

@media (min-width: 768px) {
  .title {
    font-size: calc(2em + 1.5vw);
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: calc(2em + 1.5vw);
  }
}

.subtitle {
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 28rem;
}

.authorSection {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.authorName {
  font-size: 1.5rem;
  font-weight: 300;
  color: #111827;
  margin-bottom: 0.5rem;
}

.authorDescription {
  color: #4b5563;
}

.buttonGroup {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 640px) {
  .buttonGroup {
    flex-direction: row;
  }
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s;
}

.buttonIcon {
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}

.buttonPrimary {
  background-color: #dc2626;
  color: white;
}

.buttonPrimary:hover {
  background-color: #b91c1c;
}

.buttonSecondary {
  border: 1px solid #dc2626;
  color: #dc2626;
  background-color: transparent;
}

.buttonSecondary:hover {
  background-color: #fef2f2;
}

.heroRight {
  position: relative;
}

.heroImage {
  aspect-ratio: 3/4;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Services Section */
.services {
  padding: 3rem 1rem;
  background-color: #f9fafb;
}

.sectionTitle {
  font-size: 1.875rem;
  font-weight: 300;
  color: #dc2626;
  margin-bottom: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .sectionTitle {
    font-size: 3rem;
  }
}

.servicesGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1152px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .servicesGrid {
    grid-template-columns: 1fr 1fr;
  }
}

.servicesColumn {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.serviceItem {
  border-left: 4px solid #dc2626;
  padding-left: 1.5rem;
}

.serviceTitle {
  font-size: 1.25rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.5rem;
}

.serviceDescription {
  color: #4b5563;
}

/* About Section */
.about {
  padding: 3rem 1rem;
  background-color: white;
}

.aboutContent {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.75;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
}

.aboutParagraph {
  margin: 0;
}

/* Portfolio Section */
.portfolio {
  padding: 3rem 1rem;
  background-color: #f9fafb;
}

.portfolioGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1152px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .portfolioGrid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .portfolioGrid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.videoContainer {
  aspect-ratio: 9/16;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #f3f4f6;
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contact Section */
.contact {
  padding: 3rem 1rem;
  background-color: #dc2626;
  color: white;
  text-align: center;
}

.contactTitle {
  font-size: 1.875rem;
  font-weight: 300;
}

@media (min-width: 768px) {
  .contactTitle {
    font-size: 3rem;
  }
}

.contactSubtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.contactGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .contactGrid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .contactGrid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.contactItem {
  text-align: center;
}

.contactIcon {
  width: 2rem;
  height: 2rem;
  margin: 0 auto 1rem;
}

.contactItemTitle {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.contactLink {
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.contactLink:hover {
  opacity: 1;
  text-decoration: underline;
}

.contactButtons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .contactButtons {
    flex-direction: row;
  }
}

.buttonWhite {
  background-color: white;
  color: #dc2626;
}

.buttonWhite:hover {
  background-color: #f3f4f6;
}

.buttonOutline {
  border: 1px solid white;
  color: white;
  background-color: transparent;
}

.buttonOutline:hover {
  background-color: white;
  color: #dc2626;
}

/* Footer */
.footer {
  padding: 1rem 1rem;
  background-color: white;
}

.footerText {
  color: #6b7280;
  text-align: center;
  max-width: 1152px;
  margin: 0 auto;
}

</style>