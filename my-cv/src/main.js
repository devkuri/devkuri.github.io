import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Thêm lifecycle hook "mounted" vào ứng dụng Vue
app.mixin({
  mounted() {
    // Thêm các thẻ meta vào head
    const metaCharset = document.createElement("meta");
    metaCharset.charset = "UTF-8";
    document.head.appendChild(metaCharset);

    const metaXUACompatible = document.createElement("meta");
    metaXUACompatible.setAttribute("http-equiv", "X-UA-Compatible");
    metaXUACompatible.content = "IE=edge";
    document.head.appendChild(metaXUACompatible);

    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(metaViewport);

    // Thêm các thẻ link vào head
    const preconnectGoogleFonts = document.createElement("link");
    preconnectGoogleFonts.rel = "preconnect";
    preconnectGoogleFonts.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnectGoogleFonts);

    const preconnectGoogleFontsGstatic = document.createElement("link");
    preconnectGoogleFontsGstatic.rel = "preconnect";
    preconnectGoogleFontsGstatic.href = "https://fonts.gstatic.com";
    preconnectGoogleFontsGstatic.crossOrigin = "anonymous";
    document.head.appendChild(preconnectGoogleFontsGstatic);

    const linkGoogleFonts = document.createElement("link");
    linkGoogleFonts.rel = "stylesheet";
    linkGoogleFonts.href =
      "https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap";
    document.head.appendChild(linkGoogleFonts);

    const linkShortcutIcon = document.createElement("link");
    linkShortcutIcon.rel = "shortcut icon";
    linkShortcutIcon.href = "avt.png";
    linkShortcutIcon.type = "image/x-icon";
    document.head.appendChild(linkShortcutIcon);

    const linkBoxIcons = document.createElement("link");
    linkBoxIcons.rel = "stylesheet";
    linkBoxIcons.href = "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css";
    document.head.appendChild(linkBoxIcons);

    const linkComputerModernWebFont = document.createElement("link");
    linkComputerModernWebFont.rel = "stylesheet";
    linkComputerModernWebFont.type = "text/css";
    linkComputerModernWebFont.href =
      "https://cdn.rawgit.com/dreampulse/computer-modern-web-font/master/fonts.css";
    document.head.appendChild(linkComputerModernWebFont);

    // Đặt title
    document.title = "Davis";
  },
});

// Mount ứng dụng Vue
app.mount("#app");
