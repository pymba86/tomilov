<template>
    <div :class="$style.container">
        <!-- Hero Section with Full Screen Video -->
        <section :class="$style.heroSection">
            <video autoplay muted loop playsinline :class="$style.heroVideo">
                <!-- <source src="/placeholder-video.mp4" type="video/mp4" /> -->
            </video>

            <!-- Overlay -->
            <div :class="$style.overlay" />

            <!-- Content -->
            <div :class="$style.heroContent">
                <h1 :class="$style.heroTitle">
                    Профессиональные танцевальные номера для вашей свадьбы!
                </h1>
                <p :class="$style.heroSubtitle">
                    Создаю яркие и запоминающиеся танцевальные номера для
                    свадебного торжества. Более 5 лет опыта работы на различных
                    мероприятиях Челябинска и области.
                </p>
                <div :class="$style.heroButtons">
                    <a
                        href="tel:89226321111"
                        :class="[$style.button, $style.buttonPrimary]"
                    >
                        <PhoneIcon :class="$style.buttonIcon" />
                        Позвонить сейчас
                    </a>
                    <a
                        href="https://wa.me/89226321111"
                        :class="[$style.button, $style.buttonSecondary]"
                    >
                        <MessageCircleIcon :class="$style.buttonIcon" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section :class="$style.aboutSection">
            <div :class="$style.aboutContainer">
                <div :class="$style.aboutGrid">
                    <div :class="$style.aboutText">
                        <h2 :class="$style.sectionTitle">О профессионале</h2>
                        <p :class="$style.aboutParagraph">
                            Являюсь действующим спортсменом и тренером по
                            спортивным бальным танцам. Неоднократный призёр
                            Всероссийских и Международных соревнований.
                        </p>
                        <p :class="$style.aboutParagraph">
                            Каждый номер создается индивидуально под вашу пару и
                            особенности торжества, чтобы сделать ваш день
                            незабываемым.
                        </p>
                    </div>
                    <div :class="$style.aboutImageContainer">
                        <img
                            src="/placeholder.svg?height=500&width=400"
                            alt="Танцевальный номер"
                            :class="$style.aboutImage"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section :class="$style.servicesSection">
            <div :class="$style.servicesContainer">
                <h2 :class="[$style.sectionTitle, $style.centerTitle]">
                    Что я предлагаю
                </h2>
                <div :class="$style.servicesGrid">
                    <div
                        v-for="service in services"
                        :key="service.id"
                        :class="$style.serviceCard"
                    >
                        <div :class="[$style.serviceIcon, service.iconClass]">
                            <component
                                :is="service.icon"
                                :class="$style.serviceIconSvg"
                            />
                        </div>
                        <h3 :class="$style.serviceTitle">
                            {{ service.title }}
                        </h3>
                        <p :class="$style.serviceDescription">
                            {{ service.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section :class="$style.gallerySection">
            <div :class="$style.galleryContainer">
                <h2 :class="[$style.sectionTitle, $style.centerTitle]">
                    Галерея работ
                </h2>
                <div :class="$style.galleryGrid">
                    <div
                        v-for="(image, index) in galleryImages"
                        :key="index"
                        :class="$style.galleryItem"
                    >
                        <img
                            :src="image.src"
                            :alt="image.alt"
                            :class="$style.galleryImage"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section :class="$style.contactSection">
            <div :class="$style.contactContainer">
                <h2 :class="[$style.sectionTitle, $style.contactTitle]">
                    Свяжитесь со мной
                </h2>
                <p :class="$style.contactSubtitle">
                    Готов обсудить ваш танцевальный номер и воплотить мечты в
                    реальность
                </p>

                <div :class="$style.contactGrid">
                    <div
                        v-for="contact in contacts"
                        :key="contact.id"
                        :class="$style.contactCard"
                    >
                        <component
                            :is="contact.icon"
                            :class="$style.contactIcon"
                        />
                        <h3 :class="$style.contactCardTitle">
                            {{ contact.title }}
                        </h3>
                        <a
                            :href="contact.href"
                            :class="$style.contactLink"
                            :target="contact.external ? '_blank' : undefined"
                            :rel="
                                contact.external
                                    ? 'noopener noreferrer'
                                    : undefined
                            "
                        >
                            {{ contact.text }}
                        </a>
                    </div>
                </div>

                <div :class="$style.contactButtons">
                    <a
                        href="tel:89226321111"
                        :class="[$style.button, $style.buttonWhite]"
                    >
                        <PhoneIcon :class="$style.buttonIcon" />
                        Позвонить сейчас
                    </a>
                    <a
                        href="https://wa.me/89226321111"
                        target="_blank"
                        rel="noopener noreferrer"
                        :class="[$style.button, $style.buttonOutlineWhite]"
                    >
                        <MessageCircleIcon :class="$style.buttonIcon" />
                        Написать в WhatsApp
                    </a>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer :class="$style.footer">
            <div :class="$style.footerContainer">
                <p :class="$style.footerText">
                    © {{ currentYear }} Профессиональные танцевальные номера.
                    Челябинск и область.
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
    Phone as PhoneIcon,
    MessageCircle as MessageCircleIcon,
    Instagram as InstagramIcon,
    Users as UsersIcon,
} from "lucide-vue-next";

// Reactive data
const currentYear = computed(() => new Date().getFullYear());

// Custom icon components
const MusicIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  `,
};

const CheckIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  `,
};

const CalendarIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2z" />
    </svg>
  `,
};

const VkIcon = {
    template: `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 7.348c0-.254.102-.491.593-.491 1.068 0 1.491.763 1.915 1.694.458.966 1.017 2.098 1.694 2.098.254 0 .356-.118.356-.763V8.348c-.085-1.305-.763-1.422-.763-1.896 0-.203.169-.407.441-.407h2.729c.678 0 .932.347.932 1.388v3.659c0 .678.305.932.763.932.254 0 .695-.118 1.727-1.135 1.016-1.017 1.744-2.59 1.744-2.59.102-.254.356-.491.763-.491h1.744c1.017 0 1.253.525.932 1.237-.458 1.152-2.138 3.235-2.138 3.235-.254.356-.356.525 0 .932.254.305 1.084 1.068 1.643 1.727.932 1.118.525 1.694-.407 1.694z" />
    </svg>
  `,
};

const services = ref([
    {
        id: 1,
        title: "Оригинальные постановки",
        description: "Под ваш бюджет и пожелания",
        icon: UsersIcon,
        iconClass: "iconPink",
    },
    {
        id: 2,
        title: "Подбор музыки",
        description: "И стиля под тематику свадьбы",
        icon: MusicIcon,
        iconClass: "iconPurple",
    },
    {
        id: 3,
        title: "Участие молодоженов",
        description: "Возможность участия в номере жениха и невесты",
        icon: CheckIcon,
        iconClass: "iconGreen",
    },
    {
        id: 4,
        title: "Полный спектр услуг",
        description: "От идеи до реализации",
        icon: CalendarIcon,
        iconClass: "iconOrange",
    },
]);

const galleryImages = ref([
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Танцевальный номер 1",
    },
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Танцевальный номер 2",
    },
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Танцевальный номер 3",
    },
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Танцевальный номер 4",
    },
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Танцевальный номер 5",
    },
    {
        src: "/placeholder.svg?height=400&width=300",
        alt: "Танцевальный номер 6",
    },
]);

const contacts = ref([
    {
        id: 1,
        title: "Телефон",
        text: "8(922)632-11-11",
        href: "tel:89226321111",
        icon: PhoneIcon,
        external: false,
    },
    {
        id: 2,
        title: "WhatsApp",
        text: "Написать",
        href: "https://wa.me/89226321111",
        icon: MessageCircleIcon,
        external: true,
    },
    {
        id: 3,
        title: "VK",
        text: "Профиль",
        href: "https://vk.com/id393654792",
        icon: "VkIcon",
        external: true,
    },
    {
        id: 4,
        title: "Instagram",
        text: "@tomi_dancer111",
        href: "https://www.instagram.com/tomi_dancer111?igsh=cDh6aXF2MzRxcnoy&utm_source=qr",
        icon: InstagramIcon,
        external: true,
    },
]);
</script>

<style module>
.container {
    min-height: 100vh;
    background-color: white;
}

/* Hero Section */
.heroSection {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.heroVideo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.heroContent {
    position: relative;
    z-index: 10;
    text-align: center;
    color: white;
    padding: 0 1rem;
    max-width: 64rem;
    margin: 0 auto;
}

.heroTitle {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.heroSubtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.heroButtons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
}

/* Buttons */
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
}

.buttonPrimary {
    background: linear-gradient(to right, #ec4899, #f43f5e);
    color: white;
}

.buttonPrimary:hover {
    background: linear-gradient(to right, #db2777, #e11d48);
}

.buttonSecondary {
    border: 2px solid white;
    color: white;
    background: transparent;
}

.buttonSecondary:hover {
    background: white;
    color: black;
}

.buttonWhite {
    background: white;
    color: #ec4899;
}

.buttonWhite:hover {
    background: #f3f4f6;
}

.buttonOutlineWhite {
    border: 2px solid white;
    color: white;
    background: transparent;
}

.buttonOutlineWhite:hover {
    background: white;
    color: #ec4899;
}

.buttonIcon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
}

/* About Section */
.aboutSection {
    padding: 5rem 1rem;
    background: linear-gradient(135deg, #f9fafb, white);
}

.aboutContainer {
    max-width: 72rem;
    margin: 0 auto;
}

.aboutGrid {
    display: grid;
    gap: 3rem;
    align-items: center;
}

.aboutText {
    /* Grid column will be handled by media queries */
}

.sectionTitle {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: #111827;
}

.centerTitle {
    text-align: center;
    margin-bottom: 3rem;
}

.aboutParagraph {
    font-size: 1.125rem;
    color: #374151;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.aboutImageContainer {
    position: relative;
}

.aboutImage {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Services Section */
.servicesSection {
    padding: 5rem 1rem;
    background: white;
}

.servicesContainer {
    max-width: 72rem;
    margin: 0 auto;
}

.servicesGrid {
    display: grid;
    gap: 2rem;
}

.serviceCard {
    background: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: center;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.serviceCard:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.serviceIcon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
}

.iconPink {
    background: linear-gradient(to right, #ec4899, #f43f5e);
}

.iconPurple {
    background: linear-gradient(to right, #8b5cf6, #6366f1);
}

.iconGreen {
    background: linear-gradient(to right, #10b981, #14b8a6);
}

.iconOrange {
    background: linear-gradient(to right, #f59e0b, #ef4444);
}

.serviceIconSvg {
    width: 2rem;
    height: 2rem;
    color: white;
}

.serviceTitle {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #111827;
}

.serviceDescription {
    color: #6b7280;
}

/* Gallery Section */
.gallerySection {
    padding: 5rem 1rem;
    background: linear-gradient(135deg, #f9fafb, white);
}

.galleryContainer {
    max-width: 72rem;
    margin: 0 auto;
}

.galleryGrid {
    display: grid;
    gap: 1.5rem;
}

.galleryItem {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    group: true;
}

.galleryImage {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.galleryItem:hover .galleryImage {
    transform: scale(1.1);
}

/* Contact Section */
.contactSection {
    padding: 5rem 1rem;
    background: linear-gradient(to right, #ec4899, #f43f5e);
}

.contactContainer {
    max-width: 64rem;
    margin: 0 auto;
    text-align: center;
}

.contactTitle {
    color: white;
}

.contactSubtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
}

.contactGrid {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.contactCard {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: center;
}

.contactIcon {
    width: 2rem;
    height: 2rem;
    color: white;
    margin: 0 auto 1rem;
}

.contactCardTitle {
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
}

.contactLink {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contactLink:hover {
    color: white;
}

.contactButtons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
}

/* Footer */
.footer {
    padding: 2rem 1rem;
    background: #111827;
    color: white;
}

.footerContainer {
    max-width: 72rem;
    margin: 0 auto;
    text-align: center;
}

.footerText {
    color: #9ca3af;
}

/* Media Queries */
@media (min-width: 640px) {
    .heroButtons {
        flex-direction: row;
    }

    .contactButtons {
        flex-direction: row;
    }
}

@media (min-width: 768px) {
    .heroTitle {
        font-size: 3.75rem;
    }

    .heroSubtitle {
        font-size: 1.5rem;
    }

    .sectionTitle {
        font-size: 2.25rem;
    }

    .servicesGrid {
        grid-template-columns: repeat(2, 1fr);
    }

    .galleryGrid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contactGrid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .heroTitle {
        font-size: 4.5rem;
    }

    .aboutGrid {
        grid-template-columns: repeat(2, 1fr);
    }

    .servicesGrid {
        grid-template-columns: repeat(4, 1fr);
    }

    .galleryGrid {
        grid-template-columns: repeat(3, 1fr);
    }

    .contactGrid {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
