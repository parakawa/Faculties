<template lang="pug">
    .formNewCareer
        h1 Nueva Carrera Vuetify
        v-row.mt-30
            v-col(:md="12")
                .flex
                    label Nombre
                    v-text-field.input-name(id="input-name" v-model="name")
        //- v-row.mt-30
        //-     v-col(:md="12")
        //-         .flex
        //-             label Código
        //-             v-text-field.input-code(v-model="code")
            //- v-col(:md="12")
            //-     .flex
            //-         label.ml-40 Facultad
                    //©v-select.select-facultie(v-model="facultie")
                        v-option(v-for="item in cityList" :value="item.value" :key="item.value") {{item.label}}
        //- h2.mt-80 Cursos por Carrera
        //- v-card.mt-30
        //-     h3 Ciclo 1
        //-     .flex
        //-         div
        //-             v-tag.ml-10(v-for="course in coursesSelected" :key="course.value" closable @close="handleClose(course)") {{ course.value }}
        //-         div
        //-             //v-autocomplete.ml-10(
        //-                 v-model="course"
        //-                 :fetch-suggestions="querySearch"
        //-                 placeholder="Please Input"
        //-                 @select="handleSelect"
        //-                 size="small"
        //-                 )
        .container-buttons
            v-btn.btn-save(id="btn-save" color="error" @click="save") Guardar
            //v-btn.btn(shape="circle") Cancelar
        .summary(v-if="showSummary")
            h2 Resumen: 
            p.p-name(id="p-name") Nombre: {{ name }}
            //p Código: {{ code }}
            //p Facultad: {{ facultie }}
        .message Hola Test
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                code: '',
                facultie: '',
                course: '',
                coursesSelected: [
                { "value": "vue2", "link": "https://github.com/vuejs/vue" },
                { "value": "element2", "link": "https://github.com/ElemeFE/element" },
                { "value": "cooking2", "link": "https://github.com/ElemeFE/cooking" },
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                courses: [],  
                showSummary: false
            }
        },
        methods: {
            querySearch(queryString, cb) {
                var courses = this.courses;
                var results = queryString ? courses.filter(this.createFilter(queryString)) : courses;
                // call callback function to return suggestions
                cb(results);
            },
            createFilter(queryString) {
                return (link) => {
                return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                { "value": "vue", "link": "https://github.com/vuejs/vue" },
                { "value": "element", "link": "https://github.com/ElemeFE/element" },
                { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
                { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
                { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
                { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
                { "value": "babel", "link": "https://github.com/babel/babel" }
                ];
            },
            handleClose(item) {
                const index = this.coursesSelected.indexOf(item)
                this.coursesSelected.splice(index, 1)
                this.courses.push(item)
            },
            handleSelect(item) {
                const index = this.courses.indexOf(item)
                this.courses.splice(index, 1)
                this.coursesSelected.push(item)
                this.course = null
            },
            save() {
                this.showSummary = true
            }
        },
        mounted() {
            this.courses = this.loadAll();
        }
    }
</script>
<style lang="sass">
    .formNewCareer
        width: 70%
        margin: 0 auto
        padding-top: 50px
        h1 
            font-size: 2rem
        .input-name, .input-code
            width: 80%
        label
            width: 100px
    .flex
        display: flex
    .select-facultie 
        width: 100%
    .container-buttons 
        margin-top: 40px 
        display: flex
        flex-direction: row-reverse
        .btn 
            width: 125px
            height: 42px
            margin-left: 21px
            text-transform: uppercase
</style>

