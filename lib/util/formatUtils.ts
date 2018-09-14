
export function indent(what: string, indentToUse: string, n: number): string {
    return what.split("\n")
        .map(line => {
            let pad = "";
            for (let i = 0; i < n; i++) {
                pad += indentToUse;
            }
            return pad + line;
        })
        .join("\n");
}
