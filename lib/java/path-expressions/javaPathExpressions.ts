
/**
 * Entire package declaration, of form 'package com.foo.bar;'
 * @type {string}
 */
export const JavaPackage = "//packageDeclaration";

/**
 * Path expression using the Java grammar for a Java package declaration
 * @type {string}
 */
export const JavaPackageName = "//packageDeclaration//qualifiedName";

export const JavaImportNames = "//importDeclaration/qualifiedName";

export function javaClassDeclarationWithName(name: string) {
    return `//typeDeclaration[//classDeclaration[//Identifier[@value='${name}']]]`;
}
