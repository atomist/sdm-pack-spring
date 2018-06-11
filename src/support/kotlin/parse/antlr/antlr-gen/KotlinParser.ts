// Generated from src/tree/ast/antlr/kotlin/KotlinParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { KotlinParserListener } from './KotlinParserListener';
import { KotlinParserVisitor } from './KotlinParserVisitor';

export class KotlinFileContext extends ParserRuleContext {
    public packageHeader(): PackageHeaderContext {
        return this.getRuleContext(0, PackageHeaderContext);
    }
    public importList(): ImportListContext {
        return this.getRuleContext(0, ImportListContext);
    }
    public EOF(): TerminalNode { return this.getToken(KotlinParser.EOF, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public fileAnnotation(): FileAnnotationContext | undefined {
        return this.tryGetRuleContext(0, FileAnnotationContext);
    }
    public topLevelObject(): TopLevelObjectContext[];
    public topLevelObject(i: number): TopLevelObjectContext;
    public topLevelObject(i?: number): TopLevelObjectContext | TopLevelObjectContext[] {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelObjectContext);
        } else {
            return this.getRuleContext(i, TopLevelObjectContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_kotlinFile; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterKotlinFile) listener.enterKotlinFile(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitKotlinFile) listener.exitKotlinFile(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitKotlinFile) return visitor.visitKotlinFile(this);
        else return visitor.visitChildren(this);
    }
}


export class ScriptContext extends ParserRuleContext {
    public packageHeader(): PackageHeaderContext {
        return this.getRuleContext(0, PackageHeaderContext);
    }
    public importList(): ImportListContext {
        return this.getRuleContext(0, ImportListContext);
    }
    public EOF(): TerminalNode { return this.getToken(KotlinParser.EOF, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public fileAnnotation(): FileAnnotationContext | undefined {
        return this.tryGetRuleContext(0, FileAnnotationContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public semi(): SemiContext[];
    public semi(i: number): SemiContext;
    public semi(i?: number): SemiContext | SemiContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SemiContext);
        } else {
            return this.getRuleContext(i, SemiContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_script; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterScript) listener.enterScript(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitScript) listener.exitScript(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitScript) return visitor.visitScript(this);
        else return visitor.visitChildren(this);
    }
}


export class FileAnnotationContext extends ParserRuleContext {
    public FILE(): TerminalNode[];
    public FILE(i: number): TerminalNode;
    public FILE(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.FILE);
        } else {
            return this.getToken(KotlinParser.FILE, i);
        }
    }
    public COLON(): TerminalNode[];
    public COLON(i: number): TerminalNode;
    public COLON(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COLON);
        } else {
            return this.getToken(KotlinParser.COLON, i);
        }
    }
    public LSQUARE(): TerminalNode[];
    public LSQUARE(i: number): TerminalNode;
    public LSQUARE(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.LSQUARE);
        } else {
            return this.getToken(KotlinParser.LSQUARE, i);
        }
    }
    public RSQUARE(): TerminalNode[];
    public RSQUARE(i: number): TerminalNode;
    public RSQUARE(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.RSQUARE);
        } else {
            return this.getToken(KotlinParser.RSQUARE, i);
        }
    }
    public unescapedAnnotation(): UnescapedAnnotationContext[];
    public unescapedAnnotation(i: number): UnescapedAnnotationContext;
    public unescapedAnnotation(i?: number): UnescapedAnnotationContext | UnescapedAnnotationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        } else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    }
    public semi(): SemiContext[];
    public semi(i: number): SemiContext;
    public semi(i?: number): SemiContext | SemiContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SemiContext);
        } else {
            return this.getRuleContext(i, SemiContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_fileAnnotation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFileAnnotation) listener.enterFileAnnotation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFileAnnotation) listener.exitFileAnnotation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFileAnnotation) return visitor.visitFileAnnotation(this);
        else return visitor.visitChildren(this);
    }
}


export class PackageHeaderContext extends ParserRuleContext {
    public PACKAGE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PACKAGE, 0); }
    public identifier(): IdentifierContext | undefined {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    public semi(): SemiContext | undefined {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_packageHeader; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPackageHeader) listener.enterPackageHeader(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPackageHeader) listener.exitPackageHeader(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPackageHeader) return visitor.visitPackageHeader(this);
        else return visitor.visitChildren(this);
    }
}


export class ImportListContext extends ParserRuleContext {
    public importHeader(): ImportHeaderContext[];
    public importHeader(i: number): ImportHeaderContext;
    public importHeader(i?: number): ImportHeaderContext | ImportHeaderContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ImportHeaderContext);
        } else {
            return this.getRuleContext(i, ImportHeaderContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_importList; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterImportList) listener.enterImportList(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitImportList) listener.exitImportList(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitImportList) return visitor.visitImportList(this);
        else return visitor.visitChildren(this);
    }
}


export class ImportHeaderContext extends ParserRuleContext {
    public IMPORT(): TerminalNode { return this.getToken(KotlinParser.IMPORT, 0); }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext);
    }
    public DOT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DOT, 0); }
    public MULT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MULT, 0); }
    public importAlias(): ImportAliasContext | undefined {
        return this.tryGetRuleContext(0, ImportAliasContext);
    }
    public semi(): SemiContext | undefined {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_importHeader; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterImportHeader) listener.enterImportHeader(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitImportHeader) listener.exitImportHeader(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitImportHeader) return visitor.visitImportHeader(this);
        else return visitor.visitChildren(this);
    }
}


export class ImportAliasContext extends ParserRuleContext {
    public AS(): TerminalNode { return this.getToken(KotlinParser.AS, 0); }
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_importAlias; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterImportAlias) listener.enterImportAlias(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitImportAlias) listener.exitImportAlias(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitImportAlias) return visitor.visitImportAlias(this);
        else return visitor.visitChildren(this);
    }
}


export class TopLevelObjectContext extends ParserRuleContext {
    public classDeclaration(): ClassDeclarationContext | undefined {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | undefined {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
    public objectDeclaration(): ObjectDeclarationContext | undefined {
        return this.tryGetRuleContext(0, ObjectDeclarationContext);
    }
    public propertyDeclaration(): PropertyDeclarationContext | undefined {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    }
    public typeAlias(): TypeAliasContext | undefined {
        return this.tryGetRuleContext(0, TypeAliasContext);
    }
    public semi(): SemiContext | undefined {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_topLevelObject; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTopLevelObject) listener.enterTopLevelObject(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTopLevelObject) listener.exitTopLevelObject(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTopLevelObject) return visitor.visitTopLevelObject(this);
        else return visitor.visitChildren(this);
    }
}


export class ClassDeclarationContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public CLASS(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CLASS, 0); }
    public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INTERFACE, 0); }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public typeParameters(): TypeParametersContext | undefined {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    public primaryConstructor(): PrimaryConstructorContext | undefined {
        return this.tryGetRuleContext(0, PrimaryConstructorContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public delegationSpecifiers(): DelegationSpecifiersContext | undefined {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    public typeConstraints(): TypeConstraintsContext | undefined {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    public classBody(): ClassBodyContext | undefined {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    public enumClassBody(): EnumClassBodyContext | undefined {
        return this.tryGetRuleContext(0, EnumClassBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_classDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterClassDeclaration) listener.enterClassDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitClassDeclaration) listener.exitClassDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitClassDeclaration) return visitor.visitClassDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class PrimaryConstructorContext extends ParserRuleContext {
    public classParameters(): ClassParametersContext {
        return this.getRuleContext(0, ClassParametersContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public CONSTRUCTOR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CONSTRUCTOR, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_primaryConstructor; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPrimaryConstructor) listener.enterPrimaryConstructor(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPrimaryConstructor) listener.exitPrimaryConstructor(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPrimaryConstructor) return visitor.visitPrimaryConstructor(this);
        else return visitor.visitChildren(this);
    }
}


export class ClassParametersContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public classParameter(): ClassParameterContext[];
    public classParameter(i: number): ClassParameterContext;
    public classParameter(i?: number): ClassParameterContext | ClassParameterContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ClassParameterContext);
        } else {
            return this.getRuleContext(i, ClassParameterContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_classParameters; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterClassParameters) listener.enterClassParameters(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitClassParameters) listener.exitClassParameters(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitClassParameters) return visitor.visitClassParameters(this);
        else return visitor.visitChildren(this);
    }
}


export class ClassParameterContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public COLON(): TerminalNode { return this.getToken(KotlinParser.COLON, 0); }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public VAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.VAL, 0); }
    public VAR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.VAR, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_classParameter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterClassParameter) listener.enterClassParameter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitClassParameter) listener.exitClassParameter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitClassParameter) return visitor.visitClassParameter(this);
        else return visitor.visitChildren(this);
    }
}


export class DelegationSpecifiersContext extends ParserRuleContext {
    public delegationSpecifier(): DelegationSpecifierContext[];
    public delegationSpecifier(i: number): DelegationSpecifierContext;
    public delegationSpecifier(i?: number): DelegationSpecifierContext | DelegationSpecifierContext[] {
        if (i === undefined) {
            return this.getRuleContexts(DelegationSpecifierContext);
        } else {
            return this.getRuleContext(i, DelegationSpecifierContext);
        }
    }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_delegationSpecifiers; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterDelegationSpecifiers) listener.enterDelegationSpecifiers(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitDelegationSpecifiers) listener.exitDelegationSpecifiers(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitDelegationSpecifiers) return visitor.visitDelegationSpecifiers(this);
        else return visitor.visitChildren(this);
    }
}


export class DelegationSpecifierContext extends ParserRuleContext {
    public constructorInvocation(): ConstructorInvocationContext | undefined {
        return this.tryGetRuleContext(0, ConstructorInvocationContext);
    }
    public userType(): UserTypeContext | undefined {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    public explicitDelegation(): ExplicitDelegationContext | undefined {
        return this.tryGetRuleContext(0, ExplicitDelegationContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_delegationSpecifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterDelegationSpecifier) listener.enterDelegationSpecifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitDelegationSpecifier) listener.exitDelegationSpecifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitDelegationSpecifier) return visitor.visitDelegationSpecifier(this);
        else return visitor.visitChildren(this);
    }
}


export class ConstructorInvocationContext extends ParserRuleContext {
    public userType(): UserTypeContext {
        return this.getRuleContext(0, UserTypeContext);
    }
    public callSuffix(): CallSuffixContext {
        return this.getRuleContext(0, CallSuffixContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_constructorInvocation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterConstructorInvocation) listener.enterConstructorInvocation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitConstructorInvocation) listener.exitConstructorInvocation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitConstructorInvocation) return visitor.visitConstructorInvocation(this);
        else return visitor.visitChildren(this);
    }
}


export class ExplicitDelegationContext extends ParserRuleContext {
    public userType(): UserTypeContext {
        return this.getRuleContext(0, UserTypeContext);
    }
    public BY(): TerminalNode { return this.getToken(KotlinParser.BY, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_explicitDelegation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterExplicitDelegation) listener.enterExplicitDelegation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitExplicitDelegation) listener.exitExplicitDelegation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitExplicitDelegation) return visitor.visitExplicitDelegation(this);
        else return visitor.visitChildren(this);
    }
}


export class ClassBodyContext extends ParserRuleContext {
    public LCURL(): TerminalNode { return this.getToken(KotlinParser.LCURL, 0); }
    public RCURL(): TerminalNode { return this.getToken(KotlinParser.RCURL, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public classMemberDeclaration(): ClassMemberDeclarationContext[];
    public classMemberDeclaration(i: number): ClassMemberDeclarationContext;
    public classMemberDeclaration(i?: number): ClassMemberDeclarationContext | ClassMemberDeclarationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberDeclarationContext);
        } else {
            return this.getRuleContext(i, ClassMemberDeclarationContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_classBody; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterClassBody) listener.enterClassBody(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitClassBody) listener.exitClassBody(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitClassBody) return visitor.visitClassBody(this);
        else return visitor.visitChildren(this);
    }
}


export class ClassMemberDeclarationContext extends ParserRuleContext {
    public classDeclaration(): ClassDeclarationContext | undefined {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | undefined {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
    public objectDeclaration(): ObjectDeclarationContext | undefined {
        return this.tryGetRuleContext(0, ObjectDeclarationContext);
    }
    public companionObject(): CompanionObjectContext | undefined {
        return this.tryGetRuleContext(0, CompanionObjectContext);
    }
    public propertyDeclaration(): PropertyDeclarationContext | undefined {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    }
    public anonymousInitializer(): AnonymousInitializerContext | undefined {
        return this.tryGetRuleContext(0, AnonymousInitializerContext);
    }
    public secondaryConstructor(): SecondaryConstructorContext | undefined {
        return this.tryGetRuleContext(0, SecondaryConstructorContext);
    }
    public typeAlias(): TypeAliasContext | undefined {
        return this.tryGetRuleContext(0, TypeAliasContext);
    }
    public semi(): SemiContext | undefined {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_classMemberDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterClassMemberDeclaration) listener.enterClassMemberDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitClassMemberDeclaration) listener.exitClassMemberDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitClassMemberDeclaration) return visitor.visitClassMemberDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class AnonymousInitializerContext extends ParserRuleContext {
    public INIT(): TerminalNode { return this.getToken(KotlinParser.INIT, 0); }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_anonymousInitializer; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAnonymousInitializer) listener.enterAnonymousInitializer(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAnonymousInitializer) listener.exitAnonymousInitializer(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAnonymousInitializer) return visitor.visitAnonymousInitializer(this);
        else return visitor.visitChildren(this);
    }
}


export class SecondaryConstructorContext extends ParserRuleContext {
    public CONSTRUCTOR(): TerminalNode { return this.getToken(KotlinParser.CONSTRUCTOR, 0); }
    public functionValueParameters(): FunctionValueParametersContext {
        return this.getRuleContext(0, FunctionValueParametersContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public constructorDelegationCall(): ConstructorDelegationCallContext | undefined {
        return this.tryGetRuleContext(0, ConstructorDelegationCallContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_secondaryConstructor; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterSecondaryConstructor) listener.enterSecondaryConstructor(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitSecondaryConstructor) listener.exitSecondaryConstructor(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitSecondaryConstructor) return visitor.visitSecondaryConstructor(this);
        else return visitor.visitChildren(this);
    }
}


export class ConstructorDelegationCallContext extends ParserRuleContext {
    public THIS(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.THIS, 0); }
    public valueArguments(): ValueArgumentsContext {
        return this.getRuleContext(0, ValueArgumentsContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public SUPER(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SUPER, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_constructorDelegationCall; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterConstructorDelegationCall) listener.enterConstructorDelegationCall(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitConstructorDelegationCall) listener.exitConstructorDelegationCall(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitConstructorDelegationCall) return visitor.visitConstructorDelegationCall(this);
        else return visitor.visitChildren(this);
    }
}


export class EnumClassBodyContext extends ParserRuleContext {
    public LCURL(): TerminalNode { return this.getToken(KotlinParser.LCURL, 0); }
    public RCURL(): TerminalNode { return this.getToken(KotlinParser.RCURL, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public enumEntries(): EnumEntriesContext | undefined {
        return this.tryGetRuleContext(0, EnumEntriesContext);
    }
    public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    public classMemberDeclaration(): ClassMemberDeclarationContext[];
    public classMemberDeclaration(i: number): ClassMemberDeclarationContext;
    public classMemberDeclaration(i?: number): ClassMemberDeclarationContext | ClassMemberDeclarationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberDeclarationContext);
        } else {
            return this.getRuleContext(i, ClassMemberDeclarationContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_enumClassBody; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterEnumClassBody) listener.enterEnumClassBody(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitEnumClassBody) listener.exitEnumClassBody(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitEnumClassBody) return visitor.visitEnumClassBody(this);
        else return visitor.visitChildren(this);
    }
}


export class EnumEntriesContext extends ParserRuleContext {
    public enumEntry(): EnumEntryContext[];
    public enumEntry(i: number): EnumEntryContext;
    public enumEntry(i?: number): EnumEntryContext | EnumEntryContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EnumEntryContext);
        } else {
            return this.getRuleContext(i, EnumEntryContext);
        }
    }
    public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_enumEntries; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterEnumEntries) listener.enterEnumEntries(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitEnumEntries) listener.exitEnumEntries(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitEnumEntries) return visitor.visitEnumEntries(this);
        else return visitor.visitChildren(this);
    }
}


export class EnumEntryContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public valueArguments(): ValueArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    public classBody(): ClassBodyContext | undefined {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    public COMMA(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COMMA, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_enumEntry; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterEnumEntry) listener.enterEnumEntry(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitEnumEntry) listener.exitEnumEntry(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitEnumEntry) return visitor.visitEnumEntry(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionDeclarationContext extends ParserRuleContext {
    public FUN(): TerminalNode { return this.getToken(KotlinParser.FUN, 0); }
    public functionValueParameters(): FunctionValueParametersContext {
        return this.getRuleContext(0, FunctionValueParametersContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public type(): TypeContext[];
    public type(i: number): TypeContext;
    public type(i?: number): TypeContext | TypeContext[] {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        } else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    public DOT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DOT, 0); }
    public typeParameters(): TypeParametersContext | undefined {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    public identifier(): IdentifierContext | undefined {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public typeConstraints(): TypeConstraintsContext | undefined {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    public functionBody(): FunctionBodyContext | undefined {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionDeclaration) listener.enterFunctionDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionDeclaration) listener.exitFunctionDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionDeclaration) return visitor.visitFunctionDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionValueParametersContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public functionValueParameter(): FunctionValueParameterContext[];
    public functionValueParameter(i: number): FunctionValueParameterContext;
    public functionValueParameter(i?: number): FunctionValueParameterContext | FunctionValueParameterContext[] {
        if (i === undefined) {
            return this.getRuleContexts(FunctionValueParameterContext);
        } else {
            return this.getRuleContext(i, FunctionValueParameterContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionValueParameters; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionValueParameters) listener.enterFunctionValueParameters(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionValueParameters) listener.exitFunctionValueParameters(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionValueParameters) return visitor.visitFunctionValueParameters(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionValueParameterContext extends ParserRuleContext {
    public parameter(): ParameterContext {
        return this.getRuleContext(0, ParameterContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionValueParameter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionValueParameter) listener.enterFunctionValueParameter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionValueParameter) listener.exitFunctionValueParameter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionValueParameter) return visitor.visitFunctionValueParameter(this);
        else return visitor.visitChildren(this);
    }
}


export class ParameterContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public COLON(): TerminalNode { return this.getToken(KotlinParser.COLON, 0); }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_parameter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterParameter) listener.enterParameter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitParameter) listener.exitParameter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitParameter) return visitor.visitParameter(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionBodyContext extends ParserRuleContext {
    public block(): BlockContext | undefined {
        return this.tryGetRuleContext(0, BlockContext);
    }
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionBody; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionBody) listener.enterFunctionBody(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionBody) listener.exitFunctionBody(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionBody) return visitor.visitFunctionBody(this);
        else return visitor.visitChildren(this);
    }
}


export class ObjectDeclarationContext extends ParserRuleContext {
    public OBJECT(): TerminalNode { return this.getToken(KotlinParser.OBJECT, 0); }
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public primaryConstructor(): PrimaryConstructorContext | undefined {
        return this.tryGetRuleContext(0, PrimaryConstructorContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public delegationSpecifiers(): DelegationSpecifiersContext | undefined {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    public classBody(): ClassBodyContext | undefined {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_objectDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterObjectDeclaration) listener.enterObjectDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitObjectDeclaration) listener.exitObjectDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitObjectDeclaration) return visitor.visitObjectDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class CompanionObjectContext extends ParserRuleContext {
    public COMPANION(): TerminalNode { return this.getToken(KotlinParser.COMPANION, 0); }
    public OBJECT(): TerminalNode { return this.getToken(KotlinParser.OBJECT, 0); }
    public modifierList(): ModifierListContext[];
    public modifierList(i: number): ModifierListContext;
    public modifierList(i?: number): ModifierListContext | ModifierListContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ModifierListContext);
        } else {
            return this.getRuleContext(i, ModifierListContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public simpleIdentifier(): SimpleIdentifierContext | undefined {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public delegationSpecifiers(): DelegationSpecifiersContext | undefined {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    public classBody(): ClassBodyContext | undefined {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_companionObject; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterCompanionObject) listener.enterCompanionObject(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitCompanionObject) listener.exitCompanionObject(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitCompanionObject) return visitor.visitCompanionObject(this);
        else return visitor.visitChildren(this);
    }
}


export class PropertyDeclarationContext extends ParserRuleContext {
    public VAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.VAL, 0); }
    public VAR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.VAR, 0); }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public typeParameters(): TypeParametersContext | undefined {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    public DOT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DOT, 0); }
    public typeConstraints(): TypeConstraintsContext | undefined {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public semi(): SemiContext | undefined {
        return this.tryGetRuleContext(0, SemiContext);
    }
    public multiVariableDeclaration(): MultiVariableDeclarationContext | undefined {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    }
    public variableDeclaration(): VariableDeclarationContext | undefined {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    public BY(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.BY, 0); }
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public getter(): GetterContext | undefined {
        return this.tryGetRuleContext(0, GetterContext);
    }
    public setter(): SetterContext | undefined {
        return this.tryGetRuleContext(0, SetterContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_propertyDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPropertyDeclaration) listener.enterPropertyDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPropertyDeclaration) listener.exitPropertyDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPropertyDeclaration) return visitor.visitPropertyDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class MultiVariableDeclarationContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public variableDeclaration(): VariableDeclarationContext[];
    public variableDeclaration(i: number): VariableDeclarationContext;
    public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        } else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_multiVariableDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMultiVariableDeclaration) listener.enterMultiVariableDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMultiVariableDeclaration) listener.exitMultiVariableDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMultiVariableDeclaration) return visitor.visitMultiVariableDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class VariableDeclarationContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_variableDeclaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterVariableDeclaration) listener.enterVariableDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitVariableDeclaration) listener.exitVariableDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitVariableDeclaration) return visitor.visitVariableDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class GetterContext extends ParserRuleContext {
    public GETTER(): TerminalNode { return this.getToken(KotlinParser.GETTER, 0); }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public LPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    public RPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    public block(): BlockContext | undefined {
        return this.tryGetRuleContext(0, BlockContext);
    }
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_getter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterGetter) listener.enterGetter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitGetter) listener.exitGetter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitGetter) return visitor.visitGetter(this);
        else return visitor.visitChildren(this);
    }
}


export class SetterContext extends ParserRuleContext {
    public SETTER(): TerminalNode { return this.getToken(KotlinParser.SETTER, 0); }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public LPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    public RPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    public functionBody(): FunctionBodyContext | undefined {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    public simpleIdentifier(): SimpleIdentifierContext | undefined {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    public parameter(): ParameterContext | undefined {
        return this.tryGetRuleContext(0, ParameterContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public parameterModifier(): ParameterModifierContext[];
    public parameterModifier(i: number): ParameterModifierContext;
    public parameterModifier(i?: number): ParameterModifierContext | ParameterModifierContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ParameterModifierContext);
        } else {
            return this.getRuleContext(i, ParameterModifierContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_setter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterSetter) listener.enterSetter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitSetter) listener.exitSetter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitSetter) return visitor.visitSetter(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeAliasContext extends ParserRuleContext {
    public TYPE_ALIAS(): TerminalNode { return this.getToken(KotlinParser.TYPE_ALIAS, 0); }
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public ASSIGNMENT(): TerminalNode { return this.getToken(KotlinParser.ASSIGNMENT, 0); }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public typeParameters(): TypeParametersContext | undefined {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeAlias; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeAlias) listener.enterTypeAlias(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeAlias) listener.exitTypeAlias(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeAlias) return visitor.visitTypeAlias(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeParametersContext extends ParserRuleContext {
    public LANGLE(): TerminalNode { return this.getToken(KotlinParser.LANGLE, 0); }
    public typeParameter(): TypeParameterContext[];
    public typeParameter(i: number): TypeParameterContext;
    public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        } else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    }
    public RANGLE(): TerminalNode { return this.getToken(KotlinParser.RANGLE, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeParameters; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeParameters) listener.enterTypeParameters(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeParameters) listener.exitTypeParameters(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeParameters) return visitor.visitTypeParameters(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeParameterContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public modifierList(): ModifierListContext | undefined {
        return this.tryGetRuleContext(0, ModifierListContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeParameter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeParameter) listener.enterTypeParameter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeParameter) listener.exitTypeParameter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeParameter) return visitor.visitTypeParameter(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeContext extends ParserRuleContext {
    public parenthesizedType(): ParenthesizedTypeContext | undefined {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    public nullableType(): NullableTypeContext | undefined {
        return this.tryGetRuleContext(0, NullableTypeContext);
    }
    public typeReference(): TypeReferenceContext | undefined {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    public functionType(): FunctionTypeContext | undefined {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    }
    public typeModifierList(): TypeModifierListContext | undefined {
        return this.tryGetRuleContext(0, TypeModifierListContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_type; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterType) listener.enterType(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitType) listener.exitType(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitType) return visitor.visitType(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeModifierListContext extends ParserRuleContext {
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public SUSPEND(): TerminalNode[];
    public SUSPEND(i: number): TerminalNode;
    public SUSPEND(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.SUSPEND);
        } else {
            return this.getToken(KotlinParser.SUSPEND, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeModifierList; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeModifierList) listener.enterTypeModifierList(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeModifierList) listener.exitTypeModifierList(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeModifierList) return visitor.visitTypeModifierList(this);
        else return visitor.visitChildren(this);
    }
}


export class ParenthesizedTypeContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_parenthesizedType; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterParenthesizedType) listener.enterParenthesizedType(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitParenthesizedType) listener.exitParenthesizedType(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitParenthesizedType) return visitor.visitParenthesizedType(this);
        else return visitor.visitChildren(this);
    }
}


export class NullableTypeContext extends ParserRuleContext {
    public typeReference(): TypeReferenceContext | undefined {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    public parenthesizedType(): ParenthesizedTypeContext | undefined {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public QUEST(): TerminalNode[];
    public QUEST(i: number): TerminalNode;
    public QUEST(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.QUEST);
        } else {
            return this.getToken(KotlinParser.QUEST, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_nullableType; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterNullableType) listener.enterNullableType(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitNullableType) listener.exitNullableType(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitNullableType) return visitor.visitNullableType(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeReferenceContext extends ParserRuleContext {
    public LPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    public typeReference(): TypeReferenceContext | undefined {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    public RPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    public userType(): UserTypeContext | undefined {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DYNAMIC, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeReference; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeReference) listener.enterTypeReference(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeReference) listener.exitTypeReference(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeReference) return visitor.visitTypeReference(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionTypeContext extends ParserRuleContext {
    public functionTypeParameters(): FunctionTypeParametersContext {
        return this.getRuleContext(0, FunctionTypeParametersContext);
    }
    public ARROW(): TerminalNode { return this.getToken(KotlinParser.ARROW, 0); }
    public functionTypeReceiver(): FunctionTypeReceiverContext | undefined {
        return this.tryGetRuleContext(0, FunctionTypeReceiverContext);
    }
    public DOT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DOT, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionType; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionType) listener.enterFunctionType(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionType) listener.exitFunctionType(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionType) return visitor.visitFunctionType(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionTypeReceiverContext extends ParserRuleContext {
    public parenthesizedType(): ParenthesizedTypeContext | undefined {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    public nullableType(): NullableTypeContext | undefined {
        return this.tryGetRuleContext(0, NullableTypeContext);
    }
    public typeReference(): TypeReferenceContext | undefined {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionTypeReceiver; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionTypeReceiver) listener.enterFunctionTypeReceiver(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionTypeReceiver) listener.exitFunctionTypeReceiver(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionTypeReceiver) return visitor.visitFunctionTypeReceiver(this);
        else return visitor.visitChildren(this);
    }
}


export class UserTypeContext extends ParserRuleContext {
    public simpleUserType(): SimpleUserTypeContext[];
    public simpleUserType(i: number): SimpleUserTypeContext;
    public simpleUserType(i?: number): SimpleUserTypeContext | SimpleUserTypeContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SimpleUserTypeContext);
        } else {
            return this.getRuleContext(i, SimpleUserTypeContext);
        }
    }
    public DOT(): TerminalNode[];
    public DOT(i: number): TerminalNode;
    public DOT(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DOT);
        } else {
            return this.getToken(KotlinParser.DOT, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_userType; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterUserType) listener.enterUserType(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitUserType) listener.exitUserType(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitUserType) return visitor.visitUserType(this);
        else return visitor.visitChildren(this);
    }
}


export class SimpleUserTypeContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public typeArguments(): TypeArgumentsContext | undefined {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_simpleUserType; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterSimpleUserType) listener.enterSimpleUserType(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitSimpleUserType) listener.exitSimpleUserType(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitSimpleUserType) return visitor.visitSimpleUserType(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionTypeParametersContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext;
    public parameter(i?: number): ParameterContext | ParameterContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        } else {
            return this.getRuleContext(i, ParameterContext);
        }
    }
    public type(): TypeContext[];
    public type(i: number): TypeContext;
    public type(i?: number): TypeContext | TypeContext[] {
        if (i === undefined) {
            return this.getRuleContexts(TypeContext);
        } else {
            return this.getRuleContext(i, TypeContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionTypeParameters; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionTypeParameters) listener.enterFunctionTypeParameters(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionTypeParameters) listener.exitFunctionTypeParameters(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionTypeParameters) return visitor.visitFunctionTypeParameters(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeConstraintsContext extends ParserRuleContext {
    public WHERE(): TerminalNode { return this.getToken(KotlinParser.WHERE, 0); }
    public typeConstraint(): TypeConstraintContext[];
    public typeConstraint(i: number): TypeConstraintContext;
    public typeConstraint(i?: number): TypeConstraintContext | TypeConstraintContext[] {
        if (i === undefined) {
            return this.getRuleContexts(TypeConstraintContext);
        } else {
            return this.getRuleContext(i, TypeConstraintContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeConstraints; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeConstraints) listener.enterTypeConstraints(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeConstraints) listener.exitTypeConstraints(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeConstraints) return visitor.visitTypeConstraints(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeConstraintContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public COLON(): TerminalNode { return this.getToken(KotlinParser.COLON, 0); }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeConstraint; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeConstraint) listener.enterTypeConstraint(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeConstraint) listener.exitTypeConstraint(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeConstraint) return visitor.visitTypeConstraint(this);
        else return visitor.visitChildren(this);
    }
}


export class BlockContext extends ParserRuleContext {
    public LCURL(): TerminalNode { return this.getToken(KotlinParser.LCURL, 0); }
    public RCURL(): TerminalNode { return this.getToken(KotlinParser.RCURL, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext;
    public statement(i?: number): StatementContext | StatementContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        } else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    public semi(): SemiContext[];
    public semi(i: number): SemiContext;
    public semi(i?: number): SemiContext | SemiContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SemiContext);
        } else {
            return this.getRuleContext(i, SemiContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_block; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterBlock) listener.enterBlock(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitBlock) listener.exitBlock(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitBlock) return visitor.visitBlock(this);
        else return visitor.visitChildren(this);
    }
}


export class StatementsContext extends ParserRuleContext {
    public statement(): StatementContext[];
    public statement(i: number): StatementContext;
    public statement(i?: number): StatementContext | StatementContext[] {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        } else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    public semi(): SemiContext[];
    public semi(i: number): SemiContext;
    public semi(i?: number): SemiContext | SemiContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SemiContext);
        } else {
            return this.getRuleContext(i, SemiContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_statements; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterStatements) listener.enterStatements(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitStatements) listener.exitStatements(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitStatements) return visitor.visitStatements(this);
        else return visitor.visitChildren(this);
    }
}


export class StatementContext extends ParserRuleContext {
    public declaration(): DeclarationContext | undefined {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    public assignment(): AssignmentContext | undefined {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_statement; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterStatement) listener.enterStatement(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitStatement) listener.exitStatement(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitStatement) return visitor.visitStatement(this);
        else return visitor.visitChildren(this);
    }
}


export class DeclarationContext extends ParserRuleContext {
    public classDeclaration(): ClassDeclarationContext | undefined {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    public functionDeclaration(): FunctionDeclarationContext | undefined {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
    public propertyDeclaration(): PropertyDeclarationContext | undefined {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    }
    public typeAlias(): TypeAliasContext | undefined {
        return this.tryGetRuleContext(0, TypeAliasContext);
    }
    public labelDefinition(): LabelDefinitionContext[];
    public labelDefinition(i: number): LabelDefinitionContext;
    public labelDefinition(i?: number): LabelDefinitionContext | LabelDefinitionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LabelDefinitionContext);
        } else {
            return this.getRuleContext(i, LabelDefinitionContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_declaration; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterDeclaration) listener.enterDeclaration(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitDeclaration) listener.exitDeclaration(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitDeclaration) return visitor.visitDeclaration(this);
        else return visitor.visitChildren(this);
    }
}


export class AssignmentContext extends ParserRuleContext {
    public assignableExpression(): AssignableExpressionContext {
        return this.getRuleContext(0, AssignableExpressionContext);
    }
    public assignmentOperator(): AssignmentOperatorContext {
        return this.getRuleContext(0, AssignmentOperatorContext);
    }
    public disjunction(): DisjunctionContext {
        return this.getRuleContext(0, DisjunctionContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_assignment; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAssignment) listener.enterAssignment(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAssignment) listener.exitAssignment(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAssignment) return visitor.visitAssignment(this);
        else return visitor.visitChildren(this);
    }
}


export class ExpressionContext extends ParserRuleContext {
    public disjunction(): DisjunctionContext {
        return this.getRuleContext(0, DisjunctionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_expression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterExpression) listener.enterExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitExpression) listener.exitExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitExpression) return visitor.visitExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class DisjunctionContext extends ParserRuleContext {
    public conjunction(): ConjunctionContext[];
    public conjunction(i: number): ConjunctionContext;
    public conjunction(i?: number): ConjunctionContext | ConjunctionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ConjunctionContext);
        } else {
            return this.getRuleContext(i, ConjunctionContext);
        }
    }
    public DISJ(): TerminalNode[];
    public DISJ(i: number): TerminalNode;
    public DISJ(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DISJ);
        } else {
            return this.getToken(KotlinParser.DISJ, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_disjunction; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterDisjunction) listener.enterDisjunction(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitDisjunction) listener.exitDisjunction(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitDisjunction) return visitor.visitDisjunction(this);
        else return visitor.visitChildren(this);
    }
}


export class ConjunctionContext extends ParserRuleContext {
    public equality(): EqualityContext[];
    public equality(i: number): EqualityContext;
    public equality(i?: number): EqualityContext | EqualityContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EqualityContext);
        } else {
            return this.getRuleContext(i, EqualityContext);
        }
    }
    public CONJ(): TerminalNode[];
    public CONJ(i: number): TerminalNode;
    public CONJ(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.CONJ);
        } else {
            return this.getToken(KotlinParser.CONJ, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_conjunction; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterConjunction) listener.enterConjunction(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitConjunction) listener.exitConjunction(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitConjunction) return visitor.visitConjunction(this);
        else return visitor.visitChildren(this);
    }
}


export class EqualityContext extends ParserRuleContext {
    public comparison(): ComparisonContext[];
    public comparison(i: number): ComparisonContext;
    public comparison(i?: number): ComparisonContext | ComparisonContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        } else {
            return this.getRuleContext(i, ComparisonContext);
        }
    }
    public equalityOperator(): EqualityOperatorContext[];
    public equalityOperator(i: number): EqualityOperatorContext;
    public equalityOperator(i?: number): EqualityOperatorContext | EqualityOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(EqualityOperatorContext);
        } else {
            return this.getRuleContext(i, EqualityOperatorContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_equality; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterEquality) listener.enterEquality(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitEquality) listener.exitEquality(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitEquality) return visitor.visitEquality(this);
        else return visitor.visitChildren(this);
    }
}


export class ComparisonContext extends ParserRuleContext {
    public infixOperation(): InfixOperationContext[];
    public infixOperation(i: number): InfixOperationContext;
    public infixOperation(i?: number): InfixOperationContext | InfixOperationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(InfixOperationContext);
        } else {
            return this.getRuleContext(i, InfixOperationContext);
        }
    }
    public comparisonOperator(): ComparisonOperatorContext | undefined {
        return this.tryGetRuleContext(0, ComparisonOperatorContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_comparison; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterComparison) listener.enterComparison(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitComparison) listener.exitComparison(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitComparison) return visitor.visitComparison(this);
        else return visitor.visitChildren(this);
    }
}


export class InfixOperationContext extends ParserRuleContext {
    public elvisExpression(): ElvisExpressionContext[];
    public elvisExpression(i: number): ElvisExpressionContext;
    public elvisExpression(i?: number): ElvisExpressionContext | ElvisExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ElvisExpressionContext);
        } else {
            return this.getRuleContext(i, ElvisExpressionContext);
        }
    }
    public inOperator(): InOperatorContext[];
    public inOperator(i: number): InOperatorContext;
    public inOperator(i?: number): InOperatorContext | InOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(InOperatorContext);
        } else {
            return this.getRuleContext(i, InOperatorContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public isOperator(): IsOperatorContext | undefined {
        return this.tryGetRuleContext(0, IsOperatorContext);
    }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_infixOperation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterInfixOperation) listener.enterInfixOperation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitInfixOperation) listener.exitInfixOperation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitInfixOperation) return visitor.visitInfixOperation(this);
        else return visitor.visitChildren(this);
    }
}


export class ElvisExpressionContext extends ParserRuleContext {
    public infixFunctionCall(): InfixFunctionCallContext[];
    public infixFunctionCall(i: number): InfixFunctionCallContext;
    public infixFunctionCall(i?: number): InfixFunctionCallContext | InfixFunctionCallContext[] {
        if (i === undefined) {
            return this.getRuleContexts(InfixFunctionCallContext);
        } else {
            return this.getRuleContext(i, InfixFunctionCallContext);
        }
    }
    public ELVIS(): TerminalNode[];
    public ELVIS(i: number): TerminalNode;
    public ELVIS(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.ELVIS);
        } else {
            return this.getToken(KotlinParser.ELVIS, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_elvisExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterElvisExpression) listener.enterElvisExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitElvisExpression) listener.exitElvisExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitElvisExpression) return visitor.visitElvisExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class InfixFunctionCallContext extends ParserRuleContext {
    public rangeExpression(): RangeExpressionContext[];
    public rangeExpression(i: number): RangeExpressionContext;
    public rangeExpression(i?: number): RangeExpressionContext | RangeExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(RangeExpressionContext);
        } else {
            return this.getRuleContext(i, RangeExpressionContext);
        }
    }
    public simpleIdentifier(): SimpleIdentifierContext[];
    public simpleIdentifier(i: number): SimpleIdentifierContext;
    public simpleIdentifier(i?: number): SimpleIdentifierContext | SimpleIdentifierContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SimpleIdentifierContext);
        } else {
            return this.getRuleContext(i, SimpleIdentifierContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_infixFunctionCall; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterInfixFunctionCall) listener.enterInfixFunctionCall(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitInfixFunctionCall) listener.exitInfixFunctionCall(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitInfixFunctionCall) return visitor.visitInfixFunctionCall(this);
        else return visitor.visitChildren(this);
    }
}


export class RangeExpressionContext extends ParserRuleContext {
    public additiveExpression(): AdditiveExpressionContext[];
    public additiveExpression(i: number): AdditiveExpressionContext;
    public additiveExpression(i?: number): AdditiveExpressionContext | AdditiveExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExpressionContext);
        } else {
            return this.getRuleContext(i, AdditiveExpressionContext);
        }
    }
    public RANGE(): TerminalNode[];
    public RANGE(i: number): TerminalNode;
    public RANGE(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.RANGE);
        } else {
            return this.getToken(KotlinParser.RANGE, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_rangeExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterRangeExpression) listener.enterRangeExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitRangeExpression) listener.exitRangeExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitRangeExpression) return visitor.visitRangeExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class AdditiveExpressionContext extends ParserRuleContext {
    public multiplicativeExpression(): MultiplicativeExpressionContext[];
    public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
    public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        } else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    }
    public additiveOperator(): AdditiveOperatorContext[];
    public additiveOperator(i: number): AdditiveOperatorContext;
    public additiveOperator(i?: number): AdditiveOperatorContext | AdditiveOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveOperatorContext);
        } else {
            return this.getRuleContext(i, AdditiveOperatorContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_additiveExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAdditiveExpression) listener.enterAdditiveExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAdditiveExpression) listener.exitAdditiveExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAdditiveExpression) return visitor.visitAdditiveExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
    public asExpression(): AsExpressionContext[];
    public asExpression(i: number): AsExpressionContext;
    public asExpression(i?: number): AsExpressionContext | AsExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AsExpressionContext);
        } else {
            return this.getRuleContext(i, AsExpressionContext);
        }
    }
    public multiplicativeOperator(): MultiplicativeOperatorContext[];
    public multiplicativeOperator(i: number): MultiplicativeOperatorContext;
    public multiplicativeOperator(i?: number): MultiplicativeOperatorContext | MultiplicativeOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeOperatorContext);
        } else {
            return this.getRuleContext(i, MultiplicativeOperatorContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_multiplicativeExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMultiplicativeExpression) listener.enterMultiplicativeExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMultiplicativeExpression) listener.exitMultiplicativeExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMultiplicativeExpression) return visitor.visitMultiplicativeExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class AsExpressionContext extends ParserRuleContext {
    public prefixUnaryExpression(): PrefixUnaryExpressionContext {
        return this.getRuleContext(0, PrefixUnaryExpressionContext);
    }
    public asExpressionTail(): AsExpressionTailContext | undefined {
        return this.tryGetRuleContext(0, AsExpressionTailContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_asExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAsExpression) listener.enterAsExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAsExpression) listener.exitAsExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAsExpression) return visitor.visitAsExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class AsExpressionTailContext extends ParserRuleContext {
    public asOperator(): AsOperatorContext {
        return this.getRuleContext(0, AsOperatorContext);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public asExpressionTail(): AsExpressionTailContext | undefined {
        return this.tryGetRuleContext(0, AsExpressionTailContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_asExpressionTail; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAsExpressionTail) listener.enterAsExpressionTail(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAsExpressionTail) listener.exitAsExpressionTail(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAsExpressionTail) return visitor.visitAsExpressionTail(this);
        else return visitor.visitChildren(this);
    }
}


export class PrefixUnaryExpressionContext extends ParserRuleContext {
    public postfixUnaryExpression(): PostfixUnaryExpressionContext {
        return this.getRuleContext(0, PostfixUnaryExpressionContext);
    }
    public prefixUnaryOperator(): PrefixUnaryOperatorContext[];
    public prefixUnaryOperator(i: number): PrefixUnaryOperatorContext;
    public prefixUnaryOperator(i?: number): PrefixUnaryOperatorContext | PrefixUnaryOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(PrefixUnaryOperatorContext);
        } else {
            return this.getRuleContext(i, PrefixUnaryOperatorContext);
        }
    }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_prefixUnaryExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPrefixUnaryExpression) listener.enterPrefixUnaryExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPrefixUnaryExpression) listener.exitPrefixUnaryExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPrefixUnaryExpression) return visitor.visitPrefixUnaryExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class PostfixUnaryExpressionContext extends ParserRuleContext {
    public assignableExpression(): AssignableExpressionContext | undefined {
        return this.tryGetRuleContext(0, AssignableExpressionContext);
    }
    public callExpression(): CallExpressionContext | undefined {
        return this.tryGetRuleContext(0, CallExpressionContext);
    }
    public labeledExpression(): LabeledExpressionContext | undefined {
        return this.tryGetRuleContext(0, LabeledExpressionContext);
    }
    public dotQualifiedExpression(): DotQualifiedExpressionContext | undefined {
        return this.tryGetRuleContext(0, DotQualifiedExpressionContext);
    }
    public postfixUnaryOperator(): PostfixUnaryOperatorContext[];
    public postfixUnaryOperator(i: number): PostfixUnaryOperatorContext;
    public postfixUnaryOperator(i?: number): PostfixUnaryOperatorContext | PostfixUnaryOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(PostfixUnaryOperatorContext);
        } else {
            return this.getRuleContext(i, PostfixUnaryOperatorContext);
        }
    }
    public LPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    public callableReference(): CallableReferenceContext | undefined {
        return this.tryGetRuleContext(0, CallableReferenceContext);
    }
    public RPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_postfixUnaryExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPostfixUnaryExpression) listener.enterPostfixUnaryExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPostfixUnaryExpression) listener.exitPostfixUnaryExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPostfixUnaryExpression) return visitor.visitPostfixUnaryExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class CallExpressionContext extends ParserRuleContext {
    public assignableExpression(): AssignableExpressionContext {
        return this.getRuleContext(0, AssignableExpressionContext);
    }
    public typeArguments(): TypeArgumentsContext | undefined {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    public valueArguments(): ValueArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    public annotatedLambda(): AnnotatedLambdaContext[];
    public annotatedLambda(i: number): AnnotatedLambdaContext;
    public annotatedLambda(i?: number): AnnotatedLambdaContext | AnnotatedLambdaContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotatedLambdaContext);
        } else {
            return this.getRuleContext(i, AnnotatedLambdaContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_callExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterCallExpression) listener.enterCallExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitCallExpression) listener.exitCallExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitCallExpression) return visitor.visitCallExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class LabeledExpressionContext extends ParserRuleContext {
    public labelDefinition(): LabelDefinitionContext {
        return this.getRuleContext(0, LabelDefinitionContext);
    }
    public postfixUnaryExpression(): PostfixUnaryExpressionContext {
        return this.getRuleContext(0, PostfixUnaryExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_labeledExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLabeledExpression) listener.enterLabeledExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLabeledExpression) listener.exitLabeledExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLabeledExpression) return visitor.visitLabeledExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class DotQualifiedExpressionContext extends ParserRuleContext {
    public assignableExpression(): AssignableExpressionContext {
        return this.getRuleContext(0, AssignableExpressionContext);
    }
    public memberAccessOperator(): MemberAccessOperatorContext[];
    public memberAccessOperator(i: number): MemberAccessOperatorContext;
    public memberAccessOperator(i?: number): MemberAccessOperatorContext | MemberAccessOperatorContext[] {
        if (i === undefined) {
            return this.getRuleContexts(MemberAccessOperatorContext);
        } else {
            return this.getRuleContext(i, MemberAccessOperatorContext);
        }
    }
    public postfixUnaryExpression(): PostfixUnaryExpressionContext[];
    public postfixUnaryExpression(i: number): PostfixUnaryExpressionContext;
    public postfixUnaryExpression(i?: number): PostfixUnaryExpressionContext | PostfixUnaryExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(PostfixUnaryExpressionContext);
        } else {
            return this.getRuleContext(i, PostfixUnaryExpressionContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_dotQualifiedExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterDotQualifiedExpression) listener.enterDotQualifiedExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitDotQualifiedExpression) listener.exitDotQualifiedExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitDotQualifiedExpression) return visitor.visitDotQualifiedExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class AssignableExpressionContext extends ParserRuleContext {
    public primaryExpression(): PrimaryExpressionContext | undefined {
        return this.tryGetRuleContext(0, PrimaryExpressionContext);
    }
    public indexingExpression(): IndexingExpressionContext | undefined {
        return this.tryGetRuleContext(0, IndexingExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_assignableExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAssignableExpression) listener.enterAssignableExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAssignableExpression) listener.exitAssignableExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAssignableExpression) return visitor.visitAssignableExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class IndexingExpressionContext extends ParserRuleContext {
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext);
    }
    public arrayAccess(): ArrayAccessContext[];
    public arrayAccess(i: number): ArrayAccessContext;
    public arrayAccess(i?: number): ArrayAccessContext | ArrayAccessContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ArrayAccessContext);
        } else {
            return this.getRuleContext(i, ArrayAccessContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_indexingExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterIndexingExpression) listener.enterIndexingExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitIndexingExpression) listener.exitIndexingExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitIndexingExpression) return visitor.visitIndexingExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class CallSuffixContext extends ParserRuleContext {
    public valueArguments(): ValueArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    public typeArguments(): TypeArgumentsContext | undefined {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    public annotatedLambda(): AnnotatedLambdaContext[];
    public annotatedLambda(i: number): AnnotatedLambdaContext;
    public annotatedLambda(i?: number): AnnotatedLambdaContext | AnnotatedLambdaContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotatedLambdaContext);
        } else {
            return this.getRuleContext(i, AnnotatedLambdaContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_callSuffix; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterCallSuffix) listener.enterCallSuffix(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitCallSuffix) listener.exitCallSuffix(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitCallSuffix) return visitor.visitCallSuffix(this);
        else return visitor.visitChildren(this);
    }
}


export class AnnotatedLambdaContext extends ParserRuleContext {
    public functionLiteral(): FunctionLiteralContext {
        return this.getRuleContext(0, FunctionLiteralContext);
    }
    public unescapedAnnotation(): UnescapedAnnotationContext[];
    public unescapedAnnotation(i: number): UnescapedAnnotationContext;
    public unescapedAnnotation(i?: number): UnescapedAnnotationContext | UnescapedAnnotationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        } else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    }
    public LabelDefinition(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LabelDefinition, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_annotatedLambda; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAnnotatedLambda) listener.enterAnnotatedLambda(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAnnotatedLambda) listener.exitAnnotatedLambda(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAnnotatedLambda) return visitor.visitAnnotatedLambda(this);
        else return visitor.visitChildren(this);
    }
}


export class ArrayAccessContext extends ParserRuleContext {
    public LSQUARE(): TerminalNode { return this.getToken(KotlinParser.LSQUARE, 0); }
    public RSQUARE(): TerminalNode { return this.getToken(KotlinParser.RSQUARE, 0); }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_arrayAccess; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterArrayAccess) listener.enterArrayAccess(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitArrayAccess) listener.exitArrayAccess(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitArrayAccess) return visitor.visitArrayAccess(this);
        else return visitor.visitChildren(this);
    }
}


export class ValueArgumentsContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public valueArgument(): ValueArgumentContext[];
    public valueArgument(i: number): ValueArgumentContext;
    public valueArgument(i?: number): ValueArgumentContext | ValueArgumentContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ValueArgumentContext);
        } else {
            return this.getRuleContext(i, ValueArgumentContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_valueArguments; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterValueArguments) listener.enterValueArguments(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitValueArguments) listener.exitValueArguments(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitValueArguments) return visitor.visitValueArguments(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeArgumentsContext extends ParserRuleContext {
    public LANGLE(): TerminalNode { return this.getToken(KotlinParser.LANGLE, 0); }
    public typeProjection(): TypeProjectionContext[];
    public typeProjection(i: number): TypeProjectionContext;
    public typeProjection(i?: number): TypeProjectionContext | TypeProjectionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(TypeProjectionContext);
        } else {
            return this.getRuleContext(i, TypeProjectionContext);
        }
    }
    public RANGLE(): TerminalNode { return this.getToken(KotlinParser.RANGLE, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeArguments; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeArguments) listener.enterTypeArguments(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeArguments) listener.exitTypeArguments(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeArguments) return visitor.visitTypeArguments(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeProjectionContext extends ParserRuleContext {
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    public typeProjectionModifierList(): TypeProjectionModifierListContext | undefined {
        return this.tryGetRuleContext(0, TypeProjectionModifierListContext);
    }
    public MULT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MULT, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeProjection; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeProjection) listener.enterTypeProjection(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeProjection) listener.exitTypeProjection(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeProjection) return visitor.visitTypeProjection(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeProjectionModifierListContext extends ParserRuleContext {
    public varianceAnnotation(): VarianceAnnotationContext[];
    public varianceAnnotation(i: number): VarianceAnnotationContext;
    public varianceAnnotation(i?: number): VarianceAnnotationContext | VarianceAnnotationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(VarianceAnnotationContext);
        } else {
            return this.getRuleContext(i, VarianceAnnotationContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeProjectionModifierList; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeProjectionModifierList) listener.enterTypeProjectionModifierList(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeProjectionModifierList) listener.exitTypeProjectionModifierList(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeProjectionModifierList) return visitor.visitTypeProjectionModifierList(this);
        else return visitor.visitChildren(this);
    }
}


export class ValueArgumentContext extends ParserRuleContext {
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public simpleIdentifier(): SimpleIdentifierContext | undefined {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public MULT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MULT, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_valueArgument; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterValueArgument) listener.enterValueArgument(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitValueArgument) listener.exitValueArgument(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitValueArgument) return visitor.visitValueArgument(this);
        else return visitor.visitChildren(this);
    }
}


export class PrimaryExpressionContext extends ParserRuleContext {
    public parenthesizedExpression(): ParenthesizedExpressionContext | undefined {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    }
    public literalConstant(): LiteralConstantContext | undefined {
        return this.tryGetRuleContext(0, LiteralConstantContext);
    }
    public stringLiteral(): StringLiteralContext | undefined {
        return this.tryGetRuleContext(0, StringLiteralContext);
    }
    public simpleIdentifier(): SimpleIdentifierContext | undefined {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    public functionLiteral(): FunctionLiteralContext | undefined {
        return this.tryGetRuleContext(0, FunctionLiteralContext);
    }
    public objectLiteral(): ObjectLiteralContext | undefined {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    }
    public collectionLiteral(): CollectionLiteralContext | undefined {
        return this.tryGetRuleContext(0, CollectionLiteralContext);
    }
    public thisExpression(): ThisExpressionContext | undefined {
        return this.tryGetRuleContext(0, ThisExpressionContext);
    }
    public superExpression(): SuperExpressionContext | undefined {
        return this.tryGetRuleContext(0, SuperExpressionContext);
    }
    public conditionalExpression(): ConditionalExpressionContext | undefined {
        return this.tryGetRuleContext(0, ConditionalExpressionContext);
    }
    public tryExpression(): TryExpressionContext | undefined {
        return this.tryGetRuleContext(0, TryExpressionContext);
    }
    public loopExpression(): LoopExpressionContext | undefined {
        return this.tryGetRuleContext(0, LoopExpressionContext);
    }
    public jumpExpression(): JumpExpressionContext | undefined {
        return this.tryGetRuleContext(0, JumpExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_primaryExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPrimaryExpression) listener.enterPrimaryExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPrimaryExpression) listener.exitPrimaryExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPrimaryExpression) return visitor.visitPrimaryExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class ParenthesizedExpressionContext extends ParserRuleContext {
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_parenthesizedExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterParenthesizedExpression) listener.enterParenthesizedExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitParenthesizedExpression) listener.exitParenthesizedExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitParenthesizedExpression) return visitor.visitParenthesizedExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class LiteralConstantContext extends ParserRuleContext {
    public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.BooleanLiteral, 0); }
    public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.IntegerLiteral, 0); }
    public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.HexLiteral, 0); }
    public BinLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.BinLiteral, 0); }
    public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CharacterLiteral, 0); }
    public RealLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RealLiteral, 0); }
    public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.NullLiteral, 0); }
    public LongLiteral(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LongLiteral, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_literalConstant; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLiteralConstant) listener.enterLiteralConstant(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLiteralConstant) listener.exitLiteralConstant(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLiteralConstant) return visitor.visitLiteralConstant(this);
        else return visitor.visitChildren(this);
    }
}


export class StringLiteralContext extends ParserRuleContext {
    public lineStringLiteral(): LineStringLiteralContext | undefined {
        return this.tryGetRuleContext(0, LineStringLiteralContext);
    }
    public multiLineStringLiteral(): MultiLineStringLiteralContext | undefined {
        return this.tryGetRuleContext(0, MultiLineStringLiteralContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_stringLiteral; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterStringLiteral) listener.enterStringLiteral(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitStringLiteral) listener.exitStringLiteral(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitStringLiteral) return visitor.visitStringLiteral(this);
        else return visitor.visitChildren(this);
    }
}


export class LineStringLiteralContext extends ParserRuleContext {
    public QUOTE_OPEN(): TerminalNode { return this.getToken(KotlinParser.QUOTE_OPEN, 0); }
    public QUOTE_CLOSE(): TerminalNode { return this.getToken(KotlinParser.QUOTE_CLOSE, 0); }
    public lineStringContent(): LineStringContentContext[];
    public lineStringContent(i: number): LineStringContentContext;
    public lineStringContent(i?: number): LineStringContentContext | LineStringContentContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LineStringContentContext);
        } else {
            return this.getRuleContext(i, LineStringContentContext);
        }
    }
    public lineStringExpression(): LineStringExpressionContext[];
    public lineStringExpression(i: number): LineStringExpressionContext;
    public lineStringExpression(i?: number): LineStringExpressionContext | LineStringExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LineStringExpressionContext);
        } else {
            return this.getRuleContext(i, LineStringExpressionContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_lineStringLiteral; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLineStringLiteral) listener.enterLineStringLiteral(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLineStringLiteral) listener.exitLineStringLiteral(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLineStringLiteral) return visitor.visitLineStringLiteral(this);
        else return visitor.visitChildren(this);
    }
}


export class MultiLineStringLiteralContext extends ParserRuleContext {
    public TRIPLE_QUOTE_OPEN(): TerminalNode { return this.getToken(KotlinParser.TRIPLE_QUOTE_OPEN, 0); }
    public TRIPLE_QUOTE_CLOSE(): TerminalNode { return this.getToken(KotlinParser.TRIPLE_QUOTE_CLOSE, 0); }
    public multiLineStringContent(): MultiLineStringContentContext[];
    public multiLineStringContent(i: number): MultiLineStringContentContext;
    public multiLineStringContent(i?: number): MultiLineStringContentContext | MultiLineStringContentContext[] {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringContentContext);
        } else {
            return this.getRuleContext(i, MultiLineStringContentContext);
        }
    }
    public multiLineStringExpression(): MultiLineStringExpressionContext[];
    public multiLineStringExpression(i: number): MultiLineStringExpressionContext;
    public multiLineStringExpression(i?: number): MultiLineStringExpressionContext | MultiLineStringExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringExpressionContext);
        } else {
            return this.getRuleContext(i, MultiLineStringExpressionContext);
        }
    }
    public lineStringLiteral(): LineStringLiteralContext[];
    public lineStringLiteral(i: number): LineStringLiteralContext;
    public lineStringLiteral(i?: number): LineStringLiteralContext | LineStringLiteralContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LineStringLiteralContext);
        } else {
            return this.getRuleContext(i, LineStringLiteralContext);
        }
    }
    public MultiLineStringQuote(): TerminalNode[];
    public MultiLineStringQuote(i: number): TerminalNode;
    public MultiLineStringQuote(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.MultiLineStringQuote);
        } else {
            return this.getToken(KotlinParser.MultiLineStringQuote, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_multiLineStringLiteral; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMultiLineStringLiteral) listener.enterMultiLineStringLiteral(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMultiLineStringLiteral) listener.exitMultiLineStringLiteral(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMultiLineStringLiteral) return visitor.visitMultiLineStringLiteral(this);
        else return visitor.visitChildren(this);
    }
}


export class LineStringContentContext extends ParserRuleContext {
    public LineStrText(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LineStrText, 0); }
    public LineStrEscapedChar(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LineStrEscapedChar, 0); }
    public LineStrRef(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LineStrRef, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_lineStringContent; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLineStringContent) listener.enterLineStringContent(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLineStringContent) listener.exitLineStringContent(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLineStringContent) return visitor.visitLineStringContent(this);
        else return visitor.visitChildren(this);
    }
}


export class LineStringExpressionContext extends ParserRuleContext {
    public LineStrExprStart(): TerminalNode { return this.getToken(KotlinParser.LineStrExprStart, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RCURL(): TerminalNode { return this.getToken(KotlinParser.RCURL, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_lineStringExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLineStringExpression) listener.enterLineStringExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLineStringExpression) listener.exitLineStringExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLineStringExpression) return visitor.visitLineStringExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class MultiLineStringContentContext extends ParserRuleContext {
    public MultiLineStrText(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MultiLineStrText, 0); }
    public MultiLineStrEscapedChar(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MultiLineStrEscapedChar, 0); }
    public MultiLineStrRef(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MultiLineStrRef, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_multiLineStringContent; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMultiLineStringContent) listener.enterMultiLineStringContent(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMultiLineStringContent) listener.exitMultiLineStringContent(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMultiLineStringContent) return visitor.visitMultiLineStringContent(this);
        else return visitor.visitChildren(this);
    }
}


export class MultiLineStringExpressionContext extends ParserRuleContext {
    public MultiLineStrExprStart(): TerminalNode { return this.getToken(KotlinParser.MultiLineStrExprStart, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RCURL(): TerminalNode { return this.getToken(KotlinParser.RCURL, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_multiLineStringExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMultiLineStringExpression) listener.enterMultiLineStringExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMultiLineStringExpression) listener.exitMultiLineStringExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMultiLineStringExpression) return visitor.visitMultiLineStringExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionLiteralContext extends ParserRuleContext {
    public LCURL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LCURL, 0); }
    public statements(): StatementsContext | undefined {
        return this.tryGetRuleContext(0, StatementsContext);
    }
    public RCURL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RCURL, 0); }
    public lambdaParameters(): LambdaParametersContext | undefined {
        return this.tryGetRuleContext(0, LambdaParametersContext);
    }
    public ARROW(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ARROW, 0); }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionLiteral; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionLiteral) listener.enterFunctionLiteral(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionLiteral) listener.exitFunctionLiteral(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionLiteral) return visitor.visitFunctionLiteral(this);
        else return visitor.visitChildren(this);
    }
}


export class LambdaParametersContext extends ParserRuleContext {
    public lambdaParameter(): LambdaParameterContext[];
    public lambdaParameter(i: number): LambdaParameterContext;
    public lambdaParameter(i?: number): LambdaParameterContext | LambdaParameterContext[] {
        if (i === undefined) {
            return this.getRuleContexts(LambdaParameterContext);
        } else {
            return this.getRuleContext(i, LambdaParameterContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_lambdaParameters; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLambdaParameters) listener.enterLambdaParameters(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLambdaParameters) listener.exitLambdaParameters(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLambdaParameters) return visitor.visitLambdaParameters(this);
        else return visitor.visitChildren(this);
    }
}


export class LambdaParameterContext extends ParserRuleContext {
    public variableDeclaration(): VariableDeclarationContext | undefined {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    public multiVariableDeclaration(): MultiVariableDeclarationContext | undefined {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_lambdaParameter; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLambdaParameter) listener.enterLambdaParameter(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLambdaParameter) listener.exitLambdaParameter(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLambdaParameter) return visitor.visitLambdaParameter(this);
        else return visitor.visitChildren(this);
    }
}


export class ObjectLiteralContext extends ParserRuleContext {
    public OBJECT(): TerminalNode { return this.getToken(KotlinParser.OBJECT, 0); }
    public classBody(): ClassBodyContext {
        return this.getRuleContext(0, ClassBodyContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public delegationSpecifiers(): DelegationSpecifiersContext | undefined {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_objectLiteral; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterObjectLiteral) listener.enterObjectLiteral(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitObjectLiteral) listener.exitObjectLiteral(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitObjectLiteral) return visitor.visitObjectLiteral(this);
        else return visitor.visitChildren(this);
    }
}


export class CollectionLiteralContext extends ParserRuleContext {
    public LSQUARE(): TerminalNode { return this.getToken(KotlinParser.LSQUARE, 0); }
    public RSQUARE(): TerminalNode { return this.getToken(KotlinParser.RSQUARE, 0); }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext;
    public expression(i?: number): ExpressionContext | ExpressionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        } else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_collectionLiteral; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterCollectionLiteral) listener.enterCollectionLiteral(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitCollectionLiteral) listener.exitCollectionLiteral(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitCollectionLiteral) return visitor.visitCollectionLiteral(this);
        else return visitor.visitChildren(this);
    }
}


export class ThisExpressionContext extends ParserRuleContext {
    public THIS(): TerminalNode { return this.getToken(KotlinParser.THIS, 0); }
    public LabelReference(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LabelReference, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_thisExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterThisExpression) listener.enterThisExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitThisExpression) listener.exitThisExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitThisExpression) return visitor.visitThisExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class SuperExpressionContext extends ParserRuleContext {
    public SUPER(): TerminalNode { return this.getToken(KotlinParser.SUPER, 0); }
    public LANGLE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LANGLE, 0); }
    public type(): TypeContext | undefined {
        return this.tryGetRuleContext(0, TypeContext);
    }
    public RANGLE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RANGLE, 0); }
    public LabelReference(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LabelReference, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_superExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterSuperExpression) listener.enterSuperExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitSuperExpression) listener.exitSuperExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitSuperExpression) return visitor.visitSuperExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class ConditionalExpressionContext extends ParserRuleContext {
    public ifExpression(): IfExpressionContext | undefined {
        return this.tryGetRuleContext(0, IfExpressionContext);
    }
    public whenExpression(): WhenExpressionContext | undefined {
        return this.tryGetRuleContext(0, WhenExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_conditionalExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterConditionalExpression) listener.enterConditionalExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitConditionalExpression) listener.exitConditionalExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitConditionalExpression) return visitor.visitConditionalExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class IfExpressionContext extends ParserRuleContext {
    public IF(): TerminalNode { return this.getToken(KotlinParser.IF, 0); }
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public controlStructureBody(): ControlStructureBodyContext[];
    public controlStructureBody(i: number): ControlStructureBodyContext;
    public controlStructureBody(i?: number): ControlStructureBodyContext | ControlStructureBodyContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ControlStructureBodyContext);
        } else {
            return this.getRuleContext(i, ControlStructureBodyContext);
        }
    }
    public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    public ELSE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ELSE, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_ifExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterIfExpression) listener.enterIfExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitIfExpression) listener.exitIfExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitIfExpression) return visitor.visitIfExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class ControlStructureBodyContext extends ParserRuleContext {
    public block(): BlockContext | undefined {
        return this.tryGetRuleContext(0, BlockContext);
    }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_controlStructureBody; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterControlStructureBody) listener.enterControlStructureBody(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitControlStructureBody) listener.exitControlStructureBody(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitControlStructureBody) return visitor.visitControlStructureBody(this);
        else return visitor.visitChildren(this);
    }
}


export class WhenExpressionContext extends ParserRuleContext {
    public WHEN(): TerminalNode { return this.getToken(KotlinParser.WHEN, 0); }
    public LCURL(): TerminalNode { return this.getToken(KotlinParser.LCURL, 0); }
    public RCURL(): TerminalNode { return this.getToken(KotlinParser.RCURL, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public LPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    public whenEntry(): WhenEntryContext[];
    public whenEntry(i: number): WhenEntryContext;
    public whenEntry(i?: number): WhenEntryContext | WhenEntryContext[] {
        if (i === undefined) {
            return this.getRuleContexts(WhenEntryContext);
        } else {
            return this.getRuleContext(i, WhenEntryContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_whenExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterWhenExpression) listener.enterWhenExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitWhenExpression) listener.exitWhenExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitWhenExpression) return visitor.visitWhenExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class WhenEntryContext extends ParserRuleContext {
    public whenCondition(): WhenConditionContext[];
    public whenCondition(i: number): WhenConditionContext;
    public whenCondition(i?: number): WhenConditionContext | WhenConditionContext[] {
        if (i === undefined) {
            return this.getRuleContexts(WhenConditionContext);
        } else {
            return this.getRuleContext(i, WhenConditionContext);
        }
    }
    public ARROW(): TerminalNode { return this.getToken(KotlinParser.ARROW, 0); }
    public controlStructureBody(): ControlStructureBodyContext {
        return this.getRuleContext(0, ControlStructureBodyContext);
    }
    public COMMA(): TerminalNode[];
    public COMMA(i: number): TerminalNode;
    public COMMA(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        } else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public semi(): SemiContext | undefined {
        return this.tryGetRuleContext(0, SemiContext);
    }
    public ELSE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ELSE, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_whenEntry; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterWhenEntry) listener.enterWhenEntry(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitWhenEntry) listener.exitWhenEntry(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitWhenEntry) return visitor.visitWhenEntry(this);
        else return visitor.visitChildren(this);
    }
}


export class WhenConditionContext extends ParserRuleContext {
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public rangeTest(): RangeTestContext | undefined {
        return this.tryGetRuleContext(0, RangeTestContext);
    }
    public typeTest(): TypeTestContext | undefined {
        return this.tryGetRuleContext(0, TypeTestContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_whenCondition; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterWhenCondition) listener.enterWhenCondition(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitWhenCondition) listener.exitWhenCondition(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitWhenCondition) return visitor.visitWhenCondition(this);
        else return visitor.visitChildren(this);
    }
}


export class RangeTestContext extends ParserRuleContext {
    public inOperator(): InOperatorContext {
        return this.getRuleContext(0, InOperatorContext);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_rangeTest; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterRangeTest) listener.enterRangeTest(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitRangeTest) listener.exitRangeTest(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitRangeTest) return visitor.visitRangeTest(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeTestContext extends ParserRuleContext {
    public isOperator(): IsOperatorContext {
        return this.getRuleContext(0, IsOperatorContext);
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeTest; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeTest) listener.enterTypeTest(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeTest) listener.exitTypeTest(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeTest) return visitor.visitTypeTest(this);
        else return visitor.visitChildren(this);
    }
}


export class TryExpressionContext extends ParserRuleContext {
    public TRY(): TerminalNode { return this.getToken(KotlinParser.TRY, 0); }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public catchBlock(): CatchBlockContext[];
    public catchBlock(i: number): CatchBlockContext;
    public catchBlock(i?: number): CatchBlockContext | CatchBlockContext[] {
        if (i === undefined) {
            return this.getRuleContexts(CatchBlockContext);
        } else {
            return this.getRuleContext(i, CatchBlockContext);
        }
    }
    public finallyBlock(): FinallyBlockContext | undefined {
        return this.tryGetRuleContext(0, FinallyBlockContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_tryExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTryExpression) listener.enterTryExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTryExpression) listener.exitTryExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTryExpression) return visitor.visitTryExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class CatchBlockContext extends ParserRuleContext {
    public CATCH(): TerminalNode { return this.getToken(KotlinParser.CATCH, 0); }
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public simpleIdentifier(): SimpleIdentifierContext {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    public COLON(): TerminalNode { return this.getToken(KotlinParser.COLON, 0); }
    public userType(): UserTypeContext {
        return this.getRuleContext(0, UserTypeContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_catchBlock; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterCatchBlock) listener.enterCatchBlock(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitCatchBlock) listener.exitCatchBlock(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitCatchBlock) return visitor.visitCatchBlock(this);
        else return visitor.visitChildren(this);
    }
}


export class FinallyBlockContext extends ParserRuleContext {
    public FINALLY(): TerminalNode { return this.getToken(KotlinParser.FINALLY, 0); }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_finallyBlock; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFinallyBlock) listener.enterFinallyBlock(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFinallyBlock) listener.exitFinallyBlock(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFinallyBlock) return visitor.visitFinallyBlock(this);
        else return visitor.visitChildren(this);
    }
}


export class LoopExpressionContext extends ParserRuleContext {
    public forExpression(): ForExpressionContext | undefined {
        return this.tryGetRuleContext(0, ForExpressionContext);
    }
    public whileExpression(): WhileExpressionContext | undefined {
        return this.tryGetRuleContext(0, WhileExpressionContext);
    }
    public doWhileExpression(): DoWhileExpressionContext | undefined {
        return this.tryGetRuleContext(0, DoWhileExpressionContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_loopExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLoopExpression) listener.enterLoopExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLoopExpression) listener.exitLoopExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLoopExpression) return visitor.visitLoopExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class ForExpressionContext extends ParserRuleContext {
    public FOR(): TerminalNode { return this.getToken(KotlinParser.FOR, 0); }
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public IN(): TerminalNode { return this.getToken(KotlinParser.IN, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public variableDeclaration(): VariableDeclarationContext | undefined {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    public multiVariableDeclaration(): MultiVariableDeclarationContext | undefined {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public controlStructureBody(): ControlStructureBodyContext | undefined {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_forExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterForExpression) listener.enterForExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitForExpression) listener.exitForExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitForExpression) return visitor.visitForExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class WhileExpressionContext extends ParserRuleContext {
    public WHILE(): TerminalNode { return this.getToken(KotlinParser.WHILE, 0); }
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public controlStructureBody(): ControlStructureBodyContext | undefined {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_whileExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterWhileExpression) listener.enterWhileExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitWhileExpression) listener.exitWhileExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitWhileExpression) return visitor.visitWhileExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class DoWhileExpressionContext extends ParserRuleContext {
    public DO(): TerminalNode { return this.getToken(KotlinParser.DO, 0); }
    public WHILE(): TerminalNode { return this.getToken(KotlinParser.WHILE, 0); }
    public LPAREN(): TerminalNode { return this.getToken(KotlinParser.LPAREN, 0); }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): TerminalNode { return this.getToken(KotlinParser.RPAREN, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public controlStructureBody(): ControlStructureBodyContext | undefined {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_doWhileExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterDoWhileExpression) listener.enterDoWhileExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitDoWhileExpression) listener.exitDoWhileExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitDoWhileExpression) return visitor.visitDoWhileExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class JumpExpressionContext extends ParserRuleContext {
    public THROW(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.THROW, 0); }
    public expression(): ExpressionContext | undefined {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public RETURN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RETURN, 0); }
    public RETURN_AT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RETURN_AT, 0); }
    public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CONTINUE, 0); }
    public CONTINUE_AT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CONTINUE_AT, 0); }
    public BREAK(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.BREAK, 0); }
    public BREAK_AT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.BREAK_AT, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_jumpExpression; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterJumpExpression) listener.enterJumpExpression(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitJumpExpression) listener.exitJumpExpression(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitJumpExpression) return visitor.visitJumpExpression(this);
        else return visitor.visitChildren(this);
    }
}


export class CallableReferenceContext extends ParserRuleContext {
    public COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLONCOLON, 0); }
    public Q_COLONCOLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.Q_COLONCOLON, 0); }
    public identifier(): IdentifierContext | undefined {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    public CLASS(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CLASS, 0); }
    public userType(): UserTypeContext | undefined {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public QUEST(): TerminalNode[];
    public QUEST(i: number): TerminalNode;
    public QUEST(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.QUEST);
        } else {
            return this.getToken(KotlinParser.QUEST, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_callableReference; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterCallableReference) listener.enterCallableReference(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitCallableReference) listener.exitCallableReference(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitCallableReference) return visitor.visitCallableReference(this);
        else return visitor.visitChildren(this);
    }
}


export class AssignmentOperatorContext extends ParserRuleContext {
    public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    public ADD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ADD_ASSIGNMENT, 0); }
    public SUB_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SUB_ASSIGNMENT, 0); }
    public MULT_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MULT_ASSIGNMENT, 0); }
    public DIV_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DIV_ASSIGNMENT, 0); }
    public MOD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MOD_ASSIGNMENT, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_assignmentOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAssignmentOperator) listener.enterAssignmentOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAssignmentOperator) listener.exitAssignmentOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAssignmentOperator) return visitor.visitAssignmentOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class EqualityOperatorContext extends ParserRuleContext {
    public EXCL_EQ(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EXCL_EQ, 0); }
    public EXCL_EQEQ(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EXCL_EQEQ, 0); }
    public EQEQ(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EQEQ, 0); }
    public EQEQEQ(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EQEQEQ, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_equalityOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterEqualityOperator) listener.enterEqualityOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitEqualityOperator) listener.exitEqualityOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitEqualityOperator) return visitor.visitEqualityOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class ComparisonOperatorContext extends ParserRuleContext {
    public LANGLE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LANGLE, 0); }
    public RANGLE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RANGLE, 0); }
    public LE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LE, 0); }
    public GE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.GE, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_comparisonOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterComparisonOperator) listener.enterComparisonOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitComparisonOperator) listener.exitComparisonOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitComparisonOperator) return visitor.visitComparisonOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class InOperatorContext extends ParserRuleContext {
    public IN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.IN, 0); }
    public NOT_IN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.NOT_IN, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_inOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterInOperator) listener.enterInOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitInOperator) listener.exitInOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitInOperator) return visitor.visitInOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class IsOperatorContext extends ParserRuleContext {
    public IS(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.IS, 0); }
    public NOT_IS(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.NOT_IS, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_isOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterIsOperator) listener.enterIsOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitIsOperator) listener.exitIsOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitIsOperator) return visitor.visitIsOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class AdditiveOperatorContext extends ParserRuleContext {
    public ADD(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ADD, 0); }
    public SUB(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SUB, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_additiveOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAdditiveOperator) listener.enterAdditiveOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAdditiveOperator) listener.exitAdditiveOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAdditiveOperator) return visitor.visitAdditiveOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
    public MULT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MULT, 0); }
    public DIV(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DIV, 0); }
    public MOD(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.MOD, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_multiplicativeOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMultiplicativeOperator) listener.enterMultiplicativeOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMultiplicativeOperator) listener.exitMultiplicativeOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMultiplicativeOperator) return visitor.visitMultiplicativeOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class AsOperatorContext extends ParserRuleContext {
    public AS(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.AS, 0); }
    public AS_SAFE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.AS_SAFE, 0); }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_asOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAsOperator) listener.enterAsOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAsOperator) listener.exitAsOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAsOperator) return visitor.visitAsOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class PrefixUnaryOperatorContext extends ParserRuleContext {
    public INCR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INCR, 0); }
    public DECR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DECR, 0); }
    public ADD(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ADD, 0); }
    public SUB(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SUB, 0); }
    public EXCL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EXCL, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_prefixUnaryOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPrefixUnaryOperator) listener.enterPrefixUnaryOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPrefixUnaryOperator) listener.exitPrefixUnaryOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPrefixUnaryOperator) return visitor.visitPrefixUnaryOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class PostfixUnaryOperatorContext extends ParserRuleContext {
    public INCR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INCR, 0); }
    public DECR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DECR, 0); }
    public EXCL(): TerminalNode[];
    public EXCL(i: number): TerminalNode;
    public EXCL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.EXCL);
        } else {
            return this.getToken(KotlinParser.EXCL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_postfixUnaryOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPostfixUnaryOperator) listener.enterPostfixUnaryOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPostfixUnaryOperator) listener.exitPostfixUnaryOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPostfixUnaryOperator) return visitor.visitPostfixUnaryOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class MemberAccessOperatorContext extends ParserRuleContext {
    public DOT(): TerminalNode { return this.getToken(KotlinParser.DOT, 0); }
    public QUEST(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.QUEST, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_memberAccessOperator; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMemberAccessOperator) listener.enterMemberAccessOperator(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMemberAccessOperator) listener.exitMemberAccessOperator(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMemberAccessOperator) return visitor.visitMemberAccessOperator(this);
        else return visitor.visitChildren(this);
    }
}


export class ModifierListContext extends ParserRuleContext {
    public annotations(): AnnotationsContext[];
    public annotations(i: number): AnnotationsContext;
    public annotations(i?: number): AnnotationsContext | AnnotationsContext[] {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationsContext);
        } else {
            return this.getRuleContext(i, AnnotationsContext);
        }
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext;
    public modifier(i?: number): ModifierContext | ModifierContext[] {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        } else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_modifierList; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterModifierList) listener.enterModifierList(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitModifierList) listener.exitModifierList(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitModifierList) return visitor.visitModifierList(this);
        else return visitor.visitChildren(this);
    }
}


export class ModifierContext extends ParserRuleContext {
    public classModifier(): ClassModifierContext | undefined {
        return this.tryGetRuleContext(0, ClassModifierContext);
    }
    public memberModifier(): MemberModifierContext | undefined {
        return this.tryGetRuleContext(0, MemberModifierContext);
    }
    public visibilityModifier(): VisibilityModifierContext | undefined {
        return this.tryGetRuleContext(0, VisibilityModifierContext);
    }
    public varianceAnnotation(): VarianceAnnotationContext | undefined {
        return this.tryGetRuleContext(0, VarianceAnnotationContext);
    }
    public functionModifier(): FunctionModifierContext | undefined {
        return this.tryGetRuleContext(0, FunctionModifierContext);
    }
    public propertyModifier(): PropertyModifierContext | undefined {
        return this.tryGetRuleContext(0, PropertyModifierContext);
    }
    public inheritanceModifier(): InheritanceModifierContext | undefined {
        return this.tryGetRuleContext(0, InheritanceModifierContext);
    }
    public parameterModifier(): ParameterModifierContext | undefined {
        return this.tryGetRuleContext(0, ParameterModifierContext);
    }
    public typeParameterModifier(): TypeParameterModifierContext | undefined {
        return this.tryGetRuleContext(0, TypeParameterModifierContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_modifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterModifier) listener.enterModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitModifier) listener.exitModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitModifier) return visitor.visitModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class ClassModifierContext extends ParserRuleContext {
    public ENUM(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ENUM, 0); }
    public SEALED(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SEALED, 0); }
    public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ANNOTATION, 0); }
    public DATA(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DATA, 0); }
    public INNER(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INNER, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_classModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterClassModifier) listener.enterClassModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitClassModifier) listener.exitClassModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitClassModifier) return visitor.visitClassModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class MemberModifierContext extends ParserRuleContext {
    public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OVERRIDE, 0); }
    public LATEINIT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LATEINIT, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_memberModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterMemberModifier) listener.enterMemberModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitMemberModifier) listener.exitMemberModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitMemberModifier) return visitor.visitMemberModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class VisibilityModifierContext extends ParserRuleContext {
    public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PUBLIC, 0); }
    public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PRIVATE, 0); }
    public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INTERNAL, 0); }
    public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PROTECTED, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_visibilityModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterVisibilityModifier) listener.enterVisibilityModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitVisibilityModifier) listener.exitVisibilityModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitVisibilityModifier) return visitor.visitVisibilityModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class VarianceAnnotationContext extends ParserRuleContext {
    public IN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.IN, 0); }
    public OUT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OUT, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_varianceAnnotation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterVarianceAnnotation) listener.enterVarianceAnnotation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitVarianceAnnotation) listener.exitVarianceAnnotation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitVarianceAnnotation) return visitor.visitVarianceAnnotation(this);
        else return visitor.visitChildren(this);
    }
}


export class FunctionModifierContext extends ParserRuleContext {
    public TAILREC(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.TAILREC, 0); }
    public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OPERATOR, 0); }
    public INFIX(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INFIX, 0); }
    public INLINE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INLINE, 0); }
    public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EXTERNAL, 0); }
    public SUSPEND(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SUSPEND, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_functionModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterFunctionModifier) listener.enterFunctionModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitFunctionModifier) listener.exitFunctionModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitFunctionModifier) return visitor.visitFunctionModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class PropertyModifierContext extends ParserRuleContext {
    public CONST(): TerminalNode { return this.getToken(KotlinParser.CONST, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_propertyModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterPropertyModifier) listener.enterPropertyModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitPropertyModifier) listener.exitPropertyModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitPropertyModifier) return visitor.visitPropertyModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class InheritanceModifierContext extends ParserRuleContext {
    public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ABSTRACT, 0); }
    public FINAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.FINAL, 0); }
    public OPEN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OPEN, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_inheritanceModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterInheritanceModifier) listener.enterInheritanceModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitInheritanceModifier) listener.exitInheritanceModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitInheritanceModifier) return visitor.visitInheritanceModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class ParameterModifierContext extends ParserRuleContext {
    public VARARG(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.VARARG, 0); }
    public NOINLINE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.NOINLINE, 0); }
    public CROSSINLINE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CROSSINLINE, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_parameterModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterParameterModifier) listener.enterParameterModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitParameterModifier) listener.exitParameterModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitParameterModifier) return visitor.visitParameterModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class TypeParameterModifierContext extends ParserRuleContext {
    public REIFIED(): TerminalNode { return this.getToken(KotlinParser.REIFIED, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_typeParameterModifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterTypeParameterModifier) listener.enterTypeParameterModifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitTypeParameterModifier) listener.exitTypeParameterModifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitTypeParameterModifier) return visitor.visitTypeParameterModifier(this);
        else return visitor.visitChildren(this);
    }
}


export class LabelDefinitionContext extends ParserRuleContext {
    public LabelDefinition(): TerminalNode { return this.getToken(KotlinParser.LabelDefinition, 0); }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_labelDefinition; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterLabelDefinition) listener.enterLabelDefinition(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitLabelDefinition) listener.exitLabelDefinition(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitLabelDefinition) return visitor.visitLabelDefinition(this);
        else return visitor.visitChildren(this);
    }
}


export class AnnotationsContext extends ParserRuleContext {
    public annotation(): AnnotationContext | undefined {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    public annotationList(): AnnotationListContext | undefined {
        return this.tryGetRuleContext(0, AnnotationListContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_annotations; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAnnotations) listener.enterAnnotations(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAnnotations) listener.exitAnnotations(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAnnotations) return visitor.visitAnnotations(this);
        else return visitor.visitChildren(this);
    }
}


export class AnnotationContext extends ParserRuleContext {
    public annotationUseSiteTarget(): AnnotationUseSiteTargetContext | undefined {
        return this.tryGetRuleContext(0, AnnotationUseSiteTargetContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public unescapedAnnotation(): UnescapedAnnotationContext | undefined {
        return this.tryGetRuleContext(0, UnescapedAnnotationContext);
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public LabelReference(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LabelReference, 0); }
    public typeArguments(): TypeArgumentsContext | undefined {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    public valueArguments(): ValueArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_annotation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAnnotation) listener.enterAnnotation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAnnotation) listener.exitAnnotation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAnnotation) return visitor.visitAnnotation(this);
        else return visitor.visitChildren(this);
    }
}


export class AnnotationListContext extends ParserRuleContext {
    public annotationUseSiteTarget(): AnnotationUseSiteTargetContext | undefined {
        return this.tryGetRuleContext(0, AnnotationUseSiteTargetContext);
    }
    public COLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COLON, 0); }
    public LSQUARE(): TerminalNode { return this.getToken(KotlinParser.LSQUARE, 0); }
    public RSQUARE(): TerminalNode { return this.getToken(KotlinParser.RSQUARE, 0); }
    public unescapedAnnotation(): UnescapedAnnotationContext[];
    public unescapedAnnotation(i: number): UnescapedAnnotationContext;
    public unescapedAnnotation(i?: number): UnescapedAnnotationContext | UnescapedAnnotationContext[] {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        } else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    }
    public AT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.AT, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_annotationList; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAnnotationList) listener.enterAnnotationList(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAnnotationList) listener.exitAnnotationList(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAnnotationList) return visitor.visitAnnotationList(this);
        else return visitor.visitChildren(this);
    }
}


export class AnnotationUseSiteTargetContext extends ParserRuleContext {
    public FIELD(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.FIELD, 0); }
    public FILE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.FILE, 0); }
    public PROPERTY(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PROPERTY, 0); }
    public GET(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.GET, 0); }
    public SET(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SET, 0); }
    public RECEIVER(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.RECEIVER, 0); }
    public PARAM(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PARAM, 0); }
    public SETPARAM(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SETPARAM, 0); }
    public DELEGATE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DELEGATE, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_annotationUseSiteTarget; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterAnnotationUseSiteTarget) listener.enterAnnotationUseSiteTarget(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitAnnotationUseSiteTarget) listener.exitAnnotationUseSiteTarget(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitAnnotationUseSiteTarget) return visitor.visitAnnotationUseSiteTarget(this);
        else return visitor.visitChildren(this);
    }
}


export class UnescapedAnnotationContext extends ParserRuleContext {
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext);
    }
    public typeArguments(): TypeArgumentsContext | undefined {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    public valueArguments(): ValueArgumentsContext | undefined {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_unescapedAnnotation; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterUnescapedAnnotation) listener.enterUnescapedAnnotation(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitUnescapedAnnotation) listener.exitUnescapedAnnotation(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitUnescapedAnnotation) return visitor.visitUnescapedAnnotation(this);
        else return visitor.visitChildren(this);
    }
}


export class IdentifierContext extends ParserRuleContext {
    public simpleIdentifier(): SimpleIdentifierContext[];
    public simpleIdentifier(i: number): SimpleIdentifierContext;
    public simpleIdentifier(i?: number): SimpleIdentifierContext | SimpleIdentifierContext[] {
        if (i === undefined) {
            return this.getRuleContexts(SimpleIdentifierContext);
        } else {
            return this.getRuleContext(i, SimpleIdentifierContext);
        }
    }
    public DOT(): TerminalNode[];
    public DOT(i: number): TerminalNode;
    public DOT(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DOT);
        } else {
            return this.getToken(KotlinParser.DOT, i);
        }
    }
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_identifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterIdentifier) listener.enterIdentifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitIdentifier) listener.exitIdentifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
        else return visitor.visitChildren(this);
    }
}


export class SimpleIdentifierContext extends ParserRuleContext {
    public Identifier(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.Identifier, 0); }
    public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ABSTRACT, 0); }
    public ANNOTATION(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ANNOTATION, 0); }
    public BY(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.BY, 0); }
    public CATCH(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CATCH, 0); }
    public COMPANION(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.COMPANION, 0); }
    public CONSTRUCTOR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CONSTRUCTOR, 0); }
    public CROSSINLINE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CROSSINLINE, 0); }
    public DATA(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DATA, 0); }
    public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.DYNAMIC, 0); }
    public ENUM(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.ENUM, 0); }
    public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.EXTERNAL, 0); }
    public FINAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.FINAL, 0); }
    public FINALLY(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.FINALLY, 0); }
    public GETTER(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.GETTER, 0); }
    public IMPORT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.IMPORT, 0); }
    public INFIX(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INFIX, 0); }
    public INIT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INIT, 0); }
    public INLINE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INLINE, 0); }
    public INNER(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INNER, 0); }
    public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.INTERNAL, 0); }
    public LATEINIT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.LATEINIT, 0); }
    public NOINLINE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.NOINLINE, 0); }
    public OPEN(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OPEN, 0); }
    public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OPERATOR, 0); }
    public OUT(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OUT, 0); }
    public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.OVERRIDE, 0); }
    public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PRIVATE, 0); }
    public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PROTECTED, 0); }
    public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.PUBLIC, 0); }
    public REIFIED(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.REIFIED, 0); }
    public SEALED(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SEALED, 0); }
    public TAILREC(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.TAILREC, 0); }
    public SETTER(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SETTER, 0); }
    public VARARG(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.VARARG, 0); }
    public WHERE(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.WHERE, 0); }
    public CONST(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.CONST, 0); }
    public SUSPEND(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SUSPEND, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_simpleIdentifier; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterSimpleIdentifier) listener.enterSimpleIdentifier(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitSimpleIdentifier) listener.exitSimpleIdentifier(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitSimpleIdentifier) return visitor.visitSimpleIdentifier(this);
        else return visitor.visitChildren(this);
    }
}


export class SemiContext extends ParserRuleContext {
    public NL(): TerminalNode[];
    public NL(i: number): TerminalNode;
    public NL(i?: number): TerminalNode | TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        } else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return KotlinParser.RULE_semi; }
    @Override
    public enterRule(listener: KotlinParserListener): void {
        if (listener.enterSemi) listener.enterSemi(this);
    }
    @Override
    public exitRule(listener: KotlinParserListener): void {
        if (listener.exitSemi) listener.exitSemi(this);
    }
    @Override
    public accept<Result>(visitor: KotlinParserVisitor<Result>): Result {
        if (visitor.visitSemi) return visitor.visitSemi(this);
        else return visitor.visitChildren(this);
    }
}




export class KotlinParser extends Parser {
	public static readonly ShebangLine=1;
	public static readonly DelimitedComment=2;
	public static readonly LineComment=3;
	public static readonly WS=4;
	public static readonly NL=5;
	public static readonly RESERVED=6;
	public static readonly DOT=7;
	public static readonly COMMA=8;
	public static readonly LPAREN=9;
	public static readonly RPAREN=10;
	public static readonly LSQUARE=11;
	public static readonly RSQUARE=12;
	public static readonly LCURL=13;
	public static readonly RCURL=14;
	public static readonly MULT=15;
	public static readonly MOD=16;
	public static readonly DIV=17;
	public static readonly ADD=18;
	public static readonly SUB=19;
	public static readonly INCR=20;
	public static readonly DECR=21;
	public static readonly CONJ=22;
	public static readonly DISJ=23;
	public static readonly EXCL=24;
	public static readonly COLON=25;
	public static readonly SEMICOLON=26;
	public static readonly ASSIGNMENT=27;
	public static readonly ADD_ASSIGNMENT=28;
	public static readonly SUB_ASSIGNMENT=29;
	public static readonly MULT_ASSIGNMENT=30;
	public static readonly DIV_ASSIGNMENT=31;
	public static readonly MOD_ASSIGNMENT=32;
	public static readonly ARROW=33;
	public static readonly DOUBLE_ARROW=34;
	public static readonly RANGE=35;
	public static readonly COLONCOLON=36;
	public static readonly Q_COLONCOLON=37;
	public static readonly DOUBLE_SEMICOLON=38;
	public static readonly HASH=39;
	public static readonly AT=40;
	public static readonly QUEST=41;
	public static readonly ELVIS=42;
	public static readonly LANGLE=43;
	public static readonly RANGLE=44;
	public static readonly LE=45;
	public static readonly GE=46;
	public static readonly EXCL_EQ=47;
	public static readonly EXCL_EQEQ=48;
	public static readonly AS_SAFE=49;
	public static readonly EQEQ=50;
	public static readonly EQEQEQ=51;
	public static readonly SINGLE_QUOTE=52;
	public static readonly RETURN_AT=53;
	public static readonly CONTINUE_AT=54;
	public static readonly BREAK_AT=55;
	public static readonly FILE=56;
	public static readonly PACKAGE=57;
	public static readonly IMPORT=58;
	public static readonly CLASS=59;
	public static readonly INTERFACE=60;
	public static readonly FUN=61;
	public static readonly OBJECT=62;
	public static readonly VAL=63;
	public static readonly VAR=64;
	public static readonly TYPE_ALIAS=65;
	public static readonly CONSTRUCTOR=66;
	public static readonly BY=67;
	public static readonly COMPANION=68;
	public static readonly INIT=69;
	public static readonly THIS=70;
	public static readonly SUPER=71;
	public static readonly TYPEOF=72;
	public static readonly WHERE=73;
	public static readonly IF=74;
	public static readonly ELSE=75;
	public static readonly WHEN=76;
	public static readonly TRY=77;
	public static readonly CATCH=78;
	public static readonly FINALLY=79;
	public static readonly FOR=80;
	public static readonly DO=81;
	public static readonly WHILE=82;
	public static readonly THROW=83;
	public static readonly RETURN=84;
	public static readonly CONTINUE=85;
	public static readonly BREAK=86;
	public static readonly AS=87;
	public static readonly IS=88;
	public static readonly IN=89;
	public static readonly NOT_IS=90;
	public static readonly NOT_IN=91;
	public static readonly OUT=92;
	public static readonly FIELD=93;
	public static readonly PROPERTY=94;
	public static readonly GET=95;
	public static readonly SET=96;
	public static readonly GETTER=97;
	public static readonly SETTER=98;
	public static readonly RECEIVER=99;
	public static readonly PARAM=100;
	public static readonly SETPARAM=101;
	public static readonly DELEGATE=102;
	public static readonly DYNAMIC=103;
	public static readonly PUBLIC=104;
	public static readonly PRIVATE=105;
	public static readonly PROTECTED=106;
	public static readonly INTERNAL=107;
	public static readonly ENUM=108;
	public static readonly SEALED=109;
	public static readonly ANNOTATION=110;
	public static readonly DATA=111;
	public static readonly INNER=112;
	public static readonly TAILREC=113;
	public static readonly OPERATOR=114;
	public static readonly INLINE=115;
	public static readonly INFIX=116;
	public static readonly EXTERNAL=117;
	public static readonly SUSPEND=118;
	public static readonly OVERRIDE=119;
	public static readonly ABSTRACT=120;
	public static readonly FINAL=121;
	public static readonly OPEN=122;
	public static readonly CONST=123;
	public static readonly LATEINIT=124;
	public static readonly VARARG=125;
	public static readonly NOINLINE=126;
	public static readonly CROSSINLINE=127;
	public static readonly REIFIED=128;
	public static readonly QUOTE_OPEN=129;
	public static readonly TRIPLE_QUOTE_OPEN=130;
	public static readonly RealLiteral=131;
	public static readonly FloatLiteral=132;
	public static readonly DoubleLiteral=133;
	public static readonly LongLiteral=134;
	public static readonly IntegerLiteral=135;
	public static readonly HexLiteral=136;
	public static readonly BinLiteral=137;
	public static readonly BooleanLiteral=138;
	public static readonly NullLiteral=139;
	public static readonly Identifier=140;
	public static readonly LabelReference=141;
	public static readonly LabelDefinition=142;
	public static readonly FieldIdentifier=143;
	public static readonly CharacterLiteral=144;
	public static readonly UNICODE_CLASS_LL=145;
	public static readonly UNICODE_CLASS_LM=146;
	public static readonly UNICODE_CLASS_LO=147;
	public static readonly UNICODE_CLASS_LT=148;
	public static readonly UNICODE_CLASS_LU=149;
	public static readonly UNICODE_CLASS_ND=150;
	public static readonly UNICODE_CLASS_NL=151;
	public static readonly Inside_Comment=152;
	public static readonly Inside_WS=153;
	public static readonly Inside_NL=154;
	public static readonly QUOTE_CLOSE=155;
	public static readonly LineStrRef=156;
	public static readonly LineStrText=157;
	public static readonly LineStrEscapedChar=158;
	public static readonly LineStrExprStart=159;
	public static readonly TRIPLE_QUOTE_CLOSE=160;
	public static readonly MultiLineStringQuote=161;
	public static readonly MultiLineStrRef=162;
	public static readonly MultiLineStrText=163;
	public static readonly MultiLineStrEscapedChar=164;
	public static readonly MultiLineStrExprStart=165;
	public static readonly MultiLineNL=166;
	public static readonly StrExpr_IN=167;
	public static readonly StrExpr_Comment=168;
	public static readonly StrExpr_WS=169;
	public static readonly StrExpr_NL=170;
	public static readonly RULE_kotlinFile = 0;
	public static readonly RULE_script = 1;
	public static readonly RULE_fileAnnotation = 2;
	public static readonly RULE_packageHeader = 3;
	public static readonly RULE_importList = 4;
	public static readonly RULE_importHeader = 5;
	public static readonly RULE_importAlias = 6;
	public static readonly RULE_topLevelObject = 7;
	public static readonly RULE_classDeclaration = 8;
	public static readonly RULE_primaryConstructor = 9;
	public static readonly RULE_classParameters = 10;
	public static readonly RULE_classParameter = 11;
	public static readonly RULE_delegationSpecifiers = 12;
	public static readonly RULE_delegationSpecifier = 13;
	public static readonly RULE_constructorInvocation = 14;
	public static readonly RULE_explicitDelegation = 15;
	public static readonly RULE_classBody = 16;
	public static readonly RULE_classMemberDeclaration = 17;
	public static readonly RULE_anonymousInitializer = 18;
	public static readonly RULE_secondaryConstructor = 19;
	public static readonly RULE_constructorDelegationCall = 20;
	public static readonly RULE_enumClassBody = 21;
	public static readonly RULE_enumEntries = 22;
	public static readonly RULE_enumEntry = 23;
	public static readonly RULE_functionDeclaration = 24;
	public static readonly RULE_functionValueParameters = 25;
	public static readonly RULE_functionValueParameter = 26;
	public static readonly RULE_parameter = 27;
	public static readonly RULE_functionBody = 28;
	public static readonly RULE_objectDeclaration = 29;
	public static readonly RULE_companionObject = 30;
	public static readonly RULE_propertyDeclaration = 31;
	public static readonly RULE_multiVariableDeclaration = 32;
	public static readonly RULE_variableDeclaration = 33;
	public static readonly RULE_getter = 34;
	public static readonly RULE_setter = 35;
	public static readonly RULE_typeAlias = 36;
	public static readonly RULE_typeParameters = 37;
	public static readonly RULE_typeParameter = 38;
	public static readonly RULE_type = 39;
	public static readonly RULE_typeModifierList = 40;
	public static readonly RULE_parenthesizedType = 41;
	public static readonly RULE_nullableType = 42;
	public static readonly RULE_typeReference = 43;
	public static readonly RULE_functionType = 44;
	public static readonly RULE_functionTypeReceiver = 45;
	public static readonly RULE_userType = 46;
	public static readonly RULE_simpleUserType = 47;
	public static readonly RULE_functionTypeParameters = 48;
	public static readonly RULE_typeConstraints = 49;
	public static readonly RULE_typeConstraint = 50;
	public static readonly RULE_block = 51;
	public static readonly RULE_statements = 52;
	public static readonly RULE_statement = 53;
	public static readonly RULE_declaration = 54;
	public static readonly RULE_assignment = 55;
	public static readonly RULE_expression = 56;
	public static readonly RULE_disjunction = 57;
	public static readonly RULE_conjunction = 58;
	public static readonly RULE_equality = 59;
	public static readonly RULE_comparison = 60;
	public static readonly RULE_infixOperation = 61;
	public static readonly RULE_elvisExpression = 62;
	public static readonly RULE_infixFunctionCall = 63;
	public static readonly RULE_rangeExpression = 64;
	public static readonly RULE_additiveExpression = 65;
	public static readonly RULE_multiplicativeExpression = 66;
	public static readonly RULE_asExpression = 67;
	public static readonly RULE_asExpressionTail = 68;
	public static readonly RULE_prefixUnaryExpression = 69;
	public static readonly RULE_postfixUnaryExpression = 70;
	public static readonly RULE_callExpression = 71;
	public static readonly RULE_labeledExpression = 72;
	public static readonly RULE_dotQualifiedExpression = 73;
	public static readonly RULE_assignableExpression = 74;
	public static readonly RULE_indexingExpression = 75;
	public static readonly RULE_callSuffix = 76;
	public static readonly RULE_annotatedLambda = 77;
	public static readonly RULE_arrayAccess = 78;
	public static readonly RULE_valueArguments = 79;
	public static readonly RULE_typeArguments = 80;
	public static readonly RULE_typeProjection = 81;
	public static readonly RULE_typeProjectionModifierList = 82;
	public static readonly RULE_valueArgument = 83;
	public static readonly RULE_primaryExpression = 84;
	public static readonly RULE_parenthesizedExpression = 85;
	public static readonly RULE_literalConstant = 86;
	public static readonly RULE_stringLiteral = 87;
	public static readonly RULE_lineStringLiteral = 88;
	public static readonly RULE_multiLineStringLiteral = 89;
	public static readonly RULE_lineStringContent = 90;
	public static readonly RULE_lineStringExpression = 91;
	public static readonly RULE_multiLineStringContent = 92;
	public static readonly RULE_multiLineStringExpression = 93;
	public static readonly RULE_functionLiteral = 94;
	public static readonly RULE_lambdaParameters = 95;
	public static readonly RULE_lambdaParameter = 96;
	public static readonly RULE_objectLiteral = 97;
	public static readonly RULE_collectionLiteral = 98;
	public static readonly RULE_thisExpression = 99;
	public static readonly RULE_superExpression = 100;
	public static readonly RULE_conditionalExpression = 101;
	public static readonly RULE_ifExpression = 102;
	public static readonly RULE_controlStructureBody = 103;
	public static readonly RULE_whenExpression = 104;
	public static readonly RULE_whenEntry = 105;
	public static readonly RULE_whenCondition = 106;
	public static readonly RULE_rangeTest = 107;
	public static readonly RULE_typeTest = 108;
	public static readonly RULE_tryExpression = 109;
	public static readonly RULE_catchBlock = 110;
	public static readonly RULE_finallyBlock = 111;
	public static readonly RULE_loopExpression = 112;
	public static readonly RULE_forExpression = 113;
	public static readonly RULE_whileExpression = 114;
	public static readonly RULE_doWhileExpression = 115;
	public static readonly RULE_jumpExpression = 116;
	public static readonly RULE_callableReference = 117;
	public static readonly RULE_assignmentOperator = 118;
	public static readonly RULE_equalityOperator = 119;
	public static readonly RULE_comparisonOperator = 120;
	public static readonly RULE_inOperator = 121;
	public static readonly RULE_isOperator = 122;
	public static readonly RULE_additiveOperator = 123;
	public static readonly RULE_multiplicativeOperator = 124;
	public static readonly RULE_asOperator = 125;
	public static readonly RULE_prefixUnaryOperator = 126;
	public static readonly RULE_postfixUnaryOperator = 127;
	public static readonly RULE_memberAccessOperator = 128;
	public static readonly RULE_modifierList = 129;
	public static readonly RULE_modifier = 130;
	public static readonly RULE_classModifier = 131;
	public static readonly RULE_memberModifier = 132;
	public static readonly RULE_visibilityModifier = 133;
	public static readonly RULE_varianceAnnotation = 134;
	public static readonly RULE_functionModifier = 135;
	public static readonly RULE_propertyModifier = 136;
	public static readonly RULE_inheritanceModifier = 137;
	public static readonly RULE_parameterModifier = 138;
	public static readonly RULE_typeParameterModifier = 139;
	public static readonly RULE_labelDefinition = 140;
	public static readonly RULE_annotations = 141;
	public static readonly RULE_annotation = 142;
	public static readonly RULE_annotationList = 143;
	public static readonly RULE_annotationUseSiteTarget = 144;
	public static readonly RULE_unescapedAnnotation = 145;
	public static readonly RULE_identifier = 146;
	public static readonly RULE_simpleIdentifier = 147;
	public static readonly RULE_semi = 148;
	public static readonly ruleNames: string[] = [
		"kotlinFile", "script", "fileAnnotation", "packageHeader", "importList", 
		"importHeader", "importAlias", "topLevelObject", "classDeclaration", "primaryConstructor", 
		"classParameters", "classParameter", "delegationSpecifiers", "delegationSpecifier", 
		"constructorInvocation", "explicitDelegation", "classBody", "classMemberDeclaration", 
		"anonymousInitializer", "secondaryConstructor", "constructorDelegationCall", 
		"enumClassBody", "enumEntries", "enumEntry", "functionDeclaration", "functionValueParameters", 
		"functionValueParameter", "parameter", "functionBody", "objectDeclaration", 
		"companionObject", "propertyDeclaration", "multiVariableDeclaration", 
		"variableDeclaration", "getter", "setter", "typeAlias", "typeParameters", 
		"typeParameter", "type", "typeModifierList", "parenthesizedType", "nullableType", 
		"typeReference", "functionType", "functionTypeReceiver", "userType", "simpleUserType", 
		"functionTypeParameters", "typeConstraints", "typeConstraint", "block", 
		"statements", "statement", "declaration", "assignment", "expression", 
		"disjunction", "conjunction", "equality", "comparison", "infixOperation", 
		"elvisExpression", "infixFunctionCall", "rangeExpression", "additiveExpression", 
		"multiplicativeExpression", "asExpression", "asExpressionTail", "prefixUnaryExpression", 
		"postfixUnaryExpression", "callExpression", "labeledExpression", "dotQualifiedExpression", 
		"assignableExpression", "indexingExpression", "callSuffix", "annotatedLambda", 
		"arrayAccess", "valueArguments", "typeArguments", "typeProjection", "typeProjectionModifierList", 
		"valueArgument", "primaryExpression", "parenthesizedExpression", "literalConstant", 
		"stringLiteral", "lineStringLiteral", "multiLineStringLiteral", "lineStringContent", 
		"lineStringExpression", "multiLineStringContent", "multiLineStringExpression", 
		"functionLiteral", "lambdaParameters", "lambdaParameter", "objectLiteral", 
		"collectionLiteral", "thisExpression", "superExpression", "conditionalExpression", 
		"ifExpression", "controlStructureBody", "whenExpression", "whenEntry", 
		"whenCondition", "rangeTest", "typeTest", "tryExpression", "catchBlock", 
		"finallyBlock", "loopExpression", "forExpression", "whileExpression", 
		"doWhileExpression", "jumpExpression", "callableReference", "assignmentOperator", 
		"equalityOperator", "comparisonOperator", "inOperator", "isOperator", 
		"additiveOperator", "multiplicativeOperator", "asOperator", "prefixUnaryOperator", 
		"postfixUnaryOperator", "memberAccessOperator", "modifierList", "modifier", 
		"classModifier", "memberModifier", "visibilityModifier", "varianceAnnotation", 
		"functionModifier", "propertyModifier", "inheritanceModifier", "parameterModifier", 
		"typeParameterModifier", "labelDefinition", "annotations", "annotation", 
		"annotationList", "annotationUseSiteTarget", "unescapedAnnotation", "identifier", 
		"simpleIdentifier", "semi"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'...'", 
		"'.'", "','", "'('", undefined, "'['", undefined, "'{'", "'}'", "'*'", 
		"'%'", "'/'", "'+'", "'-'", "'++'", "'--'", "'&&'", "'||'", "'!'", "':'", 
		"';'", "'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'->'", "'=>'", 
		"'..'", "'::'", "'?::'", "';;'", "'#'", "'@'", "'?'", "'?:'", "'<'", "'>'", 
		"'<='", "'>='", "'!='", "'!=='", "'as?'", "'=='", "'==='", "'''", undefined, 
		undefined, undefined, "'@file'", "'package'", "'import'", "'class'", "'interface'", 
		"'fun'", "'object'", "'val'", "'var'", "'typealias'", "'constructor'", 
		"'by'", "'companion'", "'init'", "'this'", "'super'", "'typeof'", "'where'", 
		"'if'", "'else'", "'when'", "'try'", "'catch'", "'finally'", "'for'", 
		"'do'", "'while'", "'throw'", "'return'", "'continue'", "'break'", "'as'", 
		"'is'", "'in'", undefined, undefined, "'out'", "'@field'", "'@property'", 
		"'@get'", "'@set'", "'get'", "'set'", "'@receiver'", "'@param'", "'@setparam'", 
		"'@delegate'", "'dynamic'", "'public'", "'private'", "'protected'", "'internal'", 
		"'enum'", "'sealed'", "'annotation'", "'data'", "'inner'", "'tailrec'", 
		"'operator'", "'inline'", "'infix'", "'external'", "'suspend'", "'override'", 
		"'abstract'", "'final'", "'open'", "'const'", "'lateinit'", "'vararg'", 
		"'noinline'", "'crossinline'", "'reified'", undefined, "'\"\"\"'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'null'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "ShebangLine", "DelimitedComment", "LineComment", "WS", "NL", 
		"RESERVED", "DOT", "COMMA", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", 
		"LCURL", "RCURL", "MULT", "MOD", "DIV", "ADD", "SUB", "INCR", "DECR", 
		"CONJ", "DISJ", "EXCL", "COLON", "SEMICOLON", "ASSIGNMENT", "ADD_ASSIGNMENT", 
		"SUB_ASSIGNMENT", "MULT_ASSIGNMENT", "DIV_ASSIGNMENT", "MOD_ASSIGNMENT", 
		"ARROW", "DOUBLE_ARROW", "RANGE", "COLONCOLON", "Q_COLONCOLON", "DOUBLE_SEMICOLON", 
		"HASH", "AT", "QUEST", "ELVIS", "LANGLE", "RANGLE", "LE", "GE", "EXCL_EQ", 
		"EXCL_EQEQ", "AS_SAFE", "EQEQ", "EQEQEQ", "SINGLE_QUOTE", "RETURN_AT", 
		"CONTINUE_AT", "BREAK_AT", "FILE", "PACKAGE", "IMPORT", "CLASS", "INTERFACE", 
		"FUN", "OBJECT", "VAL", "VAR", "TYPE_ALIAS", "CONSTRUCTOR", "BY", "COMPANION", 
		"INIT", "THIS", "SUPER", "TYPEOF", "WHERE", "IF", "ELSE", "WHEN", "TRY", 
		"CATCH", "FINALLY", "FOR", "DO", "WHILE", "THROW", "RETURN", "CONTINUE", 
		"BREAK", "AS", "IS", "IN", "NOT_IS", "NOT_IN", "OUT", "FIELD", "PROPERTY", 
		"GET", "SET", "GETTER", "SETTER", "RECEIVER", "PARAM", "SETPARAM", "DELEGATE", 
		"DYNAMIC", "PUBLIC", "PRIVATE", "PROTECTED", "INTERNAL", "ENUM", "SEALED", 
		"ANNOTATION", "DATA", "INNER", "TAILREC", "OPERATOR", "INLINE", "INFIX", 
		"EXTERNAL", "SUSPEND", "OVERRIDE", "ABSTRACT", "FINAL", "OPEN", "CONST", 
		"LATEINIT", "VARARG", "NOINLINE", "CROSSINLINE", "REIFIED", "QUOTE_OPEN", 
		"TRIPLE_QUOTE_OPEN", "RealLiteral", "FloatLiteral", "DoubleLiteral", "LongLiteral", 
		"IntegerLiteral", "HexLiteral", "BinLiteral", "BooleanLiteral", "NullLiteral", 
		"Identifier", "LabelReference", "LabelDefinition", "FieldIdentifier", 
		"CharacterLiteral", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", 
		"UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", "UNICODE_CLASS_NL", 
		"Inside_Comment", "Inside_WS", "Inside_NL", "QUOTE_CLOSE", "LineStrRef", 
		"LineStrText", "LineStrEscapedChar", "LineStrExprStart", "TRIPLE_QUOTE_CLOSE", 
		"MultiLineStringQuote", "MultiLineStrRef", "MultiLineStrText", "MultiLineStrEscapedChar", 
		"MultiLineStrExprStart", "MultiLineNL", "StrExpr_IN", "StrExpr_Comment", 
		"StrExpr_WS", "StrExpr_NL"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(KotlinParser._LITERAL_NAMES, KotlinParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return KotlinParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "KotlinParser.g4"; }

	@Override
	public get ruleNames(): string[] { return KotlinParser.ruleNames; }

	@Override
	public get serializedATN(): string { return KotlinParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(KotlinParser._ATN, this);
	}
	@RuleVersion(0)
	public kotlinFile(): KotlinFileContext {
		let _localctx: KotlinFileContext = new KotlinFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, KotlinParser.RULE_kotlinFile);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,0,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 298;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,0,this._ctx);
			}
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,1,this._ctx) ) {
			case 1:
				{
				this.state = 304;
				this.fileAnnotation();
				}
				break;
			}
			this.state = 307;
			this.packageHeader();
			this.state = 308;
			this.importList();
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				{
				this.state = 309;
				this.topLevelObject();
				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 315;
			this.match(KotlinParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, KotlinParser.RULE_script);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 317;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			}
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,4,this._ctx) ) {
			case 1:
				{
				this.state = 323;
				this.fileAnnotation();
				}
				break;
			}
			this.state = 326;
			this.packageHeader();
			this.state = 327;
			this.importList();
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
				{
				{
				this.state = 328;
				this.expression();
				this.state = 330;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,5,this._ctx) ) {
				case 1:
					{
					this.state = 329;
					this.semi();
					}
					break;
				}
				}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 337;
			this.match(KotlinParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fileAnnotation(): FileAnnotationContext {
		let _localctx: FileAnnotationContext = new FileAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, KotlinParser.RULE_fileAnnotation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 339;
					this.match(KotlinParser.FILE);
					this.state = 340;
					this.match(KotlinParser.COLON);
					this.state = 350;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KotlinParser.LSQUARE:
						{
						this.state = 341;
						this.match(KotlinParser.LSQUARE);
						this.state = 343; 
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 342;
							this.unescapedAnnotation();
							}
							}
							this.state = 345; 
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while ( ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0) );
						this.state = 347;
						this.match(KotlinParser.RSQUARE);
						}
						break;
					case KotlinParser.IMPORT:
					case KotlinParser.CONSTRUCTOR:
					case KotlinParser.BY:
					case KotlinParser.COMPANION:
					case KotlinParser.INIT:
					case KotlinParser.WHERE:
					case KotlinParser.CATCH:
					case KotlinParser.FINALLY:
					case KotlinParser.OUT:
					case KotlinParser.GETTER:
					case KotlinParser.SETTER:
					case KotlinParser.DYNAMIC:
					case KotlinParser.PUBLIC:
					case KotlinParser.PRIVATE:
					case KotlinParser.PROTECTED:
					case KotlinParser.INTERNAL:
					case KotlinParser.ENUM:
					case KotlinParser.SEALED:
					case KotlinParser.ANNOTATION:
					case KotlinParser.DATA:
					case KotlinParser.INNER:
					case KotlinParser.TAILREC:
					case KotlinParser.OPERATOR:
					case KotlinParser.INLINE:
					case KotlinParser.INFIX:
					case KotlinParser.EXTERNAL:
					case KotlinParser.SUSPEND:
					case KotlinParser.OVERRIDE:
					case KotlinParser.ABSTRACT:
					case KotlinParser.FINAL:
					case KotlinParser.OPEN:
					case KotlinParser.CONST:
					case KotlinParser.LATEINIT:
					case KotlinParser.VARARG:
					case KotlinParser.NOINLINE:
					case KotlinParser.CROSSINLINE:
					case KotlinParser.REIFIED:
					case KotlinParser.Identifier:
						{
						this.state = 349;
						this.unescapedAnnotation();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 353;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,9,this._ctx) ) {
					case 1:
						{
						this.state = 352;
						this.semi();
						}
						break;
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 357; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public packageHeader(): PackageHeaderContext {
		let _localctx: PackageHeaderContext = new PackageHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, KotlinParser.RULE_packageHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.PACKAGE) {
				{
				this.state = 359;
				this.match(KotlinParser.PACKAGE);
				this.state = 360;
				this.identifier();
				this.state = 362;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,11,this._ctx) ) {
				case 1:
					{
					this.state = 361;
					this.semi();
					}
					break;
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importList(): ImportListContext {
		let _localctx: ImportListContext = new ImportListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, KotlinParser.RULE_importList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 366;
					this.importHeader();
					}
					} 
				}
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importHeader(): ImportHeaderContext {
		let _localctx: ImportHeaderContext = new ImportHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, KotlinParser.RULE_importHeader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.match(KotlinParser.IMPORT);
			this.state = 373;
			this.identifier();
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.DOT:
				{
				this.state = 374;
				this.match(KotlinParser.DOT);
				this.state = 375;
				this.match(KotlinParser.MULT);
				}
				break;
			case KotlinParser.AS:
				{
				this.state = 376;
				this.importAlias();
				}
				break;
			case KotlinParser.EOF:
			case KotlinParser.NL:
			case KotlinParser.LPAREN:
			case KotlinParser.LSQUARE:
			case KotlinParser.LCURL:
			case KotlinParser.ADD:
			case KotlinParser.SUB:
			case KotlinParser.INCR:
			case KotlinParser.DECR:
			case KotlinParser.EXCL:
			case KotlinParser.SEMICOLON:
			case KotlinParser.COLONCOLON:
			case KotlinParser.Q_COLONCOLON:
			case KotlinParser.AT:
			case KotlinParser.RETURN_AT:
			case KotlinParser.CONTINUE_AT:
			case KotlinParser.BREAK_AT:
			case KotlinParser.FILE:
			case KotlinParser.IMPORT:
			case KotlinParser.CLASS:
			case KotlinParser.INTERFACE:
			case KotlinParser.FUN:
			case KotlinParser.OBJECT:
			case KotlinParser.VAL:
			case KotlinParser.VAR:
			case KotlinParser.TYPE_ALIAS:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.THIS:
			case KotlinParser.SUPER:
			case KotlinParser.WHERE:
			case KotlinParser.IF:
			case KotlinParser.WHEN:
			case KotlinParser.TRY:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.FOR:
			case KotlinParser.DO:
			case KotlinParser.WHILE:
			case KotlinParser.THROW:
			case KotlinParser.RETURN:
			case KotlinParser.CONTINUE:
			case KotlinParser.BREAK:
			case KotlinParser.IN:
			case KotlinParser.OUT:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.QUOTE_OPEN:
			case KotlinParser.TRIPLE_QUOTE_OPEN:
			case KotlinParser.RealLiteral:
			case KotlinParser.LongLiteral:
			case KotlinParser.IntegerLiteral:
			case KotlinParser.HexLiteral:
			case KotlinParser.BinLiteral:
			case KotlinParser.BooleanLiteral:
			case KotlinParser.NullLiteral:
			case KotlinParser.Identifier:
			case KotlinParser.LabelReference:
			case KotlinParser.LabelDefinition:
			case KotlinParser.CharacterLiteral:
				break;
			default:
				break;
			}
			this.state = 380;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,15,this._ctx) ) {
			case 1:
				{
				this.state = 379;
				this.semi();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importAlias(): ImportAliasContext {
		let _localctx: ImportAliasContext = new ImportAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, KotlinParser.RULE_importAlias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(KotlinParser.AS);
			this.state = 383;
			this.simpleIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public topLevelObject(): TopLevelObjectContext {
		let _localctx: TopLevelObjectContext = new TopLevelObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, KotlinParser.RULE_topLevelObject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.classDeclaration();
				}
				break;

			case 2:
				{
				this.state = 386;
				this.functionDeclaration();
				}
				break;

			case 3:
				{
				this.state = 387;
				this.objectDeclaration();
				}
				break;

			case 4:
				{
				this.state = 388;
				this.propertyDeclaration();
				}
				break;

			case 5:
				{
				this.state = 389;
				this.typeAlias();
				}
				break;
			}
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.NL || _la===KotlinParser.SEMICOLON) {
				{
				this.state = 392;
				this.semi();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, KotlinParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 395;
				this.modifierList();
				}
			}

			this.state = 398;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.CLASS || _la===KotlinParser.INTERFACE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 399;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 405;
			this.simpleIdentifier();
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,21,this._ctx) ) {
			case 1:
				{
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 406;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 411;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 412;
				this.typeParameters();
				}
				break;
			}
			this.state = 422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,23,this._ctx) ) {
			case 1:
				{
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 415;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 420;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 421;
				this.primaryConstructor();
				}
				break;
			}
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,26,this._ctx) ) {
			case 1:
				{
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 424;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 429;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 430;
				this.match(KotlinParser.COLON);
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 431;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 436;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 437;
				this.delegationSpecifiers();
				}
				break;
			}
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				{
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 440;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 445;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 446;
				this.typeConstraints();
				}
				break;
			}
			this.state = 463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 449;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 455;
				this.classBody();
				}
				break;

			case 2:
				{
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 456;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 462;
				this.enumClassBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryConstructor(): PrimaryConstructorContext {
		let _localctx: PrimaryConstructorContext = new PrimaryConstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, KotlinParser.RULE_primaryConstructor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 465;
				this.modifierList();
				}
			}

			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.CONSTRUCTOR) {
				{
				this.state = 468;
				this.match(KotlinParser.CONSTRUCTOR);
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 469;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 477;
			this.classParameters();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classParameters(): ClassParametersContext {
		let _localctx: ClassParametersContext = new ClassParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, KotlinParser.RULE_classParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			this.match(KotlinParser.LPAREN);
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.IMPORT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.BY - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (KotlinParser.WHERE - 73)) | (1 << (KotlinParser.CATCH - 73)) | (1 << (KotlinParser.FINALLY - 73)) | (1 << (KotlinParser.IN - 73)) | (1 << (KotlinParser.OUT - 73)) | (1 << (KotlinParser.FIELD - 73)) | (1 << (KotlinParser.PROPERTY - 73)) | (1 << (KotlinParser.GET - 73)) | (1 << (KotlinParser.SET - 73)) | (1 << (KotlinParser.GETTER - 73)) | (1 << (KotlinParser.SETTER - 73)) | (1 << (KotlinParser.RECEIVER - 73)) | (1 << (KotlinParser.PARAM - 73)) | (1 << (KotlinParser.SETPARAM - 73)) | (1 << (KotlinParser.DELEGATE - 73)) | (1 << (KotlinParser.DYNAMIC - 73)) | (1 << (KotlinParser.PUBLIC - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (KotlinParser.PRIVATE - 105)) | (1 << (KotlinParser.PROTECTED - 105)) | (1 << (KotlinParser.INTERNAL - 105)) | (1 << (KotlinParser.ENUM - 105)) | (1 << (KotlinParser.SEALED - 105)) | (1 << (KotlinParser.ANNOTATION - 105)) | (1 << (KotlinParser.DATA - 105)) | (1 << (KotlinParser.INNER - 105)) | (1 << (KotlinParser.TAILREC - 105)) | (1 << (KotlinParser.OPERATOR - 105)) | (1 << (KotlinParser.INLINE - 105)) | (1 << (KotlinParser.INFIX - 105)) | (1 << (KotlinParser.EXTERNAL - 105)) | (1 << (KotlinParser.SUSPEND - 105)) | (1 << (KotlinParser.OVERRIDE - 105)) | (1 << (KotlinParser.ABSTRACT - 105)) | (1 << (KotlinParser.FINAL - 105)) | (1 << (KotlinParser.OPEN - 105)) | (1 << (KotlinParser.CONST - 105)) | (1 << (KotlinParser.LATEINIT - 105)) | (1 << (KotlinParser.VARARG - 105)) | (1 << (KotlinParser.NOINLINE - 105)) | (1 << (KotlinParser.CROSSINLINE - 105)) | (1 << (KotlinParser.REIFIED - 105)))) !== 0) || _la===KotlinParser.Identifier || _la===KotlinParser.LabelReference) {
				{
				this.state = 480;
				this.classParameter();
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.COMMA) {
					{
					{
					this.state = 481;
					this.match(KotlinParser.COMMA);
					this.state = 482;
					this.classParameter();
					}
					}
					this.state = 487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 490;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classParameter(): ClassParameterContext {
		let _localctx: ClassParameterContext = new ClassParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, KotlinParser.RULE_classParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,37,this._ctx) ) {
			case 1:
				{
				this.state = 492;
				this.modifierList();
				}
				break;
			}
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.VAL || _la===KotlinParser.VAR) {
				{
				this.state = 495;
				_la = this._input.LA(1);
				if ( !(_la===KotlinParser.VAL || _la===KotlinParser.VAR) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 498;
			this.simpleIdentifier();
			this.state = 499;
			this.match(KotlinParser.COLON);
			this.state = 500;
			this.type();
			this.state = 503;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.ASSIGNMENT) {
				{
				this.state = 501;
				this.match(KotlinParser.ASSIGNMENT);
				this.state = 502;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public delegationSpecifiers(): DelegationSpecifiersContext {
		let _localctx: DelegationSpecifiersContext = new DelegationSpecifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, KotlinParser.RULE_delegationSpecifiers);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la===KotlinParser.LabelReference) {
				{
				{
				this.state = 505;
				this.annotations();
				}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 511;
			this.delegationSpecifier();
			this.state = 528;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 515;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 512;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 517;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 518;
					this.match(KotlinParser.COMMA);
					this.state = 522;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 519;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 524;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 525;
					this.delegationSpecifier();
					}
					} 
				}
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,43,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public delegationSpecifier(): DelegationSpecifierContext {
		let _localctx: DelegationSpecifierContext = new DelegationSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, KotlinParser.RULE_delegationSpecifier);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 531;
				this.constructorInvocation();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.userType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 533;
				this.explicitDelegation();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constructorInvocation(): ConstructorInvocationContext {
		let _localctx: ConstructorInvocationContext = new ConstructorInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, KotlinParser.RULE_constructorInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.userType();
			this.state = 537;
			this.callSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public explicitDelegation(): ExplicitDelegationContext {
		let _localctx: ExplicitDelegationContext = new ExplicitDelegationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, KotlinParser.RULE_explicitDelegation);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.userType();
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 540;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 546;
			this.match(KotlinParser.BY);
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 547;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,46,this._ctx);
			}
			this.state = 553;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, KotlinParser.RULE_classBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(KotlinParser.LCURL);
			this.state = 559;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 556;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 561;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,47,this._ctx);
			}
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				{
				this.state = 562;
				this.classMemberDeclaration();
				}
				}
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 568;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 574;
			this.match(KotlinParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classMemberDeclaration(): ClassMemberDeclarationContext {
		let _localctx: ClassMemberDeclarationContext = new ClassMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, KotlinParser.RULE_classMemberDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
			case 1:
				{
				this.state = 576;
				this.classDeclaration();
				}
				break;

			case 2:
				{
				this.state = 577;
				this.functionDeclaration();
				}
				break;

			case 3:
				{
				this.state = 578;
				this.objectDeclaration();
				}
				break;

			case 4:
				{
				this.state = 579;
				this.companionObject();
				}
				break;

			case 5:
				{
				this.state = 580;
				this.propertyDeclaration();
				}
				break;

			case 6:
				{
				this.state = 581;
				this.anonymousInitializer();
				}
				break;

			case 7:
				{
				this.state = 582;
				this.secondaryConstructor();
				}
				break;

			case 8:
				{
				this.state = 583;
				this.typeAlias();
				}
				break;
			}
			this.state = 587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				{
				this.state = 586;
				this.semi();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public anonymousInitializer(): AnonymousInitializerContext {
		let _localctx: AnonymousInitializerContext = new AnonymousInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, KotlinParser.RULE_anonymousInitializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.match(KotlinParser.INIT);
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 590;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 596;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public secondaryConstructor(): SecondaryConstructorContext {
		let _localctx: SecondaryConstructorContext = new SecondaryConstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, KotlinParser.RULE_secondaryConstructor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 598;
				this.modifierList();
				}
			}

			this.state = 601;
			this.match(KotlinParser.CONSTRUCTOR);
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 602;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 608;
			this.functionValueParameters();
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
			case 1:
				{
				this.state = 612;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 609;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 614;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 615;
				this.match(KotlinParser.COLON);
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 616;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 621;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 622;
				this.constructorDelegationCall();
				}
				break;
			}
			this.state = 628;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 625;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 630;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 631;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public constructorDelegationCall(): ConstructorDelegationCallContext {
		let _localctx: ConstructorDelegationCallContext = new ConstructorDelegationCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, KotlinParser.RULE_constructorDelegationCall);
		let _la: number;
		try {
			this.state = 649;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.THIS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.match(KotlinParser.THIS);
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 634;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 640;
				this.valueArguments();
				}
				break;
			case KotlinParser.SUPER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 641;
				this.match(KotlinParser.SUPER);
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 642;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 647;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 648;
				this.valueArguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumClassBody(): EnumClassBodyContext {
		let _localctx: EnumClassBodyContext = new EnumClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, KotlinParser.RULE_enumClassBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 651;
			this.match(KotlinParser.LCURL);
			this.state = 655;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 652;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 657;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,62,this._ctx);
			}
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
				{
				this.state = 658;
				this.enumEntries();
				}
			}

			this.state = 680;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,67,this._ctx) ) {
			case 1:
				{
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 661;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 667;
				this.match(KotlinParser.SEMICOLON);
				this.state = 671;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 668;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 673;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,65,this._ctx);
				}
				this.state = 677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
					{
					{
					this.state = 674;
					this.classMemberDeclaration();
					}
					}
					this.state = 679;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 682;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 687;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 688;
			this.match(KotlinParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumEntries(): EnumEntriesContext {
		let _localctx: EnumEntriesContext = new EnumEntriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, KotlinParser.RULE_enumEntries);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 697; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 690;
				this.enumEntry();
				this.state = 694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 691;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 696;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,69,this._ctx);
				}
				}
				}
				this.state = 699; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0) );
			this.state = 702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,71,this._ctx) ) {
			case 1:
				{
				this.state = 701;
				this.match(KotlinParser.SEMICOLON);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public enumEntry(): EnumEntryContext {
		let _localctx: EnumEntryContext = new EnumEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, KotlinParser.RULE_enumEntry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.simpleIdentifier();
			this.state = 712;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,73,this._ctx) ) {
			case 1:
				{
				this.state = 708;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 705;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 710;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 711;
				this.valueArguments();
				}
				break;
			}
			this.state = 721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,75,this._ctx) ) {
			case 1:
				{
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 714;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 719;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 720;
				this.classBody();
				}
				break;
			}
			this.state = 730;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,77,this._ctx) ) {
			case 1:
				{
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 723;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 728;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 729;
				this.match(KotlinParser.COMMA);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, KotlinParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 732;
				this.modifierList();
				}
			}

			this.state = 735;
			this.match(KotlinParser.FUN);
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,81,this._ctx) ) {
			case 1:
				{
				this.state = 739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 736;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 741;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 742;
				this.type();
				this.state = 746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 743;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 748;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 749;
				this.match(KotlinParser.DOT);
				}
				break;
			}
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,83,this._ctx) ) {
			case 1:
				{
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 753;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 758;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 759;
				this.typeParameters();
				}
				break;
			}
			this.state = 769;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,85,this._ctx) ) {
			case 1:
				{
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 762;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 767;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 768;
				this.identifier();
				}
				break;
			}
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 771;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 777;
			this.functionValueParameters();
			this.state = 792;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
			case 1:
				{
				this.state = 781;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 778;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 783;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 784;
				this.match(KotlinParser.COLON);
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 785;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 790;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 791;
				this.type();
				}
				break;
			}
			this.state = 801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,91,this._ctx) ) {
			case 1:
				{
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 794;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 799;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 800;
				this.typeConstraints();
				}
				break;
			}
			this.state = 810;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,93,this._ctx) ) {
			case 1:
				{
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 803;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 808;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 809;
				this.functionBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionValueParameters(): FunctionValueParametersContext {
		let _localctx: FunctionValueParametersContext = new FunctionValueParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, KotlinParser.RULE_functionValueParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(KotlinParser.LPAREN);
			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.FILE - 40)) | (1 << (KotlinParser.IMPORT - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.BY - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (KotlinParser.WHERE - 73)) | (1 << (KotlinParser.CATCH - 73)) | (1 << (KotlinParser.FINALLY - 73)) | (1 << (KotlinParser.IN - 73)) | (1 << (KotlinParser.OUT - 73)) | (1 << (KotlinParser.FIELD - 73)) | (1 << (KotlinParser.PROPERTY - 73)) | (1 << (KotlinParser.GET - 73)) | (1 << (KotlinParser.SET - 73)) | (1 << (KotlinParser.GETTER - 73)) | (1 << (KotlinParser.SETTER - 73)) | (1 << (KotlinParser.RECEIVER - 73)) | (1 << (KotlinParser.PARAM - 73)) | (1 << (KotlinParser.SETPARAM - 73)) | (1 << (KotlinParser.DELEGATE - 73)) | (1 << (KotlinParser.DYNAMIC - 73)) | (1 << (KotlinParser.PUBLIC - 73)))) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (KotlinParser.PRIVATE - 105)) | (1 << (KotlinParser.PROTECTED - 105)) | (1 << (KotlinParser.INTERNAL - 105)) | (1 << (KotlinParser.ENUM - 105)) | (1 << (KotlinParser.SEALED - 105)) | (1 << (KotlinParser.ANNOTATION - 105)) | (1 << (KotlinParser.DATA - 105)) | (1 << (KotlinParser.INNER - 105)) | (1 << (KotlinParser.TAILREC - 105)) | (1 << (KotlinParser.OPERATOR - 105)) | (1 << (KotlinParser.INLINE - 105)) | (1 << (KotlinParser.INFIX - 105)) | (1 << (KotlinParser.EXTERNAL - 105)) | (1 << (KotlinParser.SUSPEND - 105)) | (1 << (KotlinParser.OVERRIDE - 105)) | (1 << (KotlinParser.ABSTRACT - 105)) | (1 << (KotlinParser.FINAL - 105)) | (1 << (KotlinParser.OPEN - 105)) | (1 << (KotlinParser.CONST - 105)) | (1 << (KotlinParser.LATEINIT - 105)) | (1 << (KotlinParser.VARARG - 105)) | (1 << (KotlinParser.NOINLINE - 105)) | (1 << (KotlinParser.CROSSINLINE - 105)) | (1 << (KotlinParser.REIFIED - 105)))) !== 0) || _la===KotlinParser.Identifier || _la===KotlinParser.LabelReference) {
				{
				this.state = 813;
				this.functionValueParameter();
				this.state = 818;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.COMMA) {
					{
					{
					this.state = 814;
					this.match(KotlinParser.COMMA);
					this.state = 815;
					this.functionValueParameter();
					}
					}
					this.state = 820;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 823;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionValueParameter(): FunctionValueParameterContext {
		let _localctx: FunctionValueParameterContext = new FunctionValueParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, KotlinParser.RULE_functionValueParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,96,this._ctx) ) {
			case 1:
				{
				this.state = 825;
				this.modifierList();
				}
				break;
			}
			this.state = 828;
			this.parameter();
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.ASSIGNMENT) {
				{
				this.state = 829;
				this.match(KotlinParser.ASSIGNMENT);
				this.state = 830;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, KotlinParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.simpleIdentifier();
			this.state = 834;
			this.match(KotlinParser.COLON);
			this.state = 835;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, KotlinParser.RULE_functionBody);
		try {
			let _alt: number;
			this.state = 846;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.LCURL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 837;
				this.block();
				}
				break;
			case KotlinParser.ASSIGNMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 838;
				this.match(KotlinParser.ASSIGNMENT);
				this.state = 842;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,98,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 839;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 844;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,98,this._ctx);
				}
				this.state = 845;
				this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public objectDeclaration(): ObjectDeclarationContext {
		let _localctx: ObjectDeclarationContext = new ObjectDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, KotlinParser.RULE_objectDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 848;
				this.modifierList();
				}
			}

			this.state = 851;
			this.match(KotlinParser.OBJECT);
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 852;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 858;
			this.simpleIdentifier();
			this.state = 866;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,103,this._ctx) ) {
			case 1:
				{
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 859;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 864;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 865;
				this.primaryConstructor();
				}
				break;
			}
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,106,this._ctx) ) {
			case 1:
				{
				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 868;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 873;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 874;
				this.match(KotlinParser.COLON);
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 875;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 881;
				this.delegationSpecifiers();
				}
				break;
			}
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,108,this._ctx) ) {
			case 1:
				{
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 884;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 889;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 890;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public companionObject(): CompanionObjectContext {
		let _localctx: CompanionObjectContext = new CompanionObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, KotlinParser.RULE_companionObject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 893;
				this.modifierList();
				}
			}

			this.state = 896;
			this.match(KotlinParser.COMPANION);
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 897;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 903;
				this.modifierList();
				}
			}

			this.state = 906;
			this.match(KotlinParser.OBJECT);
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,113,this._ctx) ) {
			case 1:
				{
				this.state = 910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 907;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 912;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 913;
				this.simpleIdentifier();
				}
				break;
			}
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
			case 1:
				{
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 916;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 921;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 922;
				this.match(KotlinParser.COLON);
				this.state = 926;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 923;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 928;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 929;
				this.delegationSpecifiers();
				}
				break;
			}
			this.state = 939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,118,this._ctx) ) {
			case 1:
				{
				this.state = 935;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 932;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 937;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 938;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, KotlinParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 941;
				this.modifierList();
				}
			}

			this.state = 944;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.VAL || _la===KotlinParser.VAR) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 952;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,121,this._ctx) ) {
			case 1:
				{
				this.state = 948;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 945;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 950;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 951;
				this.typeParameters();
				}
				break;
			}
			this.state = 969;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,124,this._ctx) ) {
			case 1:
				{
				this.state = 957;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 954;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 959;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 960;
				this.type();
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 961;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 966;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 967;
				this.match(KotlinParser.DOT);
				}
				break;
			}
			{
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 971;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 979;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.LPAREN:
				{
				this.state = 977;
				this.multiVariableDeclaration();
				}
				break;
			case KotlinParser.IMPORT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.WHERE:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.OUT:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.Identifier:
				{
				this.state = 978;
				this.variableDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,128,this._ctx) ) {
			case 1:
				{
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 981;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 986;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 987;
				this.typeConstraints();
				}
				break;
			}
			this.state = 1004;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,131,this._ctx) ) {
			case 1:
				{
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 990;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 995;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 996;
				_la = this._input.LA(1);
				if ( !(_la===KotlinParser.ASSIGNMENT || _la===KotlinParser.BY) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1000;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,130,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 997;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 1002;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,130,this._ctx);
				}
				this.state = 1003;
				this.expression();
				}
				break;
			}
			this.state = 1007;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,132,this._ctx) ) {
			case 1:
				{
				this.state = 1006;
				this.semi();
				}
				break;
			}
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,139,this._ctx) ) {
			case 1:
				{
				this.state = 1010;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,133,this._ctx) ) {
				case 1:
					{
					this.state = 1009;
					this.getter();
					}
					break;
				}
				this.state = 1019;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,135,this._ctx) ) {
				case 1:
					{
					this.state = 1015;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1012;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1017;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1018;
					this.setter();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 1022;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,136,this._ctx) ) {
				case 1:
					{
					this.state = 1021;
					this.setter();
					}
					break;
				}
				this.state = 1031;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,138,this._ctx) ) {
				case 1:
					{
					this.state = 1027;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1024;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1029;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1030;
					this.getter();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiVariableDeclaration(): MultiVariableDeclarationContext {
		let _localctx: MultiVariableDeclarationContext = new MultiVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, KotlinParser.RULE_multiVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(KotlinParser.LPAREN);
			this.state = 1036;
			this.variableDeclaration();
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.COMMA) {
				{
				{
				this.state = 1037;
				this.match(KotlinParser.COMMA);
				this.state = 1038;
				this.variableDeclaration();
				}
				}
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1044;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, KotlinParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.simpleIdentifier();
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.COLON) {
				{
				this.state = 1047;
				this.match(KotlinParser.COLON);
				this.state = 1048;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, KotlinParser.RULE_getter);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,151,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1052;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
					{
					this.state = 1051;
					this.modifierList();
					}
				}

				this.state = 1054;
				this.match(KotlinParser.GETTER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1056;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
					{
					this.state = 1055;
					this.modifierList();
					}
				}

				this.state = 1058;
				this.match(KotlinParser.GETTER);
				this.state = 1062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1059;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1064;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1065;
				this.match(KotlinParser.LPAREN);
				this.state = 1066;
				this.match(KotlinParser.RPAREN);
				this.state = 1081;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,147,this._ctx) ) {
				case 1:
					{
					this.state = 1070;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1067;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1072;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1073;
					this.match(KotlinParser.COLON);
					this.state = 1077;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1074;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1079;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1080;
					this.type();
					}
					break;
				}
				this.state = 1086;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1083;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1088;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1098;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case KotlinParser.LCURL:
					{
					this.state = 1089;
					this.block();
					}
					break;
				case KotlinParser.ASSIGNMENT:
					{
					this.state = 1090;
					this.match(KotlinParser.ASSIGNMENT);
					this.state = 1094;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1091;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1096;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,149,this._ctx);
					}
					this.state = 1097;
					this.expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, KotlinParser.RULE_setter);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1137;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,159,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
					{
					this.state = 1102;
					this.modifierList();
					}
				}

				this.state = 1105;
				this.match(KotlinParser.SETTER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
					{
					this.state = 1106;
					this.modifierList();
					}
				}

				this.state = 1109;
				this.match(KotlinParser.SETTER);
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1110;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1116;
				this.match(KotlinParser.LPAREN);
				this.state = 1121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,156,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						this.state = 1119;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case KotlinParser.AT:
						case KotlinParser.FILE:
						case KotlinParser.FIELD:
						case KotlinParser.PROPERTY:
						case KotlinParser.GET:
						case KotlinParser.SET:
						case KotlinParser.RECEIVER:
						case KotlinParser.PARAM:
						case KotlinParser.SETPARAM:
						case KotlinParser.DELEGATE:
						case KotlinParser.LabelReference:
							{
							this.state = 1117;
							this.annotations();
							}
							break;
						case KotlinParser.VARARG:
						case KotlinParser.NOINLINE:
						case KotlinParser.CROSSINLINE:
							{
							this.state = 1118;
							this.parameterModifier();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						} 
					}
					this.state = 1123;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,156,this._ctx);
				}
				this.state = 1126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
				case 1:
					{
					this.state = 1124;
					this.simpleIdentifier();
					}
					break;

				case 2:
					{
					this.state = 1125;
					this.parameter();
					}
					break;
				}
				this.state = 1128;
				this.match(KotlinParser.RPAREN);
				this.state = 1132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1129;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1134;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1135;
				this.functionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeAlias(): TypeAliasContext {
		let _localctx: TypeAliasContext = new TypeAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, KotlinParser.RULE_typeAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (KotlinParser.IN - 89)) | (1 << (KotlinParser.OUT - 89)) | (1 << (KotlinParser.FIELD - 89)) | (1 << (KotlinParser.PROPERTY - 89)) | (1 << (KotlinParser.GET - 89)) | (1 << (KotlinParser.SET - 89)) | (1 << (KotlinParser.RECEIVER - 89)) | (1 << (KotlinParser.PARAM - 89)) | (1 << (KotlinParser.SETPARAM - 89)) | (1 << (KotlinParser.DELEGATE - 89)) | (1 << (KotlinParser.PUBLIC - 89)) | (1 << (KotlinParser.PRIVATE - 89)) | (1 << (KotlinParser.PROTECTED - 89)) | (1 << (KotlinParser.INTERNAL - 89)) | (1 << (KotlinParser.ENUM - 89)) | (1 << (KotlinParser.SEALED - 89)) | (1 << (KotlinParser.ANNOTATION - 89)) | (1 << (KotlinParser.DATA - 89)) | (1 << (KotlinParser.INNER - 89)) | (1 << (KotlinParser.TAILREC - 89)) | (1 << (KotlinParser.OPERATOR - 89)) | (1 << (KotlinParser.INLINE - 89)) | (1 << (KotlinParser.INFIX - 89)) | (1 << (KotlinParser.EXTERNAL - 89)) | (1 << (KotlinParser.SUSPEND - 89)) | (1 << (KotlinParser.OVERRIDE - 89)) | (1 << (KotlinParser.ABSTRACT - 89)))) !== 0) || ((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & ((1 << (KotlinParser.FINAL - 121)) | (1 << (KotlinParser.OPEN - 121)) | (1 << (KotlinParser.CONST - 121)) | (1 << (KotlinParser.LATEINIT - 121)) | (1 << (KotlinParser.VARARG - 121)) | (1 << (KotlinParser.NOINLINE - 121)) | (1 << (KotlinParser.CROSSINLINE - 121)) | (1 << (KotlinParser.REIFIED - 121)) | (1 << (KotlinParser.LabelReference - 121)))) !== 0)) {
				{
				this.state = 1139;
				this.modifierList();
				}
			}

			this.state = 1142;
			this.match(KotlinParser.TYPE_ALIAS);
			this.state = 1146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1143;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1149;
			this.simpleIdentifier();
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,163,this._ctx) ) {
			case 1:
				{
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1150;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1156;
				this.typeParameters();
				}
				break;
			}
			this.state = 1162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1159;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1165;
			this.match(KotlinParser.ASSIGNMENT);
			this.state = 1169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1166;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1172;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, KotlinParser.RULE_typeParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1174;
			this.match(KotlinParser.LANGLE);
			this.state = 1178;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,166,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1175;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 1180;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,166,this._ctx);
			}
			this.state = 1181;
			this.typeParameter();
			this.state = 1198;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,169,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1185;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1182;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1187;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1188;
					this.match(KotlinParser.COMMA);
					this.state = 1192;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,168,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1189;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1194;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,168,this._ctx);
					}
					this.state = 1195;
					this.typeParameter();
					}
					} 
				}
				this.state = 1200;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,169,this._ctx);
			}
			this.state = 1204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1201;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1207;
			this.match(KotlinParser.RANGLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, KotlinParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1210;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,171,this._ctx) ) {
			case 1:
				{
				this.state = 1209;
				this.modifierList();
				}
				break;
			}
			this.state = 1215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1212;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1218;
			this.simpleIdentifier();
			this.state = 1233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,175,this._ctx) ) {
			case 1:
				{
				this.state = 1222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1219;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1225;
				this.match(KotlinParser.COLON);
				this.state = 1229;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1226;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1231;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1232;
				this.type();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, KotlinParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,176,this._ctx) ) {
			case 1:
				{
				this.state = 1235;
				this.typeModifierList();
				}
				break;
			}
			this.state = 1242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,177,this._ctx) ) {
			case 1:
				{
				this.state = 1238;
				this.parenthesizedType();
				}
				break;

			case 2:
				{
				this.state = 1239;
				this.nullableType();
				}
				break;

			case 3:
				{
				this.state = 1240;
				this.typeReference();
				}
				break;

			case 4:
				{
				this.state = 1241;
				this.functionType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeModifierList(): TypeModifierListContext {
		let _localctx: TypeModifierListContext = new TypeModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, KotlinParser.RULE_typeModifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1252;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KotlinParser.AT:
					case KotlinParser.FILE:
					case KotlinParser.FIELD:
					case KotlinParser.PROPERTY:
					case KotlinParser.GET:
					case KotlinParser.SET:
					case KotlinParser.RECEIVER:
					case KotlinParser.PARAM:
					case KotlinParser.SETPARAM:
					case KotlinParser.DELEGATE:
					case KotlinParser.LabelReference:
						{
						this.state = 1244;
						this.annotations();
						}
						break;
					case KotlinParser.SUSPEND:
						{
						this.state = 1245;
						this.match(KotlinParser.SUSPEND);
						this.state = 1249;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===KotlinParser.NL) {
							{
							{
							this.state = 1246;
							this.match(KotlinParser.NL);
							}
							}
							this.state = 1251;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1254; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,180,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parenthesizedType(): ParenthesizedTypeContext {
		let _localctx: ParenthesizedTypeContext = new ParenthesizedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, KotlinParser.RULE_parenthesizedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1256;
			this.match(KotlinParser.LPAREN);
			this.state = 1257;
			this.type();
			this.state = 1258;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public nullableType(): NullableTypeContext {
		let _localctx: NullableTypeContext = new NullableTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, KotlinParser.RULE_nullableType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,181,this._ctx) ) {
			case 1:
				{
				this.state = 1260;
				this.typeReference();
				}
				break;

			case 2:
				{
				this.state = 1261;
				this.parenthesizedType();
				}
				break;
			}
			this.state = 1267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1264;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1271; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1270;
					this.match(KotlinParser.QUEST);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1273; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,183,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, KotlinParser.RULE_typeReference);
		try {
			this.state = 1281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,184,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1275;
				this.match(KotlinParser.LPAREN);
				this.state = 1276;
				this.typeReference();
				this.state = 1277;
				this.match(KotlinParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1279;
				this.userType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1280;
				this.match(KotlinParser.DYNAMIC);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, KotlinParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,187,this._ctx) ) {
			case 1:
				{
				this.state = 1283;
				this.functionTypeReceiver();
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1284;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1290;
				this.match(KotlinParser.DOT);
				this.state = 1294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1291;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 1299;
			this.functionTypeParameters();
			this.state = 1303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1300;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1306;
			this.match(KotlinParser.ARROW);
			this.state = 1314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,190,this._ctx) ) {
			case 1:
				{
				this.state = 1310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1307;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1313;
				this.type();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionTypeReceiver(): FunctionTypeReceiverContext {
		let _localctx: FunctionTypeReceiverContext = new FunctionTypeReceiverContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, KotlinParser.RULE_functionTypeReceiver);
		try {
			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,191,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1316;
				this.parenthesizedType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1317;
				this.nullableType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1318;
				this.typeReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public userType(): UserTypeContext {
		let _localctx: UserTypeContext = new UserTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, KotlinParser.RULE_userType);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1321;
			this.simpleUserType();
			this.state = 1338;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,194,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1322;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1327;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1328;
					this.match(KotlinParser.DOT);
					this.state = 1332;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1329;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1334;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1335;
					this.simpleUserType();
					}
					} 
				}
				this.state = 1340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,194,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpleUserType(): SimpleUserTypeContext {
		let _localctx: SimpleUserTypeContext = new SimpleUserTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, KotlinParser.RULE_simpleUserType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1341;
			this.simpleIdentifier();
			this.state = 1349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,196,this._ctx) ) {
			case 1:
				{
				this.state = 1345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1342;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1348;
				this.typeArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionTypeParameters(): FunctionTypeParametersContext {
		let _localctx: FunctionTypeParametersContext = new FunctionTypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, KotlinParser.RULE_functionTypeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1351;
			this.match(KotlinParser.LPAREN);
			this.state = 1354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,197,this._ctx) ) {
			case 1:
				{
				this.state = 1352;
				this.parameter();
				}
				break;

			case 2:
				{
				this.state = 1353;
				this.type();
				}
				break;
			}
			this.state = 1363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.COMMA) {
				{
				{
				this.state = 1356;
				this.match(KotlinParser.COMMA);
				this.state = 1359;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,198,this._ctx) ) {
				case 1:
					{
					this.state = 1357;
					this.parameter();
					}
					break;

				case 2:
					{
					this.state = 1358;
					this.type();
					}
					break;
				}
				}
				}
				this.state = 1365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1366;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeConstraints(): TypeConstraintsContext {
		let _localctx: TypeConstraintsContext = new TypeConstraintsContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, KotlinParser.RULE_typeConstraints);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1368;
			this.match(KotlinParser.WHERE);
			this.state = 1372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1369;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1375;
			this.typeConstraint();
			this.state = 1392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,203,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1376;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1381;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1382;
					this.match(KotlinParser.COMMA);
					this.state = 1386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1383;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1388;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1389;
					this.typeConstraint();
					}
					} 
				}
				this.state = 1394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,203,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeConstraint(): TypeConstraintContext {
		let _localctx: TypeConstraintContext = new TypeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, KotlinParser.RULE_typeConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la===KotlinParser.LabelReference) {
				{
				{
				this.state = 1395;
				this.annotations();
				}
				}
				this.state = 1400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1401;
			this.simpleIdentifier();
			this.state = 1405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1402;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1408;
			this.match(KotlinParser.COLON);
			this.state = 1412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1409;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1415;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, KotlinParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.match(KotlinParser.LCURL);
			this.state = 1421;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,207,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1418;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 1423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,207,this._ctx);
			}
			this.state = 1429;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,208,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1424;
					this.statement();
					this.state = 1425;
					this.semi();
					}
					} 
				}
				this.state = 1431;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,208,this._ctx);
			}
			this.state = 1436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,210,this._ctx) ) {
			case 1:
				{
				this.state = 1432;
				this.statement();
				this.state = 1434;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,209,this._ctx) ) {
				case 1:
					{
					this.state = 1433;
					this.semi();
					}
					break;
				}
				}
				break;
			}
			this.state = 1441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1438;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1444;
			this.match(KotlinParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, KotlinParser.RULE_statements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1458;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,214,this._ctx) ) {
			case 1:
				{
				this.state = 1451;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,212,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1446;
						this.statement();
						this.state = 1447;
						this.semi();
						}
						} 
					}
					this.state = 1453;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,212,this._ctx);
				}
				this.state = 1454;
				this.statement();
				this.state = 1456;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,213,this._ctx) ) {
				case 1:
					{
					this.state = 1455;
					this.semi();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, KotlinParser.RULE_statement);
		try {
			this.state = 1463;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,215,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1460;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1461;
				this.assignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1462;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, KotlinParser.RULE_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.LabelDefinition) {
				{
				{
				this.state = 1465;
				this.labelDefinition();
				}
				}
				this.state = 1470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,217,this._ctx) ) {
			case 1:
				{
				this.state = 1471;
				this.classDeclaration();
				}
				break;

			case 2:
				{
				this.state = 1472;
				this.functionDeclaration();
				}
				break;

			case 3:
				{
				this.state = 1473;
				this.propertyDeclaration();
				}
				break;

			case 4:
				{
				this.state = 1474;
				this.typeAlias();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, KotlinParser.RULE_assignment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1477;
			this.assignableExpression();
			this.state = 1478;
			this.assignmentOperator();
			this.state = 1482;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,218,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1479;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 1484;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,218,this._ctx);
			}
			this.state = 1485;
			this.disjunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, KotlinParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this.disjunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public disjunction(): DisjunctionContext {
		let _localctx: DisjunctionContext = new DisjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, KotlinParser.RULE_disjunction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.conjunction();
			this.state = 1506;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,221,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1493;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1490;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1495;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1496;
					this.match(KotlinParser.DISJ);
					this.state = 1500;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,220,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1497;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1502;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,220,this._ctx);
					}
					this.state = 1503;
					this.conjunction();
					}
					} 
				}
				this.state = 1508;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,221,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conjunction(): ConjunctionContext {
		let _localctx: ConjunctionContext = new ConjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, KotlinParser.RULE_conjunction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1509;
			this.equality();
			this.state = 1526;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,224,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1513;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1510;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1515;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1516;
					this.match(KotlinParser.CONJ);
					this.state = 1520;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,223,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1517;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1522;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,223,this._ctx);
					}
					this.state = 1523;
					this.equality();
					}
					} 
				}
				this.state = 1528;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,224,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public equality(): EqualityContext {
		let _localctx: EqualityContext = new EqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, KotlinParser.RULE_equality);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1529;
			this.comparison();
			this.state = 1541;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,226,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1530;
					this.equalityOperator();
					this.state = 1534;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,225,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1531;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1536;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,225,this._ctx);
					}
					this.state = 1537;
					this.comparison();
					}
					} 
				}
				this.state = 1543;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,226,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, KotlinParser.RULE_comparison);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
			this.infixOperation();
			this.state = 1554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,228,this._ctx) ) {
			case 1:
				{
				this.state = 1545;
				this.comparisonOperator();
				this.state = 1549;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,227,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1546;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 1551;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,227,this._ctx);
				}
				this.state = 1552;
				this.infixOperation();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public infixOperation(): InfixOperationContext {
		let _localctx: InfixOperationContext = new InfixOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, KotlinParser.RULE_infixOperation);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,233,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1556;
				this.elvisExpression();
				this.state = 1568;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,230,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1557;
						this.inOperator();
						this.state = 1561;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,229,this._ctx);
						while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
							if ( _alt===1 ) {
								{
								{
								this.state = 1558;
								this.match(KotlinParser.NL);
								}
								} 
							}
							this.state = 1563;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,229,this._ctx);
						}
						this.state = 1564;
						this.elvisExpression();
						}
						} 
					}
					this.state = 1570;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,230,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1571;
				this.elvisExpression();
				this.state = 1581;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,232,this._ctx) ) {
				case 1:
					{
					this.state = 1572;
					this.isOperator();
					this.state = 1576;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1573;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1578;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1579;
					this.type();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elvisExpression(): ElvisExpressionContext {
		let _localctx: ElvisExpressionContext = new ElvisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, KotlinParser.RULE_elvisExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1585;
			this.infixFunctionCall();
			this.state = 1602;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,236,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1589;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1586;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1591;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1592;
					this.match(KotlinParser.ELVIS);
					this.state = 1596;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,235,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1593;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1598;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,235,this._ctx);
					}
					this.state = 1599;
					this.infixFunctionCall();
					}
					} 
				}
				this.state = 1604;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,236,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public infixFunctionCall(): InfixFunctionCallContext {
		let _localctx: InfixFunctionCallContext = new InfixFunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, KotlinParser.RULE_infixFunctionCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1605;
			this.rangeExpression();
			this.state = 1617;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,238,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1606;
					this.simpleIdentifier();
					this.state = 1610;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,237,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1607;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1612;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,237,this._ctx);
					}
					this.state = 1613;
					this.rangeExpression();
					}
					} 
				}
				this.state = 1619;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,238,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rangeExpression(): RangeExpressionContext {
		let _localctx: RangeExpressionContext = new RangeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, KotlinParser.RULE_rangeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1620;
			this.additiveExpression();
			this.state = 1631;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,240,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1621;
					this.match(KotlinParser.RANGE);
					this.state = 1625;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,239,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1622;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1627;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,239,this._ctx);
					}
					this.state = 1628;
					this.additiveExpression();
					}
					} 
				}
				this.state = 1633;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,240,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, KotlinParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1634;
			this.multiplicativeExpression();
			this.state = 1646;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,242,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1635;
					this.additiveOperator();
					this.state = 1639;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,241,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1636;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1641;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,241,this._ctx);
					}
					this.state = 1642;
					this.multiplicativeExpression();
					}
					} 
				}
				this.state = 1648;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,242,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, KotlinParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1649;
			this.asExpression();
			this.state = 1661;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,244,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1650;
					this.multiplicativeOperator();
					this.state = 1654;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,243,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 1651;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 1656;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,243,this._ctx);
					}
					this.state = 1657;
					this.asExpression();
					}
					} 
				}
				this.state = 1663;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,244,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public asExpression(): AsExpressionContext {
		let _localctx: AsExpressionContext = new AsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, KotlinParser.RULE_asExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1664;
			this.prefixUnaryExpression();
			this.state = 1666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,245,this._ctx) ) {
			case 1:
				{
				this.state = 1665;
				this.asExpressionTail();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public asExpressionTail(): AsExpressionTailContext {
		let _localctx: AsExpressionTailContext = new AsExpressionTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, KotlinParser.RULE_asExpressionTail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1668;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1674;
			this.asOperator();
			this.state = 1678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1675;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1681;
			this.type();
			this.state = 1683;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,248,this._ctx) ) {
			case 1:
				{
				this.state = 1682;
				this.asExpressionTail();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefixUnaryExpression(): PrefixUnaryExpressionContext {
		let _localctx: PrefixUnaryExpressionContext = new PrefixUnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, KotlinParser.RULE_prefixUnaryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1699;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,251,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0)) {
					{
					{
					this.state = 1685;
					this.prefixUnaryOperator();
					}
					}
					this.state = 1690;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1691;
				this.postfixUnaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1695;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,250,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1692;
						this.annotations();
						}
						} 
					}
					this.state = 1697;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,250,this._ctx);
				}
				this.state = 1698;
				this.postfixUnaryExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public postfixUnaryExpression(): PostfixUnaryExpressionContext {
		let _localctx: PostfixUnaryExpressionContext = new PostfixUnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, KotlinParser.RULE_postfixUnaryExpression);
		try {
			let _alt: number;
			this.state = 1721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,254,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1701;
				this.assignableExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1702;
				this.callExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1703;
				this.labeledExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1704;
				this.dotQualifiedExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1705;
				this.assignableExpression();
				this.state = 1709;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,252,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1706;
						this.postfixUnaryOperator();
						}
						} 
					}
					this.state = 1711;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,252,this._ctx);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1712;
				this.match(KotlinParser.LPAREN);
				this.state = 1713;
				this.callableReference();
				this.state = 1714;
				this.match(KotlinParser.RPAREN);
				this.state = 1716; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1715;
						this.postfixUnaryOperator();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1718; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,253,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1720;
				this.callableReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public callExpression(): CallExpressionContext {
		let _localctx: CallExpressionContext = new CallExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, KotlinParser.RULE_callExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1723;
			this.assignableExpression();
			this.state = 1725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,255,this._ctx) ) {
			case 1:
				{
				this.state = 1724;
				this.typeArguments();
				}
				break;
			}
			this.state = 1728;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,256,this._ctx) ) {
			case 1:
				{
				this.state = 1727;
				this.valueArguments();
				}
				break;
			}
			this.state = 1733;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,257,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1730;
					this.annotatedLambda();
					}
					} 
				}
				this.state = 1735;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,257,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labeledExpression(): LabeledExpressionContext {
		let _localctx: LabeledExpressionContext = new LabeledExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, KotlinParser.RULE_labeledExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1736;
			this.labelDefinition();
			this.state = 1737;
			this.postfixUnaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public dotQualifiedExpression(): DotQualifiedExpressionContext {
		let _localctx: DotQualifiedExpressionContext = new DotQualifiedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, KotlinParser.RULE_dotQualifiedExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1739;
			this.assignableExpression();
			this.state = 1749; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1743;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1740;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1745;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1746;
					this.memberAccessOperator();
					this.state = 1747;
					this.postfixUnaryExpression();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1751; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,259,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignableExpression(): AssignableExpressionContext {
		let _localctx: AssignableExpressionContext = new AssignableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, KotlinParser.RULE_assignableExpression);
		try {
			this.state = 1755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,260,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1753;
				this.primaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1754;
				this.indexingExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexingExpression(): IndexingExpressionContext {
		let _localctx: IndexingExpressionContext = new IndexingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, KotlinParser.RULE_indexingExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1757;
			this.identifier();
			this.state = 1759; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1758;
					this.arrayAccess();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1761; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,261,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public callSuffix(): CallSuffixContext {
		let _localctx: CallSuffixContext = new CallSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, KotlinParser.RULE_callSuffix);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,265,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===KotlinParser.LANGLE) {
					{
					this.state = 1763;
					this.typeArguments();
					}
				}

				this.state = 1766;
				this.valueArguments();
				this.state = 1770;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,263,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1767;
						this.annotatedLambda();
						}
						} 
					}
					this.state = 1772;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,263,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1773;
				this.typeArguments();
				this.state = 1777;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,264,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1774;
						this.annotatedLambda();
						}
						} 
					}
					this.state = 1779;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,264,this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotatedLambda(): AnnotatedLambdaContext {
		let _localctx: AnnotatedLambdaContext = new AnnotatedLambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, KotlinParser.RULE_annotatedLambda);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1785;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
				{
				{
				this.state = 1782;
				this.unescapedAnnotation();
				}
				}
				this.state = 1787;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1789;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.LabelDefinition) {
				{
				this.state = 1788;
				this.match(KotlinParser.LabelDefinition);
				}
			}

			this.state = 1794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1791;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1797;
			this.functionLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrayAccess(): ArrayAccessContext {
		let _localctx: ArrayAccessContext = new ArrayAccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, KotlinParser.RULE_arrayAccess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1799;
			this.match(KotlinParser.LSQUARE);
			this.state = 1808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
				{
				this.state = 1800;
				this.expression();
				this.state = 1805;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.COMMA) {
					{
					{
					this.state = 1801;
					this.match(KotlinParser.COMMA);
					this.state = 1802;
					this.expression();
					}
					}
					this.state = 1807;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1810;
			this.match(KotlinParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public valueArguments(): ValueArgumentsContext {
		let _localctx: ValueArgumentsContext = new ValueArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, KotlinParser.RULE_valueArguments);
		let _la: number;
		try {
			this.state = 1828;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,273,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1812;
				this.match(KotlinParser.LPAREN);
				this.state = 1814;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.MULT) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
					{
					this.state = 1813;
					this.valueArgument();
					}
				}

				this.state = 1816;
				this.match(KotlinParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1817;
				this.match(KotlinParser.LPAREN);
				this.state = 1818;
				this.valueArgument();
				this.state = 1823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.COMMA) {
					{
					{
					this.state = 1819;
					this.match(KotlinParser.COMMA);
					this.state = 1820;
					this.valueArgument();
					}
					}
					this.state = 1825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1826;
				this.match(KotlinParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, KotlinParser.RULE_typeArguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			this.match(KotlinParser.LANGLE);
			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1831;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1836;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1837;
			this.typeProjection();
			this.state = 1848;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,276,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1841;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 1838;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 1843;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1844;
					this.match(KotlinParser.COMMA);
					this.state = 1845;
					this.typeProjection();
					}
					} 
				}
				this.state = 1850;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,276,this._ctx);
			}
			this.state = 1854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 1851;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 1856;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1857;
			this.match(KotlinParser.RANGLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeProjection(): TypeProjectionContext {
		let _localctx: TypeProjectionContext = new TypeProjectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, KotlinParser.RULE_typeProjection);
		try {
			this.state = 1864;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.LPAREN:
			case KotlinParser.AT:
			case KotlinParser.FILE:
			case KotlinParser.IMPORT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.WHERE:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.IN:
			case KotlinParser.OUT:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.Identifier:
			case KotlinParser.LabelReference:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1860;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,278,this._ctx) ) {
				case 1:
					{
					this.state = 1859;
					this.typeProjectionModifierList();
					}
					break;
				}
				this.state = 1862;
				this.type();
				}
				break;
			case KotlinParser.MULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1863;
				this.match(KotlinParser.MULT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeProjectionModifierList(): TypeProjectionModifierListContext {
		let _localctx: TypeProjectionModifierListContext = new TypeProjectionModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, KotlinParser.RULE_typeProjectionModifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1867; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1866;
					this.varianceAnnotation();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1869; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,280,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public valueArgument(): ValueArgumentContext {
		let _localctx: ValueArgumentContext = new ValueArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, KotlinParser.RULE_valueArgument);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1885;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,283,this._ctx) ) {
			case 1:
				{
				this.state = 1871;
				this.simpleIdentifier();
				this.state = 1875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1872;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1877;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1878;
				this.match(KotlinParser.ASSIGNMENT);
				this.state = 1882;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,282,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1879;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 1884;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,282,this._ctx);
				}
				}
				break;
			}
			this.state = 1888;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.MULT) {
				{
				this.state = 1887;
				this.match(KotlinParser.MULT);
				}
			}

			this.state = 1893;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,285,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 1890;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 1895;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,285,this._ctx);
			}
			this.state = 1896;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, KotlinParser.RULE_primaryExpression);
		try {
			this.state = 1911;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1898;
				this.parenthesizedExpression();
				}
				break;
			case KotlinParser.RealLiteral:
			case KotlinParser.LongLiteral:
			case KotlinParser.IntegerLiteral:
			case KotlinParser.HexLiteral:
			case KotlinParser.BinLiteral:
			case KotlinParser.BooleanLiteral:
			case KotlinParser.NullLiteral:
			case KotlinParser.CharacterLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1899;
				this.literalConstant();
				}
				break;
			case KotlinParser.QUOTE_OPEN:
			case KotlinParser.TRIPLE_QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1900;
				this.stringLiteral();
				}
				break;
			case KotlinParser.IMPORT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.WHERE:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.OUT:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1901;
				this.simpleIdentifier();
				}
				break;
			case KotlinParser.LCURL:
			case KotlinParser.AT:
			case KotlinParser.FILE:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
			case KotlinParser.LabelReference:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1902;
				this.functionLiteral();
				}
				break;
			case KotlinParser.OBJECT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1903;
				this.objectLiteral();
				}
				break;
			case KotlinParser.LSQUARE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1904;
				this.collectionLiteral();
				}
				break;
			case KotlinParser.THIS:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1905;
				this.thisExpression();
				}
				break;
			case KotlinParser.SUPER:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1906;
				this.superExpression();
				}
				break;
			case KotlinParser.IF:
			case KotlinParser.WHEN:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1907;
				this.conditionalExpression();
				}
				break;
			case KotlinParser.TRY:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1908;
				this.tryExpression();
				}
				break;
			case KotlinParser.FOR:
			case KotlinParser.DO:
			case KotlinParser.WHILE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1909;
				this.loopExpression();
				}
				break;
			case KotlinParser.RETURN_AT:
			case KotlinParser.CONTINUE_AT:
			case KotlinParser.BREAK_AT:
			case KotlinParser.THROW:
			case KotlinParser.RETURN:
			case KotlinParser.CONTINUE:
			case KotlinParser.BREAK:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1910;
				this.jumpExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		let _localctx: ParenthesizedExpressionContext = new ParenthesizedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, KotlinParser.RULE_parenthesizedExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1913;
			this.match(KotlinParser.LPAREN);
			this.state = 1914;
			this.expression();
			this.state = 1915;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literalConstant(): LiteralConstantContext {
		let _localctx: LiteralConstantContext = new LiteralConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, KotlinParser.RULE_literalConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1917;
			_la = this._input.LA(1);
			if ( !(((((_la - 131)) & ~0x1F) === 0 && ((1 << (_la - 131)) & ((1 << (KotlinParser.RealLiteral - 131)) | (1 << (KotlinParser.LongLiteral - 131)) | (1 << (KotlinParser.IntegerLiteral - 131)) | (1 << (KotlinParser.HexLiteral - 131)) | (1 << (KotlinParser.BinLiteral - 131)) | (1 << (KotlinParser.BooleanLiteral - 131)) | (1 << (KotlinParser.NullLiteral - 131)) | (1 << (KotlinParser.CharacterLiteral - 131)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, KotlinParser.RULE_stringLiteral);
		try {
			this.state = 1921;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1919;
				this.lineStringLiteral();
				}
				break;
			case KotlinParser.TRIPLE_QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1920;
				this.multiLineStringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lineStringLiteral(): LineStringLiteralContext {
		let _localctx: LineStringLiteralContext = new LineStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, KotlinParser.RULE_lineStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1923;
			this.match(KotlinParser.QUOTE_OPEN);
			this.state = 1928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & ((1 << (KotlinParser.LineStrRef - 156)) | (1 << (KotlinParser.LineStrText - 156)) | (1 << (KotlinParser.LineStrEscapedChar - 156)) | (1 << (KotlinParser.LineStrExprStart - 156)))) !== 0)) {
				{
				this.state = 1926;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case KotlinParser.LineStrRef:
				case KotlinParser.LineStrText:
				case KotlinParser.LineStrEscapedChar:
					{
					this.state = 1924;
					this.lineStringContent();
					}
					break;
				case KotlinParser.LineStrExprStart:
					{
					this.state = 1925;
					this.lineStringExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1930;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1931;
			this.match(KotlinParser.QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiLineStringLiteral(): MultiLineStringLiteralContext {
		let _localctx: MultiLineStringLiteralContext = new MultiLineStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, KotlinParser.RULE_multiLineStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1933;
			this.match(KotlinParser.TRIPLE_QUOTE_OPEN);
			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.QUOTE_OPEN || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (KotlinParser.MultiLineStringQuote - 161)) | (1 << (KotlinParser.MultiLineStrRef - 161)) | (1 << (KotlinParser.MultiLineStrText - 161)) | (1 << (KotlinParser.MultiLineStrEscapedChar - 161)) | (1 << (KotlinParser.MultiLineStrExprStart - 161)))) !== 0)) {
				{
				this.state = 1938;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case KotlinParser.MultiLineStrRef:
				case KotlinParser.MultiLineStrText:
				case KotlinParser.MultiLineStrEscapedChar:
					{
					this.state = 1934;
					this.multiLineStringContent();
					}
					break;
				case KotlinParser.MultiLineStrExprStart:
					{
					this.state = 1935;
					this.multiLineStringExpression();
					}
					break;
				case KotlinParser.QUOTE_OPEN:
					{
					this.state = 1936;
					this.lineStringLiteral();
					}
					break;
				case KotlinParser.MultiLineStringQuote:
					{
					this.state = 1937;
					this.match(KotlinParser.MultiLineStringQuote);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1943;
			this.match(KotlinParser.TRIPLE_QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lineStringContent(): LineStringContentContext {
		let _localctx: LineStringContentContext = new LineStringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, KotlinParser.RULE_lineStringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1945;
			_la = this._input.LA(1);
			if ( !(((((_la - 156)) & ~0x1F) === 0 && ((1 << (_la - 156)) & ((1 << (KotlinParser.LineStrRef - 156)) | (1 << (KotlinParser.LineStrText - 156)) | (1 << (KotlinParser.LineStrEscapedChar - 156)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lineStringExpression(): LineStringExpressionContext {
		let _localctx: LineStringExpressionContext = new LineStringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, KotlinParser.RULE_lineStringExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1947;
			this.match(KotlinParser.LineStrExprStart);
			this.state = 1948;
			this.expression();
			this.state = 1949;
			this.match(KotlinParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiLineStringContent(): MultiLineStringContentContext {
		let _localctx: MultiLineStringContentContext = new MultiLineStringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, KotlinParser.RULE_multiLineStringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1951;
			_la = this._input.LA(1);
			if ( !(((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (KotlinParser.MultiLineStrRef - 162)) | (1 << (KotlinParser.MultiLineStrText - 162)) | (1 << (KotlinParser.MultiLineStrEscapedChar - 162)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiLineStringExpression(): MultiLineStringExpressionContext {
		let _localctx: MultiLineStringExpressionContext = new MultiLineStringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, KotlinParser.RULE_multiLineStringExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1953;
			this.match(KotlinParser.MultiLineStrExprStart);
			this.state = 1954;
			this.expression();
			this.state = 1955;
			this.match(KotlinParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionLiteral(): FunctionLiteralContext {
		let _localctx: FunctionLiteralContext = new FunctionLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, KotlinParser.RULE_functionLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la===KotlinParser.LabelReference) {
				{
				{
				this.state = 1957;
				this.annotations();
				}
				}
				this.state = 1962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2009;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,299,this._ctx) ) {
			case 1:
				{
				this.state = 1963;
				this.match(KotlinParser.LCURL);
				this.state = 1967;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,293,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1964;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 1969;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,293,this._ctx);
				}
				this.state = 1970;
				this.statements();
				this.state = 1974;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1971;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1976;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1977;
				this.match(KotlinParser.RCURL);
				}
				break;

			case 2:
				{
				this.state = 1979;
				this.match(KotlinParser.LCURL);
				this.state = 1983;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,295,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1980;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 1985;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,295,this._ctx);
				}
				this.state = 1986;
				this.lambdaParameters();
				this.state = 1990;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 1987;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 1992;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1993;
				this.match(KotlinParser.ARROW);
				this.state = 1997;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,297,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1994;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 1999;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,297,this._ctx);
				}
				this.state = 2000;
				this.statements();
				this.state = 2004;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2001;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2006;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2007;
				this.match(KotlinParser.RCURL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaParameters(): LambdaParametersContext {
		let _localctx: LambdaParametersContext = new LambdaParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, KotlinParser.RULE_lambdaParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.LPAREN || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
				{
				this.state = 2011;
				this.lambdaParameter();
				}
			}

			this.state = 2030;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,303,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2017;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2014;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2019;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2020;
					this.match(KotlinParser.COMMA);
					this.state = 2024;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2021;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2026;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2027;
					this.lambdaParameter();
					}
					} 
				}
				this.state = 2032;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,303,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambdaParameter(): LambdaParameterContext {
		let _localctx: LambdaParameterContext = new LambdaParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, KotlinParser.RULE_lambdaParameter);
		let _la: number;
		try {
			this.state = 2051;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.IMPORT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.WHERE:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.OUT:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2033;
				this.variableDeclaration();
				}
				break;
			case KotlinParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2034;
				this.multiVariableDeclaration();
				this.state = 2049;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,306,this._ctx) ) {
				case 1:
					{
					this.state = 2038;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2035;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2040;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2041;
					this.match(KotlinParser.COLON);
					this.state = 2045;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2042;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2047;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2048;
					this.type();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, KotlinParser.RULE_objectLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2053;
			this.match(KotlinParser.OBJECT);
			this.state = 2068;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,310,this._ctx) ) {
			case 1:
				{
				this.state = 2057;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2054;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2059;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2060;
				this.match(KotlinParser.COLON);
				this.state = 2064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2061;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2066;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2067;
				this.delegationSpecifiers();
				}
				break;
			}
			this.state = 2073;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2070;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2076;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public collectionLiteral(): CollectionLiteralContext {
		let _localctx: CollectionLiteralContext = new CollectionLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, KotlinParser.RULE_collectionLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2078;
			this.match(KotlinParser.LSQUARE);
			this.state = 2080;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (KotlinParser.COLONCOLON - 36)) | (1 << (KotlinParser.Q_COLONCOLON - 36)) | (1 << (KotlinParser.AT - 36)) | (1 << (KotlinParser.RETURN_AT - 36)) | (1 << (KotlinParser.CONTINUE_AT - 36)) | (1 << (KotlinParser.BREAK_AT - 36)) | (1 << (KotlinParser.FILE - 36)) | (1 << (KotlinParser.IMPORT - 36)) | (1 << (KotlinParser.OBJECT - 36)) | (1 << (KotlinParser.CONSTRUCTOR - 36)) | (1 << (KotlinParser.BY - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (KotlinParser.COMPANION - 68)) | (1 << (KotlinParser.INIT - 68)) | (1 << (KotlinParser.THIS - 68)) | (1 << (KotlinParser.SUPER - 68)) | (1 << (KotlinParser.WHERE - 68)) | (1 << (KotlinParser.IF - 68)) | (1 << (KotlinParser.WHEN - 68)) | (1 << (KotlinParser.TRY - 68)) | (1 << (KotlinParser.CATCH - 68)) | (1 << (KotlinParser.FINALLY - 68)) | (1 << (KotlinParser.FOR - 68)) | (1 << (KotlinParser.DO - 68)) | (1 << (KotlinParser.WHILE - 68)) | (1 << (KotlinParser.THROW - 68)) | (1 << (KotlinParser.RETURN - 68)) | (1 << (KotlinParser.CONTINUE - 68)) | (1 << (KotlinParser.BREAK - 68)) | (1 << (KotlinParser.OUT - 68)) | (1 << (KotlinParser.FIELD - 68)) | (1 << (KotlinParser.PROPERTY - 68)) | (1 << (KotlinParser.GET - 68)) | (1 << (KotlinParser.SET - 68)) | (1 << (KotlinParser.GETTER - 68)) | (1 << (KotlinParser.SETTER - 68)) | (1 << (KotlinParser.RECEIVER - 68)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (KotlinParser.PARAM - 100)) | (1 << (KotlinParser.SETPARAM - 100)) | (1 << (KotlinParser.DELEGATE - 100)) | (1 << (KotlinParser.DYNAMIC - 100)) | (1 << (KotlinParser.PUBLIC - 100)) | (1 << (KotlinParser.PRIVATE - 100)) | (1 << (KotlinParser.PROTECTED - 100)) | (1 << (KotlinParser.INTERNAL - 100)) | (1 << (KotlinParser.ENUM - 100)) | (1 << (KotlinParser.SEALED - 100)) | (1 << (KotlinParser.ANNOTATION - 100)) | (1 << (KotlinParser.DATA - 100)) | (1 << (KotlinParser.INNER - 100)) | (1 << (KotlinParser.TAILREC - 100)) | (1 << (KotlinParser.OPERATOR - 100)) | (1 << (KotlinParser.INLINE - 100)) | (1 << (KotlinParser.INFIX - 100)) | (1 << (KotlinParser.EXTERNAL - 100)) | (1 << (KotlinParser.SUSPEND - 100)) | (1 << (KotlinParser.OVERRIDE - 100)) | (1 << (KotlinParser.ABSTRACT - 100)) | (1 << (KotlinParser.FINAL - 100)) | (1 << (KotlinParser.OPEN - 100)) | (1 << (KotlinParser.CONST - 100)) | (1 << (KotlinParser.LATEINIT - 100)) | (1 << (KotlinParser.VARARG - 100)) | (1 << (KotlinParser.NOINLINE - 100)) | (1 << (KotlinParser.CROSSINLINE - 100)) | (1 << (KotlinParser.REIFIED - 100)) | (1 << (KotlinParser.QUOTE_OPEN - 100)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 100)) | (1 << (KotlinParser.RealLiteral - 100)))) !== 0) || ((((_la - 134)) & ~0x1F) === 0 && ((1 << (_la - 134)) & ((1 << (KotlinParser.LongLiteral - 134)) | (1 << (KotlinParser.IntegerLiteral - 134)) | (1 << (KotlinParser.HexLiteral - 134)) | (1 << (KotlinParser.BinLiteral - 134)) | (1 << (KotlinParser.BooleanLiteral - 134)) | (1 << (KotlinParser.NullLiteral - 134)) | (1 << (KotlinParser.Identifier - 134)) | (1 << (KotlinParser.LabelReference - 134)) | (1 << (KotlinParser.LabelDefinition - 134)) | (1 << (KotlinParser.CharacterLiteral - 134)))) !== 0)) {
				{
				this.state = 2079;
				this.expression();
				}
			}

			this.state = 2086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.COMMA) {
				{
				{
				this.state = 2082;
				this.match(KotlinParser.COMMA);
				this.state = 2083;
				this.expression();
				}
				}
				this.state = 2088;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2089;
			this.match(KotlinParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public thisExpression(): ThisExpressionContext {
		let _localctx: ThisExpressionContext = new ThisExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, KotlinParser.RULE_thisExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2091;
			this.match(KotlinParser.THIS);
			this.state = 2093;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,314,this._ctx) ) {
			case 1:
				{
				this.state = 2092;
				this.match(KotlinParser.LabelReference);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public superExpression(): SuperExpressionContext {
		let _localctx: SuperExpressionContext = new SuperExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, KotlinParser.RULE_superExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2095;
			this.match(KotlinParser.SUPER);
			this.state = 2112;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,317,this._ctx) ) {
			case 1:
				{
				this.state = 2096;
				this.match(KotlinParser.LANGLE);
				this.state = 2100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2097;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2103;
				this.type();
				this.state = 2107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2104;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2110;
				this.match(KotlinParser.RANGLE);
				}
				break;
			}
			this.state = 2115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,318,this._ctx) ) {
			case 1:
				{
				this.state = 2114;
				this.match(KotlinParser.LabelReference);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, KotlinParser.RULE_conditionalExpression);
		try {
			this.state = 2119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2117;
				this.ifExpression();
				}
				break;
			case KotlinParser.WHEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2118;
				this.whenExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public ifExpression(): IfExpressionContext {
		let _localctx: IfExpressionContext = new IfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, KotlinParser.RULE_ifExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2121;
			this.match(KotlinParser.IF);
			this.state = 2125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2122;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2128;
			this.match(KotlinParser.LPAREN);
			this.state = 2129;
			this.expression();
			this.state = 2130;
			this.match(KotlinParser.RPAREN);
			this.state = 2134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,321,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2131;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,321,this._ctx);
			}
			this.state = 2138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,322,this._ctx) ) {
			case 1:
				{
				this.state = 2137;
				this.controlStructureBody();
				}
				break;
			}
			this.state = 2141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,323,this._ctx) ) {
			case 1:
				{
				this.state = 2140;
				this.match(KotlinParser.SEMICOLON);
				}
				break;
			}
			this.state = 2159;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,327,this._ctx) ) {
			case 1:
				{
				this.state = 2146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2143;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2149;
				this.match(KotlinParser.ELSE);
				this.state = 2153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,325,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 2150;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 2155;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,325,this._ctx);
				}
				this.state = 2157;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,326,this._ctx) ) {
				case 1:
					{
					this.state = 2156;
					this.controlStructureBody();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public controlStructureBody(): ControlStructureBodyContext {
		let _localctx: ControlStructureBodyContext = new ControlStructureBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, KotlinParser.RULE_controlStructureBody);
		try {
			this.state = 2163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,328,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2161;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2162;
				this.expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whenExpression(): WhenExpressionContext {
		let _localctx: WhenExpressionContext = new WhenExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, KotlinParser.RULE_whenExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2165;
			this.match(KotlinParser.WHEN);
			this.state = 2169;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,329,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2166;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,329,this._ctx);
			}
			this.state = 2176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.LPAREN) {
				{
				this.state = 2172;
				this.match(KotlinParser.LPAREN);
				this.state = 2173;
				this.expression();
				this.state = 2174;
				this.match(KotlinParser.RPAREN);
				}
			}

			this.state = 2181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2178;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2184;
			this.match(KotlinParser.LCURL);
			this.state = 2188;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,332,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2185;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2190;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,332,this._ctx);
			}
			this.state = 2200;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,334,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2191;
					this.whenEntry();
					this.state = 2195;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,333,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 2192;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 2197;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,333,this._ctx);
					}
					}
					} 
				}
				this.state = 2202;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,334,this._ctx);
			}
			this.state = 2206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2203;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2209;
			this.match(KotlinParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whenEntry(): WhenEntryContext {
		let _localctx: WhenEntryContext = new WhenEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, KotlinParser.RULE_whenEntry);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2263;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.NL:
			case KotlinParser.LPAREN:
			case KotlinParser.LSQUARE:
			case KotlinParser.LCURL:
			case KotlinParser.ADD:
			case KotlinParser.SUB:
			case KotlinParser.INCR:
			case KotlinParser.DECR:
			case KotlinParser.EXCL:
			case KotlinParser.COLONCOLON:
			case KotlinParser.Q_COLONCOLON:
			case KotlinParser.AT:
			case KotlinParser.RETURN_AT:
			case KotlinParser.CONTINUE_AT:
			case KotlinParser.BREAK_AT:
			case KotlinParser.FILE:
			case KotlinParser.IMPORT:
			case KotlinParser.OBJECT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.THIS:
			case KotlinParser.SUPER:
			case KotlinParser.WHERE:
			case KotlinParser.IF:
			case KotlinParser.WHEN:
			case KotlinParser.TRY:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.FOR:
			case KotlinParser.DO:
			case KotlinParser.WHILE:
			case KotlinParser.THROW:
			case KotlinParser.RETURN:
			case KotlinParser.CONTINUE:
			case KotlinParser.BREAK:
			case KotlinParser.IS:
			case KotlinParser.IN:
			case KotlinParser.NOT_IS:
			case KotlinParser.NOT_IN:
			case KotlinParser.OUT:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.QUOTE_OPEN:
			case KotlinParser.TRIPLE_QUOTE_OPEN:
			case KotlinParser.RealLiteral:
			case KotlinParser.LongLiteral:
			case KotlinParser.IntegerLiteral:
			case KotlinParser.HexLiteral:
			case KotlinParser.BinLiteral:
			case KotlinParser.BooleanLiteral:
			case KotlinParser.NullLiteral:
			case KotlinParser.Identifier:
			case KotlinParser.LabelReference:
			case KotlinParser.LabelDefinition:
			case KotlinParser.CharacterLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2211;
				this.whenCondition();
				this.state = 2228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,338,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 2215;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===KotlinParser.NL) {
							{
							{
							this.state = 2212;
							this.match(KotlinParser.NL);
							}
							}
							this.state = 2217;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 2218;
						this.match(KotlinParser.COMMA);
						this.state = 2222;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,337,this._ctx);
						while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
							if ( _alt===1 ) {
								{
								{
								this.state = 2219;
								this.match(KotlinParser.NL);
								}
								} 
							}
							this.state = 2224;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input,337,this._ctx);
						}
						this.state = 2225;
						this.whenCondition();
						}
						} 
					}
					this.state = 2230;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,338,this._ctx);
				}
				this.state = 2234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2231;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2237;
				this.match(KotlinParser.ARROW);
				this.state = 2241;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,340,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 2238;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 2243;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,340,this._ctx);
				}
				this.state = 2244;
				this.controlStructureBody();
				this.state = 2246;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,341,this._ctx) ) {
				case 1:
					{
					this.state = 2245;
					this.semi();
					}
					break;
				}
				}
				break;
			case KotlinParser.ELSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2248;
				this.match(KotlinParser.ELSE);
				this.state = 2252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2249;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2254;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2255;
				this.match(KotlinParser.ARROW);
				this.state = 2259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,343,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 2256;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 2261;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,343,this._ctx);
				}
				this.state = 2262;
				this.controlStructureBody();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whenCondition(): WhenConditionContext {
		let _localctx: WhenConditionContext = new WhenConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, KotlinParser.RULE_whenCondition);
		try {
			this.state = 2268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.NL:
			case KotlinParser.LPAREN:
			case KotlinParser.LSQUARE:
			case KotlinParser.LCURL:
			case KotlinParser.ADD:
			case KotlinParser.SUB:
			case KotlinParser.INCR:
			case KotlinParser.DECR:
			case KotlinParser.EXCL:
			case KotlinParser.COLONCOLON:
			case KotlinParser.Q_COLONCOLON:
			case KotlinParser.AT:
			case KotlinParser.RETURN_AT:
			case KotlinParser.CONTINUE_AT:
			case KotlinParser.BREAK_AT:
			case KotlinParser.FILE:
			case KotlinParser.IMPORT:
			case KotlinParser.OBJECT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.THIS:
			case KotlinParser.SUPER:
			case KotlinParser.WHERE:
			case KotlinParser.IF:
			case KotlinParser.WHEN:
			case KotlinParser.TRY:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.FOR:
			case KotlinParser.DO:
			case KotlinParser.WHILE:
			case KotlinParser.THROW:
			case KotlinParser.RETURN:
			case KotlinParser.CONTINUE:
			case KotlinParser.BREAK:
			case KotlinParser.OUT:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.QUOTE_OPEN:
			case KotlinParser.TRIPLE_QUOTE_OPEN:
			case KotlinParser.RealLiteral:
			case KotlinParser.LongLiteral:
			case KotlinParser.IntegerLiteral:
			case KotlinParser.HexLiteral:
			case KotlinParser.BinLiteral:
			case KotlinParser.BooleanLiteral:
			case KotlinParser.NullLiteral:
			case KotlinParser.Identifier:
			case KotlinParser.LabelReference:
			case KotlinParser.LabelDefinition:
			case KotlinParser.CharacterLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2265;
				this.expression();
				}
				break;
			case KotlinParser.IN:
			case KotlinParser.NOT_IN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2266;
				this.rangeTest();
				}
				break;
			case KotlinParser.IS:
			case KotlinParser.NOT_IS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2267;
				this.typeTest();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public rangeTest(): RangeTestContext {
		let _localctx: RangeTestContext = new RangeTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, KotlinParser.RULE_rangeTest);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2270;
			this.inOperator();
			this.state = 2274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,346,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2271;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2276;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,346,this._ctx);
			}
			this.state = 2277;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeTest(): TypeTestContext {
		let _localctx: TypeTestContext = new TypeTestContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, KotlinParser.RULE_typeTest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2279;
			this.isOperator();
			this.state = 2283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2280;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2286;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tryExpression(): TryExpressionContext {
		let _localctx: TryExpressionContext = new TryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, KotlinParser.RULE_tryExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2288;
			this.match(KotlinParser.TRY);
			this.state = 2292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2289;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2295;
			this.block();
			this.state = 2305;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,350,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2299;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2296;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2301;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2302;
					this.catchBlock();
					}
					} 
				}
				this.state = 2307;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,350,this._ctx);
			}
			this.state = 2315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,352,this._ctx) ) {
			case 1:
				{
				this.state = 2311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2308;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2314;
				this.finallyBlock();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public catchBlock(): CatchBlockContext {
		let _localctx: CatchBlockContext = new CatchBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, KotlinParser.RULE_catchBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2317;
			this.match(KotlinParser.CATCH);
			this.state = 2321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2318;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2324;
			this.match(KotlinParser.LPAREN);
			this.state = 2328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la===KotlinParser.LabelReference) {
				{
				{
				this.state = 2325;
				this.annotations();
				}
				}
				this.state = 2330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2331;
			this.simpleIdentifier();
			this.state = 2332;
			this.match(KotlinParser.COLON);
			this.state = 2333;
			this.userType();
			this.state = 2334;
			this.match(KotlinParser.RPAREN);
			this.state = 2338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2335;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2341;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, KotlinParser.RULE_finallyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2343;
			this.match(KotlinParser.FINALLY);
			this.state = 2347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2344;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2350;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public loopExpression(): LoopExpressionContext {
		let _localctx: LoopExpressionContext = new LoopExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, KotlinParser.RULE_loopExpression);
		try {
			this.state = 2355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.FOR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2352;
				this.forExpression();
				}
				break;
			case KotlinParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2353;
				this.whileExpression();
				}
				break;
			case KotlinParser.DO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2354;
				this.doWhileExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public forExpression(): ForExpressionContext {
		let _localctx: ForExpressionContext = new ForExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, KotlinParser.RULE_forExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2357;
			this.match(KotlinParser.FOR);
			this.state = 2361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2358;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2364;
			this.match(KotlinParser.LPAREN);
			this.state = 2368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.AT || _la===KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0) || _la===KotlinParser.LabelReference) {
				{
				{
				this.state = 2365;
				this.annotations();
				}
				}
				this.state = 2370;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.IMPORT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.WHERE:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.OUT:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.Identifier:
				{
				this.state = 2371;
				this.variableDeclaration();
				}
				break;
			case KotlinParser.LPAREN:
				{
				this.state = 2372;
				this.multiVariableDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2375;
			this.match(KotlinParser.IN);
			this.state = 2376;
			this.expression();
			this.state = 2377;
			this.match(KotlinParser.RPAREN);
			this.state = 2381;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,361,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2378;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2383;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,361,this._ctx);
			}
			this.state = 2385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,362,this._ctx) ) {
			case 1:
				{
				this.state = 2384;
				this.controlStructureBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public whileExpression(): WhileExpressionContext {
		let _localctx: WhileExpressionContext = new WhileExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, KotlinParser.RULE_whileExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2387;
			this.match(KotlinParser.WHILE);
			this.state = 2391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2388;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2394;
			this.match(KotlinParser.LPAREN);
			this.state = 2395;
			this.expression();
			this.state = 2396;
			this.match(KotlinParser.RPAREN);
			this.state = 2400;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,364,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2397;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2402;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,364,this._ctx);
			}
			this.state = 2404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,365,this._ctx) ) {
			case 1:
				{
				this.state = 2403;
				this.controlStructureBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public doWhileExpression(): DoWhileExpressionContext {
		let _localctx: DoWhileExpressionContext = new DoWhileExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, KotlinParser.RULE_doWhileExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2406;
			this.match(KotlinParser.DO);
			this.state = 2410;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,366,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2407;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2412;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,366,this._ctx);
			}
			this.state = 2414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,367,this._ctx) ) {
			case 1:
				{
				this.state = 2413;
				this.controlStructureBody();
				}
				break;
			}
			this.state = 2419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2416;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2422;
			this.match(KotlinParser.WHILE);
			this.state = 2426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2423;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2429;
			this.match(KotlinParser.LPAREN);
			this.state = 2430;
			this.expression();
			this.state = 2431;
			this.match(KotlinParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public jumpExpression(): JumpExpressionContext {
		let _localctx: JumpExpressionContext = new JumpExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, KotlinParser.RULE_jumpExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.THROW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2433;
				this.match(KotlinParser.THROW);
				this.state = 2437;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,370,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 2434;
						this.match(KotlinParser.NL);
						}
						} 
					}
					this.state = 2439;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,370,this._ctx);
				}
				this.state = 2440;
				this.expression();
				}
				break;
			case KotlinParser.RETURN_AT:
			case KotlinParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2441;
				_la = this._input.LA(1);
				if ( !(_la===KotlinParser.RETURN_AT || _la===KotlinParser.RETURN) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2443;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,371,this._ctx) ) {
				case 1:
					{
					this.state = 2442;
					this.expression();
					}
					break;
				}
				}
				break;
			case KotlinParser.CONTINUE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2445;
				this.match(KotlinParser.CONTINUE);
				}
				break;
			case KotlinParser.CONTINUE_AT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2446;
				this.match(KotlinParser.CONTINUE_AT);
				}
				break;
			case KotlinParser.BREAK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2447;
				this.match(KotlinParser.BREAK);
				}
				break;
			case KotlinParser.BREAK_AT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2448;
				this.match(KotlinParser.BREAK_AT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public callableReference(): CallableReferenceContext {
		let _localctx: CallableReferenceContext = new CallableReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, KotlinParser.RULE_callableReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) {
				{
				this.state = 2451;
				this.userType();
				this.state = 2461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.QUEST) {
					{
					{
					this.state = 2452;
					this.match(KotlinParser.QUEST);
					this.state = 2456;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,373,this._ctx);
					while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
						if ( _alt===1 ) {
							{
							{
							this.state = 2453;
							this.match(KotlinParser.NL);
							}
							} 
						}
						this.state = 2458;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input,373,this._ctx);
					}
					}
					}
					this.state = 2463;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 2469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2466;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2471;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2472;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.COLONCOLON || _la===KotlinParser.Q_COLONCOLON) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===KotlinParser.NL) {
				{
				{
				this.state = 2473;
				this.match(KotlinParser.NL);
				}
				}
				this.state = 2478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.IMPORT:
			case KotlinParser.CONSTRUCTOR:
			case KotlinParser.BY:
			case KotlinParser.COMPANION:
			case KotlinParser.INIT:
			case KotlinParser.WHERE:
			case KotlinParser.CATCH:
			case KotlinParser.FINALLY:
			case KotlinParser.OUT:
			case KotlinParser.GETTER:
			case KotlinParser.SETTER:
			case KotlinParser.DYNAMIC:
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
			case KotlinParser.OVERRIDE:
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
			case KotlinParser.CONST:
			case KotlinParser.LATEINIT:
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
			case KotlinParser.REIFIED:
			case KotlinParser.Identifier:
				{
				this.state = 2479;
				this.identifier();
				}
				break;
			case KotlinParser.CLASS:
				{
				this.state = 2480;
				this.match(KotlinParser.CLASS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, KotlinParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2483;
			_la = this._input.LA(1);
			if ( !(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (KotlinParser.ASSIGNMENT - 27)) | (1 << (KotlinParser.ADD_ASSIGNMENT - 27)) | (1 << (KotlinParser.SUB_ASSIGNMENT - 27)) | (1 << (KotlinParser.MULT_ASSIGNMENT - 27)) | (1 << (KotlinParser.DIV_ASSIGNMENT - 27)) | (1 << (KotlinParser.MOD_ASSIGNMENT - 27)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public equalityOperator(): EqualityOperatorContext {
		let _localctx: EqualityOperatorContext = new EqualityOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, KotlinParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2485;
			_la = this._input.LA(1);
			if ( !(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (KotlinParser.EXCL_EQ - 47)) | (1 << (KotlinParser.EXCL_EQEQ - 47)) | (1 << (KotlinParser.EQEQ - 47)) | (1 << (KotlinParser.EQEQEQ - 47)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, KotlinParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2487;
			_la = this._input.LA(1);
			if ( !(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (KotlinParser.LANGLE - 43)) | (1 << (KotlinParser.RANGLE - 43)) | (1 << (KotlinParser.LE - 43)) | (1 << (KotlinParser.GE - 43)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public inOperator(): InOperatorContext {
		let _localctx: InOperatorContext = new InOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, KotlinParser.RULE_inOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2489;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.IN || _la===KotlinParser.NOT_IN) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public isOperator(): IsOperatorContext {
		let _localctx: IsOperatorContext = new IsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, KotlinParser.RULE_isOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2491;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.IS || _la===KotlinParser.NOT_IS) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public additiveOperator(): AdditiveOperatorContext {
		let _localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, KotlinParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2493;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.ADD || _la===KotlinParser.SUB) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let _localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, KotlinParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2495;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.MULT) | (1 << KotlinParser.MOD) | (1 << KotlinParser.DIV))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public asOperator(): AsOperatorContext {
		let _localctx: AsOperatorContext = new AsOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, KotlinParser.RULE_asOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2497;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.COLON || _la===KotlinParser.AS_SAFE || _la===KotlinParser.AS) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefixUnaryOperator(): PrefixUnaryOperatorContext {
		let _localctx: PrefixUnaryOperatorContext = new PrefixUnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, KotlinParser.RULE_prefixUnaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2499;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public postfixUnaryOperator(): PostfixUnaryOperatorContext {
		let _localctx: PostfixUnaryOperatorContext = new PostfixUnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, KotlinParser.RULE_postfixUnaryOperator);
		try {
			this.state = 2505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.INCR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2501;
				this.match(KotlinParser.INCR);
				}
				break;
			case KotlinParser.DECR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2502;
				this.match(KotlinParser.DECR);
				}
				break;
			case KotlinParser.EXCL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2503;
				this.match(KotlinParser.EXCL);
				this.state = 2504;
				this.match(KotlinParser.EXCL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public memberAccessOperator(): MemberAccessOperatorContext {
		let _localctx: MemberAccessOperatorContext = new MemberAccessOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, KotlinParser.RULE_memberAccessOperator);
		try {
			this.state = 2510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.DOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2507;
				this.match(KotlinParser.DOT);
				}
				break;
			case KotlinParser.QUEST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2508;
				this.match(KotlinParser.QUEST);
				this.state = 2509;
				this.match(KotlinParser.DOT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public modifierList(): ModifierListContext {
		let _localctx: ModifierListContext = new ModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, KotlinParser.RULE_modifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2514; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 2514;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case KotlinParser.AT:
					case KotlinParser.FILE:
					case KotlinParser.FIELD:
					case KotlinParser.PROPERTY:
					case KotlinParser.GET:
					case KotlinParser.SET:
					case KotlinParser.RECEIVER:
					case KotlinParser.PARAM:
					case KotlinParser.SETPARAM:
					case KotlinParser.DELEGATE:
					case KotlinParser.LabelReference:
						{
						this.state = 2512;
						this.annotations();
						}
						break;
					case KotlinParser.IN:
					case KotlinParser.OUT:
					case KotlinParser.PUBLIC:
					case KotlinParser.PRIVATE:
					case KotlinParser.PROTECTED:
					case KotlinParser.INTERNAL:
					case KotlinParser.ENUM:
					case KotlinParser.SEALED:
					case KotlinParser.ANNOTATION:
					case KotlinParser.DATA:
					case KotlinParser.INNER:
					case KotlinParser.TAILREC:
					case KotlinParser.OPERATOR:
					case KotlinParser.INLINE:
					case KotlinParser.INFIX:
					case KotlinParser.EXTERNAL:
					case KotlinParser.SUSPEND:
					case KotlinParser.OVERRIDE:
					case KotlinParser.ABSTRACT:
					case KotlinParser.FINAL:
					case KotlinParser.OPEN:
					case KotlinParser.CONST:
					case KotlinParser.LATEINIT:
					case KotlinParser.VARARG:
					case KotlinParser.NOINLINE:
					case KotlinParser.CROSSINLINE:
					case KotlinParser.REIFIED:
						{
						this.state = 2513;
						this.modifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2516; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,382,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, KotlinParser.RULE_modifier);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2527;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.ENUM:
			case KotlinParser.SEALED:
			case KotlinParser.ANNOTATION:
			case KotlinParser.DATA:
			case KotlinParser.INNER:
				{
				this.state = 2518;
				this.classModifier();
				}
				break;
			case KotlinParser.OVERRIDE:
			case KotlinParser.LATEINIT:
				{
				this.state = 2519;
				this.memberModifier();
				}
				break;
			case KotlinParser.PUBLIC:
			case KotlinParser.PRIVATE:
			case KotlinParser.PROTECTED:
			case KotlinParser.INTERNAL:
				{
				this.state = 2520;
				this.visibilityModifier();
				}
				break;
			case KotlinParser.IN:
			case KotlinParser.OUT:
				{
				this.state = 2521;
				this.varianceAnnotation();
				}
				break;
			case KotlinParser.TAILREC:
			case KotlinParser.OPERATOR:
			case KotlinParser.INLINE:
			case KotlinParser.INFIX:
			case KotlinParser.EXTERNAL:
			case KotlinParser.SUSPEND:
				{
				this.state = 2522;
				this.functionModifier();
				}
				break;
			case KotlinParser.CONST:
				{
				this.state = 2523;
				this.propertyModifier();
				}
				break;
			case KotlinParser.ABSTRACT:
			case KotlinParser.FINAL:
			case KotlinParser.OPEN:
				{
				this.state = 2524;
				this.inheritanceModifier();
				}
				break;
			case KotlinParser.VARARG:
			case KotlinParser.NOINLINE:
			case KotlinParser.CROSSINLINE:
				{
				this.state = 2525;
				this.parameterModifier();
				}
				break;
			case KotlinParser.REIFIED:
				{
				this.state = 2526;
				this.typeParameterModifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2532;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,384,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2529;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2534;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,384,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public classModifier(): ClassModifierContext {
		let _localctx: ClassModifierContext = new ClassModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, KotlinParser.RULE_classModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2535;
			_la = this._input.LA(1);
			if ( !(((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (KotlinParser.ENUM - 108)) | (1 << (KotlinParser.SEALED - 108)) | (1 << (KotlinParser.ANNOTATION - 108)) | (1 << (KotlinParser.DATA - 108)) | (1 << (KotlinParser.INNER - 108)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public memberModifier(): MemberModifierContext {
		let _localctx: MemberModifierContext = new MemberModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, KotlinParser.RULE_memberModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2537;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.OVERRIDE || _la===KotlinParser.LATEINIT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public visibilityModifier(): VisibilityModifierContext {
		let _localctx: VisibilityModifierContext = new VisibilityModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, KotlinParser.RULE_visibilityModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2539;
			_la = this._input.LA(1);
			if ( !(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (KotlinParser.PUBLIC - 104)) | (1 << (KotlinParser.PRIVATE - 104)) | (1 << (KotlinParser.PROTECTED - 104)) | (1 << (KotlinParser.INTERNAL - 104)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varianceAnnotation(): VarianceAnnotationContext {
		let _localctx: VarianceAnnotationContext = new VarianceAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, KotlinParser.RULE_varianceAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2541;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.IN || _la===KotlinParser.OUT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionModifier(): FunctionModifierContext {
		let _localctx: FunctionModifierContext = new FunctionModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, KotlinParser.RULE_functionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2543;
			_la = this._input.LA(1);
			if ( !(((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & ((1 << (KotlinParser.TAILREC - 113)) | (1 << (KotlinParser.OPERATOR - 113)) | (1 << (KotlinParser.INLINE - 113)) | (1 << (KotlinParser.INFIX - 113)) | (1 << (KotlinParser.EXTERNAL - 113)) | (1 << (KotlinParser.SUSPEND - 113)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyModifier(): PropertyModifierContext {
		let _localctx: PropertyModifierContext = new PropertyModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, KotlinParser.RULE_propertyModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2545;
			this.match(KotlinParser.CONST);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public inheritanceModifier(): InheritanceModifierContext {
		let _localctx: InheritanceModifierContext = new InheritanceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, KotlinParser.RULE_inheritanceModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2547;
			_la = this._input.LA(1);
			if ( !(((((_la - 120)) & ~0x1F) === 0 && ((1 << (_la - 120)) & ((1 << (KotlinParser.ABSTRACT - 120)) | (1 << (KotlinParser.FINAL - 120)) | (1 << (KotlinParser.OPEN - 120)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parameterModifier(): ParameterModifierContext {
		let _localctx: ParameterModifierContext = new ParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, KotlinParser.RULE_parameterModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2549;
			_la = this._input.LA(1);
			if ( !(((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & ((1 << (KotlinParser.VARARG - 125)) | (1 << (KotlinParser.NOINLINE - 125)) | (1 << (KotlinParser.CROSSINLINE - 125)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeParameterModifier(): TypeParameterModifierContext {
		let _localctx: TypeParameterModifierContext = new TypeParameterModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, KotlinParser.RULE_typeParameterModifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2551;
			this.match(KotlinParser.REIFIED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public labelDefinition(): LabelDefinitionContext {
		let _localctx: LabelDefinitionContext = new LabelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, KotlinParser.RULE_labelDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2553;
			this.match(KotlinParser.LabelDefinition);
			this.state = 2557;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,385,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2554;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,385,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotations(): AnnotationsContext {
		let _localctx: AnnotationsContext = new AnnotationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, KotlinParser.RULE_annotations);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2562;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,386,this._ctx) ) {
			case 1:
				{
				this.state = 2560;
				this.annotation();
				}
				break;

			case 2:
				{
				this.state = 2561;
				this.annotationList();
				}
				break;
			}
			this.state = 2567;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,387,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2564;
					this.match(KotlinParser.NL);
					}
					} 
				}
				this.state = 2569;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,387,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, KotlinParser.RULE_annotation);
		let _la: number;
		try {
			this.state = 2605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.FILE:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2570;
				this.annotationUseSiteTarget();
				this.state = 2574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2571;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2576;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2577;
				this.match(KotlinParser.COLON);
				this.state = 2581;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===KotlinParser.NL) {
					{
					{
					this.state = 2578;
					this.match(KotlinParser.NL);
					}
					}
					this.state = 2583;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2584;
				this.unescapedAnnotation();
				}
				break;
			case KotlinParser.LabelReference:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2586;
				this.match(KotlinParser.LabelReference);
				this.state = 2594;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,391,this._ctx) ) {
				case 1:
					{
					this.state = 2590;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2587;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2592;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2593;
					this.typeArguments();
					}
					break;
				}
				this.state = 2603;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,393,this._ctx) ) {
				case 1:
					{
					this.state = 2599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2596;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2601;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2602;
					this.valueArguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotationList(): AnnotationListContext {
		let _localctx: AnnotationListContext = new AnnotationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, KotlinParser.RULE_annotationList);
		let _la: number;
		try {
			this.state = 2626;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case KotlinParser.FILE:
			case KotlinParser.FIELD:
			case KotlinParser.PROPERTY:
			case KotlinParser.GET:
			case KotlinParser.SET:
			case KotlinParser.RECEIVER:
			case KotlinParser.PARAM:
			case KotlinParser.SETPARAM:
			case KotlinParser.DELEGATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2607;
				this.annotationUseSiteTarget();
				this.state = 2608;
				this.match(KotlinParser.COLON);
				this.state = 2609;
				this.match(KotlinParser.LSQUARE);
				this.state = 2611; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2610;
					this.unescapedAnnotation();
					}
					}
					this.state = 2613; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0) );
				this.state = 2615;
				this.match(KotlinParser.RSQUARE);
				}
				break;
			case KotlinParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2617;
				this.match(KotlinParser.AT);
				this.state = 2618;
				this.match(KotlinParser.LSQUARE);
				this.state = 2620; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2619;
					this.unescapedAnnotation();
					}
					}
					this.state = 2622; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0) );
				this.state = 2624;
				this.match(KotlinParser.RSQUARE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotationUseSiteTarget(): AnnotationUseSiteTargetContext {
		let _localctx: AnnotationUseSiteTargetContext = new AnnotationUseSiteTargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, KotlinParser.RULE_annotationUseSiteTarget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2628;
			_la = this._input.LA(1);
			if ( !(_la===KotlinParser.FILE || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (KotlinParser.FIELD - 93)) | (1 << (KotlinParser.PROPERTY - 93)) | (1 << (KotlinParser.GET - 93)) | (1 << (KotlinParser.SET - 93)) | (1 << (KotlinParser.RECEIVER - 93)) | (1 << (KotlinParser.PARAM - 93)) | (1 << (KotlinParser.SETPARAM - 93)) | (1 << (KotlinParser.DELEGATE - 93)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public unescapedAnnotation(): UnescapedAnnotationContext {
		let _localctx: UnescapedAnnotationContext = new UnescapedAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, KotlinParser.RULE_unescapedAnnotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2630;
			this.identifier();
			this.state = 2632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===KotlinParser.LANGLE) {
				{
				this.state = 2631;
				this.typeArguments();
				}
			}

			this.state = 2635;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,399,this._ctx) ) {
			case 1:
				{
				this.state = 2634;
				this.valueArguments();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, KotlinParser.RULE_identifier);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2637;
			this.simpleIdentifier();
			this.state = 2648;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,401,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 2641;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===KotlinParser.NL) {
						{
						{
						this.state = 2638;
						this.match(KotlinParser.NL);
						}
						}
						this.state = 2643;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2644;
					this.match(KotlinParser.DOT);
					this.state = 2645;
					this.simpleIdentifier();
					}
					} 
				}
				this.state = 2650;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,401,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simpleIdentifier(): SimpleIdentifierContext {
		let _localctx: SimpleIdentifierContext = new SimpleIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, KotlinParser.RULE_simpleIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2651;
			_la = this._input.LA(1);
			if ( !(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (KotlinParser.IMPORT - 58)) | (1 << (KotlinParser.CONSTRUCTOR - 58)) | (1 << (KotlinParser.BY - 58)) | (1 << (KotlinParser.COMPANION - 58)) | (1 << (KotlinParser.INIT - 58)) | (1 << (KotlinParser.WHERE - 58)) | (1 << (KotlinParser.CATCH - 58)) | (1 << (KotlinParser.FINALLY - 58)))) !== 0) || ((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (KotlinParser.OUT - 92)) | (1 << (KotlinParser.GETTER - 92)) | (1 << (KotlinParser.SETTER - 92)) | (1 << (KotlinParser.DYNAMIC - 92)) | (1 << (KotlinParser.PUBLIC - 92)) | (1 << (KotlinParser.PRIVATE - 92)) | (1 << (KotlinParser.PROTECTED - 92)) | (1 << (KotlinParser.INTERNAL - 92)) | (1 << (KotlinParser.ENUM - 92)) | (1 << (KotlinParser.SEALED - 92)) | (1 << (KotlinParser.ANNOTATION - 92)) | (1 << (KotlinParser.DATA - 92)) | (1 << (KotlinParser.INNER - 92)) | (1 << (KotlinParser.TAILREC - 92)) | (1 << (KotlinParser.OPERATOR - 92)) | (1 << (KotlinParser.INLINE - 92)) | (1 << (KotlinParser.INFIX - 92)) | (1 << (KotlinParser.EXTERNAL - 92)) | (1 << (KotlinParser.SUSPEND - 92)) | (1 << (KotlinParser.OVERRIDE - 92)) | (1 << (KotlinParser.ABSTRACT - 92)) | (1 << (KotlinParser.FINAL - 92)) | (1 << (KotlinParser.OPEN - 92)) | (1 << (KotlinParser.CONST - 92)))) !== 0) || ((((_la - 124)) & ~0x1F) === 0 && ((1 << (_la - 124)) & ((1 << (KotlinParser.LATEINIT - 124)) | (1 << (KotlinParser.VARARG - 124)) | (1 << (KotlinParser.NOINLINE - 124)) | (1 << (KotlinParser.CROSSINLINE - 124)) | (1 << (KotlinParser.REIFIED - 124)) | (1 << (KotlinParser.Identifier - 124)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public semi(): SemiContext {
		let _localctx: SemiContext = new SemiContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, KotlinParser.RULE_semi);
		try {
			let _alt: number;
			this.state = 2665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,404,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2654; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2653;
						this.match(KotlinParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2656; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,402,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2658;
				this.match(KotlinParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2659;
				this.match(KotlinParser.SEMICOLON);
				this.state = 2661; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 2660;
						this.match(KotlinParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2663; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,403,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\xAC\u0A6E\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t"+
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04"+
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04"+
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04"+
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81"+
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86"+
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B"+
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90"+
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95"+
		"\x04\x96\t\x96\x03\x02\x07\x02\u012E\n\x02\f\x02\x0E\x02\u0131\v\x02\x03"+
		"\x02\x05\x02\u0134\n\x02\x03\x02\x03\x02\x03\x02\x07\x02\u0139\n\x02\f"+
		"\x02\x0E\x02\u013C\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\u0141\n\x03\f"+
		"\x03\x0E\x03\u0144\v\x03\x03\x03\x05\x03\u0147\n\x03\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x05\x03\u014D\n\x03\x07\x03\u014F\n\x03\f\x03\x0E\x03\u0152"+
		"\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\u015A\n"+
		"\x04\r\x04\x0E\x04\u015B\x03\x04\x03\x04\x03\x04\x05\x04\u0161\n\x04\x03"+
		"\x04\x05\x04\u0164\n\x04\x06\x04\u0166\n\x04\r\x04\x0E\x04\u0167\x03\x05"+
		"\x03\x05\x03\x05\x05\x05\u016D\n\x05\x05\x05\u016F\n\x05\x03\x06\x07\x06"+
		"\u0172\n\x06\f\x06\x0E\x06\u0175\v\x06\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x05\x07\u017C\n\x07\x03\x07\x05\x07\u017F\n\x07\x03\b\x03\b\x03"+
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0189\n\t\x03\t\x05\t\u018C\n\t"+
		"\x03\n\x05\n\u018F\n\n\x03\n\x03\n\x07\n\u0193\n\n\f\n\x0E\n\u0196\v\n"+
		"\x03\n\x03\n\x07\n\u019A\n\n\f\n\x0E\n\u019D\v\n\x03\n\x05\n\u01A0\n\n"+
		"\x03\n\x07\n\u01A3\n\n\f\n\x0E\n\u01A6\v\n\x03\n\x05\n\u01A9\n\n\x03\n"+
		"\x07\n\u01AC\n\n\f\n\x0E\n\u01AF\v\n\x03\n\x03\n\x07\n\u01B3\n\n\f\n\x0E"+
		"\n\u01B6\v\n\x03\n\x05\n\u01B9\n\n\x03\n\x07\n\u01BC\n\n\f\n\x0E\n\u01BF"+
		"\v\n\x03\n\x05\n\u01C2\n\n\x03\n\x07\n\u01C5\n\n\f\n\x0E\n\u01C8\v\n\x03"+
		"\n\x03\n\x07\n\u01CC\n\n\f\n\x0E\n\u01CF\v\n\x03\n\x05\n\u01D2\n\n\x03"+
		"\v\x05\v\u01D5\n\v\x03\v\x03\v\x07\v\u01D9\n\v\f\v\x0E\v\u01DC\v\v\x05"+
		"\v\u01DE\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\u01E6\n\f\f\f\x0E"+
		"\f\u01E9\v\f\x05\f\u01EB\n\f\x03\f\x03\f\x03\r\x05\r\u01F0\n\r\x03\r\x05"+
		"\r\u01F3\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01FA\n\r\x03\x0E\x07"+
		"\x0E\u01FD\n\x0E\f\x0E\x0E\x0E\u0200\v\x0E\x03\x0E\x03\x0E\x07\x0E\u0204"+
		"\n\x0E\f\x0E\x0E\x0E\u0207\v\x0E\x03\x0E\x03\x0E\x07\x0E\u020B\n\x0E\f"+
		"\x0E\x0E\x0E\u020E\v\x0E\x03\x0E\x07\x0E\u0211\n\x0E\f\x0E\x0E\x0E\u0214"+
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0219\n\x0F\x03\x10\x03\x10\x03"+
		"\x10\x03\x11\x03\x11\x07\x11\u0220\n\x11\f\x11\x0E\x11\u0223\v\x11\x03"+
		"\x11\x03\x11\x07\x11\u0227\n\x11\f\x11\x0E\x11\u022A\v\x11\x03\x11\x03"+
		"\x11\x03\x12\x03\x12\x07\x12\u0230\n\x12\f\x12\x0E\x12\u0233\v\x12\x03"+
		"\x12\x07\x12\u0236\n\x12\f\x12\x0E\x12\u0239\v\x12\x03\x12\x07\x12\u023C"+
		"\n\x12\f\x12\x0E\x12\u023F\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u024B\n\x13\x03\x13\x05"+
		"\x13\u024E\n\x13\x03\x14\x03\x14\x07\x14\u0252\n\x14\f\x14\x0E\x14\u0255"+
		"\v\x14\x03\x14\x03\x14\x03\x15\x05\x15\u025A\n\x15\x03\x15\x03\x15\x07"+
		"\x15\u025E\n\x15\f\x15\x0E\x15\u0261\v\x15\x03\x15\x03\x15\x07\x15\u0265"+
		"\n\x15\f\x15\x0E\x15\u0268\v\x15\x03\x15\x03\x15\x07\x15\u026C\n\x15\f"+
		"\x15\x0E\x15\u026F\v\x15\x03\x15\x05\x15\u0272\n\x15\x03\x15\x07\x15\u0275"+
		"\n\x15\f\x15\x0E\x15\u0278\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07\x16"+
		"\u027E\n\x16\f\x16\x0E\x16\u0281\v\x16\x03\x16\x03\x16\x03\x16\x07\x16"+
		"\u0286\n\x16\f\x16\x0E\x16\u0289\v\x16\x03\x16\x05\x16\u028C\n\x16\x03"+
		"\x17\x03\x17\x07\x17\u0290\n\x17\f\x17\x0E\x17\u0293\v\x17\x03\x17\x05"+
		"\x17\u0296\n\x17\x03\x17\x07\x17\u0299\n\x17\f\x17\x0E\x17\u029C\v\x17"+
		"\x03\x17\x03\x17\x07\x17\u02A0\n\x17\f\x17\x0E\x17\u02A3\v\x17\x03\x17"+
		"\x07\x17\u02A6\n\x17\f\x17\x0E\x17\u02A9\v\x17\x05\x17\u02AB\n\x17\x03"+
		"\x17\x07\x17\u02AE\n\x17\f\x17\x0E\x17\u02B1\v\x17\x03\x17\x03\x17\x03"+
		"\x18\x03\x18\x07\x18\u02B7\n\x18\f\x18\x0E\x18\u02BA\v\x18\x06\x18\u02BC"+
		"\n\x18\r\x18\x0E\x18\u02BD\x03\x18\x05\x18\u02C1\n\x18\x03\x19\x03\x19"+
		"\x07\x19\u02C5\n\x19\f\x19\x0E\x19\u02C8\v\x19\x03\x19\x05\x19\u02CB\n"+
		"\x19\x03\x19\x07\x19\u02CE\n\x19\f\x19\x0E\x19\u02D1\v\x19\x03\x19\x05"+
		"\x19\u02D4\n\x19\x03\x19\x07\x19\u02D7\n\x19\f\x19\x0E\x19\u02DA\v\x19"+
		"\x03\x19\x05\x19\u02DD\n\x19\x03\x1A\x05\x1A\u02E0\n\x1A\x03\x1A\x03\x1A"+
		"\x07\x1A\u02E4\n\x1A\f\x1A\x0E\x1A\u02E7\v\x1A\x03\x1A\x03\x1A\x07\x1A"+
		"\u02EB\n\x1A\f\x1A\x0E\x1A\u02EE\v\x1A\x03\x1A\x03\x1A\x05\x1A\u02F2\n"+
		"\x1A\x03\x1A\x07\x1A\u02F5\n\x1A\f\x1A\x0E\x1A\u02F8\v\x1A\x03\x1A\x05"+
		"\x1A\u02FB\n\x1A\x03\x1A\x07\x1A\u02FE\n\x1A\f\x1A\x0E\x1A\u0301\v\x1A"+
		"\x03\x1A\x05\x1A\u0304\n\x1A\x03\x1A\x07\x1A\u0307\n\x1A\f\x1A\x0E\x1A"+
		"\u030A\v\x1A\x03\x1A\x03\x1A\x07\x1A\u030E\n\x1A\f\x1A\x0E\x1A\u0311\v"+
		"\x1A\x03\x1A\x03\x1A\x07\x1A\u0315\n\x1A\f\x1A\x0E\x1A\u0318\v\x1A\x03"+
		"\x1A\x05\x1A\u031B\n\x1A\x03\x1A\x07\x1A\u031E\n\x1A\f\x1A\x0E\x1A\u0321"+
		"\v\x1A\x03\x1A\x05\x1A\u0324\n\x1A\x03\x1A\x07\x1A\u0327\n\x1A\f\x1A\x0E"+
		"\x1A\u032A\v\x1A\x03\x1A\x05\x1A\u032D\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03"+
		"\x1B\x07\x1B\u0333\n\x1B\f\x1B\x0E\x1B\u0336\v\x1B\x05\x1B\u0338\n\x1B"+
		"\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u033D\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05"+
		"\x1C\u0342\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E"+
		"\x07\x1E\u034B\n\x1E\f\x1E\x0E\x1E\u034E\v\x1E\x03\x1E\x05\x1E\u0351\n"+
		"\x1E\x03\x1F\x05\x1F\u0354\n\x1F\x03\x1F\x03\x1F\x07\x1F\u0358\n\x1F\f"+
		"\x1F\x0E\x1F\u035B\v\x1F\x03\x1F\x03\x1F\x07\x1F\u035F\n\x1F\f\x1F\x0E"+
		"\x1F\u0362\v\x1F\x03\x1F\x05\x1F\u0365\n\x1F\x03\x1F\x07\x1F\u0368\n\x1F"+
		"\f\x1F\x0E\x1F\u036B\v\x1F\x03\x1F\x03\x1F\x07\x1F\u036F\n\x1F\f\x1F\x0E"+
		"\x1F\u0372\v\x1F\x03\x1F\x05\x1F\u0375\n\x1F\x03\x1F\x07\x1F\u0378\n\x1F"+
		"\f\x1F\x0E\x1F\u037B\v\x1F\x03\x1F\x05\x1F\u037E\n\x1F\x03 \x05 \u0381"+
		"\n \x03 \x03 \x07 \u0385\n \f \x0E \u0388\v \x03 \x05 \u038B\n \x03 \x03"+
		" \x07 \u038F\n \f \x0E \u0392\v \x03 \x05 \u0395\n \x03 \x07 \u0398\n"+
		" \f \x0E \u039B\v \x03 \x03 \x07 \u039F\n \f \x0E \u03A2\v \x03 \x05 "+
		"\u03A5\n \x03 \x07 \u03A8\n \f \x0E \u03AB\v \x03 \x05 \u03AE\n \x03!"+
		"\x05!\u03B1\n!\x03!\x03!\x07!\u03B5\n!\f!\x0E!\u03B8\v!\x03!\x05!\u03BB"+
		"\n!\x03!\x07!\u03BE\n!\f!\x0E!\u03C1\v!\x03!\x03!\x07!\u03C5\n!\f!\x0E"+
		"!\u03C8\v!\x03!\x03!\x05!\u03CC\n!\x03!\x07!\u03CF\n!\f!\x0E!\u03D2\v"+
		"!\x03!\x03!\x05!\u03D6\n!\x03!\x07!\u03D9\n!\f!\x0E!\u03DC\v!\x03!\x05"+
		"!\u03DF\n!\x03!\x07!\u03E2\n!\f!\x0E!\u03E5\v!\x03!\x03!\x07!\u03E9\n"+
		"!\f!\x0E!\u03EC\v!\x03!\x05!\u03EF\n!\x03!\x05!\u03F2\n!\x03!\x05!\u03F5"+
		"\n!\x03!\x07!\u03F8\n!\f!\x0E!\u03FB\v!\x03!\x05!\u03FE\n!\x03!\x05!\u0401"+
		"\n!\x03!\x07!\u0404\n!\f!\x0E!\u0407\v!\x03!\x05!\u040A\n!\x05!\u040C"+
		"\n!\x03\"\x03\"\x03\"\x03\"\x07\"\u0412\n\"\f\"\x0E\"\u0415\v\"\x03\""+
		"\x03\"\x03#\x03#\x03#\x05#\u041C\n#\x03$\x05$\u041F\n$\x03$\x03$\x05$"+
		"\u0423\n$\x03$\x03$\x07$\u0427\n$\f$\x0E$\u042A\v$\x03$\x03$\x03$\x07"+
		"$\u042F\n$\f$\x0E$\u0432\v$\x03$\x03$\x07$\u0436\n$\f$\x0E$\u0439\v$\x03"+
		"$\x05$\u043C\n$\x03$\x07$\u043F\n$\f$\x0E$\u0442\v$\x03$\x03$\x03$\x07"+
		"$\u0447\n$\f$\x0E$\u044A\v$\x03$\x05$\u044D\n$\x05$\u044F\n$\x03%\x05"+
		"%\u0452\n%\x03%\x03%\x05%\u0456\n%\x03%\x03%\x07%\u045A\n%\f%\x0E%\u045D"+
		"\v%\x03%\x03%\x03%\x07%\u0462\n%\f%\x0E%\u0465\v%\x03%\x03%\x05%\u0469"+
		"\n%\x03%\x03%\x07%\u046D\n%\f%\x0E%\u0470\v%\x03%\x03%\x05%\u0474\n%\x03"+
		"&\x05&\u0477\n&\x03&\x03&\x07&\u047B\n&\f&\x0E&\u047E\v&\x03&\x03&\x07"+
		"&\u0482\n&\f&\x0E&\u0485\v&\x03&\x05&\u0488\n&\x03&\x07&\u048B\n&\f&\x0E"+
		"&\u048E\v&\x03&\x03&\x07&\u0492\n&\f&\x0E&\u0495\v&\x03&\x03&\x03\'\x03"+
		"\'\x07\'\u049B\n\'\f\'\x0E\'\u049E\v\'\x03\'\x03\'\x07\'\u04A2\n\'\f\'"+
		"\x0E\'\u04A5\v\'\x03\'\x03\'\x07\'\u04A9\n\'\f\'\x0E\'\u04AC\v\'\x03\'"+
		"\x07\'\u04AF\n\'\f\'\x0E\'\u04B2\v\'\x03\'\x07\'\u04B5\n\'\f\'\x0E\'\u04B8"+
		"\v\'\x03\'\x03\'\x03(\x05(\u04BD\n(\x03(\x07(\u04C0\n(\f(\x0E(\u04C3\v"+
		"(\x03(\x03(\x07(\u04C7\n(\f(\x0E(\u04CA\v(\x03(\x03(\x07(\u04CE\n(\f("+
		"\x0E(\u04D1\v(\x03(\x05(\u04D4\n(\x03)\x05)\u04D7\n)\x03)\x03)\x03)\x03"+
		")\x05)\u04DD\n)\x03*\x03*\x03*\x07*\u04E2\n*\f*\x0E*\u04E5\v*\x06*\u04E7"+
		"\n*\r*\x0E*\u04E8\x03+\x03+\x03+\x03+\x03,\x03,\x05,\u04F1\n,\x03,\x07"+
		",\u04F4\n,\f,\x0E,\u04F7\v,\x03,\x06,\u04FA\n,\r,\x0E,\u04FB\x03-\x03"+
		"-\x03-\x03-\x03-\x03-\x05-\u0504\n-\x03.\x03.\x07.\u0508\n.\f.\x0E.\u050B"+
		"\v.\x03.\x03.\x07.\u050F\n.\f.\x0E.\u0512\v.\x05.\u0514\n.\x03.\x03.\x07"+
		".\u0518\n.\f.\x0E.\u051B\v.\x03.\x03.\x07.\u051F\n.\f.\x0E.\u0522\v.\x03"+
		".\x05.\u0525\n.\x03/\x03/\x03/\x05/\u052A\n/\x030\x030\x070\u052E\n0\f"+
		"0\x0E0\u0531\v0\x030\x030\x070\u0535\n0\f0\x0E0\u0538\v0\x030\x070\u053B"+
		"\n0\f0\x0E0\u053E\v0\x031\x031\x071\u0542\n1\f1\x0E1\u0545\v1\x031\x05"+
		"1\u0548\n1\x032\x032\x032\x052\u054D\n2\x032\x032\x032\x052\u0552\n2\x07"+
		"2\u0554\n2\f2\x0E2\u0557\v2\x032\x032\x033\x033\x073\u055D\n3\f3\x0E3"+
		"\u0560\v3\x033\x033\x073\u0564\n3\f3\x0E3\u0567\v3\x033\x033\x073\u056B"+
		"\n3\f3\x0E3\u056E\v3\x033\x073\u0571\n3\f3\x0E3\u0574\v3\x034\x074\u0577"+
		"\n4\f4\x0E4\u057A\v4\x034\x034\x074\u057E\n4\f4\x0E4\u0581\v4\x034\x03"+
		"4\x074\u0585\n4\f4\x0E4\u0588\v4\x034\x034\x035\x035\x075\u058E\n5\f5"+
		"\x0E5\u0591\v5\x035\x035\x035\x075\u0596\n5\f5\x0E5\u0599\v5\x035\x03"+
		"5\x055\u059D\n5\x055\u059F\n5\x035\x075\u05A2\n5\f5\x0E5\u05A5\v5\x03"+
		"5\x035\x036\x036\x036\x076\u05AC\n6\f6\x0E6\u05AF\v6\x036\x036\x056\u05B3"+
		"\n6\x056\u05B5\n6\x037\x037\x037\x057\u05BA\n7\x038\x078\u05BD\n8\f8\x0E"+
		"8\u05C0\v8\x038\x038\x038\x038\x058\u05C6\n8\x039\x039\x039\x079\u05CB"+
		"\n9\f9\x0E9\u05CE\v9\x039\x039\x03:\x03:\x03;\x03;\x07;\u05D6\n;\f;\x0E"+
		";\u05D9\v;\x03;\x03;\x07;\u05DD\n;\f;\x0E;\u05E0\v;\x03;\x07;\u05E3\n"+
		";\f;\x0E;\u05E6\v;\x03<\x03<\x07<\u05EA\n<\f<\x0E<\u05ED\v<\x03<\x03<"+
		"\x07<\u05F1\n<\f<\x0E<\u05F4\v<\x03<\x07<\u05F7\n<\f<\x0E<\u05FA\v<\x03"+
		"=\x03=\x03=\x07=\u05FF\n=\f=\x0E=\u0602\v=\x03=\x03=\x07=\u0606\n=\f="+
		"\x0E=\u0609\v=\x03>\x03>\x03>\x07>\u060E\n>\f>\x0E>\u0611\v>\x03>\x03"+
		">\x05>\u0615\n>\x03?\x03?\x03?\x07?\u061A\n?\f?\x0E?\u061D\v?\x03?\x03"+
		"?\x07?\u0621\n?\f?\x0E?\u0624\v?\x03?\x03?\x03?\x07?\u0629\n?\f?\x0E?"+
		"\u062C\v?\x03?\x03?\x05?\u0630\n?\x05?\u0632\n?\x03@\x03@\x07@\u0636\n"+
		"@\f@\x0E@\u0639\v@\x03@\x03@\x07@\u063D\n@\f@\x0E@\u0640\v@\x03@\x07@"+
		"\u0643\n@\f@\x0E@\u0646\v@\x03A\x03A\x03A\x07A\u064B\nA\fA\x0EA\u064E"+
		"\vA\x03A\x03A\x07A\u0652\nA\fA\x0EA\u0655\vA\x03B\x03B\x03B\x07B\u065A"+
		"\nB\fB\x0EB\u065D\vB\x03B\x07B\u0660\nB\fB\x0EB\u0663\vB\x03C\x03C\x03"+
		"C\x07C\u0668\nC\fC\x0EC\u066B\vC\x03C\x03C\x07C\u066F\nC\fC\x0EC\u0672"+
		"\vC\x03D\x03D\x03D\x07D\u0677\nD\fD\x0ED\u067A\vD\x03D\x03D\x07D\u067E"+
		"\nD\fD\x0ED\u0681\vD\x03E\x03E\x05E\u0685\nE\x03F\x07F\u0688\nF\fF\x0E"+
		"F\u068B\vF\x03F\x03F\x07F\u068F\nF\fF\x0EF\u0692\vF\x03F\x03F\x05F\u0696"+
		"\nF\x03G\x07G\u0699\nG\fG\x0EG\u069C\vG\x03G\x03G\x07G\u06A0\nG\fG\x0E"+
		"G\u06A3\vG\x03G\x05G\u06A6\nG\x03H\x03H\x03H\x03H\x03H\x03H\x07H\u06AE"+
		"\nH\fH\x0EH\u06B1\vH\x03H\x03H\x03H\x03H\x06H\u06B7\nH\rH\x0EH\u06B8\x03"+
		"H\x05H\u06BC\nH\x03I\x03I\x05I\u06C0\nI\x03I\x05I\u06C3\nI\x03I\x07I\u06C6"+
		"\nI\fI\x0EI\u06C9\vI\x03J\x03J\x03J\x03K\x03K\x07K\u06D0\nK\fK\x0EK\u06D3"+
		"\vK\x03K\x03K\x03K\x06K\u06D8\nK\rK\x0EK\u06D9\x03L\x03L\x05L\u06DE\n"+
		"L\x03M\x03M\x06M\u06E2\nM\rM\x0EM\u06E3\x03N\x05N\u06E7\nN\x03N\x03N\x07"+
		"N\u06EB\nN\fN\x0EN\u06EE\vN\x03N\x03N\x07N\u06F2\nN\fN\x0EN\u06F5\vN\x05"+
		"N\u06F7\nN\x03O\x07O\u06FA\nO\fO\x0EO\u06FD\vO\x03O\x05O\u0700\nO\x03"+
		"O\x07O\u0703\nO\fO\x0EO\u0706\vO\x03O\x03O\x03P\x03P\x03P\x03P\x07P\u070E"+
		"\nP\fP\x0EP\u0711\vP\x05P\u0713\nP\x03P\x03P\x03Q\x03Q\x05Q\u0719\nQ\x03"+
		"Q\x03Q\x03Q\x03Q\x03Q\x07Q\u0720\nQ\fQ\x0EQ\u0723\vQ\x03Q\x03Q\x05Q\u0727"+
		"\nQ\x03R\x03R\x07R\u072B\nR\fR\x0ER\u072E\vR\x03R\x03R\x07R\u0732\nR\f"+
		"R\x0ER\u0735\vR\x03R\x03R\x07R\u0739\nR\fR\x0ER\u073C\vR\x03R\x07R\u073F"+
		"\nR\fR\x0ER\u0742\vR\x03R\x03R\x03S\x05S\u0747\nS\x03S\x03S\x05S\u074B"+
		"\nS\x03T\x06T\u074E\nT\rT\x0ET\u074F\x03U\x03U\x07U\u0754\nU\fU\x0EU\u0757"+
		"\vU\x03U\x03U\x07U\u075B\nU\fU\x0EU\u075E\vU\x05U\u0760\nU\x03U\x05U\u0763"+
		"\nU\x03U\x07U\u0766\nU\fU\x0EU\u0769\vU\x03U\x03U\x03V\x03V\x03V\x03V"+
		"\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u077A\nV\x03W\x03W"+
		"\x03W\x03W\x03X\x03X\x03Y\x03Y\x05Y\u0784\nY\x03Z\x03Z\x03Z\x07Z\u0789"+
		"\nZ\fZ\x0EZ\u078C\vZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03[\x07[\u0795\n["+
		"\f[\x0E[\u0798\v[\x03[\x03[\x03\\\x03\\\x03]\x03]\x03]\x03]\x03^\x03^"+
		"\x03_\x03_\x03_\x03_\x03`\x07`\u07A9\n`\f`\x0E`\u07AC\v`\x03`\x03`\x07"+
		"`\u07B0\n`\f`\x0E`\u07B3\v`\x03`\x03`\x07`\u07B7\n`\f`\x0E`\u07BA\v`\x03"+
		"`\x03`\x03`\x03`\x07`\u07C0\n`\f`\x0E`\u07C3\v`\x03`\x03`\x07`\u07C7\n"+
		"`\f`\x0E`\u07CA\v`\x03`\x03`\x07`\u07CE\n`\f`\x0E`\u07D1\v`\x03`\x03`"+
		"\x07`\u07D5\n`\f`\x0E`\u07D8\v`\x03`\x03`\x05`\u07DC\n`\x03a\x05a\u07DF"+
		"\na\x03a\x07a\u07E2\na\fa\x0Ea\u07E5\va\x03a\x03a\x07a\u07E9\na\fa\x0E"+
		"a\u07EC\va\x03a\x07a\u07EF\na\fa\x0Ea\u07F2\va\x03b\x03b\x03b\x07b\u07F7"+
		"\nb\fb\x0Eb\u07FA\vb\x03b\x03b\x07b\u07FE\nb\fb\x0Eb\u0801\vb\x03b\x05"+
		"b\u0804\nb\x05b\u0806\nb\x03c\x03c\x07c\u080A\nc\fc\x0Ec\u080D\vc\x03"+
		"c\x03c\x07c\u0811\nc\fc\x0Ec\u0814\vc\x03c\x05c\u0817\nc\x03c\x07c\u081A"+
		"\nc\fc\x0Ec\u081D\vc\x03c\x03c\x03d\x03d\x05d\u0823\nd\x03d\x03d\x07d"+
		"\u0827\nd\fd\x0Ed\u082A\vd\x03d\x03d\x03e\x03e\x05e\u0830\ne\x03f\x03"+
		"f\x03f\x07f\u0835\nf\ff\x0Ef\u0838\vf\x03f\x03f\x07f\u083C\nf\ff\x0Ef"+
		"\u083F\vf\x03f\x03f\x05f\u0843\nf\x03f\x05f\u0846\nf\x03g\x03g\x05g\u084A"+
		"\ng\x03h\x03h\x07h\u084E\nh\fh\x0Eh\u0851\vh\x03h\x03h\x03h\x03h\x07h"+
		"\u0857\nh\fh\x0Eh\u085A\vh\x03h\x05h\u085D\nh\x03h\x05h\u0860\nh\x03h"+
		"\x07h\u0863\nh\fh\x0Eh\u0866\vh\x03h\x03h\x07h\u086A\nh\fh\x0Eh\u086D"+
		"\vh\x03h\x05h\u0870\nh\x05h\u0872\nh\x03i\x03i\x05i\u0876\ni\x03j\x03"+
		"j\x07j\u087A\nj\fj\x0Ej\u087D\vj\x03j\x03j\x03j\x03j\x05j\u0883\nj\x03"+
		"j\x07j\u0886\nj\fj\x0Ej\u0889\vj\x03j\x03j\x07j\u088D\nj\fj\x0Ej\u0890"+
		"\vj\x03j\x03j\x07j\u0894\nj\fj\x0Ej\u0897\vj\x07j\u0899\nj\fj\x0Ej\u089C"+
		"\vj\x03j\x07j\u089F\nj\fj\x0Ej\u08A2\vj\x03j\x03j\x03k\x03k\x07k\u08A8"+
		"\nk\fk\x0Ek\u08AB\vk\x03k\x03k\x07k\u08AF\nk\fk\x0Ek\u08B2\vk\x03k\x07"+
		"k\u08B5";
	private static readonly _serializedATNSegment1: string =
		"\nk\fk\x0Ek\u08B8\vk\x03k\x07k\u08BB\nk\fk\x0Ek\u08BE\vk\x03k\x03k\x07"+
		"k\u08C2\nk\fk\x0Ek\u08C5\vk\x03k\x03k\x05k\u08C9\nk\x03k\x03k\x07k\u08CD"+
		"\nk\fk\x0Ek\u08D0\vk\x03k\x03k\x07k\u08D4\nk\fk\x0Ek\u08D7\vk\x03k\x05"+
		"k\u08DA\nk\x03l\x03l\x03l\x05l\u08DF\nl\x03m\x03m\x07m\u08E3\nm\fm\x0E"+
		"m\u08E6\vm\x03m\x03m\x03n\x03n\x07n\u08EC\nn\fn\x0En\u08EF\vn\x03n\x03"+
		"n\x03o\x03o\x07o\u08F5\no\fo\x0Eo\u08F8\vo\x03o\x03o\x07o\u08FC\no\fo"+
		"\x0Eo\u08FF\vo\x03o\x07o\u0902\no\fo\x0Eo\u0905\vo\x03o\x07o\u0908\no"+
		"\fo\x0Eo\u090B\vo\x03o\x05o\u090E\no\x03p\x03p\x07p\u0912\np\fp\x0Ep\u0915"+
		"\vp\x03p\x03p\x07p\u0919\np\fp\x0Ep\u091C\vp\x03p\x03p\x03p\x03p\x03p"+
		"\x07p\u0923\np\fp\x0Ep\u0926\vp\x03p\x03p\x03q\x03q\x07q\u092C\nq\fq\x0E"+
		"q\u092F\vq\x03q\x03q\x03r\x03r\x03r\x05r\u0936\nr\x03s\x03s\x07s\u093A"+
		"\ns\fs\x0Es\u093D\vs\x03s\x03s\x07s\u0941\ns\fs\x0Es\u0944\vs\x03s\x03"+
		"s\x05s\u0948\ns\x03s\x03s\x03s\x03s\x07s\u094E\ns\fs\x0Es\u0951\vs\x03"+
		"s\x05s\u0954\ns\x03t\x03t\x07t\u0958\nt\ft\x0Et\u095B\vt\x03t\x03t\x03"+
		"t\x03t\x07t\u0961\nt\ft\x0Et\u0964\vt\x03t\x05t\u0967\nt\x03u\x03u\x07"+
		"u\u096B\nu\fu\x0Eu\u096E\vu\x03u\x05u\u0971\nu\x03u\x07u\u0974\nu\fu\x0E"+
		"u\u0977\vu\x03u\x03u\x07u\u097B\nu\fu\x0Eu\u097E\vu\x03u\x03u\x03u\x03"+
		"u\x03v\x03v\x07v\u0986\nv\fv\x0Ev\u0989\vv\x03v\x03v\x03v\x05v\u098E\n"+
		"v\x03v\x03v\x03v\x03v\x05v\u0994\nv\x03w\x03w\x03w\x07w\u0999\nw\fw\x0E"+
		"w\u099C\vw\x07w\u099E\nw\fw\x0Ew\u09A1\vw\x05w\u09A3\nw\x03w\x07w\u09A6"+
		"\nw\fw\x0Ew\u09A9\vw\x03w\x03w\x07w\u09AD\nw\fw\x0Ew\u09B0\vw\x03w\x03"+
		"w\x05w\u09B4\nw\x03x\x03x\x03y\x03y\x03z\x03z\x03{\x03{\x03|\x03|\x03"+
		"}\x03}\x03~\x03~\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81"+
		"\x03\x81\x05\x81\u09CC\n\x81\x03\x82\x03\x82\x03\x82\x05\x82\u09D1\n\x82"+
		"\x03\x83\x03\x83\x06\x83\u09D5\n\x83\r\x83\x0E\x83\u09D6\x03\x84\x03\x84"+
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u09E2"+
		"\n\x84\x03\x84\x07\x84\u09E5\n\x84\f\x84\x0E\x84\u09E8\v\x84\x03\x85\x03"+
		"\x85\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03"+
		"\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x03\x8E\x03"+
		"\x8E\x07\x8E\u09FE\n\x8E\f\x8E\x0E\x8E\u0A01\v\x8E\x03\x8F\x03\x8F\x05"+
		"\x8F\u0A05\n\x8F\x03\x8F\x07\x8F\u0A08\n\x8F\f\x8F\x0E\x8F\u0A0B\v\x8F"+
		"\x03\x90\x03\x90\x07\x90\u0A0F\n\x90\f\x90\x0E\x90\u0A12\v\x90\x03\x90"+
		"\x03\x90\x07\x90\u0A16\n\x90\f\x90\x0E\x90\u0A19\v\x90\x03\x90\x03\x90"+
		"\x03\x90\x03\x90\x07\x90\u0A1F\n\x90\f\x90\x0E\x90\u0A22\v\x90\x03\x90"+
		"\x05\x90\u0A25\n\x90\x03\x90\x07\x90\u0A28\n\x90\f\x90\x0E\x90\u0A2B\v"+
		"\x90\x03\x90\x05\x90\u0A2E\n\x90\x05\x90\u0A30\n\x90\x03\x91\x03\x91\x03"+
		"\x91\x03\x91\x06\x91\u0A36\n\x91\r\x91\x0E\x91\u0A37\x03\x91\x03\x91\x03"+
		"\x91\x03\x91\x03\x91\x06\x91\u0A3F\n\x91\r\x91\x0E\x91\u0A40\x03\x91\x03"+
		"\x91\x05\x91\u0A45\n\x91\x03\x92\x03\x92\x03\x93\x03\x93\x05\x93\u0A4B"+
		"\n\x93\x03\x93\x05\x93\u0A4E\n\x93\x03\x94\x03\x94\x07\x94\u0A52\n\x94"+
		"\f\x94\x0E\x94\u0A55\v\x94\x03\x94\x03\x94\x07\x94\u0A59\n\x94\f\x94\x0E"+
		"\x94\u0A5C\v\x94\x03\x95\x03\x95\x03\x96\x06\x96\u0A61\n\x96\r\x96\x0E"+
		"\x96\u0A62\x03\x96\x03\x96\x03\x96\x06\x96\u0A68\n\x96\r\x96\x0E\x96\u0A69"+
		"\x05\x96\u0A6C\n\x96\x03\x96\x02\x02\x02\x97\x02\x02\x04\x02\x06\x02\b"+
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02"+
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02"+
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02"+
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02"+
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02"+
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02"+
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02"+
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02"+
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02"+
		"\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02"+
		"\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02"+
		"\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102"+
		"\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110"+
		"\x02\u0112\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E"+
		"\x02\u0120\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\x02\x1C"+
		"\x03\x02=>\x03\x02AB\x04\x02\x1D\x1DEE\x05\x02\x85\x85\x88\x8D\x92\x92"+
		"\x03\x02\x9E\xA0\x03\x02\xA4\xA6\x04\x0277VV\x03\x02&\'\x03\x02\x1D\""+
		"\x04\x021245\x03\x02-0\x04\x02[[]]\x04\x02ZZ\\\\\x03\x02\x14\x15\x03\x02"+
		"\x11\x13\x05\x02\x1B\x1B33YY\x04\x02\x14\x17\x1A\x1A\x03\x02nr\x04\x02"+
		"yy~~\x03\x02jm\x04\x02[[^^\x03\x02sx\x03\x02z|\x03\x02\x7F\x81\x05\x02"+
		"::_beh\n\x02<<DGKKPQ^^cdi\x82\x8E\x8E\u0BA2\x02\u012F\x03\x02\x02\x02"+
		"\x04\u0142\x03\x02\x02\x02\x06\u0165\x03\x02\x02\x02\b\u016E\x03\x02\x02"+
		"\x02\n\u0173\x03\x02\x02\x02\f\u0176\x03\x02\x02\x02\x0E\u0180\x03\x02"+
		"\x02\x02\x10\u0188\x03\x02\x02\x02\x12\u018E\x03\x02\x02\x02\x14\u01D4"+
		"\x03\x02\x02\x02\x16\u01E1\x03\x02\x02\x02\x18\u01EF\x03\x02\x02\x02\x1A"+
		"\u01FE\x03\x02\x02\x02\x1C\u0218\x03\x02\x02\x02\x1E\u021A\x03\x02\x02"+
		"\x02 \u021D\x03\x02\x02\x02\"\u022D\x03\x02\x02\x02$\u024A\x03\x02\x02"+
		"\x02&\u024F\x03\x02\x02\x02(\u0259\x03\x02\x02\x02*\u028B\x03\x02\x02"+
		"\x02,\u028D\x03\x02\x02\x02.\u02BB\x03\x02\x02\x020\u02C2\x03\x02\x02"+
		"\x022\u02DF\x03\x02\x02\x024\u032E\x03\x02\x02\x026\u033C\x03\x02\x02"+
		"\x028\u0343\x03\x02\x02\x02:\u0350\x03\x02\x02\x02<\u0353\x03\x02\x02"+
		"\x02>\u0380\x03\x02\x02\x02@\u03B0\x03\x02\x02\x02B\u040D\x03\x02\x02"+
		"\x02D\u0418\x03\x02\x02\x02F\u044E\x03\x02\x02\x02H\u0473\x03\x02\x02"+
		"\x02J\u0476\x03\x02\x02\x02L\u0498\x03\x02\x02\x02N\u04BC\x03\x02\x02"+
		"\x02P\u04D6\x03\x02\x02\x02R\u04E6\x03\x02\x02\x02T\u04EA\x03\x02\x02"+
		"\x02V\u04F0\x03\x02\x02\x02X\u0503\x03\x02\x02\x02Z\u0513\x03\x02\x02"+
		"\x02\\\u0529\x03\x02\x02\x02^\u052B\x03\x02\x02\x02`\u053F\x03\x02\x02"+
		"\x02b\u0549\x03\x02\x02\x02d\u055A\x03\x02\x02\x02f\u0578\x03\x02\x02"+
		"\x02h\u058B\x03\x02\x02\x02j\u05B4\x03\x02\x02\x02l\u05B9\x03\x02\x02"+
		"\x02n\u05BE\x03\x02\x02\x02p\u05C7\x03\x02\x02\x02r\u05D1\x03\x02\x02"+
		"\x02t\u05D3\x03\x02\x02\x02v\u05E7\x03\x02\x02\x02x\u05FB\x03\x02\x02"+
		"\x02z\u060A\x03\x02\x02\x02|\u0631\x03\x02\x02\x02~\u0633\x03\x02\x02"+
		"\x02\x80\u0647\x03\x02\x02\x02\x82\u0656\x03\x02\x02\x02\x84\u0664\x03"+
		"\x02\x02\x02\x86\u0673\x03\x02\x02\x02\x88\u0682\x03\x02\x02\x02\x8A\u0689"+
		"\x03\x02\x02\x02\x8C\u06A5\x03\x02\x02\x02\x8E\u06BB\x03\x02\x02\x02\x90"+
		"\u06BD\x03\x02\x02\x02\x92\u06CA\x03\x02\x02\x02\x94\u06CD\x03\x02\x02"+
		"\x02\x96\u06DD\x03\x02\x02\x02\x98\u06DF\x03\x02\x02\x02\x9A\u06F6\x03"+
		"\x02\x02\x02\x9C\u06FB\x03\x02\x02\x02\x9E\u0709\x03\x02\x02\x02\xA0\u0726"+
		"\x03\x02\x02\x02\xA2\u0728\x03\x02\x02\x02\xA4\u074A\x03\x02\x02\x02\xA6"+
		"\u074D\x03\x02\x02\x02\xA8\u075F\x03\x02\x02\x02\xAA\u0779\x03\x02\x02"+
		"\x02\xAC\u077B\x03\x02\x02\x02\xAE\u077F\x03\x02\x02\x02\xB0\u0783\x03"+
		"\x02\x02\x02\xB2\u0785\x03\x02\x02\x02\xB4\u078F\x03\x02\x02\x02\xB6\u079B"+
		"\x03\x02\x02\x02\xB8\u079D\x03\x02\x02\x02\xBA\u07A1\x03\x02\x02\x02\xBC"+
		"\u07A3\x03\x02\x02\x02\xBE\u07AA\x03\x02\x02\x02\xC0\u07DE\x03\x02\x02"+
		"\x02\xC2\u0805\x03\x02\x02\x02\xC4\u0807\x03\x02\x02\x02\xC6\u0820\x03"+
		"\x02\x02\x02\xC8\u082D\x03\x02\x02\x02\xCA\u0831\x03\x02\x02\x02\xCC\u0849"+
		"\x03\x02\x02\x02\xCE\u084B\x03\x02\x02\x02\xD0\u0875\x03\x02\x02\x02\xD2"+
		"\u0877\x03\x02\x02\x02\xD4\u08D9\x03\x02\x02\x02\xD6\u08DE\x03\x02\x02"+
		"\x02\xD8\u08E0\x03\x02\x02\x02\xDA\u08E9\x03\x02\x02\x02\xDC\u08F2\x03"+
		"\x02\x02\x02\xDE\u090F\x03\x02\x02\x02\xE0\u0929\x03\x02\x02\x02\xE2\u0935"+
		"\x03\x02\x02\x02\xE4\u0937\x03\x02\x02\x02\xE6\u0955\x03\x02\x02\x02\xE8"+
		"\u0968\x03\x02\x02\x02\xEA\u0993\x03\x02\x02\x02\xEC\u09A2\x03\x02\x02"+
		"\x02\xEE\u09B5\x03\x02\x02\x02\xF0\u09B7\x03\x02\x02\x02\xF2\u09B9\x03"+
		"\x02\x02\x02\xF4\u09BB\x03\x02\x02\x02\xF6\u09BD\x03\x02\x02\x02\xF8\u09BF"+
		"\x03\x02\x02\x02\xFA\u09C1\x03\x02\x02\x02\xFC\u09C3\x03\x02\x02\x02\xFE"+
		"\u09C5\x03\x02\x02\x02\u0100\u09CB\x03\x02\x02\x02\u0102\u09D0\x03\x02"+
		"\x02\x02\u0104\u09D4\x03\x02\x02\x02\u0106\u09E1\x03\x02\x02\x02\u0108"+
		"\u09E9\x03\x02\x02\x02\u010A\u09EB\x03\x02\x02\x02\u010C\u09ED\x03\x02"+
		"\x02\x02\u010E\u09EF\x03\x02\x02\x02\u0110\u09F1\x03\x02\x02\x02\u0112"+
		"\u09F3\x03\x02\x02\x02\u0114\u09F5\x03\x02\x02\x02\u0116\u09F7\x03\x02"+
		"\x02\x02\u0118\u09F9\x03\x02\x02\x02\u011A\u09FB\x03\x02\x02\x02\u011C"+
		"\u0A04\x03\x02\x02\x02\u011E\u0A2F\x03\x02\x02\x02\u0120\u0A44\x03\x02"+
		"\x02\x02\u0122\u0A46\x03\x02\x02\x02\u0124\u0A48\x03\x02\x02\x02\u0126"+
		"\u0A4F\x03\x02\x02\x02\u0128\u0A5D\x03\x02\x02\x02\u012A\u0A6B\x03\x02"+
		"\x02\x02\u012C\u012E\x07\x07\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E"+
		"\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02"+
		"\x02\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132"+
		"\u0134\x05\x06\x04\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02"+
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x05\b\x05\x02\u0136\u013A"+
		"\x05\n\x06\x02\u0137\u0139\x05\x10\t\x02\u0138\u0137\x03\x02\x02\x02\u0139"+
		"\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02"+
		"\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D"+
		"\u013E\x07\x02\x02\x03\u013E\x03\x03\x02\x02\x02\u013F\u0141\x07\x07\x02"+
		"\x02\u0140\u013F\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140"+
		"\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02"+
		"\u0144\u0142\x03\x02\x02\x02\u0145\u0147\x05\x06\x04\x02\u0146\u0145\x03"+
		"\x02\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148"+
		"\u0149\x05\b\x05\x02\u0149\u0150\x05\n\x06\x02\u014A\u014C\x05r:\x02\u014B"+
		"\u014D\x05\u012A\x96\x02\u014C\u014B\x03\x02\x02\x02\u014C\u014D\x03\x02"+
		"\x02\x02\u014D\u014F\x03\x02\x02\x02\u014E\u014A\x03\x02\x02\x02\u014F"+
		"\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02"+
		"\x02\x02\u0151\u0153\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0153"+
		"\u0154\x07\x02\x02\x03\u0154\x05\x03\x02\x02\x02\u0155\u0156\x07:\x02"+
		"\x02\u0156\u0160\x07\x1B\x02\x02\u0157\u0159\x07\r\x02\x02\u0158\u015A"+
		"\x05\u0124\x93\x02\u0159\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02"+
		"\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D"+
		"\x03\x02\x02\x02\u015D\u015E\x07\x0E\x02\x02\u015E\u0161\x03\x02\x02\x02"+
		"\u015F\u0161\x05\u0124\x93\x02\u0160\u0157\x03\x02\x02\x02\u0160\u015F"+
		"\x03\x02\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u0164\x05\u012A\x96"+
		"\x02\u0163\u0162\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0166"+
		"\x03\x02\x02\x02\u0165\u0155\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02"+
		"\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\x07\x03"+
		"\x02\x02\x02\u0169\u016A\x07;\x02\x02\u016A\u016C\x05\u0126\x94\x02\u016B"+
		"\u016D\x05\u012A\x96\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02"+
		"\x02\x02\u016D\u016F\x03\x02\x02\x02\u016E\u0169\x03\x02\x02\x02\u016E"+
		"\u016F\x03\x02\x02\x02\u016F\t\x03\x02\x02\x02\u0170\u0172\x05\f\x07\x02"+
		"\u0171\u0170\x03\x02\x02\x02\u0172\u0175\x03\x02\x02\x02\u0173\u0171\x03"+
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\v\x03\x02\x02\x02\u0175"+
		"\u0173\x03\x02\x02\x02\u0176\u0177\x07<\x02\x02\u0177\u017B\x05\u0126"+
		"\x94\x02\u0178\u0179\x07\t\x02\x02\u0179\u017C\x07\x11\x02\x02\u017A\u017C"+
		"\x05\x0E\b\x02\u017B\u0178\x03\x02\x02\x02\u017B\u017A\x03\x02\x02\x02"+
		"\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D\u017F\x05"+
		"\u012A\x96\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02"+
		"\u017F\r\x03\x02\x02\x02\u0180\u0181\x07Y\x02\x02\u0181\u0182\x05\u0128"+
		"\x95\x02\u0182\x0F\x03\x02\x02\x02\u0183\u0189\x05\x12\n\x02\u0184\u0189"+
		"\x052\x1A\x02\u0185\u0189\x05<\x1F\x02\u0186\u0189\x05@!\x02\u0187\u0189"+
		"\x05J&\x02\u0188\u0183\x03\x02\x02\x02\u0188\u0184\x03\x02\x02\x02\u0188"+
		"\u0185\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0187\x03\x02"+
		"\x02\x02\u0189\u018B\x03\x02\x02\x02\u018A\u018C\x05\u012A\x96\x02\u018B"+
		"\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C\x11\x03\x02\x02"+
		"\x02\u018D\u018F\x05\u0104\x83\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F"+
		"\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0194\t\x02\x02\x02"+
		"\u0191\u0193\x07\x07\x02\x02\u0192\u0191\x03\x02\x02\x02\u0193\u0196\x03"+
		"\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195"+
		"\u0197\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019F\x05\u0128"+
		"\x95\x02\u0198\u019A\x07\x07\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A"+
		"\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02"+
		"\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E"+
		"\u01A0\x05L\'\x02\u019F\u019B\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02"+
		"\x02\u01A0\u01A8\x03\x02\x02\x02\u01A1\u01A3\x07\x07\x02\x02\u01A2\u01A1"+
		"\x03\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02"+
		"\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A4\x03"+
		"\x02\x02\x02\u01A7\u01A9\x05\x14\v\x02\u01A8\u01A4\x03\x02\x02\x02\u01A8"+
		"\u01A9\x03\x02\x02\x02\u01A9\u01B8\x03\x02\x02\x02\u01AA\u01AC\x07\x07"+
		"\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD"+
		"\u01AB\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02"+
		"\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B4\x07\x1B\x02\x02\u01B1"+
		"\u01B3\x07\x07\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B6\x03\x02"+
		"\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5"+
		"\u01B7\x03\x02\x02\x02\u01B6\u01B4\x03\x02\x02\x02\u01B7\u01B9\x05\x1A"+
		"\x0E\x02\u01B8\u01AD\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9"+
		"\u01C1\x03\x02\x02\x02\u01BA\u01BC\x07\x07\x02\x02\u01BB\u01BA\x03\x02"+
		"\x02\x02\u01BC\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD"+
		"\u01BE\x03\x02\x02\x02\u01BE\u01C0\x03\x02\x02\x02\u01BF\u01BD\x03\x02"+
		"\x02\x02\u01C0\u01C2\x05d3\x02\u01C1\u01BD\x03\x02\x02\x02\u01C1\u01C2"+
		"\x03\x02\x02\x02\u01C2\u01D1\x03\x02\x02\x02\u01C3\u01C5\x07\x07\x02\x02"+
		"\u01C4\u01C3\x03\x02\x02\x02\u01C5\u01C8\x03\x02\x02\x02\u01C6\u01C4\x03"+
		"\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02\x02\x02\u01C8"+
		"\u01C6\x03\x02\x02\x02\u01C9\u01D2\x05\"\x12\x02\u01CA\u01CC\x07\x07\x02"+
		"\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB"+
		"\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01D0\x03\x02\x02\x02"+
		"\u01CF\u01CD\x03\x02\x02\x02\u01D0\u01D2\x05,\x17\x02\u01D1\u01C6\x03"+
		"\x02\x02\x02\u01D1\u01CD\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2"+
		"\x13\x03\x02\x02\x02\u01D3\u01D5\x05\u0104\x83\x02\u01D4\u01D3\x03\x02"+
		"\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01DD\x03\x02\x02\x02\u01D6"+
		"\u01DA\x07D\x02\x02\u01D7\u01D9\x07\x07\x02\x02\u01D8\u01D7\x03\x02\x02"+
		"\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB"+
		"\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02"+
		"\u01DD\u01D6\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03"+
		"\x02\x02\x02\u01DF\u01E0\x05\x16\f\x02\u01E0\x15\x03\x02\x02\x02\u01E1"+
		"\u01EA\x07\v\x02\x02\u01E2\u01E7\x05\x18\r\x02\u01E3\u01E4\x07\n\x02\x02"+
		"\u01E4\u01E6\x05\x18\r\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E9\x03"+
		"\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8"+
		"\u01EB\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01E2\x03\x02"+
		"\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC"+
		"\u01ED\x07\f\x02\x02\u01ED\x17\x03\x02\x02\x02\u01EE\u01F0\x05\u0104\x83"+
		"\x02\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2"+
		"\x03\x02\x02\x02\u01F1\u01F3\t\x03\x02\x02\u01F2\u01F1\x03\x02\x02\x02"+
		"\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x05"+
		"\u0128\x95\x02\u01F5\u01F6\x07\x1B\x02\x02\u01F6\u01F9\x05P)\x02\u01F7"+
		"\u01F8\x07\x1D\x02\x02\u01F8\u01FA\x05r:\x02\u01F9\u01F7\x03\x02\x02\x02"+
		"\u01F9\u01FA\x03\x02\x02\x02\u01FA\x19\x03\x02\x02\x02\u01FB\u01FD\x05"+
		"\u011C\x8F\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02"+
		"\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0201\x03"+
		"\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201\u0212\x05\x1C\x0F\x02\u0202"+
		"\u0204\x07\x07\x02\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0207\x03\x02"+
		"\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206"+
		"\u0208\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u020C\x07\n\x02"+
		"\x02\u0209\u020B\x07\x07\x02\x02\u020A\u0209\x03\x02\x02\x02\u020B\u020E"+
		"\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02"+
		"\u020D\u020F\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F\u0211\x05"+
		"\x1C\x0F\x02\u0210\u0205\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212"+
		"\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\x1B\x03\x02\x02"+
		"\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0219\x05\x1E\x10\x02\u0216\u0219"+
		"\x05^0\x02\u0217\u0219\x05 \x11\x02\u0218\u0215\x03\x02\x02\x02\u0218"+
		"\u0216\x03\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219\x1D\x03\x02\x02"+
		"\x02\u021A\u021B\x05^0\x02\u021B\u021C\x05\x9AN\x02\u021C\x1F\x03\x02"+
		"\x02\x02\u021D\u0221\x05^0\x02\u021E\u0220\x07\x07\x02\x02\u021F\u021E"+
		"\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02"+
		"\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223\u0221\x03"+
		"\x02\x02\x02\u0224\u0228\x07E\x02\x02\u0225\u0227\x07\x07\x02\x02\u0226"+
		"\u0225\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02"+
		"\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022B\x03\x02\x02\x02\u022A"+
		"\u0228\x03\x02\x02\x02\u022B\u022C\x05r:\x02\u022C!\x03\x02\x02\x02\u022D"+
		"\u0231\x07\x0F\x02\x02\u022E\u0230\x07\x07\x02\x02\u022F\u022E\x03\x02"+
		"\x02\x02\u0230\u0233\x03\x02\x02\x02\u0231\u022F\x03\x02\x02\x02\u0231"+
		"\u0232\x03\x02\x02\x02\u0232\u0237\x03\x02\x02\x02\u0233\u0231\x03\x02"+
		"\x02\x02\u0234\u0236\x05$\x13\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0239"+
		"\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02"+
		"\u0238\u023D\x03\x02\x02\x02\u0239\u0237\x03\x02\x02\x02\u023A\u023C\x07"+
		"\x07\x02\x02\u023B\u023A\x03\x02\x02\x02\u023C\u023F\x03\x02\x02\x02\u023D"+
		"\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0240\x03\x02"+
		"\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0241\x07\x10\x02\x02\u0241"+
		"#\x03\x02\x02\x02\u0242\u024B\x05\x12\n\x02\u0243\u024B\x052\x1A\x02\u0244"+
		"\u024B\x05<\x1F\x02\u0245\u024B\x05> \x02\u0246\u024B\x05@!\x02\u0247"+
		"\u024B\x05&\x14\x02\u0248\u024B\x05(\x15\x02\u0249\u024B\x05J&\x02\u024A"+
		"\u0242\x03\x02\x02\x02\u024A\u0243\x03\x02\x02\x02\u024A\u0244\x03\x02"+
		"\x02\x02\u024A\u0245\x03\x02\x02\x02\u024A\u0246\x03\x02\x02\x02\u024A"+
		"\u0247\x03\x02\x02\x02\u024A\u0248\x03\x02\x02\x02\u024A\u0249\x03\x02"+
		"\x02\x02\u024B\u024D\x03\x02\x02\x02\u024C\u024E\x05\u012A\x96\x02\u024D"+
		"\u024C\x03\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024E%\x03\x02\x02"+
		"\x02\u024F\u0253\x07G\x02\x02\u0250\u0252\x07\x07\x02\x02\u0251\u0250"+
		"\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02"+
		"\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255\u0253\x03"+
		"\x02\x02\x02\u0256\u0257\x05h5\x02\u0257\'\x03\x02\x02\x02\u0258\u025A"+
		"\x05\u0104\x83\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A\x03\x02\x02"+
		"\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025F\x07D\x02\x02\u025C\u025E"+
		"\x07\x07\x02\x02\u025D\u025C\x03\x02\x02\x02\u025E\u0261\x03\x02\x02\x02"+
		"\u025F\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260\u0262\x03"+
		"\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0271\x054\x1B\x02\u0263"+
		"\u0265\x07\x07\x02\x02\u0264\u0263\x03\x02\x02\x02\u0265\u0268\x03\x02"+
		"\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267"+
		"\u0269\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02\u0269\u026D\x07\x1B"+
		"\x02\x02\u026A\u026C\x07\x07\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C"+
		"\u026F\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02"+
		"\x02\x02\u026E\u0270\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270"+
		"\u0272\x05*\x16\x02\u0271\u0266\x03\x02\x02\x02\u0271\u0272\x03\x02\x02"+
		"\x02\u0272\u0276\x03\x02\x02\x02\u0273\u0275\x07\x07\x02\x02\u0274\u0273"+
		"\x03\x02\x02\x02\u0275\u0278\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02"+
		"\u0276\u0277\x03\x02\x02\x02\u0277\u0279\x03\x02\x02\x02\u0278\u0276\x03"+
		"\x02\x02\x02\u0279\u027A\x05h5\x02\u027A)\x03\x02\x02\x02\u027B\u027F"+
		"\x07H\x02\x02\u027C\u027E\x07\x07\x02\x02\u027D\u027C\x03\x02\x02\x02"+
		"\u027E\u0281\x03\x02\x02\x02\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03"+
		"\x02\x02\x02\u0280\u0282\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282"+
		"\u028C\x05\xA0Q\x02\u0283\u0287\x07I\x02\x02\u0284\u0286\x07\x07\x02\x02"+
		"\u0285\u0284\x03\x02\x02\x02\u0286\u0289\x03\x02\x02\x02\u0287\u0285\x03"+
		"\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u028A\x03\x02\x02\x02\u0289"+
		"\u0287\x03\x02\x02\x02\u028A\u028C\x05\xA0Q\x02\u028B\u027B\x03\x02\x02"+
		"\x02\u028B\u0283\x03\x02\x02\x02\u028C+\x03\x02\x02\x02\u028D\u0291\x07"+
		"\x0F\x02\x02\u028E\u0290\x07\x07\x02\x02\u028F\u028E\x03\x02\x02\x02\u0290"+
		"\u0293\x03\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02"+
		"\x02\x02\u0292\u0295\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294"+
		"\u0296\x05.\x18\x02\u0295\u0294\x03\x02\x02\x02\u0295\u0296\x03\x02\x02"+
		"\x02\u0296\u02AA\x03\x02\x02\x02\u0297\u0299\x07\x07\x02\x02\u0298\u0297"+
		"\x03\x02\x02\x02\u0299\u029C\x03\x02\x02\x02\u029A\u0298\x03\x02\x02\x02"+
		"\u029A\u029B\x03\x02\x02\x02\u029B\u029D";
	private static readonly _serializedATNSegment2: string =
		"\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029D\u02A1\x07\x1C\x02\x02"+
		"\u029E\u02A0\x07\x07\x02\x02\u029F\u029E\x03\x02\x02\x02\u02A0\u02A3\x03"+
		"\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2"+
		"\u02A7\x03\x02\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A6\x05$\x13"+
		"\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A9\x03\x02\x02\x02\u02A7\u02A5"+
		"\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02"+
		"\u02A9\u02A7\x03\x02\x02\x02\u02AA\u029A\x03\x02\x02\x02\u02AA\u02AB\x03"+
		"\x02\x02\x02\u02AB\u02AF\x03\x02\x02\x02\u02AC\u02AE\x07\x07\x02\x02\u02AD"+
		"\u02AC\x03\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02"+
		"\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B2\x03\x02\x02\x02\u02B1"+
		"\u02AF\x03\x02\x02\x02\u02B2\u02B3\x07\x10\x02\x02\u02B3-\x03\x02\x02"+
		"\x02\u02B4\u02B8\x050\x19\x02\u02B5\u02B7\x07\x07\x02\x02\u02B6\u02B5"+
		"\x03\x02\x02\x02\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02"+
		"\u02B8\u02B9\x03\x02\x02\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03"+
		"\x02\x02\x02\u02BB\u02B4\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BD"+
		"\u02BB\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C0\x03\x02"+
		"\x02\x02\u02BF\u02C1\x07\x1C\x02\x02\u02C0\u02BF\x03\x02\x02\x02\u02C0"+
		"\u02C1\x03\x02\x02\x02\u02C1/\x03\x02\x02\x02\u02C2\u02CA\x05\u0128\x95"+
		"\x02\u02C3\u02C5\x07\x07\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C5\u02C8"+
		"\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02"+
		"\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02C6\x03\x02\x02\x02\u02C9\u02CB\x05"+
		"\xA0Q\x02\u02CA\u02C6\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB"+
		"\u02D3\x03\x02\x02\x02\u02CC\u02CE\x07\x07\x02\x02\u02CD\u02CC\x03\x02"+
		"\x02\x02\u02CE\u02D1\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF"+
		"\u02D0\x03\x02\x02\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1\u02CF\x03\x02"+
		"\x02\x02\u02D2\u02D4\x05\"\x12\x02\u02D3\u02CF\x03\x02\x02\x02\u02D3\u02D4"+
		"\x03\x02\x02\x02\u02D4\u02DC\x03\x02\x02\x02\u02D5\u02D7\x07\x07\x02\x02"+
		"\u02D6\u02D5\x03\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03"+
		"\x02\x02\x02\u02D8\u02D9\x03\x02\x02\x02\u02D9\u02DB\x03\x02\x02\x02\u02DA"+
		"\u02D8\x03\x02\x02\x02\u02DB\u02DD\x07\n\x02\x02\u02DC\u02D8\x03\x02\x02"+
		"\x02\u02DC\u02DD\x03\x02\x02\x02\u02DD1\x03\x02\x02\x02\u02DE\u02E0\x05"+
		"\u0104\x83\x02\u02DF\u02DE\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02"+
		"\u02E0\u02E1\x03\x02\x02\x02\u02E1\u02F1\x07?\x02\x02\u02E2\u02E4\x07"+
		"\x07\x02\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5"+
		"\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02"+
		"\x02\x02\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EC\x05P)\x02\u02E9\u02EB"+
		"\x07\x07\x02\x02\u02EA\u02E9\x03\x02\x02\x02\u02EB\u02EE\x03\x02\x02\x02"+
		"\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EF\x03"+
		"\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EF\u02F0\x07\t\x02\x02\u02F0"+
		"\u02F2\x03\x02\x02\x02\u02F1\u02E5\x03\x02\x02\x02\u02F1\u02F2\x03\x02"+
		"\x02\x02\u02F2\u02FA\x03\x02\x02\x02\u02F3\u02F5\x07\x07\x02\x02\u02F4"+
		"\u02F3\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02"+
		"\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F9\x03\x02\x02\x02\u02F8"+
		"\u02F6\x03\x02\x02\x02\u02F9\u02FB\x05L\'\x02\u02FA\u02F6\x03\x02\x02"+
		"\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u0303\x03\x02\x02\x02\u02FC\u02FE"+
		"\x07\x07\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FE\u0301\x03\x02\x02\x02"+
		"\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u0302\x03"+
		"\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0302\u0304\x05\u0126\x94\x02"+
		"\u0303\u02FF\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u0308\x03"+
		"\x02\x02\x02\u0305\u0307\x07\x07\x02\x02\u0306\u0305\x03\x02\x02\x02\u0307"+
		"\u030A\x03\x02\x02\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02"+
		"\x02\x02\u0309\u030B\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B"+
		"\u031A\x054\x1B\x02\u030C\u030E\x07\x07\x02\x02\u030D\u030C\x03\x02\x02"+
		"\x02\u030E\u0311\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310"+
		"\x03\x02\x02\x02\u0310\u0312\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02"+
		"\u0312\u0316\x07\x1B\x02\x02\u0313\u0315\x07\x07\x02\x02\u0314\u0313\x03"+
		"\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02\x02\x02\u0316"+
		"\u0317\x03\x02\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u0316\x03\x02"+
		"\x02\x02\u0319\u031B\x05P)\x02\u031A\u030F\x03\x02\x02\x02\u031A\u031B"+
		"\x03\x02\x02\x02\u031B\u0323\x03\x02\x02\x02\u031C\u031E\x07\x07\x02\x02"+
		"\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F\u031D\x03"+
		"\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02\x02\x02\u0321"+
		"\u031F\x03\x02\x02\x02\u0322\u0324\x05d3\x02\u0323\u031F\x03\x02\x02\x02"+
		"\u0323\u0324\x03\x02\x02\x02\u0324\u032C\x03\x02\x02\x02\u0325\u0327\x07"+
		"\x07\x02\x02\u0326\u0325\x03\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328"+
		"\u0326\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032B\x03\x02"+
		"\x02\x02\u032A\u0328\x03\x02\x02\x02\u032B\u032D\x05:\x1E\x02\u032C\u0328"+
		"\x03\x02\x02\x02\u032C\u032D\x03\x02\x02\x02\u032D3\x03\x02\x02\x02\u032E"+
		"\u0337\x07\v\x02\x02\u032F\u0334\x056\x1C\x02\u0330\u0331\x07\n\x02\x02"+
		"\u0331\u0333\x056\x1C\x02\u0332\u0330\x03\x02\x02\x02\u0333\u0336\x03"+
		"\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335"+
		"\u0338\x03\x02\x02\x02\u0336\u0334\x03\x02\x02\x02\u0337\u032F\x03\x02"+
		"\x02\x02\u0337\u0338\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339"+
		"\u033A\x07\f\x02\x02\u033A5\x03\x02\x02\x02\u033B\u033D\x05\u0104\x83"+
		"\x02\u033C\u033B\x03\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033E"+
		"\x03\x02\x02\x02\u033E\u0341\x058\x1D\x02\u033F\u0340\x07\x1D\x02\x02"+
		"\u0340\u0342\x05r:\x02\u0341\u033F\x03\x02\x02\x02\u0341\u0342\x03\x02"+
		"\x02\x02\u03427\x03\x02\x02\x02\u0343\u0344\x05\u0128\x95\x02\u0344\u0345"+
		"\x07\x1B\x02\x02\u0345\u0346\x05P)\x02\u03469\x03\x02\x02\x02\u0347\u0351"+
		"\x05h5\x02\u0348\u034C\x07\x1D\x02\x02\u0349\u034B\x07\x07\x02\x02\u034A"+
		"\u0349\x03\x02\x02\x02\u034B\u034E\x03\x02\x02\x02\u034C\u034A\x03\x02"+
		"\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034F\x03\x02\x02\x02\u034E"+
		"\u034C\x03\x02\x02\x02\u034F\u0351\x05r:\x02\u0350\u0347\x03\x02\x02\x02"+
		"\u0350\u0348\x03\x02\x02\x02\u0351;\x03\x02\x02\x02\u0352\u0354\x05\u0104"+
		"\x83\x02\u0353\u0352\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354"+
		"\u0355\x03\x02\x02\x02\u0355\u0359\x07@\x02\x02\u0356\u0358\x07\x07\x02"+
		"\x02\u0357\u0356\x03\x02\x02\x02\u0358\u035B\x03\x02\x02\x02\u0359\u0357"+
		"\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035C\x03\x02\x02\x02"+
		"\u035B\u0359\x03\x02\x02\x02\u035C\u0364\x05\u0128\x95\x02\u035D\u035F"+
		"\x07\x07\x02\x02\u035E\u035D\x03\x02\x02\x02\u035F\u0362\x03\x02\x02\x02"+
		"\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0363\x03"+
		"\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363\u0365\x05\x14\v\x02\u0364"+
		"\u0360\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365\u0374\x03\x02"+
		"\x02\x02\u0366\u0368\x07\x07\x02\x02\u0367\u0366\x03\x02\x02\x02\u0368"+
		"\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u0369\u036A\x03\x02"+
		"\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036C"+
		"\u0370\x07\x1B\x02\x02\u036D\u036F\x07\x07\x02\x02\u036E\u036D\x03\x02"+
		"\x02\x02\u036F\u0372\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370"+
		"\u0371\x03\x02\x02\x02\u0371\u0373\x03\x02\x02\x02\u0372\u0370\x03\x02"+
		"\x02\x02\u0373\u0375\x05\x1A\x0E\x02\u0374\u0369\x03\x02\x02\x02\u0374"+
		"\u0375\x03\x02\x02\x02\u0375\u037D\x03\x02\x02\x02\u0376\u0378\x07\x07"+
		"\x02\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03\x02\x02\x02\u0379"+
		"\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037C\x03\x02"+
		"\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u037E\x05\"\x12\x02\u037D\u0379"+
		"\x03\x02\x02\x02\u037D\u037E\x03\x02\x02\x02\u037E=\x03\x02\x02\x02\u037F"+
		"\u0381\x05\u0104\x83\x02\u0380\u037F\x03\x02\x02\x02\u0380\u0381\x03\x02"+
		"\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\u0386\x07F\x02\x02\u0383\u0385"+
		"\x07\x07\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02"+
		"\u0386\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u038A\x03"+
		"\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0389\u038B\x05\u0104\x83\x02"+
		"\u038A\u0389\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03"+
		"\x02\x02\x02\u038C\u0394\x07@\x02\x02\u038D\u038F\x07\x07\x02\x02\u038E"+
		"\u038D\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02"+
		"\x02\x02\u0390\u0391\x03\x02\x02\x02\u0391\u0393\x03\x02\x02\x02\u0392"+
		"\u0390\x03\x02\x02\x02\u0393\u0395\x05\u0128\x95\x02\u0394\u0390\x03\x02"+
		"\x02\x02\u0394\u0395\x03\x02\x02\x02\u0395\u03A4\x03\x02\x02\x02\u0396"+
		"\u0398\x07\x07\x02\x02\u0397\u0396\x03\x02\x02\x02\u0398\u039B\x03\x02"+
		"\x02\x02\u0399\u0397\x03\x02\x02\x02\u0399\u039A\x03\x02\x02\x02\u039A"+
		"\u039C\x03\x02\x02\x02\u039B\u0399\x03\x02\x02\x02\u039C\u03A0\x07\x1B"+
		"\x02\x02\u039D\u039F\x07\x07\x02\x02\u039E\u039D\x03\x02\x02\x02\u039F"+
		"\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0\u03A1\x03\x02"+
		"\x02\x02\u03A1\u03A3\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A3"+
		"\u03A5\x05\x1A\x0E\x02\u03A4\u0399\x03\x02\x02\x02\u03A4\u03A5\x03\x02"+
		"\x02\x02\u03A5\u03AD\x03\x02\x02\x02\u03A6\u03A8\x07\x07\x02\x02\u03A7"+
		"\u03A6\x03\x02\x02\x02\u03A8\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02"+
		"\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AC\x03\x02\x02\x02\u03AB"+
		"\u03A9\x03\x02\x02\x02\u03AC\u03AE\x05\"\x12\x02\u03AD\u03A9\x03\x02\x02"+
		"\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE?\x03\x02\x02\x02\u03AF\u03B1\x05"+
		"\u0104\x83\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02"+
		"\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03BA\t\x03\x02\x02\u03B3\u03B5\x07"+
		"\x07\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6"+
		"\u03B4\x03\x02\x02\x02\u03B6\u03B7\x03\x02\x02\x02\u03B7\u03B9\x03\x02"+
		"\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B9\u03BB\x05L\'\x02\u03BA\u03B6"+
		"\x03\x02\x02\x02\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03CB\x03\x02\x02\x02"+
		"\u03BC\u03BE\x07\x07\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BE\u03C1\x03"+
		"\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0"+
		"\u03C2\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C6\x05P)\x02"+
		"\u03C3\u03C5\x07\x07\x02\x02\u03C4\u03C3\x03\x02\x02\x02\u03C5\u03C8\x03"+
		"\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7"+
		"\u03C9\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C9\u03CA\x07\t\x02"+
		"\x02\u03CA\u03CC\x03\x02\x02\x02\u03CB\u03BF\x03\x02\x02\x02\u03CB\u03CC"+
		"\x03\x02\x02\x02\u03CC\u03D0\x03\x02\x02\x02\u03CD\u03CF\x07\x07\x02\x02"+
		"\u03CE\u03CD\x03\x02\x02\x02\u03CF\u03D2\x03\x02\x02\x02\u03D0\u03CE\x03"+
		"\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D5\x03\x02\x02\x02\u03D2"+
		"\u03D0\x03\x02\x02\x02\u03D3\u03D6\x05B\"\x02\u03D4\u03D6\x05D#\x02\u03D5"+
		"\u03D3\x03\x02\x02\x02\u03D5\u03D4\x03\x02\x02\x02\u03D6\u03DE\x03\x02"+
		"\x02\x02\u03D7\u03D9\x07\x07\x02\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9"+
		"\u03DC\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02"+
		"\x02\x02\u03DB\u03DD\x03\x02\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD"+
		"\u03DF\x05d3\x02\u03DE\u03DA\x03\x02\x02\x02\u03DE\u03DF\x03\x02\x02\x02"+
		"\u03DF\u03EE\x03\x02\x02\x02\u03E0\u03E2\x07\x07\x02\x02\u03E1\u03E0\x03"+
		"\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02\u03E3"+
		"\u03E4\x03\x02\x02\x02\u03E4\u03E6\x03\x02\x02\x02\u03E5\u03E3\x03\x02"+
		"\x02\x02\u03E6\u03EA\t\x04\x02\x02\u03E7\u03E9\x07\x07\x02\x02\u03E8\u03E7"+
		"\x03\x02\x02\x02\u03E9\u03EC\x03\x02\x02\x02\u03EA\u03E8\x03\x02\x02\x02"+
		"\u03EA\u03EB\x03\x02\x02\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03EA\x03"+
		"\x02\x02\x02\u03ED\u03EF\x05r:\x02\u03EE\u03E3\x03\x02\x02\x02\u03EE\u03EF"+
		"\x03\x02\x02\x02\u03EF\u03F1\x03\x02\x02\x02\u03F0\u03F2\x05\u012A\x96"+
		"\x02\u03F1\u03F0\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02\u03F2\u040B"+
		"\x03\x02\x02\x02\u03F3\u03F5\x05F$\x02\u03F4\u03F3\x03\x02\x02\x02\u03F4"+
		"\u03F5\x03\x02\x02\x02\u03F5\u03FD\x03\x02\x02\x02\u03F6\u03F8\x07\x07"+
		"\x02\x02\u03F7\u03F6\x03\x02\x02\x02\u03F8\u03FB\x03\x02\x02\x02\u03F9"+
		"\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FC\x03\x02"+
		"\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FC\u03FE\x05H%\x02\u03FD\u03F9"+
		"\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u040C\x03\x02\x02\x02"+
		"\u03FF\u0401\x05H%\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401\x03\x02"+
		"\x02\x02\u0401\u0409\x03\x02\x02\x02\u0402\u0404\x07\x07\x02\x02\u0403"+
		"\u0402\x03\x02\x02\x02\u0404\u0407\x03\x02\x02\x02\u0405\u0403\x03\x02"+
		"\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0408\x03\x02\x02\x02\u0407"+
		"\u0405\x03\x02\x02\x02\u0408\u040A\x05F$\x02\u0409\u0405\x03\x02\x02\x02"+
		"\u0409\u040A\x03\x02\x02\x02\u040A\u040C\x03\x02\x02\x02\u040B\u03F4\x03"+
		"\x02\x02\x02\u040B\u0400\x03\x02\x02\x02\u040CA\x03\x02\x02\x02\u040D"+
		"\u040E\x07\v\x02\x02\u040E\u0413\x05D#\x02\u040F\u0410\x07\n\x02\x02\u0410"+
		"\u0412\x05D#\x02\u0411\u040F\x03\x02\x02\x02\u0412\u0415\x03\x02\x02\x02"+
		"\u0413\u0411\x03\x02\x02\x02\u0413\u0414\x03\x02\x02\x02\u0414\u0416\x03"+
		"\x02\x02\x02\u0415\u0413\x03\x02\x02\x02\u0416\u0417\x07\f\x02\x02\u0417"+
		"C\x03\x02\x02\x02\u0418\u041B\x05\u0128\x95\x02\u0419\u041A\x07\x1B\x02"+
		"\x02\u041A\u041C\x05P)\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03"+
		"\x02\x02\x02\u041CE\x03\x02\x02\x02\u041D\u041F\x05\u0104\x83\x02\u041E"+
		"\u041D\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0420\x03\x02"+
		"\x02\x02\u0420\u044F\x07c\x02\x02\u0421\u0423\x05\u0104\x83\x02\u0422"+
		"\u0421\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0424\x03\x02"+
		"\x02\x02\u0424\u0428\x07c\x02\x02\u0425\u0427\x07\x07\x02\x02\u0426\u0425"+
		"\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02"+
		"\u0428\u0429\x03\x02\x02\x02\u0429\u042B\x03\x02\x02\x02\u042A\u0428\x03"+
		"\x02\x02\x02\u042B\u042C\x07\v\x02\x02\u042C\u043B\x07\f\x02\x02\u042D"+
		"\u042F\x07\x07\x02\x02\u042E\u042D\x03\x02\x02\x02\u042F\u0432\x03\x02"+
		"\x02\x02\u0430\u042E\x03\x02\x02\x02\u0430\u0431\x03\x02\x02\x02\u0431"+
		"\u0433\x03\x02\x02\x02\u0432\u0430\x03\x02\x02\x02\u0433\u0437\x07\x1B"+
		"\x02\x02\u0434\u0436\x07\x07\x02\x02\u0435\u0434\x03\x02\x02\x02\u0436"+
		"\u0439\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02"+
		"\x02\x02\u0438\u043A\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u043A"+
		"\u043C\x05P)\x02\u043B\u0430\x03\x02\x02\x02\u043B\u043C\x03\x02\x02\x02"+
		"\u043C\u0440\x03\x02\x02\x02\u043D\u043F\x07\x07\x02\x02\u043E\u043D\x03"+
		"\x02\x02\x02\u043F\u0442\x03\x02\x02\x02\u0440\u043E\x03\x02\x02\x02\u0440"+
		"\u0441\x03\x02\x02\x02\u0441\u044C\x03\x02\x02\x02\u0442\u0440\x03\x02"+
		"\x02\x02\u0443\u044D\x05h5\x02\u0444\u0448\x07\x1D\x02\x02\u0445\u0447"+
		"\x07\x07\x02\x02\u0446\u0445\x03\x02\x02\x02\u0447\u044A\x03\x02\x02\x02"+
		"\u0448\u0446\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044B\x03"+
		"\x02\x02\x02\u044A\u0448\x03\x02\x02\x02\u044B\u044D\x05r:\x02\u044C\u0443"+
		"\x03\x02\x02\x02\u044C\u0444\x03\x02\x02\x02\u044D\u044F\x03\x02\x02\x02"+
		"\u044E\u041E\x03\x02\x02\x02\u044E\u0422\x03\x02\x02\x02\u044FG\x03\x02"+
		"\x02\x02\u0450\u0452\x05\u0104\x83\x02\u0451\u0450\x03\x02\x02\x02\u0451"+
		"\u0452\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0474\x07d\x02"+
		"\x02\u0454\u0456\x05\u0104\x83\x02\u0455\u0454\x03\x02\x02\x02\u0455\u0456"+
		"\x03\x02\x02\x02\u0456\u0457\x03\x02\x02\x02\u0457\u045B\x07d\x02\x02"+
		"\u0458\u045A\x07\x07\x02\x02\u0459\u0458\x03\x02\x02\x02\u045A\u045D\x03"+
		"\x02\x02\x02\u045B\u0459\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C"+
		"\u045E\x03\x02\x02\x02\u045D\u045B\x03\x02\x02\x02\u045E\u0463\x07\v\x02"+
		"\x02\u045F\u0462\x05\u011C\x8F\x02\u0460\u0462\x05\u0116\x8C\x02\u0461"+
		"\u045F\x03\x02\x02\x02\u0461\u0460\x03\x02\x02\x02\u0462\u0465\x03\x02"+
		"\x02\x02\u0463\u0461\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464"+
		"\u0468\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0466\u0469\x05\u0128"+
		"\x95\x02\u0467\u0469\x058\x1D\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0467"+
		"\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046E\x07\f\x02\x02"+
		"\u046B\u046D\x07\x07\x02\x02\u046C\u046B\x03\x02\x02\x02\u046D\u0470\x03"+
		"\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F"+
		"\u0471\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0471\u0472\x05:\x1E"+
		"\x02\u0472\u0474\x03\x02\x02\x02\u0473\u0451\x03\x02\x02\x02\u0473\u0455"+
		"\x03\x02\x02\x02\u0474I\x03\x02\x02\x02\u0475\u0477\x05\u0104\x83\x02"+
		"\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0478\x03"+
		"\x02\x02\x02\u0478\u047C\x07C\x02\x02\u0479\u047B\x07\x07\x02\x02\u047A"+
		"\u0479\x03\x02\x02\x02\u047B\u047E\x03\x02\x02\x02\u047C\u047A\x03\x02"+
		"\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047F\x03\x02\x02\x02\u047E"+
		"\u047C\x03\x02\x02\x02\u047F\u0487\x05\u0128\x95\x02\u0480\u0482\x07\x07"+
		"\x02\x02\u0481\u0480\x03\x02\x02\x02\u0482\u0485\x03\x02\x02\x02\u0483"+
		"\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0486\x03\x02"+
		"\x02\x02\u0485\u0483\x03\x02\x02\x02\u0486\u0488\x05L\'\x02\u0487\u0483"+
		"\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048C\x03\x02\x02\x02"+
		"\u0489\u048B\x07\x07\x02\x02\u048A\u0489\x03\x02\x02\x02\u048B\u048E\x03"+
		"\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D"+
		"\u048F\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048F\u0493\x07\x1D"+
		"\x02\x02\u0490\u0492\x07\x07\x02\x02\u0491\u0490\x03\x02\x02\x02\u0492"+
		"\u0495\x03\x02\x02\x02\u0493\u0491\x03\x02\x02\x02\u0493\u0494\x03\x02"+
		"\x02\x02\u0494\u0496\x03\x02\x02\x02\u0495\u0493\x03\x02\x02\x02\u0496"+
		"\u0497\x05P)\x02\u0497K\x03\x02\x02\x02\u0498\u049C\x07-\x02\x02\u0499"+
		"\u049B\x07\x07\x02\x02\u049A\u0499\x03\x02\x02\x02\u049B\u049E\x03\x02"+
		"\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D"+
		"\u049F\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02\u049F\u04B0\x05N(\x02"+
		"\u04A0\u04A2\x07\x07\x02\x02\u04A1\u04A0\x03\x02\x02\x02\u04A2\u04A5\x03"+
		"\x02\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4"+
		"\u04A6\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A6\u04AA\x07\n\x02"+
		"\x02\u04A7\u04A9\x07\x07\x02\x02\u04A8\u04A7\x03\x02\x02\x02\u04A9\u04AC"+
		"\x03\x02\x02\x02\u04AA\u04A8\x03\x02\x02\x02\u04AA\u04AB\x03\x02\x02\x02"+
		"\u04AB\u04AD\x03\x02\x02\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04AF\x05"+
		"N(\x02\u04AE\u04A3\x03\x02\x02\x02\u04AF\u04B2\x03\x02\x02\x02\u04B0\u04AE"+
		"\x03\x02\x02\x02\u04B0\u04B1\x03\x02\x02\x02\u04B1\u04B6\x03\x02\x02\x02"+
		"\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B5\x07\x07\x02\x02\u04B4\u04B3\x03"+
		"\x02\x02\x02\u04B5\u04B8\x03\x02\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6"+
		"\u04B7\x03\x02\x02\x02\u04B7\u04B9\x03\x02\x02\x02\u04B8\u04B6\x03\x02"+
		"\x02\x02\u04B9\u04BA\x07.\x02\x02\u04BAM\x03\x02\x02\x02\u04BB\u04BD\x05"+
		"\u0104\x83\x02\u04BC\u04BB\x03\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02"+
		"\u04BD\u04C1\x03\x02\x02\x02\u04BE\u04C0\x07\x07\x02\x02\u04BF\u04BE\x03"+
		"\x02\x02\x02\u04C0\u04C3\x03\x02\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C1"+
		"\u04C2\x03\x02\x02\x02\u04C2\u04C4\x03\x02\x02\x02\u04C3\u04C1\x03\x02"+
		"\x02\x02\u04C4\u04D3\x05\u0128\x95\x02\u04C5\u04C7\x07\x07\x02\x02\u04C6"+
		"\u04C5\x03\x02\x02\x02\u04C7\u04CA\x03\x02\x02\x02\u04C8\u04C6\x03\x02"+
		"\x02\x02\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CB\x03\x02\x02\x02\u04CA"+
		"\u04C8\x03\x02\x02\x02\u04CB\u04CF\x07\x1B\x02\x02\u04CC\u04CE\x07\x07"+
		"\x02\x02\u04CD\u04CC\x03\x02\x02\x02\u04CE\u04D1\x03\x02\x02\x02\u04CF"+
		"\u04CD\x03\x02\x02\x02\u04CF\u04D0\x03\x02\x02\x02\u04D0\u04D2\x03\x02"+
		"\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D2\u04D4\x05P)\x02\u04D3\u04C8"+
		"\x03\x02\x02\x02\u04D3\u04D4\x03\x02\x02\x02\u04D4O\x03\x02\x02\x02\u04D5"+
		"\u04D7\x05R*\x02\u04D6\u04D5\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02"+
		"\u04D7\u04DC\x03\x02\x02\x02\u04D8\u04DD\x05T+\x02\u04D9\u04DD\x05V,\x02"+
		"\u04DA\u04DD\x05X-\x02\u04DB\u04DD\x05Z.\x02\u04DC\u04D8\x03\x02\x02\x02"+
		"\u04DC\u04D9\x03\x02\x02\x02\u04DC\u04DA\x03\x02\x02\x02\u04DC\u04DB\x03"+
		"\x02\x02\x02\u04DDQ\x03\x02\x02\x02\u04DE\u04E7\x05\u011C\x8F\x02\u04DF"+
		"\u04E3\x07x\x02\x02\u04E0\u04E2\x07\x07\x02\x02\u04E1\u04E0\x03\x02\x02"+
		"\x02\u04E2\u04E5\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E4"+
		"\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02"+
		"\u04E6\u04DE\x03\x02\x02\x02\u04E6\u04DF\x03\x02\x02\x02\u04E7\u04E8\x03"+
		"\x02\x02\x02\u04E8\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9"+
		"S\x03\x02\x02\x02\u04EA\u04EB\x07\v\x02\x02\u04EB\u04EC\x05P)\x02\u04EC"+
		"\u04ED\x07\f\x02\x02\u04EDU\x03\x02\x02\x02\u04EE\u04F1\x05X-\x02\u04EF"+
		"\u04F1\x05T+\x02\u04F0\u04EE\x03\x02\x02\x02\u04F0\u04EF\x03\x02\x02\x02"+
		"\u04F1\u04F5\x03\x02\x02\x02\u04F2\u04F4\x07\x07\x02\x02\u04F3\u04F2\x03"+
		"\x02\x02\x02\u04F4\u04F7\x03\x02\x02\x02\u04F5\u04F3\x03\x02\x02\x02\u04F5"+
		"\u04F6\x03\x02\x02\x02\u04F6\u04F9\x03\x02\x02\x02\u04F7\u04F5\x03\x02"+
		"\x02\x02\u04F8\u04FA\x07+\x02\x02\u04F9\u04F8\x03\x02\x02\x02\u04FA\u04FB"+
		"\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02"+
		"\u04FCW\x03\x02\x02\x02\u04FD\u04FE\x07\v\x02\x02\u04FE\u04FF\x05X-\x02"+
		"\u04FF\u0500\x07\f\x02\x02\u0500\u0504\x03\x02\x02\x02\u0501\u0504\x05"+
		"^0\x02\u0502\u0504\x07i\x02\x02\u0503\u04FD\x03\x02\x02\x02\u0503\u0501"+
		"\x03\x02\x02\x02\u0503\u0502\x03\x02\x02\x02\u0504Y\x03\x02\x02\x02\u0505"+
		"\u0509\x05\\/\x02\u0506\u0508\x07\x07\x02\x02\u0507\u0506\x03\x02\x02"+
		"\x02\u0508\u050B\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509\u050A"+
		"\x03\x02\x02\x02\u050A\u050C\x03\x02\x02\x02\u050B\u0509\x03\x02\x02\x02"+
		"\u050C\u0510\x07\t\x02\x02\u050D\u050F\x07\x07\x02\x02\u050E\u050D\x03"+
		"\x02\x02\x02\u050F\u0512\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02\u0510"+
		"\u0511\x03\x02\x02\x02\u0511\u0514\x03\x02\x02\x02\u0512\u0510\x03\x02"+
		"\x02\x02\u0513\u0505\x03\x02\x02\x02\u0513\u0514\x03\x02\x02\x02\u0514"+
		"\u0515\x03\x02\x02\x02\u0515\u0519\x05b2\x02\u0516\u0518\x07\x07\x02\x02"+
		"\u0517\u0516\x03\x02\x02\x02\u0518\u051B\x03\x02\x02\x02\u0519\u0517\x03"+
		"\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\u051C\x03\x02\x02\x02\u051B"+
		"\u0519\x03\x02\x02\x02\u051C\u0524\x07#\x02\x02\u051D\u051F\x07\x07\x02"+
		"\x02\u051E\u051D\x03\x02\x02\x02\u051F\u0522\x03\x02\x02\x02\u0520\u051E"+
		"\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\u0523\x03\x02\x02\x02"+
		"\u0522\u0520\x03\x02\x02\x02\u0523\u0525\x05P)\x02\u0524\u0520\x03\x02"+
		"\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525[\x03\x02\x02\x02\u0526\u052A"+
		"\x05T+\x02\u0527\u052A\x05V,\x02\u0528\u052A\x05X-\x02\u0529\u0526\x03"+
		"\x02\x02\x02\u0529\u0527\x03\x02\x02\x02\u0529\u0528\x03\x02\x02\x02\u052A"+
		"]\x03\x02\x02\x02\u052B\u053C\x05`1\x02\u052C\u052E\x07\x07\x02\x02\u052D"+
		"\u052C\x03\x02\x02\x02\u052E\u0531\x03\x02\x02\x02\u052F\u052D\x03\x02"+
		"\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530\u0532\x03\x02\x02\x02\u0531"+
		"\u052F\x03\x02\x02\x02\u0532\u0536\x07\t\x02\x02\u0533\u0535\x07\x07\x02"+
		"\x02\u0534\u0533\x03\x02\x02\x02\u0535\u0538\x03\x02\x02\x02\u0536\u0534"+
		"\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537\u0539\x03\x02\x02\x02"+
		"\u0538\u0536\x03\x02\x02\x02\u0539\u053B\x05`1\x02\u053A\u052F\x03\x02"+
		"\x02\x02\u053B\u053E\x03\x02\x02\x02\u053C\u053A\x03\x02\x02\x02\u053C"+
		"\u053D\x03\x02\x02\x02\u053D_\x03\x02\x02\x02\u053E\u053C\x03\x02\x02"+
		"\x02\u053F\u0547\x05\u0128\x95\x02\u0540\u0542\x07\x07\x02\x02\u0541\u0540"+
		"\x03\x02\x02\x02\u0542\u0545\x03\x02\x02\x02\u0543\u0541\x03\x02\x02\x02"+
		"\u0543\u0544\x03\x02\x02\x02\u0544\u0546\x03\x02\x02\x02\u0545\u0543\x03"+
		"\x02\x02\x02\u0546\u0548\x05\xA2R\x02\u0547\u0543\x03\x02\x02\x02\u0547"+
		"\u0548\x03\x02\x02\x02\u0548a\x03\x02\x02\x02\u0549\u054C\x07\v\x02\x02"+
		"\u054A\u054D\x058\x1D\x02\u054B\u054D\x05P)\x02\u054C\u054A\x03\x02\x02"+
		"\x02\u054C\u054B\x03\x02\x02\x02\u054C\u054D\x03\x02\x02\x02\u054D\u0555"+
		"\x03\x02\x02\x02\u054E\u0551\x07\n\x02\x02\u054F\u0552\x058\x1D\x02\u0550"+
		"\u0552\x05P)\x02\u0551\u054F\x03\x02\x02\x02\u0551\u0550\x03\x02";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\u0552\u0554\x03\x02\x02\x02\u0553\u054E\x03\x02\x02\x02\u0554"+
		"\u0557\x03\x02\x02\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02"+
		"\x02\x02\u0556\u0558\x03\x02\x02\x02\u0557\u0555\x03\x02\x02\x02\u0558"+
		"\u0559\x07\f\x02\x02\u0559c\x03\x02\x02\x02\u055A\u055E\x07K\x02\x02\u055B"+
		"\u055D\x07\x07\x02\x02\u055C\u055B\x03\x02\x02\x02\u055D\u0560\x03\x02"+
		"\x02\x02\u055E\u055C\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F"+
		"\u0561\x03\x02\x02\x02\u0560\u055E\x03\x02\x02\x02\u0561\u0572\x05f4\x02"+
		"\u0562\u0564\x07\x07\x02\x02\u0563\u0562\x03\x02\x02\x02\u0564\u0567\x03"+
		"\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0565\u0566\x03\x02\x02\x02\u0566"+
		"\u0568\x03\x02\x02\x02\u0567\u0565\x03\x02\x02\x02\u0568\u056C\x07\n\x02"+
		"\x02\u0569\u056B\x07\x07\x02\x02\u056A\u0569\x03\x02\x02\x02\u056B\u056E"+
		"\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056C\u056D\x03\x02\x02\x02"+
		"\u056D\u056F\x03\x02\x02\x02\u056E\u056C\x03\x02\x02\x02\u056F\u0571\x05"+
		"f4\x02\u0570\u0565\x03\x02\x02\x02\u0571\u0574\x03\x02\x02\x02\u0572\u0570"+
		"\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02\u0573e\x03\x02\x02\x02\u0574"+
		"\u0572\x03\x02\x02\x02\u0575\u0577\x05\u011C\x8F\x02\u0576\u0575\x03\x02"+
		"\x02\x02\u0577\u057A\x03\x02\x02\x02\u0578\u0576\x03\x02\x02\x02\u0578"+
		"\u0579\x03\x02\x02\x02\u0579\u057B\x03\x02\x02\x02\u057A\u0578\x03\x02"+
		"\x02\x02\u057B\u057F\x05\u0128\x95\x02\u057C\u057E\x07\x07\x02\x02\u057D"+
		"\u057C\x03\x02\x02\x02\u057E\u0581\x03\x02\x02\x02\u057F\u057D\x03\x02"+
		"\x02\x02\u057F\u0580\x03\x02\x02\x02\u0580\u0582\x03\x02\x02\x02\u0581"+
		"\u057F\x03\x02\x02\x02\u0582\u0586\x07\x1B\x02\x02\u0583\u0585\x07\x07"+
		"\x02\x02\u0584\u0583\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586"+
		"\u0584\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x03\x02"+
		"\x02\x02\u0588\u0586\x03\x02\x02\x02\u0589\u058A\x05P)\x02\u058Ag\x03"+
		"\x02\x02\x02\u058B\u058F\x07\x0F\x02\x02\u058C\u058E\x07\x07\x02\x02\u058D"+
		"\u058C\x03\x02\x02\x02\u058E\u0591\x03\x02\x02\x02\u058F\u058D\x03\x02"+
		"\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590\u0597\x03\x02\x02\x02\u0591"+
		"\u058F\x03\x02\x02\x02\u0592\u0593\x05l7\x02\u0593\u0594\x05\u012A\x96"+
		"\x02\u0594\u0596\x03\x02\x02\x02\u0595\u0592\x03\x02\x02\x02\u0596\u0599"+
		"\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02"+
		"\u0598\u059E\x03\x02\x02\x02\u0599\u0597\x03\x02\x02\x02\u059A\u059C\x05"+
		"l7\x02\u059B\u059D\x05\u012A\x96\x02\u059C\u059B\x03\x02\x02\x02\u059C"+
		"\u059D\x03\x02\x02\x02\u059D\u059F\x03\x02\x02\x02\u059E\u059A\x03\x02"+
		"\x02\x02\u059E\u059F\x03\x02\x02\x02\u059F\u05A3\x03\x02\x02\x02\u05A0"+
		"\u05A2\x07\x07\x02\x02\u05A1\u05A0\x03\x02\x02\x02\u05A2\u05A5\x03\x02"+
		"\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A3\u05A4\x03\x02\x02\x02\u05A4"+
		"\u05A6\x03\x02\x02\x02\u05A5\u05A3\x03\x02\x02\x02\u05A6\u05A7\x07\x10"+
		"\x02\x02\u05A7i\x03\x02\x02\x02\u05A8\u05A9\x05l7\x02\u05A9\u05AA\x05"+
		"\u012A\x96\x02\u05AA\u05AC\x03\x02\x02\x02\u05AB\u05A8\x03\x02\x02\x02"+
		"\u05AC\u05AF\x03\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AD\u05AE\x03"+
		"\x02\x02\x02\u05AE\u05B0\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05B0"+
		"\u05B2\x05l7\x02\u05B1\u05B3\x05\u012A\x96\x02\u05B2\u05B1\x03\x02\x02"+
		"\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05AD"+
		"\x03\x02\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5k\x03\x02\x02\x02\u05B6"+
		"\u05BA\x05n8\x02\u05B7\u05BA\x05p9\x02\u05B8\u05BA\x05r:\x02\u05B9\u05B6"+
		"\x03\x02\x02\x02\u05B9\u05B7\x03\x02\x02\x02\u05B9\u05B8\x03\x02\x02\x02"+
		"\u05BAm\x03\x02\x02\x02\u05BB\u05BD\x05\u011A\x8E\x02\u05BC\u05BB\x03"+
		"\x02\x02\x02\u05BD\u05C0\x03\x02\x02\x02\u05BE\u05BC\x03\x02\x02\x02\u05BE"+
		"\u05BF\x03\x02\x02\x02\u05BF\u05C5\x03\x02\x02\x02\u05C0\u05BE\x03\x02"+
		"\x02\x02\u05C1\u05C6\x05\x12\n\x02\u05C2\u05C6\x052\x1A\x02\u05C3\u05C6"+
		"\x05@!\x02\u05C4\u05C6\x05J&\x02\u05C5\u05C1\x03\x02\x02\x02\u05C5\u05C2"+
		"\x03\x02\x02\x02\u05C5\u05C3\x03\x02\x02\x02\u05C5\u05C4\x03\x02\x02\x02"+
		"\u05C6o\x03\x02\x02\x02\u05C7\u05C8\x05\x96L\x02\u05C8\u05CC\x05\xEEx"+
		"\x02\u05C9\u05CB\x07\x07\x02\x02\u05CA\u05C9\x03\x02\x02\x02\u05CB\u05CE"+
		"\x03\x02\x02\x02\u05CC\u05CA\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02"+
		"\u05CD\u05CF\x03\x02\x02\x02\u05CE\u05CC\x03\x02\x02\x02\u05CF\u05D0\x05"+
		"t;\x02\u05D0q\x03\x02\x02\x02\u05D1\u05D2\x05t;\x02\u05D2s\x03\x02\x02"+
		"\x02\u05D3\u05E4\x05v<\x02\u05D4\u05D6\x07\x07\x02\x02\u05D5\u05D4\x03"+
		"\x02\x02\x02\u05D6\u05D9\x03\x02\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7"+
		"\u05D8\x03\x02\x02\x02\u05D8\u05DA\x03\x02\x02\x02\u05D9\u05D7\x03\x02"+
		"\x02\x02\u05DA\u05DE\x07\x19\x02\x02\u05DB\u05DD\x07\x07\x02\x02\u05DC"+
		"\u05DB\x03\x02\x02\x02\u05DD\u05E0\x03\x02\x02\x02\u05DE\u05DC\x03\x02"+
		"\x02\x02\u05DE\u05DF\x03\x02\x02\x02\u05DF\u05E1\x03\x02\x02\x02\u05E0"+
		"\u05DE\x03\x02\x02\x02\u05E1\u05E3\x05v<\x02\u05E2\u05D7\x03\x02\x02\x02"+
		"\u05E3\u05E6\x03\x02\x02\x02\u05E4\u05E2\x03\x02\x02\x02\u05E4\u05E5\x03"+
		"\x02\x02\x02\u05E5u\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E7"+
		"\u05F8\x05x=\x02\u05E8\u05EA\x07\x07\x02\x02\u05E9\u05E8\x03\x02\x02\x02"+
		"\u05EA\u05ED\x03\x02\x02\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB\u05EC\x03"+
		"\x02\x02\x02\u05EC\u05EE\x03\x02\x02\x02\u05ED\u05EB\x03\x02\x02\x02\u05EE"+
		"\u05F2\x07\x18\x02\x02\u05EF\u05F1\x07\x07\x02\x02\u05F0\u05EF\x03\x02"+
		"\x02\x02\u05F1\u05F4\x03\x02\x02\x02\u05F2\u05F0\x03\x02\x02\x02\u05F2"+
		"\u05F3\x03\x02\x02\x02\u05F3\u05F5\x03\x02\x02\x02\u05F4\u05F2\x03\x02"+
		"\x02\x02\u05F5\u05F7\x05x=\x02\u05F6\u05EB\x03\x02\x02\x02\u05F7\u05FA"+
		"\x03\x02\x02\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02"+
		"\u05F9w\x03\x02\x02\x02\u05FA\u05F8\x03\x02\x02\x02\u05FB\u0607\x05z>"+
		"\x02\u05FC\u0600\x05\xF0y\x02\u05FD\u05FF\x07\x07\x02\x02\u05FE\u05FD"+
		"\x03\x02\x02\x02\u05FF\u0602\x03\x02\x02\x02\u0600\u05FE\x03\x02\x02\x02"+
		"\u0600\u0601\x03\x02\x02\x02\u0601\u0603\x03\x02\x02\x02\u0602\u0600\x03"+
		"\x02\x02\x02\u0603\u0604\x05z>\x02\u0604\u0606\x03\x02\x02\x02\u0605\u05FC"+
		"\x03\x02\x02\x02\u0606\u0609\x03\x02\x02\x02\u0607\u0605\x03\x02\x02\x02"+
		"\u0607\u0608\x03\x02\x02\x02\u0608y\x03\x02\x02\x02\u0609\u0607\x03\x02"+
		"\x02\x02\u060A\u0614\x05|?\x02\u060B\u060F\x05\xF2z\x02\u060C\u060E\x07"+
		"\x07\x02\x02\u060D\u060C\x03\x02\x02\x02\u060E\u0611\x03\x02\x02\x02\u060F"+
		"\u060D\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610\u0612\x03\x02"+
		"\x02\x02\u0611\u060F\x03\x02\x02\x02\u0612\u0613\x05|?\x02\u0613\u0615"+
		"\x03\x02\x02\x02\u0614\u060B\x03\x02\x02\x02\u0614\u0615\x03\x02\x02\x02"+
		"\u0615{\x03\x02\x02\x02\u0616\u0622\x05~@\x02\u0617\u061B\x05\xF4{\x02"+
		"\u0618\u061A\x07\x07\x02\x02\u0619\u0618\x03\x02\x02\x02\u061A\u061D\x03"+
		"\x02\x02\x02\u061B\u0619\x03\x02\x02\x02\u061B\u061C\x03\x02\x02\x02\u061C"+
		"\u061E\x03\x02\x02\x02\u061D\u061B\x03\x02\x02\x02\u061E\u061F\x05~@\x02"+
		"\u061F\u0621\x03\x02\x02\x02\u0620\u0617\x03\x02\x02\x02\u0621\u0624\x03"+
		"\x02\x02\x02\u0622\u0620\x03\x02\x02\x02\u0622\u0623\x03\x02\x02\x02\u0623"+
		"\u0632\x03\x02\x02\x02\u0624\u0622\x03\x02\x02\x02\u0625\u062F\x05~@\x02"+
		"\u0626\u062A\x05\xF6|\x02\u0627\u0629\x07\x07\x02\x02\u0628\u0627\x03"+
		"\x02\x02\x02\u0629\u062C\x03\x02\x02\x02\u062A\u0628\x03\x02\x02\x02\u062A"+
		"\u062B\x03\x02\x02\x02\u062B\u062D\x03\x02\x02\x02\u062C\u062A\x03\x02"+
		"\x02\x02\u062D\u062E\x05P)\x02\u062E\u0630\x03\x02\x02\x02\u062F\u0626"+
		"\x03\x02\x02\x02\u062F\u0630\x03\x02\x02\x02\u0630\u0632\x03\x02\x02\x02"+
		"\u0631\u0616\x03\x02\x02\x02\u0631\u0625\x03\x02\x02\x02\u0632}\x03\x02"+
		"\x02\x02\u0633\u0644\x05\x80A\x02\u0634\u0636\x07\x07\x02\x02\u0635\u0634"+
		"\x03\x02\x02\x02\u0636\u0639\x03\x02\x02\x02\u0637\u0635\x03\x02\x02\x02"+
		"\u0637\u0638\x03\x02\x02\x02\u0638\u063A\x03\x02\x02\x02\u0639\u0637\x03"+
		"\x02\x02\x02\u063A\u063E\x07,\x02\x02\u063B\u063D\x07\x07\x02\x02\u063C"+
		"\u063B\x03\x02\x02\x02\u063D\u0640\x03\x02\x02\x02\u063E\u063C\x03\x02"+
		"\x02\x02\u063E\u063F\x03\x02\x02\x02\u063F\u0641\x03\x02\x02\x02\u0640"+
		"\u063E\x03\x02\x02\x02\u0641\u0643\x05\x80A\x02\u0642\u0637\x03\x02\x02"+
		"\x02\u0643\u0646\x03\x02\x02\x02\u0644\u0642\x03\x02\x02\x02\u0644\u0645"+
		"\x03\x02\x02\x02\u0645\x7F\x03\x02\x02\x02\u0646\u0644\x03\x02\x02\x02"+
		"\u0647\u0653\x05\x82B\x02\u0648\u064C\x05\u0128\x95\x02\u0649\u064B\x07"+
		"\x07\x02\x02\u064A\u0649\x03\x02\x02\x02\u064B\u064E\x03\x02\x02\x02\u064C"+
		"\u064A\x03\x02\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u064F\x03\x02"+
		"\x02\x02\u064E\u064C\x03\x02\x02\x02\u064F\u0650\x05\x82B\x02\u0650\u0652"+
		"\x03\x02\x02\x02\u0651\u0648\x03\x02\x02\x02\u0652\u0655\x03\x02\x02\x02"+
		"\u0653\u0651\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654\x81\x03"+
		"\x02\x02\x02\u0655\u0653\x03\x02\x02\x02\u0656\u0661\x05\x84C\x02\u0657"+
		"\u065B\x07%\x02\x02\u0658\u065A\x07\x07\x02\x02\u0659\u0658\x03\x02\x02"+
		"\x02\u065A\u065D\x03\x02\x02\x02\u065B\u0659\x03\x02\x02\x02\u065B\u065C"+
		"\x03\x02\x02\x02\u065C\u065E\x03\x02\x02\x02\u065D\u065B\x03\x02\x02\x02"+
		"\u065E\u0660\x05\x84C\x02\u065F\u0657\x03\x02\x02\x02\u0660\u0663\x03"+
		"\x02\x02\x02\u0661\u065F\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662"+
		"\x83\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02\u0664\u0670\x05\x86D"+
		"\x02\u0665\u0669\x05\xF8}\x02\u0666\u0668\x07\x07\x02\x02\u0667\u0666"+
		"\x03\x02\x02\x02\u0668\u066B\x03\x02\x02\x02\u0669\u0667\x03\x02\x02\x02"+
		"\u0669\u066A\x03\x02\x02\x02\u066A\u066C\x03\x02\x02\x02\u066B\u0669\x03"+
		"\x02\x02\x02\u066C\u066D\x05\x86D\x02\u066D\u066F\x03\x02\x02\x02\u066E"+
		"\u0665\x03\x02\x02\x02\u066F\u0672\x03\x02\x02\x02\u0670\u066E\x03\x02"+
		"\x02\x02\u0670\u0671\x03\x02\x02\x02\u0671\x85\x03\x02\x02\x02\u0672\u0670"+
		"\x03\x02\x02\x02\u0673\u067F\x05\x88E\x02\u0674\u0678\x05\xFA~\x02\u0675"+
		"\u0677\x07\x07\x02\x02\u0676\u0675\x03\x02\x02\x02\u0677\u067A\x03\x02"+
		"\x02\x02\u0678\u0676\x03\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679"+
		"\u067B\x03\x02\x02\x02\u067A\u0678\x03\x02\x02\x02\u067B\u067C\x05\x88"+
		"E\x02\u067C\u067E\x03\x02\x02\x02\u067D\u0674\x03\x02\x02\x02\u067E\u0681"+
		"\x03\x02\x02\x02\u067F\u067D\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02"+
		"\u0680\x87\x03\x02\x02\x02\u0681\u067F\x03\x02\x02\x02\u0682\u0684\x05"+
		"\x8CG\x02\u0683\u0685\x05\x8AF\x02\u0684\u0683\x03\x02\x02\x02\u0684\u0685"+
		"\x03\x02\x02\x02\u0685\x89\x03\x02\x02\x02\u0686\u0688\x07\x07\x02\x02"+
		"\u0687\u0686\x03\x02\x02\x02\u0688\u068B\x03\x02\x02\x02\u0689\u0687\x03"+
		"\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068C\x03\x02\x02\x02\u068B"+
		"\u0689\x03\x02\x02\x02\u068C\u0690\x05\xFC\x7F\x02\u068D\u068F\x07\x07"+
		"\x02\x02\u068E\u068D\x03\x02\x02\x02\u068F\u0692\x03\x02\x02\x02\u0690"+
		"\u068E\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0693\x03\x02"+
		"\x02\x02\u0692\u0690\x03\x02\x02\x02\u0693\u0695\x05P)\x02\u0694\u0696"+
		"\x05\x8AF\x02\u0695\u0694\x03\x02\x02\x02\u0695\u0696\x03\x02\x02\x02"+
		"\u0696\x8B\x03\x02\x02\x02\u0697\u0699\x05\xFE\x80\x02\u0698\u0697\x03"+
		"\x02\x02\x02\u0699\u069C\x03\x02\x02\x02\u069A\u0698\x03\x02\x02\x02\u069A"+
		"\u069B\x03\x02\x02\x02\u069B\u069D\x03\x02\x02\x02\u069C\u069A\x03\x02"+
		"\x02\x02\u069D\u06A6\x05\x8EH\x02\u069E\u06A0\x05\u011C\x8F\x02\u069F"+
		"\u069E\x03\x02\x02\x02\u06A0\u06A3\x03\x02\x02\x02\u06A1\u069F\x03\x02"+
		"\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A4\x03\x02\x02\x02\u06A3"+
		"\u06A1\x03\x02\x02\x02\u06A4\u06A6\x05\x8EH\x02\u06A5\u069A\x03\x02\x02"+
		"\x02\u06A5\u06A1\x03\x02\x02\x02\u06A6\x8D\x03\x02\x02\x02\u06A7\u06BC"+
		"\x05\x96L\x02\u06A8\u06BC\x05\x90I\x02\u06A9\u06BC\x05\x92J\x02\u06AA"+
		"\u06BC\x05\x94K\x02\u06AB\u06AF\x05\x96L\x02\u06AC\u06AE\x05\u0100\x81"+
		"\x02\u06AD\u06AC\x03\x02\x02\x02\u06AE\u06B1\x03\x02\x02\x02\u06AF\u06AD"+
		"\x03\x02\x02\x02\u06AF\u06B0\x03\x02\x02\x02\u06B0\u06BC\x03\x02\x02\x02"+
		"\u06B1\u06AF\x03\x02\x02\x02\u06B2\u06B3\x07\v\x02\x02\u06B3\u06B4\x05"+
		"\xECw\x02\u06B4\u06B6\x07\f\x02\x02\u06B5\u06B7\x05\u0100\x81\x02\u06B6"+
		"\u06B5\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02\u06B8\u06B6\x03\x02"+
		"\x02\x02\u06B8\u06B9\x03\x02\x02\x02\u06B9\u06BC\x03\x02\x02\x02\u06BA"+
		"\u06BC\x05\xECw\x02\u06BB\u06A7\x03\x02\x02\x02\u06BB\u06A8\x03\x02\x02"+
		"\x02\u06BB\u06A9\x03\x02\x02\x02\u06BB\u06AA\x03\x02\x02\x02\u06BB\u06AB"+
		"\x03\x02\x02\x02\u06BB\u06B2\x03\x02\x02\x02\u06BB\u06BA\x03\x02\x02\x02"+
		"\u06BC\x8F\x03\x02\x02\x02\u06BD\u06BF\x05\x96L\x02\u06BE\u06C0\x05\xA2"+
		"R\x02\u06BF\u06BE\x03\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06C2"+
		"\x03\x02\x02\x02\u06C1\u06C3\x05\xA0Q\x02\u06C2\u06C1\x03\x02\x02\x02"+
		"\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C7\x03\x02\x02\x02\u06C4\u06C6\x05"+
		"\x9CO\x02\u06C5\u06C4\x03\x02\x02\x02\u06C6\u06C9\x03\x02\x02\x02\u06C7"+
		"\u06C5\x03\x02\x02\x02\u06C7\u06C8\x03\x02\x02\x02\u06C8\x91\x03\x02\x02"+
		"\x02\u06C9\u06C7\x03\x02\x02\x02\u06CA\u06CB\x05\u011A\x8E\x02\u06CB\u06CC"+
		"\x05\x8EH\x02\u06CC\x93\x03\x02\x02\x02\u06CD\u06D7\x05\x96L\x02\u06CE"+
		"\u06D0\x07\x07\x02\x02\u06CF\u06CE\x03\x02\x02\x02\u06D0\u06D3\x03\x02"+
		"\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2"+
		"\u06D4\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D4\u06D5\x05\u0102"+
		"\x82\x02\u06D5\u06D6\x05\x8EH\x02\u06D6\u06D8\x03\x02\x02\x02\u06D7\u06D1"+
		"\x03\x02\x02\x02\u06D8\u06D9\x03\x02\x02\x02\u06D9\u06D7\x03\x02\x02\x02"+
		"\u06D9\u06DA\x03\x02\x02\x02\u06DA\x95\x03\x02\x02\x02\u06DB\u06DE\x05"+
		"\xAAV\x02\u06DC\u06DE\x05\x98M\x02\u06DD\u06DB\x03\x02\x02\x02\u06DD\u06DC"+
		"\x03\x02\x02\x02\u06DE\x97\x03\x02\x02\x02\u06DF\u06E1\x05\u0126\x94\x02"+
		"\u06E0\u06E2\x05\x9EP\x02\u06E1\u06E0\x03\x02\x02\x02\u06E2\u06E3\x03"+
		"\x02\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4"+
		"\x99\x03\x02\x02\x02\u06E5\u06E7\x05\xA2R\x02\u06E6\u06E5\x03\x02\x02"+
		"\x02\u06E6\u06E7\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06EC"+
		"\x05\xA0Q\x02\u06E9\u06EB\x05\x9CO\x02\u06EA\u06E9\x03\x02\x02\x02\u06EB"+
		"\u06EE\x03\x02\x02\x02\u06EC\u06EA\x03\x02\x02\x02\u06EC\u06ED\x03\x02"+
		"\x02\x02\u06ED\u06F7\x03\x02\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EF"+
		"\u06F3\x05\xA2R\x02\u06F0\u06F2\x05\x9CO\x02\u06F1\u06F0\x03\x02\x02\x02"+
		"\u06F2\u06F5\x03\x02\x02\x02\u06F3\u06F1\x03\x02\x02\x02\u06F3\u06F4\x03"+
		"\x02\x02\x02\u06F4\u06F7\x03\x02\x02\x02\u06F5\u06F3\x03\x02\x02\x02\u06F6"+
		"\u06E6\x03\x02\x02\x02\u06F6\u06EF\x03\x02\x02\x02\u06F7\x9B\x03\x02\x02"+
		"\x02\u06F8\u06FA\x05\u0124\x93\x02\u06F9\u06F8\x03\x02\x02\x02\u06FA\u06FD"+
		"\x03\x02\x02\x02\u06FB\u06F9\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02"+
		"\u06FC\u06FF\x03\x02\x02\x02\u06FD\u06FB\x03\x02\x02\x02\u06FE\u0700\x07"+
		"\x90\x02\x02\u06FF\u06FE\x03\x02\x02\x02\u06FF\u0700\x03\x02\x02\x02\u0700"+
		"\u0704\x03\x02\x02\x02\u0701\u0703\x07\x07\x02\x02\u0702\u0701\x03\x02"+
		"\x02\x02\u0703\u0706\x03\x02\x02\x02\u0704\u0702\x03\x02\x02\x02\u0704"+
		"\u0705\x03\x02\x02\x02\u0705\u0707\x03\x02\x02\x02\u0706\u0704\x03\x02"+
		"\x02\x02\u0707\u0708\x05\xBE`\x02\u0708\x9D\x03\x02\x02\x02\u0709\u0712"+
		"\x07\r\x02\x02\u070A\u070F\x05r:\x02\u070B\u070C\x07\n\x02\x02\u070C\u070E"+
		"\x05r:\x02\u070D\u070B\x03\x02\x02\x02\u070E\u0711\x03\x02\x02\x02\u070F"+
		"\u070D\x03\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710\u0713\x03\x02"+
		"\x02\x02\u0711\u070F\x03\x02\x02\x02\u0712\u070A\x03\x02\x02\x02\u0712"+
		"\u0713\x03\x02\x02\x02\u0713\u0714\x03\x02\x02\x02\u0714\u0715\x07\x0E"+
		"\x02\x02\u0715\x9F\x03\x02\x02\x02\u0716\u0718\x07\v\x02\x02\u0717\u0719"+
		"\x05\xA8U\x02\u0718\u0717\x03\x02\x02\x02\u0718\u0719\x03\x02\x02\x02"+
		"\u0719\u071A\x03\x02\x02\x02\u071A\u0727\x07\f\x02\x02\u071B\u071C\x07"+
		"\v\x02\x02\u071C\u0721\x05\xA8U\x02\u071D\u071E\x07\n\x02\x02\u071E\u0720"+
		"\x05\xA8U\x02\u071F\u071D\x03\x02\x02\x02\u0720\u0723\x03\x02\x02\x02"+
		"\u0721\u071F\x03\x02\x02\x02\u0721\u0722\x03\x02\x02\x02\u0722\u0724\x03"+
		"\x02\x02\x02\u0723\u0721\x03\x02\x02\x02\u0724\u0725\x07\f\x02\x02\u0725"+
		"\u0727\x03\x02\x02\x02\u0726\u0716\x03\x02\x02\x02\u0726\u071B\x03\x02"+
		"\x02\x02\u0727\xA1\x03\x02\x02\x02\u0728\u072C\x07-\x02\x02\u0729\u072B"+
		"\x07\x07\x02\x02\u072A\u0729\x03\x02\x02\x02\u072B\u072E\x03\x02\x02\x02"+
		"\u072C\u072A\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D\u072F\x03"+
		"\x02\x02\x02\u072E\u072C\x03\x02\x02\x02\u072F\u073A\x05\xA4S\x02\u0730"+
		"\u0732\x07\x07\x02\x02\u0731\u0730\x03\x02\x02\x02\u0732\u0735\x03\x02"+
		"\x02\x02\u0733\u0731\x03\x02\x02\x02\u0733\u0734\x03\x02\x02\x02\u0734"+
		"\u0736\x03\x02\x02\x02\u0735\u0733\x03\x02\x02\x02\u0736\u0737\x07\n\x02"+
		"\x02\u0737\u0739\x05\xA4S\x02\u0738\u0733\x03\x02\x02\x02\u0739\u073C"+
		"\x03\x02\x02\x02\u073A\u0738\x03\x02\x02\x02\u073A\u073B\x03\x02\x02\x02"+
		"\u073B\u0740\x03\x02\x02\x02\u073C\u073A\x03\x02\x02\x02\u073D\u073F\x07"+
		"\x07\x02\x02\u073E\u073D\x03\x02\x02\x02\u073F\u0742\x03\x02\x02\x02\u0740"+
		"\u073E\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u0743\x03\x02"+
		"\x02\x02\u0742\u0740\x03\x02\x02\x02\u0743\u0744\x07.\x02\x02\u0744\xA3"+
		"\x03\x02\x02\x02\u0745\u0747\x05\xA6T\x02\u0746\u0745\x03\x02\x02\x02"+
		"\u0746\u0747\x03\x02\x02\x02\u0747\u0748\x03\x02\x02\x02\u0748\u074B\x05"+
		"P)\x02\u0749\u074B\x07\x11\x02\x02\u074A\u0746\x03\x02\x02\x02\u074A\u0749"+
		"\x03\x02\x02\x02\u074B\xA5\x03\x02\x02\x02\u074C\u074E\x05\u010E\x88\x02"+
		"\u074D\u074C\x03\x02\x02\x02\u074E\u074F\x03\x02\x02\x02\u074F\u074D\x03"+
		"\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\xA7\x03\x02\x02\x02\u0751"+
		"\u0755\x05\u0128\x95\x02\u0752\u0754\x07\x07\x02\x02\u0753\u0752\x03\x02"+
		"\x02\x02\u0754\u0757\x03\x02\x02\x02\u0755\u0753\x03\x02\x02\x02\u0755"+
		"\u0756\x03\x02\x02\x02\u0756\u0758\x03\x02\x02\x02\u0757\u0755\x03\x02"+
		"\x02\x02\u0758\u075C\x07\x1D\x02\x02\u0759\u075B\x07\x07\x02\x02\u075A"+
		"\u0759\x03\x02\x02\x02\u075B\u075E\x03\x02\x02\x02\u075C\u075A\x03\x02"+
		"\x02\x02\u075C\u075D\x03\x02\x02\x02\u075D\u0760\x03\x02\x02\x02\u075E"+
		"\u075C\x03\x02\x02\x02\u075F\u0751\x03\x02\x02\x02\u075F\u0760\x03\x02"+
		"\x02\x02\u0760\u0762\x03\x02\x02\x02\u0761\u0763\x07\x11\x02\x02\u0762"+
		"\u0761\x03\x02\x02\x02\u0762\u0763\x03\x02\x02\x02\u0763\u0767\x03\x02"+
		"\x02\x02\u0764\u0766\x07\x07\x02\x02\u0765\u0764\x03\x02\x02\x02\u0766"+
		"\u0769\x03\x02\x02\x02\u0767\u0765\x03\x02\x02\x02\u0767\u0768\x03\x02"+
		"\x02\x02\u0768\u076A\x03\x02\x02\x02\u0769\u0767\x03\x02\x02\x02\u076A"+
		"\u076B\x05r:\x02\u076B\xA9\x03\x02\x02\x02\u076C\u077A\x05\xACW\x02\u076D"+
		"\u077A\x05\xAEX\x02\u076E\u077A\x05\xB0Y\x02\u076F\u077A\x05\u0128\x95"+
		"\x02\u0770\u077A\x05\xBE`\x02\u0771\u077A\x05\xC4c\x02\u0772\u077A\x05"+
		"\xC6d\x02\u0773\u077A\x05\xC8e\x02\u0774\u077A\x05\xCAf\x02\u0775\u077A"+
		"\x05\xCCg\x02\u0776\u077A\x05\xDCo\x02\u0777\u077A\x05\xE2r\x02\u0778"+
		"\u077A\x05\xEAv\x02\u0779\u076C\x03\x02\x02\x02\u0779\u076D\x03\x02\x02"+
		"\x02\u0779\u076E\x03\x02\x02\x02\u0779\u076F\x03\x02\x02\x02\u0779\u0770"+
		"\x03\x02\x02\x02\u0779\u0771\x03\x02\x02\x02\u0779\u0772\x03\x02\x02\x02"+
		"\u0779\u0773\x03\x02\x02\x02\u0779\u0774\x03\x02\x02\x02\u0779\u0775\x03"+
		"\x02\x02\x02\u0779\u0776\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779"+
		"\u0778\x03\x02\x02\x02\u077A\xAB\x03\x02\x02\x02\u077B\u077C\x07\v\x02"+
		"\x02\u077C\u077D\x05r:\x02\u077D\u077E\x07\f\x02\x02\u077E\xAD\x03\x02"+
		"\x02\x02\u077F\u0780\t\x05\x02\x02\u0780\xAF\x03\x02\x02\x02\u0781\u0784"+
		"\x05\xB2Z\x02\u0782\u0784\x05\xB4[\x02\u0783\u0781\x03\x02\x02\x02\u0783"+
		"\u0782\x03\x02\x02\x02\u0784\xB1\x03\x02\x02\x02\u0785\u078A\x07\x83\x02"+
		"\x02\u0786\u0789\x05\xB6\\\x02\u0787\u0789\x05\xB8]\x02\u0788\u0786\x03"+
		"\x02\x02\x02\u0788\u0787\x03\x02\x02\x02\u0789\u078C\x03\x02\x02\x02\u078A"+
		"\u0788\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B\u078D\x03\x02"+
		"\x02\x02\u078C\u078A\x03\x02\x02\x02\u078D\u078E\x07\x9D\x02\x02\u078E"+
		"\xB3\x03\x02\x02\x02\u078F\u0796\x07\x84\x02\x02\u0790\u0795\x05\xBA^"+
		"\x02\u0791\u0795\x05\xBC_\x02\u0792\u0795\x05\xB2Z\x02\u0793\u0795\x07"+
		"\xA3\x02\x02\u0794\u0790\x03\x02\x02\x02\u0794\u0791\x03\x02\x02\x02\u0794"+
		"\u0792\x03\x02\x02\x02\u0794\u0793\x03\x02\x02\x02\u0795\u0798\x03\x02"+
		"\x02\x02\u0796\u0794\x03\x02\x02\x02\u0796\u0797\x03\x02\x02\x02\u0797"+
		"\u0799\x03\x02\x02\x02\u0798\u0796\x03\x02\x02\x02\u0799\u079A\x07\xA2"+
		"\x02\x02\u079A\xB5\x03\x02\x02\x02\u079B\u079C\t\x06\x02\x02\u079C\xB7"+
		"\x03\x02\x02\x02\u079D\u079E\x07\xA1\x02\x02\u079E\u079F\x05r:\x02\u079F"+
		"\u07A0\x07\x10\x02\x02\u07A0\xB9\x03\x02\x02\x02\u07A1\u07A2\t\x07\x02"+
		"\x02\u07A2\xBB\x03\x02\x02\x02\u07A3\u07A4\x07\xA7\x02\x02\u07A4\u07A5"+
		"\x05r:\x02\u07A5\u07A6\x07\x10\x02\x02\u07A6\xBD\x03\x02\x02\x02\u07A7"+
		"\u07A9\x05\u011C\x8F\x02\u07A8\u07A7\x03\x02\x02\x02\u07A9\u07AC\x03\x02"+
		"\x02\x02\u07AA\u07A8\x03\x02\x02\x02\u07AA\u07AB\x03\x02\x02\x02\u07AB"+
		"\u07DB\x03\x02\x02\x02\u07AC\u07AA\x03\x02\x02\x02\u07AD\u07B1\x07\x0F"+
		"\x02\x02\u07AE\u07B0\x07\x07\x02\x02\u07AF\u07AE\x03\x02\x02\x02\u07B0"+
		"\u07B3\x03\x02\x02\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1\u07B2\x03\x02"+
		"\x02\x02\u07B2\u07B4\x03\x02\x02\x02\u07B3\u07B1\x03\x02\x02\x02\u07B4"+
		"\u07B8\x05j6\x02\u07B5\u07B7\x07\x07\x02\x02\u07B6\u07B5\x03\x02\x02\x02"+
		"\u07B7\u07BA\x03\x02\x02\x02\u07B8\u07B6\x03\x02\x02\x02\u07B8\u07B9\x03"+
		"\x02\x02\x02\u07B9\u07BB\x03\x02\x02\x02\u07BA\u07B8\x03\x02\x02\x02\u07BB"+
		"\u07BC\x07\x10\x02\x02\u07BC\u07DC\x03\x02\x02\x02\u07BD\u07C1\x07\x0F"+
		"\x02\x02\u07BE\u07C0\x07\x07\x02\x02\u07BF\u07BE\x03\x02\x02\x02\u07C0"+
		"\u07C3\x03\x02\x02\x02\u07C1\u07BF\x03\x02\x02\x02\u07C1\u07C2\x03\x02"+
		"\x02\x02\u07C2\u07C4\x03\x02\x02\x02\u07C3\u07C1\x03\x02\x02\x02\u07C4"+
		"\u07C8\x05\xC0a\x02\u07C5\u07C7\x07\x07\x02\x02\u07C6\u07C5\x03\x02\x02"+
		"\x02\u07C7\u07CA\x03\x02\x02\x02\u07C8\u07C6\x03\x02\x02\x02\u07C8\u07C9"+
		"\x03\x02\x02\x02\u07C9\u07CB\x03\x02\x02\x02\u07CA\u07C8\x03\x02\x02\x02"+
		"\u07CB\u07CF\x07#\x02\x02\u07CC\u07CE\x07\x07\x02\x02\u07CD\u07CC\x03"+
		"\x02\x02\x02\u07CE\u07D1\x03\x02\x02\x02\u07CF\u07CD\x03\x02\x02\x02\u07CF"+
		"\u07D0\x03\x02\x02\x02\u07D0\u07D2\x03\x02\x02\x02\u07D1\u07CF\x03\x02"+
		"\x02\x02\u07D2\u07D6\x05j6\x02\u07D3\u07D5\x07\x07\x02\x02\u07D4\u07D3"+
		"\x03\x02\x02\x02\u07D5\u07D8\x03\x02\x02\x02\u07D6\u07D4\x03\x02\x02\x02"+
		"\u07D6\u07D7\x03\x02\x02\x02\u07D7\u07D9\x03\x02\x02\x02\u07D8\u07D6\x03"+
		"\x02\x02\x02\u07D9\u07DA\x07\x10\x02\x02\u07DA\u07DC\x03\x02\x02\x02\u07DB"+
		"\u07AD\x03\x02\x02\x02\u07DB\u07BD\x03\x02\x02\x02\u07DC\xBF\x03\x02\x02"+
		"\x02\u07DD\u07DF\x05\xC2b\x02\u07DE\u07DD\x03\x02\x02\x02\u07DE\u07DF"+
		"\x03\x02\x02\x02\u07DF\u07F0\x03\x02\x02\x02\u07E0\u07E2\x07\x07\x02\x02"+
		"\u07E1\u07E0\x03\x02\x02\x02\u07E2\u07E5\x03\x02\x02\x02\u07E3\u07E1\x03"+
		"\x02\x02\x02\u07E3\u07E4\x03\x02\x02\x02\u07E4\u07E6\x03\x02\x02\x02\u07E5"+
		"\u07E3\x03\x02\x02\x02\u07E6\u07EA\x07\n\x02\x02\u07E7\u07E9\x07\x07\x02"+
		"\x02\u07E8\u07E7\x03\x02\x02\x02\u07E9\u07EC\x03\x02\x02\x02\u07EA\u07E8"+
		"\x03\x02\x02\x02\u07EA\u07EB\x03\x02\x02\x02\u07EB\u07ED\x03\x02\x02\x02"+
		"\u07EC\u07EA\x03\x02\x02\x02\u07ED\u07EF\x05\xC2b\x02\u07EE\u07E3\x03"+
		"\x02\x02\x02\u07EF\u07F2\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F0"+
		"\u07F1\x03\x02\x02\x02\u07F1\xC1\x03\x02\x02\x02\u07F2\u07F0\x03\x02\x02"+
		"\x02\u07F3\u0806\x05D#\x02\u07F4\u0803\x05B\"\x02\u07F5\u07F7\x07\x07"+
		"\x02\x02\u07F6\u07F5\x03\x02\x02\x02\u07F7\u07FA\x03\x02\x02\x02\u07F8"+
		"\u07F6\x03\x02\x02\x02\u07F8\u07F9\x03\x02\x02\x02\u07F9\u07FB\x03\x02"+
		"\x02\x02\u07FA\u07F8\x03\x02\x02\x02\u07FB\u07FF\x07\x1B\x02\x02\u07FC"+
		"\u07FE\x07\x07\x02\x02\u07FD\u07FC\x03\x02\x02\x02\u07FE\u0801\x03\x02"+
		"\x02\x02\u07FF\u07FD\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800"+
		"\u0802\x03\x02\x02\x02\u0801\u07FF\x03\x02\x02\x02\u0802\u0804\x05P)\x02"+
		"\u0803\u07F8\x03\x02\x02\x02\u0803\u0804\x03\x02\x02\x02\u0804\u0806\x03"+
		"\x02\x02\x02\u0805\u07F3\x03\x02\x02\x02\u0805\u07F4\x03\x02\x02\x02\u0806"+
		"\xC3\x03\x02\x02\x02\u0807\u0816\x07@\x02\x02\u0808\u080A\x07\x07\x02"+
		"\x02\u0809\u0808\x03\x02\x02\x02\u080A\u080D\x03\x02\x02\x02\u080B\u0809"+
		"\x03\x02\x02\x02\u080B\u080C\x03\x02\x02\x02\u080C\u080E\x03\x02\x02\x02"+
		"\u080D\u080B\x03\x02\x02\x02\u080E\u0812\x07\x1B\x02\x02\u080F\u0811\x07"+
		"\x07\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\u0810\u080F\x03\x02\x02\x02\u0811\u0814\x03\x02\x02\x02\u0812\u0810\x03"+
		"\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0815\x03\x02\x02\x02\u0814"+
		"\u0812\x03\x02\x02\x02\u0815\u0817\x05\x1A\x0E\x02\u0816\u080B\x03\x02"+
		"\x02\x02\u0816\u0817\x03\x02\x02\x02\u0817\u081B\x03\x02\x02\x02\u0818"+
		"\u081A\x07\x07\x02\x02\u0819\u0818\x03\x02\x02\x02\u081A\u081D\x03\x02"+
		"\x02\x02\u081B\u0819\x03\x02\x02\x02\u081B\u081C\x03\x02\x02\x02\u081C"+
		"\u081E\x03\x02\x02\x02\u081D\u081B\x03\x02\x02\x02\u081E\u081F\x05\"\x12"+
		"\x02\u081F\xC5\x03\x02\x02\x02\u0820\u0822\x07\r\x02\x02\u0821\u0823\x05"+
		"r:\x02\u0822\u0821\x03\x02\x02\x02\u0822\u0823\x03\x02\x02\x02\u0823\u0828"+
		"\x03\x02\x02\x02\u0824\u0825\x07\n\x02\x02\u0825\u0827\x05r:\x02\u0826"+
		"\u0824\x03\x02\x02\x02\u0827\u082A\x03\x02\x02\x02\u0828\u0826\x03\x02"+
		"\x02\x02\u0828\u0829\x03\x02\x02\x02\u0829\u082B\x03\x02\x02\x02\u082A"+
		"\u0828\x03\x02\x02\x02\u082B\u082C\x07\x0E\x02\x02\u082C\xC7\x03\x02\x02"+
		"\x02\u082D\u082F\x07H\x02\x02\u082E\u0830\x07\x8F\x02\x02\u082F\u082E"+
		"\x03\x02\x02\x02\u082F\u0830\x03\x02\x02\x02\u0830\xC9\x03\x02\x02\x02"+
		"\u0831\u0842\x07I\x02\x02\u0832\u0836\x07-\x02\x02\u0833\u0835\x07\x07"+
		"\x02\x02\u0834\u0833\x03\x02\x02\x02\u0835\u0838\x03\x02\x02\x02\u0836"+
		"\u0834\x03\x02\x02\x02\u0836\u0837\x03\x02\x02\x02\u0837\u0839\x03\x02"+
		"\x02\x02\u0838\u0836\x03\x02\x02\x02\u0839\u083D\x05P)\x02\u083A\u083C"+
		"\x07\x07\x02\x02\u083B\u083A\x03\x02\x02\x02\u083C\u083F\x03\x02\x02\x02"+
		"\u083D\u083B\x03\x02\x02\x02\u083D\u083E\x03\x02\x02\x02\u083E\u0840\x03"+
		"\x02\x02\x02\u083F\u083D\x03\x02\x02\x02\u0840\u0841\x07.\x02\x02\u0841"+
		"\u0843\x03\x02\x02\x02\u0842\u0832\x03\x02\x02\x02\u0842\u0843\x03\x02"+
		"\x02\x02\u0843\u0845\x03\x02\x02\x02\u0844\u0846\x07\x8F\x02\x02\u0845"+
		"\u0844\x03\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846\xCB\x03\x02\x02"+
		"\x02\u0847\u084A\x05\xCEh\x02\u0848\u084A\x05\xD2j\x02\u0849\u0847\x03"+
		"\x02\x02\x02\u0849\u0848\x03\x02\x02\x02\u084A\xCD\x03\x02\x02\x02\u084B"+
		"\u084F\x07L\x02\x02\u084C\u084E\x07\x07\x02\x02\u084D\u084C\x03\x02\x02"+
		"\x02\u084E\u0851\x03\x02\x02\x02\u084F\u084D\x03\x02\x02\x02\u084F\u0850"+
		"\x03\x02\x02\x02\u0850\u0852\x03\x02\x02\x02\u0851\u084F\x03\x02\x02\x02"+
		"\u0852\u0853\x07\v\x02\x02\u0853\u0854\x05r:\x02\u0854\u0858\x07\f\x02"+
		"\x02\u0855\u0857\x07\x07\x02\x02\u0856\u0855\x03\x02\x02\x02\u0857\u085A"+
		"\x03\x02\x02\x02\u0858\u0856\x03\x02\x02\x02\u0858\u0859\x03\x02\x02\x02"+
		"\u0859\u085C\x03\x02\x02\x02\u085A\u0858\x03\x02\x02\x02\u085B\u085D\x05"+
		"\xD0i\x02\u085C\u085B\x03\x02\x02\x02\u085C\u085D\x03\x02\x02\x02\u085D"+
		"\u085F\x03\x02\x02\x02\u085E\u0860\x07\x1C\x02\x02\u085F\u085E\x03\x02"+
		"\x02\x02\u085F\u0860\x03\x02\x02\x02\u0860\u0871\x03\x02\x02\x02\u0861"+
		"\u0863\x07\x07\x02\x02\u0862\u0861\x03\x02\x02\x02\u0863\u0866\x03\x02"+
		"\x02\x02\u0864\u0862\x03\x02\x02\x02\u0864\u0865\x03\x02\x02\x02\u0865"+
		"\u0867\x03\x02\x02\x02\u0866\u0864\x03\x02\x02\x02\u0867\u086B\x07M\x02"+
		"\x02\u0868\u086A\x07\x07\x02\x02\u0869\u0868\x03\x02\x02\x02\u086A\u086D"+
		"\x03\x02\x02\x02\u086B\u0869\x03\x02\x02\x02\u086B\u086C\x03\x02\x02\x02"+
		"\u086C\u086F\x03\x02\x02\x02\u086D\u086B\x03\x02\x02\x02\u086E\u0870\x05"+
		"\xD0i\x02\u086F\u086E\x03\x02\x02\x02\u086F\u0870\x03\x02\x02\x02\u0870"+
		"\u0872\x03\x02\x02\x02\u0871\u0864\x03\x02\x02\x02\u0871\u0872\x03\x02"+
		"\x02\x02\u0872\xCF\x03\x02\x02\x02\u0873\u0876\x05h5\x02\u0874\u0876\x05"+
		"r:\x02\u0875\u0873\x03\x02\x02\x02\u0875\u0874\x03\x02\x02\x02\u0876\xD1"+
		"\x03\x02\x02\x02\u0877\u087B\x07N\x02\x02\u0878\u087A\x07\x07\x02\x02"+
		"\u0879\u0878\x03\x02\x02\x02\u087A\u087D\x03\x02\x02\x02\u087B\u0879\x03"+
		"\x02\x02\x02\u087B\u087C\x03\x02\x02\x02\u087C\u0882\x03\x02\x02\x02\u087D"+
		"\u087B\x03\x02\x02\x02\u087E\u087F\x07\v\x02\x02\u087F\u0880\x05r:\x02"+
		"\u0880\u0881\x07\f\x02\x02\u0881\u0883\x03\x02\x02\x02\u0882\u087E\x03"+
		"\x02\x02\x02\u0882\u0883\x03\x02\x02\x02\u0883\u0887\x03\x02\x02\x02\u0884"+
		"\u0886\x07\x07\x02\x02\u0885\u0884\x03\x02\x02\x02\u0886\u0889\x03\x02"+
		"\x02\x02\u0887\u0885\x03\x02\x02\x02\u0887\u0888\x03\x02\x02\x02\u0888"+
		"\u088A\x03\x02\x02\x02\u0889\u0887\x03\x02\x02\x02\u088A\u088E\x07\x0F"+
		"\x02\x02\u088B\u088D\x07\x07\x02\x02\u088C\u088B\x03\x02\x02\x02\u088D"+
		"\u0890\x03\x02\x02\x02\u088E\u088C\x03\x02\x02\x02\u088E\u088F\x03\x02"+
		"\x02\x02\u088F\u089A\x03\x02\x02\x02\u0890\u088E\x03\x02\x02\x02\u0891"+
		"\u0895\x05\xD4k\x02\u0892\u0894\x07\x07\x02\x02\u0893\u0892\x03\x02\x02"+
		"\x02\u0894\u0897\x03\x02\x02\x02\u0895\u0893\x03\x02\x02\x02\u0895\u0896"+
		"\x03\x02\x02\x02\u0896\u0899\x03\x02\x02\x02\u0897\u0895\x03\x02\x02\x02"+
		"\u0898\u0891\x03\x02\x02\x02\u0899\u089C\x03\x02\x02\x02\u089A\u0898\x03"+
		"\x02\x02\x02\u089A\u089B\x03\x02\x02\x02\u089B\u08A0\x03\x02\x02\x02\u089C"+
		"\u089A\x03\x02\x02\x02\u089D\u089F\x07\x07\x02\x02\u089E\u089D\x03\x02"+
		"\x02\x02\u089F\u08A2\x03\x02\x02\x02\u08A0\u089E\x03\x02\x02\x02\u08A0"+
		"\u08A1\x03\x02\x02\x02\u08A1\u08A3\x03\x02\x02\x02\u08A2\u08A0\x03\x02"+
		"\x02\x02\u08A3\u08A4\x07\x10\x02\x02\u08A4\xD3\x03\x02\x02\x02\u08A5\u08B6"+
		"\x05\xD6l\x02\u08A6\u08A8\x07\x07\x02\x02\u08A7\u08A6\x03\x02\x02\x02"+
		"\u08A8\u08AB\x03\x02\x02\x02\u08A9\u08A7\x03\x02\x02\x02\u08A9\u08AA\x03"+
		"\x02\x02\x02\u08AA\u08AC\x03\x02\x02\x02\u08AB\u08A9\x03\x02\x02\x02\u08AC"+
		"\u08B0\x07\n\x02\x02\u08AD\u08AF\x07\x07\x02\x02\u08AE\u08AD\x03\x02\x02"+
		"\x02\u08AF\u08B2\x03\x02\x02\x02\u08B0\u08AE\x03\x02\x02\x02\u08B0\u08B1"+
		"\x03\x02\x02\x02\u08B1\u08B3\x03\x02\x02\x02\u08B2\u08B0\x03\x02\x02\x02"+
		"\u08B3\u08B5\x05\xD6l\x02\u08B4\u08A9\x03\x02\x02\x02\u08B5\u08B8\x03"+
		"\x02\x02\x02\u08B6\u08B4\x03\x02\x02\x02\u08B6\u08B7\x03\x02\x02\x02\u08B7"+
		"\u08BC\x03\x02\x02\x02\u08B8\u08B6\x03\x02\x02\x02\u08B9\u08BB\x07\x07"+
		"\x02\x02\u08BA\u08B9\x03\x02\x02\x02\u08BB\u08BE\x03\x02\x02\x02\u08BC"+
		"\u08BA\x03\x02\x02\x02\u08BC\u08BD\x03\x02\x02\x02\u08BD\u08BF\x03\x02"+
		"\x02\x02\u08BE\u08BC\x03\x02\x02\x02\u08BF\u08C3\x07#\x02\x02\u08C0\u08C2"+
		"\x07\x07\x02\x02\u08C1\u08C0\x03\x02\x02\x02\u08C2\u08C5\x03\x02\x02\x02"+
		"\u08C3\u08C1\x03\x02\x02\x02\u08C3\u08C4\x03\x02\x02\x02\u08C4\u08C6\x03"+
		"\x02\x02\x02\u08C5\u08C3\x03\x02\x02\x02\u08C6\u08C8\x05\xD0i\x02\u08C7"+
		"\u08C9\x05\u012A\x96\x02\u08C8\u08C7\x03\x02\x02\x02\u08C8\u08C9\x03\x02"+
		"\x02\x02\u08C9\u08DA\x03\x02\x02\x02\u08CA\u08CE\x07M\x02\x02\u08CB\u08CD"+
		"\x07\x07\x02\x02\u08CC\u08CB\x03\x02\x02\x02\u08CD\u08D0\x03\x02\x02\x02"+
		"\u08CE\u08CC\x03\x02\x02\x02\u08CE\u08CF\x03\x02\x02\x02\u08CF\u08D1\x03"+
		"\x02\x02\x02\u08D0\u08CE\x03\x02\x02\x02\u08D1\u08D5\x07#\x02\x02\u08D2"+
		"\u08D4\x07\x07\x02\x02\u08D3\u08D2\x03\x02\x02\x02\u08D4\u08D7\x03\x02"+
		"\x02\x02\u08D5\u08D3\x03\x02\x02\x02\u08D5\u08D6\x03\x02\x02\x02\u08D6"+
		"\u08D8\x03\x02\x02\x02\u08D7\u08D5\x03\x02\x02\x02\u08D8\u08DA\x05\xD0"+
		"i\x02\u08D9\u08A5\x03\x02\x02\x02\u08D9\u08CA\x03\x02\x02\x02\u08DA\xD5"+
		"\x03\x02\x02\x02\u08DB\u08DF\x05r:\x02\u08DC\u08DF\x05\xD8m\x02\u08DD"+
		"\u08DF\x05\xDAn\x02\u08DE\u08DB\x03\x02\x02\x02\u08DE\u08DC\x03\x02\x02"+
		"\x02\u08DE\u08DD\x03\x02\x02\x02\u08DF\xD7\x03\x02\x02\x02\u08E0\u08E4"+
		"\x05\xF4{\x02\u08E1\u08E3\x07\x07\x02\x02\u08E2\u08E1\x03\x02\x02\x02"+
		"\u08E3\u08E6\x03\x02\x02\x02\u08E4\u08E2\x03\x02\x02\x02\u08E4\u08E5\x03"+
		"\x02\x02\x02\u08E5\u08E7\x03\x02\x02\x02\u08E6\u08E4\x03\x02\x02\x02\u08E7"+
		"\u08E8\x05r:\x02\u08E8\xD9\x03\x02\x02\x02\u08E9\u08ED\x05\xF6|\x02\u08EA"+
		"\u08EC\x07\x07\x02\x02\u08EB\u08EA\x03\x02\x02\x02\u08EC\u08EF\x03\x02"+
		"\x02\x02\u08ED\u08EB\x03\x02\x02\x02\u08ED\u08EE\x03\x02\x02\x02\u08EE"+
		"\u08F0\x03\x02\x02\x02\u08EF\u08ED\x03\x02\x02\x02\u08F0\u08F1\x05P)\x02"+
		"\u08F1\xDB\x03\x02\x02\x02\u08F2\u08F6\x07O\x02\x02\u08F3\u08F5\x07\x07"+
		"\x02\x02\u08F4\u08F3\x03\x02\x02\x02\u08F5\u08F8\x03\x02\x02\x02\u08F6"+
		"\u08F4\x03\x02\x02\x02\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F9\x03\x02"+
		"\x02\x02\u08F8\u08F6\x03\x02\x02\x02\u08F9\u0903\x05h5\x02\u08FA\u08FC"+
		"\x07\x07\x02\x02\u08FB\u08FA\x03\x02\x02\x02\u08FC\u08FF\x03\x02\x02\x02"+
		"\u08FD\u08FB\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE\u0900\x03"+
		"\x02\x02\x02\u08FF\u08FD\x03\x02\x02\x02\u0900\u0902\x05\xDEp\x02\u0901"+
		"\u08FD\x03\x02\x02\x02\u0902\u0905\x03\x02\x02\x02\u0903\u0901\x03\x02"+
		"\x02\x02\u0903\u0904\x03\x02\x02\x02\u0904\u090D\x03\x02\x02\x02\u0905"+
		"\u0903\x03\x02\x02\x02\u0906\u0908\x07\x07\x02\x02\u0907\u0906\x03\x02"+
		"\x02\x02\u0908\u090B\x03\x02\x02\x02\u0909\u0907\x03\x02\x02\x02\u0909"+
		"\u090A\x03\x02\x02\x02\u090A\u090C\x03\x02\x02\x02\u090B\u0909\x03\x02"+
		"\x02\x02\u090C\u090E\x05\xE0q\x02\u090D\u0909\x03\x02\x02\x02\u090D\u090E"+
		"\x03\x02\x02\x02\u090E\xDD\x03\x02\x02\x02\u090F\u0913\x07P\x02\x02\u0910"+
		"\u0912\x07\x07\x02\x02\u0911\u0910\x03\x02\x02\x02\u0912\u0915\x03\x02"+
		"\x02\x02\u0913\u0911\x03\x02\x02\x02\u0913\u0914\x03\x02\x02\x02\u0914"+
		"\u0916\x03\x02\x02\x02\u0915\u0913\x03\x02\x02\x02\u0916\u091A\x07\v\x02"+
		"\x02\u0917\u0919\x05\u011C\x8F\x02\u0918\u0917\x03\x02\x02\x02\u0919\u091C"+
		"\x03\x02\x02\x02\u091A\u0918\x03\x02\x02\x02\u091A\u091B\x03\x02\x02\x02"+
		"\u091B\u091D\x03\x02\x02\x02\u091C\u091A\x03\x02\x02\x02\u091D\u091E\x05"+
		"\u0128\x95\x02\u091E\u091F\x07\x1B\x02\x02\u091F\u0920\x05^0\x02\u0920"+
		"\u0924\x07\f\x02\x02\u0921\u0923\x07\x07\x02\x02\u0922\u0921\x03\x02\x02"+
		"\x02\u0923\u0926\x03\x02\x02\x02\u0924\u0922\x03\x02\x02\x02\u0924\u0925"+
		"\x03\x02\x02\x02\u0925\u0927\x03\x02\x02\x02\u0926\u0924\x03\x02\x02\x02"+
		"\u0927\u0928\x05h5\x02\u0928\xDF\x03\x02\x02\x02\u0929\u092D\x07Q\x02"+
		"\x02\u092A\u092C\x07\x07\x02\x02\u092B\u092A\x03\x02\x02\x02\u092C\u092F"+
		"\x03\x02\x02\x02\u092D\u092B\x03\x02\x02\x02\u092D\u092E\x03\x02\x02\x02"+
		"\u092E\u0930\x03\x02\x02\x02\u092F\u092D\x03\x02\x02\x02\u0930\u0931\x05"+
		"h5\x02\u0931\xE1\x03\x02\x02\x02\u0932\u0936\x05\xE4s\x02\u0933\u0936"+
		"\x05\xE6t\x02\u0934\u0936\x05\xE8u\x02\u0935\u0932\x03\x02\x02\x02\u0935"+
		"\u0933\x03\x02\x02\x02\u0935\u0934\x03\x02\x02\x02\u0936\xE3\x03\x02\x02"+
		"\x02\u0937\u093B\x07R\x02\x02\u0938\u093A\x07\x07\x02\x02\u0939\u0938"+
		"\x03\x02\x02\x02\u093A\u093D\x03\x02\x02\x02\u093B\u0939\x03\x02\x02\x02"+
		"\u093B\u093C\x03\x02\x02\x02\u093C\u093E\x03\x02\x02\x02\u093D\u093B\x03"+
		"\x02\x02\x02\u093E\u0942\x07\v\x02\x02\u093F\u0941\x05\u011C\x8F\x02\u0940"+
		"\u093F\x03\x02\x02\x02\u0941\u0944\x03\x02\x02\x02\u0942\u0940\x03\x02"+
		"\x02\x02\u0942\u0943\x03\x02\x02\x02\u0943\u0947\x03\x02\x02\x02\u0944"+
		"\u0942\x03\x02\x02\x02\u0945\u0948\x05D#\x02\u0946\u0948\x05B\"\x02\u0947"+
		"\u0945\x03\x02\x02\x02\u0947\u0946\x03\x02\x02\x02\u0948\u0949\x03\x02"+
		"\x02\x02\u0949\u094A\x07[\x02\x02\u094A\u094B\x05r:\x02\u094B\u094F\x07"+
		"\f\x02\x02\u094C\u094E\x07\x07\x02\x02\u094D\u094C\x03\x02\x02\x02\u094E"+
		"\u0951\x03\x02\x02\x02\u094F\u094D\x03\x02\x02\x02\u094F\u0950\x03\x02"+
		"\x02\x02\u0950\u0953\x03\x02\x02\x02\u0951\u094F\x03\x02\x02\x02\u0952"+
		"\u0954\x05\xD0i\x02\u0953\u0952\x03\x02\x02\x02\u0953\u0954\x03\x02\x02"+
		"\x02\u0954\xE5\x03\x02\x02\x02\u0955\u0959\x07T\x02\x02\u0956\u0958\x07"+
		"\x07\x02\x02\u0957\u0956\x03\x02\x02\x02\u0958\u095B\x03\x02\x02\x02\u0959"+
		"\u0957\x03\x02\x02\x02\u0959\u095A\x03\x02\x02\x02\u095A\u095C\x03\x02"+
		"\x02\x02\u095B\u0959\x03\x02\x02\x02\u095C\u095D\x07\v\x02\x02\u095D\u095E"+
		"\x05r:\x02\u095E\u0962\x07\f\x02\x02\u095F\u0961\x07\x07\x02\x02\u0960"+
		"\u095F\x03\x02\x02\x02\u0961\u0964\x03\x02\x02\x02\u0962\u0960\x03\x02"+
		"\x02\x02\u0962\u0963\x03\x02\x02\x02\u0963\u0966\x03\x02\x02\x02\u0964"+
		"\u0962\x03\x02\x02\x02\u0965\u0967\x05\xD0i\x02\u0966\u0965\x03\x02\x02"+
		"\x02\u0966\u0967\x03\x02\x02\x02\u0967\xE7\x03\x02\x02\x02\u0968\u096C"+
		"\x07S\x02\x02\u0969\u096B\x07\x07\x02\x02\u096A\u0969\x03\x02\x02\x02"+
		"\u096B\u096E\x03\x02\x02\x02\u096C\u096A\x03\x02\x02\x02\u096C\u096D\x03"+
		"\x02\x02\x02\u096D\u0970\x03\x02\x02\x02\u096E\u096C\x03\x02\x02\x02\u096F"+
		"\u0971\x05\xD0i\x02\u0970\u096F\x03\x02\x02\x02\u0970\u0971\x03\x02\x02"+
		"\x02\u0971\u0975\x03\x02\x02\x02\u0972\u0974\x07\x07\x02\x02\u0973\u0972"+
		"\x03\x02\x02\x02\u0974\u0977\x03\x02\x02\x02\u0975\u0973\x03\x02\x02\x02"+
		"\u0975\u0976\x03\x02\x02\x02\u0976\u0978\x03\x02\x02\x02\u0977\u0975\x03"+
		"\x02\x02\x02\u0978\u097C\x07T\x02\x02\u0979\u097B\x07\x07\x02\x02\u097A"+
		"\u0979\x03\x02\x02\x02\u097B\u097E\x03\x02\x02\x02\u097C\u097A\x03\x02"+
		"\x02\x02\u097C\u097D\x03\x02\x02\x02\u097D\u097F\x03\x02\x02\x02\u097E"+
		"\u097C\x03\x02\x02\x02\u097F\u0980\x07\v\x02\x02\u0980\u0981\x05r:\x02"+
		"\u0981\u0982\x07\f\x02\x02\u0982\xE9\x03\x02\x02\x02\u0983\u0987\x07U"+
		"\x02\x02\u0984\u0986\x07\x07\x02\x02\u0985\u0984\x03\x02\x02\x02\u0986"+
		"\u0989\x03\x02\x02\x02\u0987\u0985\x03\x02\x02\x02\u0987\u0988\x03\x02"+
		"\x02\x02\u0988\u098A\x03\x02\x02\x02\u0989\u0987\x03\x02\x02\x02\u098A"+
		"\u0994\x05r:\x02\u098B\u098D\t\b\x02\x02\u098C\u098E\x05r:\x02\u098D\u098C"+
		"\x03\x02\x02\x02\u098D\u098E\x03\x02\x02\x02\u098E\u0994\x03\x02\x02\x02"+
		"\u098F\u0994\x07W\x02\x02\u0990\u0994\x078\x02\x02\u0991\u0994\x07X\x02"+
		"\x02\u0992\u0994\x079\x02\x02\u0993\u0983\x03\x02\x02\x02\u0993\u098B"+
		"\x03\x02\x02\x02\u0993\u098F\x03\x02\x02\x02\u0993\u0990\x03\x02\x02\x02"+
		"\u0993\u0991\x03\x02\x02\x02\u0993\u0992\x03\x02\x02\x02\u0994\xEB\x03"+
		"\x02\x02\x02\u0995\u099F\x05^0\x02\u0996\u099A\x07+\x02\x02\u0997\u0999"+
		"\x07\x07\x02\x02\u0998\u0997\x03\x02\x02\x02\u0999\u099C\x03\x02\x02\x02"+
		"\u099A\u0998\x03\x02\x02\x02\u099A\u099B\x03\x02\x02\x02\u099B\u099E\x03"+
		"\x02\x02\x02\u099C\u099A\x03\x02\x02\x02\u099D\u0996\x03\x02\x02\x02\u099E"+
		"\u09A1\x03\x02\x02\x02\u099F\u099D\x03\x02\x02\x02\u099F\u09A0\x03\x02"+
		"\x02\x02\u09A0\u09A3\x03\x02\x02\x02\u09A1\u099F\x03\x02\x02\x02\u09A2"+
		"\u0995\x03\x02\x02\x02\u09A2\u09A3\x03\x02\x02\x02\u09A3\u09A7\x03\x02"+
		"\x02\x02\u09A4\u09A6\x07\x07\x02\x02\u09A5\u09A4\x03\x02\x02\x02\u09A6"+
		"\u09A9\x03\x02\x02\x02\u09A7\u09A5\x03\x02\x02\x02\u09A7\u09A8\x03\x02"+
		"\x02\x02\u09A8\u09AA\x03\x02\x02\x02\u09A9\u09A7\x03\x02\x02\x02\u09AA"+
		"\u09AE\t\t\x02\x02\u09AB\u09AD\x07\x07\x02\x02\u09AC\u09AB\x03\x02\x02"+
		"\x02\u09AD\u09B0\x03\x02\x02\x02\u09AE\u09AC\x03\x02\x02\x02\u09AE\u09AF"+
		"\x03\x02\x02\x02\u09AF\u09B3\x03\x02\x02\x02\u09B0\u09AE\x03\x02\x02\x02"+
		"\u09B1\u09B4\x05\u0126\x94\x02\u09B2\u09B4\x07=\x02\x02\u09B3\u09B1\x03"+
		"\x02\x02\x02\u09B3\u09B2\x03\x02\x02\x02\u09B4\xED\x03\x02\x02\x02\u09B5"+
		"\u09B6\t\n\x02\x02\u09B6\xEF\x03\x02\x02\x02\u09B7\u09B8\t\v\x02\x02\u09B8"+
		"\xF1\x03\x02\x02\x02\u09B9\u09BA\t\f\x02\x02\u09BA\xF3\x03\x02\x02\x02"+
		"\u09BB\u09BC\t\r\x02\x02\u09BC\xF5\x03\x02\x02\x02\u09BD\u09BE\t\x0E\x02"+
		"\x02\u09BE\xF7\x03\x02\x02\x02\u09BF\u09C0\t\x0F\x02\x02\u09C0\xF9\x03"+
		"\x02\x02\x02\u09C1\u09C2\t\x10\x02\x02\u09C2\xFB\x03\x02\x02\x02\u09C3"+
		"\u09C4\t\x11\x02\x02\u09C4\xFD\x03\x02\x02\x02\u09C5\u09C6\t\x12\x02\x02"+
		"\u09C6\xFF\x03\x02\x02\x02\u09C7\u09CC\x07\x16\x02\x02\u09C8\u09CC\x07"+
		"\x17\x02\x02\u09C9\u09CA\x07\x1A\x02\x02\u09CA\u09CC\x07\x1A\x02\x02\u09CB"+
		"\u09C7\x03\x02\x02\x02\u09CB\u09C8\x03\x02\x02\x02\u09CB\u09C9\x03\x02"+
		"\x02\x02\u09CC\u0101\x03\x02\x02\x02\u09CD\u09D1\x07\t\x02\x02\u09CE\u09CF"+
		"\x07+\x02\x02\u09CF\u09D1\x07\t\x02\x02\u09D0\u09CD\x03\x02\x02\x02\u09D0"+
		"\u09CE\x03\x02\x02\x02\u09D1\u0103\x03\x02\x02\x02\u09D2\u09D5\x05\u011C"+
		"\x8F\x02\u09D3\u09D5\x05\u0106\x84\x02\u09D4\u09D2\x03\x02\x02\x02\u09D4"+
		"\u09D3\x03\x02\x02\x02\u09D5\u09D6\x03\x02\x02\x02\u09D6\u09D4\x03\x02"+
		"\x02\x02\u09D6\u09D7\x03\x02\x02\x02\u09D7\u0105\x03\x02\x02\x02\u09D8"+
		"\u09E2\x05\u0108\x85\x02\u09D9\u09E2\x05\u010A\x86\x02\u09DA\u09E2\x05"+
		"\u010C\x87\x02\u09DB\u09E2\x05\u010E\x88\x02\u09DC\u09E2\x05\u0110\x89"+
		"\x02\u09DD\u09E2\x05\u0112\x8A\x02\u09DE\u09E2\x05\u0114\x8B\x02\u09DF"+
		"\u09E2\x05\u0116\x8C\x02\u09E0\u09E2\x05\u0118\x8D\x02\u09E1\u09D8\x03"+
		"\x02\x02\x02\u09E1\u09D9\x03\x02\x02\x02\u09E1\u09DA\x03\x02\x02\x02\u09E1"+
		"\u09DB\x03\x02\x02\x02\u09E1\u09DC\x03\x02\x02\x02\u09E1\u09DD\x03\x02"+
		"\x02\x02\u09E1\u09DE\x03\x02\x02\x02\u09E1\u09DF\x03\x02\x02\x02\u09E1"+
		"\u09E0\x03\x02\x02\x02\u09E2\u09E6\x03\x02\x02\x02\u09E3\u09E5\x07\x07"+
		"\x02\x02\u09E4\u09E3\x03\x02\x02\x02\u09E5\u09E8\x03\x02\x02\x02\u09E6"+
		"\u09E4\x03\x02\x02\x02\u09E6\u09E7\x03\x02\x02\x02\u09E7\u0107\x03\x02"+
		"\x02\x02\u09E8\u09E6\x03\x02\x02\x02\u09E9\u09EA\t\x13\x02\x02\u09EA\u0109"+
		"\x03\x02\x02\x02\u09EB\u09EC\t\x14\x02\x02\u09EC\u010B\x03\x02\x02\x02"+
		"\u09ED\u09EE\t\x15\x02\x02\u09EE\u010D\x03\x02\x02\x02\u09EF\u09F0\t\x16"+
		"\x02\x02\u09F0\u010F\x03\x02\x02\x02\u09F1\u09F2\t\x17\x02\x02\u09F2\u0111"+
		"\x03\x02\x02\x02\u09F3\u09F4\x07}\x02\x02\u09F4\u0113\x03\x02\x02\x02"+
		"\u09F5\u09F6\t\x18\x02\x02\u09F6\u0115\x03\x02\x02\x02\u09F7\u09F8\t\x19"+
		"\x02\x02\u09F8\u0117\x03\x02\x02\x02\u09F9\u09FA\x07\x82\x02\x02\u09FA"+
		"\u0119\x03\x02\x02\x02\u09FB\u09FF\x07\x90\x02\x02\u09FC\u09FE\x07\x07"+
		"\x02\x02\u09FD\u09FC\x03\x02\x02\x02\u09FE\u0A01\x03\x02\x02\x02\u09FF"+
		"\u09FD\x03\x02\x02\x02\u09FF\u0A00\x03\x02\x02\x02\u0A00\u011B\x03\x02"+
		"\x02\x02\u0A01\u09FF\x03\x02\x02\x02\u0A02\u0A05\x05\u011E\x90\x02\u0A03"+
		"\u0A05\x05\u0120\x91\x02\u0A04\u0A02\x03\x02\x02\x02\u0A04\u0A03\x03\x02"+
		"\x02\x02\u0A05\u0A09\x03\x02\x02\x02\u0A06\u0A08\x07\x07\x02\x02\u0A07"+
		"\u0A06\x03\x02\x02\x02\u0A08\u0A0B\x03\x02\x02\x02\u0A09\u0A07\x03\x02"+
		"\x02\x02\u0A09\u0A0A\x03\x02\x02\x02\u0A0A\u011D\x03\x02\x02\x02\u0A0B"+
		"\u0A09\x03\x02\x02\x02\u0A0C\u0A10\x05\u0122\x92\x02\u0A0D\u0A0F\x07\x07"+
		"\x02\x02\u0A0E\u0A0D\x03\x02\x02\x02\u0A0F\u0A12\x03\x02\x02\x02\u0A10"+
		"\u0A0E\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A13\x03\x02"+
		"\x02\x02\u0A12\u0A10\x03\x02\x02\x02\u0A13\u0A17\x07\x1B\x02\x02\u0A14"+
		"\u0A16\x07\x07\x02\x02\u0A15\u0A14\x03\x02\x02\x02\u0A16\u0A19\x03\x02"+
		"\x02\x02\u0A17\u0A15\x03\x02\x02\x02\u0A17\u0A18\x03\x02\x02\x02\u0A18"+
		"\u0A1A\x03\x02\x02\x02\u0A19\u0A17\x03\x02\x02\x02\u0A1A\u0A1B\x05\u0124"+
		"\x93\x02\u0A1B\u0A30\x03\x02\x02\x02\u0A1C\u0A24\x07\x8F\x02\x02\u0A1D"+
		"\u0A1F\x07\x07\x02\x02\u0A1E\u0A1D\x03\x02\x02\x02\u0A1F\u0A22\x03\x02"+
		"\x02\x02\u0A20\u0A1E\x03\x02\x02\x02\u0A20\u0A21\x03\x02\x02\x02\u0A21"+
		"\u0A23\x03\x02\x02\x02\u0A22\u0A20\x03\x02\x02\x02\u0A23\u0A25\x05\xA2"+
		"R\x02\u0A24\u0A20\x03\x02\x02\x02\u0A24\u0A25\x03\x02\x02\x02\u0A25\u0A2D"+
		"\x03\x02\x02\x02\u0A26\u0A28\x07\x07\x02\x02\u0A27\u0A26\x03\x02\x02\x02"+
		"\u0A28\u0A2B\x03\x02\x02\x02\u0A29\u0A27\x03\x02\x02\x02\u0A29\u0A2A\x03"+
		"\x02\x02\x02\u0A2A\u0A2C\x03\x02\x02\x02\u0A2B\u0A29\x03\x02\x02\x02\u0A2C"+
		"\u0A2E\x05\xA0Q\x02\u0A2D\u0A29\x03\x02\x02\x02\u0A2D\u0A2E\x03\x02\x02"+
		"\x02\u0A2E\u0A30\x03\x02\x02\x02\u0A2F\u0A0C\x03\x02\x02\x02\u0A2F\u0A1C"+
		"\x03\x02\x02\x02\u0A30\u011F\x03\x02\x02\x02\u0A31\u0A32\x05\u0122\x92"+
		"\x02\u0A32\u0A33\x07\x1B\x02\x02\u0A33\u0A35\x07\r\x02\x02\u0A34\u0A36"+
		"\x05\u0124\x93\x02\u0A35\u0A34\x03\x02\x02\x02\u0A36\u0A37\x03\x02\x02"+
		"\x02\u0A37\u0A35\x03\x02\x02\x02\u0A37\u0A38\x03\x02\x02\x02\u0A38\u0A39"+
		"\x03\x02\x02\x02\u0A39\u0A3A\x07\x0E\x02\x02\u0A3A\u0A45\x03\x02\x02\x02"+
		"\u0A3B\u0A3C\x07*\x02\x02\u0A3C\u0A3E\x07\r\x02\x02\u0A3D\u0A3F\x05\u0124"+
		"\x93\x02\u0A3E\u0A3D\x03\x02\x02\x02\u0A3F\u0A40\x03\x02\x02\x02\u0A40"+
		"\u0A3E\x03\x02\x02\x02\u0A40\u0A41\x03\x02\x02\x02\u0A41\u0A42\x03\x02"+
		"\x02\x02\u0A42\u0A43\x07\x0E\x02\x02\u0A43\u0A45\x03\x02\x02\x02\u0A44"+
		"\u0A31\x03\x02\x02\x02\u0A44\u0A3B\x03\x02\x02\x02\u0A45\u0121\x03\x02"+
		"\x02\x02\u0A46\u0A47\t\x1A\x02\x02\u0A47\u0123\x03\x02\x02\x02\u0A48\u0A4A"+
		"\x05\u0126\x94\x02\u0A49\u0A4B\x05\xA2R\x02\u0A4A\u0A49\x03\x02\x02\x02"+
		"\u0A4A\u0A4B\x03\x02\x02\x02\u0A4B\u0A4D\x03\x02\x02\x02\u0A4C\u0A4E\x05"+
		"\xA0Q\x02\u0A4D\u0A4C\x03\x02\x02\x02\u0A4D\u0A4E\x03\x02\x02\x02\u0A4E"+
		"\u0125\x03\x02\x02\x02\u0A4F\u0A5A\x05\u0128\x95\x02\u0A50\u0A52\x07\x07"+
		"\x02\x02\u0A51\u0A50\x03\x02\x02\x02\u0A52\u0A55\x03\x02\x02\x02\u0A53"+
		"\u0A51\x03\x02\x02\x02\u0A53\u0A54\x03\x02\x02\x02\u0A54\u0A56\x03\x02"+
		"\x02\x02\u0A55\u0A53\x03\x02\x02\x02\u0A56\u0A57\x07\t\x02\x02\u0A57\u0A59"+
		"\x05\u0128\x95\x02\u0A58\u0A53\x03\x02\x02\x02\u0A59\u0A5C\x03\x02\x02"+
		"\x02\u0A5A\u0A58\x03\x02\x02\x02\u0A5A\u0A5B\x03\x02\x02\x02\u0A5B\u0127"+
		"\x03\x02\x02\x02\u0A5C\u0A5A\x03\x02\x02\x02\u0A5D\u0A5E\t\x1B\x02\x02"+
		"\u0A5E\u0129\x03\x02\x02\x02\u0A5F\u0A61\x07\x07\x02\x02\u0A60\u0A5F\x03"+
		"\x02\x02\x02\u0A61\u0A62\x03\x02\x02\x02\u0A62\u0A60\x03\x02\x02\x02\u0A62"+
		"\u0A63\x03\x02\x02\x02\u0A63\u0A6C\x03\x02\x02\x02\u0A64\u0A6C\x07\x1C"+
		"\x02\x02\u0A65\u0A67\x07\x1C\x02\x02\u0A66\u0A68\x07\x07\x02\x02\u0A67"+
		"\u0A66\x03\x02\x02\x02\u0A68\u0A69\x03\x02\x02\x02\u0A69\u0A67\x03\x02"+
		"\x02\x02\u0A69\u0A6A\x03\x02\x02\x02\u0A6A\u0A6C\x03\x02\x02\x02\u0A6B"+
		"\u0A60\x03\x02\x02\x02\u0A6B\u0A64\x03\x02\x02\x02\u0A6B\u0A65\x03\x02"+
		"\x02\x02\u0A6C\u012B\x03\x02\x02\x02\u0197\u012F\u0133\u013A\u0142\u0146"+
		"\u014C\u0150\u015B\u0160\u0163\u0167\u016C\u016E\u0173\u017B\u017E\u0188"+
		"\u018B\u018E\u0194\u019B\u019F\u01A4\u01A8\u01AD\u01B4\u01B8\u01BD\u01C1"+
		"\u01C6\u01CD\u01D1\u01D4\u01DA\u01DD\u01E7\u01EA\u01EF\u01F2\u01F9\u01FE"+
		"\u0205\u020C\u0212\u0218\u0221\u0228\u0231\u0237\u023D\u024A\u024D\u0253"+
		"\u0259\u025F\u0266\u026D\u0271\u0276\u027F\u0287\u028B\u0291\u0295\u029A"+
		"\u02A1\u02A7\u02AA\u02AF\u02B8\u02BD\u02C0\u02C6\u02CA\u02CF\u02D3\u02D8"+
		"\u02DC\u02DF\u02E5\u02EC\u02F1\u02F6\u02FA\u02FF\u0303\u0308\u030F\u0316"+
		"\u031A\u031F\u0323\u0328\u032C\u0334\u0337\u033C\u0341\u034C\u0350\u0353"+
		"\u0359\u0360\u0364\u0369\u0370\u0374\u0379\u037D\u0380\u0386\u038A\u0390"+
		"\u0394\u0399\u03A0\u03A4\u03A9\u03AD\u03B0\u03B6\u03BA\u03BF\u03C6\u03CB"+
		"\u03D0\u03D5\u03DA\u03DE\u03E3\u03EA\u03EE\u03F1\u03F4\u03F9\u03FD\u0400"+
		"\u0405\u0409\u040B\u0413\u041B\u041E\u0422\u0428\u0430\u0437\u043B\u0440"+
		"\u0448\u044C\u044E\u0451\u0455\u045B\u0461\u0463\u0468\u046E\u0473\u0476"+
		"\u047C\u0483\u0487\u048C\u0493\u049C\u04A3\u04AA\u04B0\u04B6\u04BC\u04C1"+
		"\u04C8\u04CF\u04D3\u04D6\u04DC\u04E3\u04E6\u04E8\u04F0\u04F5\u04FB\u0503"+
		"\u0509\u0510\u0513\u0519\u0520\u0524\u0529\u052F\u0536\u053C\u0543\u0547"+
		"\u054C\u0551\u0555\u055E\u0565\u056C\u0572\u0578\u057F\u0586\u058F\u0597"+
		"\u059C\u059E\u05A3\u05AD\u05B2\u05B4\u05B9\u05BE\u05C5\u05CC\u05D7\u05DE"+
		"\u05E4\u05EB\u05F2\u05F8\u0600\u0607\u060F\u0614\u061B\u0622\u062A\u062F"+
		"\u0631\u0637\u063E\u0644\u064C\u0653\u065B\u0661\u0669\u0670\u0678\u067F"+
		"\u0684\u0689\u0690\u0695\u069A\u06A1\u06A5\u06AF\u06B8\u06BB\u06BF\u06C2"+
		"\u06C7\u06D1\u06D9\u06DD\u06E3\u06E6\u06EC\u06F3\u06F6\u06FB\u06FF\u0704"+
		"\u070F\u0712\u0718\u0721\u0726\u072C\u0733\u073A\u0740\u0746\u074A\u074F"+
		"\u0755\u075C\u075F\u0762\u0767\u0779\u0783\u0788\u078A\u0794\u0796\u07AA"+
		"\u07B1\u07B8\u07C1\u07C8\u07CF\u07D6\u07DB\u07DE\u07E3\u07EA\u07F0\u07F8"+
		"\u07FF\u0803\u0805\u080B\u0812\u0816\u081B\u0822\u0828\u082F\u0836\u083D"+
		"\u0842\u0845\u0849\u084F\u0858\u085C\u085F\u0864\u086B\u086F\u0871\u0875"+
		"\u087B\u0882\u0887\u088E\u0895\u089A\u08A0\u08A9\u08B0\u08B6\u08BC\u08C3"+
		"\u08C8\u08CE\u08D5\u08D9\u08DE\u08E4\u08ED\u08F6\u08FD\u0903\u0909\u090D"+
		"\u0913\u091A\u0924\u092D\u0935\u093B\u0942\u0947\u094F\u0953\u0959\u0962"+
		"\u0966\u096C\u0970\u0975\u097C\u0987\u098D\u0993\u099A\u099F\u09A2\u09A7"+
		"\u09AE\u09B3\u09CB\u09D0\u09D4\u09D6\u09E1\u09E6\u09FF\u0A04\u0A09\u0A10"+
		"\u0A17\u0A20\u0A24\u0A29\u0A2D\u0A2F\u0A37\u0A40\u0A44\u0A4A\u0A4D\u0A53"+
		"\u0A5A\u0A62\u0A69\u0A6B";
	public static readonly _serializedATN: string = Utils.join(
		[
			KotlinParser._serializedATNSegment0,
			KotlinParser._serializedATNSegment1,
			KotlinParser._serializedATNSegment2,
			KotlinParser._serializedATNSegment3,
			KotlinParser._serializedATNSegment4
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!KotlinParser.__ATN) {
			KotlinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(KotlinParser._serializedATN));
		}

		return KotlinParser.__ATN;
	}

}

