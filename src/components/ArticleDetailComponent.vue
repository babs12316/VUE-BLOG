<template>
  <div class="container">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div
            v-for="(section, index) in Object.keys(blogArticles)"
            :key="index"
            class="group"
          >
            <ImageComponent
              :image="blogArticles[section][id].image"
              class="articleImage"
            ></ImageComponent>
            <TitleComponent
              :title="blogArticles[section][id].title"
            ></TitleComponent>
            <DateComponent
              :date="blogArticles[section][id].date"
            ></DateComponent>
            <AuthorComponent
              :author="blogArticles[section][id].author"
            ></AuthorComponent>
            <DescriptionComponent
              :description="blogArticles[section][id].description"
            ></DescriptionComponent>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import articles from "../assets/articles.json";
import TitleComponent from "./TitleComponent.vue";
import DateComponent from "./DateComponent.vue";
import DescriptionComponent from "./DescriptionComponent.vue";
import AuthorComponent from "./AuthorComponent.vue";
import ImageComponent from "./ImageComponent.vue";

export default {
  props: [],
  data() {
    return {
      blogArticles: articles,
      id: this.$route.params.id - 1
    };
  },
  components: {
    TitleComponent,
    DateComponent,
    DescriptionComponent,
    AuthorComponent,
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 8%;
  .articleImage {
    width: 70%;
    margin: auto;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5%;
  }
  .date {
    font-size: 14px;
    color: rgba(44, 62, 80, 0.5);
    font-weight: bold;
  }
  .author {
    font-size: 14px;
    color: rgba(44, 62, 80, 0.5);
    font-weight: bold;
  }
}

@media only screen and (min-width: 991px) {
  .container {
    margin-top: 3%;
    .date {
      margin-top: 1%;
      margin-right: 20%;
    }
    .author {
      margin-top: -2%;
      margin-left: 10%;
    }
  }
}
</style>
