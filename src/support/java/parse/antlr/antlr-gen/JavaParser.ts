// Generated from grammars/antlr/Java.g4 by ANTLR 4.6-SNAPSHOT

import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
import { RuleVersion } from "antlr4ts/RuleVersion";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { JavaListener } from "./JavaListener";
import { JavaVisitor } from "./JavaVisitor";

export class EnumConstantNameContext extends ParserRuleContext {
    public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
    constructor(parent: ParserRuleContext, invokingState: number);
    constructor(parent: ParserRuleContext, invokingState: number) {
        super(parent, invokingState);

    }
    @Override public get ruleIndex(): number { return JavaParser.RULE_enumConstantName; }
    @Override
    public enterRule(listener: JavaListener): void {
        if (listener.enterEnumConstantName) listener.enterEnumConstantName(this);
    }
    @Override
    public exitRule(listener: JavaListener): void {
        if (listener.exitEnumConstantName) listener.exitEnumConstantName(this);
    }
    @Override
    public accept<Result>(visitor: JavaVisitor<Result>): Result {
        if (visitor.visitEnumConstantName) return visitor.visitEnumConstantName(this);
        else return visitor.visitChildren(this);
    }
}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavaParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_compilationUnit; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCompilationUnit) listener.enterCompilationUnit(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCompilationUnit) listener.exitCompilationUnit(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) return visitor.visitCompilationUnit(this);
		else return visitor.visitChildren(this);
	}
}

export class PackageDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_packageDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPackageDeclaration) listener.enterPackageDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPackageDeclaration) listener.exitPackageDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) return visitor.visitPackageDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class ImportDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_importDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterImportDeclaration) listener.enterImportDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitImportDeclaration) listener.exitImportDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) return visitor.visitImportDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeDeclaration) listener.enterTypeDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeDeclaration) listener.exitTypeDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) return visitor.visitTypeDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_modifier; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterModifier) listener.enterModifier(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitModifier) listener.exitModifier(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitModifier) return visitor.visitModifier(this);
		else return visitor.visitChildren(this);
	}
}

export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceModifier; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassOrInterfaceModifier) listener.enterClassOrInterfaceModifier(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassOrInterfaceModifier) listener.exitClassOrInterfaceModifier(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) return visitor.visitClassOrInterfaceModifier(this);
		else return visitor.visitChildren(this);
	}
}

export class VariableModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableModifier; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableModifier) listener.enterVariableModifier(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableModifier) listener.exitVariableModifier(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableModifier) return visitor.visitVariableModifier(this);
		else return visitor.visitChildren(this);
	}
}

export class ClassDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassDeclaration) listener.enterClassDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassDeclaration) listener.exitClassDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) return visitor.visitClassDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeParameters; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeParameters) listener.enterTypeParameters(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeParameters) listener.exitTypeParameters(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeParameters) return visitor.visitTypeParameters(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeParameter; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeParameter) listener.enterTypeParameter(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeParameter) listener.exitTypeParameter(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeParameter) return visitor.visitTypeParameter(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeBoundContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeBound; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeBound) listener.enterTypeBound(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeBound) listener.exitTypeBound(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeBound) return visitor.visitTypeBound(this);
		else return visitor.visitChildren(this);
	}
}

export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(JavaParser.ENUM, 0); }
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumDeclaration) listener.enterEnumDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumDeclaration) listener.exitEnumDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) return visitor.visitEnumDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumConstants; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumConstants) listener.enterEnumConstants(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumConstants) listener.exitEnumConstants(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumConstants) return visitor.visitEnumConstants(this);
		else return visitor.visitChildren(this);
	}
}

export class EnumConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumConstant; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumConstant) listener.enterEnumConstant(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumConstant) listener.exitEnumConstant(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumConstant) return visitor.visitEnumConstant(this);
		else return visitor.visitChildren(this);
	}
}

export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enumBodyDeclarations; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnumBodyDeclarations) listener.enterEnumBodyDeclarations(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnumBodyDeclarations) listener.exitEnumBodyDeclarations(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) return visitor.visitEnumBodyDeclarations(this);
		else return visitor.visitChildren(this);
	}
}

export class InterfaceDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceDeclaration) listener.enterInterfaceDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceDeclaration) listener.exitInterfaceDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) return visitor.visitInterfaceDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeListContext extends ParserRuleContext {
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeList; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeList) listener.enterTypeList(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeList) listener.exitTypeList(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeList) return visitor.visitTypeList(this);
		else return visitor.visitChildren(this);
	}
}

export class ClassBodyContext extends ParserRuleContext {
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classBody; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassBody) listener.enterClassBody(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassBody) listener.exitClassBody(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassBody) return visitor.visitClassBody(this);
		else return visitor.visitChildren(this);
	}
}

export class InterfaceBodyContext extends ParserRuleContext {
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceBody; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceBody) listener.enterInterfaceBody(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceBody) listener.exitInterfaceBody(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) return visitor.visitInterfaceBody(this);
		else return visitor.visitChildren(this);
	}
}

export class ClassBodyDeclarationContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
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
	@Override public get ruleIndex(): number { return JavaParser.RULE_classBodyDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassBodyDeclaration) listener.enterClassBodyDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassBodyDeclaration) listener.exitClassBodyDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) return visitor.visitClassBodyDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_memberDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMemberDeclaration) listener.enterMemberDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMemberDeclaration) listener.exitMemberDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) return visitor.visitMemberDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class MethodDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_methodDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMethodDeclaration) listener.enterMethodDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMethodDeclaration) listener.exitMethodDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) return visitor.visitMethodDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_genericMethodDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterGenericMethodDeclaration) listener.enterGenericMethodDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitGenericMethodDeclaration) listener.exitGenericMethodDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) return visitor.visitGenericMethodDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class ConstructorDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constructorDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstructorDeclaration) listener.enterConstructorDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstructorDeclaration) listener.exitConstructorDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) return visitor.visitConstructorDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_genericConstructorDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterGenericConstructorDeclaration) listener.enterGenericConstructorDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitGenericConstructorDeclaration) listener.exitGenericConstructorDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitGenericConstructorDeclaration) return visitor.visitGenericConstructorDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class FieldDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_fieldDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFieldDeclaration) listener.enterFieldDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFieldDeclaration) listener.exitFieldDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) return visitor.visitFieldDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
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
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceBodyDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceBodyDeclaration) listener.enterInterfaceBodyDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceBodyDeclaration) listener.exitInterfaceBodyDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) return visitor.visitInterfaceBodyDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceMemberDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceMemberDeclaration) listener.enterInterfaceMemberDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceMemberDeclaration) listener.exitInterfaceMemberDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) return visitor.visitInterfaceMemberDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class ConstDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstDeclaration) listener.enterConstDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstDeclaration) listener.exitConstDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) return visitor.visitConstDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class ConstantDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constantDeclarator; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstantDeclarator) listener.enterConstantDeclarator(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstantDeclarator) listener.exitConstantDeclarator(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) return visitor.visitConstantDeclarator(this);
		else return visitor.visitChildren(this);
	}
}

export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_interfaceMethodDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInterfaceMethodDeclaration) listener.enterInterfaceMethodDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInterfaceMethodDeclaration) listener.exitInterfaceMethodDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) return visitor.visitInterfaceMethodDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_genericInterfaceMethodDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterGenericInterfaceMethodDeclaration) listener.enterGenericInterfaceMethodDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitGenericInterfaceMethodDeclaration) listener.exitGenericInterfaceMethodDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitGenericInterfaceMethodDeclaration) return visitor.visitGenericInterfaceMethodDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableDeclarators; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableDeclarators) listener.enterVariableDeclarators(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableDeclarators) listener.exitVariableDeclarators(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) return visitor.visitVariableDeclarators(this);
		else return visitor.visitChildren(this);
	}
}

export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableDeclarator; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableDeclarator) listener.enterVariableDeclarator(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableDeclarator) listener.exitVariableDeclarator(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) return visitor.visitVariableDeclarator(this);
		else return visitor.visitChildren(this);
	}
}

export class VariableDeclaratorIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableDeclaratorId; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableDeclaratorId) listener.enterVariableDeclaratorId(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableDeclaratorId) listener.exitVariableDeclaratorId(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) return visitor.visitVariableDeclaratorId(this);
		else return visitor.visitChildren(this);
	}
}

export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_variableInitializer; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterVariableInitializer) listener.enterVariableInitializer(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitVariableInitializer) listener.exitVariableInitializer(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) return visitor.visitVariableInitializer(this);
		else return visitor.visitChildren(this);
	}
}

export class ArrayInitializerContext extends ParserRuleContext {
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_arrayInitializer; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterArrayInitializer) listener.enterArrayInitializer(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitArrayInitializer) listener.exitArrayInitializer(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) return visitor.visitArrayInitializer(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeTypeContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeType; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeType) listener.enterTypeType(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeType) listener.exitTypeType(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeType) return visitor.visitTypeType(this);
		else return visitor.visitChildren(this);
	}
}

export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.Identifier);
		} else {
			return this.getToken(JavaParser.Identifier, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classOrInterfaceType; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassOrInterfaceType) listener.enterClassOrInterfaceType(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassOrInterfaceType) listener.exitClassOrInterfaceType(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) return visitor.visitClassOrInterfaceType(this);
		else return visitor.visitChildren(this);
	}
}

export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_primitiveType; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPrimitiveType) listener.enterPrimitiveType(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPrimitiveType) listener.exitPrimitiveType(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) return visitor.visitPrimitiveType(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeArgumentsContext extends ParserRuleContext {
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeArguments; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeArguments) listener.enterTypeArguments(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeArguments) listener.exitTypeArguments(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeArguments) return visitor.visitTypeArguments(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeArgumentContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeArgument; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeArgument) listener.enterTypeArgument(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeArgument) listener.exitTypeArgument(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeArgument) return visitor.visitTypeArgument(this);
		else return visitor.visitChildren(this);
	}
}

export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_qualifiedNameList; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterQualifiedNameList) listener.enterQualifiedNameList(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitQualifiedNameList) listener.exitQualifiedNameList(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) return visitor.visitQualifiedNameList(this);
		else return visitor.visitChildren(this);
	}
}

export class FormalParametersContext extends ParserRuleContext {
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_formalParameters; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameters) listener.enterFormalParameters(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameters) listener.exitFormalParameters(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameters) return visitor.visitFormalParameters(this);
		else return visitor.visitChildren(this);
	}
}

export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_formalParameterList; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameterList) listener.enterFormalParameterList(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameterList) listener.exitFormalParameterList(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) return visitor.visitFormalParameterList(this);
		else return visitor.visitChildren(this);
	}
}

export class FormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_formalParameter; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFormalParameter) listener.enterFormalParameter(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFormalParameter) listener.exitFormalParameter(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFormalParameter) return visitor.visitFormalParameter(this);
		else return visitor.visitChildren(this);
	}
}

export class LastFormalParameterContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_lastFormalParameter; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLastFormalParameter) listener.enterLastFormalParameter(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLastFormalParameter) listener.exitLastFormalParameter(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) return visitor.visitLastFormalParameter(this);
		else return visitor.visitChildren(this);
	}
}

export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_methodBody; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterMethodBody) listener.enterMethodBody(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitMethodBody) listener.exitMethodBody(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitMethodBody) return visitor.visitMethodBody(this);
		else return visitor.visitChildren(this);
	}
}

export class ConstructorBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constructorBody; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstructorBody) listener.enterConstructorBody(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstructorBody) listener.exitConstructorBody(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstructorBody) return visitor.visitConstructorBody(this);
		else return visitor.visitChildren(this);
	}
}

export class QualifiedNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.Identifier);
		} else {
			return this.getToken(JavaParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_qualifiedName; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterQualifiedName) listener.enterQualifiedName(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitQualifiedName) listener.exitQualifiedName(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitQualifiedName) return visitor.visitQualifiedName(this);
		else return visitor.visitChildren(this);
	}
}

export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.FloatingPointLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(JavaParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_literal; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLiteral) listener.enterLiteral(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLiteral) listener.exitLiteral(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLiteral) return visitor.visitLiteral(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationContext extends ParserRuleContext {
	public annotationName(): AnnotationNameContext {
		return this.getRuleContext(0, AnnotationNameContext);
	}
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotation; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotation) listener.enterAnnotation(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotation) listener.exitAnnotation(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotation) return visitor.visitAnnotation(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationName; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationName) listener.enterAnnotationName(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationName) listener.exitAnnotationName(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationName) return visitor.visitAnnotationName(this);
		else return visitor.visitChildren(this);
	}
}

export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValuePairs; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValuePairs) listener.enterElementValuePairs(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValuePairs) listener.exitElementValuePairs(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) return visitor.visitElementValuePairs(this);
		else return visitor.visitChildren(this);
	}
}

export class ElementValuePairContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValuePair; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValuePair) listener.enterElementValuePair(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValuePair) listener.exitElementValuePair(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValuePair) return visitor.visitElementValuePair(this);
		else return visitor.visitChildren(this);
	}
}

export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValue; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValue) listener.enterElementValue(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValue) listener.exitElementValue(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValue) return visitor.visitElementValue(this);
		else return visitor.visitChildren(this);
	}
}

export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_elementValueArrayInitializer; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterElementValueArrayInitializer) listener.enterElementValueArrayInitializer(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitElementValueArrayInitializer) listener.exitElementValueArrayInitializer(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) return visitor.visitElementValueArrayInitializer(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeDeclaration) listener.enterAnnotationTypeDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeDeclaration) listener.exitAnnotationTypeDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) return visitor.visitAnnotationTypeDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationTypeBodyContext extends ParserRuleContext {
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeBody; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeBody) listener.enterAnnotationTypeBody(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeBody) listener.exitAnnotationTypeBody(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) return visitor.visitAnnotationTypeBody(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
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
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeElementDeclaration) listener.enterAnnotationTypeElementDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeElementDeclaration) listener.exitAnnotationTypeElementDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) return visitor.visitAnnotationTypeElementDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationTypeElementRest; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationTypeElementRest) listener.enterAnnotationTypeElementRest(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationTypeElementRest) listener.exitAnnotationTypeElementRest(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) return visitor.visitAnnotationTypeElementRest(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationMethodOrConstantRest; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationMethodOrConstantRest) listener.enterAnnotationMethodOrConstantRest(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationMethodOrConstantRest) listener.exitAnnotationMethodOrConstantRest(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) return visitor.visitAnnotationMethodOrConstantRest(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationMethodRestContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationMethodRest; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationMethodRest) listener.enterAnnotationMethodRest(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationMethodRest) listener.exitAnnotationMethodRest(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) return visitor.visitAnnotationMethodRest(this);
		else return visitor.visitChildren(this);
	}
}

export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_annotationConstantRest; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterAnnotationConstantRest) listener.enterAnnotationConstantRest(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitAnnotationConstantRest) listener.exitAnnotationConstantRest(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) return visitor.visitAnnotationConstantRest(this);
		else return visitor.visitChildren(this);
	}
}

export class DefaultValueContext extends ParserRuleContext {
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_defaultValue; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterDefaultValue) listener.enterDefaultValue(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitDefaultValue) listener.exitDefaultValue(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitDefaultValue) return visitor.visitDefaultValue(this);
		else return visitor.visitChildren(this);
	}
}

export class BlockContext extends ParserRuleContext {
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_block; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterBlock) listener.enterBlock(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitBlock) listener.exitBlock(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitBlock) return visitor.visitBlock(this);
		else return visitor.visitChildren(this);
	}
}

export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_blockStatement; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterBlockStatement) listener.enterBlockStatement(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitBlockStatement) listener.exitBlockStatement(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitBlockStatement) return visitor.visitBlockStatement(this);
		else return visitor.visitChildren(this);
	}
}

export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclarationStatement; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLocalVariableDeclarationStatement) listener.enterLocalVariableDeclarationStatement(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLocalVariableDeclarationStatement) listener.exitLocalVariableDeclarationStatement(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) return visitor.visitLocalVariableDeclarationStatement(this);
		else return visitor.visitChildren(this);
	}
}

export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_localVariableDeclaration; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterLocalVariableDeclaration) listener.enterLocalVariableDeclaration(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitLocalVariableDeclaration) listener.exitLocalVariableDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) return visitor.visitLocalVariableDeclaration(this);
		else return visitor.visitChildren(this);
	}
}

export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ASSERT(): TerminalNode | undefined { return this.tryGetToken(JavaParser.ASSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
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
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
	public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext;
	public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext | SwitchBlockStatementGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchBlockStatementGroupContext);
		} else {
			return this.getRuleContext(i, SwitchBlockStatementGroupContext);
		}
	}
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public statementExpression(): StatementExpressionContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_statement; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}

export class CatchClauseContext extends ParserRuleContext {
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_catchClause; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCatchClause) listener.enterCatchClause(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCatchClause) listener.exitCatchClause(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCatchClause) return visitor.visitCatchClause(this);
		else return visitor.visitChildren(this);
	}
}

export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_catchType; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCatchType) listener.enterCatchType(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCatchType) listener.exitCatchType(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCatchType) return visitor.visitCatchType(this);
		else return visitor.visitChildren(this);
	}
}

export class FinallyBlockContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_finallyBlock; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterFinallyBlock) listener.enterFinallyBlock(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitFinallyBlock) listener.exitFinallyBlock(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) return visitor.visitFinallyBlock(this);
		else return visitor.visitChildren(this);
	}
}

export class ResourceSpecificationContext extends ParserRuleContext {
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_resourceSpecification; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterResourceSpecification) listener.enterResourceSpecification(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitResourceSpecification) listener.exitResourceSpecification(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) return visitor.visitResourceSpecification(this);
		else return visitor.visitChildren(this);
	}
}

export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_resources; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterResources) listener.enterResources(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitResources) listener.exitResources(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitResources) return visitor.visitResources(this);
		else return visitor.visitChildren(this);
	}
}

export class ResourceContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_resource; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterResource) listener.enterResource(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitResource) listener.exitResource(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitResource) return visitor.visitResource(this);
		else return visitor.visitChildren(this);
	}
}

export class SwitchBlockStatementGroupContext extends ParserRuleContext {
	public switchLabel(): SwitchLabelContext[];
	public switchLabel(i: number): SwitchLabelContext;
	public switchLabel(i?: number): SwitchLabelContext | SwitchLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SwitchLabelContext);
		} else {
			return this.getRuleContext(i, SwitchLabelContext);
		}
	}
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_switchBlockStatementGroup; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterSwitchBlockStatementGroup) listener.enterSwitchBlockStatementGroup(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitSwitchBlockStatementGroup) listener.exitSwitchBlockStatementGroup(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitSwitchBlockStatementGroup) return visitor.visitSwitchBlockStatementGroup(this);
		else return visitor.visitChildren(this);
	}
}

export class SwitchLabelContext extends ParserRuleContext {
	public constantExpression(): ConstantExpressionContext | undefined {
		return this.tryGetRuleContext(0, ConstantExpressionContext);
	}
	public enumConstantName(): EnumConstantNameContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_switchLabel; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterSwitchLabel) listener.enterSwitchLabel(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitSwitchLabel) listener.exitSwitchLabel(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitSwitchLabel) return visitor.visitSwitchLabel(this);
		else return visitor.visitChildren(this);
	}
}

export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_forControl; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterForControl) listener.enterForControl(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitForControl) listener.exitForControl(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitForControl) return visitor.visitForControl(this);
		else return visitor.visitChildren(this);
	}
}

export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_forInit; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterForInit) listener.enterForInit(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitForInit) listener.exitForInit(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitForInit) return visitor.visitForInit(this);
		else return visitor.visitChildren(this);
	}
}

export class EnhancedForControlContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_enhancedForControl; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterEnhancedForControl) listener.enterEnhancedForControl(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitEnhancedForControl) listener.exitEnhancedForControl(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) return visitor.visitEnhancedForControl(this);
		else return visitor.visitChildren(this);
	}
}

export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_forUpdate; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterForUpdate) listener.enterForUpdate(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitForUpdate) listener.exitForUpdate(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitForUpdate) return visitor.visitForUpdate(this);
		else return visitor.visitChildren(this);
	}
}

export class ParExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_parExpression; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterParExpression) listener.enterParExpression(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitParExpression) listener.exitParExpression(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitParExpression) return visitor.visitParExpression(this);
		else return visitor.visitChildren(this);
	}
}

export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_expressionList; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExpressionList) listener.enterExpressionList(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExpressionList) listener.exitExpressionList(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExpressionList) return visitor.visitExpressionList(this);
		else return visitor.visitChildren(this);
	}
}

export class StatementExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_statementExpression; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterStatementExpression) listener.enterStatementExpression(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitStatementExpression) listener.exitStatementExpression(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitStatementExpression) return visitor.visitStatementExpression(this);
		else return visitor.visitChildren(this);
	}
}

export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_constantExpression; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterConstantExpression) listener.enterConstantExpression(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitConstantExpression) listener.exitConstantExpression(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitConstantExpression) return visitor.visitConstantExpression(this);
		else return visitor.visitChildren(this);
	}
}

export class ExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
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
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public innerCreator(): InnerCreatorContext | undefined {
		return this.tryGetRuleContext(0, InnerCreatorContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_expression; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}

export class PrimaryContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_primary; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterPrimary) listener.enterPrimary(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitPrimary) listener.exitPrimary(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitPrimary) return visitor.visitPrimary(this);
		else return visitor.visitChildren(this);
	}
}

export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_creator; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCreator) listener.enterCreator(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCreator) listener.exitCreator(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCreator) return visitor.visitCreator(this);
		else return visitor.visitChildren(this);
	}
}

export class CreatedNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavaParser.Identifier);
		} else {
			return this.getToken(JavaParser.Identifier, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_createdName; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterCreatedName) listener.enterCreatedName(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitCreatedName) listener.exitCreatedName(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitCreatedName) return visitor.visitCreatedName(this);
		else return visitor.visitChildren(this);
	}
}

export class InnerCreatorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(JavaParser.Identifier, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_innerCreator; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterInnerCreator) listener.enterInnerCreator(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitInnerCreator) listener.exitInnerCreator(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitInnerCreator) return visitor.visitInnerCreator(this);
		else return visitor.visitChildren(this);
	}
}

export class ArrayCreatorRestContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
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
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_arrayCreatorRest; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterArrayCreatorRest) listener.enterArrayCreatorRest(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitArrayCreatorRest) listener.exitArrayCreatorRest(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) return visitor.visitArrayCreatorRest(this);
		else return visitor.visitChildren(this);
	}
}

export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_classCreatorRest; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterClassCreatorRest) listener.enterClassCreatorRest(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitClassCreatorRest) listener.exitClassCreatorRest(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) return visitor.visitClassCreatorRest(this);
		else return visitor.visitChildren(this);
	}
}

export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocation; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExplicitGenericInvocation) listener.enterExplicitGenericInvocation(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExplicitGenericInvocation) listener.exitExplicitGenericInvocation(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) return visitor.visitExplicitGenericInvocation(this);
		else return visitor.visitChildren(this);
	}
}

export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArguments; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterNonWildcardTypeArguments) listener.enterNonWildcardTypeArguments(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitNonWildcardTypeArguments) listener.exitNonWildcardTypeArguments(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) return visitor.visitNonWildcardTypeArguments(this);
		else return visitor.visitChildren(this);
	}
}

export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_typeArgumentsOrDiamond; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterTypeArgumentsOrDiamond) listener.enterTypeArgumentsOrDiamond(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitTypeArgumentsOrDiamond) listener.exitTypeArgumentsOrDiamond(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) return visitor.visitTypeArgumentsOrDiamond(this);
		else return visitor.visitChildren(this);
	}
}

export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterNonWildcardTypeArgumentsOrDiamond) listener.enterNonWildcardTypeArgumentsOrDiamond(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitNonWildcardTypeArgumentsOrDiamond) listener.exitNonWildcardTypeArgumentsOrDiamond(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArgumentsOrDiamond) return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
		else return visitor.visitChildren(this);
	}
}

export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_superSuffix; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterSuperSuffix) listener.enterSuperSuffix(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitSuperSuffix) listener.exitSuperSuffix(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitSuperSuffix) return visitor.visitSuperSuffix(this);
		else return visitor.visitChildren(this);
	}
}

export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(JavaParser.Identifier, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_explicitGenericInvocationSuffix; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterExplicitGenericInvocationSuffix) listener.enterExplicitGenericInvocationSuffix(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitExplicitGenericInvocationSuffix) listener.exitExplicitGenericInvocationSuffix(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocationSuffix) return visitor.visitExplicitGenericInvocationSuffix(this);
		else return visitor.visitChildren(this);
	}
}

export class ArgumentsContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return JavaParser.RULE_arguments; }
	@Override
	public enterRule(listener: JavaListener): void {
		if (listener.enterArguments) listener.enterArguments(this);
	}
	@Override
	public exitRule(listener: JavaListener): void {
		if (listener.exitArguments) listener.exitArguments(this);
	}
	@Override
	public accept<Result>(visitor: JavaVisitor<Result>): Result {
		if (visitor.visitArguments) return visitor.visitArguments(this);
		else return visitor.visitChildren(this);
	}
}

export class JavaParser extends Parser {
    public static readonly ABSTRACT= 1;
    public static readonly ASSERT= 2;
    public static readonly BOOLEAN= 3;
    public static readonly BREAK= 4;
    public static readonly BYTE= 5;
    public static readonly CASE= 6;
    public static readonly CATCH= 7;
    public static readonly CHAR= 8;
    public static readonly CLASS= 9;
    public static readonly CONST= 10;
    public static readonly CONTINUE= 11;
    public static readonly DEFAULT= 12;
    public static readonly DO= 13;
    public static readonly DOUBLE= 14;
    public static readonly ELSE= 15;
    public static readonly ENUM= 16;
    public static readonly EXTENDS= 17;
    public static readonly FINAL= 18;
    public static readonly FINALLY= 19;
    public static readonly FLOAT= 20;
    public static readonly FOR= 21;
    public static readonly IF= 22;
    public static readonly GOTO= 23;
    public static readonly IMPLEMENTS= 24;
    public static readonly IMPORT= 25;
    public static readonly INSTANCEOF= 26;
    public static readonly INT= 27;
    public static readonly INTERFACE= 28;
    public static readonly LONG= 29;
    public static readonly NATIVE= 30;
    public static readonly NEW= 31;
    public static readonly PACKAGE= 32;
    public static readonly PRIVATE= 33;
    public static readonly PROTECTED= 34;
    public static readonly PUBLIC= 35;
    public static readonly RETURN= 36;
    public static readonly SHORT= 37;
    public static readonly STATIC= 38;
    public static readonly STRICTFP= 39;
    public static readonly SUPER= 40;
    public static readonly SWITCH= 41;
    public static readonly SYNCHRONIZED= 42;
    public static readonly THIS= 43;
    public static readonly THROW= 44;
    public static readonly THROWS= 45;
    public static readonly TRANSIENT= 46;
    public static readonly TRY= 47;
    public static readonly VOID= 48;
    public static readonly VOLATILE= 49;
    public static readonly WHILE= 50;
    public static readonly IntegerLiteral= 51;
    public static readonly FloatingPointLiteral= 52;
    public static readonly BooleanLiteral= 53;
    public static readonly CharacterLiteral= 54;
    public static readonly StringLiteral= 55;
    public static readonly NullLiteral= 56;
    public static readonly LPAREN= 57;
    public static readonly RPAREN= 58;
    public static readonly LBRACE= 59;
    public static readonly RBRACE= 60;
    public static readonly LBRACK= 61;
    public static readonly RBRACK= 62;
    public static readonly SEMI= 63;
    public static readonly COMMA= 64;
    public static readonly DOT= 65;
    public static readonly ASSIGN= 66;
    public static readonly GT= 67;
    public static readonly LT= 68;
    public static readonly BANG= 69;
    public static readonly TILDE= 70;
    public static readonly QUESTION= 71;
    public static readonly COLON= 72;
    public static readonly EQUAL= 73;
    public static readonly LE= 74;
    public static readonly GE= 75;
    public static readonly NOTEQUAL= 76;
    public static readonly AND= 77;
    public static readonly OR= 78;
    public static readonly INC= 79;
    public static readonly DEC= 80;
    public static readonly ADD= 81;
    public static readonly SUB= 82;
    public static readonly MUL= 83;
    public static readonly DIV= 84;
    public static readonly BITAND= 85;
    public static readonly BITOR= 86;
    public static readonly CARET= 87;
    public static readonly MOD= 88;
    public static readonly ADD_ASSIGN= 89;
    public static readonly SUB_ASSIGN= 90;
    public static readonly MUL_ASSIGN= 91;
    public static readonly DIV_ASSIGN= 92;
    public static readonly AND_ASSIGN= 93;
    public static readonly OR_ASSIGN= 94;
    public static readonly XOR_ASSIGN= 95;
    public static readonly MOD_ASSIGN= 96;
    public static readonly LSHIFT_ASSIGN= 97;
    public static readonly RSHIFT_ASSIGN= 98;
    public static readonly URSHIFT_ASSIGN= 99;
    public static readonly Identifier= 100;
    public static readonly AT= 101;
    public static readonly ELLIPSIS= 102;
    public static readonly WS= 103;
    public static readonly COMMENT= 104;
    public static readonly LINE_COMMENT= 105;
    public static readonly RULE_compilationUnit = 0;
    public static readonly RULE_packageDeclaration = 1;
    public static readonly RULE_importDeclaration = 2;
    public static readonly RULE_typeDeclaration = 3;
    public static readonly RULE_modifier = 4;
    public static readonly RULE_classOrInterfaceModifier = 5;
    public static readonly RULE_variableModifier = 6;
    public static readonly RULE_classDeclaration = 7;
    public static readonly RULE_typeParameters = 8;
    public static readonly RULE_typeParameter = 9;
    public static readonly RULE_typeBound = 10;
    public static readonly RULE_enumDeclaration = 11;
    public static readonly RULE_enumConstants = 12;
    public static readonly RULE_enumConstant = 13;
    public static readonly RULE_enumBodyDeclarations = 14;
    public static readonly RULE_interfaceDeclaration = 15;
    public static readonly RULE_typeList = 16;
    public static readonly RULE_classBody = 17;
    public static readonly RULE_interfaceBody = 18;
    public static readonly RULE_classBodyDeclaration = 19;
    public static readonly RULE_memberDeclaration = 20;
    public static readonly RULE_methodDeclaration = 21;
    public static readonly RULE_genericMethodDeclaration = 22;
    public static readonly RULE_constructorDeclaration = 23;
    public static readonly RULE_genericConstructorDeclaration = 24;
    public static readonly RULE_fieldDeclaration = 25;
    public static readonly RULE_interfaceBodyDeclaration = 26;
    public static readonly RULE_interfaceMemberDeclaration = 27;
    public static readonly RULE_constDeclaration = 28;
    public static readonly RULE_constantDeclarator = 29;
    public static readonly RULE_interfaceMethodDeclaration = 30;
    public static readonly RULE_genericInterfaceMethodDeclaration = 31;
    public static readonly RULE_variableDeclarators = 32;
    public static readonly RULE_variableDeclarator = 33;
    public static readonly RULE_variableDeclaratorId = 34;
    public static readonly RULE_variableInitializer = 35;
    public static readonly RULE_arrayInitializer = 36;
    public static readonly RULE_enumConstantName = 37;
    public static readonly RULE_typeType = 38;
    public static readonly RULE_classOrInterfaceType = 39;
    public static readonly RULE_primitiveType = 40;
    public static readonly RULE_typeArguments = 41;
    public static readonly RULE_typeArgument = 42;
    public static readonly RULE_qualifiedNameList = 43;
    public static readonly RULE_formalParameters = 44;
    public static readonly RULE_formalParameterList = 45;
    public static readonly RULE_formalParameter = 46;
    public static readonly RULE_lastFormalParameter = 47;
    public static readonly RULE_methodBody = 48;
    public static readonly RULE_constructorBody = 49;
    public static readonly RULE_qualifiedName = 50;
    public static readonly RULE_literal = 51;
    public static readonly RULE_annotation = 52;
    public static readonly RULE_annotationName = 53;
    public static readonly RULE_elementValuePairs = 54;
    public static readonly RULE_elementValuePair = 55;
    public static readonly RULE_elementValue = 56;
    public static readonly RULE_elementValueArrayInitializer = 57;
    public static readonly RULE_annotationTypeDeclaration = 58;
    public static readonly RULE_annotationTypeBody = 59;
    public static readonly RULE_annotationTypeElementDeclaration = 60;
    public static readonly RULE_annotationTypeElementRest = 61;
    public static readonly RULE_annotationMethodOrConstantRest = 62;
    public static readonly RULE_annotationMethodRest = 63;
    public static readonly RULE_annotationConstantRest = 64;
    public static readonly RULE_defaultValue = 65;
    public static readonly RULE_block = 66;
    public static readonly RULE_blockStatement = 67;
    public static readonly RULE_localVariableDeclarationStatement = 68;
    public static readonly RULE_localVariableDeclaration = 69;
    public static readonly RULE_statement = 70;
    public static readonly RULE_catchClause = 71;
    public static readonly RULE_catchType = 72;
    public static readonly RULE_finallyBlock = 73;
    public static readonly RULE_resourceSpecification = 74;
    public static readonly RULE_resources = 75;
    public static readonly RULE_resource = 76;
    public static readonly RULE_switchBlockStatementGroup = 77;
    public static readonly RULE_switchLabel = 78;
    public static readonly RULE_forControl = 79;
    public static readonly RULE_forInit = 80;
    public static readonly RULE_enhancedForControl = 81;
    public static readonly RULE_forUpdate = 82;
    public static readonly RULE_parExpression = 83;
    public static readonly RULE_expressionList = 84;
    public static readonly RULE_statementExpression = 85;
    public static readonly RULE_constantExpression = 86;
    public static readonly RULE_expression = 87;
    public static readonly RULE_primary = 88;
    public static readonly RULE_creator = 89;
    public static readonly RULE_createdName = 90;
    public static readonly RULE_innerCreator = 91;
    public static readonly RULE_arrayCreatorRest = 92;
    public static readonly RULE_classCreatorRest = 93;
    public static readonly RULE_explicitGenericInvocation = 94;
    public static readonly RULE_nonWildcardTypeArguments = 95;
    public static readonly RULE_typeArgumentsOrDiamond = 96;
    public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 97;
    public static readonly RULE_superSuffix = 98;
    public static readonly RULE_explicitGenericInvocationSuffix = 99;
    public static readonly RULE_arguments = 100;
    public static readonly ruleNames: string[] = [
        "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration",
        "modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration",
        "typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants",
        "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "typeList",
        "classBody", "interfaceBody", "classBodyDeclaration", "memberDeclaration",
        "methodDeclaration", "genericMethodDeclaration", "constructorDeclaration",
        "genericConstructorDeclaration", "fieldDeclaration", "interfaceBodyDeclaration",
        "interfaceMemberDeclaration", "constDeclaration", "constantDeclarator",
        "interfaceMethodDeclaration", "genericInterfaceMethodDeclaration", "variableDeclarators",
        "variableDeclarator", "variableDeclaratorId", "variableInitializer", "arrayInitializer",
        "enumConstantName", "typeType", "classOrInterfaceType", "primitiveType",
        "typeArguments", "typeArgument", "qualifiedNameList", "formalParameters",
        "formalParameterList", "formalParameter", "lastFormalParameter", "methodBody",
        "constructorBody", "qualifiedName", "literal", "annotation", "annotationName",
        "elementValuePairs", "elementValuePair", "elementValue", "elementValueArrayInitializer",
        "annotationTypeDeclaration", "annotationTypeBody", "annotationTypeElementDeclaration",
        "annotationTypeElementRest", "annotationMethodOrConstantRest", "annotationMethodRest",
        "annotationConstantRest", "defaultValue", "block", "blockStatement", "localVariableDeclarationStatement",
        "localVariableDeclaration", "statement", "catchClause", "catchType", "finallyBlock",
        "resourceSpecification", "resources", "resource", "switchBlockStatementGroup",
        "switchLabel", "forControl", "forInit", "enhancedForControl", "forUpdate",
        "parExpression", "expressionList", "statementExpression", "constantExpression",
        "expression", "primary", "creator", "createdName", "innerCreator", "arrayCreatorRest",
        "classCreatorRest", "explicitGenericInvocation", "nonWildcardTypeArguments",
        "typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "superSuffix",
        "explicitGenericInvocationSuffix", "arguments",
    ];

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'",
        "'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'", "'default'",
        "'do'", "'double'", "'else'", "'enum'", "'extends'", "'final'", "'finally'",
        "'float'", "'for'", "'if'", "'goto'", "'implements'", "'import'", "'instanceof'",
        "'int'", "'interface'", "'long'", "'native'", "'new'", "'package'", "'private'",
        "'protected'", "'public'", "'return'", "'short'", "'static'", "'strictfp'",
        "'super'", "'switch'", "'synchronized'", "'this'", "'throw'", "'throws'",
        "'transient'", "'try'", "'void'", "'volatile'", "'while'", undefined,
        undefined, undefined, undefined, undefined, "'null'", "'('", "')'", "'{'",
        "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'",
        "'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'",
        "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='",
        "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='",
        "'>>>='", undefined, "'@'", "'...'",
    ];
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE", "CATCH",
        "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE",
        "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "GOTO", "IMPLEMENTS",
        "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE",
        "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP",
        "SUPER", "SWITCH", "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT",
        "TRY", "VOID", "VOLATILE", "WHILE", "IntegerLiteral", "FloatingPointLiteral",
        "BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral",
        "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA",
        "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL",
        "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL",
        "DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN",
        "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN",
        "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "Identifier", "AT",
        "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT",
    ];
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavaParser._LITERAL_NAMES, JavaParser._SYMBOLIC_NAMES, []);

    @Override
    @NotNull
    public get vocabulary(): Vocabulary {
        return JavaParser.VOCABULARY;
    }

    @Override
    public get grammarFileName(): string { return "Java.g4"; }

    @Override
    public get ruleNames(): string[] { return JavaParser.ruleNames; }

    @Override
    public get serializedATN(): string { return JavaParser._serializedATN; }

    constructor(input: TokenStream) {
        super(input);
        this._interp = new ParserATNSimulator(JavaParser._ATN, this);
    }
    @RuleVersion(0)
    public compilationUnit() {
        const _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, JavaParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 203;
                this._errHandler.sync(this);
                switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
                    case 1:
                    {
                        this.state = 202;
                        this.packageDeclaration();
                    }
                    break;
                }
                this.state = 208;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.IMPORT) {
                    {
                        {
                            this.state = 205;
                            this.importDeclaration();
                        }
                    }
                    this.state = 210;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 214;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.CLASS) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.INTERFACE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 211;
                            this.typeDeclaration();
                        }
                    }
                    this.state = 216;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 217;
                this.match(JavaParser.EOF);
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
    public packageDeclaration() {
        const _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, JavaParser.RULE_packageDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT) {
                    {
                        {
                            this.state = 219;
                            this.annotation();
                        }
                    }
                    this.state = 224;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 225;
                this.match(JavaParser.PACKAGE);
                this.state = 226;
                this.qualifiedName();
                this.state = 227;
                this.match(JavaParser.SEMI);
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
    public importDeclaration() {
        const _localctx = new ImportDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, JavaParser.RULE_importDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 229;
                this.match(JavaParser.IMPORT);
                this.state = 231;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.STATIC) {
                    {
                        this.state = 230;
                        this.match(JavaParser.STATIC);
                    }
                }

                this.state = 233;
                this.qualifiedName();
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DOT) {
                    {
                        this.state = 234;
                        this.match(JavaParser.DOT);
                        this.state = 235;
                        this.match(JavaParser.MUL);
                    }
                }

                this.state = 238;
                this.match(JavaParser.SEMI);
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
    public typeDeclaration() {
        const _localctx = new TypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, JavaParser.RULE_typeDeclaration);
        let _la: number;
        try {
            let _alt: number;
            this.state = 269;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 243;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT) {
                        {
                            {
                                this.state = 240;
                                this.classOrInterfaceModifier();
                            }
                        }
                        this.state = 245;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 246;
                    this.classDeclaration();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 250;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT) {
                        {
                            {
                                this.state = 247;
                                this.classOrInterfaceModifier();
                            }
                        }
                        this.state = 252;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 253;
                    this.enumDeclaration();
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 257;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0) || _la === JavaParser.AT) {
                        {
                            {
                                this.state = 254;
                                this.classOrInterfaceModifier();
                            }
                        }
                        this.state = 259;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 260;
                    this.interfaceDeclaration();
                }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                    this.state = 264;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 261;
                                    this.classOrInterfaceModifier();
                                }
                            }
                        }
                        this.state = 266;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
                    }
                    this.state = 267;
                    this.annotationTypeDeclaration();
                }
                    break;

                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                    this.state = 268;
                    this.match(JavaParser.SEMI);
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
    public modifier() {
        const _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, JavaParser.RULE_modifier);
        let _la: number;
        try {
            this.state = 273;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.FINAL:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 271;
                    this.classOrInterfaceModifier();
                }
                    break;
                case JavaParser.NATIVE:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOLATILE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 272;
                    _la = this._input.LA(1);
                    if ( !(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (JavaParser.NATIVE - 30)) | (1 << (JavaParser.SYNCHRONIZED - 30)) | (1 << (JavaParser.TRANSIENT - 30)) | (1 << (JavaParser.VOLATILE - 30)))) !== 0)) ) {
                        this._errHandler.recoverInline(this);
                    } else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }

                        this._errHandler.reportMatch(this);
                        this.consume();
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
    public classOrInterfaceModifier() {
        const _localctx = new ClassOrInterfaceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, JavaParser.RULE_classOrInterfaceModifier);
        let _la: number;
        try {
            this.state = 277;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 275;
                    this.annotation();
                }
                    break;
                case JavaParser.ABSTRACT:
                case JavaParser.FINAL:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 276;
                    _la = this._input.LA(1);
                    if ( !(_la === JavaParser.ABSTRACT || _la === JavaParser.FINAL || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)))) !== 0)) ) {
                        this._errHandler.recoverInline(this);
                    } else {
                        if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                        }

                        this._errHandler.reportMatch(this);
                        this.consume();
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
    public variableModifier() {
        const _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, JavaParser.RULE_variableModifier);
        try {
            this.state = 281;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.FINAL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 279;
                    this.match(JavaParser.FINAL);
                }
                    break;
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 280;
                    this.annotation();
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
    public classDeclaration() {
        const _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, JavaParser.RULE_classDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 283;
                this.match(JavaParser.CLASS);
                this.state = 284;
                this.match(JavaParser.Identifier);
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 285;
                        this.typeParameters();
                    }
                }

                this.state = 290;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 288;
                        this.match(JavaParser.EXTENDS);
                        this.state = 289;
                        this.typeType();
                    }
                }

                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 292;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 293;
                        this.typeList();
                    }
                }

                this.state = 296;
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
    public typeParameters() {
        const _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, JavaParser.RULE_typeParameters);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 298;
                this.match(JavaParser.LT);
                this.state = 299;
                this.typeParameter();
                this.state = 304;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 300;
                            this.match(JavaParser.COMMA);
                            this.state = 301;
                            this.typeParameter();
                        }
                    }
                    this.state = 306;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 307;
                this.match(JavaParser.GT);
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
    public typeParameter() {
        const _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, JavaParser.RULE_typeParameter);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 309;
                this.match(JavaParser.Identifier);
                this.state = 312;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 310;
                        this.match(JavaParser.EXTENDS);
                        this.state = 311;
                        this.typeBound();
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
    public typeBound() {
        const _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, JavaParser.RULE_typeBound);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 314;
                this.typeType();
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITAND) {
                    {
                        {
                            this.state = 315;
                            this.match(JavaParser.BITAND);
                            this.state = 316;
                            this.typeType();
                        }
                    }
                    this.state = 321;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public enumDeclaration() {
        const _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, JavaParser.RULE_enumDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.match(JavaParser.ENUM);
                this.state = 323;
                this.match(JavaParser.Identifier);
                this.state = 326;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.IMPLEMENTS) {
                    {
                        this.state = 324;
                        this.match(JavaParser.IMPLEMENTS);
                        this.state = 325;
                        this.typeList();
                    }
                }

                this.state = 328;
                this.match(JavaParser.LBRACE);
                this.state = 330;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        this.state = 329;
                        this.enumConstants();
                    }
                }

                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 332;
                        this.match(JavaParser.COMMA);
                    }
                }

                this.state = 336;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 335;
                        this.enumBodyDeclarations();
                    }
                }

                this.state = 338;
                this.match(JavaParser.RBRACE);
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
    public enumConstants() {
        const _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, JavaParser.RULE_enumConstants);
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 340;
                this.enumConstant();
                this.state = 345;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                    if ( _alt === 1 ) {
                        {
                            {
                                this.state = 341;
                                this.match(JavaParser.COMMA);
                                this.state = 342;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 347;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
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
    public enumConstant() {
        const _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, JavaParser.RULE_enumConstant);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.AT) {
                    {
                        {
                            this.state = 348;
                            this.annotation();
                        }
                    }
                    this.state = 353;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 354;
                this.match(JavaParser.Identifier);
                this.state = 356;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 355;
                        this.arguments();
                    }
                }

                this.state = 359;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LBRACE) {
                    {
                        this.state = 358;
                        this.classBody();
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
    public enumBodyDeclarations() {
        const _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, JavaParser.RULE_enumBodyDeclarations);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this.match(JavaParser.SEMI);
                this.state = 365;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || _la === JavaParser.LT || _la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 362;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 367;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public interfaceDeclaration() {
        const _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, JavaParser.RULE_interfaceDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 368;
                this.match(JavaParser.INTERFACE);
                this.state = 369;
                this.match(JavaParser.Identifier);
                this.state = 371;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 370;
                        this.typeParameters();
                    }
                }

                this.state = 375;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.EXTENDS) {
                    {
                        this.state = 373;
                        this.match(JavaParser.EXTENDS);
                        this.state = 374;
                        this.typeList();
                    }
                }

                this.state = 377;
                this.interfaceBody();
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
    public typeList() {
        const _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, JavaParser.RULE_typeList);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 379;
                this.typeType();
                this.state = 384;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 380;
                            this.match(JavaParser.COMMA);
                            this.state = 381;
                            this.typeType();
                        }
                    }
                    this.state = 386;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public classBody() {
        const _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, JavaParser.RULE_classBody);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 387;
                this.match(JavaParser.LBRACE);
                this.state = 391;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.LBRACE - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || _la === JavaParser.LT || _la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 388;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 393;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 394;
                this.match(JavaParser.RBRACE);
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
    public interfaceBody() {
        const _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, JavaParser.RULE_interfaceBody);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 396;
                this.match(JavaParser.LBRACE);
                this.state = 400;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || _la === JavaParser.LT || _la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 397;
                            this.interfaceBodyDeclaration();
                        }
                    }
                    this.state = 402;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 403;
                this.match(JavaParser.RBRACE);
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
    public classBodyDeclaration() {
        const _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, JavaParser.RULE_classBodyDeclaration);
        let _la: number;
        try {
            let _alt: number;
            this.state = 417;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 405;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 407;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.STATIC) {
                        {
                            this.state = 406;
                            this.match(JavaParser.STATIC);
                        }
                    }

                    this.state = 409;
                    this.block();
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 413;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 410;
                                    this.modifier();
                                }
                            }
                        }
                        this.state = 415;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
                    }
                    this.state = 416;
                    this.memberDeclaration();
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
    public memberDeclaration() {
        const _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 428;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 419;
                    this.methodDeclaration();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 420;
                    this.genericMethodDeclaration();
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 421;
                    this.fieldDeclaration();
                }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                    this.state = 422;
                    this.constructorDeclaration();
                }
                    break;

                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                    this.state = 423;
                    this.genericConstructorDeclaration();
                }
                    break;

                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                    this.state = 424;
                    this.interfaceDeclaration();
                }
                    break;

                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                    this.state = 425;
                    this.annotationTypeDeclaration();
                }
                    break;

                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                    this.state = 426;
                    this.classDeclaration();
                }
                    break;

                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                    this.state = 427;
                    this.enumDeclaration();
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
    public methodDeclaration() {
        const _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, JavaParser.RULE_methodDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 432;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.SHORT:
                    case JavaParser.Identifier:
                    {
                        this.state = 430;
                        this.typeType();
                    }
                    break;
                    case JavaParser.VOID:
                    {
                        this.state = 431;
                        this.match(JavaParser.VOID);
                    }
                    break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 434;
                this.match(JavaParser.Identifier);
                this.state = 435;
                this.formalParameters();
                this.state = 440;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 436;
                            this.match(JavaParser.LBRACK);
                            this.state = 437;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 442;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 445;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 443;
                        this.match(JavaParser.THROWS);
                        this.state = 444;
                        this.qualifiedNameList();
                    }
                }

                this.state = 449;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.LBRACE:
                    {
                        this.state = 447;
                        this.methodBody();
                    }
                    break;
                    case JavaParser.SEMI:
                    {
                        this.state = 448;
                        this.match(JavaParser.SEMI);
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
    public genericMethodDeclaration() {
        const _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 451;
                this.typeParameters();
                this.state = 452;
                this.methodDeclaration();
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
    public constructorDeclaration() {
        const _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, JavaParser.RULE_constructorDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 454;
                this.match(JavaParser.Identifier);
                this.state = 455;
                this.formalParameters();
                this.state = 458;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 456;
                        this.match(JavaParser.THROWS);
                        this.state = 457;
                        this.qualifiedNameList();
                    }
                }

                this.state = 460;
                this.constructorBody();
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
    public genericConstructorDeclaration() {
        const _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 462;
                this.typeParameters();
                this.state = 463;
                this.constructorDeclaration();
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
    public fieldDeclaration() {
        const _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 465;
                this.typeType();
                this.state = 466;
                this.variableDeclarators();
                this.state = 467;
                this.match(JavaParser.SEMI);
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
    public interfaceBodyDeclaration() {
        const _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, JavaParser.RULE_interfaceBodyDeclaration);
        try {
            let _alt: number;
            this.state = 477;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.CLASS:
                case JavaParser.DOUBLE:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.INTERFACE:
                case JavaParser.LONG:
                case JavaParser.NATIVE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.SHORT:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOID:
                case JavaParser.VOLATILE:
                case JavaParser.LT:
                case JavaParser.Identifier:
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 472;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 469;
                                    this.modifier();
                                }
                            }
                        }
                        this.state = 474;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
                    }
                    this.state = 475;
                    this.interfaceMemberDeclaration();
                }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 476;
                    this.match(JavaParser.SEMI);
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
    public interfaceMemberDeclaration() {
        const _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 486;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 479;
                    this.constDeclaration();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 480;
                    this.interfaceMethodDeclaration();
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 481;
                    this.genericInterfaceMethodDeclaration();
                }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                    this.state = 482;
                    this.interfaceDeclaration();
                }
                    break;

                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                    this.state = 483;
                    this.annotationTypeDeclaration();
                }
                    break;

                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                    this.state = 484;
                    this.classDeclaration();
                }
                    break;

                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                    this.state = 485;
                    this.enumDeclaration();
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
    public constDeclaration() {
        const _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, JavaParser.RULE_constDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 488;
                this.typeType();
                this.state = 489;
                this.constantDeclarator();
                this.state = 494;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 490;
                            this.match(JavaParser.COMMA);
                            this.state = 491;
                            this.constantDeclarator();
                        }
                    }
                    this.state = 496;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 497;
                this.match(JavaParser.SEMI);
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
    public constantDeclarator() {
        const _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, JavaParser.RULE_constantDeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 499;
                this.match(JavaParser.Identifier);
                this.state = 504;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 500;
                            this.match(JavaParser.LBRACK);
                            this.state = 501;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 506;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 507;
                this.match(JavaParser.ASSIGN);
                this.state = 508;
                this.variableInitializer();
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
    public interfaceMethodDeclaration() {
        const _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, JavaParser.RULE_interfaceMethodDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 512;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.SHORT:
                    case JavaParser.Identifier:
                    {
                        this.state = 510;
                        this.typeType();
                    }
                    break;
                    case JavaParser.VOID:
                    {
                        this.state = 511;
                        this.match(JavaParser.VOID);
                    }
                    break;
                    default:
                        throw new NoViableAltException(this);
                }
                this.state = 514;
                this.match(JavaParser.Identifier);
                this.state = 515;
                this.formalParameters();
                this.state = 520;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 516;
                            this.match(JavaParser.LBRACK);
                            this.state = 517;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 522;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.THROWS) {
                    {
                        this.state = 523;
                        this.match(JavaParser.THROWS);
                        this.state = 524;
                        this.qualifiedNameList();
                    }
                }

                this.state = 527;
                this.match(JavaParser.SEMI);
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
    public genericInterfaceMethodDeclaration() {
        const _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, JavaParser.RULE_genericInterfaceMethodDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                this.typeParameters();
                this.state = 530;
                this.interfaceMethodDeclaration();
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
    public variableDeclarators() {
        const _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, JavaParser.RULE_variableDeclarators);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this.variableDeclarator();
                this.state = 537;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 533;
                            this.match(JavaParser.COMMA);
                            this.state = 534;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 539;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public variableDeclarator() {
        const _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, JavaParser.RULE_variableDeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 540;
                this.variableDeclaratorId();
                this.state = 543;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.ASSIGN) {
                    {
                        this.state = 541;
                        this.match(JavaParser.ASSIGN);
                        this.state = 542;
                        this.variableInitializer();
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
    public variableDeclaratorId() {
        const _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, JavaParser.RULE_variableDeclaratorId);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 545;
                this.match(JavaParser.Identifier);
                this.state = 550;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.LBRACK) {
                    {
                        {
                            this.state = 546;
                            this.match(JavaParser.LBRACK);
                            this.state = 547;
                            this.match(JavaParser.RBRACK);
                        }
                    }
                    this.state = 552;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public variableInitializer() {
        const _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, JavaParser.RULE_variableInitializer);
        try {
            this.state = 555;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 553;
                    this.arrayInitializer();
                }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.NEW:
                case JavaParser.SHORT:
                case JavaParser.SUPER:
                case JavaParser.THIS:
                case JavaParser.VOID:
                case JavaParser.IntegerLiteral:
                case JavaParser.FloatingPointLiteral:
                case JavaParser.BooleanLiteral:
                case JavaParser.CharacterLiteral:
                case JavaParser.StringLiteral:
                case JavaParser.NullLiteral:
                case JavaParser.LPAREN:
                case JavaParser.LT:
                case JavaParser.BANG:
                case JavaParser.TILDE:
                case JavaParser.INC:
                case JavaParser.DEC:
                case JavaParser.ADD:
                case JavaParser.SUB:
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 554;
                    this.expression(0);
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
    public arrayInitializer() {
        const _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, JavaParser.RULE_arrayInitializer);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 557;
                this.match(JavaParser.LBRACE);
                this.state = 569;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0)) {
                    {
                        this.state = 558;
                        this.variableInitializer();
                        this.state = 563;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                        while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                            if ( _alt === 1 ) {
                                {
                                    {
                                        this.state = 559;
                                        this.match(JavaParser.COMMA);
                                        this.state = 560;
                                        this.variableInitializer();
                                    }
                                }
                            }
                            this.state = 565;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
                        }
                        this.state = 567;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === JavaParser.COMMA) {
                            {
                                this.state = 566;
                                this.match(JavaParser.COMMA);
                            }
                        }

                    }
                }

                this.state = 571;
                this.match(JavaParser.RBRACE);
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
    public enumConstantName(): EnumConstantNameContext {
        const _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, JavaParser.RULE_enumConstantName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 573;
                this.match(JavaParser.Identifier);
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
    public typeType(): TypeTypeContext {
        const _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, JavaParser.RULE_typeType);
        try {
            let _alt: number;
            this.state = 591;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 575;
                    this.classOrInterfaceType();
                    this.state = 580;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 576;
                                    this.match(JavaParser.LBRACK);
                                    this.state = 577;
                                    this.match(JavaParser.RBRACK);
                                }
                            }
                        }
                        this.state = 582;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                    }
                }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 583;
                    this.primitiveType();
                    this.state = 588;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 584;
                                    this.match(JavaParser.LBRACK);
                                    this.state = 585;
                                    this.match(JavaParser.RBRACK);
                                }
                            }
                        }
                        this.state = 590;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
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
    public classOrInterfaceType(): ClassOrInterfaceTypeContext {
        const _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, JavaParser.RULE_classOrInterfaceType);
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 593;
                this.match(JavaParser.Identifier);
                this.state = 595;
                this._errHandler.sync(this);
                switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
                    case 1:
                    {
                        this.state = 594;
                        this.typeArguments();
                    }
                    break;
                }
                this.state = 604;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
                while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                    if ( _alt === 1 ) {
                        {
                            {
                                this.state = 597;
                                this.match(JavaParser.DOT);
                                this.state = 598;
                                this.match(JavaParser.Identifier);
                                this.state = 600;
                                this._errHandler.sync(this);
                                switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
                                    case 1:
                                    {
                                        this.state = 599;
                                        this.typeArguments();
                                    }
                                    break;
                                }
                            }
                        }
                    }
                    this.state = 606;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 63, this._ctx);
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
    public primitiveType(): PrimitiveTypeContext {
        const _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, JavaParser.RULE_primitiveType);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 607;
                _la = this._input.LA(1);
                if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT) ) {
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
    public typeArguments(): TypeArgumentsContext {
        const _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, JavaParser.RULE_typeArguments);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 609;
                this.match(JavaParser.LT);
                this.state = 610;
                this.typeArgument();
                this.state = 615;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 611;
                            this.match(JavaParser.COMMA);
                            this.state = 612;
                            this.typeArgument();
                        }
                    }
                    this.state = 617;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 618;
                this.match(JavaParser.GT);
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
    public typeArgument(): TypeArgumentContext {
        const _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, JavaParser.RULE_typeArgument);
        let _la: number;
        try {
            this.state = 626;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 620;
                    this.typeType();
                }
                    break;
                case JavaParser.QUESTION:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 621;
                    this.match(JavaParser.QUESTION);
                    this.state = 624;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) {
                        {
                            this.state = 622;
                            _la = this._input.LA(1);
                            if ( !(_la === JavaParser.EXTENDS || _la === JavaParser.SUPER) ) {
                                this._errHandler.recoverInline(this);
                            } else {
                                if (this._input.LA(1) === Token.EOF) {
                                    this.matchedEOF = true;
                                }

                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 623;
                            this.typeType();
                        }
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
    public qualifiedNameList(): QualifiedNameListContext {
        const _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, JavaParser.RULE_qualifiedNameList);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 628;
                this.qualifiedName();
                this.state = 633;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 629;
                            this.match(JavaParser.COMMA);
                            this.state = 630;
                            this.qualifiedName();
                        }
                    }
                    this.state = 635;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public formalParameters(): FormalParametersContext {
        const _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, JavaParser.RULE_formalParameters);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 636;
                this.match(JavaParser.LPAREN);
                this.state = 638;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG))) !== 0) || _la === JavaParser.SHORT || _la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        this.state = 637;
                        this.formalParameterList();
                    }
                }

                this.state = 640;
                this.match(JavaParser.RPAREN);
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
    public formalParameterList(): FormalParameterListContext {
        const _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, JavaParser.RULE_formalParameterList);
        let _la: number;
        try {
            let _alt: number;
            this.state = 655;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 642;
                    this.formalParameter();
                    this.state = 647;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 643;
                                    this.match(JavaParser.COMMA);
                                    this.state = 644;
                                    this.formalParameter();
                                }
                            }
                        }
                        this.state = 649;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
                    }
                    this.state = 652;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.COMMA) {
                        {
                            this.state = 650;
                            this.match(JavaParser.COMMA);
                            this.state = 651;
                            this.lastFormalParameter();
                        }
                    }

                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 654;
                    this.lastFormalParameter();
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
    public formalParameter(): FormalParameterContext {
        const _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, JavaParser.RULE_formalParameter);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 660;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 657;
                            this.variableModifier();
                        }
                    }
                    this.state = 662;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 663;
                this.typeType();
                this.state = 664;
                this.variableDeclaratorId();
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
    public lastFormalParameter(): LastFormalParameterContext {
        const _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, JavaParser.RULE_lastFormalParameter);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 669;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 666;
                            this.variableModifier();
                        }
                    }
                    this.state = 671;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 672;
                this.typeType();
                this.state = 673;
                this.match(JavaParser.ELLIPSIS);
                this.state = 674;
                this.variableDeclaratorId();
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
    public methodBody(): MethodBodyContext {
        const _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, JavaParser.RULE_methodBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 676;
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
    public constructorBody(): ConstructorBodyContext {
        const _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, JavaParser.RULE_constructorBody);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 678;
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
    public qualifiedName(): QualifiedNameContext {
        const _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, JavaParser.RULE_qualifiedName);
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 680;
                this.match(JavaParser.Identifier);
                this.state = 685;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
                while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                    if ( _alt === 1 ) {
                        {
                            {
                                this.state = 681;
                                this.match(JavaParser.DOT);
                                this.state = 682;
                                this.match(JavaParser.Identifier);
                            }
                        }
                    }
                    this.state = 687;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
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
    public literal(): LiteralContext {
        const _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, JavaParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 688;
                _la = this._input.LA(1);
                if ( !(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (JavaParser.IntegerLiteral - 51)) | (1 << (JavaParser.FloatingPointLiteral - 51)) | (1 << (JavaParser.BooleanLiteral - 51)) | (1 << (JavaParser.CharacterLiteral - 51)) | (1 << (JavaParser.StringLiteral - 51)) | (1 << (JavaParser.NullLiteral - 51)))) !== 0)) ) {
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
    public annotation(): AnnotationContext {
        const _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, JavaParser.RULE_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 690;
                this.match(JavaParser.AT);
                this.state = 691;
                this.annotationName();
                this.state = 698;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LPAREN) {
                    {
                        this.state = 692;
                        this.match(JavaParser.LPAREN);
                        this.state = 695;
                        this._errHandler.sync(this);
                        switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
                            case 1:
                            {
                                this.state = 693;
                                this.elementValuePairs();
                            }
                            break;

                            case 2:
                            {
                                this.state = 694;
                                this.elementValue();
                            }
                            break;
                        }
                        this.state = 697;
                        this.match(JavaParser.RPAREN);
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
    public annotationName(): AnnotationNameContext {
        const _localctx: AnnotationNameContext = new AnnotationNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, JavaParser.RULE_annotationName);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 700;
                this.qualifiedName();
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
    public elementValuePairs(): ElementValuePairsContext {
        const _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, JavaParser.RULE_elementValuePairs);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 702;
                this.elementValuePair();
                this.state = 707;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 703;
                            this.match(JavaParser.COMMA);
                            this.state = 704;
                            this.elementValuePair();
                        }
                    }
                    this.state = 709;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public elementValuePair(): ElementValuePairContext {
        const _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 710;
                this.match(JavaParser.Identifier);
                this.state = 711;
                this.match(JavaParser.ASSIGN);
                this.state = 712;
                this.elementValue();
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
    public elementValue(): ElementValueContext {
        const _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, JavaParser.RULE_elementValue);
        try {
            this.state = 717;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.NEW:
                case JavaParser.SHORT:
                case JavaParser.SUPER:
                case JavaParser.THIS:
                case JavaParser.VOID:
                case JavaParser.IntegerLiteral:
                case JavaParser.FloatingPointLiteral:
                case JavaParser.BooleanLiteral:
                case JavaParser.CharacterLiteral:
                case JavaParser.StringLiteral:
                case JavaParser.NullLiteral:
                case JavaParser.LPAREN:
                case JavaParser.LT:
                case JavaParser.BANG:
                case JavaParser.TILDE:
                case JavaParser.INC:
                case JavaParser.DEC:
                case JavaParser.ADD:
                case JavaParser.SUB:
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 714;
                    this.expression(0);
                }
                    break;
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 715;
                    this.annotation();
                }
                    break;
                case JavaParser.LBRACE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 716;
                    this.elementValueArrayInitializer();
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
    public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
        const _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, JavaParser.RULE_elementValueArrayInitializer);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 719;
                this.match(JavaParser.LBRACE);
                this.state = 728;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LBRACE - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0) || _la === JavaParser.AT) {
                    {
                        this.state = 720;
                        this.elementValue();
                        this.state = 725;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                            if ( _alt === 1 ) {
                                {
                                    {
                                        this.state = 721;
                                        this.match(JavaParser.COMMA);
                                        this.state = 722;
                                        this.elementValue();
                                    }
                                }
                            }
                            this.state = 727;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
                        }
                    }
                }

                this.state = 731;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.COMMA) {
                    {
                        this.state = 730;
                        this.match(JavaParser.COMMA);
                    }
                }

                this.state = 733;
                this.match(JavaParser.RBRACE);
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
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
        const _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 735;
                this.match(JavaParser.AT);
                this.state = 736;
                this.match(JavaParser.INTERFACE);
                this.state = 737;
                this.match(JavaParser.Identifier);
                this.state = 738;
                this.annotationTypeBody();
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
    public annotationTypeBody(): AnnotationTypeBodyContext {
        const _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, JavaParser.RULE_annotationTypeBody);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 740;
                this.match(JavaParser.LBRACE);
                this.state = 744;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NATIVE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.TRANSIENT - 33)) | (1 << (JavaParser.VOLATILE - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || _la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 741;
                            this.annotationTypeElementDeclaration();
                        }
                    }
                    this.state = 746;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 747;
                this.match(JavaParser.RBRACE);
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
    public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
        const _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let _alt: number;
            this.state = 757;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.ABSTRACT:
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.CLASS:
                case JavaParser.DOUBLE:
                case JavaParser.ENUM:
                case JavaParser.FINAL:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.INTERFACE:
                case JavaParser.LONG:
                case JavaParser.NATIVE:
                case JavaParser.PRIVATE:
                case JavaParser.PROTECTED:
                case JavaParser.PUBLIC:
                case JavaParser.SHORT:
                case JavaParser.STATIC:
                case JavaParser.STRICTFP:
                case JavaParser.SYNCHRONIZED:
                case JavaParser.TRANSIENT:
                case JavaParser.VOLATILE:
                case JavaParser.Identifier:
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 752;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 749;
                                    this.modifier();
                                }
                            }
                        }
                        this.state = 754;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                    }
                    this.state = 755;
                    this.annotationTypeElementRest();
                }
                    break;
                case JavaParser.SEMI:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 756;
                    this.match(JavaParser.SEMI);
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
    public annotationTypeElementRest(): AnnotationTypeElementRestContext {
        const _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 779;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 759;
                    this.typeType();
                    this.state = 760;
                    this.annotationMethodOrConstantRest();
                    this.state = 761;
                    this.match(JavaParser.SEMI);
                }
                    break;
                case JavaParser.CLASS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 763;
                    this.classDeclaration();
                    this.state = 765;
                    this._errHandler.sync(this);
                    switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
                        case 1:
                        {
                            this.state = 764;
                            this.match(JavaParser.SEMI);
                        }
                        break;
                    }
                }
                    break;
                case JavaParser.INTERFACE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 767;
                    this.interfaceDeclaration();
                    this.state = 769;
                    this._errHandler.sync(this);
                    switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
                        case 1:
                        {
                            this.state = 768;
                            this.match(JavaParser.SEMI);
                        }
                        break;
                    }
                }
                    break;
                case JavaParser.ENUM:
                    this.enterOuterAlt(_localctx, 4);
                    {
                    this.state = 771;
                    this.enumDeclaration();
                    this.state = 773;
                    this._errHandler.sync(this);
                    switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
                        case 1:
                        {
                            this.state = 772;
                            this.match(JavaParser.SEMI);
                        }
                        break;
                    }
                }
                    break;
                case JavaParser.AT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                    this.state = 775;
                    this.annotationTypeDeclaration();
                    this.state = 777;
                    this._errHandler.sync(this);
                    switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
                        case 1:
                        {
                            this.state = 776;
                            this.match(JavaParser.SEMI);
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
    public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
        const _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 783;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 781;
                    this.annotationMethodRest();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 782;
                    this.annotationConstantRest();
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
    public annotationMethodRest(): AnnotationMethodRestContext {
        const _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, JavaParser.RULE_annotationMethodRest);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 785;
                this.match(JavaParser.Identifier);
                this.state = 786;
                this.match(JavaParser.LPAREN);
                this.state = 787;
                this.match(JavaParser.RPAREN);
                this.state = 789;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.DEFAULT) {
                    {
                        this.state = 788;
                        this.defaultValue();
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
    public annotationConstantRest(): AnnotationConstantRestContext {
        const _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 791;
                this.variableDeclarators();
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
    public defaultValue(): DefaultValueContext {
        const _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 793;
                this.match(JavaParser.DEFAULT);
                this.state = 794;
                this.elementValue();
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
        const _localctx: BlockContext = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, JavaParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 796;
                this.match(JavaParser.LBRACE);
                this.state = 800;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.IntegerLiteral - 33)) | (1 << (JavaParser.FloatingPointLiteral - 33)) | (1 << (JavaParser.BooleanLiteral - 33)) | (1 << (JavaParser.CharacterLiteral - 33)) | (1 << (JavaParser.StringLiteral - 33)) | (1 << (JavaParser.NullLiteral - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (JavaParser.LT - 68)) | (1 << (JavaParser.BANG - 68)) | (1 << (JavaParser.TILDE - 68)) | (1 << (JavaParser.INC - 68)) | (1 << (JavaParser.DEC - 68)) | (1 << (JavaParser.ADD - 68)) | (1 << (JavaParser.SUB - 68)))) !== 0) || _la === JavaParser.Identifier || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 797;
                            this.blockStatement();
                        }
                    }
                    this.state = 802;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 803;
                this.match(JavaParser.RBRACE);
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
    public blockStatement(): BlockStatementContext {
        const _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, JavaParser.RULE_blockStatement);
        try {
            this.state = 808;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 805;
                    this.localVariableDeclarationStatement();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 806;
                    this.statement();
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 807;
                    this.typeDeclaration();
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
    public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
        const _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, JavaParser.RULE_localVariableDeclarationStatement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 810;
                this.localVariableDeclaration();
                this.state = 811;
                this.match(JavaParser.SEMI);
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
    public localVariableDeclaration(): LocalVariableDeclarationContext {
        const _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, JavaParser.RULE_localVariableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 816;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 813;
                            this.variableModifier();
                        }
                    }
                    this.state = 818;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 819;
                this.typeType();
                this.state = 820;
                this.variableDeclarators();
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
        const _localctx: StatementContext = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, JavaParser.RULE_statement);
        let _la: number;
        try {
            let _alt: number;
            this.state = 926;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 822;
                    this.block();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 823;
                    this.match(JavaParser.ASSERT);
                    this.state = 824;
                    this.expression(0);
                    this.state = 827;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.COLON) {
                        {
                            this.state = 825;
                            this.match(JavaParser.COLON);
                            this.state = 826;
                            this.expression(0);
                        }
                    }

                    this.state = 829;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 831;
                    this.match(JavaParser.IF);
                    this.state = 832;
                    this.parExpression();
                    this.state = 833;
                    this.statement();
                    this.state = 836;
                    this._errHandler.sync(this);
                    switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
                        case 1:
                        {
                            this.state = 834;
                            this.match(JavaParser.ELSE);
                            this.state = 835;
                            this.statement();
                        }
                        break;
                    }
                }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                    this.state = 838;
                    this.match(JavaParser.FOR);
                    this.state = 839;
                    this.match(JavaParser.LPAREN);
                    this.state = 840;
                    this.forControl();
                    this.state = 841;
                    this.match(JavaParser.RPAREN);
                    this.state = 842;
                    this.statement();
                }
                    break;

                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                    this.state = 844;
                    this.match(JavaParser.WHILE);
                    this.state = 845;
                    this.parExpression();
                    this.state = 846;
                    this.statement();
                }
                    break;

                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                    this.state = 848;
                    this.match(JavaParser.DO);
                    this.state = 849;
                    this.statement();
                    this.state = 850;
                    this.match(JavaParser.WHILE);
                    this.state = 851;
                    this.parExpression();
                    this.state = 852;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                    this.state = 854;
                    this.match(JavaParser.TRY);
                    this.state = 855;
                    this.block();
                    this.state = 865;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case JavaParser.CATCH:
                        {
                            this.state = 857;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 856;
                                        this.catchClause();
                                    }
                                }
                                this.state = 859;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while ( _la === JavaParser.CATCH );
                            this.state = 862;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === JavaParser.FINALLY) {
                                {
                                    this.state = 861;
                                    this.finallyBlock();
                                }
                            }

                        }
                        break;
                        case JavaParser.FINALLY:
                        {
                            this.state = 864;
                            this.finallyBlock();
                        }
                        break;
                        default:
                            throw new NoViableAltException(this);
                    }
                }
                    break;

                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                    this.state = 867;
                    this.match(JavaParser.TRY);
                    this.state = 868;
                    this.resourceSpecification();
                    this.state = 869;
                    this.block();
                    this.state = 873;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === JavaParser.CATCH) {
                        {
                            {
                                this.state = 870;
                                this.catchClause();
                            }
                        }
                        this.state = 875;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 877;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.FINALLY) {
                        {
                            this.state = 876;
                            this.finallyBlock();
                        }
                    }

                }
                    break;

                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                    this.state = 879;
                    this.match(JavaParser.SWITCH);
                    this.state = 880;
                    this.parExpression();
                    this.state = 881;
                    this.match(JavaParser.LBRACE);
                    this.state = 885;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                        if ( _alt === 1 ) {
                            {
                                {
                                    this.state = 882;
                                    this.switchBlockStatementGroup();
                                }
                            }
                        }
                        this.state = 887;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
                    }
                    this.state = 891;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === JavaParser.CASE || _la === JavaParser.DEFAULT) {
                        {
                            {
                                this.state = 888;
                                this.switchLabel();
                            }
                        }
                        this.state = 893;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 894;
                    this.match(JavaParser.RBRACE);
                }
                    break;

                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                    this.state = 896;
                    this.match(JavaParser.SYNCHRONIZED);
                    this.state = 897;
                    this.parExpression();
                    this.state = 898;
                    this.block();
                }
                    break;

                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                    this.state = 900;
                    this.match(JavaParser.RETURN);
                    this.state = 902;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0)) {
                        {
                            this.state = 901;
                            this.expression(0);
                        }
                    }

                    this.state = 904;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                    this.state = 905;
                    this.match(JavaParser.THROW);
                    this.state = 906;
                    this.expression(0);
                    this.state = 907;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                    this.state = 909;
                    this.match(JavaParser.BREAK);
                    this.state = 911;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.Identifier) {
                        {
                            this.state = 910;
                            this.match(JavaParser.Identifier);
                        }
                    }

                    this.state = 913;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                    this.state = 914;
                    this.match(JavaParser.CONTINUE);
                    this.state = 916;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.Identifier) {
                        {
                            this.state = 915;
                            this.match(JavaParser.Identifier);
                        }
                    }

                    this.state = 918;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 15:
                    this.enterOuterAlt(_localctx, 15);
                    {
                    this.state = 919;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 16:
                    this.enterOuterAlt(_localctx, 16);
                    {
                    this.state = 920;
                    this.statementExpression();
                    this.state = 921;
                    this.match(JavaParser.SEMI);
                }
                    break;

                case 17:
                    this.enterOuterAlt(_localctx, 17);
                    {
                    this.state = 923;
                    this.match(JavaParser.Identifier);
                    this.state = 924;
                    this.match(JavaParser.COLON);
                    this.state = 925;
                    this.statement();
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
    public catchClause(): CatchClauseContext {
        const _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, JavaParser.RULE_catchClause);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 928;
                this.match(JavaParser.CATCH);
                this.state = 929;
                this.match(JavaParser.LPAREN);
                this.state = 933;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 930;
                            this.variableModifier();
                        }
                    }
                    this.state = 935;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 936;
                this.catchType();
                this.state = 937;
                this.match(JavaParser.Identifier);
                this.state = 938;
                this.match(JavaParser.RPAREN);
                this.state = 939;
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
    public catchType(): CatchTypeContext {
        const _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, JavaParser.RULE_catchType);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 941;
                this.qualifiedName();
                this.state = 946;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.BITOR) {
                    {
                        {
                            this.state = 942;
                            this.match(JavaParser.BITOR);
                            this.state = 943;
                            this.qualifiedName();
                        }
                    }
                    this.state = 948;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public finallyBlock(): FinallyBlockContext {
        const _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 949;
                this.match(JavaParser.FINALLY);
                this.state = 950;
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
    public resourceSpecification(): ResourceSpecificationContext {
        const _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, JavaParser.RULE_resourceSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 952;
                this.match(JavaParser.LPAREN);
                this.state = 953;
                this.resources();
                this.state = 955;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.SEMI) {
                    {
                        this.state = 954;
                        this.match(JavaParser.SEMI);
                    }
                }

                this.state = 957;
                this.match(JavaParser.RPAREN);
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
    public resources(): ResourcesContext {
        const _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, JavaParser.RULE_resources);
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 959;
                this.resource();
                this.state = 964;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
                while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                    if ( _alt === 1 ) {
                        {
                            {
                                this.state = 960;
                                this.match(JavaParser.SEMI);
                                this.state = 961;
                                this.resource();
                            }
                        }
                    }
                    this.state = 966;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
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
    public resource(): ResourceContext {
        const _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, JavaParser.RULE_resource);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 970;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 967;
                            this.variableModifier();
                        }
                    }
                    this.state = 972;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 973;
                this.classOrInterfaceType();
                this.state = 974;
                this.variableDeclaratorId();
                this.state = 975;
                this.match(JavaParser.ASSIGN);
                this.state = 976;
                this.expression(0);
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
    public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
        const _localctx: SwitchBlockStatementGroupContext = new SwitchBlockStatementGroupContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, JavaParser.RULE_switchBlockStatementGroup);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 979;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 978;
                            this.switchLabel();
                        }
                    }
                    this.state = 981;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ( _la === JavaParser.CASE || _la === JavaParser.DEFAULT );
                this.state = 984;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 983;
                            this.blockStatement();
                        }
                    }
                    this.state = 986;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.ABSTRACT) | (1 << JavaParser.ASSERT) | (1 << JavaParser.BOOLEAN) | (1 << JavaParser.BREAK) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.CLASS) | (1 << JavaParser.CONTINUE) | (1 << JavaParser.DO) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.ENUM) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.FOR) | (1 << JavaParser.IF) | (1 << JavaParser.INT) | (1 << JavaParser.INTERFACE) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (JavaParser.PRIVATE - 33)) | (1 << (JavaParser.PROTECTED - 33)) | (1 << (JavaParser.PUBLIC - 33)) | (1 << (JavaParser.RETURN - 33)) | (1 << (JavaParser.SHORT - 33)) | (1 << (JavaParser.STATIC - 33)) | (1 << (JavaParser.STRICTFP - 33)) | (1 << (JavaParser.SUPER - 33)) | (1 << (JavaParser.SWITCH - 33)) | (1 << (JavaParser.SYNCHRONIZED - 33)) | (1 << (JavaParser.THIS - 33)) | (1 << (JavaParser.THROW - 33)) | (1 << (JavaParser.TRY - 33)) | (1 << (JavaParser.VOID - 33)) | (1 << (JavaParser.WHILE - 33)) | (1 << (JavaParser.IntegerLiteral - 33)) | (1 << (JavaParser.FloatingPointLiteral - 33)) | (1 << (JavaParser.BooleanLiteral - 33)) | (1 << (JavaParser.CharacterLiteral - 33)) | (1 << (JavaParser.StringLiteral - 33)) | (1 << (JavaParser.NullLiteral - 33)) | (1 << (JavaParser.LPAREN - 33)) | (1 << (JavaParser.LBRACE - 33)) | (1 << (JavaParser.SEMI - 33)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (JavaParser.LT - 68)) | (1 << (JavaParser.BANG - 68)) | (1 << (JavaParser.TILDE - 68)) | (1 << (JavaParser.INC - 68)) | (1 << (JavaParser.DEC - 68)) | (1 << (JavaParser.ADD - 68)) | (1 << (JavaParser.SUB - 68)))) !== 0) || _la === JavaParser.Identifier || _la === JavaParser.AT );
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
    public switchLabel(): SwitchLabelContext {
        const _localctx: SwitchLabelContext = new SwitchLabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, JavaParser.RULE_switchLabel);
        try {
            this.state = 998;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 988;
                    this.match(JavaParser.CASE);
                    this.state = 989;
                    this.constantExpression();
                    this.state = 990;
                    this.match(JavaParser.COLON);
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 992;
                    this.match(JavaParser.CASE);
                    this.state = 993;
                    this.enumConstantName();
                    this.state = 994;
                    this.match(JavaParser.COLON);
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 996;
                    this.match(JavaParser.DEFAULT);
                    this.state = 997;
                    this.match(JavaParser.COLON);
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
    public forControl(): ForControlContext {
        const _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, JavaParser.RULE_forControl);
        let _la: number;
        try {
            this.state = 1012;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1000;
                    this.enhancedForControl();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1002;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FINAL) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0) || _la === JavaParser.AT) {
                        {
                            this.state = 1001;
                            this.forInit();
                        }
                    }

                    this.state = 1004;
                    this.match(JavaParser.SEMI);
                    this.state = 1006;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0)) {
                        {
                            this.state = 1005;
                            this.expression(0);
                        }
                    }

                    this.state = 1008;
                    this.match(JavaParser.SEMI);
                    this.state = 1010;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0)) {
                        {
                            this.state = 1009;
                            this.forUpdate();
                        }
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
    public forInit(): ForInitContext {
        const _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, JavaParser.RULE_forInit);
        try {
            this.state = 1016;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1014;
                    this.localVariableDeclaration();
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1015;
                    this.expressionList();
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
    public enhancedForControl(): EnhancedForControlContext {
        const _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, JavaParser.RULE_enhancedForControl);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1021;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.FINAL || _la === JavaParser.AT) {
                    {
                        {
                            this.state = 1018;
                            this.variableModifier();
                        }
                    }
                    this.state = 1023;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1024;
                this.typeType();
                this.state = 1025;
                this.variableDeclaratorId();
                this.state = 1026;
                this.match(JavaParser.COLON);
                this.state = 1027;
                this.expression(0);
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
    public forUpdate(): ForUpdateContext {
        const _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, JavaParser.RULE_forUpdate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1029;
                this.expressionList();
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
    public parExpression(): ParExpressionContext {
        const _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1031;
                this.match(JavaParser.LPAREN);
                this.state = 1032;
                this.expression(0);
                this.state = 1033;
                this.match(JavaParser.RPAREN);
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
    public expressionList(): ExpressionListContext {
        const _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, JavaParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1035;
                this.expression(0);
                this.state = 1040;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === JavaParser.COMMA) {
                    {
                        {
                            this.state = 1036;
                            this.match(JavaParser.COMMA);
                            this.state = 1037;
                            this.expression(0);
                        }
                    }
                    this.state = 1042;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
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
    public statementExpression(): StatementExpressionContext {
        const _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, JavaParser.RULE_statementExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1043;
                this.expression(0);
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
    public constantExpression(): ConstantExpressionContext {
        const _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, JavaParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1045;
                this.expression(0);
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

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    @RuleVersion(0)
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        const _parentctx: ParserRuleContext = this._ctx;
        const _parentState: number = this.state;
        let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
        let _prevctx: ExpressionContext = _localctx;
        const _startState: number = 174;
        this.enterRecursionRule(_localctx, 174, JavaParser.RULE_expression, _p);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1060;
                this._errHandler.sync(this);
                switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
                    case 1:
                    {
                        this.state = 1048;
                        this.primary();
                    }
                    break;

                    case 2:
                    {
                        this.state = 1049;
                        this.match(JavaParser.NEW);
                        this.state = 1050;
                        this.creator();
                    }
                    break;

                    case 3:
                    {
                        this.state = 1051;
                        this.match(JavaParser.LPAREN);
                        this.state = 1052;
                        this.typeType();
                        this.state = 1053;
                        this.match(JavaParser.RPAREN);
                        this.state = 1054;
                        this.expression(17);
                    }
                    break;

                    case 4:
                    {
                        this.state = 1056;
                        _la = this._input.LA(1);
                        if ( !(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & ((1 << (JavaParser.INC - 79)) | (1 << (JavaParser.DEC - 79)) | (1 << (JavaParser.ADD - 79)) | (1 << (JavaParser.SUB - 79)))) !== 0)) ) {
                            this._errHandler.recoverInline(this);
                        } else {
                            if (this._input.LA(1) === Token.EOF) {
                                this.matchedEOF = true;
                            }

                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1057;
                        this.expression(15);
                    }
                    break;

                    case 5:
                    {
                        this.state = 1058;
                        _la = this._input.LA(1);
                        if ( !(_la === JavaParser.BANG || _la === JavaParser.TILDE) ) {
                            this._errHandler.recoverInline(this);
                        } else {
                            if (this._input.LA(1) === Token.EOF) {
                                this.matchedEOF = true;
                            }

                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1059;
                        this.expression(14);
                    }
                    break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 1147;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                    if ( _alt === 1 ) {
                        if ( this._parseListeners != null ) this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 1145;
                            this._errHandler.sync(this);
                            switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
                                case 1:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1062;
                                    if (!(this.precpred(this._ctx, 13))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                                    this.state = 1063;
                                    _la = this._input.LA(1);
                                    if ( !(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (JavaParser.MUL - 83)) | (1 << (JavaParser.DIV - 83)) | (1 << (JavaParser.MOD - 83)))) !== 0)) ) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        if (this._input.LA(1) === Token.EOF) {
                                            this.matchedEOF = true;
                                        }

                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1064;
                                    this.expression(14);
                                }
                                break;

                                case 2:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1065;
                                    if (!(this.precpred(this._ctx, 12))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                                    this.state = 1066;
                                    _la = this._input.LA(1);
                                    if ( !(_la === JavaParser.ADD || _la === JavaParser.SUB) ) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        if (this._input.LA(1) === Token.EOF) {
                                            this.matchedEOF = true;
                                        }

                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1067;
                                    this.expression(13);
                                }
                                break;

                                case 3:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1068;
                                    if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                    this.state = 1076;
                                    this._errHandler.sync(this);
                                    switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
                                        case 1:
                                        {
                                            this.state = 1069;
                                            this.match(JavaParser.LT);
                                            this.state = 1070;
                                            this.match(JavaParser.LT);
                                        }
                                        break;

                                        case 2:
                                        {
                                            this.state = 1071;
                                            this.match(JavaParser.GT);
                                            this.state = 1072;
                                            this.match(JavaParser.GT);
                                            this.state = 1073;
                                            this.match(JavaParser.GT);
                                        }
                                        break;

                                        case 3:
                                        {
                                            this.state = 1074;
                                            this.match(JavaParser.GT);
                                            this.state = 1075;
                                            this.match(JavaParser.GT);
                                        }
                                        break;
                                    }
                                    this.state = 1078;
                                    this.expression(12);
                                }
                                break;

                                case 4:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1079;
                                    if (!(this.precpred(this._ctx, 10))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                                    this.state = 1080;
                                    _la = this._input.LA(1);
                                    if ( !(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (JavaParser.GT - 67)) | (1 << (JavaParser.LT - 67)) | (1 << (JavaParser.LE - 67)) | (1 << (JavaParser.GE - 67)))) !== 0)) ) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        if (this._input.LA(1) === Token.EOF) {
                                            this.matchedEOF = true;
                                        }

                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1081;
                                    this.expression(11);
                                }
                                break;

                                case 5:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1082;
                                    if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                    this.state = 1083;
                                    _la = this._input.LA(1);
                                    if ( !(_la === JavaParser.EQUAL || _la === JavaParser.NOTEQUAL) ) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        if (this._input.LA(1) === Token.EOF) {
                                            this.matchedEOF = true;
                                        }

                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1084;
                                    this.expression(9);
                                }
                                break;

                                case 6:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1085;
                                    if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                    this.state = 1086;
                                    this.match(JavaParser.BITAND);
                                    this.state = 1087;
                                    this.expression(8);
                                }
                                break;

                                case 7:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1088;
                                    if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                    this.state = 1089;
                                    this.match(JavaParser.CARET);
                                    this.state = 1090;
                                    this.expression(7);
                                }
                                break;

                                case 8:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1091;
                                    if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                    this.state = 1092;
                                    this.match(JavaParser.BITOR);
                                    this.state = 1093;
                                    this.expression(6);
                                }
                                break;

                                case 9:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1094;
                                    if (!(this.precpred(this._ctx, 4))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                    this.state = 1095;
                                    this.match(JavaParser.AND);
                                    this.state = 1096;
                                    this.expression(5);
                                }
                                break;

                                case 10:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1097;
                                    if (!(this.precpred(this._ctx, 3))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                    this.state = 1098;
                                    this.match(JavaParser.OR);
                                    this.state = 1099;
                                    this.expression(4);
                                }
                                break;

                                case 11:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1100;
                                    if (!(this.precpred(this._ctx, 2))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                                    this.state = 1101;
                                    this.match(JavaParser.QUESTION);
                                    this.state = 1102;
                                    this.expression(0);
                                    this.state = 1103;
                                    this.match(JavaParser.COLON);
                                    this.state = 1104;
                                    this.expression(3);
                                }
                                break;

                                case 12:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1106;
                                    if (!(this.precpred(this._ctx, 1))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                                    this.state = 1107;
                                    _la = this._input.LA(1);
                                    if ( !(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (JavaParser.ASSIGN - 66)) | (1 << (JavaParser.ADD_ASSIGN - 66)) | (1 << (JavaParser.SUB_ASSIGN - 66)) | (1 << (JavaParser.MUL_ASSIGN - 66)) | (1 << (JavaParser.DIV_ASSIGN - 66)) | (1 << (JavaParser.AND_ASSIGN - 66)) | (1 << (JavaParser.OR_ASSIGN - 66)) | (1 << (JavaParser.XOR_ASSIGN - 66)) | (1 << (JavaParser.MOD_ASSIGN - 66)) | (1 << (JavaParser.LSHIFT_ASSIGN - 66)))) !== 0) || _la === JavaParser.RSHIFT_ASSIGN || _la === JavaParser.URSHIFT_ASSIGN) ) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        if (this._input.LA(1) === Token.EOF) {
                                            this.matchedEOF = true;
                                        }

                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                    this.state = 1108;
                                    this.expression(1);
                                }
                                break;

                                case 13:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1109;
                                    if (!(this.precpred(this._ctx, 25))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                                    this.state = 1110;
                                    this.match(JavaParser.DOT);
                                    this.state = 1111;
                                    this.match(JavaParser.Identifier);
                                }
                                break;

                                case 14:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1112;
                                    if (!(this.precpred(this._ctx, 24))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                                    this.state = 1113;
                                    this.match(JavaParser.DOT);
                                    this.state = 1114;
                                    this.match(JavaParser.THIS);
                                }
                                break;

                                case 15:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1115;
                                    if (!(this.precpred(this._ctx, 23))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                                    this.state = 1116;
                                    this.match(JavaParser.DOT);
                                    this.state = 1117;
                                    this.match(JavaParser.NEW);
                                    this.state = 1119;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === JavaParser.LT) {
                                        {
                                            this.state = 1118;
                                            this.nonWildcardTypeArguments();
                                        }
                                    }

                                    this.state = 1121;
                                    this.innerCreator();
                                }
                                break;

                                case 16:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1122;
                                    if (!(this.precpred(this._ctx, 22))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
                                    this.state = 1123;
                                    this.match(JavaParser.DOT);
                                    this.state = 1124;
                                    this.match(JavaParser.SUPER);
                                    this.state = 1125;
                                    this.superSuffix();
                                }
                                break;

                                case 17:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1126;
                                    if (!(this.precpred(this._ctx, 21))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
                                    this.state = 1127;
                                    this.match(JavaParser.DOT);
                                    this.state = 1128;
                                    this.explicitGenericInvocation();
                                }
                                break;

                                case 18:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1129;
                                    if (!(this.precpred(this._ctx, 20))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                                    this.state = 1130;
                                    this.match(JavaParser.LBRACK);
                                    this.state = 1131;
                                    this.expression(0);
                                    this.state = 1132;
                                    this.match(JavaParser.RBRACK);
                                }
                                break;

                                case 19:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1134;
                                    if (!(this.precpred(this._ctx, 19))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
                                    this.state = 1135;
                                    this.match(JavaParser.LPAREN);
                                    this.state = 1137;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0)) {
                                        {
                                            this.state = 1136;
                                            this.expressionList();
                                        }
                                    }

                                    this.state = 1139;
                                    this.match(JavaParser.RPAREN);
                                }
                                break;

                                case 20:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1140;
                                    if (!(this.precpred(this._ctx, 16))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                                    this.state = 1141;
                                    _la = this._input.LA(1);
                                    if ( !(_la === JavaParser.INC || _la === JavaParser.DEC) ) {
                                        this._errHandler.recoverInline(this);
                                    } else {
                                        if (this._input.LA(1) === Token.EOF) {
                                            this.matchedEOF = true;
                                        }

                                        this._errHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                                break;

                                case 21:
                                {
                                    _localctx = new ExpressionContext(_parentctx, _parentState);
                                    this.pushNewRecursionContext(_localctx, _startState, JavaParser.RULE_expression);
                                    this.state = 1142;
                                    if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                    this.state = 1143;
                                    this.match(JavaParser.INSTANCEOF);
                                    this.state = 1144;
                                    this.typeType();
                                }
                                break;
                            }
                        }
                    }
                    this.state = 1149;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
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
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    @RuleVersion(0)
    public primary(): PrimaryContext {
        const _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, JavaParser.RULE_primary);
        try {
            this.state = 1171;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1150;
                    this.match(JavaParser.LPAREN);
                    this.state = 1151;
                    this.expression(0);
                    this.state = 1152;
                    this.match(JavaParser.RPAREN);
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1154;
                    this.match(JavaParser.THIS);
                }
                    break;

                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                    this.state = 1155;
                    this.match(JavaParser.SUPER);
                }
                    break;

                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                    this.state = 1156;
                    this.literal();
                }
                    break;

                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                    this.state = 1157;
                    this.match(JavaParser.Identifier);
                }
                    break;

                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                    this.state = 1158;
                    this.typeType();
                    this.state = 1159;
                    this.match(JavaParser.DOT);
                    this.state = 1160;
                    this.match(JavaParser.CLASS);
                }
                    break;

                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                    this.state = 1162;
                    this.match(JavaParser.VOID);
                    this.state = 1163;
                    this.match(JavaParser.DOT);
                    this.state = 1164;
                    this.match(JavaParser.CLASS);
                }
                    break;

                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                    this.state = 1165;
                    this.nonWildcardTypeArguments();
                    this.state = 1169;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case JavaParser.SUPER:
                        case JavaParser.Identifier:
                        {
                            this.state = 1166;
                            this.explicitGenericInvocationSuffix();
                        }
                        break;
                        case JavaParser.THIS:
                        {
                            this.state = 1167;
                            this.match(JavaParser.THIS);
                            this.state = 1168;
                            this.arguments();
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
    public creator(): CreatorContext {
        const _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, JavaParser.RULE_creator);
        try {
            this.state = 1182;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1173;
                    this.nonWildcardTypeArguments();
                    this.state = 1174;
                    this.createdName();
                    this.state = 1175;
                    this.classCreatorRest();
                }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1177;
                    this.createdName();
                    this.state = 1180;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case JavaParser.LBRACK:
                        {
                            this.state = 1178;
                            this.arrayCreatorRest();
                        }
                        break;
                        case JavaParser.LPAREN:
                        {
                            this.state = 1179;
                            this.classCreatorRest();
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
    public createdName(): CreatedNameContext {
        const _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, JavaParser.RULE_createdName);
        let _la: number;
        try {
            this.state = 1199;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1184;
                    this.match(JavaParser.Identifier);
                    this.state = 1186;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === JavaParser.LT) {
                        {
                            this.state = 1185;
                            this.typeArgumentsOrDiamond();
                        }
                    }

                    this.state = 1195;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === JavaParser.DOT) {
                        {
                            {
                                this.state = 1188;
                                this.match(JavaParser.DOT);
                                this.state = 1189;
                                this.match(JavaParser.Identifier);
                                this.state = 1191;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                if (_la === JavaParser.LT) {
                                    {
                                        this.state = 1190;
                                        this.typeArgumentsOrDiamond();
                                    }
                                }

                            }
                        }
                        this.state = 1197;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                }
                    break;
                case JavaParser.BOOLEAN:
                case JavaParser.BYTE:
                case JavaParser.CHAR:
                case JavaParser.DOUBLE:
                case JavaParser.FLOAT:
                case JavaParser.INT:
                case JavaParser.LONG:
                case JavaParser.SHORT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1198;
                    this.primitiveType();
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
    public innerCreator(): InnerCreatorContext {
        const _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, JavaParser.RULE_innerCreator);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1201;
                this.match(JavaParser.Identifier);
                this.state = 1203;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === JavaParser.LT) {
                    {
                        this.state = 1202;
                        this.nonWildcardTypeArgumentsOrDiamond();
                    }
                }

                this.state = 1205;
                this.classCreatorRest();
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
    public arrayCreatorRest(): ArrayCreatorRestContext {
        const _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, JavaParser.RULE_arrayCreatorRest);
        let _la: number;
        try {
            let _alt: number;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1207;
                this.match(JavaParser.LBRACK);
                this.state = 1235;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case JavaParser.RBRACK:
                    {
                        this.state = 1208;
                        this.match(JavaParser.RBRACK);
                        this.state = 1213;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === JavaParser.LBRACK) {
                            {
                                {
                                    this.state = 1209;
                                    this.match(JavaParser.LBRACK);
                                    this.state = 1210;
                                    this.match(JavaParser.RBRACK);
                                }
                            }
                            this.state = 1215;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1216;
                        this.arrayInitializer();
                    }
                    break;
                    case JavaParser.BOOLEAN:
                    case JavaParser.BYTE:
                    case JavaParser.CHAR:
                    case JavaParser.DOUBLE:
                    case JavaParser.FLOAT:
                    case JavaParser.INT:
                    case JavaParser.LONG:
                    case JavaParser.NEW:
                    case JavaParser.SHORT:
                    case JavaParser.SUPER:
                    case JavaParser.THIS:
                    case JavaParser.VOID:
                    case JavaParser.IntegerLiteral:
                    case JavaParser.FloatingPointLiteral:
                    case JavaParser.BooleanLiteral:
                    case JavaParser.CharacterLiteral:
                    case JavaParser.StringLiteral:
                    case JavaParser.NullLiteral:
                    case JavaParser.LPAREN:
                    case JavaParser.LT:
                    case JavaParser.BANG:
                    case JavaParser.TILDE:
                    case JavaParser.INC:
                    case JavaParser.DEC:
                    case JavaParser.ADD:
                    case JavaParser.SUB:
                    case JavaParser.Identifier:
                    {
                        this.state = 1217;
                        this.expression(0);
                        this.state = 1218;
                        this.match(JavaParser.RBRACK);
                        this.state = 1225;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                        while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                            if ( _alt === 1 ) {
                                {
                                    {
                                        this.state = 1219;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1220;
                                        this.expression(0);
                                        this.state = 1221;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                            }
                            this.state = 1227;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
                        }
                        this.state = 1232;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                        while ( _alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER ) {
                            if ( _alt === 1 ) {
                                {
                                    {
                                        this.state = 1228;
                                        this.match(JavaParser.LBRACK);
                                        this.state = 1229;
                                        this.match(JavaParser.RBRACK);
                                    }
                                }
                            }
                            this.state = 1234;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 140, this._ctx);
                        }
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
    public classCreatorRest(): ClassCreatorRestContext {
        const _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1237;
                this.arguments();
                this.state = 1239;
                this._errHandler.sync(this);
                switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
                    case 1:
                    {
                        this.state = 1238;
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
    public explicitGenericInvocation(): ExplicitGenericInvocationContext {
        const _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1241;
                this.nonWildcardTypeArguments();
                this.state = 1242;
                this.explicitGenericInvocationSuffix();
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
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
        const _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1244;
                this.match(JavaParser.LT);
                this.state = 1245;
                this.typeList();
                this.state = 1246;
                this.match(JavaParser.GT);
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
    public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
        const _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1251;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1248;
                    this.match(JavaParser.LT);
                    this.state = 1249;
                    this.match(JavaParser.GT);
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1250;
                    this.typeArguments();
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
    public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
        const _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1256;
            this._errHandler.sync(this);
            switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1253;
                    this.match(JavaParser.LT);
                    this.state = 1254;
                    this.match(JavaParser.GT);
                }
                    break;

                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1255;
                    this.nonWildcardTypeArguments();
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
    public superSuffix(): SuperSuffixContext {
        const _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, JavaParser.RULE_superSuffix);
        try {
            this.state = 1264;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.LPAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1258;
                    this.arguments();
                }
                    break;
                case JavaParser.DOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1259;
                    this.match(JavaParser.DOT);
                    this.state = 1260;
                    this.match(JavaParser.Identifier);
                    this.state = 1262;
                    this._errHandler.sync(this);
                    switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
                        case 1:
                        {
                            this.state = 1261;
                            this.arguments();
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
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
        const _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1270;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case JavaParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                    this.state = 1266;
                    this.match(JavaParser.SUPER);
                    this.state = 1267;
                    this.superSuffix();
                }
                    break;
                case JavaParser.Identifier:
                    this.enterOuterAlt(_localctx, 2);
                    {
                    this.state = 1268;
                    this.match(JavaParser.Identifier);
                    this.state = 1269;
                    this.arguments();
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
    public arguments(): ArgumentsContext {
        const _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, JavaParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1272;
                this.match(JavaParser.LPAREN);
                this.state = 1274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavaParser.BOOLEAN) | (1 << JavaParser.BYTE) | (1 << JavaParser.CHAR) | (1 << JavaParser.DOUBLE) | (1 << JavaParser.FLOAT) | (1 << JavaParser.INT) | (1 << JavaParser.LONG) | (1 << JavaParser.NEW))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (JavaParser.SHORT - 37)) | (1 << (JavaParser.SUPER - 37)) | (1 << (JavaParser.THIS - 37)) | (1 << (JavaParser.VOID - 37)) | (1 << (JavaParser.IntegerLiteral - 37)) | (1 << (JavaParser.FloatingPointLiteral - 37)) | (1 << (JavaParser.BooleanLiteral - 37)) | (1 << (JavaParser.CharacterLiteral - 37)) | (1 << (JavaParser.StringLiteral - 37)) | (1 << (JavaParser.NullLiteral - 37)) | (1 << (JavaParser.LPAREN - 37)) | (1 << (JavaParser.LT - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (JavaParser.BANG - 69)) | (1 << (JavaParser.TILDE - 69)) | (1 << (JavaParser.INC - 69)) | (1 << (JavaParser.DEC - 69)) | (1 << (JavaParser.ADD - 69)) | (1 << (JavaParser.SUB - 69)) | (1 << (JavaParser.Identifier - 69)))) !== 0)) {
                    {
                        this.state = 1273;
                        this.expressionList();
                    }
                }

                this.state = 1276;
                this.match(JavaParser.RPAREN);
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

    public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
            case 87:
                return this.expression_sempred(_localctx as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 13);

            case 1:
                return this.precpred(this._ctx, 12);

            case 2:
                return this.precpred(this._ctx, 11);

            case 3:
                return this.precpred(this._ctx, 10);

            case 4:
                return this.precpred(this._ctx, 8);

            case 5:
                return this.precpred(this._ctx, 7);

            case 6:
                return this.precpred(this._ctx, 6);

            case 7:
                return this.precpred(this._ctx, 5);

            case 8:
                return this.precpred(this._ctx, 4);

            case 9:
                return this.precpred(this._ctx, 3);

            case 10:
                return this.precpred(this._ctx, 2);

            case 11:
                return this.precpred(this._ctx, 1);

            case 12:
                return this.precpred(this._ctx, 25);

            case 13:
                return this.precpred(this._ctx, 24);

            case 14:
                return this.precpred(this._ctx, 23);

            case 15:
                return this.precpred(this._ctx, 22);

            case 16:
                return this.precpred(this._ctx, 21);

            case 17:
                return this.precpred(this._ctx, 20);

            case 18:
                return this.precpred(this._ctx, 19);

            case 19:
                return this.precpred(this._ctx, 16);

            case 20:
                return this.precpred(this._ctx, 9);
        }
        return true;
    }

    private static readonly _serializedATNSegments: number = 3;
    private static readonly _serializedATNSegment0: string =
        "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03k\u0501\x04\x02" +
        "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
        "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
        "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
        "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
        "\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
        "\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
        "\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
        "\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
        "\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
        "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
        "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
        "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
        "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x05\x02\xCE" +
        "\n\x02\x03\x02\x07\x02\xD1\n\x02\f\x02\x0E\x02\xD4\v\x02\x03\x02\x07\x02" +
        "\xD7\n\x02\f\x02\x0E\x02\xDA\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\xDF" +
        "\n\x03\f\x03\x0E\x03\xE2\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
        "\x03\x04\x05\x04\xEA\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\xEF\n\x04\x03" +
        "\x04\x03\x04\x03\x05\x07\x05\xF4\n\x05\f\x05\x0E\x05\xF7\v\x05\x03\x05" +
        "\x03\x05\x07\x05\xFB\n\x05\f\x05\x0E\x05\xFE\v\x05\x03\x05\x03\x05\x07" +
        "\x05\u0102\n\x05\f\x05\x0E\x05\u0105\v\x05\x03\x05\x03\x05\x07\x05\u0109" +
        "\n\x05\f\x05\x0E\x05\u010C\v\x05\x03\x05\x03\x05\x05\x05\u0110\n\x05\x03" +
        "\x06\x03\x06\x05\x06\u0114\n\x06\x03\x07\x03\x07\x05\x07\u0118\n\x07\x03" +
        "\b\x03\b\x05\b\u011C\n\b\x03\t\x03\t\x03\t\x05\t\u0121\n\t\x03\t\x03\t" +
        "\x05\t\u0125\n\t\x03\t\x03\t\x05\t\u0129\n\t\x03\t\x03\t\x03\n\x03\n\x03" +
        "\n\x03\n\x07\n\u0131\n\n\f\n\x0E\n\u0134\v\n\x03\n\x03\n\x03\v\x03\v\x03" +
        "\v\x05\v\u013B\n\v\x03\f\x03\f\x03\f\x07\f\u0140\n\f\f\f\x0E\f\u0143\v" +
        "\f\x03\r\x03\r\x03\r\x03\r\x05\r\u0149\n\r\x03\r\x03\r\x05\r\u014D\n\r" +
        "\x03\r\x05\r\u0150\n\r\x03\r\x05\r\u0153\n\r\x03\r\x03\r\x03\x0E\x03\x0E" +
        "\x03\x0E\x07\x0E\u015A\n\x0E\f\x0E\x0E\x0E\u015D\v\x0E\x03\x0F\x07\x0F" +
        "\u0160\n\x0F\f\x0F\x0E\x0F\u0163\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0167\n" +
        "\x0F\x03\x0F\x05\x0F\u016A\n\x0F\x03\x10\x03\x10\x07\x10\u016E\n\x10\f" +
        "\x10\x0E\x10\u0171\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0176\n\x11\x03" +
        "\x11\x03\x11\x05\x11\u017A\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
        "\x07\x12\u0181\n\x12\f\x12\x0E\x12\u0184\v\x12\x03\x13\x03\x13\x07\x13" +
        "\u0188\n\x13\f\x13\x0E\x13\u018B\v\x13\x03\x13\x03\x13\x03\x14\x03\x14" +
        "\x07\x14\u0191\n\x14\f\x14\x0E\x14\u0194\v\x14\x03\x14\x03\x14\x03\x15" +
        "\x03\x15\x05\x15\u019A\n\x15\x03\x15\x03\x15\x07\x15\u019E\n\x15\f\x15" +
        "\x0E\x15\u01A1\v\x15\x03\x15\x05\x15\u01A4\n\x15\x03\x16\x03\x16\x03\x16" +
        "\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01AF\n\x16\x03" +
        "\x17\x03\x17\x05\x17\u01B3\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17" +
        "\u01B9\n\x17\f\x17\x0E\x17\u01BC\v\x17\x03\x17\x03\x17\x05\x17\u01C0\n" +
        "\x17\x03\x17\x03\x17\x05\x17\u01C4\n\x17\x03\x18\x03\x18\x03\x18\x03\x19" +
        "\x03\x19\x03\x19\x03\x19\x05\x19\u01CD\n\x19\x03\x19\x03\x19\x03\x1A\x03" +
        "\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x07\x1C\u01D9\n\x1C" +
        "\f\x1C\x0E\x1C\u01DC\v\x1C\x03\x1C\x03\x1C\x05\x1C\u01E0\n\x1C\x03\x1D" +
        "\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01E9\n\x1D\x03" +
        "\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01EF\n\x1E\f\x1E\x0E\x1E\u01F2\v" +
        "\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01F9\n\x1F\f\x1F" +
        "\x0E\x1F\u01FC\v\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u0203\n \x03" +
        " \x03 \x03 \x03 \x07 \u0209\n \f \x0E \u020C\v \x03 \x03 \x05 \u0210\n" +
        " \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x07\"\u021A\n\"\f\"\x0E\"" +
        "\u021D\v\"\x03#\x03#\x03#\x05#\u0222\n#\x03$\x03$\x03$\x07$\u0227\n$\f" +
        "$\x0E$\u022A\v$\x03%\x03%\x05%\u022E\n%\x03&\x03&\x03&\x03&\x07&\u0234" +
        "\n&\f&\x0E&\u0237\v&\x03&\x05&\u023A\n&\x05&\u023C\n&\x03&\x03&\x03\'" +
        "\x03\'\x03(\x03(\x03(\x07(\u0245\n(\f(\x0E(\u0248\v(\x03(\x03(\x03(\x07" +
        "(\u024D\n(\f(\x0E(\u0250\v(\x05(\u0252\n(\x03)\x03)\x05)\u0256\n)\x03" +
        ")\x03)\x03)\x05)\u025B\n)\x07)\u025D\n)\f)\x0E)\u0260\v)\x03*\x03*\x03" +
        "+\x03+\x03+\x03+\x07+\u0268\n+\f+\x0E+\u026B\v+\x03+\x03+\x03,\x03,\x03" +
        ",\x03,\x05,\u0273\n,\x05,\u0275\n,\x03-\x03-\x03-\x07-\u027A\n-\f-\x0E" +
        "-\u027D\v-\x03.\x03.\x05.\u0281\n.\x03.\x03.\x03/\x03/\x03/\x07/\u0288" +
        "\n/\f/\x0E/\u028B\v/\x03/\x03/\x05/\u028F\n/\x03/\x05/\u0292\n/\x030\x07" +
        "0\u0295\n0\f0\x0E0\u0298\v0\x030\x030\x030\x031\x071\u029E\n1\f1\x0E1" +
        "\u02A1\v1\x031\x031\x031\x031\x032\x032\x033\x033\x034\x034\x034\x074" +
        "\u02AE\n4\f4\x0E4\u02B1\v4\x035\x035\x036\x036\x036\x036\x036\x056\u02BA" +
        "\n6\x036\x056\u02BD\n6\x037\x037\x038\x038\x038\x078\u02C4\n8\f8\x0E8" +
        "\u02C7\v8\x039\x039\x039\x039\x03:\x03:\x03:\x05:\u02D0\n:\x03;\x03;\x03" +
        ";\x03;\x07;\u02D6\n;\f;\x0E;\u02D9\v;\x05;\u02DB\n;\x03;\x05;\u02DE\n" +
        ";\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x07=\u02E9\n=\f=\x0E=\u02EC" +
        "\v=\x03=\x03=\x03>\x07>\u02F1\n>\f>\x0E>\u02F4\v>\x03>\x03>\x05>\u02F8" +
        "\n>\x03?\x03?\x03?\x03?\x03?\x03?\x05?\u0300\n?\x03?\x03?\x05?\u0304\n" +
        "?\x03?\x03?\x05?\u0308\n?\x03?\x03?\x05?\u030C\n?\x05?\u030E\n?\x03@\x03" +
        "@\x05@\u0312\n@\x03A\x03A\x03A\x03A\x05A\u0318\nA\x03B\x03B\x03C\x03C" +
        "\x03C\x03D\x03D\x07D\u0321\nD\fD\x0ED\u0324\vD\x03D\x03D\x03E\x03E\x03" +
        "E\x05E\u032B\nE\x03F\x03F\x03F\x03G\x07G\u0331\nG\fG\x0EG\u0334\vG\x03" +
        "G\x03G\x03G\x03H\x03H\x03H\x03H\x03H\x05H\u033E\nH\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x05H\u0347\nH\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x06H\u035C\n" +
        "H\rH\x0EH\u035D\x03H\x05H\u0361\nH\x03H\x05H\u0364\nH\x03H\x03H\x03H\x03" +
        "H\x07H\u036A\nH\fH\x0EH\u036D\vH\x03H\x05H\u0370\nH\x03H\x03H\x03H\x03" +
        "H\x07H\u0376\nH\fH\x0EH\u0379\vH\x03H\x07H\u037C\nH\fH\x0EH\u037F\vH\x03" +
        "H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0389\nH\x03H\x03H\x03H\x03" +
        "H\x03H\x03H\x03H\x05H\u0392\nH\x03H\x03H\x03H\x05H\u0397\nH\x03H\x03H" +
        "\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u03A1\nH\x03I\x03I\x03I\x07I\u03A6" +
        "\nI\fI\x0EI\u03A9\vI\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x07J\u03B3" +
        "\nJ\fJ\x0EJ\u03B6\vJ\x03K\x03K\x03K\x03L\x03L\x03L\x05L\u03BE\nL\x03L" +
        "\x03L\x03M\x03M\x03M\x07M\u03C5\nM\fM\x0EM\u03C8\vM\x03N\x07N\u03CB\n" +
        "N\fN\x0EN\u03CE\vN\x03N\x03N\x03N\x03N\x03N\x03O\x06O\u03D6\nO\rO\x0E" +
        "O\u03D7\x03O\x06O\u03DB\nO\rO\x0EO\u03DC\x03P\x03P\x03P\x03P\x03P\x03" +
        "P\x03P\x03P\x03P\x03P\x05P\u03E9\nP\x03Q\x03Q\x05Q\u03ED\nQ\x03Q\x03Q" +
        "\x05Q\u03F1\nQ\x03Q\x03Q\x05Q\u03F5\nQ\x05Q\u03F7\nQ\x03R\x03R\x05R\u03FB" +
        "\nR\x03S\x07S\u03FE\nS\fS\x0ES\u0401\vS\x03S\x03S\x03S\x03S\x03S\x03T" +
        "\x03T\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x07V\u0411\nV\fV\x0EV\u0414\v" +
        "V\x03W\x03W\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x05Y\u0427\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0437\nY\x03Y\x03Y\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u0462\nY\x03Y\x03Y\x03" +
        "Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x05" +
        "Y\u0474\nY\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u047C\nY\fY\x0EY\u047F\v" +
        "Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
        "Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0494\nZ\x05Z\u0496\nZ\x03[\x03[\x03[" +
        "\x03[\x03[\x03[\x03[\x05[\u049F\n[\x05[\u04A1\n[\x03\\\x03\\\x05\\\u04A5" +
        "\n\\\x03\\\x03\\\x03\\\x05\\\u04AA\n\\\x07\\\u04AC\n\\\f\\\x0E\\\u04AF" +
        "\v\\\x03\\\x05\\\u04B2\n\\\x03]\x03]\x05]\u04B6\n]\x03]\x03]\x03^\x03" +
        "^\x03^\x03^\x07^\u04BE\n^\f^\x0E^\u04C1\v^\x03^\x03^\x03^\x03^\x03^\x03" +
        "^\x03^\x07^\u04CA\n^\f^\x0E^\u04CD\v^\x03^\x03^\x07^\u04D1\n^\f^\x0E^" +
        "\u04D4\v^\x05^\u04D6\n^\x03_\x03_\x05_\u04DA\n_\x03`\x03`\x03`\x03a\x03" +
        "a\x03a\x03a\x03b\x03b\x03b\x05b\u04E6\nb\x03c\x03c\x03c\x05c\u04EB\nc" +
        "\x03d\x03d\x03d\x03d\x05d\u04F1\nd\x05d\u04F3\nd\x03e\x03e\x03e\x03e\x05" +
        "e\u04F9\ne\x03f\x03f\x05f\u04FD\nf\x03f\x03f\x03f\x02\x02\x03\xB0g\x02" +
        "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
        "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
        ",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
        "H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
        "d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
        "\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
        "\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
        "\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
        "\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
        "\xC8\x02\xCA\x02\x02\x0F\x06\x02  ,,0033\x06\x02\x03\x03\x14\x14#%()\n" +
        "\x02\x05\x05\x07\x07\n\n\x10\x10\x16\x16\x1D\x1D\x1F\x1F\'\'\x04\x02\x13" +
        "\x13**\x03\x025:\x03\x02QT\x03\x02GH\x04\x02UVZZ\x03\x02ST\x04\x02EFL" +
        "M\x04\x02KKNN\x04\x02DD[e\x03\x02QR\u0573\x02\xCD\x03\x02\x02\x02\x04" +
        "\xE0\x03\x02\x02\x02\x06\xE7\x03\x02\x02\x02\b\u010F\x03\x02\x02\x02\n" +
        "\u0113\x03\x02\x02\x02\f\u0117\x03\x02\x02\x02\x0E\u011B\x03\x02\x02\x02" +
        "\x10\u011D\x03\x02\x02\x02\x12\u012C\x03\x02\x02\x02\x14\u0137\x03\x02" +
        "\x02\x02\x16\u013C\x03\x02\x02\x02\x18\u0144\x03\x02\x02\x02\x1A\u0156" +
        "\x03\x02\x02\x02\x1C\u0161\x03\x02\x02\x02\x1E\u016B\x03\x02\x02\x02 " +
        "\u0172\x03\x02\x02\x02\"\u017D\x03\x02\x02\x02$\u0185\x03\x02\x02\x02" +
        "&\u018E\x03\x02\x02\x02(\u01A3\x03\x02\x02\x02*\u01AE\x03\x02\x02\x02" +
        ",\u01B2\x03\x02\x02\x02.\u01C5\x03\x02\x02\x020\u01C8\x03\x02\x02\x02" +
        "2\u01D0\x03\x02\x02\x024\u01D3\x03\x02\x02\x026\u01DF\x03\x02\x02\x02" +
        "8\u01E8\x03\x02\x02\x02:\u01EA\x03\x02\x02\x02<\u01F5\x03\x02\x02\x02" +
        ">\u0202\x03\x02\x02\x02@\u0213\x03\x02\x02\x02B\u0216\x03\x02\x02\x02" +
        "D\u021E\x03\x02\x02\x02F\u0223\x03\x02\x02\x02H\u022D\x03\x02\x02\x02" +
        "J\u022F\x03\x02\x02\x02L\u023F\x03\x02\x02\x02N\u0251\x03\x02\x02\x02" +
        "P\u0253\x03\x02\x02\x02R\u0261\x03\x02\x02\x02T\u0263\x03\x02\x02\x02" +
        "V\u0274\x03\x02\x02\x02X\u0276\x03\x02\x02\x02Z\u027E\x03\x02\x02\x02" +
        "\\\u0291\x03\x02\x02\x02^\u0296\x03\x02\x02\x02`\u029F\x03\x02\x02\x02" +
        "b\u02A6\x03\x02\x02\x02d\u02A8\x03\x02\x02\x02f\u02AA\x03\x02\x02\x02" +
        "h\u02B2\x03\x02\x02\x02j\u02B4\x03\x02\x02\x02l\u02BE\x03\x02\x02\x02" +
        "n\u02C0\x03\x02\x02\x02p\u02C8\x03\x02\x02\x02r\u02CF\x03\x02\x02\x02" +
        "t\u02D1\x03\x02\x02\x02v\u02E1\x03\x02\x02\x02x\u02E6\x03\x02\x02\x02" +
        "z\u02F7\x03\x02\x02\x02|\u030D\x03\x02\x02\x02~\u0311\x03\x02\x02\x02" +
        "\x80\u0313\x03\x02\x02\x02\x82\u0319\x03\x02\x02\x02\x84\u031B\x03\x02" +
        "\x02\x02\x86\u031E\x03\x02\x02\x02\x88\u032A\x03\x02\x02\x02\x8A\u032C" +
        "\x03\x02\x02\x02\x8C\u0332\x03\x02\x02\x02\x8E\u03A0\x03\x02\x02\x02\x90" +
        "\u03A2\x03\x02\x02\x02\x92\u03AF\x03\x02\x02\x02\x94\u03B7\x03\x02\x02" +
        "\x02\x96\u03BA\x03\x02\x02\x02\x98\u03C1\x03\x02\x02\x02\x9A\u03CC\x03" +
        "\x02\x02\x02\x9C\u03D5\x03\x02\x02\x02\x9E\u03E8\x03\x02\x02\x02\xA0\u03F6" +
        "\x03\x02\x02\x02\xA2\u03FA\x03\x02\x02\x02\xA4\u03FF\x03\x02\x02\x02\xA6" +
        "\u0407\x03\x02\x02\x02\xA8\u0409\x03\x02\x02\x02\xAA\u040D\x03\x02\x02" +
        "\x02\xAC\u0415\x03\x02\x02\x02\xAE\u0417\x03\x02\x02\x02\xB0\u0426\x03" +
        "\x02\x02\x02\xB2\u0495\x03\x02\x02\x02\xB4\u04A0\x03\x02\x02\x02\xB6\u04B1" +
        "\x03\x02\x02\x02\xB8\u04B3\x03\x02\x02\x02\xBA\u04B9\x03\x02\x02\x02\xBC" +
        "\u04D7\x03\x02\x02\x02\xBE\u04DB\x03\x02\x02\x02\xC0\u04DE\x03\x02\x02" +
        "\x02\xC2\u04E5\x03\x02\x02\x02\xC4\u04EA\x03\x02\x02\x02\xC6\u04F2\x03" +
        "\x02\x02\x02\xC8\u04F8\x03\x02\x02\x02\xCA\u04FA\x03\x02\x02\x02\xCC\xCE" +
        "\x05\x04\x03\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD2" +
        "\x03\x02\x02\x02\xCF\xD1\x05\x06\x04\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4" +
        "\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD8" +
        "\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD7\x05\b\x05\x02\xD6\xD5" +
        "\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9" +
        "\x03\x02\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC" +
        "\x07\x02\x02\x03\xDC\x03\x03\x02\x02\x02\xDD\xDF\x05j6\x02\xDE\xDD\x03" +
        "\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03" +
        "\x02\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4\x07" +
        "\"\x02\x02\xE4\xE5\x05f4\x02\xE5\xE6\x07A\x02\x02\xE6\x05\x03\x02\x02" +
        "\x02\xE7\xE9\x07\x1B\x02\x02\xE8\xEA\x07(\x02\x02\xE9\xE8\x03\x02\x02" +
        "\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x05f4\x02" +
        "\xEC\xED\x07C\x02\x02\xED\xEF\x07U\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE" +
        "\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1\x07A\x02\x02\xF1" +
        "\x07\x03\x02\x02\x02\xF2\xF4\x05\f\x07\x02\xF3\xF2\x03\x02\x02\x02\xF4" +
        "\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
        "\xF8\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\u0110\x05\x10\t\x02\xF9" +
        "\xFB\x05\f\x07\x02\xFA\xF9\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC" +
        "\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE" +
        "\xFC\x03\x02\x02\x02\xFF\u0110\x05\x18\r\x02\u0100\u0102\x05\f\x07\x02" +
        "\u0101\u0100\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03" +
        "\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02\x02\x02\u0105" +
        "\u0103\x03\x02\x02\x02\u0106\u0110\x05 \x11\x02\u0107\u0109\x05\f\x07" +
        "\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A\u0108" +
        "\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02" +
        "\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x05v<\x02\u010E\u0110\x07A\x02" +
        "\x02\u010F\xF5\x03\x02\x02\x02\u010F\xFC\x03\x02\x02\x02\u010F\u0103\x03" +
        "\x02\x02\x02\u010F\u010A\x03\x02\x02\x02\u010F\u010E\x03\x02\x02\x02\u0110" +
        "\t\x03\x02\x02\x02\u0111\u0114\x05\f\x07\x02\u0112\u0114\t\x02\x02\x02" +
        "\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02\x02\x02\u0114\v\x03\x02" +
        "\x02\x02\u0115\u0118\x05j6\x02\u0116\u0118\t\x03\x02\x02\u0117\u0115\x03" +
        "\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\r\x03\x02\x02\x02\u0119" +
        "\u011C\x07\x14\x02\x02\u011A\u011C\x05j6\x02\u011B\u0119\x03\x02\x02\x02" +
        "\u011B\u011A\x03\x02\x02\x02\u011C\x0F\x03\x02\x02\x02\u011D\u011E\x07" +
        "\v\x02\x02\u011E\u0120\x07f\x02\x02\u011F\u0121\x05\x12\n\x02\u0120\u011F" +
        "\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02" +
        "\u0122\u0123\x07\x13\x02\x02\u0123\u0125\x05N(\x02\u0124\u0122\x03\x02" +
        "\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0128\x03\x02\x02\x02\u0126" +
        "\u0127\x07\x1A\x02\x02\u0127\u0129\x05\"\x12\x02\u0128\u0126\x03\x02\x02" +
        "\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012B" +
        "\x05$\x13\x02\u012B\x11\x03\x02\x02\x02\u012C\u012D\x07F\x02\x02\u012D" +
        "\u0132\x05\x14\v\x02\u012E\u012F\x07B\x02\x02\u012F\u0131\x05\x14\v\x02" +
        "\u0130\u012E\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03" +
        "\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134" +
        "\u0132\x03\x02\x02\x02\u0135\u0136\x07E\x02\x02\u0136\x13\x03\x02\x02" +
        "\x02\u0137\u013A\x07f\x02\x02\u0138\u0139\x07\x13\x02\x02\u0139\u013B" +
        "\x05\x16\f\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
        "\u013B\x15\x03\x02\x02\x02\u013C\u0141\x05N(\x02\u013D\u013E\x07W\x02" +
        "\x02\u013E\u0140\x05N(\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0143\x03" +
        "\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142" +
        "\x17\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0145\x07\x12\x02" +
        "\x02\u0145\u0148\x07f\x02\x02\u0146\u0147\x07\x1A\x02\x02\u0147\u0149" +
        "\x05\"\x12\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02" +
        "\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x07=\x02\x02\u014B\u014D\x05" +
        "\x1A\x0E\x02\u014C\u014B\x03\x02\x02\x02\u014C\u014D\x03\x02\x02\x02\u014D" +
        "\u014F\x03\x02\x02\x02\u014E\u0150\x07B\x02\x02\u014F\u014E\x03\x02\x02" +
        "\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0153" +
        "\x05\x1E\x10\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
        "\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x07>\x02\x02\u0155\x19\x03\x02" +
        "\x02\x02\u0156\u015B\x05\x1C\x0F\x02\u0157\u0158\x07B\x02\x02\u0158\u015A" +
        "\x05\x1C\x0F\x02\u0159\u0157\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02" +
        "\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\x1B\x03" +
        "\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0160\x05j6\x02\u015F\u015E" +
        "\x03\x02\x02\x02\u0160\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02" +
        "\u0161\u0162\x03\x02\x02\x02\u0162\u0164\x03\x02\x02\x02\u0163\u0161\x03" +
        "\x02\x02\x02\u0164\u0166\x07f\x02\x02\u0165\u0167\x05\xCAf\x02\u0166\u0165" +
        "\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02" +
        "\u0168\u016A\x05$\x13\x02\u0169\u0168\x03\x02\x02\x02\u0169\u016A\x03" +
        "\x02\x02\x02\u016A\x1D\x03\x02\x02\x02\u016B\u016F\x07A\x02\x02\u016C" +
        "\u016E\x05(\x15\x02\u016D\u016C\x03\x02\x02\x02\u016E\u0171\x03\x02\x02" +
        "\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\x1F" +
        "\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0173\x07\x1E\x02\x02" +
        "\u0173\u0175\x07f\x02\x02\u0174\u0176\x05\x12\n\x02\u0175\u0174\x03\x02" +
        "\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177" +
        "\u0178\x07\x13\x02\x02\u0178\u017A\x05\"\x12\x02\u0179\u0177\x03\x02\x02" +
        "\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C" +
        "\x05&\x14\x02\u017C!\x03\x02\x02\x02\u017D\u0182\x05N(\x02\u017E\u017F" +
        "\x07B\x02\x02\u017F\u0181\x05N(\x02\u0180\u017E\x03\x02\x02\x02\u0181" +
        "\u0184\x03\x02\x02\x02\u0182\u0180\x03\x02\x02\x02\u0182\u0183\x03\x02" +
        "\x02\x02\u0183#\x03\x02\x02\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0189";
    private static readonly _serializedATNSegment1: string =
        "\x07=\x02\x02\u0186\u0188\x05(\x15\x02\u0187\u0186\x03\x02\x02\x02\u0188" +
        "\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02" +
        "\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C" +
        "\u018D\x07>\x02\x02\u018D%\x03\x02\x02\x02\u018E\u0192\x07=\x02\x02\u018F" +
        "\u0191\x056\x1C\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02" +
        "\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0195" +
        "\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0195\u0196\x07>\x02\x02" +
        "\u0196\'\x03\x02\x02\x02\u0197\u01A4\x07A\x02\x02\u0198\u019A\x07(\x02" +
        "\x02\u0199\u0198\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B" +
        "\x03\x02\x02\x02\u019B\u01A4\x05\x86D\x02\u019C\u019E\x05\n\x06\x02\u019D" +
        "\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02" +
        "\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1" +
        "\u019F\x03\x02\x02\x02\u01A2\u01A4\x05*\x16\x02\u01A3\u0197\x03\x02\x02" +
        "\x02\u01A3\u0199\x03\x02\x02\x02\u01A3\u019F\x03\x02\x02\x02\u01A4)\x03" +
        "\x02\x02\x02\u01A5\u01AF\x05,\x17\x02\u01A6\u01AF\x05.\x18\x02\u01A7\u01AF" +
        "\x054\x1B\x02\u01A8\u01AF\x050\x19\x02\u01A9\u01AF\x052\x1A\x02\u01AA" +
        "\u01AF\x05 \x11\x02\u01AB\u01AF\x05v<\x02\u01AC\u01AF\x05\x10\t\x02\u01AD" +
        "\u01AF\x05\x18\r\x02\u01AE\u01A5\x03\x02\x02\x02\u01AE\u01A6\x03\x02\x02" +
        "\x02\u01AE\u01A7\x03\x02\x02\x02\u01AE\u01A8\x03\x02\x02\x02\u01AE\u01A9" +
        "\x03\x02\x02\x02\u01AE\u01AA\x03\x02\x02\x02\u01AE\u01AB\x03\x02\x02\x02" +
        "\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF+\x03\x02" +
        "\x02\x02\u01B0\u01B3\x05N(\x02\u01B1\u01B3\x072\x02\x02\u01B2\u01B0\x03" +
        "\x02\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
        "\u01B5\x07f\x02\x02\u01B5\u01BA\x05Z.\x02\u01B6\u01B7\x07?\x02\x02\u01B7" +
        "\u01B9\x07@\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B9\u01BC\x03\x02\x02" +
        "\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BF" +
        "\x03\x02\x02\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01BE\x07/\x02\x02" +
        "\u01BE\u01C0\x05X-\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03\x02" +
        "\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01C4\x05b2\x02\u01C2\u01C4" +
        "\x07A\x02\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C2\x03\x02\x02\x02" +
        "\u01C4-\x03\x02\x02\x02\u01C5\u01C6\x05\x12\n\x02\u01C6\u01C7\x05,\x17" +
        "\x02\u01C7/\x03\x02\x02\x02\u01C8\u01C9\x07f\x02\x02\u01C9\u01CC\x05Z" +
        ".\x02\u01CA\u01CB\x07/\x02\x02\u01CB\u01CD\x05X-\x02\u01CC\u01CA\x03\x02" +
        "\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
        "\u01CF\x05d3\x02\u01CF1\x03\x02\x02\x02\u01D0\u01D1\x05\x12\n\x02\u01D1" +
        "\u01D2\x050\x19\x02\u01D23\x03\x02\x02\x02\u01D3\u01D4\x05N(\x02\u01D4" +
        "\u01D5\x05B\"\x02\u01D5\u01D6\x07A\x02\x02\u01D65\x03\x02\x02\x02\u01D7" +
        "\u01D9\x05\n\x06\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02" +
        "\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DD" +
        "\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01E0\x058\x1D\x02" +
        "\u01DE\u01E0\x07A\x02\x02\u01DF\u01DA\x03\x02\x02\x02\u01DF\u01DE\x03" +
        "\x02\x02\x02\u01E07\x03\x02\x02\x02\u01E1\u01E9\x05:\x1E\x02\u01E2\u01E9" +
        "\x05> \x02\u01E3\u01E9\x05@!\x02\u01E4\u01E9\x05 \x11\x02\u01E5\u01E9" +
        "\x05v<\x02\u01E6\u01E9\x05\x10\t\x02\u01E7\u01E9\x05\x18\r\x02\u01E8\u01E1" +
        "\x03\x02\x02\x02\u01E8\u01E2\x03\x02\x02\x02\u01E8\u01E3\x03\x02\x02\x02" +
        "\u01E8\u01E4\x03\x02\x02\x02\u01E8\u01E5\x03\x02\x02\x02\u01E8\u01E6\x03" +
        "\x02\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E99\x03\x02\x02\x02\u01EA" +
        "\u01EB\x05N(\x02\u01EB\u01F0\x05<\x1F\x02\u01EC\u01ED\x07B\x02\x02\u01ED" +
        "\u01EF\x05<\x1F\x02\u01EE\u01EC\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02" +
        "\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3" +
        "\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F4\x07A\x02\x02" +
        "\u01F4;\x03\x02\x02\x02\u01F5\u01FA\x07f\x02\x02\u01F6\u01F7\x07?\x02" +
        "\x02\u01F7\u01F9\x07@\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F9\u01FC" +
        "\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02" +
        "\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FD\u01FE\x07" +
        "D\x02\x02\u01FE\u01FF\x05H%\x02\u01FF=\x03\x02\x02\x02\u0200\u0203\x05" +
        "N(\x02\u0201\u0203\x072\x02\x02\u0202\u0200\x03\x02\x02\x02\u0202\u0201" +
        "\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x07f\x02\x02" +
        "\u0205\u020A\x05Z.\x02\u0206\u0207\x07?\x02\x02\u0207\u0209\x07@\x02\x02" +
        "\u0208\u0206\x03\x02\x02\x02\u0209\u020C\x03\x02\x02\x02\u020A\u0208\x03" +
        "\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020F\x03\x02\x02\x02\u020C" +
        "\u020A\x03\x02\x02\x02\u020D\u020E\x07/\x02\x02\u020E\u0210\x05X-\x02" +
        "\u020F\u020D\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210\u0211\x03" +
        "\x02\x02\x02\u0211\u0212\x07A\x02\x02\u0212?\x03\x02\x02\x02\u0213\u0214" +
        "\x05\x12\n\x02\u0214\u0215\x05> \x02\u0215A\x03\x02\x02\x02\u0216\u021B" +
        "\x05D#\x02\u0217\u0218\x07B\x02\x02\u0218\u021A\x05D#\x02\u0219\u0217" +
        "\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02\u021B\u0219\x03\x02\x02\x02" +
        "\u021B\u021C\x03\x02\x02\x02\u021CC\x03\x02\x02\x02\u021D\u021B\x03\x02" +
        "\x02\x02\u021E\u0221\x05F$\x02\u021F\u0220\x07D\x02\x02\u0220\u0222\x05" +
        "H%\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222E" +
        "\x03\x02\x02\x02\u0223\u0228\x07f\x02\x02\u0224\u0225\x07?\x02\x02\u0225" +
        "\u0227\x07@\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227\u022A\x03\x02\x02" +
        "\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229G\x03" +
        "\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022E\x05J&\x02\u022C\u022E" +
        "\x05\xB0Y\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022C\x03\x02\x02\x02" +
        "\u022EI\x03\x02\x02\x02\u022F\u023B\x07=\x02\x02\u0230\u0235\x05H%\x02" +
        "\u0231\u0232\x07B\x02\x02\u0232\u0234\x05H%\x02\u0233\u0231\x03\x02\x02" +
        "\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236" +
        "\x03\x02\x02\x02\u0236\u0239\x03\x02\x02\x02\u0237\u0235\x03\x02\x02\x02" +
        "\u0238\u023A\x07B\x02\x02\u0239\u0238\x03\x02\x02\x02\u0239\u023A\x03" +
        "\x02\x02\x02\u023A\u023C\x03\x02\x02\x02\u023B\u0230\x03\x02\x02\x02\u023B" +
        "\u023C\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x07>\x02" +
        "\x02\u023EK\x03\x02\x02\x02\u023F\u0240\x07f\x02\x02\u0240M\x03\x02\x02" +
        "\x02\u0241\u0246\x05P)\x02\u0242\u0243\x07?\x02\x02\u0243\u0245\x07@\x02" +
        "\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244" +
        "\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0252\x03\x02\x02\x02" +
        "\u0248\u0246\x03\x02\x02\x02\u0249\u024E\x05R*\x02\u024A\u024B\x07?\x02" +
        "\x02\u024B\u024D\x07@\x02\x02\u024C\u024A\x03\x02\x02\x02\u024D\u0250" +
        "\x03\x02\x02\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02" +
        "\u024F\u0252\x03\x02\x02\x02\u0250\u024E\x03\x02\x02\x02\u0251\u0241\x03" +
        "\x02\x02\x02\u0251\u0249\x03\x02\x02\x02\u0252O\x03\x02\x02\x02\u0253" +
        "\u0255\x07f\x02\x02\u0254\u0256\x05T+\x02\u0255\u0254\x03\x02\x02\x02" +
        "\u0255\u0256\x03\x02\x02\x02\u0256\u025E\x03\x02\x02\x02\u0257\u0258\x07" +
        "C\x02\x02\u0258\u025A\x07f\x02\x02\u0259\u025B\x05T+\x02\u025A\u0259\x03" +
        "\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C" +
        "\u0257\x03\x02\x02\x02\u025D\u0260\x03\x02\x02\x02\u025E\u025C\x03\x02" +
        "\x02\x02\u025E\u025F\x03\x02\x02\x02\u025FQ\x03\x02\x02\x02\u0260\u025E" +
        "\x03\x02\x02\x02\u0261\u0262\t\x04\x02\x02\u0262S\x03\x02\x02\x02\u0263" +
        "\u0264\x07F\x02\x02\u0264\u0269\x05V,\x02\u0265\u0266\x07B\x02\x02\u0266" +
        "\u0268\x05V,\x02\u0267\u0265\x03\x02\x02\x02\u0268\u026B\x03\x02\x02\x02" +
        "\u0269\u0267\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026C\x03" +
        "\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026C\u026D\x07E\x02\x02\u026D" +
        "U\x03\x02\x02\x02\u026E\u0275\x05N(\x02\u026F\u0272\x07I\x02\x02\u0270" +
        "\u0271\t\x05\x02\x02\u0271\u0273\x05N(\x02\u0272\u0270\x03\x02\x02\x02" +
        "\u0272\u0273\x03\x02\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u026E\x03" +
        "\x02\x02\x02\u0274\u026F\x03\x02\x02\x02\u0275W\x03\x02\x02\x02\u0276" +
        "\u027B\x05f4\x02\u0277\u0278\x07B\x02\x02\u0278\u027A\x05f4\x02\u0279" +
        "\u0277\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02" +
        "\x02\x02\u027B\u027C\x03\x02\x02\x02\u027CY\x03\x02\x02\x02\u027D\u027B" +
        "\x03\x02\x02\x02\u027E\u0280\x07;\x02\x02\u027F\u0281\x05\\/\x02\u0280" +
        "\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02\u0281\u0282\x03\x02" +
        "\x02\x02\u0282\u0283\x07<\x02\x02\u0283[\x03\x02\x02\x02\u0284\u0289\x05" +
        "^0\x02\u0285\u0286\x07B\x02\x02\u0286\u0288\x05^0\x02\u0287\u0285\x03" +
        "\x02\x02\x02\u0288\u028B\x03\x02\x02\x02\u0289\u0287\x03\x02\x02\x02\u0289" +
        "\u028A\x03\x02\x02\x02\u028A\u028E\x03\x02\x02\x02\u028B\u0289\x03\x02" +
        "\x02\x02\u028C\u028D\x07B\x02\x02\u028D\u028F\x05`1\x02\u028E\u028C\x03" +
        "\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0292\x03\x02\x02\x02\u0290" +
        "\u0292\x05`1\x02\u0291\u0284\x03\x02\x02\x02\u0291\u0290\x03\x02\x02\x02" +
        "\u0292]\x03\x02\x02\x02\u0293\u0295\x05\x0E\b\x02\u0294\u0293\x03\x02" +
        "\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296" +
        "\u0297\x03\x02\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0296\x03\x02" +
        "\x02\x02\u0299\u029A\x05N(\x02\u029A\u029B\x05F$\x02\u029B_\x03\x02\x02" +
        "\x02\u029C\u029E\x05\x0E\b\x02\u029D\u029C\x03\x02\x02\x02\u029E\u02A1" +
        "\x03\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02" +
        "\u02A0\u02A2\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A3\x05" +
        "N(\x02\u02A3\u02A4\x07h\x02\x02\u02A4\u02A5\x05F$\x02\u02A5a\x03\x02\x02" +
        "\x02\u02A6\u02A7\x05\x86D\x02\u02A7c\x03\x02\x02\x02\u02A8\u02A9\x05\x86" +
        "D\x02\u02A9e\x03\x02\x02\x02\u02AA\u02AF\x07f\x02\x02\u02AB\u02AC\x07" +
        "C\x02\x02\u02AC\u02AE\x07f\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE\u02B1" +
        "\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02" +
        "\u02B0g\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02\u02B2\u02B3\t\x06" +
        "\x02\x02\u02B3i\x03\x02\x02\x02\u02B4\u02B5\x07g\x02\x02\u02B5\u02BC\x05" +
        "l7\x02\u02B6\u02B9\x07;\x02\x02\u02B7\u02BA\x05n8\x02\u02B8\u02BA\x05" +
        "r:\x02\u02B9\u02B7\x03\x02\x02\x02\u02B9\u02B8\x03\x02\x02\x02\u02B9\u02BA" +
        "\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB\u02BD\x07<\x02\x02" +
        "\u02BC\u02B6\x03\x02\x02\x02\u02BC\u02BD\x03\x02\x02\x02\u02BDk\x03\x02" +
        "\x02\x02\u02BE\u02BF\x05f4\x02\u02BFm\x03\x02\x02\x02\u02C0\u02C5\x05" +
        "p9\x02\u02C1\u02C2\x07B\x02\x02\u02C2\u02C4\x05p9\x02\u02C3\u02C1\x03" +
        "\x02\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5" +
        "\u02C6\x03\x02\x02\x02\u02C6o\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02" +
        "\x02\u02C8\u02C9\x07f\x02\x02\u02C9\u02CA\x07D\x02\x02\u02CA\u02CB\x05" +
        "r:\x02\u02CBq\x03\x02\x02\x02\u02CC\u02D0\x05\xB0Y\x02\u02CD\u02D0\x05" +
        "j6\x02\u02CE\u02D0\x05t;\x02\u02CF\u02CC\x03\x02\x02\x02\u02CF\u02CD\x03" +
        "\x02\x02\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0s\x03\x02\x02\x02\u02D1" +
        "\u02DA\x07=\x02\x02\u02D2\u02D7\x05r:\x02\u02D3\u02D4\x07B\x02\x02\u02D4" +
        "\u02D6\x05r:\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D9\x03\x02\x02\x02" +
        "\u02D7\u02D5\x03\x02\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DB\x03" +
        "\x02\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02DA\u02D2\x03\x02\x02\x02\u02DA" +
        "\u02DB\x03\x02\x02\x02\u02DB\u02DD\x03\x02\x02\x02\u02DC\u02DE\x07B\x02" +
        "\x02\u02DD\u02DC\x03\x02\x02\x02\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02DF" +
        "\x03\x02\x02\x02\u02DF\u02E0\x07>\x02\x02\u02E0u\x03\x02\x02\x02\u02E1" +
        "\u02E2\x07g\x02\x02\u02E2\u02E3\x07\x1E\x02\x02\u02E3\u02E4\x07f\x02\x02" +
        "\u02E4\u02E5\x05x=\x02\u02E5w\x03\x02\x02\x02\u02E6\u02EA\x07=\x02\x02" +
        "\u02E7\u02E9\x05z>\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9\u02EC\x03\x02" +
        "\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02EB\x03\x02\x02\x02\u02EB" +
        "\u02ED\x03\x02\x02\x02\u02EC\u02EA\x03\x02\x02\x02\u02ED\u02EE\x07>\x02" +
        "\x02\u02EEy\x03\x02\x02\x02\u02EF\u02F1\x05\n\x06\x02\u02F0\u02EF\x03" +
        "\x02\x02\x02\u02F1\u02F4\x03\x02\x02\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2" +
        "\u02F3\x03\x02\x02\x02\u02F3\u02F5\x03\x02\x02\x02\u02F4\u02F2\x03\x02" +
        "\x02\x02\u02F5\u02F8\x05|?\x02\u02F6\u02F8\x07A\x02\x02\u02F7\u02F2\x03" +
        "\x02\x02\x02\u02F7\u02F6\x03\x02\x02\x02\u02F8{\x03\x02\x02\x02\u02F9" +
        "\u02FA\x05N(\x02\u02FA\u02FB\x05~@\x02\u02FB\u02FC\x07A\x02\x02\u02FC" +
        "\u030E\x03\x02\x02\x02\u02FD\u02FF\x05\x10\t\x02\u02FE\u0300\x07A\x02" +
        "\x02\u02FF\u02FE\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u0300\u030E" +
        "\x03\x02\x02\x02\u0301\u0303\x05 \x11\x02\u0302\u0304\x07A\x02\x02\u0303" +
        "\u0302\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02\u0304\u030E\x03\x02" +
        "\x02\x02\u0305\u0307\x05\x18\r\x02\u0306\u0308\x07A\x02\x02\u0307\u0306" +
        "\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308\u030E\x03\x02\x02\x02" +
        "\u0309\u030B\x05v<\x02\u030A\u030C\x07A\x02\x02\u030B\u030A\x03\x02\x02" +
        "\x02\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u02F9" +
        "\x03\x02\x02\x02\u030D\u02FD\x03\x02\x02\x02\u030D\u0301\x03\x02\x02\x02" +
        "\u030D\u0305\x03\x02\x02\x02\u030D\u0309\x03\x02\x02\x02\u030E}\x03\x02" +
        "\x02\x02\u030F\u0312\x05\x80A\x02\u0310\u0312\x05\x82B\x02\u0311\u030F" +
        "\x03\x02\x02\x02\u0311\u0310\x03\x02\x02\x02\u0312\x7F\x03\x02\x02\x02" +
        "\u0313\u0314\x07f\x02\x02\u0314\u0315\x07;\x02\x02\u0315\u0317\x07<\x02" +
        "\x02\u0316\u0318\x05\x84C\x02\u0317\u0316\x03\x02\x02\x02\u0317\u0318" +
        "\x03\x02\x02\x02\u0318\x81\x03\x02\x02\x02\u0319\u031A\x05B\"\x02\u031A" +
        "\x83\x03\x02\x02\x02\u031B\u031C\x07\x0E\x02\x02\u031C\u031D\x05r:\x02" +
        "\u031D\x85\x03\x02\x02\x02\u031E\u0322\x07=\x02\x02\u031F\u0321\x05\x88" +
        "E\x02\u0320\u031F\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322\u0320" +
        "\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323\u0325\x03\x02\x02\x02" +
        "\u0324\u0322\x03\x02\x02\x02\u0325\u0326\x07>\x02\x02\u0326\x87\x03\x02" +
        "\x02\x02\u0327\u032B\x05\x8AF\x02\u0328\u032B\x05\x8EH\x02\u0329\u032B" +
        "\x05\b\x05\x02\u032A\u0327\x03\x02\x02\x02\u032A\u0328\x03\x02\x02\x02" +
        "\u032A\u0329\x03\x02\x02\x02\u032B\x89\x03\x02\x02\x02\u032C\u032D\x05" +
        "\x8CG\x02\u032D\u032E\x07A\x02\x02\u032E\x8B\x03\x02\x02\x02\u032F\u0331" +
        "\x05\x0E\b\x02\u0330\u032F\x03\x02\x02\x02\u0331\u0334\x03\x02\x02\x02" +
        "\u0332\u0330\x03\x02\x02\x02\u0332\u0333\x03\x02\x02\x02\u0333\u0335\x03" +
        "\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0335\u0336\x05N(\x02\u0336\u0337" +
        "\x05B\"\x02\u0337\x8D\x03\x02\x02\x02\u0338\u03A1\x05\x86D\x02\u0339\u033A" +
        "\x07\x04\x02\x02\u033A\u033D\x05\xB0Y\x02\u033B\u033C\x07J\x02\x02\u033C" +
        "\u033E\x05\xB0Y\x02\u033D\u033B\x03\x02\x02\x02\u033D\u033E\x03\x02\x02" +
        "\x02\u033E\u033F\x03\x02\x02\x02\u033F\u0340\x07A\x02\x02\u0340\u03A1" +
        "\x03\x02\x02\x02\u0341\u0342\x07\x18\x02\x02\u0342\u0343\x05\xA8U\x02" +
        "\u0343\u0346\x05\x8EH\x02\u0344\u0345\x07\x11\x02\x02\u0345\u0347\x05" +
        "\x8EH\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347" +
        "\u03A1\x03\x02\x02\x02\u0348\u0349\x07\x17\x02\x02\u0349\u034A\x07;\x02" +
        "\x02\u034A\u034B\x05\xA0Q\x02\u034B\u034C\x07<\x02\x02\u034C\u034D\x05" +
        "\x8EH\x02\u034D\u03A1\x03\x02\x02\x02\u034E\u034F\x074\x02\x02\u034F\u0350" +
        "\x05\xA8U\x02\u0350\u0351\x05\x8EH\x02\u0351\u03A1\x03\x02\x02\x02\u0352" +
        "\u0353\x07\x0F\x02\x02\u0353\u0354\x05\x8EH\x02\u0354\u0355\x074\x02\x02" +
        "\u0355\u0356\x05\xA8U\x02\u0356\u0357\x07A\x02\x02\u0357\u03A1\x03\x02" +
        "\x02\x02\u0358\u0359\x071\x02\x02\u0359\u0363\x05\x86D\x02\u035A\u035C" +
        "\x05\x90I\x02\u035B\u035A\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02" +
        "\u035D\u035B\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E\u0360\x03" +
        "\x02\x02\x02\u035F\u0361\x05\x94K\x02\u0360\u035F\x03\x02\x02\x02\u0360" +
        "\u0361\x03\x02\x02\x02\u0361\u0364\x03\x02\x02\x02\u0362\u0364\x05\x94" +
        "K\x02\u0363\u035B\x03\x02\x02\x02\u0363\u0362\x03\x02\x02\x02\u0364\u03A1" +
        "\x03\x02\x02\x02\u0365\u0366\x071\x02\x02\u0366\u0367\x05\x96L\x02\u0367" +
        "\u036B\x05\x86D\x02\u0368\u036A\x05\x90I\x02\u0369\u0368\x03\x02\x02\x02" +
        "\u036A\u036D\x03\x02\x02\x02\u036B\u0369\x03\x02\x02\x02\u036B\u036C\x03" +
        "\x02\x02\x02\u036C\u036F\x03\x02\x02\x02\u036D\u036B\x03\x02\x02\x02\u036E" +
        "\u0370\x05\x94K\x02\u036F\u036E\x03\x02\x02\x02\u036F\u0370\x03\x02\x02" +
        "\x02\u0370\u03A1\x03\x02\x02\x02\u0371\u0372\x07+\x02\x02\u0372\u0373" +
        "\x05\xA8U\x02\u0373\u0377\x07=\x02\x02\u0374\u0376\x05\x9CO\x02\u0375" +
        "\u0374\x03\x02\x02\x02\u0376\u0379\x03\x02\x02\x02\u0377\u0375\x03\x02" +
        "\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037D\x03\x02\x02\x02\u0379" +
        "\u0377\x03\x02\x02\x02\u037A\u037C\x05\x9EP\x02\u037B\u037A\x03\x02\x02" +
        "\x02\u037C\u037F\x03\x02\x02\x02\u037D\u037B\x03\x02\x02\x02\u037D\u037E" +
        "\x03\x02\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u037D\x03\x02\x02\x02" +
        "\u0380\u0381\x07>\x02\x02\u0381\u03A1\x03\x02\x02\x02\u0382\u0383\x07" +
        ",\x02\x02\u0383\u0384\x05\xA8U\x02\u0384\u0385\x05\x86D\x02\u0385\u03A1" +
        "\x03\x02\x02\x02\u0386\u0388\x07&\x02\x02\u0387\u0389\x05\xB0Y\x02\u0388" +
        "\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038A\x03\x02" +
        "\x02\x02\u038A\u03A1\x07A\x02\x02\u038B\u038C\x07.\x02\x02\u038C\u038D" +
        "\x05\xB0Y\x02\u038D\u038E\x07A\x02\x02\u038E\u03A1\x03\x02\x02\x02\u038F" +
        "\u0391\x07\x06\x02\x02\u0390\u0392\x07f\x02\x02\u0391\u0390\x03\x02\x02" +
        "\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u03A1" +
        "\x07A\x02\x02\u0394\u0396\x07\r\x02\x02\u0395\u0397\x07f\x02\x02\u0396" +
        "\u0395\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x03\x02" +
        "\x02\x02\u0398\u03A1\x07A\x02\x02\u0399\u03A1\x07A\x02\x02\u039A\u039B" +
        "\x05\xACW\x02\u039B\u039C\x07A\x02\x02\u039C\u03A1\x03\x02\x02\x02\u039D" +
        "\u039E\x07f\x02\x02\u039E\u039F\x07J\x02\x02\u039F\u03A1\x05\x8EH\x02" +
        "\u03A0\u0338\x03\x02\x02\x02\u03A0\u0339\x03\x02\x02\x02\u03A0\u0341\x03" +
        "\x02\x02\x02\u03A0\u0348\x03\x02\x02\x02\u03A0\u034E\x03\x02\x02\x02\u03A0" +
        "\u0352\x03\x02\x02\x02\u03A0\u0358\x03\x02\x02\x02\u03A0\u0365\x03\x02" +
        "\x02\x02\u03A0\u0371\x03\x02\x02\x02\u03A0\u0382\x03\x02\x02\x02\u03A0" +
        "\u0386\x03\x02\x02\x02\u03A0\u038B\x03\x02\x02\x02\u03A0\u038F\x03\x02" +
        "\x02\x02\u03A0\u0394\x03\x02\x02\x02\u03A0\u0399\x03\x02\x02\x02\u03A0" +
        "\u039A\x03\x02\x02\x02\u03A0\u039D\x03\x02\x02\x02\u03A1\x8F\x03\x02\x02" +
        "\x02\u03A2\u03A3\x07\t\x02\x02\u03A3\u03A7\x07;\x02\x02\u03A4\u03A6\x05" +
        "\x0E\b\x02\u03A5\u03A4\x03\x02\x02\x02\u03A6\u03A9\x03\x02\x02\x02\u03A7" +
        "\u03A5\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03AA\x03\x02" +
        "\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03AA\u03AB\x05\x92J\x02\u03AB\u03AC" +
        "\x07f\x02\x02\u03AC\u03AD\x07<\x02\x02\u03AD\u03AE\x05\x86D\x02\u03AE" +
        "\x91\x03\x02\x02\x02\u03AF\u03B4\x05f4\x02\u03B0\u03B1\x07X\x02\x02\u03B1" +
        "\u03B3\x05f4\x02\u03B2\u03B0\x03\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02" +
        "\u03B4\u03B2\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\x93\x03" +
        "\x02\x02\x02\u03B6\u03B4\x03\x02\x02\x02\u03B7\u03B8\x07\x15\x02\x02\u03B8" +
        "\u03B9\x05\x86D\x02\u03B9\x95\x03\x02\x02\x02\u03BA\u03BB\x07;\x02\x02" +
        "\u03BB\u03BD\x05\x98M\x02\u03BC\u03BE\x07A\x02\x02\u03BD\u03BC\x03\x02" +
        "\x02\x02\u03BD\u03BE\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF" +
        "\u03C0\x07<\x02\x02\u03C0\x97\x03\x02\x02\x02\u03C1\u03C6\x05\x9AN\x02" +
        "\u03C2\u03C3\x07A\x02\x02\u03C3\u03C5\x05\x9AN\x02\u03C4\u03C2\x03\x02" +
        "\x02\x02\u03C5\u03C8\x03\x02\x02\x02\u03C6\u03C4\x03\x02\x02\x02\u03C6" +
        "\u03C7\x03\x02\x02\x02\u03C7\x99\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02" +
        "\x02\u03C9\u03CB\x05\x0E\b\x02\u03CA\u03C9\x03\x02\x02\x02\u03CB\u03CE" +
        "\x03\x02\x02\x02\u03CC\u03CA\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02" +
        "\u03CD\u03CF\x03\x02\x02\x02\u03CE\u03CC\x03\x02\x02\x02\u03CF\u03D0\x05" +
        "P)\x02\u03D0\u03D1\x05F$\x02\u03D1\u03D2\x07D\x02\x02\u03D2\u03D3\x05" +
        "\xB0Y\x02\u03D3\x9B\x03\x02\x02\x02\u03D4\u03D6\x05\x9EP\x02\u03D5\u03D4" +
        "\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02" +
        "\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DA\x03\x02\x02\x02\u03D9\u03DB\x05" +
        "\x88E\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC" +
        "\u03DA\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\x9D\x03\x02\x02" +
        "\x02\u03DE\u03DF\x07\b\x02\x02\u03DF\u03E0\x05\xAEX\x02\u03E0\u03E1\x07" +
        "J\x02\x02\u03E1\u03E9\x03\x02\x02\x02\u03E2\u03E3\x07\b\x02\x02\u03E3" +
        "\u03E4\x05L\'\x02\u03E4\u03E5\x07J\x02\x02\u03E5\u03E9\x03\x02\x02\x02" +
        "\u03E6\u03E7\x07\x0E\x02\x02\u03E7\u03E9\x07J\x02\x02\u03E8\u03DE\x03" +
        "\x02\x02\x02\u03E8\u03E2\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E9" +
        "\x9F\x03\x02\x02\x02\u03EA\u03F7\x05\xA4S\x02\u03EB\u03ED\x05\xA2R\x02" +
        "\u03EC\u03EB\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EE\x03" +
        "\x02\x02\x02\u03EE\u03F0\x07A\x02\x02\u03EF\u03F1\x05\xB0Y\x02\u03F0\u03EF" +
        "\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1\u03F2\x03\x02\x02\x02" +
        "\u03F2\u03F4\x07A\x02\x02\u03F3\u03F5\x05\xA6T\x02\u03F4\u03F3\x03\x02" +
        "\x02\x02\u03F4\u03F5\x03\x02\x02\x02\u03F5\u03F7\x03\x02\x02\x02\u03F6" +
        "\u03EA\x03\x02\x02\x02\u03F6\u03EC\x03\x02\x02\x02\u03F7\xA1\x03\x02\x02" +
        "\x02\u03F8\u03FB\x05\x8CG\x02\u03F9\u03FB\x05\xAAV\x02\u03FA\u03F8\x03" +
        "\x02\x02\x02\u03FA\u03F9\x03\x02\x02\x02\u03FB\xA3\x03\x02\x02\x02\u03FC" +
        "\u03FE\x05\x0E\b\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02" +
        "\x02\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402" +
        "\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0403\x05N(\x02\u0403" +
        "\u0404\x05F$\x02\u0404\u0405\x07J\x02\x02\u0405\u0406\x05\xB0Y\x02\u0406" +
        "\xA5\x03\x02\x02\x02\u0407\u0408\x05\xAAV\x02\u0408\xA7\x03\x02\x02\x02" +
        "\u0409\u040A\x07;\x02\x02\u040A\u040B\x05\xB0Y\x02\u040B\u040C\x07<\x02" +
        "\x02\u040C\xA9\x03\x02\x02\x02\u040D\u0412\x05\xB0Y\x02\u040E\u040F\x07" +
        "B\x02\x02\u040F\u0411\x05\xB0Y\x02\u0410\u040E\x03\x02\x02\x02\u0411\u0414" +
        "\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02" +
        "\u0413\xAB\x03\x02\x02\x02\u0414\u0412\x03\x02\x02\x02\u0415\u0416\x05" +
        "\xB0Y\x02\u0416\xAD\x03\x02\x02\x02\u0417\u0418\x05\xB0Y\x02\u0418\xAF" +
        "\x03\x02\x02\x02\u0419\u041A\bY\x01\x02\u041A\u0427\x05\xB2Z\x02\u041B" +
        "\u041C\x07!\x02\x02\u041C\u0427\x05\xB4[\x02\u041D\u041E\x07;\x02\x02" +
        "\u041E\u041F\x05N(\x02\u041F\u0420\x07<\x02\x02\u0420\u0421\x05\xB0Y\x13" +
        "\u0421\u0427\x03\x02\x02\x02\u0422\u0423\t\x07\x02\x02\u0423\u0427\x05" +
        "\xB0Y\x11\u0424\u0425\t\b\x02\x02\u0425\u0427\x05\xB0Y\x10\u0426\u0419" +
        "\x03\x02\x02\x02\u0426\u041B\x03\x02\x02\x02\u0426\u041D\x03\x02\x02\x02" +
        "\u0426\u0422\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u047D\x03" +
        "\x02\x02\x02\u0428\u0429\f\x0F\x02\x02\u0429\u042A\t\t\x02\x02\u042A\u047C" +
        "\x05\xB0Y\x10\u042B\u042C\f\x0E\x02\x02\u042C\u042D\t\n\x02\x02\u042D" +
        "\u047C\x05\xB0Y\x0F\u042E\u0436\f\r\x02\x02\u042F\u0430\x07F\x02\x02\u0430" +
        "\u0437\x07F\x02\x02\u0431\u0432\x07E\x02\x02\u0432\u0433\x07E\x02\x02" +
        "\u0433\u0437\x07E\x02\x02\u0434\u0435\x07E\x02\x02\u0435\u0437\x07E\x02" +
        "\x02\u0436\u042F\x03\x02\x02\x02\u0436\u0431\x03\x02\x02\x02\u0436\u0434" +
        "\x03\x02\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\u047C\x05\xB0Y\x0E" +
        "\u0439\u043A\f\f\x02\x02\u043A\u043B\t\v\x02\x02\u043B\u047C\x05\xB0Y" +
        "\r\u043C\u043D\f\n\x02\x02\u043D\u043E\t\f\x02\x02\u043E\u047C\x05\xB0" +
        "Y\v\u043F\u0440\f\t\x02\x02\u0440\u0441\x07W\x02\x02\u0441\u047C\x05\xB0" +
        "Y\n\u0442\u0443\f\b";
    private static readonly _serializedATNSegment2: string =
        "\x02\x02\u0443\u0444\x07Y\x02\x02\u0444\u047C\x05\xB0Y\t\u0445\u0446\f" +
        "\x07\x02\x02\u0446\u0447\x07X\x02\x02\u0447\u047C\x05\xB0Y\b\u0448\u0449" +
        "\f\x06\x02\x02\u0449\u044A\x07O\x02\x02\u044A\u047C\x05\xB0Y\x07\u044B" +
        "\u044C\f\x05\x02\x02\u044C\u044D\x07P\x02\x02\u044D\u047C\x05\xB0Y\x06" +
        "\u044E\u044F\f\x04\x02\x02\u044F\u0450\x07I\x02\x02\u0450\u0451\x05\xB0" +
        "Y\x02\u0451\u0452\x07J\x02\x02\u0452\u0453\x05\xB0Y\x05\u0453\u047C\x03" +
        "\x02\x02\x02\u0454\u0455\f\x03\x02\x02\u0455\u0456\t\r\x02\x02\u0456\u047C" +
        "\x05\xB0Y\x03\u0457\u0458\f\x1B\x02\x02\u0458\u0459\x07C\x02\x02\u0459" +
        "\u047C\x07f\x02\x02\u045A\u045B\f\x1A\x02\x02\u045B\u045C\x07C\x02\x02" +
        "\u045C\u047C\x07-\x02\x02\u045D\u045E\f\x19\x02\x02\u045E\u045F\x07C\x02" +
        "\x02\u045F\u0461\x07!\x02\x02\u0460\u0462\x05\xC0a\x02\u0461\u0460\x03" +
        "\x02\x02\x02\u0461\u0462\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463" +
        "\u047C\x05\xB8]\x02\u0464\u0465\f\x18\x02\x02\u0465\u0466\x07C\x02\x02" +
        "\u0466\u0467\x07*\x02\x02\u0467\u047C\x05\xC6d\x02\u0468\u0469\f\x17\x02" +
        "\x02\u0469\u046A\x07C\x02\x02\u046A\u047C\x05\xBE`\x02\u046B\u046C\f\x16" +
        "\x02\x02\u046C\u046D\x07?\x02\x02\u046D\u046E\x05\xB0Y\x02\u046E\u046F" +
        "\x07@\x02\x02\u046F\u047C\x03\x02\x02\x02\u0470\u0471\f\x15\x02\x02\u0471" +
        "\u0473\x07;\x02\x02\u0472\u0474\x05\xAAV\x02\u0473\u0472\x03\x02\x02\x02" +
        "\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u047C\x07" +
        "<\x02\x02\u0476\u0477\f\x12\x02\x02\u0477\u047C\t\x0E\x02\x02\u0478\u0479" +
        "\f\v\x02\x02\u0479\u047A\x07\x1C\x02\x02\u047A\u047C\x05N(\x02\u047B\u0428" +
        "\x03\x02\x02\x02\u047B\u042B\x03\x02\x02\x02\u047B\u042E\x03\x02\x02\x02" +
        "\u047B\u0439\x03\x02\x02\x02\u047B\u043C\x03\x02\x02\x02\u047B\u043F\x03" +
        "\x02\x02\x02\u047B\u0442\x03\x02\x02\x02\u047B\u0445\x03\x02\x02\x02\u047B" +
        "\u0448\x03\x02\x02\x02\u047B\u044B\x03\x02\x02\x02\u047B\u044E\x03\x02" +
        "\x02\x02\u047B\u0454\x03\x02\x02\x02\u047B\u0457\x03\x02\x02\x02\u047B" +
        "\u045A\x03\x02\x02\x02\u047B\u045D\x03\x02\x02\x02\u047B\u0464\x03\x02" +
        "\x02\x02\u047B\u0468\x03\x02\x02\x02\u047B\u046B\x03\x02\x02\x02\u047B" +
        "\u0470\x03\x02\x02\x02\u047B\u0476\x03\x02\x02\x02\u047B\u0478\x03\x02" +
        "\x02\x02\u047C\u047F\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D" +
        "\u047E\x03\x02\x02\x02\u047E\xB1\x03\x02\x02\x02\u047F\u047D\x03\x02\x02" +
        "\x02\u0480\u0481\x07;\x02\x02\u0481\u0482\x05\xB0Y\x02\u0482\u0483\x07" +
        "<\x02\x02\u0483\u0496\x03\x02\x02\x02\u0484\u0496\x07-\x02\x02\u0485\u0496" +
        "\x07*\x02\x02\u0486\u0496\x05h5\x02\u0487\u0496\x07f\x02\x02\u0488\u0489" +
        "\x05N(\x02\u0489\u048A\x07C\x02\x02\u048A\u048B\x07\v\x02\x02\u048B\u0496" +
        "\x03\x02\x02\x02\u048C\u048D\x072\x02\x02\u048D\u048E\x07C\x02\x02\u048E" +
        "\u0496\x07\v\x02\x02\u048F\u0493\x05\xC0a\x02\u0490\u0494\x05\xC8e\x02" +
        "\u0491\u0492\x07-\x02\x02\u0492\u0494\x05\xCAf\x02\u0493\u0490\x03\x02" +
        "\x02\x02\u0493\u0491\x03\x02\x02\x02\u0494\u0496\x03\x02\x02\x02\u0495" +
        "\u0480\x03\x02\x02\x02\u0495\u0484\x03\x02\x02\x02\u0495\u0485\x03\x02" +
        "\x02\x02\u0495\u0486\x03\x02\x02\x02\u0495\u0487\x03\x02\x02\x02\u0495" +
        "\u0488\x03\x02\x02\x02\u0495\u048C\x03\x02\x02\x02\u0495\u048F\x03\x02" +
        "\x02\x02\u0496\xB3\x03\x02\x02\x02\u0497\u0498\x05\xC0a\x02\u0498\u0499" +
        "\x05\xB6\\\x02\u0499\u049A\x05\xBC_\x02\u049A\u04A1\x03\x02\x02\x02\u049B" +
        "\u049E\x05\xB6\\\x02\u049C\u049F\x05\xBA^\x02\u049D\u049F\x05\xBC_\x02" +
        "\u049E\u049C\x03\x02\x02\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A1\x03" +
        "\x02\x02\x02\u04A0\u0497\x03\x02\x02\x02\u04A0\u049B\x03\x02\x02\x02\u04A1" +
        "\xB5\x03\x02\x02\x02\u04A2\u04A4\x07f\x02\x02\u04A3\u04A5\x05\xC2b\x02" +
        "\u04A4\u04A3\x03\x02\x02\x02\u04A4\u04A5\x03\x02\x02\x02\u04A5\u04AD\x03" +
        "\x02\x02\x02\u04A6\u04A7\x07C\x02\x02\u04A7\u04A9\x07f\x02\x02\u04A8\u04AA" +
        "\x05\xC2b\x02\u04A9\u04A8\x03\x02\x02\x02\u04A9\u04AA\x03\x02\x02\x02" +
        "\u04AA\u04AC\x03\x02\x02\x02\u04AB\u04A6\x03\x02\x02\x02\u04AC\u04AF\x03" +
        "\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE" +
        "\u04B2\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04B0\u04B2\x05R*\x02" +
        "\u04B1\u04A2\x03\x02\x02\x02\u04B1\u04B0\x03\x02\x02\x02\u04B2\xB7\x03" +
        "\x02\x02\x02\u04B3\u04B5\x07f\x02\x02\u04B4\u04B6\x05\xC4c\x02\u04B5\u04B4" +
        "\x03\x02\x02\x02\u04B5\u04B6\x03\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02" +
        "\u04B7\u04B8\x05\xBC_\x02\u04B8\xB9\x03\x02\x02\x02\u04B9\u04D5\x07?\x02" +
        "\x02\u04BA\u04BF\x07@\x02\x02\u04BB\u04BC\x07?\x02\x02\u04BC\u04BE\x07" +
        "@\x02\x02\u04BD\u04BB\x03\x02\x02\x02\u04BE\u04C1\x03\x02\x02\x02\u04BF" +
        "\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C2\x03\x02" +
        "\x02\x02\u04C1\u04BF\x03\x02\x02\x02\u04C2\u04D6\x05J&\x02\u04C3\u04C4" +
        "\x05\xB0Y\x02\u04C4\u04CB\x07@\x02\x02\u04C5\u04C6\x07?\x02\x02\u04C6" +
        "\u04C7\x05\xB0Y\x02\u04C7\u04C8\x07@\x02\x02\u04C8\u04CA\x03\x02\x02\x02" +
        "\u04C9\u04C5\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02\u04CB\u04C9\x03" +
        "\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04D2\x03\x02\x02\x02\u04CD" +
        "\u04CB\x03\x02\x02\x02\u04CE\u04CF\x07?\x02\x02\u04CF\u04D1\x07@\x02\x02" +
        "\u04D0\u04CE\x03\x02\x02\x02\u04D1\u04D4\x03\x02\x02\x02\u04D2\u04D0\x03" +
        "\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02\u04D4" +
        "\u04D2\x03\x02\x02\x02\u04D5\u04BA\x03\x02\x02\x02\u04D5\u04C3\x03\x02" +
        "\x02\x02\u04D6\xBB\x03\x02\x02\x02\u04D7\u04D9\x05\xCAf\x02\u04D8\u04DA" +
        "\x05$\x13\x02\u04D9\u04D8\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02" +
        "\u04DA\xBD\x03\x02\x02\x02\u04DB\u04DC\x05\xC0a\x02\u04DC\u04DD\x05\xC8" +
        "e\x02\u04DD\xBF\x03\x02\x02\x02\u04DE\u04DF\x07F\x02\x02\u04DF\u04E0\x05" +
        "\"\x12\x02\u04E0\u04E1\x07E\x02\x02\u04E1\xC1\x03\x02\x02\x02\u04E2\u04E3" +
        "\x07F\x02\x02\u04E3\u04E6\x07E\x02\x02\u04E4\u04E6\x05T+\x02\u04E5\u04E2" +
        "\x03\x02\x02\x02\u04E5\u04E4\x03\x02\x02\x02\u04E6\xC3\x03\x02\x02\x02" +
        "\u04E7\u04E8\x07F\x02\x02\u04E8\u04EB\x07E\x02\x02\u04E9\u04EB\x05\xC0" +
        "a\x02\u04EA\u04E7\x03\x02\x02\x02\u04EA\u04E9\x03\x02\x02\x02\u04EB\xC5" +
        "\x03\x02\x02\x02\u04EC\u04F3\x05\xCAf\x02\u04ED\u04EE\x07C\x02\x02\u04EE" +
        "\u04F0\x07f\x02\x02\u04EF\u04F1\x05\xCAf\x02\u04F0\u04EF\x03\x02\x02\x02" +
        "\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F3\x03\x02\x02\x02\u04F2\u04EC\x03" +
        "\x02\x02\x02\u04F2\u04ED\x03\x02\x02\x02\u04F3\xC7\x03\x02\x02\x02\u04F4" +
        "\u04F5\x07*\x02\x02\u04F5\u04F9\x05\xC6d\x02\u04F6\u04F7\x07f\x02\x02" +
        "\u04F7\u04F9\x05\xCAf\x02\u04F8\u04F4\x03\x02\x02\x02\u04F8\u04F6\x03" +
        "\x02\x02\x02\u04F9\xC9\x03\x02\x02\x02\u04FA\u04FC\x07;\x02\x02\u04FB" +
        "\u04FD\x05\xAAV\x02\u04FC\u04FB\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02" +
        "\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u04FF\x07<\x02\x02\u04FF\xCB\x03" +
        "\x02\x02\x02\x97\xCD\xD2\xD8\xE0\xE9\xEE\xF5\xFC\u0103\u010A\u010F\u0113" +
        "\u0117\u011B\u0120\u0124\u0128\u0132\u013A\u0141\u0148\u014C\u014F\u0152" +
        "\u015B\u0161\u0166\u0169\u016F\u0175\u0179\u0182\u0189\u0192\u0199\u019F" +
        "\u01A3\u01AE\u01B2\u01BA\u01BF\u01C3\u01CC\u01DA\u01DF\u01E8\u01F0\u01FA" +
        "\u0202\u020A\u020F\u021B\u0221\u0228\u022D\u0235\u0239\u023B\u0246\u024E" +
        "\u0251\u0255\u025A\u025E\u0269\u0272\u0274\u027B\u0280\u0289\u028E\u0291" +
        "\u0296\u029F\u02AF\u02B9\u02BC\u02C5\u02CF\u02D7\u02DA\u02DD\u02EA\u02F2" +
        "\u02F7\u02FF\u0303\u0307\u030B\u030D\u0311\u0317\u0322\u032A\u0332\u033D" +
        "\u0346\u035D\u0360\u0363\u036B\u036F\u0377\u037D\u0388\u0391\u0396\u03A0" +
        "\u03A7\u03B4\u03BD\u03C6\u03CC\u03D7\u03DC\u03E8\u03EC\u03F0\u03F4\u03F6" +
        "\u03FA\u03FF\u0412\u0426\u0436\u0461\u0473\u047B\u047D\u0493\u0495\u049E" +
        "\u04A0\u04A4\u04A9\u04AD\u04B1\u04B5\u04BF\u04CB\u04D2\u04D5\u04D9\u04E5" +
        "\u04EA\u04F0\u04F2\u04F8\u04FC";
    public static readonly _serializedATN: string = Utils.join(
        [
            JavaParser._serializedATNSegment0,
            JavaParser._serializedATNSegment1,
            JavaParser._serializedATNSegment2,
        ],
        "",
    );
    public static __ATN: ATN;
    public static get _ATN(): ATN {
        if (!JavaParser.__ATN) {
            JavaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavaParser._serializedATN));
        }

        return JavaParser.__ATN;
    }

}
