import { shallowMount, createLocalVue } from "@vue/test-utils"
import { mount } from 'avoriaz'
import FormSubmitter from "~/src/pages/index.vue"
import Vue from 'vue';
import Vuetify from 'vuetify';
import { removeAllListeners } from "cluster";

Vue.use(Vuetify)

const localVue = createLocalVue()

describe("Datos de la facultad en vuetify", () => {
    const wrapper = mount(FormSubmitter)

    // beforeEach(() => {
    //     wrapper = shallowMount(FormSubmitter, {
    //         vuetify,
    //         localVue
    //     })
    // })

    it("has the expected html structure", () => {
        console.log('wrapper', wrapper)
        //expect(wrapper.element).toMatchSnapshot()
    })

    it("has the expected input element", () => {
        expect(wrapper.contains('#input-name')).toBe(true)
    })

    it("reveals a notification when submitted", () => {
        const name = wrapper.find(".input-name")[0]
        console.log('input-name', name)
        name.trigger('focus')
        name.element.value = 'Matematica'
        name.trigger('input')
        console.log('value del elemento después del set', name.element.value)
        console.log('wrapper.vm.name', wrapper.vm.name)
        expect(wrapper.vm.name).toEqual('Matematica')
        wrapper.find(".btn-save")[0].trigger("click")
        console.log('functions disponibles', wrapper.find(".p-name")[0])
        expect(wrapper.find(".p-name")[0].text())
        .toBe("Nombre: Matematica")
    })
})