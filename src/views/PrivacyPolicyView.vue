<template>
  <PrivacyPolicyCom />
  <FooterCom />
</template>

<script>
// @ is an alias to /src
import PrivacyPolicyCom from '@/components/PrivacyPolicyCom.vue'
import FooterCom from '@/components/FooterCom.vue'

export default {
  name: 'HomeView',
  components: {
    PrivacyPolicyCom,
    FooterCom
  },
  mounted() {  
      document.title = "Bicesterdirect | Privacy Policy";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
}
</script>
