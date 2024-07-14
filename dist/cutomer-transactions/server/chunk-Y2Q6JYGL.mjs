import './polyfills.server.mjs';
import{A as D,a as x}from"./chunk-6X6YPKMM.mjs";import{$ as d,Cb as N,Ea as o,Ja as O,O as F,Oa as g,P as p,Q as w,S as u,U as _,Ub as q,Xa as $,Y as C,_ as I,bc as z,fa as R,ic as Z,j as B,ja as L,mb as W,na as S,o as U,oa as V,u as H}from"./chunk-DVOI4AZC.mjs";import{a,b as l}from"./chunk-VVCT4QZE.mjs";var ne=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(o(O),o(S))},e.\u0275dir=d({type:e});let t=e;return t})(),me=(()=>{let e=class e extends ne{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=L(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[g]});let t=e;return t})(),re=new u("");var ye={provide:re,useExisting:F(()=>se),multi:!0};function ve(){let t=x()?x().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var _e=new u(""),se=(()=>{let e=class e extends ne{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ve())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(o(O),o(S),o(_e,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&W("input",function(f){return s._handleInput(f.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(f){return s._compositionEnd(f.target.value)})},features:[N([ye]),g]});let t=e;return t})();var Ce=new u(""),Ve=new u("");function oe(t){return t!=null}function ae(t){return q(t)?B(t):t}function le(t){let e={};return t.forEach(i=>{e=i!=null?a(a({},e),i):e}),Object.keys(e).length===0?null:e}function ue(t,e){return e.map(i=>i(t))}function De(t){return!t.validate}function de(t){return t.map(e=>De(e)?e:i=>e.validate(i))}function be(t){if(!t)return null;let e=t.filter(oe);return e.length==0?null:function(i){return le(ue(i,e))}}function ce(t){return t!=null?be(de(t)):null}function Ae(t){if(!t)return null;let e=t.filter(oe);return e.length==0?null:function(i){let n=ue(i,e).map(ae);return H(n).pipe(U(le))}}function he(t){return t!=null?Ae(de(t)):null}function X(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Me(t){return t._rawValidators}function Ee(t){return t._rawAsyncValidators}function P(t){return t?Array.isArray(t)?t:[t]:[]}function A(t,e){return Array.isArray(t)?t.includes(e):t===e}function Y(t,e){let i=P(e);return P(t).forEach(r=>{A(i,r)||i.push(r)}),i}function K(t,e){return P(e).filter(i=>!A(t,i))}var M=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ce(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=he(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},k=class extends M{get formDirective(){return null}get path(){return null}},v=class extends M{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},j=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Fe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ft=l(a({},Fe),{"[class.ng-submitted]":"isSubmitted"}),pt=(()=>{let e=class e extends j{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(o(v,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&$("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let t=e;return t})();var m="VALID",b="INVALID",c="PENDING",y="DISABLED";function we(t){return(E(t)?t.validators:t)||null}function Ie(t){return Array.isArray(t)?ce(t):t||null}function Se(t,e){return(E(e)?e.asyncValidators:t)||null}function Oe(t){return Array.isArray(t)?he(t):t||null}function E(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var G=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===m}get invalid(){return this.status===b}get pending(){return this.status==c}get disabled(){return this.status===y}get enabled(){return this.status!==y}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Y(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Y(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(K(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(K(e,this._rawAsyncValidators))}hasValidator(e){return A(this._rawValidators,e)}hasAsyncValidator(e){return A(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=c,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=y,this.errors=null,this._forEachChild(n=>{n.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=m,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===m||this.status===c)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?y:m}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=c,this._hasOwnPendingAsyncValidator=!0;let i=ae(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?y:this.errors?b:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(c)?c:this._anyControlsHaveStatus(b)?b:m}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){E(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ie(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}};var fe=new u("CallSetDisabledState",{providedIn:"root",factory:()=>T}),T="always";function Ne(t,e){return[...e.path,t]}function xe(t,e,i=T){ke(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),je(t,e),Te(t,e),Ge(t,e),Pe(t,e)}function J(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function Pe(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ke(t,e){let i=Me(t);e.validator!==null?t.setValidators(X(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Ee(t);e.asyncValidator!==null?t.setAsyncValidators(X(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();J(e._rawValidators,r),J(e._rawAsyncValidators,r)}function je(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&pe(t,e)})}function Ge(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&pe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function pe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Te(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function Be(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function Ue(t){return Object.getPrototypeOf(t.constructor)===me}function He(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===se?i=s:Ue(s)?n=s:r=s}),r||n||i||null}function Q(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ee(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Re=class extends G{constructor(e=null,i,n){super(we(i),Se(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),E(i)&&(i.nonNullable||i.initialValueIsDefault)&&(ee(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Q(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Q(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ee(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Le={provide:v,useExisting:F(()=>$e)},te=Promise.resolve(),$e=(()=>{let e=class e extends v{constructor(n,r,s,h,f,ge){super(),this._changeDetectorRef=f,this.callSetDisabledState=ge,this.control=new Re,this._registered=!1,this.name="",this.update=new V,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=He(this,h)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Be(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){te.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&Z(r);te.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?Ne(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(o(k,9),o(Ce,10),o(Ve,10),o(re,10),o(z,8),o(fe,8))},e.\u0275dir=d({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[C.None,"disabled","isDisabled"],model:[C.None,"ngModel","model"],options:[C.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[N([Le]),g,R]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=I({type:e}),e.\u0275inj=w({});let t=e;return t})();var mt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:fe,useValue:n.callSetDisabledState??T}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=I({type:e}),e.\u0275inj=w({imports:[We]});let t=e;return t})();var _t=(()=>{let e=class e{constructor(n){this._HttpClient=n}getAllCustromersData(){return this._HttpClient.get("http://localhost:3000/customers")}};e.\u0275fac=function(r){return new(r||e)(_(D))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Vt=(()=>{let e=class e{constructor(n){this._HttpClient=n}getAllTransactionsData(){return this._HttpClient.get("http://localhost:3000/transactions")}};e.\u0275fac=function(r){return new(r||e)(_(D))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{re as a,se as b,v as c,pt as d,$e as e,mt as f,_t as g,Vt as h};
