<template>
  <div
    style="background-color: #141618"
    id="main"
    data-animate-in="fade"
    class="relative"
  >
    <img
      class="hidden lg:block absolute w-full"
      style="top: 25%"
      id="comming-soon"
      src="../assets/images/landing-line-top.svg"
      alt=""
    />
    <img
      class="py-44"
      id="comming-soon"
      data-animate-in="fade"
      src="../assets/images/comming-soon.svg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      const main = document.getElementById("main");
      main.classList.add("in-view");
    }, 300);

    setTimeout(() => {
      const grad = document.getElementById("grad-text");
      grad.classList.add("in-view");
    }, 400);

    setTimeout(() => {
      const box1 = document.getElementById("box1");
      box1.classList.add("in-view");
    }, 700);

    setTimeout(() => {
      const box2 = document.getElementById("box2");
      box2.classList.add("in-view");
    }, 600);

    setTimeout(() => {
      const box3 = document.getElementById("box3");
      box3.classList.add("in-view");
      const box4 = document.getElementById("box4");
      box4.classList.add("in-view");
    }, 1200);

    setTimeout(() => {
      const box5 = document.getElementById("box5");
      box5.classList.add("in-view");
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
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

.main-text {
  font-size: 100px;
  line-height: 108.1%;
  /* or 108px */

  letter-spacing: -0.07em;
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