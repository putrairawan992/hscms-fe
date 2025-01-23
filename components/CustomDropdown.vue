<template>
  <div class="custom-select">
    <button @click="toggleDropdown" class="select-button" type="button">
      {{
        selectedItems.length ? `${selectedItems.length} selected` : placeholder
      }}
      <!-- <img src="@/assets/svg/chevrondown-red.svg" alt="" /> -->
      <span class="dropdown-icon">
        <img src="@/assets/svg/chevrondown-red.svg" alt="" />
      </span>
    </button>

    <div class="dropdown-modal" v-if="isOpen">
      <div class="options-list">
        <label
          class="checkbox-option"
          v-for="option in options"
          :key="option.value"
        >
          <div class="checkbox-container">
            <input
              type="checkbox"
              :value="option.value"
              v-model="selectedItems"
              @change="emitUpdate"
            />
            <span class="checkbox-custom"></span>
          </div>
          <span class="option-label">{{ option.label }}</span>
        </label>
      </div>
      <div class="dropdown-actions">
        <button class="apply-btn" @click="applySelection">Apply</button>
        <button class="reset-btn" @click="resetSelection">Reset</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Select options",
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const selectedItems = ref([...props.modelValue]);

watch(
  () => props.modelValue,
  (newVal) => {
    selectedItems.value = [...newVal];
  }
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const emitUpdate = () => {
  emit("update:modelValue", selectedItems.value);
};

const applySelection = () => {
  emitUpdate();
  isOpen.value = false;
};

const resetSelection = () => {
  selectedItems.value = [];
  emitUpdate();
};
</script>

<style scoped>
.custom-select {
  position: relative;
}

.select-button {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ae445a;
  border-radius: 8px;
  font-size: 12px;
  color: #ae445a;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.select-button:focus {
  border-color: #ae445a;
  outline: none;
}

.dropdown-modal {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  padding: 16px 10px;
}

.dropdown-modal h2 {
  font-size: 24px;
  color: #374151;
  margin-bottom: 16px;
}
.dropdown-icon {
  position: absolute;
  top: 5px;
  right: 5px;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding: 0 4px;
}

.checkbox-option {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: #374151;
}

.checkbox-container {
  position: relative;
  width: 20px;
  height: 20px;
}

.checkbox-container input {
  opacity: 0;
  position: absolute;
  cursor: pointer;
}

.checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #ae445a;
  border-radius: 4px;
}

.checkbox-container input:checked + .checkbox-custom::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid #ae445a;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.dropdown-actions {
  display: flex;
  gap: 5px;
  width: 100%;
  margin-top: 16px;
}

.option-label {
  width: 100%;
  text-align: left;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  max-height: 150px;
  overflow-y: auto;
}

.apply-btn {
  flex: 1;
  padding: 5px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to right, #e9967a, #ae445a);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.reset-btn {
  flex: 1;
  padding: 5px;
  border: 1px solid #ae445a;
  border-radius: 10px;
  background: white;
  color: #ae445a;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 768px) {
  .dropdown-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 400px;
    max-height: 90vh;
    overflow-y: auto;
  }
}
</style>
