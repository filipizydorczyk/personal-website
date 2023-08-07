<template>
    <div class="article-feed">
        <div class="article-feed__tiles">
            <ArticleCard 
                v-for="article in articles" 
                :title="article.title" 
                :href="article.href"
                :thumbnail="article.thumbnail" 
                :description="article.description" 
                />
        </div>
    </div>
</template>
  
<style>
.article-feed__tiles {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem
}

.article-feed__pagination div {
    margin: 0 auto;
}
</style>
  
<script>
export default {
    name: 'ArticleFeed',
    props: {
        articles: Array,
    },

}
</script>
  