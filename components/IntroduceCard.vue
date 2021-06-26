<template>
  <a-card class="introduce-card">
    <a-avatar
      src="https://lh3.googleusercontent.com/sckJkECKP4cFx-I51eDKOT56e6qz6mzkuWNYxphrpNKxWBHu2lUOtlCecGnQSl1d5ofEzK-PT1h6jrLmYqu4RgFiu_wpLLMHAZXSRiXCD1A-IjDbGiish42k87BQEELTYkK_P1WJf6-JdtPa-LJw6_MtyzDtLEWgmiKcTub6k4MZapeg-KSFbkd8AA89q5x6aZq_xmj5rrQxrmKyFCSEWUJt6o0BTjH85VMbe1w_VxqUjp1nrIzdOiL3Fh_sEuwCzk-8MvyUMaRPOvFwAXr4RqFtN5kfdko5D6kGxCxrdrQzupIH4-0fxuhirPo37DeC2aHi2oU_j3Umoy1Wu_Jg9nLrcIlfVjkPBdxzZ9ypJKcL34oLGMC53RDYAxLksqKxn6QzxFsNX7CXOEA6I7VVep9uaFDEDpPDsiaQWLzYQ3swdux3ayer7LkCWIuDR5yoa47f0l04Tpnbkv-zJXiyisIDL3R1sJCzoKDMWAXzr5YKyp_J_ftFfgZPpN839xw8dM9gh1I-Z7Y_T5RJMt0AlOx7kMEt_R83z4yuPDuKalhTVwv_rN5_kcXgrZ2KmFEipgfz7zOA8GZnzIXZth_ktKnIurMR3-cuU3JmhImxJeguIwlne80s0U3bAG8ThSuC3pb0TF_YsRw1AtDy4r_OupmnkuaHiAVCOtP2Y2MXPxRQTkGMkSb9Z2kMzMOw1eHlqro-K8QgOEKMvSTssFRzNjEd-KPClWuStvGTFBun-62J57B9cpYmr6gU6l8gLvp2JPt35jBfIgWcBRzPdA=w1124-h749-no?authuser=0%22"
    />
    <h6 class="name">NGUYEN LE THI MY LINH</h6>
    <div class="divider" />
    <p class="major">FRONTEND WEB DEVELOPER</p>
    <div class="contact">
      <a-row>
        <a-col :span="12">
          <p class="contact-item">
            <a-icon type="calendar" theme="filled" /> 31/05/1998
          </p>
        </a-col>
        <a-col :span="12">
          <p class="contact-item">
            <a-icon type="phone" theme="filled" /> 0394702603
          </p>
        </a-col>
      </a-row>
      <div class="mail-adress">
        <p class="contact-item">
          <a-icon type="mail" theme="filled" /> nglethimylinh@gmail.com
        </p>
        <p class="contact-item">
          <a-icon type="environment" theme="filled" /> 240 Cu Xa Duong Sat,
          District 3
        </p>
      </div>
    </div>
    <div class="social">
      <a
        href="https://www.facebook.com/profile.php?id=100006955954237"
        target="_blank"
      >
        <img
          src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
        />
      </a>
      <a href="https://www.linkedin.com/in/nltmlinh/" target="_blank">
        <img
          src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
        />
      </a>
    </div>
  </a-card>
</template>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.introduce-card {
  animation: 1s appear;
  position: absolute;
  top: 30%;
  left: -200px;
  background: @gold-3;
  border: 10px solid @gold-3;
  text-align: center;
  padding: 20px;
  box-shadow: 0 8px 8px 0 rgba(103, 151, 255, 0.11),
    0 12px 18px 0 rgba(103, 151, 255, 0.11);

  .ant-avatar {
    width: 220px;
    height: 220px;
    margin-top: -150px;
  }

  .name {
    padding-top: 20px;
    font-size: 20px;
    font-weight: 500;
  }

  .divider {
    width: 150px;
    height: 2px;
    background: @gold-6;
    margin: 0 auto;
  }

  .major {
    padding-top: 10px;
    font-size: 18px;
  }

  .contact {
    padding-top: 20px;
    margin-left: -30px;
    margin-right: -30px;
    .ant-row {
      justify-content: space-between;
    }

    .mail-adress {
      text-align: left;
      padding-left: 30px;
      p {
        padding-top: 10px;
      }
    }
  }

  .social {
    margin: -30px;
    margin-top: 20px;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
