
export function javaClassDeclarationWithName(name: string) {
    return `//typeDeclaration[//classDeclaration[//Identifier[@value='${name}']]]`;
}

export const JavaImportNames = "//importDeclaration/qualifiedName";
