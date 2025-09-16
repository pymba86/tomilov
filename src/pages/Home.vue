<template>
    <div :class="$style.container">
        <!-- Hero Section -->
        <section :class="$style.hero">
            <div :class="$style.maxWidth">
                <div :class="$style.heroContent">
                    <h1 :class="$style.heroTitle">
                        Профессиональная постановка свадебного танца в
                        Челябинске
                    </h1>
                    <p :class="$style.heroDescription">
                        Создадим тот самый момент, который останется в сердцах.
                        Я верю, что главное в свадебном танце – не идеальная
                        техника, а искренние эмоции. Моя цель – помочь Вам
                        выразить Ваши чувства через движения, чтобы создать
                        трогательное и незабываемое воспоминание для Вас и Ваших
                        гостей
                    </p>
                    <div :class="$style.buttonGroup">
                        <button :class="[$style.button, $style.buttonPrimary]">
                            <PhoneIcon :class="$style.buttonHeaderIcon" />
                            8(922)632-11-11
                        </button>
                        <button :class="[$style.button, $style.buttonOutline]">
                            <MessageCircleIcon
                                :class="$style.buttonHeaderIcon"
                            />
                            WhatsApp
                        </button>
                    </div>
                </div>

                <div :class="$style.heroImages">
                    <div
                        :class="[
                            $style.imageContainer,
                            $style.heroImagePreview,
                        ]"
                    >
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-09o1rwj3r8aTGdfm8pHr4FX2d5SCE9.png"
                            alt="Вадим Томилов - профессиональный танец на сцене"
                            :class="$style.heroImage"
                        />
                    </div>
                    <div :class="$style.imageContainer">
                        <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AlDsl0oueQN2hqalo98iMFWF9Cc43g.png"
                            alt="Вадим Томилов на соревнованиях по бальным танцам"
                            :class="$style.heroImage"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section :class="$style.about">
            <div :class="$style.maxWidth">
                <div :class="$style.aboutContent">
                    <h2 :class="$style.sectionTitle">
                        Почему мне доверяют самые важные моменты
                    </h2>
                    <div :class="$style.aboutText">
                        <p :class="$style.paragraph">
                            Меня зовут <strong>Вадим Томилов</strong>. Я —
                            действующий спортсмен и тренер по спортивным бальным
                            танцам с опытом более 5 лет.
                        </p>
                        <p :class="$style.paragraph">
                            Создаю не просто движения под музыку, а продуманные
                            истории, уникальные для каждой пары. Как
                            неоднократный призёр всероссийских и международных
                            соревнований, я знаю, как сделать выступление
                            эффектным и безупречным, чтобы ваш особенный день
                            стал по-настоящему незабываемым.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section :class="$style.services">
            <div :class="$style.maxWidth">
                <h2 :class="$style.sectionTitle">
                    Полный спектр услуг для Вашего идеального номера
                </h2>
                <div :class="$style.servicesGrid">
                    <div
                        v-for="service in services"
                        :key="service.id"
                        :class="$style.serviceCard"
                    >
                        <div :class="$style.serviceIcon">
                            <component :is="service.icon" />
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

        <!-- Work Examples Section -->
        <section :class="$style.workExamples">
            <div :class="$style.maxWidth">
                <h2 :class="$style.sectionTitle">Примеры работ</h2>
                <p :class="$style.sectionDescription">
                    Каждое выступление уникально, как и история влюблённых.
                    Вдохновитесь примерами моих работ
                </p>
                <div :class="$style.videoGrid">
                    <div
                        v-for="video in videoExamples"
                        :key="video.id"
                        :class="$style.videoCard"
                        @click="toggleVideo(video.id)"
                        @mouseenter="hoveredVideo = video.id"
                        @mouseleave="hoveredVideo = null"
                    >
                        <div
                            :class="[
                                $style.videoContainer,
                                video.aspectRatio === 'vertical'
                                    ? $style.videoVertical
                                    : $style.videoHorizontal,
                            ]"
                        >
                            <!-- Видео -->
                            <video
                                :ref="setVideoRef(video.id)"
                                :src="video.src"
                                :class="$style.videoThumbnail"
                                loop
                                muted
                                playsinline
                            />

                            <!-- Оверлей -->
                            <div
                                :class="[
                                    $style.videoOverlay,
                                    {
                                        [$style.videoOverlayVisible]:
                                            playingVideo === video.id,
                                    },
                                ]"
                            >
                                <button
                                    :class="$style.playButton"
                                    @click.stop="toggleVideo(video.id)"
                                >
                                    <component
                                        :is="
                                            playingVideo === video.id
                                                ? PauseIcon
                                                : PlayIcon
                                        "
                                    />
                                </button>

                                <button
                                    v-if="playingVideo === video.id"
                                    :class="$style.fullscreenButton"
                                    @click.stop="toggleFullscreen"
                                    aria-label="Полноэкранный режим"
                                >
                                    <component :is="FullscreenIcon" />
                                </button>
                            </div>

                            <!-- Информация -->
                            <div :class="$style.videoInfo">
                                <h3 :class="$style.videoTitle">
                                    {{ video.title }}
                                </h3>
                                <div :class="$style.videoMeta">
                                    <span :class="$style.videoDuration">{{
                                        video.duration
                                    }}</span>
                                    <div :class="$style.videoStatus">
                                        {{
                                            playingVideo === video.id
                                                ? "Воспроизводится"
                                                : "Нажмите для просмотра"
                                        }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section :class="$style.cta">
            <div :class="$style.maxWidth">
                <div :class="$style.ctaContent">
                    <h2 :class="$style.sectionTitle">
                        Готовы создать свой неповторимый номер?
                    </h2>
                    <p :class="$style.ctaDescription">
                        Давайте обсудим вашу идею и воплотим её в жизнь!
                    </p>

                    <div :class="$style.buttonGroup">
                        <button :class="[$style.button, $style.buttonPrimary]">
                            Позвонить сейчас
                        </button>
                        <button :class="[$style.button, $style.buttonOutline]">
                            Написать в WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer :class="$style.footer">
            <div :class="$style.maxWidth">
                <div :class="$style.footerGrid">
                    <div
                        v-for="contact in contacts"
                        :key="contact.type"
                        :class="$style.footerItem"
                    >
                        <component
                            :is="contact.icon"
                            :class="$style.footerIcon"
                        />
                        <h3 :class="$style.footerTitle">{{ contact.type }}</h3>
                        <a
                            :class="$style.footerText"
                            :href="contact.href"
                            :target="contact.external ? '_blank' : undefined"
                            :rel="
                                contact.external
                                    ? 'noopener noreferrer'
                                    : undefined
                            "
                            >{{ contact.value }}</a
                        >
                    </div>
                </div>
                <div :class="$style.footerBottom">
                    <p :class="$style.footerCopyright">
                        © 2025 Вадим Томилов. Челябинск и область.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import {
    AwardIcon,
    ClockIcon,
    FullscreenIcon,
    HeartIcon,
    Instagram,
    MessageCircle,
    PauseIcon,
    MessageCircleIcon,
    PhoneIcon,
    PlayIcon,
    UsersIcon,
} from "lucide-vue-next";
import { ref, onMounted, onUnmounted, onBeforeUnmount, watch } from "vue";

// Services data
const services = ref([
    {
        id: 1,
        icon: HeartIcon,
        title: "Индивидуальная постановка",
        description:
            "Разрабатываю уникальный танец с нуля, учитывая все ваши пожелания, уровня подготовки и особенности торжества",
    },
    {
        id: 2,
        icon: AwardIcon,
        title: "Подбор музыки и концепции",
        description:
            "Помощь в выборе идеального саундтрека и разработка общей идеи танца",
    },
    {
        id: 3,
        icon: ClockIcon,
        title: "Аренда репетиционного зала",
        description:
            "Помогу найти и арендовать идеальный зал с оборудованием и подходящей атмосферой",
    },
]);

const toggleFullscreen = (event: MouseEvent) => {
    event.stopPropagation(); // Не дать клику закрыть видео

    const videoEl = videoRefs.value[playingVideo.value as string | number];
    if (!videoEl) return;

    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        videoEl
            .requestFullscreen()
            .catch((e) => console.warn("Fullscreen не поддерживается:", e));
    }
};

// Video examples data
const videoExamples = ref([
    {
        id: "1",
        title: "Классический свадебный танец",
        duration: "2:18",
        src: `/t4.mp4`,
        aspectRatio: "horizontal" as const,
    },

    {
        id: "6",
        title: "Эмоциональный танец",
        duration: "2:31",
        src: `/t3.mp4`,
        aspectRatio: "vertical" as const,
    },
    {
        id: "2",
        title: "Современная постановка",
        duration: "2:24",
        src: `/t1.mp4`,
        aspectRatio: "vertical" as const,
    },
    {
        id: "3",
        title: "Романтический вальс",
        duration: "0:51",
        src: `/t5.mp4`,
        aspectRatio: "horizontal" as const,
    },
    {
        id: "4",
        title: "Динамичный номер",
        duration: "2:07",
        src: `/t2.mp4`,
        aspectRatio: "vertical" as const,
    },
]);

// CTA features
const ctaFeatures = ref([
    "Бесплатная консультация по телефону",
    "Индивидуальный подход к каждой паре",
    "Гарантия результата",
]);

// Состояния
const playingVideo = ref<string | number | null>(null);
const hoveredVideo = ref<string | number | null>(null);

// Храним ссылки на элементы <video>
const videoRefs = ref<Record<string | number, HTMLVideoElement | null>>({});

// Привязка рефа к каждому видео
const setVideoRef = (id: string | number) => (el: HTMLVideoElement | null) => {
    videoRefs.value[id] = el;
};

// Переключение воспроизведения
const toggleVideo = (id: string | number) => {
    const videoEl = videoRefs.value[id];
    if (!videoEl) return;

    if (playingVideo.value === id) {
        videoEl.pause();
        playingVideo.value = null;
    } else {
        // Останавливаем предыдущее видео
        if (playingVideo.value && videoRefs.value[playingVideo.value]) {
            videoRefs.value[playingVideo.value].pause();
        }

        // Запускаем новое
        videoEl.muted = false;
        videoEl
            .play()
            .catch((e) =>
                console.warn("Автовоспроизведение заблокировано:", e)
            );
        playingVideo.value = id;
    }
};

// Очистка при уничтожении компонента
onBeforeUnmount(() => {
    Object.values(videoRefs.value).forEach((video) => {
        if (video) video.pause();
    });
});

// Contact data
const contacts = ref([
    {
        type: "Телефон",
        value: "8(922)632-11-11",
        icon: PhoneIcon,
        href: "tel:89226321111",
    },
    {
        type: "WhatsApp",
        value: "Написать",
        href: "https://wa.me/89226321111",
        icon: MessageCircle,
        external: true,
    },
    {
        type: "VK",
        value: "Профиль",
        href: "https://vk.com/id393654792",
        icon: UsersIcon,
        external: true,
    },
    {
        type: "Instagram",
        value: "@tomi_dancer111",
        href: "https://www.instagram.com/tomi_dancer111",
        icon: Instagram,
        external: true,
    },
]);

// Mouse events for video hover
const handleMouseEnter = (videoId: string) => {
    hoveredVideo.value = videoId;
};

const handleMouseLeave = () => {
    hoveredVideo.value = null;
};

onMounted(() => {
    // Add mouse event listeners to video cards
    const videoCards = document.querySelectorAll("[data-video-card]");
    videoCards.forEach((card, index) => {
        const videoId = videoExamples.value[index]?.id;
        if (videoId) {
            card.addEventListener("mouseenter", () =>
                handleMouseEnter(videoId)
            );
            card.addEventListener("mouseleave", handleMouseLeave);
        }
    });
});

onUnmounted(() => {
    // Clean up event listeners
    const videoCards = document.querySelectorAll("[data-video-card]");
    videoCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
    });
});
</script>

<style module>
.container {
    min-height: 100vh;
    background-color: white;
    color: black;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        sans-serif;
}

.maxWidth {
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1rem;
}

/* Hero Section */
.hero {
    padding: 4rem 1rem 1rem;
}

@media (min-width: 1024px) {
    .hero {
        padding: 6rem 1rem 1rem;
    }
}

.heroContent {
    margin-bottom: 3rem;
}

.heroTitle {
    font-size: clamp(2rem, 5vw, 3.75rem);
    font-weight: 700;
    margin-bottom: 2rem;
    line-height: 1.25;
    text-wrap: balance;
}

.heroDescription {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: #374151;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 64rem;
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

.buttonHeaderIcon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
}

.button {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.2s;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
}

.buttonPrimary {
    background-color: black;
    color: white;
}

.buttonPrimary:hover {
    background-color: #1f2937;
}

.buttonOutline {
    background-color: transparent;
    color: black;
    border: 2px solid black;
}

.buttonOutline:hover {
    background-color: black;
    color: white;
}

.heroImages {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

.heroImagePreview {
    display: none;
}

@media (min-width: 1024px) {
    .heroImages {
        grid-template-columns: 1fr 1fr;
    }

    .heroImagePreview {
        display: block;
    }
}

.imageContainer {
    overflow: hidden;
    border-radius: 0.5rem;
}

.heroImage {
    width: 100%;
    height: auto;
    transition: transform 0.3s;
    border-radius: 0.5rem;
}

.heroImage:hover {
    transform: scale(1.05);
}

/* About Section */
.about {
    padding: 1rem 1rem;
    background-color: white;
}

.aboutContent {
    margin-bottom: 0rem;
}

.sectionTitle {
    font-size: clamp(1.875rem, 4vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 2rem;
    line-height: 1.25;
    text-wrap: balance;
}

.aboutText {
    font-size: 1.125rem;
    line-height: 1.6;
    max-width: 64rem;
}

.videoThumbnail:fullscreen {
    width: auto;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
    margin: 0 auto;
    background: #000;
}

/* Альтернативные префиксы (на всякий случай) */
.videoThumbnail::-webkit-full-screen {
    width: auto;
    height: 100vh;
    object-fit: contain;
    margin: 0 auto;
    background: #000;
}

.videoThumbnail:-moz-full-screen {
    width: auto;
    height: 100vh;
    object-fit: contain;
    margin: 0 auto;
    background: #000;
}

.paragraph {
    margin-bottom: 1rem;
}

/* Services Section */
.services {
    padding: 1rem 1rem;
}

.servicesGrid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .servicesGrid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.serviceCard {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    background-color: #f9fafb;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
}

@media (min-width: 768px) {
    .serviceCard {
        padding: 2rem;
    }
}

.serviceCard:hover {
    background-color: #f3f4f6;
}

.serviceIcon {
    background-color: black;
    color: white;
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
}

.serviceTitle {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.serviceDescription {
    color: #374151;
    line-height: 1.6;
}

/* Work Examples Section */
.workExamples {
    padding: 1rem 1rem;
    padding-bottom: 1rem;
    background-color: white;
}

.sectionDescription {
    font-size: 1.125rem;
    color: #374151;
    margin-bottom: 3rem;
    line-height: 1.6;
}

.videoGrid {
    columns: 1;
    column-gap: 1.5rem;
}

@media (min-width: 768px) {
    .videoGrid {
        columns: 2;
    }
}

@media (min-width: 1024px) {
    .videoGrid {
        columns: 3;
    }
}

.videoCard {
    break-inside: avoid;
    margin-bottom: 1.5rem;
    cursor: pointer;
}

.videoContainer {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: black;
    transition: transform 0.3s;
}

.videoContainer:hover {
    transform: translateY(-0.25rem);
}

.videoHorizontal {
    aspect-ratio: 16/9;
}

.videoVertical {
    aspect-ratio: 9/16;
}

.videoThumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
}

.videoContainer:hover .videoThumbnail {
    transform: scale(1.05);
}

.videoOverlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px; /* между кнопками */
}

.videoOverlayVisible {
    opacity: 0;
}

.videoOverlayVisible:hover {
    opacity: 1;
}

.fullscreenButton {
    background: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
    pointer-events: auto; /* кнопки кликабельны */
}

.playButton:hover,
.fullscreenButton:hover {
    background: #000;
}

/* Стиль для иконок внутри кнопок */
.playButton svg,
.fullscreenButton svg {
    width: 24px;
    height: 24px;
    fill: white;
}

.playButton {
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.2s;
}

.playButton:hover {
    background-color: white;
    transform: scale(1.1);
}

.videoInfo {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 1rem;
}

.videoTitle {
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.videoMeta {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.videoDuration {
    color: #d1d5db;
    font-size: 0.75rem;
}

.videoStatus {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    color: white;
}

/* CTA Section */
.cta {
    padding: 4rem 1rem;
    padding-top: 1rem;
    background-color: white;
}

.ctaContent {
    max-width: 64rem;
}

.ctaDescription {
    font-size: 1.125rem;
    color: #374151;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.ctaFeatures {
    margin-bottom: 2rem;
}

.ctaFeature {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.ctaBullet {
    width: 0.5rem;
    height: 0.5rem;
    background-color: black;
    border-radius: 50%;
}

/* Footer */
.footer {
    background-color: black;
    color: white;
    padding: 3rem 1rem;
}

.footerGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    text-align: center;
}

@media (min-width: 768px) {
    .footerGrid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.footerItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footerIcon {
    margin-bottom: 1rem;
}

.footerTitle {
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.footerText {
    color: #d1d5db;
}

.footerBottom {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #374151;
}

.footerCopyright {
    color: #9ca3af;
}
</style>
