const { expect } = require("chai");
let baal;

describe("Checking stored booleans (110)", function() {
    before(async function() {
        const Baal = await ethers.getContractFactory("Baal");
        baal = await Baal.deploy([], [], [], [], [], 0, 0, 6 /* boolz */ , '', '', 0);
    })
    it("Checking stored bools", async function() {
        expect(await baal.lootToVoiceQuadratic()).to.be.true;
        expect(await baal.lootPaused()).to.be.true;
        expect(await baal.voicePaused()).to.be.false;
    })
})

describe("Checking stored booleans (011)", function() {
    before(async function() {
        const Baal = await ethers.getContractFactory("Baal");
        baal = await Baal.deploy([], [], [], [], [], 0, 0, 3 /* boolz */ , '', '', 0);
    })
    it("Checking stored bools", async function() {
        expect(await baal.lootToVoiceQuadratic()).to.be.false;
        expect(await baal.lootPaused()).to.be.true;
        expect(await baal.voicePaused()).to.be.true;
    })
})