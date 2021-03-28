<template>
  <div class="pdf-document">
    <div>ANCD</div>
    <!-- <PDFPage
      v-for="page in pages"
      v-bind="{ page, sacale }"
      :key="page.pageNumber"
    /> -->
  </div>
</template>

<script>
import PDFPage from "./PDFPage.vue";
import range from "lodash/range";
import { ref } from "@vue/reactivity";
// import pdfjs from "pdfjs-dist";
export default {
  props: ["url", "scale"],
  components: {
    PDFPage,
  },
  async setup(props) {
    const pdf = ref(undefined);
    const pages = ref([]);

    const fetchPDF = async () => {
      const pdfjs = await import("pdfjs-dist/webpack");
      const pdfResp = await pdfjs.getDocument(
        "//cdn.mozilla.net/pdfjs/helloworld.pdf"
      );
      console.log('pdfResp :>> ', pdfResp);
      pdf.value = await pdfResp._capability.promise;
      const promises = range(1, pdf.value.numPages).map((number) =>
        pdf.value.getPage(number)
      );
      const promisePage = await Promise.all(promises)
      console.log("Test: ", promisePage);
      pages.value = promisePage;
      // pdfResp._capability.promise
      //   .then((resp) => {
      //     pdf.value = resp;
      //     console.log(pdf.value);
      //     const promises = range(1, pdf.value.numPages).map((number) =>
      //       pdf.value.getPage(number)
      //     );
      //     return Promise.all(promises);
      //   })
      //   .then((pagesRes) => {
      //     console.log("pageres: ", pagesRes);
      //     pages.value = pagesRes;
      //   });
    };
    await fetchPDF();
    console.log("Page fetch: ", pages.value);
    return { pages };
  },
};
</script>

<style scoped>
</style>