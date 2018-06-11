// Generated from src/tree/ast/antlr/kotlin/KotlinParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { KotlinFileContext } from './KotlinParser';
import { ScriptContext } from './KotlinParser';
import { FileAnnotationContext } from './KotlinParser';
import { PackageHeaderContext } from './KotlinParser';
import { ImportListContext } from './KotlinParser';
import { ImportHeaderContext } from './KotlinParser';
import { ImportAliasContext } from './KotlinParser';
import { TopLevelObjectContext } from './KotlinParser';
import { ClassDeclarationContext } from './KotlinParser';
import { PrimaryConstructorContext } from './KotlinParser';
import { ClassParametersContext } from './KotlinParser';
import { ClassParameterContext } from './KotlinParser';
import { DelegationSpecifiersContext } from './KotlinParser';
import { DelegationSpecifierContext } from './KotlinParser';
import { ConstructorInvocationContext } from './KotlinParser';
import { ExplicitDelegationContext } from './KotlinParser';
import { ClassBodyContext } from './KotlinParser';
import { ClassMemberDeclarationContext } from './KotlinParser';
import { AnonymousInitializerContext } from './KotlinParser';
import { SecondaryConstructorContext } from './KotlinParser';
import { ConstructorDelegationCallContext } from './KotlinParser';
import { EnumClassBodyContext } from './KotlinParser';
import { EnumEntriesContext } from './KotlinParser';
import { EnumEntryContext } from './KotlinParser';
import { FunctionDeclarationContext } from './KotlinParser';
import { FunctionValueParametersContext } from './KotlinParser';
import { FunctionValueParameterContext } from './KotlinParser';
import { ParameterContext } from './KotlinParser';
import { FunctionBodyContext } from './KotlinParser';
import { ObjectDeclarationContext } from './KotlinParser';
import { CompanionObjectContext } from './KotlinParser';
import { PropertyDeclarationContext } from './KotlinParser';
import { MultiVariableDeclarationContext } from './KotlinParser';
import { VariableDeclarationContext } from './KotlinParser';
import { GetterContext } from './KotlinParser';
import { SetterContext } from './KotlinParser';
import { TypeAliasContext } from './KotlinParser';
import { TypeParametersContext } from './KotlinParser';
import { TypeParameterContext } from './KotlinParser';
import { TypeContext } from './KotlinParser';
import { TypeModifierListContext } from './KotlinParser';
import { ParenthesizedTypeContext } from './KotlinParser';
import { NullableTypeContext } from './KotlinParser';
import { TypeReferenceContext } from './KotlinParser';
import { FunctionTypeContext } from './KotlinParser';
import { FunctionTypeReceiverContext } from './KotlinParser';
import { UserTypeContext } from './KotlinParser';
import { SimpleUserTypeContext } from './KotlinParser';
import { FunctionTypeParametersContext } from './KotlinParser';
import { TypeConstraintsContext } from './KotlinParser';
import { TypeConstraintContext } from './KotlinParser';
import { BlockContext } from './KotlinParser';
import { StatementsContext } from './KotlinParser';
import { StatementContext } from './KotlinParser';
import { DeclarationContext } from './KotlinParser';
import { AssignmentContext } from './KotlinParser';
import { ExpressionContext } from './KotlinParser';
import { DisjunctionContext } from './KotlinParser';
import { ConjunctionContext } from './KotlinParser';
import { EqualityContext } from './KotlinParser';
import { ComparisonContext } from './KotlinParser';
import { InfixOperationContext } from './KotlinParser';
import { ElvisExpressionContext } from './KotlinParser';
import { InfixFunctionCallContext } from './KotlinParser';
import { RangeExpressionContext } from './KotlinParser';
import { AdditiveExpressionContext } from './KotlinParser';
import { MultiplicativeExpressionContext } from './KotlinParser';
import { AsExpressionContext } from './KotlinParser';
import { AsExpressionTailContext } from './KotlinParser';
import { PrefixUnaryExpressionContext } from './KotlinParser';
import { PostfixUnaryExpressionContext } from './KotlinParser';
import { CallExpressionContext } from './KotlinParser';
import { LabeledExpressionContext } from './KotlinParser';
import { DotQualifiedExpressionContext } from './KotlinParser';
import { AssignableExpressionContext } from './KotlinParser';
import { IndexingExpressionContext } from './KotlinParser';
import { CallSuffixContext } from './KotlinParser';
import { AnnotatedLambdaContext } from './KotlinParser';
import { ArrayAccessContext } from './KotlinParser';
import { ValueArgumentsContext } from './KotlinParser';
import { TypeArgumentsContext } from './KotlinParser';
import { TypeProjectionContext } from './KotlinParser';
import { TypeProjectionModifierListContext } from './KotlinParser';
import { ValueArgumentContext } from './KotlinParser';
import { PrimaryExpressionContext } from './KotlinParser';
import { ParenthesizedExpressionContext } from './KotlinParser';
import { LiteralConstantContext } from './KotlinParser';
import { StringLiteralContext } from './KotlinParser';
import { LineStringLiteralContext } from './KotlinParser';
import { MultiLineStringLiteralContext } from './KotlinParser';
import { LineStringContentContext } from './KotlinParser';
import { LineStringExpressionContext } from './KotlinParser';
import { MultiLineStringContentContext } from './KotlinParser';
import { MultiLineStringExpressionContext } from './KotlinParser';
import { FunctionLiteralContext } from './KotlinParser';
import { LambdaParametersContext } from './KotlinParser';
import { LambdaParameterContext } from './KotlinParser';
import { ObjectLiteralContext } from './KotlinParser';
import { CollectionLiteralContext } from './KotlinParser';
import { ThisExpressionContext } from './KotlinParser';
import { SuperExpressionContext } from './KotlinParser';
import { ConditionalExpressionContext } from './KotlinParser';
import { IfExpressionContext } from './KotlinParser';
import { ControlStructureBodyContext } from './KotlinParser';
import { WhenExpressionContext } from './KotlinParser';
import { WhenEntryContext } from './KotlinParser';
import { WhenConditionContext } from './KotlinParser';
import { RangeTestContext } from './KotlinParser';
import { TypeTestContext } from './KotlinParser';
import { TryExpressionContext } from './KotlinParser';
import { CatchBlockContext } from './KotlinParser';
import { FinallyBlockContext } from './KotlinParser';
import { LoopExpressionContext } from './KotlinParser';
import { ForExpressionContext } from './KotlinParser';
import { WhileExpressionContext } from './KotlinParser';
import { DoWhileExpressionContext } from './KotlinParser';
import { JumpExpressionContext } from './KotlinParser';
import { CallableReferenceContext } from './KotlinParser';
import { AssignmentOperatorContext } from './KotlinParser';
import { EqualityOperatorContext } from './KotlinParser';
import { ComparisonOperatorContext } from './KotlinParser';
import { InOperatorContext } from './KotlinParser';
import { IsOperatorContext } from './KotlinParser';
import { AdditiveOperatorContext } from './KotlinParser';
import { MultiplicativeOperatorContext } from './KotlinParser';
import { AsOperatorContext } from './KotlinParser';
import { PrefixUnaryOperatorContext } from './KotlinParser';
import { PostfixUnaryOperatorContext } from './KotlinParser';
import { MemberAccessOperatorContext } from './KotlinParser';
import { ModifierListContext } from './KotlinParser';
import { ModifierContext } from './KotlinParser';
import { ClassModifierContext } from './KotlinParser';
import { MemberModifierContext } from './KotlinParser';
import { VisibilityModifierContext } from './KotlinParser';
import { VarianceAnnotationContext } from './KotlinParser';
import { FunctionModifierContext } from './KotlinParser';
import { PropertyModifierContext } from './KotlinParser';
import { InheritanceModifierContext } from './KotlinParser';
import { ParameterModifierContext } from './KotlinParser';
import { TypeParameterModifierContext } from './KotlinParser';
import { LabelDefinitionContext } from './KotlinParser';
import { AnnotationsContext } from './KotlinParser';
import { AnnotationContext } from './KotlinParser';
import { AnnotationListContext } from './KotlinParser';
import { AnnotationUseSiteTargetContext } from './KotlinParser';
import { UnescapedAnnotationContext } from './KotlinParser';
import { IdentifierContext } from './KotlinParser';
import { SimpleIdentifierContext } from './KotlinParser';
import { SemiContext } from './KotlinParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `KotlinParser`.
 */
export interface KotlinParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `KotlinParser.kotlinFile`.
	 * @param ctx the parse tree
	 */
	enterKotlinFile?: (ctx: KotlinFileContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.kotlinFile`.
	 * @param ctx the parse tree
	 */
	exitKotlinFile?: (ctx: KotlinFileContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.fileAnnotation`.
	 * @param ctx the parse tree
	 */
	enterFileAnnotation?: (ctx: FileAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.fileAnnotation`.
	 * @param ctx the parse tree
	 */
	exitFileAnnotation?: (ctx: FileAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.packageHeader`.
	 * @param ctx the parse tree
	 */
	enterPackageHeader?: (ctx: PackageHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.packageHeader`.
	 * @param ctx the parse tree
	 */
	exitPackageHeader?: (ctx: PackageHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.importList`.
	 * @param ctx the parse tree
	 */
	enterImportList?: (ctx: ImportListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.importList`.
	 * @param ctx the parse tree
	 */
	exitImportList?: (ctx: ImportListContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.importHeader`.
	 * @param ctx the parse tree
	 */
	enterImportHeader?: (ctx: ImportHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.importHeader`.
	 * @param ctx the parse tree
	 */
	exitImportHeader?: (ctx: ImportHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.importAlias`.
	 * @param ctx the parse tree
	 */
	enterImportAlias?: (ctx: ImportAliasContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.importAlias`.
	 * @param ctx the parse tree
	 */
	exitImportAlias?: (ctx: ImportAliasContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.topLevelObject`.
	 * @param ctx the parse tree
	 */
	enterTopLevelObject?: (ctx: TopLevelObjectContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.topLevelObject`.
	 * @param ctx the parse tree
	 */
	exitTopLevelObject?: (ctx: TopLevelObjectContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.primaryConstructor`.
	 * @param ctx the parse tree
	 */
	enterPrimaryConstructor?: (ctx: PrimaryConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.primaryConstructor`.
	 * @param ctx the parse tree
	 */
	exitPrimaryConstructor?: (ctx: PrimaryConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.classParameters`.
	 * @param ctx the parse tree
	 */
	enterClassParameters?: (ctx: ClassParametersContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.classParameters`.
	 * @param ctx the parse tree
	 */
	exitClassParameters?: (ctx: ClassParametersContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.classParameter`.
	 * @param ctx the parse tree
	 */
	enterClassParameter?: (ctx: ClassParameterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.classParameter`.
	 * @param ctx the parse tree
	 */
	exitClassParameter?: (ctx: ClassParameterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.delegationSpecifiers`.
	 * @param ctx the parse tree
	 */
	enterDelegationSpecifiers?: (ctx: DelegationSpecifiersContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.delegationSpecifiers`.
	 * @param ctx the parse tree
	 */
	exitDelegationSpecifiers?: (ctx: DelegationSpecifiersContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.delegationSpecifier`.
	 * @param ctx the parse tree
	 */
	enterDelegationSpecifier?: (ctx: DelegationSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.delegationSpecifier`.
	 * @param ctx the parse tree
	 */
	exitDelegationSpecifier?: (ctx: DelegationSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.constructorInvocation`.
	 * @param ctx the parse tree
	 */
	enterConstructorInvocation?: (ctx: ConstructorInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.constructorInvocation`.
	 * @param ctx the parse tree
	 */
	exitConstructorInvocation?: (ctx: ConstructorInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.explicitDelegation`.
	 * @param ctx the parse tree
	 */
	enterExplicitDelegation?: (ctx: ExplicitDelegationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.explicitDelegation`.
	 * @param ctx the parse tree
	 */
	exitExplicitDelegation?: (ctx: ExplicitDelegationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.anonymousInitializer`.
	 * @param ctx the parse tree
	 */
	enterAnonymousInitializer?: (ctx: AnonymousInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.anonymousInitializer`.
	 * @param ctx the parse tree
	 */
	exitAnonymousInitializer?: (ctx: AnonymousInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.secondaryConstructor`.
	 * @param ctx the parse tree
	 */
	enterSecondaryConstructor?: (ctx: SecondaryConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.secondaryConstructor`.
	 * @param ctx the parse tree
	 */
	exitSecondaryConstructor?: (ctx: SecondaryConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.constructorDelegationCall`.
	 * @param ctx the parse tree
	 */
	enterConstructorDelegationCall?: (ctx: ConstructorDelegationCallContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.constructorDelegationCall`.
	 * @param ctx the parse tree
	 */
	exitConstructorDelegationCall?: (ctx: ConstructorDelegationCallContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.enumClassBody`.
	 * @param ctx the parse tree
	 */
	enterEnumClassBody?: (ctx: EnumClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.enumClassBody`.
	 * @param ctx the parse tree
	 */
	exitEnumClassBody?: (ctx: EnumClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.enumEntries`.
	 * @param ctx the parse tree
	 */
	enterEnumEntries?: (ctx: EnumEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.enumEntries`.
	 * @param ctx the parse tree
	 */
	exitEnumEntries?: (ctx: EnumEntriesContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	enterEnumEntry?: (ctx: EnumEntryContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.enumEntry`.
	 * @param ctx the parse tree
	 */
	exitEnumEntry?: (ctx: EnumEntryContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionValueParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionValueParameters?: (ctx: FunctionValueParametersContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionValueParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionValueParameters?: (ctx: FunctionValueParametersContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionValueParameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionValueParameter?: (ctx: FunctionValueParameterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionValueParameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionValueParameter?: (ctx: FunctionValueParameterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.objectDeclaration`.
	 * @param ctx the parse tree
	 */
	enterObjectDeclaration?: (ctx: ObjectDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.objectDeclaration`.
	 * @param ctx the parse tree
	 */
	exitObjectDeclaration?: (ctx: ObjectDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.companionObject`.
	 * @param ctx the parse tree
	 */
	enterCompanionObject?: (ctx: CompanionObjectContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.companionObject`.
	 * @param ctx the parse tree
	 */
	exitCompanionObject?: (ctx: CompanionObjectContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.multiVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMultiVariableDeclaration?: (ctx: MultiVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.multiVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMultiVariableDeclaration?: (ctx: MultiVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeAlias`.
	 * @param ctx the parse tree
	 */
	enterTypeAlias?: (ctx: TypeAliasContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeAlias`.
	 * @param ctx the parse tree
	 */
	exitTypeAlias?: (ctx: TypeAliasContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeModifierList`.
	 * @param ctx the parse tree
	 */
	enterTypeModifierList?: (ctx: TypeModifierListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeModifierList`.
	 * @param ctx the parse tree
	 */
	exitTypeModifierList?: (ctx: TypeModifierListContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.parenthesizedType`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.parenthesizedType`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.nullableType`.
	 * @param ctx the parse tree
	 */
	enterNullableType?: (ctx: NullableTypeContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.nullableType`.
	 * @param ctx the parse tree
	 */
	exitNullableType?: (ctx: NullableTypeContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionTypeReceiver`.
	 * @param ctx the parse tree
	 */
	enterFunctionTypeReceiver?: (ctx: FunctionTypeReceiverContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionTypeReceiver`.
	 * @param ctx the parse tree
	 */
	exitFunctionTypeReceiver?: (ctx: FunctionTypeReceiverContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.userType`.
	 * @param ctx the parse tree
	 */
	enterUserType?: (ctx: UserTypeContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.userType`.
	 * @param ctx the parse tree
	 */
	exitUserType?: (ctx: UserTypeContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.simpleUserType`.
	 * @param ctx the parse tree
	 */
	enterSimpleUserType?: (ctx: SimpleUserTypeContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.simpleUserType`.
	 * @param ctx the parse tree
	 */
	exitSimpleUserType?: (ctx: SimpleUserTypeContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionTypeParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionTypeParameters?: (ctx: FunctionTypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionTypeParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionTypeParameters?: (ctx: FunctionTypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeConstraints`.
	 * @param ctx the parse tree
	 */
	enterTypeConstraints?: (ctx: TypeConstraintsContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeConstraints`.
	 * @param ctx the parse tree
	 */
	exitTypeConstraints?: (ctx: TypeConstraintsContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeConstraint`.
	 * @param ctx the parse tree
	 */
	enterTypeConstraint?: (ctx: TypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeConstraint`.
	 * @param ctx the parse tree
	 */
	exitTypeConstraint?: (ctx: TypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.disjunction`.
	 * @param ctx the parse tree
	 */
	enterDisjunction?: (ctx: DisjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.disjunction`.
	 * @param ctx the parse tree
	 */
	exitDisjunction?: (ctx: DisjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.conjunction`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.conjunction`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.equality`.
	 * @param ctx the parse tree
	 */
	enterEquality?: (ctx: EqualityContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.equality`.
	 * @param ctx the parse tree
	 */
	exitEquality?: (ctx: EqualityContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.infixOperation`.
	 * @param ctx the parse tree
	 */
	enterInfixOperation?: (ctx: InfixOperationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.infixOperation`.
	 * @param ctx the parse tree
	 */
	exitInfixOperation?: (ctx: InfixOperationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.elvisExpression`.
	 * @param ctx the parse tree
	 */
	enterElvisExpression?: (ctx: ElvisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.elvisExpression`.
	 * @param ctx the parse tree
	 */
	exitElvisExpression?: (ctx: ElvisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.infixFunctionCall`.
	 * @param ctx the parse tree
	 */
	enterInfixFunctionCall?: (ctx: InfixFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.infixFunctionCall`.
	 * @param ctx the parse tree
	 */
	exitInfixFunctionCall?: (ctx: InfixFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.rangeExpression`.
	 * @param ctx the parse tree
	 */
	enterRangeExpression?: (ctx: RangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.rangeExpression`.
	 * @param ctx the parse tree
	 */
	exitRangeExpression?: (ctx: RangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.asExpression`.
	 * @param ctx the parse tree
	 */
	enterAsExpression?: (ctx: AsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.asExpression`.
	 * @param ctx the parse tree
	 */
	exitAsExpression?: (ctx: AsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.asExpressionTail`.
	 * @param ctx the parse tree
	 */
	enterAsExpressionTail?: (ctx: AsExpressionTailContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.asExpressionTail`.
	 * @param ctx the parse tree
	 */
	exitAsExpressionTail?: (ctx: AsExpressionTailContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.prefixUnaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrefixUnaryExpression?: (ctx: PrefixUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.prefixUnaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrefixUnaryExpression?: (ctx: PrefixUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.postfixUnaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixUnaryExpression?: (ctx: PostfixUnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.postfixUnaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixUnaryExpression?: (ctx: PostfixUnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.callExpression`.
	 * @param ctx the parse tree
	 */
	enterCallExpression?: (ctx: CallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.callExpression`.
	 * @param ctx the parse tree
	 */
	exitCallExpression?: (ctx: CallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.labeledExpression`.
	 * @param ctx the parse tree
	 */
	enterLabeledExpression?: (ctx: LabeledExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.labeledExpression`.
	 * @param ctx the parse tree
	 */
	exitLabeledExpression?: (ctx: LabeledExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.dotQualifiedExpression`.
	 * @param ctx the parse tree
	 */
	enterDotQualifiedExpression?: (ctx: DotQualifiedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.dotQualifiedExpression`.
	 * @param ctx the parse tree
	 */
	exitDotQualifiedExpression?: (ctx: DotQualifiedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.assignableExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignableExpression?: (ctx: AssignableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.assignableExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignableExpression?: (ctx: AssignableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.indexingExpression`.
	 * @param ctx the parse tree
	 */
	enterIndexingExpression?: (ctx: IndexingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.indexingExpression`.
	 * @param ctx the parse tree
	 */
	exitIndexingExpression?: (ctx: IndexingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.callSuffix`.
	 * @param ctx the parse tree
	 */
	enterCallSuffix?: (ctx: CallSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.callSuffix`.
	 * @param ctx the parse tree
	 */
	exitCallSuffix?: (ctx: CallSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.annotatedLambda`.
	 * @param ctx the parse tree
	 */
	enterAnnotatedLambda?: (ctx: AnnotatedLambdaContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.annotatedLambda`.
	 * @param ctx the parse tree
	 */
	exitAnnotatedLambda?: (ctx: AnnotatedLambdaContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	enterArrayAccess?: (ctx: ArrayAccessContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.arrayAccess`.
	 * @param ctx the parse tree
	 */
	exitArrayAccess?: (ctx: ArrayAccessContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.valueArguments`.
	 * @param ctx the parse tree
	 */
	enterValueArguments?: (ctx: ValueArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.valueArguments`.
	 * @param ctx the parse tree
	 */
	exitValueArguments?: (ctx: ValueArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeProjection`.
	 * @param ctx the parse tree
	 */
	enterTypeProjection?: (ctx: TypeProjectionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeProjection`.
	 * @param ctx the parse tree
	 */
	exitTypeProjection?: (ctx: TypeProjectionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeProjectionModifierList`.
	 * @param ctx the parse tree
	 */
	enterTypeProjectionModifierList?: (ctx: TypeProjectionModifierListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeProjectionModifierList`.
	 * @param ctx the parse tree
	 */
	exitTypeProjectionModifierList?: (ctx: TypeProjectionModifierListContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.valueArgument`.
	 * @param ctx the parse tree
	 */
	enterValueArgument?: (ctx: ValueArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.valueArgument`.
	 * @param ctx the parse tree
	 */
	exitValueArgument?: (ctx: ValueArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.literalConstant`.
	 * @param ctx the parse tree
	 */
	enterLiteralConstant?: (ctx: LiteralConstantContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.literalConstant`.
	 * @param ctx the parse tree
	 */
	exitLiteralConstant?: (ctx: LiteralConstantContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.lineStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterLineStringLiteral?: (ctx: LineStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.lineStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitLineStringLiteral?: (ctx: LineStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.multiLineStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.multiLineStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.lineStringContent`.
	 * @param ctx the parse tree
	 */
	enterLineStringContent?: (ctx: LineStringContentContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.lineStringContent`.
	 * @param ctx the parse tree
	 */
	exitLineStringContent?: (ctx: LineStringContentContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.lineStringExpression`.
	 * @param ctx the parse tree
	 */
	enterLineStringExpression?: (ctx: LineStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.lineStringExpression`.
	 * @param ctx the parse tree
	 */
	exitLineStringExpression?: (ctx: LineStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.multiLineStringContent`.
	 * @param ctx the parse tree
	 */
	enterMultiLineStringContent?: (ctx: MultiLineStringContentContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.multiLineStringContent`.
	 * @param ctx the parse tree
	 */
	exitMultiLineStringContent?: (ctx: MultiLineStringContentContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.multiLineStringExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiLineStringExpression?: (ctx: MultiLineStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.multiLineStringExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiLineStringExpression?: (ctx: MultiLineStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionLiteral`.
	 * @param ctx the parse tree
	 */
	enterFunctionLiteral?: (ctx: FunctionLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionLiteral`.
	 * @param ctx the parse tree
	 */
	exitFunctionLiteral?: (ctx: FunctionLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameters?: (ctx: LambdaParametersContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.lambdaParameters`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameters?: (ctx: LambdaParametersContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.lambdaParameter`.
	 * @param ctx the parse tree
	 */
	enterLambdaParameter?: (ctx: LambdaParameterContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.lambdaParameter`.
	 * @param ctx the parse tree
	 */
	exitLambdaParameter?: (ctx: LambdaParameterContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteral?: (ctx: ObjectLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.objectLiteral`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteral?: (ctx: ObjectLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.collectionLiteral`.
	 * @param ctx the parse tree
	 */
	enterCollectionLiteral?: (ctx: CollectionLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.collectionLiteral`.
	 * @param ctx the parse tree
	 */
	exitCollectionLiteral?: (ctx: CollectionLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.thisExpression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.thisExpression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.superExpression`.
	 * @param ctx the parse tree
	 */
	enterSuperExpression?: (ctx: SuperExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.superExpression`.
	 * @param ctx the parse tree
	 */
	exitSuperExpression?: (ctx: SuperExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	enterIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	exitIfExpression?: (ctx: IfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.controlStructureBody`.
	 * @param ctx the parse tree
	 */
	enterControlStructureBody?: (ctx: ControlStructureBodyContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.controlStructureBody`.
	 * @param ctx the parse tree
	 */
	exitControlStructureBody?: (ctx: ControlStructureBodyContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.whenExpression`.
	 * @param ctx the parse tree
	 */
	enterWhenExpression?: (ctx: WhenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.whenExpression`.
	 * @param ctx the parse tree
	 */
	exitWhenExpression?: (ctx: WhenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.whenEntry`.
	 * @param ctx the parse tree
	 */
	enterWhenEntry?: (ctx: WhenEntryContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.whenEntry`.
	 * @param ctx the parse tree
	 */
	exitWhenEntry?: (ctx: WhenEntryContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.whenCondition`.
	 * @param ctx the parse tree
	 */
	enterWhenCondition?: (ctx: WhenConditionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.whenCondition`.
	 * @param ctx the parse tree
	 */
	exitWhenCondition?: (ctx: WhenConditionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.rangeTest`.
	 * @param ctx the parse tree
	 */
	enterRangeTest?: (ctx: RangeTestContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.rangeTest`.
	 * @param ctx the parse tree
	 */
	exitRangeTest?: (ctx: RangeTestContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeTest`.
	 * @param ctx the parse tree
	 */
	enterTypeTest?: (ctx: TypeTestContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeTest`.
	 * @param ctx the parse tree
	 */
	exitTypeTest?: (ctx: TypeTestContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.tryExpression`.
	 * @param ctx the parse tree
	 */
	enterTryExpression?: (ctx: TryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.tryExpression`.
	 * @param ctx the parse tree
	 */
	exitTryExpression?: (ctx: TryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.catchBlock`.
	 * @param ctx the parse tree
	 */
	enterCatchBlock?: (ctx: CatchBlockContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.catchBlock`.
	 * @param ctx the parse tree
	 */
	exitCatchBlock?: (ctx: CatchBlockContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.loopExpression`.
	 * @param ctx the parse tree
	 */
	enterLoopExpression?: (ctx: LoopExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.loopExpression`.
	 * @param ctx the parse tree
	 */
	exitLoopExpression?: (ctx: LoopExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.forExpression`.
	 * @param ctx the parse tree
	 */
	enterForExpression?: (ctx: ForExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.forExpression`.
	 * @param ctx the parse tree
	 */
	exitForExpression?: (ctx: ForExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.whileExpression`.
	 * @param ctx the parse tree
	 */
	enterWhileExpression?: (ctx: WhileExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.whileExpression`.
	 * @param ctx the parse tree
	 */
	exitWhileExpression?: (ctx: WhileExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.doWhileExpression`.
	 * @param ctx the parse tree
	 */
	enterDoWhileExpression?: (ctx: DoWhileExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.doWhileExpression`.
	 * @param ctx the parse tree
	 */
	exitDoWhileExpression?: (ctx: DoWhileExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.jumpExpression`.
	 * @param ctx the parse tree
	 */
	enterJumpExpression?: (ctx: JumpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.jumpExpression`.
	 * @param ctx the parse tree
	 */
	exitJumpExpression?: (ctx: JumpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.callableReference`.
	 * @param ctx the parse tree
	 */
	enterCallableReference?: (ctx: CallableReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.callableReference`.
	 * @param ctx the parse tree
	 */
	exitCallableReference?: (ctx: CallableReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	enterEqualityOperator?: (ctx: EqualityOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	exitEqualityOperator?: (ctx: EqualityOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.inOperator`.
	 * @param ctx the parse tree
	 */
	enterInOperator?: (ctx: InOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.inOperator`.
	 * @param ctx the parse tree
	 */
	exitInOperator?: (ctx: InOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.isOperator`.
	 * @param ctx the parse tree
	 */
	enterIsOperator?: (ctx: IsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.isOperator`.
	 * @param ctx the parse tree
	 */
	exitIsOperator?: (ctx: IsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	enterAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	exitAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.asOperator`.
	 * @param ctx the parse tree
	 */
	enterAsOperator?: (ctx: AsOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.asOperator`.
	 * @param ctx the parse tree
	 */
	exitAsOperator?: (ctx: AsOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.prefixUnaryOperator`.
	 * @param ctx the parse tree
	 */
	enterPrefixUnaryOperator?: (ctx: PrefixUnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.prefixUnaryOperator`.
	 * @param ctx the parse tree
	 */
	exitPrefixUnaryOperator?: (ctx: PrefixUnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.postfixUnaryOperator`.
	 * @param ctx the parse tree
	 */
	enterPostfixUnaryOperator?: (ctx: PostfixUnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.postfixUnaryOperator`.
	 * @param ctx the parse tree
	 */
	exitPostfixUnaryOperator?: (ctx: PostfixUnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.memberAccessOperator`.
	 * @param ctx the parse tree
	 */
	enterMemberAccessOperator?: (ctx: MemberAccessOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.memberAccessOperator`.
	 * @param ctx the parse tree
	 */
	exitMemberAccessOperator?: (ctx: MemberAccessOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.modifierList`.
	 * @param ctx the parse tree
	 */
	enterModifierList?: (ctx: ModifierListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.modifierList`.
	 * @param ctx the parse tree
	 */
	exitModifierList?: (ctx: ModifierListContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.classModifier`.
	 * @param ctx the parse tree
	 */
	enterClassModifier?: (ctx: ClassModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.classModifier`.
	 * @param ctx the parse tree
	 */
	exitClassModifier?: (ctx: ClassModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.memberModifier`.
	 * @param ctx the parse tree
	 */
	enterMemberModifier?: (ctx: MemberModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.memberModifier`.
	 * @param ctx the parse tree
	 */
	exitMemberModifier?: (ctx: MemberModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.visibilityModifier`.
	 * @param ctx the parse tree
	 */
	enterVisibilityModifier?: (ctx: VisibilityModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.visibilityModifier`.
	 * @param ctx the parse tree
	 */
	exitVisibilityModifier?: (ctx: VisibilityModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.varianceAnnotation`.
	 * @param ctx the parse tree
	 */
	enterVarianceAnnotation?: (ctx: VarianceAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.varianceAnnotation`.
	 * @param ctx the parse tree
	 */
	exitVarianceAnnotation?: (ctx: VarianceAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionModifier?: (ctx: FunctionModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionModifier?: (ctx: FunctionModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.propertyModifier`.
	 * @param ctx the parse tree
	 */
	enterPropertyModifier?: (ctx: PropertyModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.propertyModifier`.
	 * @param ctx the parse tree
	 */
	exitPropertyModifier?: (ctx: PropertyModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.inheritanceModifier`.
	 * @param ctx the parse tree
	 */
	enterInheritanceModifier?: (ctx: InheritanceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.inheritanceModifier`.
	 * @param ctx the parse tree
	 */
	exitInheritanceModifier?: (ctx: InheritanceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.parameterModifier`.
	 * @param ctx the parse tree
	 */
	enterParameterModifier?: (ctx: ParameterModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.parameterModifier`.
	 * @param ctx the parse tree
	 */
	exitParameterModifier?: (ctx: ParameterModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.typeParameterModifier`.
	 * @param ctx the parse tree
	 */
	enterTypeParameterModifier?: (ctx: TypeParameterModifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.typeParameterModifier`.
	 * @param ctx the parse tree
	 */
	exitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.labelDefinition`.
	 * @param ctx the parse tree
	 */
	enterLabelDefinition?: (ctx: LabelDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.labelDefinition`.
	 * @param ctx the parse tree
	 */
	exitLabelDefinition?: (ctx: LabelDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.annotations`.
	 * @param ctx the parse tree
	 */
	enterAnnotations?: (ctx: AnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.annotations`.
	 * @param ctx the parse tree
	 */
	exitAnnotations?: (ctx: AnnotationsContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.annotationList`.
	 * @param ctx the parse tree
	 */
	enterAnnotationList?: (ctx: AnnotationListContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.annotationList`.
	 * @param ctx the parse tree
	 */
	exitAnnotationList?: (ctx: AnnotationListContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.annotationUseSiteTarget`.
	 * @param ctx the parse tree
	 */
	enterAnnotationUseSiteTarget?: (ctx: AnnotationUseSiteTargetContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.annotationUseSiteTarget`.
	 * @param ctx the parse tree
	 */
	exitAnnotationUseSiteTarget?: (ctx: AnnotationUseSiteTargetContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.unescapedAnnotation`.
	 * @param ctx the parse tree
	 */
	enterUnescapedAnnotation?: (ctx: UnescapedAnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.unescapedAnnotation`.
	 * @param ctx the parse tree
	 */
	exitUnescapedAnnotation?: (ctx: UnescapedAnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 */
	enterSimpleIdentifier?: (ctx: SimpleIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 */
	exitSimpleIdentifier?: (ctx: SimpleIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `KotlinParser.semi`.
	 * @param ctx the parse tree
	 */
	enterSemi?: (ctx: SemiContext) => void;
	/**
	 * Exit a parse tree produced by `KotlinParser.semi`.
	 * @param ctx the parse tree
	 */
	exitSemi?: (ctx: SemiContext) => void;
}

