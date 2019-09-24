import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "~/src/pages/index.vue"
import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI)

// describe("FormSubmitter", () => {
//     it("reveals a notification when submitted", () => {
//         const wrapper = shallowMount(FormSubmitter)

//         //wrapper.find(".input-name").find('input').setValue("Matematica")
//         wrapper.find(".btn-save").trigger("click")

//         expect(wrapper.find(".p-name").text())
//         .toBe("Nombre: ")
//     })
// })

describe('Foo', () => {
    it('Muestra el mensaje', () => {
        const wrapper = shallowMount(FormSubmitter)
    
        // see if the message renders
        expect(wrapper.find('.message').text()).toEqual('Hola Test')
    })
})