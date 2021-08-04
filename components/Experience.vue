<template>
  <div class="ex-container">
    <div class="clip-path-1"><h3 class="text-title">WORK</h3></div>
    <div class="clip-path-2"></div>
    <a-row>
      <h3 class="text-tilte-card">Work experience</h3>
      <a-steps progress-dot :current="3" direction="vertical">
        <a-step v-for="work in works" :key="work.key">
          <p slot="title">{{ work.time }}</p>
          <ExperienceCard slot="description" :work="work" />
        </a-step>
        <a-step> </a-step>
      </a-steps>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      works: [
        {
          key: '1',
          time: 'MAR 2020  -  PRESENT',
          name: 'Metanet',
          position: 'Web Developer',
          projects: [
            {
              name: 'Metatest project',
              desc: 'Build a website to support QC and QA management, including features such as handling test plans, test cases, export reports,...',
              refers: [
                {
                  title: 'Role',
                  decs: 'FE developer',
                },
                {
                  title: 'Tech stack',
                  decs: 'ReactJS, Redux, Saga, Antd',
                },
                {
                  title: 'Unit test',
                  decs: 'Jest, Enzyme',
                },
                {
                  title: 'Subversion',
                  decs: 'Git',
                },
              ],
            },
            {
              name: 'Fintech project',
              desc: 'Enhance the new UI/UX.',
              refers: [
                {
                  title: 'Role',
                  decs: 'FrontEnd',
                },
                {
                  title: 'Tech stack',
                  decs: 'Spring java, JSP, JQuery, Bootstrap, Hyper theme with SASS',
                },
                {
                  title: 'Subversion',
                  decs: 'SVN',
                },
              ],
            },
            {
              name: 'Agent Management System',
              desc: 'Build a system-oriented system for sales management, project management, and consultant management.',
              refers: [
                {
                  title: 'Role',
                  decs: 'FE developer',
                },
                {
                  title: 'Tech stack',
                  decs: 'ReactJS, Redux, Redux Toolkit, Redux Saga, Antd',
                },
                {
                  title: 'Subversion',
                  decs: 'Git',
                },
              ],
            },
          ],
        },
        {
          key: '2',
          time: 'OCT 2019  -  JAN 2020',
          name: 'TMA Solutions',
          position: 'Front Web Developer',
          projects: [
            {
              name: '5G projec',
              desc: 'Build a website to detect cars parking at wrong places, show location history, capture erroneous car plates, track its location.',
              refers: [
                {
                  title: 'Role',
                  decs: 'FE developer',
                },
                {
                  title: 'Tech stack',
                  decs: 'ReactJS, Redux, Redux-thunk, Boostrap',
                },
                {
                  title: 'Subversion',
                  decs: 'Git',
                },
              ],
            },
            {
              name: 'Video Streaming Violation Detector projec',
              desc: 'Detect violent content in videos, capture the screens containing violent content, and show to users.',
              refers: [
                {
                  title: 'Role',
                  decs: 'FE developer',
                },
                {
                  title: 'Tech stack',
                  decs: 'ReactJS, Boostrap',
                },
                {
                  title: 'Subversion',
                  decs: 'SVN',
                },
              ],
            },
            {
              name: 'Dry Food Machine',
              desc: 'Build a website to show statistics about temperature, moisture, consumed electricity, the time required to dry food.',
              refers: [
                {
                  title: 'Role',
                  decs: 'FE developer',
                },
                {
                  title: 'Tech stack',
                  decs: 'ReactJS, Boostrap, ChartJS',
                },
              ],
            },
          ],
        },
        {
          key: '3',
          time: 'MAR 2019  -  AUG 2019',
          name: 'Faba Technology',
          position: 'Front Web Developer',
          projects: [
            {
              name: 'Rapbank project',
              link: 'https://rapbank.vn/',
              refers: [
                {
                  title: 'Role',
                  decs: 'Fullstack developer',
                },
                {
                  title: 'Tech stack FE',
                  decs: 'ReactJS, Redux, Saga, Boostrap',
                },
                {
                  title: 'Tech stack BE',
                  decs: 'NodeJS, ExpressJS, MySQL, Sequelize',
                },
                {
                  title: 'Subversion',
                  decs: 'Git',
                },
              ],
            },
            {
              name: 'Web Lactamon project',
              link: 'https://lactamom.com.vn/:',
              refers: [
                {
                  title: 'CMS',
                  decs: 'WordPress',
                },
              ],
            },
            {
              name: 'Grantland project',
              desc: 'https://grandland.com.vn/',
              refers: [
                {
                  title: 'CMS',
                  decs: 'WordPress, Elementor',
                },
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.ex-container {
  position: relative;
  height: 100vh;
  margin-top: 100px;

  .clip-path-1 {
    clip-path: polygon(100% 0, 100% 100%, 35% 75%, 35% 20%);
    width: 250px;
    height: 480px;
    position: absolute;
    right: 0;
    background: @purple-10;
    top: 80px;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .clip-path-2 {
    clip-path: polygon(100% 0, 100% 100%, 35% 75%, 35% 20%);
    width: 180px;
    height: 280px;
    position: absolute;
    right: 0;
    background: @gold-6;
  }

  .ant-row {
    margin-left: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .ant-steps-item-content {
      width: auto;
    }
  }
}
</style>
