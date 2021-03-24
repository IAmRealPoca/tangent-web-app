<template>
  <div class="">
    <div>ANCD</div>
    <PDFPage
      v-for="page in pages"
      v-bind="{ page, scale }"
      :key="page.pageNumber"
    />
  </div>
</template>

<script>
import PDFPage from "./PDFPage.vue";
import range from "lodash/range";
import { onMounted, ref } from "vue";
// import pdfjs from "pdfjs-dist";
export default {
  props: ["url", "scale"],
  components: {
    PDFPage,
  },
  setup() {
    const pdf = ref(undefined);
    const pages = ref([]);
    const scale = ref(2);


    const fetchPDF = async () => {
      const pdfjs = await import("pdfjs-dist/webpack");
      const pdfResp = await pdfjs.getDocument(
        "https://cdn.filestackcontent.com/5qOCEpKzQldoRsVatUPS"
      );
      pdf.value = await pdfResp.promise;
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
    onMounted(async ()=>{
      await fetchPDF();
    console.log("Page fetch: ", pages.value);

    });
    return { pages,scale };
  },
};
</script>

<style scoped>
</style>