
      var bp;

      if (window.__console_path__) {
        bp = window.__console_path__;
      } else {
        var st=document.getElementsByTagName('script');
        var au=st[st.length - 1].src;
        bp = au.replace('apic-import.js', '');
      }

      var legacyScriptsCount = 0;
      function styleDocument() {
        document.addEventListener('WebComponentsReady', function() {
          setTimeout(function() {
            function shouldAddDocumentStyle(n) {
              return n.nodeType === Node.ELEMENT_NODE && n.localName === 'style' && !n.hasAttribute('scope');
            }
            const CustomStyleInterface = window.ShadyCSS.CustomStyleInterface;
            const candidates = document.querySelectorAll('style');
            for (let i = 0; i < candidates.length; i++) {
              const candidate = candidates[i];
              if (shouldAddDocumentStyle(candidate)) {
                CustomStyleInterface.addCustomStyle(candidate);
              }
            }
          }, 1000);
        });
      }
      function loadConsoleWhenDone(){
        legacyScriptsCount++
        if(legacyScriptsCount==3 && isLegacy()==true){
          loadConsole();
          styleDocument();
        }
      }
      function addScript(src, onLoadCallback) {
        var s = document.createElement('script');
        s.setAttribute('nomodule', '');
        s.src = bp + src;
        s.onload = onLoadCallback;
        document.body.appendChild(s);
      }
    addScript('./vendor.js',loadConsoleWhenDone);addScript('polyfills/core-js.da8d8819d4fcddc05b82706be190ca82.js',loadConsoleWhenDone);addScript('polyfills/systemjs.43834357060ed117b1ff0f5bdaafa116.js',loadConsoleWhenDone);addScript('polyfills/regenerator-runtime.00d94cc6e1d36f22abd18835b91f49dc.js',loadConsoleWhenDone);function loadConsole() {try{s = document.createElement('script');s.innerHTML = 'window.importShim = s => import(s)';document.body.appendChild(s);}catch(e){console.log(e);};try{!function(){function e(t,n){return new Promise(function(e,o){document.head.appendChild(Object.assign(document.createElement("script"),{src:bp+t,onload:e,onerror:o},n?{type:"module"}:void 0))})}var o=[];function t(){"noModule"in HTMLScriptElement.prototype?window.importShim(bp+"api-console-78222ea6.js"):System.import(bp+"legacy/api-console-a61c800f.js")}"fetch"in window||o.push(e("polyfills/fetch.22ae01701128c1ab2432217873215d6a.js",!1)),"noModule"in HTMLScriptElement.prototype&&!("importShim"in window)&&o.push(e("polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",!1)),"attachShadow"in Element.prototype&&"getRootNode"in Element.prototype&&(!window.ShadyDOM||!window.ShadyDOM.force)||o.push(e("polyfills/webcomponents.33779c09ef049bf2e469a098b6ee7a5f.js",!1)),!("noModule"in HTMLScriptElement.prototype)&&"getRootNode"in Element.prototype&&o.push(e("polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",!1)),o.length?Promise.all(o).then(t):t()}()}catch(e){console.log(e);};}
    function isLegacy() {
      const script = document.createElement('script');
      return !('noModule' in script);
    }
    if(isLegacy()==false){
      loadConsole();
    }
    