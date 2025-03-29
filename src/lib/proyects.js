import AstroIcon from "@components/icons/AstroIcon.astro";
import Chakraui from "@components/icons/Chakraui.astro";
import Elementor from "@components/icons/Elementor.astro";
import Wordpress from "@components/icons/Wordpress.astro";
import Firebase from "@components/icons/Firebase.astro";
import Framermotion from "@components/icons/Framermotion.astro";
import Nextjs from "@components/icons/Nextjs.astro";
import ReactIcon from "@components/icons/ReactIcon.astro";
import Sass from "@components/icons/Sass.astro";
import Tailwindcss from "@components/icons/Tailwindcss.astro";
import Axios from "@components/icons/Axios.astro";
import AntDesign from "@components/icons/AntDesign.astro";
import Css3 from "@components/icons/Css3.astro";
import Typescript from "@components/icons/Typescript.astro";
import Expo from "@components/icons/expo.astro";
import Sqlite from "@components/icons/Sqlite.astro";
import Drizzle from "@components/icons/Drizzle.astro";
import Swiper from "@components/icons/swiper.astro";

export const projects = [
  {
    id: 1,
    title: "TVMRD - Aplicación de Gestión de pedidos",
    description:
      "Una Progressive Web App (PWA) diseñada para gestionar órdenes en tiempo real, con notificaciones push integradas. Incluye filtros avanzados y una interfaz moderna y responsiva para facilitar la gestión de pedidos.",
    technologies: [
      { name: "Next.js", color: "bg-[#000]", icon: Nextjs },
      { name: "Chakra UI", color: "bg-[#0d867b]", icon: Chakraui },
      {
        name: "Framer Motion",
        color: "bg-[#f1e612] text-black",
        icon: Framermotion,
      },
      { name: "SASS", color: "bg-[#cc6699]", icon: Sass },
      { name: "Firebase", color: "bg-[#ff9100]", icon: Firebase },
      { name: "Axios", color: "bg-[#574088]", icon: Axios },
    ],
    features: [
      "PWA",
      "Notificaciones push mediante Firebase.",
      "Data fetching eficiente con Axios.",
      "Interfaz atractiva y animaciones fluidas gracias a Framer Motion.",
      "Diseño responsivo y tematizado con Chakra UI.",
      "Modo oscuro.",
    ],
    portada: "/images/tvm/portada-tvm.webp",
    video: "/videos/tvm.mp4",
    colorText: "text-[#ff283f]",
    bgColor: "bg-[#ff283f]",
    link: null,
    imagenes: [
      "/images/tvm/tvmrd.webp",
      "/images/tvm/customer.webp",
      "/images/tvm/newcustomer.webp",
      "/images/tvm/neworder.webp",
      "/images/tvm/stock.webp",
      "/images/tvm/stock_cantidad.webp",
      "/images/tvm/settings.webp",
    ],
  },
  {
    id: 2,
    title: "Starsisa POS - Punto de Venta - Muy fácil de usar",
    description:
      "Una aplicación web diseñada como un sistema de punto de venta (POS) intuitivo y rápido. Permite gestionar pedidos, productos y clientes con una interfaz limpia y moderna, optimizada para operaciones rápidas.",
    technologies: [
      { name: "React", color: "bg-[#345264]", icon: ReactIcon },
      { name: "Tailwind CSS", color: "bg-[#153c64]", icon: Tailwindcss },
      { name: "Axios", color: "bg-[#574088]", icon: Axios },
    ],
    features: [
      "PWA",
      "Login persistente con recordatorio de usuario",
      "Gestión eficiente de pedidos y productos.",
      "Asignacion de mesas",
      "Búsqueda y gestión de clientes",
      "Diseño responsivo y estilizado con Tailwind CSS.",
      "Interfaz intuitiva para una experiencia de usuario fluida.",
      "Optimizada para entornos de ventas rápidas.",
      "Modo oscuro.",
      "Edición de pedidos",
    ],
    portada: "/images/pos/portada-pos.webp",
    video: "/videos/starsisapos.mp4",
    colorText: "text-[#007bcc]",
    bgColor: "bg-[#007bcc]",
    link: null,
    imagenes: [
      "/images/pos/home-starsisapos.webp",
      "/images/pos/clientes-starsisapos.webp",
      "/images/pos/mesas-starsisapos.webp",
      "/images/pos/ordenes-starsisapos.webp",
      "/images/pos/productos-starsisapos.webp",
    ],
  },
  {
    id: 3,
    title: "Starsisa Ventas – App Móvil con Sincronización Offline ",
    description:
      "Aplicación móvil de ventas diseñada para vendedores en ruta. Permite gestionar pedidos de clientes con o sin conexión, sincronizar datos, exportar la base de datos local, y manejar información detallada de productos, clientes y pedidos. Interfaz simple, rápida y adaptable a cualquier dispositivo.",
    technologies: [
      { name: "Expo", color: "bg-[#000]", icon: Expo },
      { name: "TypeScript", color: "bg-[#153c64]", icon: Typescript },
      { name: "SQLite", color: "bg-[#3b6c9b]", icon: Sqlite },
      { name: "Drizzle ORM", color: "bg-[#000]", icon: Drizzle },
      { name: "Css", color: "bg-[#950841]", icon: Css3 },
    ],
    features: [
      "Login persistente con recordatorio de usuario",
      "Búsqueda y gestión de clientes",
      "Selección de productos y cantidades",
      "Creación y edición de pedidos",
      "Modo offline con exportación y sincronización",
      "Gestión de base de datos local (SQLite)",
      "Interfaz intuitiva tipo POS",
      "Control de permisos administrativos",
    ],
    portada: "/images/sventas/portada.webp",
    video: "/videos/starsisa_ventas.mp4",
    colorText: "text-[#264162]",
    bgColor: "bg-[#264162]",
    link: null,
    imagenes: ["/images/sventas/img-1.png"],
  },
  {
    id: 4,
    title: "The Vape Market RD – Plataforma de Comercio Electrónico",
    description:
      "Desarrollo de una plataforma de comercio electrónico para The Vape Market RD, permitiendo a los clientes navegar por productos de vapeo, gestionar sus carritos de compra y realizar pedidos en línea. La aplicación ofrece una experiencia de usuario fluida y segura, con funcionalidades como autenticación de usuarios, notificaciones y gestión de estados de pedidos.",
    technologies: [
      { name: "Next.js", color: "bg-[#000]", icon: Nextjs },
      { name: "TypeScript", color: "bg-[#153c64]", icon: Typescript },
      { name: "Tailwind CSS", color: "bg-[#153c64]", icon: Tailwindcss },
      { name: "Axios", color: "bg-[#574088]", icon: Axios },
      { name: "Swiper", color: "bg-[#21242a]", icon: Swiper },
      { name: "React Toastify", color: "bg-[#97ca00]", icon: null },
      { name: "JSON Web Tokens (JWT)", color: "bg-[#d748de]", icon: null },
    ],
    features: [
      "Autenticación de usuarios con JWT",
      "Interfaz de usuario responsiva y moderna",
      "Gestión de productos y categorías",
      "Carrito de compras y seguimiento de pedidos",
      "uso de middleware para proteger rutas",
      "Renderizado del lado del servidor (SSR) para mejorar el SEO y el tiempo de carga inicial",
      "Uso de middleware personalizado para la protección y control de acceso a rutas",
      "Implementación de las últimas mejoras de Next.js para optimizar el rendimiento y la experiencia del usuario",
    ],
    portada: "/images/ecommerce/portada.webp",
    video: "/videos/tvm-tienda.mp4",
    colorText: "text-[#c01e2d]",
    bgColor: "bg-[#c01e2d]",
    link: null,
    imagenes: ["/images/ecommerce/img-1.png"],
  },
  {
    id: 5,
    title: " Plataforma de firma documental (Defensa Civil Dominicana)",
    description:
      "Sistema de automatización documental con firma digital jerárquica. Permite subir, firmar y enviar documentos de forma ordenada, asignando tareas por niveles de responsabilidad. Proyecto institucional no finalizado por tema contractual.",
    portada: "/images/dc/portada.webp",
    video: "/videos/dc.mkv",
    bgColor: "bg-[#ff7001]",
    link: null,
    colorText: "text-[#ff7001]",
    features: [
      "Interfaz intuitiva para una experiencia de usuario fluida.",
      "Diseño responsivo y estilizado con Tailwind CSS.",
      "Firma digital",
      "Asignación de tareas",
    ],
    technologies: [
      { name: "React", color: "bg-[#345264]", icon: ReactIcon },
      { name: "Tailwind CSS", color: "bg-[#153c64]", icon: Tailwindcss },
      { name: "Axios", color: "bg-[#574088]", icon: Axios },
    ],
    imagenes: ["/images/dc/img-2.png", "/images/dc/img-1.png"],
  },
  {
    id: 6,
    title: "MagiManía – Plataforma de Canje de Premios",
    description:
      "Sistema web donde los usuarios acumulan stickers por compras y los canjean por productos físicos como dispositivos y pods. Cuenta con autenticación, selección de sucursal, control de premios por usuario y un diseño visual atractivo con temática mágica.",
    portada: "/images/magimania/portada.webp",
    video: "/videos/magimania.mp4",
    bgColor: "bg-[#64075b]",
    colorText: "text-[#64075b]",
    link: null,
    features: [
      "Login, registro y recuperación de contraseña",
      "Control de stickers por usuario y por sucursal",
      "Canjeo de premios con lógica condicional",
      "UI responsiva con estilo promocional",
      "Integración con API externa (axios)",
      "Navegación con Wouter (SPA ligera)",
      "Diseño con Ant Design + Sass custom",
    ],
    technologies: [
      { name: "React", color: "bg-[#345264]", icon: ReactIcon },
      { name: "SASS", color: "bg-[#cc6699]", icon: Sass },
      { name: "Axios", color: "bg-[#574088]", icon: Axios },
      { name: "Ant Desing", color: "bg-[#0a1d36]", icon: AntDesign },
    ],
    imagenes: ["/images/magimania/img-2.png", "/images/magimania/img-1.png"],
  },
  {
    id: 7,
    title: "Pagina oficial de starsisa",
    description:
      "El sitio web fue desarrollado como una plataforma corporativa que refleja la identidad de la empresa y su enfoque en soluciones ERP y puntos de venta. Diseñado para destacar la experiencia de la marca, el proyecto combina una interfaz intuitiva con un diseño moderno y funcional, proporcionando a los usuarios una experiencia informativa y profesional que conecta directamente con los valores y servicios de la empresa.",
    technologies: [
      { name: "Astro", color: "bg-[#ff5612]", icon: AstroIcon },
      { name: "Tailwind CSS", color: "bg-[#153c64]", icon: Tailwindcss },
    ],
    features: [
      "Internationalización en 4 idiomas.",
      "Enrutamiento con Internationalización (i18n).",
      "Optimizada para SEO.",
      "Interfaz intuitiva para una experiencia de usuario fluida.",
      "Diseño responsivo y estilizado con Tailwind CSS.",
    ],
    portada: "/images/landing-starsisa.webp",
    video: "/videos/landing-starsisa.mp4",
    colorText: "text-[#007bcc]",
    bgColor: "bg-[#007bcc]",
    link: "https://automovil.starsisa.com/",
    imagenes: [],
  },
  {
    id: 8,
    title: "Technosupportdr ",
    description:
      "El proyecto de desarrollo del sitio web para TechnoSupportDR se centró en crear una plataforma digital que reflejara la identidad de la empresa y su compromiso con soluciones tecnológicas integrales. El diseño se enfocó en una interfaz intuitiva y moderna, facilitando a los usuarios el acceso a información sobre servicios de soporte técnico, seguridad de videovigilancia y sistematizaciones. La estructura del sitio permite una navegación fluida, destacando la experiencia y profesionalismo de TechnoSupportDR en el sector tecnológico.",
    technologies: [
      { name: "Wordpress", color: "bg-[#28799e]", icon: Wordpress },
      { name: "Elementor", color: "bg-[#950841]", icon: Elementor },
    ],
    features: ["Diseño de páginas web"],
    portada: "/images/technosupportdr.webp",
    video: null,
    colorText: "text-[#2484c6]",
    bgColor: "bg-[#2484c6]",
    link: "https://www.technosupportdr.com/",
    imagenes: [],
  },
];
