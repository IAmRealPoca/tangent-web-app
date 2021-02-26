<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4"
    >
      <div class="d-block mb-4 mb-md-0">
        <nav aria-label="breadcrumb" class="d-none d-md-inline-block">
          <ol class="breadcrumb breadcrumb-dark breadcrumb-transparent">
            <li class="breadcrumb-item">
              <a href="#"><span class="fas fa-home"></span></a>
            </li>
            <li class="breadcrumb-item"><a href="#">Volt</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Users List
            </li>
          </ol>
        </nav>
        <h2 class="h4">Users List</h2>
        <p class="mb-0">Your web analytics dashboard template.</p>
      </div>
      <div class="btn-toolbar mb-2 mb-md-0">
        <a href="#" class="btn btn-sm btn-dark"
          ><span class="fas fa-plus me-2"></span> New User</a
        >
        <div class="btn-group ms-2 ms-lg-3">
          <button type="button" class="btn btn-sm btn-outline-primary">
            Share
          </button>
          <button type="button" class="btn btn-sm btn-outline-primary">
            Export
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Breadcrumb"
};
</script>

<style scoped>
</style>