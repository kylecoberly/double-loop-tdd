import {assert} from "chai";
import PersonCard from "@/components/PersonCard.vue";
import {mount} from "@vue/test-utils";

describe("PersonCard.vue", () => {
    it("renders a person correctly", () => {
        const wrapper = mount(PersonCard, {
            propsData: {
                person: {
                    name: "Kyle",
                    age: 10
                }
            }
        });

        assert.equal(wrapper.find(".name").text(), "Kyle");
        assert.equal(wrapper.find(".age").text(), "10");
    });
});
