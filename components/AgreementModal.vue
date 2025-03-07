<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title class="headline">Agreement</v-card-title>
      <v-card-text>
        By downloading these files, you agree to the terms and conditions.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="onAgree">Agree</v-btn>
        <v-btn color="error" @click="onCancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    onAgree() {
      this.$emit("agree");
    },
    onCancel() {
      this.$emit("cancel");
    },
  },
};
</script>
