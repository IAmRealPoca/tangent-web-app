<template>
  <div class="">
    <div v-if="pages.length > 0 && page">
      <PDFPage v-bind="{ page, scale }" />
    </div>
    <nav aria-label="PDF navigation">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" v-for="pag in pages" :key="pag.pageNumber">
          <a class="page-link" @click.prevent="changePage(pag)">{{
            pag.pageNumber
          }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import PDFPage from "./PDFPage.vue";
import range from "lodash/range";
import { nextTick, onMounted, ref } from "vue";
// import pdfjs from "pdfjs-dist";
export default {
  props: ["url", "scale"],
  components: {
    PDFPage,
  },
  setup() {
    const pdf = ref(undefined);
    const pages = ref([]);
    const page = ref({});
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
      const promisePage = await Promise.all(promises);
      console.log("Test: ", promisePage);
      return promisePage;
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

    const changePage = (pag) => {
      console.log("Some page: ", pag);
      page.value = null;
      nextTick(()=> page.value = pag);
      console.log("Some pagevalue: ", page.value);
    };

    onMounted(async () => {
      pages.value = await fetchPDF();
      page.value = pages.value[0];
      console.log("Page fetch: ", pages.value);
    });
    return { pages, scale, changePage, page };
  },
};
</script>

<style scoped></style>
