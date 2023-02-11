<template>
  <tr>
    <td>{{ props.item.id }}</td>
    <td>{{ catalogItem.title }}</td>
    <td>{{ catalogItem.price }}</td>
    <td>
      <input type="number" v-model="count" @blur="setCount"/>
    </td>
    <td>{{ sum }}</td>
    <td>
      <button class="btn btn-danger" @click="cart.setCount(props.item.id,0)">
        Удалить
      </button>
    </td>
  </tr>
</template>

<script setup>
  import { useCartStore } from "../stores/cart";
  import { useCatalogStore } from "../stores/catalog";
  import { computed, ref } from "vue";


  const cart = useCartStore()
  const catalog = useCatalogStore()

  const props = defineProps(['item'])
  const count = ref(props.item.count)
  const catalogItem = catalog.findById (props.item.id)
  const sum = computed(() => props.item.count * catalogItem.price)

  function setCount () {
    cart.setCount(props.item.id,count.value)
  }

</script>