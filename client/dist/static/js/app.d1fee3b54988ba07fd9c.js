webpackJsonp([2],{"+YBl":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",column:""}},[n("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[n("panel",{attrs:{title:"Welcome to Socio"}},[n("div",[n("h5",[t._v("You are on the homepage. Browse around.")])]),t._v(" "),n("br"),t._v(" "),n("div",[n("p"),n("h5",[t._v("Count Users: "+t._s(t.userCount))]),n("p"),t._v(" "),n("p"),n("h5",[t._v("Count Admins: "+t._s(t.adminCount))]),n("p")])])],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},"/W1/":function(t,e){},"27Nm":function(t,e){},"2hve":function(t,e){},"3ZG3":function(t,e,n){"use strict";function s(t){n("NLPy")}var a=n("v3+l"),r=n("EbJ0"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-9d0b9a98",null);e.a=l.exports},"3v6S":function(t,e,n){"use strict";e.a={props:["title"]}},"4uRw":function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("JhKW"),l=n("3ZG3"),u=n("CLm6");e.a={data:function(){return{admin:{name:"",email:"",password:""},output:""}},components:{Panel:o.a,Warning:l.a},methods:{register:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.output="",t.error="",e.next=5,u.a.adminRegister(t.admin);case 5:t.admin={name:"",email:"",password:""},t.output="Admin added.",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.output=e.t0.response.data.error;case 12:case"end":return e.stop()}},e,t,[[0,9]])}))()}}}},"5ILx":function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("mvHQ"),i=n.n(r),o=n("exGp"),l=n.n(o),u=n("JhKW"),c=n("CLm6"),d=n("/ktO"),v=n.n(d);e.a={data:function(){return{email:"",rhythm:null,password:"",error:""}},components:{Panel:u.a},methods:{login:function(){var t=this;return l()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error="",e.next=4,c.a.userLogin({email:t.email,password:t.password,rhythm:i()(t.rhythm)});case 4:n=e.sent,t.$store.dispatch("setUserToken",n.data.token),t.$store.dispatch("setUser",n.data.user),t.$router.push({name:"UserProfile"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 13:case"end":return e.stop()}},e,t,[[0,10]])}))()},tapThat:function(){null!=this.rhythm&&this.rhythm.tap()},finish:function(){this.rhythm.done()}},mounted:function(){this.rhythm=new v.a.Rhythm}}},"5nec":function(t,e){},"73Oy":function(t,e,n){"use strict";function s(t){n("Euju")}var a=n("YZFQ"),r=n("STY6"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-7a8bb5b8",null);e.a=l.exports},"8prq":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isUserLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"My Profile"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Name",readonly:""},model:{value:t.$store.state.user.name,callback:function(e){t.$set(t.$store.state.user,"name",e)},expression:"$store.state.user.name"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Age",readonly:""},model:{value:t.$store.state.user.age,callback:function(e){t.$set(t.$store.state.user,"age",e)},expression:"$store.state.user.age"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Gender",readonly:""},model:{value:t.$store.state.user.gender,callback:function(e){t.$set(t.$store.state.user,"gender",e)},expression:"$store.state.user.gender"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Phone",readonly:""},model:{value:t.$store.state.user.phone,callback:function(e){t.$set(t.$store.state.user,"phone",e)},expression:"$store.state.user.phone"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Email",readonly:""},model:{value:t.$store.state.user.email,callback:function(e){t.$set(t.$store.state.user,"email",e)},expression:"$store.state.user.email"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Status",readonly:""},model:{value:t.$store.state.user.status,callback:function(e){t.$set(t.$store.state.user,"status",e)},expression:"$store.state.user.status"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Objective",readonly:"","multi-line":""},model:{value:t.$store.state.user.objective,callback:function(e){t.$set(t.$store.state.user,"objective",e)},expression:"$store.state.user.objective"}})],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},"9Z9X":function(t,e){},Bj7v:function(t,e,n){"use strict";var s=n("JhKW"),a=n("3ZG3");e.a={components:{Warning:a.a,Panel:s.a}}},CLm6:function(t,e,n){"use strict";var s=n("mtWM"),a=n.n(s);e.a={userLogin:function(t){return a.a.post("api/user/login",t)},adminLogin:function(t){return a.a.post("api/admin/login",t)},adminRegister:function(t){return a.a.post("api/admin/register",t)},userRegister:function(t){return a.a.post("api/user/register",t)}}},CyVX:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("3ZG3"),l=n("uqh+"),u=n("JhKW");e.a={components:{Panel:u.a,Warning:o.a},data:function(){return{followings:[],output:""}},methods:{unfollow:function(t){var e=this;return i()(a.a.mark(function n(){var s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.output="",n.next=3,l.a.unfollowUser(t);case 3:return s=n.sent.data,e.output=s.output,n.next=7,l.a.getFollowing({id:e.$store.state.user.id});case 7:e.followings=n.sent.data;case 8:case"end":return n.stop()}},n,e)}))()},report:function(t){var e=this;return i()(a.a.mark(function n(){var s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.output="",s={UserId:e.$store.state.user.id,ReportedId:t},n.next=4,l.a.reportUser(s);case 4:e.output=n.sent.data.output;case 5:case"end":return n.stop()}},n,e)}))()}},beforeMount:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getFollowing({id:t.$store.state.user.id});case 2:t.followings=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()}}},Dqi8:function(t,e,n){"use strict";function s(t){n("/W1/")}var a=n("yCdV"),r=n("8prq"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-e6f42e46",null);e.a=l.exports},EbJ0:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",[t._v("\n    Sorry you need to login first.\n  ")])],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},Euju:function(t,e){},FX9o:function(t,e){},FdaH:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isUserLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:""}},[n("panel",{attrs:{title:"Search"}},[n("v-text-field",{attrs:{label:"Type Friend's Name"},on:{input:t.onSearchInput},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)],1),t._v(" "),n("v-flex",[n("panel",{attrs:{title:"Users"}},[n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.users,function(e){return n("v-flex",{key:e.id,attrs:{"d-flex":"",xs12:"",md6:""}},[n("v-card",{attrs:{color:"indigo darken-1",dark:""}},[n("v-card-title",{staticClass:"title",attrs:{primary:""}},[t._v(t._s(e.name))]),t._v(" "),n("v-card-text",[n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:"",to:{name:"UserViewProfile",params:{userId:e.id}}}},[t._v("\n                  View\n                ")]),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:function(n){t.follow(e.id)}}},[t._v("\n                  Follow\n                ")]),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:function(n){t.report(e.id)}}},[t._v("\n                  Report\n                ")])],1)],1)],1)}),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("p",[t._v(t._s(t.output))])])],2)],1)],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},Fs8J:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("mvHQ"),i=n.n(r),o=n("exGp"),l=n.n(o),u=n("JhKW");n("uqh+");e.a={data:function(){return{userCount:"",adminCount:""}},components:{Panel:u.a},mounted:function(){var t=this;return l()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=7;break;case 3:n=e.sent.data,console.log("RESPONSE : "+i()(n)),t.userCount=n.userCount,t.adminCount=n.adminCount;case 7:case"end":return e.stop()}},e,t)}))()}}},GSpQ:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isAdminLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"Admin's Profile"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Name",readonly:""},model:{value:t.$store.state.admin.name,callback:function(e){t.$set(t.$store.state.admin,"name",e)},expression:"$store.state.admin.name"}})],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},JhKW:function(t,e,n){"use strict";function s(t){n("kHTM")}var a=n("3v6S"),r=n("velX"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-1c76b91c",null);e.a=l.exports},M93x:function(t,e,n){"use strict";function s(t){n("FX9o")}var a=n("xJD8"),r=n("MTSB"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,null,null);e.a=l.exports},MTSB:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{clipped:"",persistent:"","enable-resize-watcher":"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-flex",{attrs:{"ml-3":"","mt-2":"","mb-0":""}},[t.$store.state.isAdminLoggedIn||t.$store.state.isUserLoggedIn?t._e():n("v-switch",{attrs:{color:"indigo",label:"Admin Mode"},on:{change:t.toggleMode},model:{value:t.isAdmin,callback:function(e){t.isAdmin=e},expression:"isAdmin"}})],1),t._v(" "),n("v-list",{attrs:{dense:""}},[t.$store.state.isUserLoggedIn&&!t.isAdmin?n("v-list-tile",{attrs:{to:{name:"UserProfile"}}},[n("v-list-tile-action",[n("v-icon",[t._v("person")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Profile")])],1)],1):t._e(),t._v(" "),t.$store.state.isUserLoggedIn&&!t.isAdmin?n("v-list-tile",{attrs:{to:{name:"UserWall"}}},[n("v-list-tile-action",[n("v-icon",[t._v("rss_feed")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Wall")])],1)],1):t._e(),t._v(" "),t.$store.state.isUserLoggedIn&&!t.isAdmin?n("v-list-tile",{attrs:{to:{name:"UserFollowing"}}},[n("v-list-tile-action",[n("v-icon",[t._v("group")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Following")])],1)],1):t._e(),t._v(" "),t.$store.state.isUserLoggedIn&&!t.isAdmin?n("v-list-tile",{attrs:{to:{name:"UserFindUsers"}}},[n("v-list-tile-action",[n("v-icon",[t._v("search")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Find Users")])],1)],1):t._e(),t._v(" "),t.$store.state.isAdminLoggedIn&&t.isAdmin?n("v-list-tile",{attrs:{to:{name:"AdminProfile"}}},[n("v-list-tile-action",[n("v-icon",[t._v("supervisor_account")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Profile")])],1)],1):t._e(),t._v(" "),t.$store.state.isAdminLoggedIn&&t.isAdmin?n("v-list-tile",{attrs:{to:{name:"AdminDeleteUsers"}}},[n("v-list-tile-action",[n("v-icon",[t._v("delete_forever")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Delete Users")])],1)],1):t._e(),t._v(" "),t.$store.state.isAdminLoggedIn&&t.isAdmin?n("v-list-tile",{attrs:{to:{name:"AdminRegister"}}},[n("v-list-tile-action",[n("v-icon",[t._v("person_add")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Add Admins")])],1)],1):t._e()],1)],1),t._v(" "),n("v-toolbar",{attrs:{color:"indigo",dark:"",app:"",fixed:"","clipped-left":""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("router-link",{attrs:{tag:"v-toolbar-title",id:"title",to:{name:"Home"}}},[t._v("\n      Socio\n    ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[t.$store.state.isUserLoggedIn||t.isAdmin?t._e():n("v-btn",{attrs:{flat:"",dark:"",to:{name:"UserLogin"}}},[t._v("User Login\n      ")]),t._v(" "),t.$store.state.isUserLoggedIn||t.isAdmin?t._e():n("v-btn",{attrs:{flat:"",dark:"",to:{name:"UserRegister"}}},[t._v("User Register\n      ")]),t._v(" "),t.$store.state.isUserLoggedIn&&!t.isAdmin?n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){t.userLogout()}}},[t._v("User Logout\n      ")]):t._e(),t._v(" "),!t.$store.state.isAdminLoggedIn&&t.isAdmin?n("v-btn",{attrs:{flat:"",dark:"",to:{name:"AdminLogin"}}},[t._v("Admin Login\n      ")]):t._e(),t._v(" "),t.$store.state.isAdminLoggedIn&&t.isAdmin?n("v-btn",{attrs:{flat:"",dark:""},on:{click:function(e){t.adminLogout()}}},[t._v("Admin Logout\n      ")]):t._e()],1)],1),t._v(" "),n("main",[n("v-content",[n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("router-view")],1)],1)],1),t._v(" "),n("v-footer",{attrs:{app:""}},[n("span",[t._v("© 2017")])])],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},N70V:function(t,e,n){"use strict";var s=n("mN8J"),a=n("Nyve"),r=n("VU/8"),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),a=n("M93x"),r=n("YaEn"),i=n("3EgV"),o=n.n(i),l=n("9JMe"),u=(n.n(l),n("wtEF"));n.e(0).then(n.bind(null,"7zck")),s.a.config.productionTip=!1,s.a.use(o.a),Object(l.sync)(u.a,r.a),new s.a({el:"#app",router:r.a,store:u.a,template:"<App/>",components:{App:a.a}})},NLPy:function(t,e){},Nyve:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isAdminLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:""}},[n("panel",{attrs:{title:"Search"}},[n("v-text-field",{attrs:{label:"Type User's Name"},on:{input:t.onSearchInput},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)],1),t._v(" "),n("v-flex",[n("panel",{attrs:{title:"Users"}},[n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.users,function(e){return n("v-flex",{key:e.id,attrs:{"d-flex":"",xs12:"",md6:""}},[n("v-card",{attrs:{color:"indigo darken-1",dark:""}},[n("v-card-title",{staticClass:"title",attrs:{primary:""}},[t._v(t._s(e.name))]),t._v(" "),n("v-card-text",[n("div",[n("div",{staticClass:"grey--text",staticStyle:{"text-align":"left"}},[t._v(" No of Reports: "+t._s(e.reports))])]),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:function(n){t.deleteUser(e.id)}}},[t._v("\n                  Delete\n                ")])],1)],1)],1)}))],1)],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},OmLc:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"Admin Login"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(t.error))]),t._v(" "),n("br")],1)],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},STY6:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isUserLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"Create a post"}},[n("v-text-field",{attrs:{required:"",rules:[t.required],label:"Title"},model:{value:t.song.title,callback:function(e){t.$set(t.song,"title",e)},expression:"song.title"}}),t._v(" "),n("v-text-field",{attrs:{required:"",rules:[t.required],"multi-line":"",label:"Description"},model:{value:t.song.description,callback:function(e){t.$set(t.song,"description",e)},expression:"song.description"}}),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:t.createPost}},[t._v("\n        Post\n      ")])],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},TbaH:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isUserLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:""}},[n("panel",{attrs:{title:"Posts"}},[n("v-btn",{staticClass:"indigo accent-2",attrs:{slot:"action",to:{name:"UserCreatePost"},light:"",medium:"",absolute:"",right:"",middle:"",fab:""},slot:"action"},[n("v-icon",[t._v("add")])],1),t._v(" "),n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.posts,function(e,s){return n("v-flex",{key:e.id,attrs:{"d-flex":"",xs12:"",md6:""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("div",{staticClass:"headline",staticStyle:{"text-align":"left"}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"grey--text",staticStyle:{"text-align":"left"}},[t._v(" Created by "+t._s(e.author))]),t._v(" "),n("div",{staticStyle:{"text-align":"left"}},[n("p",{staticStyle:{"word-break":"break-all"}},[t._v("\n                      "+t._s(e.description)+"\n                    ")])])])])],1)],1)}))],1)],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},TsvE:function(t,e){},VEN5:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("JhKW"),l=n("3ZG3"),u=n("uqh+");e.a={data:function(){return{user:null}},components:{Warning:l.a,Panel:o.a},mounted:function(){var t=this;return i()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$store.state.route.params.userId,console.log(n),e.next=4,u.a.getUsers({id:n});case 4:t.user=e.sent.data;case 5:case"end":return e.stop()}},e,t)}))()}}},VO5i:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"Register"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Name"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Age"},model:{value:t.user.age,callback:function(e){t.$set(t.user,"age",e)},expression:"user.age"}}),t._v(" "),n("v-select",{attrs:{items:t.genders,label:"Gender","single-line":"",bottom:""},model:{value:t.user.gender,callback:function(e){t.$set(t.user,"gender",e)},expression:"user.gender"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Phone"},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Status"},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Objective","multi-line":""},model:{value:t.user.objective,callback:function(e){t.$set(t.user,"objective",e)},expression:"user.objective"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Email"},on:{input:t.tapThat,blur:t.finish},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{type:"password",label:"Password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:t.register}},[t._v("Register")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(t.error))]),t._v(" "),n("br")],1)],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},VZAw:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isUserLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:t.user.name+"'s Profile"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Name",readonly:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Age",readonly:""},model:{value:t.user.age,callback:function(e){t.$set(t.user,"age",e)},expression:"user.age"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Gender",readonly:""},model:{value:t.user.gender,callback:function(e){t.$set(t.user,"gender",e)},expression:"user.gender"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Phone",readonly:""},model:{value:t.user.phone,callback:function(e){t.$set(t.user,"phone",e)},expression:"user.phone"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Email",readonly:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Status",readonly:""},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Objective",readonly:"","multi-line":""},model:{value:t.user.objective,callback:function(e){t.$set(t.user,"objective",e)},expression:"user.objective"}})],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},ViHg:function(t,e,n){"use strict";function s(t){n("2hve")}var a=n("ygry"),r=n("VO5i"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-581a521f",null);e.a=l.exports},Vsjp:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("3ZG3"),l=n("uqh+"),u=n("JhKW");e.a={components:{Panel:u.a,Warning:o.a},data:function(){return{users:null,user:{name:""},output:""}},methods:{onSearchInput:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getUsers(t.user);case 2:t.users=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()},follow:function(t){var e=this;return i()(a.a.mark(function n(){var s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.output="",s={UserId:e.$store.state.user.id,FollowingId:t},n.next=4,l.a.followUser(s);case 4:e.output=n.sent.data.output;case 5:case"end":return n.stop()}},n,e)}))()},report:function(t){var e=this;return i()(a.a.mark(function n(){var s;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.output="",s={UserId:e.$store.state.user.id,ReportedId:t},n.next=4,l.a.reportUser(s);case 4:e.output=n.sent.data.output;case 5:case"end":return n.stop()}},n,e)}))()}},mounted:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getUsers(t.user);case 2:t.users=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()}}},YZFQ:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("3ZG3"),l=n("uqh+"),u=n("JhKW");e.a={data:function(){return{song:{title:null,description:null,UserId:this.$store.state.user.id},required:function(t){return!!t||"Required."}}},components:{Panel:u.a,Warning:o.a},methods:{createPost:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.createPost(t.song);case 2:t.$router.push({name:"UserWall"});case 3:case"end":return e.stop()}},e,t)}))()}}}},YaEn:function(t,e,n){"use strict";var s=n("7+uW"),a=n("/ocq"),r=n("lO7g"),i=n("xLea"),o=n("j/vH"),l=n("wDxI"),u=n("ViHg"),c=n("zUuN"),d=n("vGAU"),v=n("73Oy"),f=n("iKR3"),m=n("Dqi8"),p=n("bb8g"),g=n("zI7g"),x=n("N70V");s.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/user/login",name:"UserLogin",component:i.a},{path:"/admin/login",name:"AdminLogin",component:o.a},{path:"/admin/register",name:"AdminRegister",component:l.a},{path:"/user/register",name:"UserRegister",component:u.a},{path:"/user/wall",name:"UserWall",component:c.a},{path:"/user/following",name:"UserFollowing",component:d.a},{path:"/user/createpost",name:"UserCreatePost",component:v.a},{path:"/user/findusers",name:"UserFindUsers",component:f.a},{path:"/user/profile",name:"UserProfile",component:m.a},{path:"/user/viewprofile/:userId",name:"UserViewProfile",component:p.a},{path:"/admin/profile",name:"AdminProfile",component:g.a},{path:"/admin/deleteuser",name:"AdminDeleteUsers",component:x.a}]})},Zqvo:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"Login"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Email"},on:{input:t.tapThat,blur:t.finish},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{type:"password",label:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(t.error))]),t._v(" "),n("br")],1)],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},aIFy:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isUserLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",[n("panel",{attrs:{title:"Following"}},[n("v-container",{attrs:{fluid:"","grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[t._l(t.followings,function(e){return n("v-flex",{key:e.id,attrs:{"d-flex":"",xs12:"",md6:""}},[n("v-card",{attrs:{color:"indigo darken-1",dark:""}},[n("v-card-title",{staticClass:"title",attrs:{primary:""}},[t._v(t._s(e.name))]),t._v(" "),n("v-card-text",[n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:"",to:{name:"UserViewProfile",params:{userId:e.FollowingId}}}},[t._v("\n                  View\n                ")]),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:function(n){t.unfollow(e)}}},[t._v("\n                  UnFollow\n                ")]),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:function(n){t.report(e.FollowingId)}}},[t._v("\n                  Report\n                ")])],1)],1)],1)}),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("p",[t._v(t._s(t.output))])])],2)],1)],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},aZyj:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("3ZG3"),l=n("uqh+"),u=n("JhKW");e.a={components:{Panel:u.a,Warning:o.a},data:function(){return{posts:null}},beforeMount:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getWall();case 2:t.posts=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()}}},bb8g:function(t,e,n){"use strict";function s(t){n("27Nm")}var a=n("VEN5"),r=n("VZAw"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-38448210",null);e.a=l.exports},dVod:function(t,e){},ejxp:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("JhKW"),l=n("CLm6");e.a={data:function(){return{email:"",password:"",error:""}},components:{Panel:o.a},methods:{login:function(){var t=this;return i()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error="",e.next=4,l.a.adminLogin({email:t.email,password:t.password});case 4:n=e.sent,t.$store.dispatch("setAdminToken",n.data.token),t.$store.dispatch("setAdmin",n.data.admin),t.$router.push({name:"AdminProfile"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 13:case"end":return e.stop()}},e,t,[[0,10]])}))()}}}},gKfo:function(t,e){},iKR3:function(t,e,n){"use strict";var s=n("Vsjp"),a=n("FdaH"),r=n("VU/8"),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports},"j/vH":function(t,e,n){"use strict";function s(t){n("gKfo")}var a=n("ejxp"),r=n("OmLc"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-b2b055be",null);e.a=l.exports},kHTM:function(t,e){},lO7g:function(t,e,n){"use strict";function s(t){n("5nec")}var a=n("Fs8J"),r=n("+YBl"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-07c1b177",null);e.a=l.exports},mN8J:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("exGp"),i=n.n(r),o=n("3ZG3"),l=n("uqh+"),u=n("JhKW");e.a={components:{Panel:u.a,Warning:o.a},data:function(){return{users:null,user:{name:""}}},methods:{onSearchInput:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getReports(t.user);case 2:t.users=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()},deleteUser:function(t){var e=this;return i()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.deleteUser({id:t});case 2:return n.next=4,l.a.getReports(e.user);case 4:e.users=n.sent.data;case 5:case"end":return n.stop()}},n,e)}))()}},beforeMount:function(){var t=this;return i()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getReports(t.user);case 2:t.users=e.sent.data;case 3:case"end":return e.stop()}},e,t)}))()}}},"uqh+":function(t,e,n){"use strict";var s=n("mtWM"),a=n.n(s);e.a={getWall:function(){return a.a.get("api/user/getwall")},createPost:function(t){return a.a.post("api/user/createpost",t)},getUsers:function(t){return a.a.post("api/user/getusers",t)},deleteUser:function(t){return a.a.post("api/user/deleteuser",t)},followUser:function(t){return a.a.post("api/user/followuser",t)},unfollowUser:function(t){return a.a.post("api/user/unfollowuser",t)},getFollowing:function(t){return console.log("LOLOL"),a.a.post("api/user/getfollowing",t)},reportUser:function(t){return a.a.post("api/user/reportuser",t)},getReports:function(t){return a.a.post("api/user/getreports",t)},getStats:function(){return a.a.get("api/user/getstats")}}},"v3+l":function(t,e,n){"use strict";e.a={}},vGAU:function(t,e,n){"use strict";var s=n("CyVX"),a=n("aIFy"),r=n("VU/8"),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports},velX:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white elevation-2"},[n("v-toolbar",{staticClass:"indigo lighten-1",attrs:{flat:"",dense:"",dark:""}},[n("v-toolbar-title",[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),t._t("action")],2),t._v(" "),n("div",{staticClass:"pl-4 pr-4 pt-3 pb-0"},[t._t("default",[t._v("\n      No slot defined.\n    ")])],2)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},wDxI:function(t,e,n){"use strict";function s(t){n("TsvE")}var a=n("4uRw"),r=n("xoot"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-b9a7b7ca",null);e.a=l.exports},wtEF:function(t,e,n){"use strict";var s=n("7+uW"),a=n("NYxO");s.a.use(a.a),e.a=new a.a.Store({strict:!0,state:{userToken:null,user:null,admin:null,adminToken:null,isUserLoggedIn:!1,isAdminLoggedIn:!1},mutations:{setUserToken:function(t,e){t.userToken=e,t.isUserLoggedIn=!!e},setAdminToken:function(t,e){t.adminToken=e,t.isAdminLoggedIn=!!e},setUser:function(t,e){t.user=e},setAdmin:function(t,e){t.admin=e}},actions:{setUserToken:function(t,e){(0,t.commit)("setUserToken",e)},setAdminToken:function(t,e){(0,t.commit)("setAdminToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)},setAdmin:function(t,e){(0,t.commit)("setAdmin",e)}}})},xJD8:function(t,e,n){"use strict";e.a={name:"app",data:function(){return{drawer:!1,isAdmin:!1}},methods:{userLogout:function(){this.$store.dispatch("setUserToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Home"})},adminLogout:function(){this.$store.dispatch("setAdminToken",null),this.$store.dispatch("setAdmin",null),this.$router.push({name:"Home"})},toggleMode:function(){this.$router.push({name:"Home"})}}}},xLea:function(t,e,n){"use strict";function s(t){n("dVod")}var a=n("5ILx"),r=n("Zqvo"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-1244059d",null);e.a=l.exports},xoot:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$store.state.isAdminLoggedIn?n("v-layout",{attrs:{column:""}},[n("v-flex",{attrs:{xs12:"","offset-md3":"",md6:""}},[n("panel",{attrs:{title:"Admin Register"}},[n("v-text-field",{staticClass:"text-field",attrs:{label:"Name"},model:{value:t.admin.name,callback:function(e){t.$set(t.admin,"name",e)},expression:"admin.name"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{label:"Email"},model:{value:t.admin.email,callback:function(e){t.$set(t.admin,"email",e)},expression:"admin.email"}}),t._v(" "),n("v-text-field",{staticClass:"text-field",attrs:{type:"password",label:"Password"},model:{value:t.admin.password,callback:function(e){t.$set(t.admin,"password",e)},expression:"admin.password"}}),t._v(" "),n("v-btn",{staticClass:"indigo lighten-1",attrs:{dark:""},on:{click:t.register}},[t._v("Add Admin")]),t._v(" "),n("br"),t._v(" "),n("p",[t._v(t._s(t.output))]),t._v(" "),n("br")],1)],1)],1):n("warning")},a=[],r={render:s,staticRenderFns:a};e.a=r},yCdV:function(t,e,n){"use strict";var s=n("JhKW"),a=n("3ZG3");e.a={components:{Warning:a.a,Panel:s.a}}},ygry:function(t,e,n){"use strict";var s=n("Xxa5"),a=n.n(s),r=n("mvHQ"),i=n.n(r),o=n("exGp"),l=n.n(o),u=n("JhKW"),c=n("CLm6"),d=n("/ktO"),v=n.n(d);e.a={data:function(){return{user:{name:"",email:"",rhythm:"",password:"",phone:"",gender:"Male",age:"",status:"",objective:""},genders:["Male","Female"],rhythm:null,error:""}},components:{Panel:u.a},methods:{register:function(){var t=this;return l()(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.error="",t.user.rhythm=i()(t.rhythm),e.next=5,c.a.userRegister(t.user);case 5:n=e.sent,console.log(n),t.$store.dispatch("setUserToken",n.data.token),t.$store.dispatch("setUser",n.data.user),t.$router.push({name:"UserProfile"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t.error=e.t0.response.data.error;case 15:case"end":return e.stop()}},e,t,[[0,12]])}))()},tapThat:function(){null!=this.rhythm&&this.rhythm.tap()},finish:function(){this.rhythm.done()}},mounted:function(){this.rhythm=new v.a.Rhythm}}},zI7g:function(t,e,n){"use strict";function s(t){n("9Z9X")}var a=n("Bj7v"),r=n("GSpQ"),i=n("VU/8"),o=s,l=i(a.a,r.a,!1,o,"data-v-d198313e",null);e.a=l.exports},zUuN:function(t,e,n){"use strict";var s=n("aZyj"),a=n("TbaH"),r=n("VU/8"),i=r(s.a,a.a,!1,null,null,null);e.a=i.exports}},["NHnr"]);
//# sourceMappingURL=app.d1fee3b54988ba07fd9c.js.map