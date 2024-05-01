<template>
    <client-only placeholder="loading...">
        <div :class="gradient ? gradient : 'regular'" class="offer">
            <ckeditor-nuxt :config="editorConfig" :value="value" @input="$emit('input', arguments[0])"/>
            <div class="answer-container">
                <v-row class="pa-6">
                    <v-col cols="6">
                        <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo>
                            <template v-slot:prepend-inner>
                            <v-tooltip bottom >
                                <template v-slot:activator="{ on }">
                                    <v-checkbox class="input-checkbox" color="#ae445a" style="margin-top: 0 !important;">
                                        <template v-slot:label>
                                            <div class="checkbox-label">A.</div>
                                        </template>
                                    </v-checkbox>
                                </template>
                                Jawaban A.
                            </v-tooltip>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo>
                            <template v-slot:prepend-inner>
                            <v-tooltip bottom >
                                <template v-slot:activator="{ on }">
                                <p style="color: #000; margin-bottom: 0;" v-on="on">
                                    A.
                                </p>
                                </template>
                                Jawaban A.
                            </v-tooltip>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo>
                            <template v-slot:prepend-inner>
                            <v-tooltip bottom >
                                <template v-slot:activator="{ on }">
                                <p style="color: #000; margin-bottom: 0;" v-on="on">
                                    A.
                                </p>
                                </template>
                                Jawaban A.
                            </v-tooltip>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field placeholder="Pilihan ganda 1" class="module-text-field" solo>
                            <template v-slot:prepend-inner>
                            <v-tooltip bottom >
                                <template v-slot:activator="{ on }">
                                <p style="color: #000; margin-bottom: 0;" v-on="on">
                                    A.
                                </p>
                                </template>
                                Jawaban A.
                            </v-tooltip>
                            </template>
                        </v-text-field>
                    </v-col>
                </v-row>
            </div>
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
</style>