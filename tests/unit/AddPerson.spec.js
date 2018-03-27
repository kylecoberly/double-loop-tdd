import {assert} from "chai";
import {birthdayToAge} from "@/utilities";

describe("AddPerson.vue", () => {
    it("calculates dates correctly", () => {
        const age = birthdayToAge(new Date("1970-01-01"), new Date("1980-01-01"));
        assert.equal(age, 10);
    })
})
