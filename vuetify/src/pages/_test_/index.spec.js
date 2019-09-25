import { shallowMount, createLocalVue } from "@vue/test-utils"
import FormSubmitter from "~/src/pages/index.vue"
import Vue from 'vue';
import Vuetify from 'vuetify';
import { removeAllListeners } from "cluster";

Vue.use(Vuetify)

const localVue = createLocalVue()

describe("Datos de la facultad en vuetify", () => {
    let wrapper, vuetify
    vuetify = new Vuetify()

    beforeEach(() => {
        wrapper = shallowMount(FormSubmitter, {
            vuetify,
            localVue
        })
    })

    it("has the expected html structure", () => {
        expect(wrapper.element).toMatchSnapshot()
    })

    it("has the expected input element", () => {
        expect(wrapper.contains('.input-name')).toBe(true)
    })

    it("reveals a notification when submitted", () => {

        wrapper.find(".input-name").setValue("Matematica")
        wrapper.find(".btn-save").trigger("click")

        expect(wrapper.find(".p-name").text())
        .toBe("Nombre: Matematica")
    })
})

// describe('Foo', () => {
//     it('Muestra el mensaje', () => {
//         const wrapper = shallowMount(FormSubmitter)
    
//         // see if the message renders
//         expect(wrapper.find('.message').text()).toEqual('Hola Test')
//     })
// })