// Generated from src/tree/ast/antlr/kotlin/KotlinParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `KotlinParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface KotlinParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `KotlinParser.kotlinFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKotlinFile?: (ctx: KotlinFileContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.fileAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileAnnotation?: (ctx: FileAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.packageHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageHeader?: (ctx: PackageHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.importList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportList?: (ctx: ImportListContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.importHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportHeader?: (ctx: ImportHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.importAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAlias?: (ctx: ImportAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.topLevelObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelObject?: (ctx: TopLevelObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.primaryConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryConstructor?: (ctx: PrimaryConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.classParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParameters?: (ctx: ClassParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.classParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassParameter?: (ctx: ClassParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.delegationSpecifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelegationSpecifiers?: (ctx: DelegationSpecifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.delegationSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelegationSpecifier?: (ctx: DelegationSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.constructorInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorInvocation?: (ctx: ConstructorInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.explicitDelegation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitDelegation?: (ctx: ExplicitDelegationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.anonymousInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnonymousInitializer?: (ctx: AnonymousInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.secondaryConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondaryConstructor?: (ctx: SecondaryConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.constructorDelegationCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDelegationCall?: (ctx: ConstructorDelegationCallContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.enumClassBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumClassBody?: (ctx: EnumClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.enumEntries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntries?: (ctx: EnumEntriesContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.enumEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumEntry?: (ctx: EnumEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionValueParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionValueParameters?: (ctx: FunctionValueParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionValueParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionValueParameter?: (ctx: FunctionValueParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.objectDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectDeclaration?: (ctx: ObjectDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.companionObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompanionObject?: (ctx: CompanionObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.multiVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiVariableDeclaration?: (ctx: MultiVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAlias?: (ctx: TypeAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeModifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeModifierList?: (ctx: TypeModifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.parenthesizedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.nullableType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullableType?: (ctx: NullableTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeReference?: (ctx: TypeReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionTypeReceiver`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeReceiver?: (ctx: FunctionTypeReceiverContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.userType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserType?: (ctx: UserTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.simpleUserType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleUserType?: (ctx: SimpleUserTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionTypeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeParameters?: (ctx: FunctionTypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeConstraints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstraints?: (ctx: TypeConstraintsContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeConstraint?: (ctx: TypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.disjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction?: (ctx: DisjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.conjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.equality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality?: (ctx: EqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.infixOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixOperation?: (ctx: InfixOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.elvisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElvisExpression?: (ctx: ElvisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.infixFunctionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixFunctionCall?: (ctx: InfixFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.rangeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeExpression?: (ctx: RangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.asExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsExpression?: (ctx: AsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.asExpressionTail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsExpressionTail?: (ctx: AsExpressionTailContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.prefixUnaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixUnaryExpression?: (ctx: PrefixUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.postfixUnaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixUnaryExpression?: (ctx: PostfixUnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.callExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpression?: (ctx: CallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.labeledExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledExpression?: (ctx: LabeledExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.dotQualifiedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotQualifiedExpression?: (ctx: DotQualifiedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.assignableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableExpression?: (ctx: AssignableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.indexingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexingExpression?: (ctx: IndexingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.callSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallSuffix?: (ctx: CallSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.annotatedLambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedLambda?: (ctx: AnnotatedLambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess?: (ctx: ArrayAccessContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.valueArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueArguments?: (ctx: ValueArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeProjection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeProjection?: (ctx: TypeProjectionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeProjectionModifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeProjectionModifierList?: (ctx: TypeProjectionModifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.valueArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueArgument?: (ctx: ValueArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.literalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralConstant?: (ctx: LiteralConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.lineStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineStringLiteral?: (ctx: LineStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.multiLineStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.lineStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineStringContent?: (ctx: LineStringContentContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.lineStringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineStringExpression?: (ctx: LineStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.multiLineStringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiLineStringContent?: (ctx: MultiLineStringContentContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.multiLineStringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiLineStringExpression?: (ctx: MultiLineStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionLiteral?: (ctx: FunctionLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.lambdaParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameter?: (ctx: LambdaParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.objectLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteral?: (ctx: ObjectLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.collectionLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionLiteral?: (ctx: CollectionLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.thisExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisExpression?: (ctx: ThisExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.superExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperExpression?: (ctx: SuperExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.ifExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpression?: (ctx: IfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.controlStructureBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlStructureBody?: (ctx: ControlStructureBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.whenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenExpression?: (ctx: WhenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.whenEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenEntry?: (ctx: WhenEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.whenCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenCondition?: (ctx: WhenConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.rangeTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeTest?: (ctx: RangeTestContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeTest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeTest?: (ctx: TypeTestContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.tryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryExpression?: (ctx: TryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.catchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchBlock?: (ctx: CatchBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.loopExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopExpression?: (ctx: LoopExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.forExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForExpression?: (ctx: ForExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.whileExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileExpression?: (ctx: WhileExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.doWhileExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileExpression?: (ctx: DoWhileExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.jumpExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpExpression?: (ctx: JumpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.callableReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallableReference?: (ctx: CallableReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.equalityOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityOperator?: (ctx: EqualityOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.inOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInOperator?: (ctx: InOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.isOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsOperator?: (ctx: IsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.additiveOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveOperator?: (ctx: AdditiveOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.asOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsOperator?: (ctx: AsOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.prefixUnaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixUnaryOperator?: (ctx: PrefixUnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.postfixUnaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixUnaryOperator?: (ctx: PostfixUnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.memberAccessOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccessOperator?: (ctx: MemberAccessOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.modifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifierList?: (ctx: ModifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.classModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassModifier?: (ctx: ClassModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.memberModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberModifier?: (ctx: MemberModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.visibilityModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibilityModifier?: (ctx: VisibilityModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.varianceAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarianceAnnotation?: (ctx: VarianceAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.functionModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionModifier?: (ctx: FunctionModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.propertyModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyModifier?: (ctx: PropertyModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.inheritanceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritanceModifier?: (ctx: InheritanceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.parameterModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterModifier?: (ctx: ParameterModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.typeParameterModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.labelDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelDefinition?: (ctx: LabelDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations?: (ctx: AnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.annotationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationList?: (ctx: AnnotationListContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.annotationUseSiteTarget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationUseSiteTarget?: (ctx: AnnotationUseSiteTargetContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.unescapedAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnescapedAnnotation?: (ctx: UnescapedAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.simpleIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleIdentifier?: (ctx: SimpleIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `KotlinParser.semi`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSemi?: (ctx: SemiContext) => Result;
}

