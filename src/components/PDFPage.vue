<template>
  <canvas v-visible.once="drawPage" v-bind="canvasAttrs"></canvas>
</template>

<script>
import visible from "@/util/directive/visible";
export default {
  name: "PDFPage",
  props: ["page", "scale"],
  render(h) {
    const { canvasAttrs: attrs } = this;
    return h("canvas", { attrs });
  },
  created() {
    console.log(this.page);
    this.viewport = this.page.getViewport({ scale: this.scale });
  },
  directives: {
    visible,
  },
  computed: {
    canvasAttrs() {
      let { width, height } = this.viewport;
      [width, height] = [width, height].map((dim) => Math.ceil(dim));
      const style = this.canvasStyle;
      return {
        width,
        height,
        style,
        class: "pdf-page",
      };
    },

    canvasStyle() {
      const {
        width: actualSizeWidth,
        height: actualSizeHeight,
      } = this.actualSizeViewport;
      const pixelRatio = window.devicePixelRatio || 1;
      const [pixelWidth, pixelHeight] = [
        actualSizeWidth,
        actualSizeHeight,
      ].map((dim) => Math.ceil(dim / pixelRatio));
      return `width: ${pixelWidth}px; height: ${pixelHeight}px;`;
    },

    actualSizeViewport() {
      return this.viewport.clone({ scale: this.scale });
    },
  },
  mounted() {
    this.drawPage();
  },

  methods: {
    drawPage() {
      if (this.renderTask) return;

      const { viewport } = this;
      const canvasContext = this.$el.getContext("2d");
      const renderContext = { canvasContext, viewport };

      // PDFPageProxy#render
      // https://mozilla.github.io/pdf.js/api/draft/PDFPageProxy.html
      console.log("render :>> ", this.page);
      this.renderTask = this.page.render(renderContext);
      console.log("this :>> ", this.renderTask.promise);
      this.renderTask.promise
        .then(() => this.$emit("rendered", this.page))
        .catch(this.destroyRenderTask);
      // this.renderTask.promise.then(/* */);
    },

    destroyPage(page) {
      if (!page) return;

      // PDFPageProxy#_destroy
      // https://mozilla.github.io/pdf.js/api/draft/PDFPageProxy.html
      page._destroy();

      // RenderTask#cancel
      // https://mozilla.github.io/pdf.js/api/draft/RenderTask.html
      if (this.renderTask) this.renderTask.cancel();
    },

    destroyRenderTask() {
      if (!this.renderTask) return;

      // RenderTask#cancel
      // https://mozilla.github.io/pdf.js/api/draft/RenderTask.html
      this.renderTask.cancel();
      delete this.renderTask;
    },
    // ...
  },
  beforeUnmount() {
    this.destroyPage(this.page);
  },
  watch: {
    page(page, oldPage) {
      this.destroyPage(oldPage);
    },
  },
};
</script>

<style scoped></style>
