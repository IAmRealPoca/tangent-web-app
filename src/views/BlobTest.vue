<template>
  <div>
    <div>{{ status }}</div>
    <div v-if="fileList">
      <div v-for="(item, index) in fileList" :key="index">
        {{ item }}
      </div>
    </div>
    <img :src="sasImg" alt="" srcset="" />
    <a :href="sasImg" class="btn btn-primary">Download</a>
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
import { onMounted } from "@vue/runtime-core";

const blobSasUrl =
  "https://namiv.blob.core.windows.net/tangent-docs?sv=2020-04-08&st=2021-03-09T08%3A29%3A17Z&se=2021-03-10T08%3A29%3A17Z&sr=c&sp=ral&sig=Pypj%2BhtX5e%2Fq7WhYbBuC3ZBnfcaAi0ZQPygK%2B0ISAzY%3D";

// Create a new BlobServiceClient
// const blobServiceClient = new BlobServiceClient(blobSasUrl);
const baseImgUrl =
  "https://namiv.blob.core.windows.net/tangent-docs/Gura-20210305T165721617.jpg";
const accountname = "namiv";
const sasToken =
  "?sv=2020-04-08&st=2021-03-09T09%3A10%3A30Z&se=2021-03-10T09%3A10%3A30Z&sr=c&sp=rl&sig=jBymB%2FSTnSpgmpxcvIWEFVfqPfhWrIdAGF5hiowP83M%3D";
const pipeline = newPipeline(new AnonymousCredential());


const blobServiceClient = new BlobServiceClient(
  `https://${accountname}.blob.core.windows.net?${sasToken}`,
  pipeline
);

const sasImg = baseImgUrl + sasToken;


// Create a unique name for the container by
// appending the current time to the file name
const containerName = "tangent-docs";



// Get a container client from the BlobServiceClient
const containerClient = blobServiceClient.getContainerClient(containerName);
console.warn(containerClient);

const status = ref("");
const fileList = ref([]);

const downloadFile = () =>{
    return baseImgUrl;
}

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


onMounted(() => {
  listFiles();
});
</script>

<style></style>
