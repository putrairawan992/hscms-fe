<template>
    <client-only placeholder="loading...">
        <div :class="gradient ? gradient : 'regular'">
            <ckeditor-nuxt :config="editorConfig" :value="value" @input="$emit('input', arguments[0])"/>
        </div>
    </client-only>
</template>

<script>

export default {
    components: { 'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } }, },
    props: {
        value: { type: String, },
        gradient: { type: String },
        placeholder: { type: String },
    },
    data: () => ({
        editorConfig: {
            placeholder: "Masukan data",
            removePlugins: ['Title'],
            toolbar: [ 'Bold', 'Italic', 'Underline', 'Alignment', 'numberedList', 'bulletedList', 'link' ],
        },
        contentHolder: "",
    }),
    mounted() {
        this.editorConfig.placeholder = this.placeholder;
    },

  
};
</script>
<style>
    .ck-file-dialog-button {
        display: none !important;
    }
    .ck-file-dialog-button {
        display: none !important;
    }
    .ck.ck-icon, .ck.ck-icon * {
        color: #fff !important;
    }
    .ck.ck-button, a.ck.ck-button::hover {
        background-color: transparent !important;
    }
    .ck.ck-toolbar {
        padding: 0 !important;
        border: 1px solid #AE445A !important;
        border-bottom: none !important;
        border-top: none !important;
        border-radius: 10px 10px 0px 0px !important;
        background: linear-gradient(90deg, #F39F5A 0.03%, #AE445A 103.73%) !important;
    }
    .ck.ck-content {
        min-height: 70px;
    }

    .regular .ck.ck-toolbar {
        background: linear-gradient(90deg, #F39F5A 0.03%, #AE445A 103.73%) !important;
    }
    .recording .ck.ck-toolbar {
        background: linear-gradient(90deg, #3AB471 0%, #AE445A 80.99%) !important;
    }
    .gambar .ck.ck-toolbar {
        background: linear-gradient(90deg, #3B78C2 0%, #AE445A 80.99%) !important;
    }
    .essay .ck.ck-toolbar {
        background: linear-gradient(90deg, #404041 0%, #AE445A 80.99%) !important;
    }
    .dokumen .ck.ck-toolbar {
        background: linear-gradient(90deg, #8364BA 0%, #AE445A 80.99%) !important;
    }
    .ck.ck-editor__main>.ck-editor__editable {
        border: 1px solid #AE445A !important;
        border-top: none !important;
    }
    .ck.ck-editor__main>.ck-editor__editable:not(.ck-focused) {
        border: 1px solid #AE445A !important;
        border-top: none !important;
    }
</style>