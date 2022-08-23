<template>
  <HomeCom />
  <FooterCom />
</template>

<script>
// @ is an alias to /src
import HomeCom from '@/components/HomeCom.vue'
import FooterCom from '@/components/FooterCom.vue'

export default {
  name: 'HomeView',
  components: {
    HomeCom,
    FooterCom
  },
  mounted() {  
      document.title = "Bicesterdirect | Home";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
</script>
