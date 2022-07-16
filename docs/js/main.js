var title = new Vivus('title', {
  start: 'manual',
  duration: 100,
  forceRender: false,
  animTimingFunction: Vivus.EASE,
})

$(window).on('load', function () {
  title.play()
})

$('#wave1').wavify({
  height: 10,
  bones: 3,
  amplitude: 40,
  color: '#293396',
  speed: 0.2,
})

$('#wave2').wavify({
  height: 10,
  bones: 4,
  amplitude: 40,
  color: '#1C257A',
  speed: 0.24,
})

$('#wave3').wavify({
  height: 10,
  bones: 3,
  amplitude: 40,
  color: '#19205B',
  speed: 0.28,
})

$('#wave4').wavify({
  height: 10,
  bones: 5,
  amplitude: 40,
  color: '#14183D',
  speed: 0.3,
})

const scene1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-1',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene1.to('#moon-circle', {
  keyframes: [
    {
      duration: 5,
      width: 400,
      height: 400,
      top: 0,
    },
  ],
})

scene1.to('#title-box', {
  opacity: 0,
})

const scene2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-2',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene2.fromTo(
  '#wave-box1',
  {
    bottom: -600,
  },
  {
    keyframes: [
      { duration: 5, bottom: -20 },
      { duration: 10, bottom: 20 },
      { duration: 8, bottom: '101vh' },
    ],
    ease: 'power2.out',
  },
)

scene2.fromTo(
  '#wave-box2',
  {
    bottom: -600,
  },
  {
    keyframes: [
      { duration: 5, bottom: -60 },
      { duration: 9, bottom: -20 },
      { duration: 8, bottom: '101vh' },
    ],
    ease: 'power2.out',
  },
  '<1',
)

scene2.fromTo(
  '#wave-box3',
  {
    bottom: -600,
  },
  {
    keyframes: [
      { duration: 5, bottom: -100 },
      { duration: 8, bottom: -60 },
      { duration: 8, bottom: '101vh' },
    ],
    ease: 'power2.out',
  },
  '<1',
)

scene2.fromTo(
  '#wave-box4',
  {
    bottom: -600,
  },
  {
    keyframes: [
      { duration: 5, bottom: -140 },
      { duration: 7, bottom: -100 },
      { duration: 8, bottom: '101vh' },
    ],
    ease: 'power2.out',
  },
  '<1',
)

scene2.fromTo(
  '#under-the-sea',
  {
    top: '100vh',
  },
  {
    keyframes: [
      {
        duration: 8,
        top: -20,
        background: '#14183D',
      },
    ],
    ease: 'power3.out',
  },
  '<5',
)

const scene3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-3',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene3.fromTo(
  '#moonlight-overlay',
  {
    opacity: 0,
  },
  {
    keyframes: [
      {
        duration: 7,
        opacity: 1,
      },
      {
        duration: 7,
        opacity: 0,
      },
    ],
  },
)

scene3.fromTo(
  '#text-box1',
  {
    opacity: 0,
  },
  {
    keyframes: [
      {
        duration: 2,
        opacity: 1,
      },
      {
        duration: 8,
        opacity: 1,
      },
      {
        duration: 2,
        opacity: 0,
      },
    ],
  },
  '<2',
)

const scene4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-4',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene4.fromTo(
  '#jellyfish-r',
  {
    right: -200,
    top: 200,
  },
  {
    keyframes: [
      {
        duration: 16,
        right: '100vw',
        top: 600,
      },
    ],
    ease: 'power1.out',
  },
)

scene4.fromTo(
  '#text-box2',
  {
    opacity: 0,
  },
  {
    keyframes: [
      {
        duration: 2,
        opacity: 1,
      },
      {
        duration: 8,
        opacity: 1,
      },
      {
        duration: 2,
        opacity: 0,
      },
    ],
  },
  '<2',
)

const scene5 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-5',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene5.fromTo(
  '#light-overlay',
  {
    opacity: 0,
  },
  {
    keyframes: [
      { duration: 10, opacity: 1 },
      { duration: 2, opacity: 0 },
    ],
  },
)

scene5.fromTo(
  '#text-box3',
  {
    opacity: 0,
  },
  {
    keyframes: [
      {
        duration: 2,
        opacity: 1,
      },
      {
        duration: 8,
        opacity: 1,
      },
      {
        duration: 2,
        opacity: 0,
      },
    ],
  },
  '<1',
)

const scene6 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-6',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene6.fromTo(
  '#dark-overlay',
  {
    opacity: 0,
  },
  {
    keyframes: [
      { duration: 10, opacity: 1 },
      { duration: 2, opacity: 0 },
    ],
  },
)

scene6.fromTo(
  '#text-box4',
  {
    opacity: 0,
  },
  {
    keyframes: [
      {
        duration: 2,
        opacity: 1,
      },
      {
        duration: 8,
        opacity: 1,
      },
      {
        duration: 2,
        opacity: 0,
      },
    ],
  },
  '<0',
)

const scene7 = gsap.timeline({
  scrollTrigger: {
    trigger: '#gsap-trigger-7',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: true,
  },
})

scene7.fromTo(
  '#mogusa1',
  {
    opacity: 0,
    left: '-50vw',
  },
  {
    keyframes: [
      { duration: 4, left: '-10vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
)

scene7.fromTo(
  '#text-box5',
  {
    opacity: 0,
  },
  {
    keyframes: [
      {
        duration: 2,
        opacity: 1,
      },
      {
        duration: 10,
        opacity: 1,
      },
      {
        duration: 2,
        opacity: 0,
      },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa2',
  {
    opacity: 0,
    right: '-150vw',
  },
  {
    keyframes: [
      { duration: 4, right: '-110vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<0',
)

scene7.fromTo(
  '#mogusa3',
  {
    opacity: 0,
    left: '-60vw',
  },
  {
    keyframes: [
      { duration: 4, left: '-7vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa4',
  {
    opacity: 0,
    right: '-170vw',
  },
  {
    keyframes: [
      { duration: 4, right: '-109vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa5',
  {
    opacity: 0,
    left: '-50vw',
  },
  {
    keyframes: [
      { duration: 4, left: '-4vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa6',
  {
    opacity: 0,
    right: '-150vw',
  },
  {
    keyframes: [
      { duration: 4, right: '-102vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa7',
  {
    opacity: 0,
    left: '-50vw',
  },
  {
    keyframes: [
      { duration: 4, left: '-8vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa8',
  {
    opacity: 0,
    right: '-160vw',
  },
  {
    keyframes: [
      { duration: 4, right: '-120vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa9',
  {
    opacity: 0,
    left: '-40vw',
  },
  {
    keyframes: [
      { duration: 4, left: '-6vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa10',
  {
    opacity: 0,
    right: '-170vw',
  },
  {
    keyframes: [
      { duration: 4, right: '-104vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa11',
  {
    opacity: 0,
    left: '-50vw',
  },
  {
    keyframes: [
      { duration: 4, left: '-4vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)

scene7.fromTo(
  '#mogusa12',
  {
    opacity: 0,
    right: '-180vw',
  },
  {
    keyframes: [
      { duration: 4, right: '-110vw', opacity: 1 },
      { duration: 6, opacity: 1 },
      { duration: 4, opacity: 0 },
    ],
  },
  '<.5',
)
