<template>
  <div id="main" data-animate-in="fade">
    <div class="container">
      <div
        data-name="header"
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <NuxtLink to="/"><logo /></NuxtLink>
        <nav class="space-x-8">
          <NuxtLink to="/">· home</NuxtLink>
          <NuxtLink to="/services">· services</NuxtLink>
          <!-- <NuxtLink to="/our-work">· our work</NuxtLink> -->
        </nav>
      </div>
      <div id="grad-text" data-name="mid-section" class="relative">
        <main
          class="lg:mt-10 xl:mt-32 pt-16 pb-16 w-2/3 text-justify"
          style="border-left: 1px dashed #444444"
        >
          <p
            class="relative pl-4"
            style="
              font-size: 20px;
              line-height: 110%;
              /* or 28px */

              letter-spacing: -0.07em;
            "
          >
            We are not a marketing agency. We are a small studio specialising in
            digital design, website development, UX and UI. We offer the skills
            and experience of an agency without the overheads and markup.
          </p>
          <img
            class="absolute right-0"
            src="~assets/images/four-rooms.svg"
            alt=""
          />
          <!-- <svg
            id="box5"
            data-animate-in="left"
            class="absolute right-0"
            width="22"
            height="175"
            viewBox="0 0 22 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.91278e-05 22H21.0977V43.0976H5.91278e-05V22Z"
              fill="#A2998A"
            />
            <path
              d="M5.91278e-05 0L21.0977 0V21.0976H5.91278e-05V0Z"
              fill="#007CA8"
            />
            <path
              d="M5.91278e-05 73H21.0977V94.0976H5.91278e-05V73Z"
              fill="#FF3A5E"
            />
            <path
              d="M5.91278e-05 110H21.0977V131.098H5.91278e-05V110Z"
              fill="#9E9888"
            />
            <path
              d="M5.91278e-05 153H21.0977V174.098H5.91278e-05V153Z"
              fill="#FFEA7B"
            />
          </svg> -->
        </main>
      </div>
      <section class="flex justify-between w-2/3" style="margin-top: 2px">
        <div
          class="pl-4 pb-10 pt-10"
          style="
            font-size: 32px;
            line-height: 108.1%;
            /* identical to box height, or 35px */

            letter-spacing: -0.07em;
            font-weight: 600;
            border-left: 1px dashed #444444;
          "
        >
          Discover
          <div>
            <ul
              class="mt-10"
              style="
                font-weight: normal;
                font-size: 20px;
                line-height: 120%;
                /* or 31px */

                letter-spacing: -0.07em;
              "
            >
              <li>Listen</li>
              <li>Question</li>
              <li>Collaborate</li>
              <li>Research</li>
              <li>Prototype</li>
            </ul>
          </div>
        </div>
        <div
          class="pl-4 pb-10 pt-10"
          style="
            font-size: 32px;
            line-height: 108.1%;
            /* identical to box height, or 35px */

            letter-spacing: -0.07em;
            font-weight: 600;
            border-left: 1px dashed #444444;
          "
        >
          Design
          <div>
            <ul
              class="mt-10"
              style="
                font-weight: normal;
                font-size: 20px;
                line-height: 120%;
                /* or 31px */

                letter-spacing: -0.07em;
              "
            >
              <li>Digital</li>
              <li>UX / UI</li>
              <li>Print</li>
              <li>Motion</li>
              <li>Illustration</li>
            </ul>
          </div>
        </div>
        <div
          class="pl-4 pb-10 pt-10"
          style="
            font-size: 32px;
            line-height: 108.1%;
            /* identical to box height, or 35px */

            letter-spacing: -0.07em;
            font-weight: 600;
            border-left: 1px dashed #444444;
          "
        >
          Develop
          <div>
            <ul
              class="mt-10"
              style="
                font-weight: normal;
                font-size: 20px;
                line-height: 120%;
                /* or 31px */

                letter-spacing: -0.07em;
              "
            >
              <li>Full-stack</li>
              <li>Accessibility</li>
              <li>Ecommerce</li>
              <li>SEO / QA</li>
              <li>Cloud Hosting</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";

export default {
  components: {
    Logo,
  },

  loading: {
    color: "blue",
    height: "300px",
  },

  mounted() {
    setTimeout(() => {
      const main = document.getElementById("main");
      main.classList.add("in-view");
    }, 200);

    setTimeout(() => {
      const grad = document.getElementById("grad-text");
      grad.classList.add("in-view");
    }, 400);

    setTimeout(() => {
      const box1 = document.getElementById("box1");
      box1.classList.add("in-view");
    }, 500);

    setTimeout(() => {
      const box2 = document.getElementById("box2");
      box2.classList.add("in-view");
    }, 700);

    setTimeout(() => {
      const box3 = document.getElementById("box3");
      box3.classList.add("in-view");
    }, 900);

    setTimeout(() => {
      const box4 = document.getElementById("box4");
      box4.classList.add("in-view");
    }, 1100);
  },
};
</script>

<style lang="scss">
@import "../assets/index.scss";

[data-animate-in] {
  opacity: 0;
  transition: transform 1s ease, opacity 1s ease;
}
[data-animate-in="up"] {
  transform: translate3d(0, 12px, 0);
}

[data-animate-in="left"] {
  transform: translate3d(-25%, 0, 0);
}
[data-animate-in="right"] {
  transform: translate3d(25%, 0, 0);
}
[data-animate-in="down"] {
  transform: translate3d(0, -12px, 0);
}
[data-animate-in="fade"] {
  transform: translate3d(0, 0, 0);
}
[data-animate-in].in-view {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.bg-gradient {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(~assets/images/main-bg.svg) center/cover;
}

.rotate-l {
  transform: rotate(0deg) !important;
  margin-top: 12px !important;
  transition: transform 2s ease;
}

.rotate-180 {
  transform: rotate(180deg) !important;
  transition: transform 3s ease;
}

.center {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
}

.main-text {
  font-size: 100px;
  line-height: 108.1%;
  /* or 108px */

  letter-spacing: -0.07em;
}

.text-gradient-blue {
  background: linear-gradient(89.46deg, #2188ff 0.87%, #804eda 75.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-purple {
  background: linear-gradient(87.54deg, #9867f0 -6.8%, #ed4e50 84.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-red {
  background: linear-gradient(
    53.13deg,
    #ffd33d 0%,
    #fb8532 19.02%,
    #ea4a5a 37.19%,
    #8a63d2 56.92%,
    #2188ff 79.93%,
    #34d058 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-pink {
  background: linear-gradient(
    92.05deg,
    #bca1f7 12.09%,
    #e577b4 42.58%,
    #ff7170 84.96%
  );
  padding-right: 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.text-gradient-teal {
  background: linear-gradient(
    92.05deg,
    #bca1f7 12.09%,
    #dcd9ff 42.58%,
    #58ecd4 84.96%
  );
  padding-right: 4px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient {
  background: linear-gradient(
    270.97deg,
    #ffe580 -21.36%,
    #ff7571 -2.45%,
    #ea5dad 26.84%,
    #c2a0fd 64.15%,
    #3bf0e4 108.29%,
    #b2f4b6 159.03%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
