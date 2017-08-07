/**
 * @module       jQuery RD Instafeed
 * @author       Rafael Shayvolodyan(raffa)
 * @version      1.2.0
 */
(function(){(function(h,t,r){var q;q=function(){function g(a,e){this.options=h.extend(!0,{},this.Defaults,e);this.$element=h(a);this.element=a;this.$items=this.$element.find("[data-instafeed-item]");this.unique=this.genKey();this.nextUrl="";this.initialize()}g.prototype.Defaults={accessToken:"3229350923.ba4c844.4f02100c368f4df7a4139183800edf26",clientId:"641b85f46ee943acb06c8180f7e522f7",get:"user",tagName:"awesome",userId:"3229350923",locationId:"",sortBy:"most-recent",useHttp:!1,showLog:"false",
    dateFormat:{seconds:"less than a minute ago",minute:"about a minute ago",minutes:" minutes ago",hour:"about an hour ago",hours:" hours ago",day:"1 day ago",days:"%b/%d/%Y"}};g.prototype.initialize=function(){if("string"!==typeof this.options.clientId&&"string"!==typeof this.options.accessToken)throw Error("Missing clientId or accessToken.");null!=this.options.before&&"function"===typeof this.options.before&&this.options.before.call(this);this.fetchData(this,this.buildUrl(),null)};g.prototype.fetchData=
    function(a,e,f){var c;c=a.element.getAttribute("data-instafeed-get")?a.element.getAttribute("data-instafeed-get"):a.options.get;h.ajax({type:"GET",dataType:"jsonp",cache:!1,url:e,success:function(b){var d,e;null!=f?(d=f,d.push.apply(d,b.data)):d=b.data;null!=b.pagination&&(a.nextUrl=b.pagination.next_url);if("profile"!==c){e=parseInt(a.$items.length,10);if(d.length>=e)return d=a.sorting(a,d),d=d.slice(0,e),a.validate(a,b),b=a.element.getAttribute("data-instafeed-showlog")?a.element.getAttribute("data-instafeed-showlog"):
        a.options.showLog,"true"===b&&console.log(d),a.loopData(d);if(null!=a.nextUrl)return a.fetchData(a,b.pagination.next_url,d);if(d.length<e)for(;d.length!=e;)for(var g in d)if(d.length<e)d.push(d[g]);else break;d=a.sorting(a,d);a.validate(a,b);return a.loopData(d)}a.validate(a,b);b=a.element.getAttribute("data-instafeed-showlog")?a.element.getAttribute("data-instafeed-showlog"):a.options.showLog;"true"===b&&console.log(d);return a.loopData(d)}})};g.prototype.validate=function(a,e){if("object"!==typeof e){if(null!=
    a.options.error&&"function"===typeof a.options.error)return a.options.error.call(this,"Invalid JSON data"),!1;throw Error("Invalid JSON response");}if(200!==e.meta.code){if(null!=a.options.error&&"function"===typeof a.options.error)return a.options.error.call(this,e.meta.error_message),!1;throw Error("Error from Instagram: "+e.meta.error_message);}if(0===e.data.length){if(null!=a.options.error&&"function"===typeof a.options.error)return a.options.error.call(this,"No images were returned from Instagram"),
    !1;throw Error("No images were returned from Instagram");}};g.prototype.sorting=function(a,e){var f,c,b;if("profile"!==(a.element.getAttribute("data-instafeed-get")?a.element.getAttribute("data-instafeed-get"):a.options.get)&&(c=a.element.getAttribute("data-instafeed-sort")?a.element.getAttribute("data-instafeed-sort"):a.options.sortBy,"none"!==c))switch(b="random"===c?["","random"]:c.split("-"),f="least"===b[0]?!0:!1,b[1]){case "random":e.sort(function(){return.5-Math.random()});break;case "recent":e=
    a.sortBy(e,"created_time",f);break;case "liked":e=a.sortBy(e,"likes.count",f);break;case "commented":e=a.sortBy(e,"comments.count",f);break;default:throw Error("Invalid option for sortBy: '"+c+"'.");}return e};g.prototype.loopData=function(a){var e,f,c,b,d;b=this;null!=b.options.filter&&"function"===typeof b.options.filter&&(a=ctxfilter(a,b.options.filter));if(Array.isArray(a))for(d=0;d<a.length;)a[d].tags_full=b.arrToString(a[d].tags),c=f=e=-1,b.$items.eq(d).find("*").each(function(){b.checkAttribute(this,
    "data-instafeed-comment")?e++:b.checkAttribute(this,"data-instafeed-like")?f++:b.checkAttribute(this,"data-instafeed-location")?c++:b.checkAttribute(this,"data-comments-data")?b.parseAttributes(this,a[d],e):b.checkAttribute(this,"data-likes-data")?b.parseAttributes(this,a[d],f):b.checkAttribute(this,"data-locations-data")?b.parseAttributes(this,a[d],c):b.parseAttributes(this,a[d],0)}),d++;else a.link="https://www.instagram.com/"+a.username,b.$element.find("*").not("[data-instafeed-item], [data-instafeed-item] *, [data-instafeed-get]").each(function(){return b.parseAttributes(this,
    a,0)});null!=b.options.after&&"function"===typeof b.options.after&&b.options.after.call(this);return!0};g.prototype.checkAttribute=function(a,e){var f,c,b,d;d=a.attributes;c=0;for(b=d.length;c<b;c++)if(f=d[c],-1<f.name.indexOf(e))return!0;return!1};g.prototype.parseAttributes=function(a,e,f){var c,b,d,m,g,h,k,p,l,n;m=a.attributes;for(g in m)if(null!=m[g]&&"object"===typeof m[g]&&-1!==m[g].name.indexOf("data-")&&-1===m[g].name.indexOf("data-instafeed-")){n=m[g].name.substring(5);c=null;if(-1!==n.indexOf("-"))for(p=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             n.split("-"),c=e,b=0,d=p.length;b<d;b++)k=p[b],"data"===k&&null!=c[k]&&null!=c[k][f]?c=c[k][f]:null!=c[k]&&(c=c[k]);if("string"===typeof m[g].value&&(b=m[g].value.split(/\s?,\s?/i),null!=c?l=c:null!=e[n]&&(l=e[n]),-1!==n.indexOf("created_time")&&(h=l),null!=l&&null!=b&&("string"===typeof l||"number"===typeof l)))for(k=0,p=b.length;k<p;k++)c=b[k],-1!==n.indexOf("created_time")&&(l="datetime"===c?this.dating(h,!0):this.dating(h,!1)),"text"===c.toLowerCase()?a.innerHTML=l:"type"===n&&"image"!==l?a.setAttribute(c,
    "iframe"):(d=c.charAt(0),"0"<=d&&"9">=d||a.setAttribute(c,l))}};g.prototype.arrToString=function(a){return a.join(" ")};g.prototype.dating=function(a,e){var f,c,b,d,g,h;f=new Date(1E3*a);c=new Date;b=parseInt((c.getTime()-f.getTime())/1E3);b+=60*c.getTimezoneOffset();c="January February March April May June July August September October November December".split(" ");f={"%d":f.getDate(),"%m":f.getMonth()+1,"%b":c[f.getMonth()].substring(0,3),"%B":c[f.getMonth()],"%y":String(f.getFullYear()).slice(-2),
    "%Y":f.getFullYear()};c=e?"%Y-%m-%d":element.getAttribute("data-instafeed-date-format")?element.getAttribute("data-instafeed-date-format"):this.options.dateFormat.days;if(60>b)return this.options.dateFormat.seconds;if(120>b)return this.options.dateFormat.minute;if(3600>b)return parseInt(b/60).toString()+this.options.dateFormat.minutes;if(7200>b)return this.options.dateFormat.hour;if(86400>b)return"about "+parseInt(b/3600).toString()+this.options.dateFormat.hours;if(172800>b)return this.options.dateFormat.day;
    d=c.match(/%[dmbByY]/g);g=0;for(h=d.length;g<h;g++)b=d[g],c=c.replace(b,f[b]);return c};g.prototype.sortBy=function(a,e,f){a.sort(function(a,b){var c,g;c=this.getObjectProperty(a,e);g=this.getObjectProperty(b,e);return f?c>g?1:-1:c<g?1:-1}.bind(this));return a};g.prototype.getObjectProperty=function(a,e){var f,c;e=e.replace(/\[(\w+)\]/g,".$1");for(c=e.split(".");c.length;)if(f=c.shift(),null!=a&&f in a)a=a[f];else return null;return a};g.prototype.buildUrl=function(){var a,e,f,c;f=this.element.getAttribute("data-instafeed-get")?
    this.element.getAttribute("data-instafeed-get"):this.options.get;switch(f){case "tagged":a=this.element.getAttribute("data-instafeed-tagname")?this.element.getAttribute("data-instafeed-tagname"):this.options.tagName;if(!a)throw Error("No tag name specified. Use the 'tagName' option.");a="tags/"+a+"/media/recent";break;case "location":a=this.element.getAttribute("data-instafeed-location")?this.element.getAttribute("data-instafeed-location"):this.options.location;if(!a)throw Error("No location specified. Use the 'locationId' option.");
    a="locations/"+a+"/media/recent";break;case "user":a=this.element.getAttribute("data-instafeed-user")?this.element.getAttribute("data-instafeed-user"):this.options.userId;if(!a)throw Error("No user specified. Use the 'userId' option.");a="users/"+a+"/media/recent";break;case "profile":a=this.element.getAttribute("data-instafeed-user")?this.element.getAttribute("data-instafeed-user"):this.options.userId;if(!a)throw Error("No user specified. Use the 'userId' option.");a="users/"+a;break;default:throw Error("Invalid option for get: '"+
    this.options.get+"'.");}c="https://api.instagram.com/v1/"+a;a=this.element.getAttribute("data-instafeed-accesstoken")?this.element.getAttribute("data-instafeed-accesstoken"):this.options.accessToken;e=this.element.getAttribute("data-instafeed-clientid")?this.element.getAttribute("data-instafeed-clientid"):this.options.clientId;c=a?c+("?access_token="+a):c+("?client_id="+e);this.$items.length&&"profile"!==f&&(c+="&count="+this.$items.length);return c+="&callback=instafeedCache"+this.unique+".parse"};
    g.prototype.genKey=function(){var a;a=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return""+a()+a()+a()+a()};g.prototype.filter=function(a,e){var f,c,b,d,g;f=[];c=function(a){if(e(a))return f.push(a)};d=0;for(g=a.length;d<g;d++)b=a[d],c(b);return f};return g}();h.fn.extend({RDInstafeed:function(g){return this.each(function(){var a;a=h(this);if(!a.data("RDInstafeed"))return a.data("RDInstafeed",new q(this,g))})}});return r.RDInstafeed=q})(window.jQuery,document,window);"undefined"!==
typeof module&&null!==module?module.exports=window.RDInstafeed:"function"===typeof define&&define.amd&&define(["jquery"],function(){return window.RDInstafeed})}).call(this);