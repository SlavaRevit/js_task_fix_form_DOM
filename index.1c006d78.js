function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function r(r){return function(r){if(Array.isArray(r))return e(r)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(r,t){if(r){if("string"==typeof r)return e(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=r(document.querySelectorAll("input"));function n(e){for(var r=[],t=0,n=0;n<e.length;n++)e[n]===e[n].toUpperCase()&&(t!==n&&r.push(e.slice(t,n)),t=n);return r.push(e.slice(t)),r.map(function(e){return e.slice(0,1).toUpperCase()+e.slice(1,e.length)})}r(document.querySelectorAll(".field")).forEach(function(e,r){var o=document.createElement("label");o.setAttribute("for",t[r].id),o.className="field-label",o.textContent=n(t[r].name).join(" "),e.prepend(o)}),t.forEach(function(e){var r=n(e.name).join(" ");e.placeholder=r});
//# sourceMappingURL=index.1c006d78.js.map