/**
 * Достоверные данные о детском саде «Шапағат».
 * Всё, что пока неизвестно, оставлено как null — интерфейс сам скрывает
 * соответствующие кнопки/блоки, пока данные не будут добавлены.
 */
export const site = {
  name: "Шапағат",
  phone: {
    display: "87132 76 9 82",
    href: "tel:8713276982",
  },
  hoursPerDay: "10,5",
  groupsCount: 2,
  mealsPerDay: 4,
  instagramReel: "https://www.instagram.com/reel/DfpTKfeIKNz/?dlrf=MXA0aHBtd2lodzhxaQ==",

  /** WhatsApp: укажите номер в формате 77XXXXXXXXX — появится кнопка «WhatsApp». */
  whatsapp: null as string | null,

  /** Google Drive с документами: вставьте ссылку — появится кнопка «Құжаттарды ашу». */
  documentsDriveUrl: null as string | null,

  map: {
    /** Поиск адреса в 2GIS (без вымышленных координат). */
    searchUrl: "https://2gis.kz/search/" + encodeURIComponent("Қайыңды, Бейбітшілік көшесі, 1"),
    /**
     * Ссылка на виджет 2GIS (https://widgets.2gis.com) или iframe-URL карточки организации.
     * Когда появится — вместо иллюстрации будет показана интерактивная карта.
     */
    embedUrl: null as string | null,
  },

  /**
   * Фото для главной и раздела «О нас».
   * Положите файлы в /public/media/ и укажите путь и размеры, например:
   * { src: "/media/hero.jpg", width: 1600, height: 1200 }
   */
  heroPhoto: null as Photo | null,
  aboutPhoto: null as Photo | null,
  groupPhotos: {
    junior: null as Photo | null,
    senior: null as Photo | null,
  },
} as const;

export type Photo = { src: string; width: number; height: number };

/** Кружки: confirmed = false — показываются как «уточняется». */
export type Club = {
  id: "speech" | "dance" | "taekwondo";
  confirmed: boolean;
};

export const clubs: Club[] = [
  { id: "speech", confirmed: false },
  { id: "dance", confirmed: false },
  { id: "taekwondo", confirmed: false },
];

export const sectionIds = [
  "home",
  "about",
  "groups",
  "nutrition",
  "clubs",
  "gallery",
  "documents",
  "contacts",
] as const;

export type SectionId = (typeof sectionIds)[number];
