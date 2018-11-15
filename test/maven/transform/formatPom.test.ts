import assert = require("power-assert");
import {FormatPomCodeTransform} from "../../../lib/maven/transform/formatPom";
import {projectOfPom} from "./addPluginTransform.test";

describe("formatPomTest", () => {

    it("no POM causes no change, no error", async () => {
        const xml = '<root><!-- content --><content><p xml:space="preserve">This is <b>some</b> content.</content></p>';
        const p = projectOfPom(xml);
        await FormatPomCodeTransform(p, {} as any);
        const pom = await p.getFile("pom.xml");
        const expected = `<root>
    <!-- content -->
    <content>
        <p xml:space="preserve">This is <b>some</b> content.</p>
    </content>
</root>`;
        assert(pom.getContentSync() === expected);
    });
});
