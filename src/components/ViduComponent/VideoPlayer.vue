<template>
  <div v-if="streamManager">
    <video class="w-100 h-100" autoplay ref="vid" />
    <p>{{ clientData.clientData }}</p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";

export default {
  name: "VideoPlayer",
  props: {
    streamManager: Object,
  },
  setup(props) {
    const vid = ref(null);
    console.warn("hiThere: ",vid.value);
    console.warn("hi ref", props.streamManager);
    const getConnectionData = () => {
      const { connection } = props.streamManager.stream;
      console.warn(connection.data);
      return JSON.parse(connection.data);
    };
    const clientData = computed(() => {
      return getConnectionData();
    });
    onMounted(() => {
      props.streamManager.addVideoElement(vid.value);
    });
    return { clientData,vid };
  },
};
</script>

<style></style>
