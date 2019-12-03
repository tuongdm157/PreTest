<template>
  <div class="home">
    <TimeLine/>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeLine from '@/components/TimeLine/TimeLineComponent'

export default {
  name: 'home',
  components: {
    TimeLine
  }
}
</script>
