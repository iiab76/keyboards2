if(typeof keyman === 'undefined') {console.log('Keyboard requires KeymanWeb 10.0 or later');if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");} else {KeymanWeb.KR(new Keyboard_ninjoan_keyboard());}function Keyboard_ninjoan_keyboard(){this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;this.KI="Keyboard_ninjoan_keyboard";this.KN="Ninjoan Keyboard";this.KMINVER="10.0";this.KV={F:' 1em "Arial"',K102:0};this.KV.KLS={"shift": ["","","","","","","","","","","","","","","","","X","Ψ","Ε","Ρ","Φ","Y","☧","Ï","Ω","Π","","","","","","","Α","ʃ","Δ","Φ","Γ","Η","Σ","Κ","Λ","","","","","","","","","Ž","Ζ","Ξ","Υ","Β","Ν","Μ","","","","","","","","",""],"default": ["","","","","","","","","","","","","","","","","χ","ψ","ε","ρ","θ","ͻ","þ","ι","ω","π","","","","","","","α","ʄ","δ","φ","γ","η","σ","κ","λ","","","","","","","","","ž","ζ","ξ","υ","β","ν","μ","","","","","","","","",""]};this.KV.BK=(function(x){var e=Array.apply(null,Array(65)).map(String.prototype.valueOf,""),r=[],v,i,m=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];for(i=m.length-1;i>=0;i--)if((v=x[m[i]])||r.length)r=(v?v:e).slice().concat(r);return r})(this.KV.KLS);this.KDU=0;this.KH='';this.KM=0;this.KBVER="1.0";this.KMBM=0x0010;this.KVKL={"tablet":{"displayUnderlying":false,"layer":[{"id":"default","row":[{"id":"1","key":[{"id":"K_1"},{"id":"K_2"},{"id":"K_3"},{"id":"K_4"},{"id":"K_5"},{"id":"K_6"},{"id":"K_7"},{"id":"K_8"},{"id":"K_9"},{"id":"K_0"},{"id":"K_HYPHEN"},{"id":"K_EQUAL"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"\u03C7"},{"id":"K_W","text":"\u03C8"},{"id":"K_E","text":"\u03B5"},{"id":"K_R","text":"\u03C1"},{"id":"K_T","text":"\u03B8"},{"id":"K_Y","text":"\u037B"},{"id":"K_U","text":"\u00FE"},{"id":"K_I","text":"\u03B9"},{"id":"K_O","text":"\u03C9"},{"id":"K_P","text":"\u03C0"},{"id":"K_LBRKT"},{"id":"K_RBRKT"},{"width":"10","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE"},{"id":"K_A","text":"\u03B1"},{"id":"K_S","text":"\u0284"},{"id":"K_D","text":"\u03B4"},{"id":"K_F","text":"\u03C6"},{"id":"K_G","text":"\u03B3"},{"id":"K_H","text":"\u03B7"},{"id":"K_J","text":"\u03C3"},{"id":"K_K","text":"\u03BA"},{"id":"K_L","text":"\u03BB"},{"id":"K_COLON"},{"id":"K_QUOTE"},{"id":"K_BKSLASH"}]},{"id":"4","key":[{"width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z","text":"\u017E"},{"id":"K_X","text":"\u03B6"},{"id":"K_C","text":"\u03BE"},{"id":"K_V","text":"\u03C5"},{"id":"K_B","text":"\u03B2"},{"id":"K_N","text":"\u03BD"},{"id":"K_M","text":"\u03BC"},{"id":"K_COMMA"},{"id":"K_PERIOD"},{"id":"K_SLASH"},{"width":"10","sp":"10"}]},{"id":"5","key":[{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]},{"id":"shift","row":[{"id":"1","key":[{"id":"K_1"},{"id":"K_2"},{"id":"K_3"},{"id":"K_4"},{"id":"K_5"},{"id":"K_6"},{"id":"K_7"},{"id":"K_8"},{"id":"K_9"},{"id":"K_0"},{"id":"K_HYPHEN"},{"id":"K_EQUAL"},{"width":"100","id":"K_BKSP","sp":"1","text":"*BkSp*"}]},{"id":"2","key":[{"id":"K_Q","pad":"75","text":"X"},{"id":"K_W","text":"\u03A8"},{"id":"K_E","text":"\u0395"},{"id":"K_R","text":"\u03A1"},{"id":"K_T","text":"\u03A6"},{"id":"K_Y","text":"Y"},{"id":"K_U","text":"\u2627"},{"id":"K_I","text":"\u00CF"},{"id":"K_O","text":"\u03A9"},{"id":"K_P","text":"\u03A0"},{"id":"K_LBRKT"},{"id":"K_RBRKT"},{"width":"10","sp":"10"}]},{"id":"3","key":[{"id":"K_BKQUOTE"},{"id":"K_A","text":"\u0391"},{"id":"K_S","text":"\u0283"},{"id":"K_D","text":"\u0394"},{"id":"K_F","text":"\u03A6"},{"id":"K_G","text":"\u0393"},{"id":"K_H","text":"\u0397"},{"id":"K_J","text":"\u03A3"},{"id":"K_K","text":"\u039A"},{"id":"K_L","text":"\u039B"},{"id":"K_COLON"},{"id":"K_QUOTE"},{"id":"K_BKSLASH"}]},{"id":"4","key":[{"width":"160","id":"K_SHIFT","sp":"1","text":"*Shift*"},{"id":"K_oE2"},{"id":"K_Z","text":"\u017D"},{"id":"K_X","text":"\u0396"},{"id":"K_C","text":"\u039E"},{"id":"K_V","text":"\u03A5"},{"id":"K_B","text":"\u0392"},{"id":"K_N","text":"\u039D"},{"id":"K_M","text":"\u039C"},{"id":"K_COMMA"},{"id":"K_PERIOD"},{"id":"K_SLASH"},{"width":"10","sp":"10"}]},{"id":"5","key":[{"width":"140","id":"K_LOPT","sp":"1","text":"*Menu*"},{"width":"930","id":"K_SPACE"},{"width":"145","id":"K_ENTER","sp":"1","text":"*Enter*"}]}]}]}};this.KVER="16.0.139.0";this.KVS=[];this.gs=function(t,e) {return this.g0(t,e);};this.gs=function(t,e) {return this.g0(t,e);};this.g0=function(t,e) {var k=KeymanWeb,r=0,m=0;if(k.KKM(e,16400,65)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ἀ");}else if(k.KFCM(1,t,['~'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ἆ");}else if(k.KFCM(1,t,['^'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ἁ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Α");}}else if(k.KKM(e,16400,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Β");}}else if(k.KKM(e,16400,67)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ξ");}}else if(k.KKM(e,16400,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Δ");}}else if(k.KKM(e,16400,69)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ἐ");}else if(k.KFCM(1,t,['^'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ἕ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ε");}}else if(k.KKM(e,16400,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Φ");}}else if(k.KKM(e,16400,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Γ");}}else if(k.KKM(e,16400,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Η");}}else if(k.KKM(e,16400,73)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ἰ");}else if(k.KFCM(1,t,['^'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ῐ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ï");}}else if(k.KKM(e,16400,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Σ");}}else if(k.KKM(e,16400,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Κ");}}else if(k.KKM(e,16400,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Λ");}}else if(k.KKM(e,16400,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Μ");}}else if(k.KKM(e,16400,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ν");}}else if(k.KKM(e,16400,79)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ὠ");}else if(k.KFCM(1,t,['~'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"Ὦ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ω");}}else if(k.KKM(e,16400,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Π");}}else if(k.KKM(e,16400,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"X");}}else if(k.KKM(e,16400,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ρ");}}else if(k.KKM(e,16400,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ʃ");}}else if(k.KKM(e,16400,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Φ");}}else if(k.KKM(e,16400,85)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ῦ");}else if(k.KFCM(1,t,['~'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ῢ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"☧");}}else if(k.KKM(e,16400,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Υ");}}else if(k.KKM(e,16400,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ψ");}}else if(k.KKM(e,16400,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ζ");}}else if(k.KKM(e,16400,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Y");}}else if(k.KKM(e,16400,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"Ž");}}else if(k.KKM(e,16384,65)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ἀ");}else if(k.KFCM(1,t,['~'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ᾶ");}else if(k.KFCM(1,t,['^'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ἁ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"α");}}else if(k.KKM(e,16384,66)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"β");}}else if(k.KKM(e,16384,67)) {if(k.KFCM(1,t,[','])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ß");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ξ");}}else if(k.KKM(e,16384,68)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"δ");}}else if(k.KKM(e,16384,69)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"έ");}else if(k.KFCM(1,t,['^'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ἕ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ε");}}else if(k.KKM(e,16384,70)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"φ");}}else if(k.KKM(e,16384,71)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"γ");}}else if(k.KKM(e,16384,72)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"η");}}else if(k.KKM(e,16384,73)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ΐ");}else if(k.KFCM(1,t,['^'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ῐ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ι");}}else if(k.KKM(e,16384,74)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"σ");}}else if(k.KKM(e,16384,75)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"κ");}}else if(k.KKM(e,16384,76)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"λ");}}else if(k.KKM(e,16384,77)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"μ");}}else if(k.KKM(e,16384,78)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ν");}}else if(k.KKM(e,16384,79)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ώ");}else if(k.KFCM(1,t,['~'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ὧ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ω");}}else if(k.KKM(e,16384,80)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"π");}}else if(k.KKM(e,16384,81)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"χ");}}else if(k.KKM(e,16384,82)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ρ");}}else if(k.KKM(e,16384,83)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ʄ");}}else if(k.KKM(e,16384,84)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"θ");}}else if(k.KKM(e,16384,85)) {if(k.KFCM(1,t,['\''])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ῧ");}else if(k.KFCM(1,t,['~'])){r=m=1;k.KDC(1,t);k.KO(-1,t,"ΰ");}else if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"þ");}}else if(k.KKM(e,16384,86)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"υ");}}else if(k.KKM(e,16384,87)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ψ");}}else if(k.KKM(e,16384,88)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ζ");}}else if(k.KKM(e,16384,89)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ͻ");}}else if(k.KKM(e,16384,90)) {if(1){r=m=1;k.KDC(0,t);k.KO(-1,t,"ž");}}return r;};}