import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "~/src/pages/index.vue"

// describe("FormSubmitter", () => {
//     it("reveals a notification when submitted", () => {
//         const wrapper = shallowMount(FormSubmitter)
//         const inputName = shallowMount(wrapper.find(".input-name"))

//         inputName.find('input').setValue("Matematica")
//         wrapper.find(".btn-save").trigger("click")

//         expect(wrapper.getElementsByTagName("p")[0].text())
//         .toBe("Nombre: Matematica")
//     })
// })

describe('Foo', () => {
    it('Muestra el mensaje', () => {
        const wrapper = shallowMount(FormSubmitter)
    
        // see if the message renders
        expect(wrapper.find('.message').text()).toEqual('Hola Test')
    })
})