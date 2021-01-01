(this.webpackJsonplouvre=this.webpackJsonplouvre||[]).push([[0],{221:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var c=n(16),r=n(19),s=n(1),i=n(2),a=n.n(i),o=n(92),l=n.n(o),d=(n(221),n(11)),j=n(12),u=n(14),h=n(13),b=n(8),p=n(9),O=n(5);var m=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.profile,n=e.auth;return n.uid?Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"card hogBlock profileCard louvColor",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:t.img,alt:"userImg",className:"responsive-img"})}),Object(s.jsxs)("div",{className:"card-content louvFont",children:[Object(s.jsx)("h1",{className:"louvFont",children:t.userName}),Object(s.jsxs)("h5",{children:["e-mail: ",n.email]}),Object(s.jsxs)("h5",{children:["role: ","neo"===t.role?"neo":t.role]})]})]})}):Object(s.jsx)(p.a,{to:"/signin"})})),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(s.jsx)(p.a,{to:"/"}):Object(s.jsx)("div",{className:"container louvColor",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,className:"white ",children:[Object(s.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("button",{className:"btn z-depth-0 louvColor",children:"Log in"}),Object(s.jsx)("div",{className:"red-text center",children:t?Object(s.jsx)("p",{children:t}):null})]})]})})}}]),n}(i.Component),x=Object(O.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,c){(0,c.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(f),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",userName:"",img:""},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(s.jsx)(p.a,{to:"/"}):Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(s.jsx)("h5",{children:"New Inhabitant"}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"userName",children:"User name"}),Object(s.jsx)("input",{type:"text",id:"userName",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"img",children:"Link to image for profile picture"}),Object(s.jsx)("input",{type:"text",id:"img",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("button",{className:"btn louvColor z-depth-0",children:"Sign Up"}),Object(s.jsx)("div",{className:"red-text center z-depth-1 p1",children:n?Object(s.jsx)("p",{children:n}):null})]})]})})}}]),n}(i.Component),g=Object(O.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,c){var r=c.getFirebase,s=c.getFirestore,i=r(),a=s();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return a.collection("users").doc(t.user.uid).set({userName:e.userName,img:e.img,role:"guest"})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(v),N=function(){return Object(s.jsx)("header",{className:"mainHeader",children:Object(s.jsxs)("div",{className:"louvFont",children:[Object(s.jsx)("h1",{children:" Welcome to Louvre"}),Object(s.jsx)("h5",{children:" Watch. Read. Share."})]})})},C=function(){return Object(s.jsx)("footer",{class:"footerMain louvColor ",children:Object(s.jsx)("div",{class:"footerContent",children:Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:"https://www.instagram.com/bixxter_/",className:"louvFont white-text",target:"_blank",children:"bixxter"})})})})},E=Object(O.b)((function(e){return{profile:e.firebase.profile,auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.profile,n=e.auth,c="neo"===t.role?Object(s.jsx)(b.c,{to:"/create",children:"Create opinion"}):null;return n.uid?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{children:c}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/userprofile",children:t.userName})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{onClick:e.signOut,children:"Log Out"})})]}):Object(s.jsx)(p.a,{to:"/signin"})})),S=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/signup",children:"Sign Up"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/signin",children:"Login"})})]})};var y=Object(O.b)((function(e){return{profile:e.firebase.profile}}))((function(e){return Object(s.jsxs)("div",{className:"user-view",children:[Object(s.jsx)("div",{className:"background",children:Object(s.jsx)("img",{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f41cdc64-679a-4284-9d6f-3e75890cdf70/ddmntt4-8045c4e4-48bd-4a27-a795-07067ca5265f.jpg/v1/fill/w_1264,h_632,q_70,strp/deviantart_banner_by_astrospaze_ddmntt4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC9mNDFjZGM2NC02NzlhLTQyODQtOWQ2Zi0zZTc1ODkwY2RmNzBcL2RkbW50dDQtODA0NWM0ZTQtNDhiZC00YTI3LWE3OTUtMDcwNjdjYTUyNjVmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.B68ClwHam1WzfazJ8GUu1td-2CcVGgpkd4HORhyJdAo"})}),Object(s.jsx)(b.b,{to:"/userprofile",children:Object(s.jsx)("img",{className:"circle",src:e.profile.img})}),Object(s.jsx)(b.b,{to:"/userprofile",children:Object(s.jsx)("span",{className:"white-text name",children:e.profile.userName})}),Object(s.jsx)("a",{href:"#email",children:Object(s.jsx)("span",{className:"white-text email",children:e.profile.email})})]})})),k=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,c=t.uid?Object(s.jsx)(E,{profile:n}):Object(s.jsx)(S,{}),r=t.uid?Object(s.jsx)(y,{profile:n}):null;return Object(s.jsxs)("nav",{className:"nav-wrapper louvColor navBar",children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(b.b,{to:"/",className:"brand-logo louvFont",children:"Louvre"}),Object(s.jsx)("a",{href:"#","data-target":"slide-out",className:"sidenav-trigger",children:Object(s.jsx)("i",{class:"material-icons",children:"menu"})}),Object(s.jsx)("div",{className:"hide-on-med-and-down",children:Object(s.jsx)("ul",{className:"right ",children:c})})]}),Object(s.jsxs)("ul",{id:"slide-out",class:"sidenav navBarMob",children:[Object(s.jsx)("li",{children:r}),Object(s.jsx)("li",{children:Object(s.jsx)(b.c,{to:"/",className:"louvFont",children:"Louvre"})}),c]})]})})),I=n(139),R=n.n(I),_=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.post.id},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.post;return Object(s.jsx)("div",{className:"post",children:Object(s.jsxs)("div",{className:"card z-depth-0",children:[Object(s.jsx)("div",{className:"card-image postImage",children:Object(s.jsx)("img",{src:e.img,alt:""})}),Object(s.jsx)("div",{className:"card-content postContent",children:Object(s.jsx)("span",{className:"card-title postTitle",children:e.title})})]})})}}]),n}(i.Component),w=Object(O.b)((function(e){return{profile:e.firebase.profile}}))((function(e,t){var n=e.posts,c=t.profile;return n?Object(s.jsx)("div",{className:"gallery",children:Object(s.jsx)("div",{className:"section posts container",children:n&&n.map((function(e){return Object(s.jsx)(b.b,{to:"/post/"+e.id,children:Object(s.jsx)(_,{post:e,profile:c})},e.id)}))})}):Object(s.jsx)("div",{className:"mainLoader",children:Object(s.jsx)("div",{className:"preloader-wrapper big active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-blue-only ",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})})})})),F=n(32),T=n(25),L=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.posts;return e.auth.uid?Object(s.jsx)("div",{children:Object(s.jsx)(w,{posts:t})}):Object(s.jsx)(p.a,{to:"/signin"})}}]),n}(i.Component),U=Object(T.d)(Object(O.b)((function(e){return{posts:e.firestore.ordered.posts,auth:e.firebase.auth}})),Object(F.firestoreConnect)([{collection:"posts"}]))(L),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={title:"",video:"",content:"",img:""},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createPost(e.state),e.props.history.push("/")},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.profile;return t.uid?"neo"!==n.role?Object(s.jsx)(p.a,{to:"/"}):Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(s.jsx)("h5",{className:"grey-text text-darken-3",children:"Create new opinion"}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"title",children:"Title"}),Object(s.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"video",children:"Media"}),Object(s.jsx)("textarea",{id:"video",className:"materialize-textarea",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"content",children:"Content"}),Object(s.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})]}),Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("label",{htmlFor:"img",children:"Image"}),Object(s.jsx)("input",{type:"text",id:"img",onChange:this.handleChange})]}),Object(s.jsx)("div",{className:"input-field",children:Object(s.jsx)("button",{className:"btn louvColor lighten-1 z-depth-0",children:"Create"})})]})}):Object(s.jsx)(p.a,{to:"/signin"})}}]),n}(i.Component),P=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{createPost:function(t){return e(function(e){return function(t,n,r){var s=(0,r.getFirestore)(),i=n().firebase.profile,a=n().firebase.auth.uid;s.collection("posts").add(Object(c.a)(Object(c.a)({},e),{},{authorUserName:i.userName,authorId:a,createdAt:new Date,likes:0,comments:[]})).then((function(){t({type:"CREATE_POST_SUCCESS",post:e})})).catch((function(e){t({type:"CREATE_POST_ERROR",err:e})}))}}(t))}}}))(D),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={postId:e.props.postId,userId:e.props.auth.uid,userName:e.props.profile.userName,userImg:e.props.profile.img,comment:""},e.handleChange=function(t){e.setState(Object(r.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.leaveComment(e.state),t.target.reset()},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.post,c=t.auth,r=t.profile;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"input-field",children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsx)("label",{htmlFor:"comment",children:"Comment"}),Object(s.jsx)("textarea",{id:"comment",className:"materialize-textarea",onChange:this.handleChange}),Object(s.jsx)("button",{type:"submit",className:"btn z-depth-0 louvColor",children:"Leave a comment"})]})}),Object(s.jsx)("div",{className:"comments",children:n.comments&&n.comments.map((function(t,n){return Object(s.jsxs)("div",{className:"commentBlock z-depth-1",children:[Object(s.jsx)("div",{className:"commentImg",children:Object(s.jsx)("img",{src:t.userImg,alt:"userImg",className:"circle responsive-img"})}),Object(s.jsxs)("div",{className:"commentContent",children:[Object(s.jsx)("span",{className:"card-title",children:t.userName}),Object(s.jsx)("p",{children:t.comment})]}),Object(s.jsx)("div",{className:"deleteComment",children:c.uid===t.userId||"neo"===r.role?Object(s.jsx)("button",{className:"btn z-depth-0 louvColor",onClick:function(n){n.preventDefault(),e.props.deleteComment(t)},children:Object(s.jsx)("i",{className:"material-icons",children:"clear"})}):null})]},n)}))})]})}}]),n}(i.Component),z=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{leaveComment:function(t){return e(function(e){return function(t,n,c){var r=c.getFirestore,s=c.getFirebase,i=r(),a=s();console.log(e),i.collection("posts").doc(e.postId).update({comments:a.firestore.FieldValue.arrayUnion(e)}).then((function(){t({type:"COMMENT_SUCCESS",comment:e})})).catch((function(e){t({type:"COMMENT_ERROR",err:e})}))}}(t))},deleteComment:function(t){return e(function(e){return function(t,n,c){var r=c.getFirestore,s=c.getFirebase,i=r(),a=s();console.log(e),i.collection("posts").doc(e.postId).update({comments:a.firestore.FieldValue.arrayRemove(e)}).then((function(){t({type:"DELETE_COMMENT_SUCCESS",comment:e})})).catch((function(e){t({type:"DELETE_COMMENT_ERROR",err:e})}))}}(t))}}}))(M),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.post,c=t.auth,r=t.postId,i=t.profile;return c.uid?n?Object(s.jsx)("div",{className:"container section postDetail",children:Object(s.jsx)("div",{className:"card z-depth-0",children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsxs)("div",{className:"postTitle",children:[Object(s.jsx)("span",{className:"card-title",children:n.title}),Object(s.jsx)("button",{className:"btn z-depth-0 grey",onClick:function(t){e.props.history.push("/")},children:Object(s.jsx)("i",{className:"material-icons",children:"chevron_left"})}),"neo"===i.role?Object(s.jsx)("div",{className:"delPost right",children:Object(s.jsx)("button",{className:"btn z-depth-0 red",onClick:function(t){t.preventDefault(),e.props.deletePost(r),e.props.history.push("/")},children:Object(s.jsx)("i",{className:"material-icons",children:"clear"})})}):null]}),Object(s.jsx)("div",{class:"video-container",children:Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:n.video}})}),Object(s.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}}),Object(s.jsx)("div",{className:"like",children:Object(s.jsxs)("button",{className:"btn black pulse",onClick:function(t){t.preventDefault(),e.props.likePost(r)},children:[Object(s.jsx)("i",{class:"material-icons white-text",children:"flash_on"}),n.likes]})}),Object(s.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(s.jsxs)("div",{children:["Posted by: ",n.authorUserName]}),Object(s.jsx)("div",{children:R()(n.createdAt.toDate()).calendar()})]}),Object(s.jsx)("div",{className:"comments",children:Object(s.jsx)(z,{post:n,postId:r})})]})})}):Object(s.jsx)("div",{class:"progress",children:Object(s.jsx)("div",{class:"indeterminate"})}):Object(s.jsx)(p.a,{to:"/signin"})}}]),n}(i.Component),G=Object(T.d)(Object(O.b)((function(e,t){var n=t.match.params.id,c=e.firestore.data.posts;return{post:c?c[n]:null,auth:e.firebase.auth,profile:e.firebase.profile,users:e.firestore.data.users,postId:n}}),(function(e){return{likePost:function(t){return e(function(e){return function(t,n,c){var r=c.getFirestore,s=c.getFirebase,i=r(),a=s();i.collection("posts").doc(e).update({likes:a.firestore.FieldValue.increment(1)}).then((function(){t({type:"LIKE_SUCCESS",postToLike:e})})).catch((function(e){t({type:"LIKE_ERROR",err:e})}))}}(t))},deletePost:function(t){return e(function(e){return function(t,n,c){var r=c.getFirestore,s=c.getFirebase,i=r();s(),i.collection("posts").doc(e).delete().then((function(){t({type:"DELETE_POST_SUCCESS",post:e})})).catch((function(e){t({type:"DELETE_POST_ERROR",err:e})}))}}(t))}}})),Object(F.firestoreConnect)([{collection:"posts"},{collection:"users"}]))(A),J=n(214),W=n.n(J),X=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector("#slide-out");W.a.Sidenav.init(e,{})}},{key:"render",value:function(){return Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(N,{}),Object(s.jsx)(k,{}),Object(s.jsx)("main",{children:Object(s.jsxs)(p.d,{children:[Object(s.jsx)(p.b,{exact:!0,path:"/",component:U}),Object(s.jsx)(p.b,{path:"/post/:id",component:G}),Object(s.jsx)(p.b,{path:"/signin",component:x}),Object(s.jsx)(p.b,{path:"/signup",component:g}),Object(s.jsx)(p.b,{path:"/create",component:P}),Object(s.jsx)(p.b,{path:"/userprofile",component:m})]})}),Object(s.jsx)(C,{})]})})}}]),n}(i.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,410)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))},V={authError:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("fail"),Object(c.a)(Object(c.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout succes"),e;case"SIGNUP_ERROR":return console.log("signup success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup fail"),Object(c.a)(Object(c.a)({},e),{},{authError:t.err.message});default:return e}},Q={post:[{id:1,title:"lol kek",content:"cheburek rek rek erk"},{id:2,title:"lol kek",content:"cheburek rek rek erk"},{id:3,title:"lol kek",content:"cheburek rek rek erk"}]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST_SUCCESS":return console.log("created post",t.post),e;case"CREATE_POST_ERROR":return console.log("create post error",t.err),e;case"DELETE_POST_SUCCESS":return console.log("created post",t.post),e;case"DELETE_POST_ERROR":return console.log("create post error",t.err),e;case"LIKE_SUCCESS":return console.log("liked post",t.postToLike),e;case"LIKE_ERROR":return console.log("like error",t.err),e;case"COMMENT_SUCCESS":return console.log("commented post",t.comment),e;case"COMMENT_ERROR":return console.log("commented error",t.err),e;case"DELETE_COMMENT_SUCCESS":return console.log("deleted post comment",t.comment),e;case"DELETE_COMMENT_ERROR":return console.log("deleted post comment error",t.err),e;default:return e}},H=n(54),K=Object(T.c)({auth:Z,post:Y,firestore:H.firestoreReducer,firebase:F.firebaseReducer}),q=n(215),$=n(67);n(405),n(407);$.a.initializeApp({apiKey:"AIzaSyCd0Q4ezDFxqsuWg997QfNo-dkdTSfpLwY",authDomain:"belekcheck.firebaseapp.com",projectId:"belekcheck",storageBucket:"belekcheck.appspot.com",messagingSenderId:"804974182946",appId:"1:804974182946:web:ed81b672aebef07567807b"});var ee,te=$.a,ne=Object(T.e)(K,Object(T.d)(Object(T.a)(q.a.withExtraArgument({getFirestore:H.getFirestore,getFirebase:F.getFirebase})),Object(H.reduxFirestore)(te))),ce=(ee={firebase:$.a,config:te},Object(r.a)(ee,"config",{userProfile:"users",useFirestoreForProfile:!0}),Object(r.a)(ee,"dispatch",ne.dispatch),Object(r.a)(ee,"createFirestoreInstance",H.createFirestoreInstance),ee);function re(e){var t=e.children,n=Object(O.c)((function(e){return e.firebase.auth}));return Object(F.isLoaded)(n)?t:Object(s.jsx)("div",{className:"progress centr2",children:Object(s.jsx)("div",{className:"indeterminate"})})}l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O.a,{store:ne,children:Object(s.jsx)(F.ReactReduxFirebaseProvider,Object(c.a)(Object(c.a)({},ce),{},{children:Object(s.jsx)(re,{children:Object(s.jsx)(X,{})})}))})}),document.getElementById("root")),B()}},[[409,1,2]]]);
//# sourceMappingURL=main.eddb519f.chunk.js.map