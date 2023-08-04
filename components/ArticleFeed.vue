<template>
    <div class="article-feed">
        <ArticleCard 
            v-for="article in articles" 
            :title="article.title" 
            href="#" 
            :thumbnail="article.thumbnail" 
            :description="article.description" 
            />
    </div>
</template>
  
<style>
.article-feed {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
</style>
  
<script>
export default {
    name: 'ArticleFeed',
    props: {
        articles: Array
    },
}
</script>
  