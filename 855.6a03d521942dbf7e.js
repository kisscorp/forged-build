(self.webpackChunkspear=self.webpackChunkspear||[]).push([[855],{546:(j,h,s)=>{s.r(h),s.d(h,{takeUntilDestroyed:()=>p,toObservable:()=>g,toSignal:()=>P});var f=s(3144),_=s(5671),k=s(136),D=s(8486),M=s(5724),i=s(6718),I=s(9751),N=s(4707),b=s(2722);function p(n){n||((0,i.assertInInjectionContext)(p),n=(0,i.inject)(i.DestroyRef));var e=new I.y(function(t){return n.onDestroy(t.next.bind(t))});return function(t){return t.pipe((0,b.R)(e))}}function g(n,e){var t;(null==e||!e.injector)&&(0,i.assertInInjectionContext)(g);var r=null!==(t=e?.injector)&&void 0!==t?t:(0,i.inject)(i.Injector),a=new N.t(1),o=(0,i.effect)(function(){var u;try{u=n()}catch(l){return void(0,i.untracked)(function(){return a.error(l)})}(0,i.untracked)(function(){return a.next(u)})},{injector:r,manualCleanup:!0});return r.get(i.DestroyRef).onDestroy(function(){o.destroy(),a.complete()}),a.asObservable()}var O=function(n){(0,k.Z)(t,n);var e=(0,D.Z)(t);function t(r,a){var o;return(0,_.Z)(this,t),o=e.call(this,function A(n,e){var t="NG0".concat(Math.abs(n));return"".concat(t).concat(e?": "+e:"")}(r,a)),o.code=r,o}return(0,f.Z)(t)}((0,M.Z)(Error));function P(n,e){var t,r,a=!(null!=e&&e.manualCleanup);a&&(null==e||!e.injector)&&(0,i.assertInInjectionContext)(P);var u,o=a?null!==(t=null==e||null===(r=e.injector)||void 0===r?void 0:r.get(i.DestroyRef))&&void 0!==t?t:(0,i.inject)(i.DestroyRef):null;u=(0,i.signal)(null!=e&&e.requireSync?{kind:0}:{kind:1,value:e?.initialValue});var l=n.subscribe({next:function(c){return u.set({kind:1,value:c})},error:function(c){return u.set({kind:2,error:c})}});return o?.onDestroy(l.unsubscribe.bind(l)),(0,i.computed)(function(){var d=u();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new O(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}}}]);