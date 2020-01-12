<template>
  <div class="container">
    <div
      v-for="(section, index) in Object.keys(blogArticles)"
      :key="index"
      class="group"
    >
      <b-container class="bv-example-row">
        <b-row>
          <div
            class="card"
            v-for="article in blogArticles[section]"
            :key="article.id"
          >
            <b-col>
              <a :href="'/article/' + article.id">
                <ImageComponent :image="article.image"></ImageComponent>
                <TitleComponent :title="article.title"></TitleComponent>
                <hr />
                <DateComponent :date="article.date"></DateComponent>
                <AuthorComponent :author="article.author"></AuthorComponent>
              </a>
            </b-col>
          </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import articles from "../assets/articles.json";
import TitleComponent from "../components/TitleComponent.vue";
import DateComponent from "../components/DateComponent.vue";
import AuthorComponent from "../components/AuthorComponent.vue";
import ImageComponent from "../components/ImageComponent.vue";

export default {
  data() {
    return {
      blogArticles: articles
    };
  },
  components: {
    TitleComponent,
    DateComponent,
    AuthorComponent,
    ImageComponent
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 6%;
}
.card {
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 2%;
  width: 25%;
  float: left;
  margin: 2%;
  cursor: pointer;
  a {
    color: #2c3e50;
    text-decoration: none;
    .date {
      font-size: 12px;
      float: left;
      color: rgba(44, 62, 80, 0.5);
    }
    .author {
      font-size: 12px;
      float: right;
      color: rgba(44, 62, 80, 0.5);
    }
  }
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
}
@media only screen and (max-width: 991px) {
  .card {
    width: 100%;
  }
  .container {
    margin-top: 8%;
  }
}
</style>
