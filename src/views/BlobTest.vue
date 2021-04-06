<template>
  <div>
    <!-- <div>{{ status }}</div> -->
    <!-- <div v-if="fileList">
      <div v-for="(item, index) in fileList" :key="index">
        {{ item }}
      </div>
    </div> -->
    <!-- <img :src="sasImg" alt="" srcset="" /> -->
    <!-- <a :href="sasImg" class="btn btn-primary">Download</a> -->
    <a class="btn btn-primary" @click.prevent="incre">Incre</a>
    <a class="btn btn-primary" @click.prevent="loda">Lodas</a>
    <a class="btn btn-primary" @click.prevent="toast">Vuex Toast</a>
  </div>
</template>

<script>
export default {};
</script>

<script setup>
import {
  BlobServiceClient,
  AnonymousCredential,
  newPipeline,
} from "@azure/storage-blob";
import { ref } from "@vue/reactivity";
import { onMounted, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import _ from "lodash";
import * as dateFns from "date-fns";

const testDateFns = () => {
  const date = new Date(2014, 8, 1, 10, 19, 50);
  console.log("date before add: ", date);
  const result = dateFns.add(date, {
    years: 2,
  });
  console.log("result: ", result);
  const startDate = new Date(2021, 4, 8, 7, 0, 0);
  const endDate = new Date(2021, 4, 8, 18, 0, 0);
  const resultSub = dateFns.sub(endDate, startDate);
  let intervalBetween = dateFns.differenceInDays(endDate, startDate) + 1;
  console.log("resultSub: ", resultSub);
  console.log("intervalBetween: ", intervalBetween);


  const days = [];
  let loopDate = startDate;
  while(intervalBetween > 0) {
    days.push(loopDate);
    dateFns.addDays(loopDate, 1);
    intervalBetween -= 1;
  }
  console.log("looped days: ", days);
};
testDateFns();

const store = useStore();

console.log(store.state.count);

// const blobSasUrl =
//   "https://namiv.blob.core.windows.net/tangent-docs?sv=2020-04-08&st=2021-03-09T08%3A29%3A17Z&se=2021-03-10T08%3A29%3A17Z&sr=c&sp=ral&sig=Pypj%2BhtX5e%2Fq7WhYbBuC3ZBnfcaAi0ZQPygK%2B0ISAzY%3D";

// Create a new BlobServiceClient
// const blobServiceClient = new BlobServiceClient(blobSasUrl);
// const baseImgUrl =
//   "https://namiv.blob.core.windows.net/tangent-docs/Gura-20210305T165721617.jpg";
const accountname = "namiv";
// const sasToken =
//   "?sv=2020-04-08&st=2021-03-09T09%3A10%3A30Z&se=2021-03-10T09%3A10%3A30Z&sr=c&sp=rl&sig=jBymB%2FSTnSpgmpxcvIWEFVfqPfhWrIdAGF5hiowP83M%3D";

// const pipeline = newPipeline(new AnonymousCredential());

// const blobServiceClient = new BlobServiceClient(
//   `https://${accountname}.blob.core.windows.net?${sasToken}`,
//   pipeline
// );

// const sasImg = baseImgUrl + sasToken;

const {proxy} = getCurrentInstance();
// var config = {
//   method: "get",
//   url: "https://thongtindoanhnghiep.co/api/city",
//   headers: {
//     Cookie: "__cfduid=d1bca5f4e425aae7850f3bf19dc4492f21615959598",
//   },
// };
// proxy.$http(config).then((resp) => console.log(JSON.parse(resp)));

// Create a unique name for the container by
// appending the current time to the file name
// const containerName = "tangent-docs";

// // Get a container client from the BlobServiceClient
// const containerClient = blobServiceClient.getContainerClient(containerName);
// console.warn(containerClient);

const status = ref("");
const fileList = ref([]);

const downloadFile = () => {
  return baseImgUrl;
};

const incre = () => {
  store.commit("increment");
  console.log(store.state.count);
};
const loda = () => {
  const a = [
    { id: 1, name: "acd" },
    { id: 2, name: "abd" },
    { id: 3, name: "acqwed" },
  ];
  const b = _.find(a, { id: 3 });
  console.log("b :>> ", b);
};

const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js", {
        scope: "/",
      })
      .then(function (reg) {
        // registration worked
        console.log("Registration succeeded. Scope is " + reg.scope);
      })
      .catch(function (error) {
        // registration failed
        console.log("Registration failed with " + error);
      });
  }
};

const listFiles = async () => {
  try {
    status.value = "Retrieving file list...";
    let iter = containerClient.listBlobsFlat();

    let bobItem = await iter.next();

    while (!bobItem.done) {
      fileList.value.push(bobItem.value);
      bobItem = await iter.next();
    }

    if (fileList.size > 0) {
      status.value = "Done.";
    } else {
      status.value = "The container does not contain any files.";
    }
  } catch (error) {
    console.log(error.message);
  }
};

const toast = () => {
  const payload = {
    proxy,
    msg: "Hi from Test",
    stt: "info"
  }
  store.dispatch("toastMsg",payload);
}

onMounted(() => {
  listFiles();
  registerServiceWorker();
});
</script>

<style></style>
