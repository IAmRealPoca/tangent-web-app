<template>
  <video autoplay ref="vid" />
  <div>
    <p>{{ clientData }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "VideoPlayer",
  props: {
    streamManager: Object,
  },
  setup(props) {
    const vid = ref();
    console.log("hiThere");
    console.log("hi ref", props.streamManager);
    const getConnectionData = () => {
      const { connection } = props.streamManager.stream;
      return JSON.parse(connection.data);
    };
    const clientData = computed(() => {
      return getConnectionData();
    });
    onMounted(() => {
      props.streamManager.addVideoElement(vid.value);
    });
    return { clientData };
  },
};
</script>

<style></style>
