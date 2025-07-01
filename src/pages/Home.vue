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
                    Челябинск и область.1
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed, useCssModule } from "vue";
import {
    Phone as PhoneIcon,
    MessageCircle as MessageCircleIcon,
    Instagram as InstagramIcon,
    Users as UsersIcon,
    MusicIcon,
    CheckIcon,
    CalendarIcon,
} from "lucide-vue-next";

// Reactive data
const currentYear = computed(() => new Date().getFullYear());

const styles = useCssModule();

const services = ref([
    {
        id: 1,
        title: "Оригинальные постановки",
        description: "Под ваш бюджет и пожелания",
        icon: UsersIcon,
        iconClass: styles.iconPink,
    },
    {
        id: 2,
        title: "Подбор музыки",
        description: "И стиля под тематику свадьбы",
        icon: MusicIcon,
        iconClass: styles.iconPurple,
    },
    {
        id: 3,
        title: "Участие молодоженов",
        description: "Возможность участия в номере жениха и невесты",
        icon: CheckIcon,
        iconClass: styles.iconGreen,
    },
    {
        id: 4,
        title: "Полный спектр услуг",
        description: "От идеи до реализации",
        icon: CalendarIcon,
        iconClass: styles.iconOrange,
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
        icon: UsersIcon,
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
