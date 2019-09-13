<template lang="pug">
    .formNewCareer
        h1 Nueva Carrera
        a-row.mt-30
            a-col(:md="12")
                .flex
                    label Nombre
                    a-input.input-name(v-model="name")
        a-row.mt-30
            a-col(:md="12")
                .flex
                    label Código
                    a-input.input-code(v-model="code")
            a-col(:md="12")
                .flex
                    label.ml-40 Facultad
                    a-select.select-facultie(v-model="facultie")
                        a-select-option(v-for="item in cityList" :value="item.value" :key="item.value") {{item.label}} 
        h2.mt-80 Cursos por Carrera
        a-card.mt-30
            h3 Ciclo 1
            .flex
                div 
                    //a-tag hoao
                    a-tag(v-for="course in courses" :key="course.id" :name="course" closable color="#108ee9" @on-close="handleClose") {{ course.name }}
                div
                    a-auto-complete(
                        placeholder="Agregar curso a ciclo"
                        @select="addCourse"
                        size="small"
                        optionLabelProp="name"
                        v-model="course"
                        
                        )
                        //a-select-option(v-for="item in data1" :key="item.id")  {{item.name}}
                        template(slot="data1")
                            a-select-option(v-for="item in data1" :key="item.id") 
                                span {{item.name}}
        .container-buttons
            a-button.btn(type="primary") Guardar
            a-button.btn() Cancelar
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                code: '',
                facultie: '',
                course: '',
                courses: [{
                    id: 1,
                    name: 'Mate'
                },
                {
                    id: 2,
                    name: 'Calc'
                },
                {
                    id: 1,
                    name: 'Complementos'
                }],
                data1: [{
                    id: 4,
                    name: 'Mate1'
                },
                {
                    id: 5,
                    name: 'Calc1'
                },
                {
                    id: 6,
                    name: 'Complementos1'
                }],
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
            }
        },
        methods: {
                    handleClose (event, item) {
                        const index = this.courses.indexOf(item);
                        this.courses.splice(index, 1);
                        this.data1.push(item)
                    },
                    addCourse(val) {
                        this.courses.push(val)
                        const index = this.data1.indexOf(val)
                        this.data1.splice(index, 1)
                        this.course = ''
                    }
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
        .select-facultie 
            width: 100%
    .flex
        display: flex
    .container-buttons 
        margin-top: 40px 
        display: flex
        flex-direction: row-reverse
        .btn 
            width: 125px
            height: 42px
            margin-left: 21px
            text-transform: uppercase
            border-radius: 16
</style>

