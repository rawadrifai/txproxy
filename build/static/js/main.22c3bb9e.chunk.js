(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1384:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(120),o=n.n(c),l=(n(533),n(27)),s=n.n(l),i=n(309),u=n(511),h=n(512),m=n(517),x=n(513),d=n(518),p=n(1392),E=n(1393),w=n(1397),f=n(1395),g=n(1396),v=n(1394),b=n(1385),y=n(153),T=n.n(y),_=(n(701),{aws_project_region:"us-west-2",aws_content_delivery_bucket:"txproxy-20190220225753-hostingbucket-dev",aws_content_delivery_bucket_region:"us-west-2",aws_content_delivery_url:"http://txproxy-20190220225753-hostingbucket-dev.s3-website-us-west-2.amazonaws.com"}),k=n(515),I=n.n(k);n(702).TxProxy;T.a.configure(_);var O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).INITIAL_STATE={tx:"",txhash:""},n.state=n.INITIAL_STATE,n.handleTxInput=function(e){n.setState({tx:e.target.value})},n.handleTxHashInput=function(e){n.setState({txhash:e.target.value})},n.getTx=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.API.get("txapi","/tx/"+n.state.txhash);case 2:t=e.sent,console.log(JSON.stringify(t,null,2));case 4:case"end":return e.stop()}},e,this)})),n.broadcastTx=Object(i.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={tx:n.state.tx},a={body:t},e.next=4,y.API.post("txapi","/tx",a);case 4:r=e.sent,console.log(JSON.stringify(r,null,2));case 6:case"end":return e.stop()}},e,this)})),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(E.a,null),r.a.createElement(E.a,null),r.a.createElement(w.a,{size:"huge",className:"App-header"},"txproxy.io"),r.a.createElement(I.a,null,"Broadcast and retrieve transactions."),r.a.createElement(E.a,null),r.a.createElement(E.a,null),r.a.createElement(E.a,null),r.a.createElement(f.a,null,r.a.createElement(g.a,{columns:2,relaxed:"very"},r.a.createElement(g.a.Column,null,r.a.createElement("h3",null,"Enter transaction hash"),r.a.createElement(E.a,null),r.a.createElement(v.a,{onChange:this.handleTxHashInput,className:"tbx"}),r.a.createElement(b.a,{onClick:this.getTx},"get tx")),r.a.createElement(g.a.Column,null,r.a.createElement("h3",null,"Enter signed transaction"),r.a.createElement(E.a,null),r.a.createElement(v.a,{onChange:this.handleTxInput,className:"tbx"}),r.a.createElement(b.a,{onClick:this.broadcastTx},"broadcast tx"))),r.a.createElement(E.a,{vertical:!0},"/")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(1381);o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},214:function(e,t){},528:function(e,t,n){e.exports=n(1384)},533:function(e,t,n){},701:function(e,t,n){},771:function(e,t){},773:function(e,t){},846:function(e,t){},913:function(e,t){}},[[528,1,2]]]);
//# sourceMappingURL=main.22c3bb9e.chunk.js.map