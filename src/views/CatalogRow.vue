<template>
  <tr>
    <td>{{ props.item.id }}</td>
    <td>{{ props.item.title }}</td>
    <td>{{ props.item.price }}</td>
    <td>
      <input type="number" v-model.number="count" />
      {{ countInCart }} в корзине
    </td>
    <td>{{sum}}</td>
    <td>
      <button class="btn btn-primary" @click="addToCart">
        В корзину
      </button>
    </td>
  </tr>
</template>

<script setup>
  import { computed, ref} from "vue";
  import { useCartStore } from "../stores/cart";
  const cart = useCartStore()

  const props = defineProps(['item'])
  const count = ref(0)
  const countInCart = computed(() => cart.findById(props.item.id)?.count ?? 0)
  const sum = computed(() => count.value * props.item.price)

  function addToCart() {
    cart.addToCart(props.item.id,count.value)
    count.value = 0
  }
</script>