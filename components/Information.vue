<template>
  <div class="in-container">
    <a-row>
      <a-col :span="8" class="color-overlay">
        <div class="clip-path">
          <h3 class="text-title">MY BIO</h3>
        </div>
      </a-col>
      <transition name="fade">
        <a-col :span="16" class="block-information" :style="styleObject">
          <IntroduceCard />
          <h6 class="title">OBJECTIVE</h6>
          <p class="sub-title" align="justify">
            Software Engineer with 2+ years of experience working mainly with
            Javascript, ReactJS seeking for new interesting job opportunities to
            continue developing the related core skills and extend the tech
            stack proficiency even further. My mid/long term career goal is to
            become a highly proficient and respected senior engineer or even an
            architect who will bring great value to the company in terms of
            project development but also to help bring up new talented and
            qualified resources.
          </p>

          <div class="overlay" />
        </a-col>
      </transition>
      <transition name="slide-fade">
        <p class="idiom">{{ currentIdiom }}</p>
      </transition>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgrounds: [
        'https://lh3.googleusercontent.com/pw/AM-JKLUylKL0i-GKXFlWJ83FM4YeSj9G_DefWWrcW6AqsZ8_ci3CgnR2W0FcclLSRv62PgHMZsIP2BkWG3vSUPYH_qOmT4Mu6QxBQAnTKcA2bTXGlr8oKhchpo7hESK62kF6V26qQYTkGGvO9E-vOlt-qg_9jA=w1250-h937-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLVnwf-Ju1MNNnXHuSmgCLDI-9FPa6v1Im4oXKAgmujAZ8kh_i3am99vuWBOKuvWjF7MaFQTVfCdsxlJTE7YDGVwETAVudUVES4UxUGaGhI0lCKbxxD6vsz6QpGhfItjegroL-BQ9PCs5EkTzpdqClHZew=w1406-h937-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLWCECY_fftBAhIGszqukF30fHcMkFDf9iwcQQpbX9hojeByVsJZ779jjWxPj-iVi9AgmuBBHW6QrFM1B2DQDTOGXI-9C4x7RgTyPH32pE94d2bMozW94ucXz5X7phknU2WrYZCE5Enh51bD2veegrMUDA=w1920-h887-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLXwHBqpR1OElAMwHY-Et1ex4lld4wRQKFCOA1yhLpUxhYl0pG6IwInP1NxYYRs_yLo-HzZEfU4aSVNlsO2Tq41zbV72geO6Bl_IdfTivYCT1XDfOJuIrsMZXQuqUW1AhSM69pb_rUj8k_eQhtYlm5spaQ=w1406-h937-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLVbpVZAsor8vGJkdSFhCYpUyxKQ2wczJWYclwXcD5CR4P6fN6ujEFCk98xViIfKIrresq_Afzqo96AoSL62H_rFWsDQ-3gm0xrajM_GxEPgD13HMiedl5iSq3bsQnrEcCP80_rBJsUI6WcgZt7T3p0JGQ=w1406-h937-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLWswDDh_8k-I6TjuQtyDIdylo_Jk9RBAmrRZ3RZ3GaqAxHSXzYPyq-GdEi0z6liJ19E2WhFk5V8tFuGMAMJy_txyJm47hTb_3Q1NMVd5tMNL2sFTJLCZcb2cXtiNh4uW8B-uwAa_S7wHwdW6mczvy61zw=w1406-h937-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLUEJ15ohfaTYljNawww07MMLsu4MGRHOpty5VJu1Ll-K9N5Jrt2kvhzsFXl8zs7bc0aEVnMT-3TsGlqj3HeQQuJ3-18h8dULOcZKlNE3Z11ycnvBLpRziuFVWy8GGDJ5OabTltuaj5dbQUjfd-p_tMfkg=w1406-h937-no?authuser=1',
        'https://lh3.googleusercontent.com/pw/AM-JKLXbyfJpJwC6-gJ7QfP5iHb-87_0L297PPM9FXSHAi6jWEnnftnZMpfasMxZ3yS4HQpGdwARRYXj1oI3huIEy63vTUUshk3OOhzHlB1NBq7RbrJ1j5ZuyfBOdbch2-pFcrCyuspPpN-434crYphbNtmDaQ=w1406-h937-no?authuser=1',
        'https://lh3.google.com/pw/AM-JKLUDEkKKjRVsajrNjBTwTvJk0gxfdyBs6dy-tSawvMhLa1k4b-H7HW5HYq0Js2D9uD3UqhXIPkF28OUz1jg8nDn0c2w8d9E=w1406-h937-no?authuser=1',
        'https://lh3.google.com/pw/AM-JKLUFqdRzCGUKR3lBcdS8zQU-s-pvpJhxIhpKDgtynFOjDazR9dccoqTMOB3yy16-vPAXAMZ3ZCqgMq2bZwHjoBWZu5gIA7U=w1406-h937-no?authuser=1',
        'https://lh3.google.com/pw/AM-JKLUo84_kblCvlmnd3pNHdYr53nHY3XMjmNkIqoAJby0m74TwuN0fP71VmJ7nomlTeIYNTIgUcBd70L6NNKB-wDqwATPFKMg=w1920-h887-no?authuser=1',
        'https://lh3.google.com/pw/AM-JKLWN9jQKmPeHn4uQ-jMOUXjufZdiRMNBV7_2qMidvKnU3S7FIyfPwOEQUanmcDShzPb639gFaqWQuqCmLwPsCu0HYbWWckk=w1406-h937-no?authuser=1',
      ],
      idioms: [
        'The best caches are like the best hugs. Warm',
        'What do you call a two-legged ghost cow? Boolean Beef.',
        'Save you sass for CSS. Everywhere else be kind.',
        'Two CSS properties walk into a bar. A barstool in a completely different bar falls over.',
        'There are 10 kinds of people, those who understand binary and those who dont',
        'Im the CSS to your HTML.',
        'What did the colon say to the semicolon? Stop winking at me.',
        'We would have called your functions earlier, but we were in a bind.',
        'Old programmers never die; they just lose some of their functions.',
        'The Pen is mightier than the sword.',
        'If you want to flex your skill and go off the grid, try coding a layout with float.',
        'How do you comfort a Javascript bug? You console it!',
      ],
      curentBackdround:
        'https://lh3.google.com/pw/AM-JKLWwxdjZVo6a8ZeRl7axgafrSSN1BvNEjgyH5pg2kukVxI4FX-r8zQG8Daa4fkbU48pjrssdjF-iFiWU1gqioI2nw-vR=w1406-h937-no?authuser=1',
      currentIdiom: 'How do you comfort a Javascript bug? You console it!',
    }
  },
  computed: {
    styleObject() {
      return {
        background: `url(${this.curentBackdround})`,
        animation: 'appearlImage 1s ease-out',
        transition: 'all 2s ease',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    },
  },
  mounted() {
    setInterval(() => this.setCurrentBackgroundAndIdiom(), 6000)
  },
  methods: {
    setCurrentBackgroundAndIdiom() {
      const randomIndex = Math.floor(Math.random() * 12)
      this.curentBackdround = this.backgrounds[randomIndex]
      this.currentIdiom = this.idioms[randomIndex]
    },
  },
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.in-container {
  height: 100vh;
  position: relative;
  clip-path: polygon(100% 0, 100% 86%, 81% 100%, 0 70%, 0 0);

  .ant-row {
    height: 100%;

    .color-overlay {
      background: @gold-6;
      height: 100%;

      .clip-path {
        width: 300px;
        height: 620px;
        background: @purple-10;
        clip-path: polygon(0 0, 59% 0, 58% 54%, 0 79%);
      }
    }

    .block-information {
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 250px;
      position: relative;
      color: @gold-6;

      .title {
        font-size: 80px;
        margin: 0;
        color: @gold-6;
        z-index: 2;
      }

      .sub-title {
        font-size: 20px;
        max-width: 500px;
        z-index: 2;
        font-weight: 300;
      }

      .overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        left: 0;
        z-index: 0;
      }
    }
  }

  .idiom {
    color: #fff;
    font-family: 'Tangerine', cursive;
    font-size: 30px;
    font-weight: 900;
    position: absolute;
    bottom: 130px;
    right: 30px;
    animation: appear 1s ease-out;
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    z-index: 2;
  }

  @keyframes appearlImage {
    0% {
      height: 0;
    }
    100% {
      height: 100;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
  }

  @media only screen and (max-width: 992px) {
    .color-overlay {
      display: none;
    }

    .ant-row .block-information {
      width: 100%;
      display: block;
      padding: 10px;
      .sub-title {
        max-width: 100%;
        font-size: 18px;
      }
      .title {
        margin-top: 100px;
        font-size: 60px;
      }

      .overlay {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .ant-row .block-information {
      .title {
        display: none;
      }
      .sub-title {
        margin-top: 180px;
        font-size: 14px;
      }
    }
    .idiom {
      display: none;
    }
  }
}
</style>
