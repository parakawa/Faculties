<template lang="pug">
    .formNewCareer
        h1 Nueva Carrera
        row.mt-30
            i-col(:md="12")
                .flex
                    label Nombre
                    i-input.input-name(v-model="name")
        row.mt-30
            i-col(:md="12")
                .flex
                    label Código
                    i-input.input-code(v-model="code")
            i-col(:md="12")
                .flex
                    label.ml-40 Facultad
                    i-select(v-model="facultie")
                        i-option(v-for="item in cityList" :value="item.value" :key="item.value") {{item.label}}
        h2.mt-80 Cursos por Carrera
        card.mt-30
            h3 Ciclo 1
            .flex
                div
                    tag(v-for="course in courses" :key="course.id" :name="course" closable color="primary" @on-close="handleClose") {{ course.name }}
                div
                    AutoComplete(
                        v-model="course"
                        placeholder="Agregar curso a ciclo" 
                        @on-select="addCourse"
                        size="small"
                        label="name"
                        )
                        Option(v-for="item in data1" :key="item.id" :value="item") 
                            span {{item.name}}
        .container-buttons
            i-button.btn(shape="circle" type="primary") Guardar
            i-button.btn(shape="circle") Cancelar
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
                    filterMethod (value, option) {
                        debugger
                        return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
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
</style>

