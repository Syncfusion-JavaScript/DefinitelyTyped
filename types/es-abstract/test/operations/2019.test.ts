import ES2018Operations = require('es-abstract/operations/2018');
import ES2019 = require('es-abstract/es2019');
import ES2019Operations = require('es-abstract/operations/2019');

// Attempting to use `$ExpectType` in this file leads to intermittent dtslint failures
import { expectType } from '../index.test';

declare function keyof<T>(target: T): keyof T;

expectType<ExpectedKeys>(keyof(ES2019Operations));
expectType<keyof ES2019Operations>(ExpectedKeys);

expectType<AddedKeys>(AddedKeysActual);
expectType<typeof AddedKeysActual>(AddedKeys);

expectType<AllAddedKeys>(AllAddedKeysActual);
expectType<typeof AllAddedKeysActual>(AllAddedKeys);

expectType<RemovedKeys>(RemovedKeysActual);
expectType<typeof RemovedKeysActual>(RemovedKeys);

declare const ExpectedKeys: ExpectedKeys;

declare const AddedKeysActual: Exclude<keyof ES2019Operations, keyof ES2018Operations | keyof ES2019>;
export declare const AddedKeys: AddedKeys;

declare const AllAddedKeysActual: Exclude<keyof ES2019Operations, keyof ES2018Operations>;
export declare const AllAddedKeys: AllAddedKeys;

declare const RemovedKeysActual: Exclude<keyof ES2018Operations, keyof ES2019Operations>;
export declare const RemovedKeys: RemovedKeys;

// ## Long types:
//#region RemovedKeys
export type RemovedKeys = 'ModuleDeclarationEnvironmentSetup' | 'ModuleExecution' | 'WakeWaiter';
//#endregion

//#region AddedKeys
export type AllAddedKeys = AddedKeys | 'AddEntriesFromIterable' | 'FlattenIntoArray' | 'TrimString';

export type AddedKeys =
	| 'AsyncFromSyncIteratorContinuation'
	| 'ExecuteModule'
	| 'InitializeEnvironment'
	| 'NotifyWaiter'
	| 'SynchronizeEventSet';
//#endregion

//#region ExpectedKeys
type ExpectedKeys =
	| 'abs'
	| 'Abstract Equality Comparison'
	| 'Abstract Relational Comparison'
	| 'AddEntriesFromIterable'
	| 'AddRestrictedFunctionProperties'
	| 'AddWaiter'
	| 'AdvanceStringIndex'
	| 'agent-order'
	| 'AgentCanSuspend'
	| 'AgentSignifier'
	| 'AllocateArrayBuffer'
	| 'AllocateSharedArrayBuffer'
	| 'AllocateTypedArray'
	| 'AllocateTypedArrayBuffer'
	| 'ArrayCreate'
	| 'ArraySetLength'
	| 'ArraySpeciesCreate'
	| 'AsyncFromSyncIteratorContinuation'
	| 'AsyncFunctionCreate'
	| 'AsyncFunctionStart'
	| 'AsyncGeneratorEnqueue'
	| 'AsyncGeneratorFunctionCreate'
	| 'AsyncGeneratorReject'
	| 'AsyncGeneratorResolve'
	| 'AsyncGeneratorResumeNext'
	| 'AsyncGeneratorStart'
	| 'AsyncGeneratorYield'
	| 'AsyncIteratorClose'
	| 'AtomicLoad'
	| 'AtomicReadModifyWrite'
	| 'Await'
	| 'BackreferenceMatcher'
	| 'BlockDeclarationInstantiation'
	| 'BoundFunctionCreate'
	| 'Call'
	| 'Canonicalize'
	| 'CanonicalNumericIndexString'
	| 'CaseClauseIsSelected'
	| 'CharacterRange'
	| 'CharacterRangeOrUnion'
	| 'CharacterSetMatcher'
	| 'CloneArrayBuffer'
	| 'CompletePropertyDescriptor'
	| 'Completion'
	| 'ComposeWriteEventBytes'
	| 'Construct'
	| 'CopyDataBlockBytes'
	| 'CopyDataProperties'
	| 'CreateArrayFromList'
	| 'CreateArrayIterator'
	| 'CreateAsyncFromSyncIterator'
	| 'CreateBuiltinFunction'
	| 'CreateByteDataBlock'
	| 'CreateDataProperty'
	| 'CreateDataPropertyOrThrow'
	| 'CreateDynamicFunction'
	| 'CreateHTML'
	| 'CreateIntrinsics'
	| 'CreateIterResultObject'
	| 'CreateListFromArrayLike'
	| 'CreateListIteratorRecord'
	| 'CreateMapIterator'
	| 'CreateMappedArgumentsObject'
	| 'CreateMethodProperty'
	| 'CreatePerIterationEnvironment'
	| 'CreateRealm'
	| 'CreateResolvingFunctions'
	| 'CreateSetIterator'
	| 'CreateSharedByteDataBlock'
	| 'CreateStringIterator'
	| 'CreateUnmappedArgumentsObject'
	| 'DateFromTime'
	| 'DateString'
	| 'Day'
	| 'DayFromYear'
	| 'DaysInYear'
	| 'DayWithinYear'
	| 'Decode'
	| 'DefinePropertyOrThrow'
	| 'DeletePropertyOrThrow'
	| 'DetachArrayBuffer'
	| 'Encode'
	| 'EnqueueJob'
	| 'EnterCriticalSection'
	| 'EnumerableOwnPropertyNames'
	| 'EnumerateObjectProperties'
	| 'EscapeRegExpPattern'
	| 'EvalDeclarationInstantiation'
	| 'EvaluateCall'
	| 'EvaluateNew'
	| 'EventSet'
	| 'ExecuteModule'
	| 'FlattenIntoArray'
	| 'floor'
	| 'ForBodyEvaluation'
	| 'ForIn/OfBodyEvaluation'
	| 'ForIn/OfHeadEvaluation'
	| 'FromPropertyDescriptor'
	| 'FulfillPromise'
	| 'FunctionAllocate'
	| 'FunctionCreate'
	| 'FunctionDeclarationInstantiation'
	| 'FunctionInitialize'
	| 'GeneratorFunctionCreate'
	| 'GeneratorResume'
	| 'GeneratorResumeAbrupt'
	| 'GeneratorStart'
	| 'GeneratorValidate'
	| 'GeneratorYield'
	| 'Get'
	| 'GetActiveScriptOrModule'
	| 'GetBase'
	| 'GetFunctionRealm'
	| 'GetGeneratorKind'
	| 'GetGlobalObject'
	| 'GetIdentifierReference'
	| 'GetIterator'
	| 'GetMethod'
	| 'GetModifySetValueInBuffer'
	| 'GetModuleNamespace'
	| 'GetNewTarget'
	| 'GetOwnPropertyKeys'
	| 'GetPrototypeFromConstructor'
	| 'GetReferencedName'
	| 'GetSubstitution'
	| 'GetSuperConstructor'
	| 'GetTemplateObject'
	| 'GetThisEnvironment'
	| 'GetThisValue'
	| 'GetV'
	| 'GetValue'
	| 'GetValueFromBuffer'
	| 'GetViewValue'
	| 'GetWaiterList'
	| 'GlobalDeclarationInstantiation'
	| 'happens-before'
	| 'HasOwnProperty'
	| 'HasPrimitiveBase'
	| 'HasProperty'
	| 'host-synchronizes-with'
	| 'HostEnsureCanCompileStrings'
	| 'HostEventSet'
	| 'HostPromiseRejectionTracker'
	| 'HostReportErrors'
	| 'HostResolveImportedModule'
	| 'HourFromTime'
	| 'IfAbruptRejectPromise'
	| 'ImportedLocalNames'
	| 'InitializeBoundName'
	| 'InitializeEnvironment'
	| 'InitializeHostDefinedRealm'
	| 'InitializeReferencedBinding'
	| 'InLeapYear'
	| 'InnerModuleEvaluation'
	| 'InnerModuleInstantiation'
	| 'InstanceofOperator'
	| 'IntegerIndexedElementGet'
	| 'IntegerIndexedElementSet'
	| 'IntegerIndexedObjectCreate'
	| 'InternalizeJSONProperty'
	| 'Invoke'
	| 'IsAccessorDescriptor'
	| 'IsAnonymousFunctionDefinition'
	| 'IsArray'
	| 'IsCallable'
	| 'IsCompatiblePropertyDescriptor'
	| 'IsConcatSpreadable'
	| 'IsConstructor'
	| 'IsDataDescriptor'
	| 'IsDetachedBuffer'
	| 'IsExtensible'
	| 'IsGenericDescriptor'
	| 'IsInTailPosition'
	| 'IsInteger'
	| 'IsLabelledFunction'
	| 'IsPromise'
	| 'IsPropertyKey'
	| 'IsPropertyReference'
	| 'IsRegExp'
	| 'IsSharedArrayBuffer'
	| 'IsStrictReference'
	| 'IsStringPrefix'
	| 'IsSuperReference'
	| 'IsUnresolvableReference'
	| 'IsWordChar'
	| 'IterableToList'
	| 'IteratorClose'
	| 'IteratorComplete'
	| 'IteratorNext'
	| 'IteratorStep'
	| 'IteratorValue'
	| 'LeaveCriticalSection'
	| 'LocalTime'
	| 'LoopContinues'
	| 'MakeArgGetter'
	| 'MakeArgSetter'
	| 'MakeClassConstructor'
	| 'MakeConstructor'
	| 'MakeDate'
	| 'MakeDay'
	| 'MakeMethod'
	| 'MakeSuperPropertyReference'
	| 'MakeTime'
	| 'max'
	| 'memory-order'
	| 'min'
	| 'MinFromTime'
	| 'ModuleNamespaceCreate'
	| 'modulo'
	| 'MonthFromTime'
	| 'msFromTime'
	| 'NewDeclarativeEnvironment'
	| 'NewFunctionEnvironment'
	| 'NewGlobalEnvironment'
	| 'NewModuleEnvironment'
	| 'NewObjectEnvironment'
	| 'NewPromiseCapability'
	| 'NormalCompletion'
	| 'NotifyWaiter'
	| 'NumberToRawBytes'
	| 'NumberToString'
	| 'ObjectCreate'
	| 'ObjectDefineProperties'
	| 'OrdinaryCallBindThis'
	| 'OrdinaryCallEvaluateBody'
	| 'OrdinaryCreateFromConstructor'
	| 'OrdinaryDefineOwnProperty'
	| 'OrdinaryDelete'
	| 'OrdinaryGet'
	| 'OrdinaryGetOwnProperty'
	| 'OrdinaryGetPrototypeOf'
	| 'OrdinaryHasInstance'
	| 'OrdinaryHasProperty'
	| 'OrdinaryIsExtensible'
	| 'OrdinaryOwnPropertyKeys'
	| 'OrdinaryPreventExtensions'
	| 'OrdinarySet'
	| 'OrdinarySetPrototypeOf'
	| 'OrdinarySetWithOwnDescriptor'
	| 'OrdinaryToPrimitive'
	| 'ParseModule'
	| 'ParseScript'
	| 'PerformEval'
	| 'PerformPromiseAll'
	| 'PerformPromiseRace'
	| 'PerformPromiseThen'
	| 'PrepareForOrdinaryCall'
	| 'PrepareForTailCall'
	| 'PromiseReactionJob'
	| 'PromiseResolve'
	| 'PromiseResolveThenableJob'
	| 'ProxyCreate'
	| 'PutValue'
	| 'QuoteJSONString'
	| 'RawBytesToNumber'
	| 'reads-bytes-from'
	| 'reads-from'
	| 'RegExpAlloc'
	| 'RegExpBuiltinExec'
	| 'RegExpCreate'
	| 'RegExpExec'
	| 'RegExpInitialize'
	| 'RejectPromise'
	| 'RemoveWaiter'
	| 'RemoveWaiters'
	| 'RepeatMatcher'
	| 'RequireObjectCoercible'
	| 'ResolveBinding'
	| 'ResolveThisBinding'
	| 'ReturnIfAbrupt'
	| 'RunJobs'
	| 'SameValue'
	| 'SameValueNonNumber'
	| 'SameValueZero'
	| 'ScriptEvaluation'
	| 'ScriptEvaluationJob'
	| 'SecFromTime'
	| 'SerializeJSONArray'
	| 'SerializeJSONObject'
	| 'SerializeJSONProperty'
	| 'Set'
	| 'SetDefaultGlobalBindings'
	| 'SetFunctionLength'
	| 'SetFunctionName'
	| 'SetImmutablePrototype'
	| 'SetIntegrityLevel'
	| 'SetRealmGlobalObject'
	| 'SetValueInBuffer'
	| 'SetViewValue'
	| 'SharedDataBlockEventSet'
	| 'SortCompare'
	| 'SpeciesConstructor'
	| 'SplitMatch'
	| 'Strict Equality Comparison'
	| 'StringCreate'
	| 'StringGetOwnProperty'
	| 'Suspend'
	| 'SymbolDescriptiveString'
	| 'SynchronizeEventSet'
	| 'synchronizes-with'
	| 'TestIntegrityLevel'
	| 'thisBooleanValue'
	| 'thisNumberValue'
	| 'thisStringValue'
	| 'thisSymbolValue'
	| 'thisTimeValue'
	| 'ThrowCompletion'
	| 'TimeClip'
	| 'TimeFromYear'
	| 'TimeString'
	| 'TimeWithinDay'
	| 'TimeZoneString'
	| 'ToBoolean'
	| 'ToDateString'
	| 'ToIndex'
	| 'ToInt16'
	| 'ToInt32'
	| 'ToInt8'
	| 'ToInteger'
	| 'ToLength'
	| 'ToNumber'
	| 'ToObject'
	| 'TopLevelModuleEvaluationJob'
	| 'ToPrimitive'
	| 'ToPropertyDescriptor'
	| 'ToPropertyKey'
	| 'ToString'
	| 'ToUint16'
	| 'ToUint32'
	| 'ToUint8'
	| 'ToUint8Clamp'
	| 'TriggerPromiseReactions'
	| 'TrimString'
	| 'Type'
	| 'TypedArrayCreate'
	| 'TypedArraySpeciesCreate'
	| 'UnicodeEscape'
	| 'UnicodeMatchProperty'
	| 'UnicodeMatchPropertyValue'
	| 'UpdateEmpty'
	| 'UTC'
	| 'UTF16Decode'
	| 'UTF16Encoding'
	| 'ValidateAndApplyPropertyDescriptor'
	| 'ValidateAtomicAccess'
	| 'ValidateSharedIntegerTypedArray'
	| 'ValidateTypedArray'
	| 'ValueOfReadEvent'
	| 'WeekDay'
	| 'WordCharacters'
	| 'YearFromTime';
//#endregion
