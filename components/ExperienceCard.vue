<template>
  <div>
    <div class="card">
      <p class="company-name">
        <a-tag color="#faad14"> {{ work.name }} </a-tag
        ><strong>{{ work.position }} </strong>
      </p>
      <div v-for="project in work.projects" :key="project.name">
        <p class="project-name">
          <strong>{{ project.name }}: </strong> {{ project.desc }}
          <a :href="project.link" target="blank" :v-show="project.link"
            >{{ project.link }}
          </a>
        </p>

        <ul>
          <li v-for="refer in project.refers" :key="refer.title">
            {{ refer.title }}: {{ refer.decs }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      default: null,
      require: true,
    },
  },
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.card {
  width: 400px;
  text-align: justify;
}
</style>
