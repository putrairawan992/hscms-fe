<template>
  <button
    class="button"
    :class="[variantClass, sizeClass, { disabled: disabled }]"
    :type="type"
    :disabled="disabled"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot name="icon" />
    <span v-if="text" class="button-text">{{ text }}</span>
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button", // button, submit, reset
    },
    variant: {
      type: String,
      default: "primary", // primary, secondary, danger
    },
    size: {
      type: String,
      default: "md", // sm, md, lg
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    variantClass() {
      return `button--${this.variant}`;
    },
    sizeClass() {
      return `button--${this.size}`;
    },
  },
  methods: {
    onClick(event) {
      if (!this.disabled) this.$emit("click", event);
    },
    onMouseEnter(event) {
      this.$emit("mouseenter", event);
    },
    onMouseLeave(event) {
      this.$emit("mouseleave", event);
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
  },
};
</script>

<style scoped>
/* Base Button Styles */
.button {
  padding: 5px 20px !important;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.button.disabled,
.button:disabled {
  background-color: #eaeaea !important;
  color: white;
  cursor: not-allowed;
  pointer-events: none;
}

/* Variants */
.button--primary {
  background: linear-gradient(to right, #f39f5a, #ae445a);
  color: white;
  border: none;
}

/* Prevent hover styles when disabled */
.button--primary:not(.disabled):hover {
  background: linear-gradient(to right, #e04c50, #e58b32);
}
.button--secondary {
  background-color: #6c757d;
  color: white;
}
.button--secondary:hover {
  background-color: #5a6268;
}
.button--danger {
  background-color: #dc3545;
  color: white;
}
.button--danger:hover {
  background-color: #c82333;
}

/* Sizes */
.button--sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
.button--md {
  padding: 0.5rem 1rem;
  font-size: 1rem;
}
.button--lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
}

/* Disabled State */

/* Icon + Text Spacing */
.button-text {
  margin-left: 0.5rem;
}
</style>
