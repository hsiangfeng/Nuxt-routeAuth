<template>
  <div>
    <h1>這是需要驗證的頁面</h1>
  </div>
</template>

<script>
export default {
  middleware: 'routerAuth',
  meta: {
    requiresAuth: true
  }
}
</script>
