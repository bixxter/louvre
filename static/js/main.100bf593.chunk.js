(this.webpackJsonplouvre=this.webpackJsonplouvre||[]).push([[0],{221:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var c=n(23),s=n(15),r=n(0),i=n(2),a=n.n(i),l=n(92),o=n.n(l),d=(n(221),n(11)),j=n(12),u=n(14),h=n(13),b=n(6),p=n(9),O=n(4);var m=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.profile,n=e.auth;return n.uid?Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"card hogBlock profileCard louvColor",children:[Object(r.jsx)("img",{src:t.img,alt:"userImg",className:"responsive-img"}),Object(r.jsxs)("div",{className:" profileText louvFont",children:[Object(r.jsx)("p",{className:"louvFont",children:t.userName}),Object(r.jsxs)("p",{children:["e-mail: ",n.email]}),Object(r.jsxs)("p",{children:["role: ","neo"===t.role?"neo":t.role]})]})]})}):Object(r.jsx)(p.a,{to:"/signin"})})),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(r.jsx)(p.a,{to:"/"}):Object(r.jsx)("div",{className:"container louvColor",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white ",children:[Object(r.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn z-depth-0 louvColor",children:"Log in"}),Object(r.jsx)("div",{className:"red-text center",children:t?Object(r.jsx)("p",{children:t}):null})]})]})})}}]),n}(i.Component),f=Object(O.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,c){(0,c.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(x),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",userName:"",img:"https://i2.wp.com/www.vooks.net/img/2016/06/HddtBOT.png?fit=1920%2C1080&ssl=1"},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;return t.uid?Object(r.jsx)(p.a,{to:"/"}):Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(r.jsx)("h5",{children:"New Inhabitant"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"userName",children:"User name"}),Object(r.jsx)("input",{type:"text",id:"userName",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"img",children:"Link to image for profile picture"}),Object(r.jsx)("input",{type:"text",id:"img",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("button",{className:"btn louvColor z-depth-0",children:"Sign Up"}),Object(r.jsx)("div",{className:"red-text center z-depth-1 p1",children:n?Object(r.jsx)("p",{children:n}):null})]})]})})}}]),n}(i.Component),g=Object(O.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,c){var s=c.getFirebase,r=c.getFirestore,i=s(),a=r();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return a.collection("users").doc(t.user.uid).set({userName:e.userName,img:e.img,role:"guest"})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(v),N=function(){return Object(r.jsx)("header",{className:"mainHeader",children:Object(r.jsxs)("div",{className:"louvFont",children:[Object(r.jsx)("h1",{children:" Welcome to Louvre"}),Object(r.jsx)("h5",{children:" Watch. Read. Share."})]})})},C=function(){return Object(r.jsx)("footer",{class:"footerMain louvColor ",children:Object(r.jsx)("div",{class:"footerContent",children:Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:"https://www.instagram.com/bixxter_/",className:"louvFont white-text",target:"_blank",children:"bixxter"})})})})},E=Object(O.b)((function(e){return{profile:e.firebase.profile,auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.profile,n=e.auth,c="neo"===t.role?Object(r.jsx)(b.c,{to:"/create",children:"Create opinion"}):null;return n.uid?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(b.c,{to:"/users",children:"People"})}),Object(r.jsx)("li",{children:c}),Object(r.jsx)("li",{children:Object(r.jsx)(b.c,{to:"/userprofile",children:t.userName})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{onClick:e.signOut,children:"Log Out"})})]}):Object(r.jsx)(p.a,{to:"/signin"})})),S=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("li",{children:Object(r.jsx)(b.c,{to:"/signup",children:"Sign Up"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.c,{to:"/signin",children:"Login"})})]})};var y=Object(O.b)((function(e){return{profile:e.firebase.profile}}))((function(e){return Object(r.jsxs)("div",{className:"user-view",children:[Object(r.jsx)("div",{className:"background",children:Object(r.jsx)("img",{src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f41cdc64-679a-4284-9d6f-3e75890cdf70/ddmntt4-8045c4e4-48bd-4a27-a795-07067ca5265f.jpg/v1/fill/w_1264,h_632,q_70,strp/deviantart_banner_by_astrospaze_ddmntt4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC9mNDFjZGM2NC02NzlhLTQyODQtOWQ2Zi0zZTc1ODkwY2RmNzBcL2RkbW50dDQtODA0NWM0ZTQtNDhiZC00YTI3LWE3OTUtMDcwNjdjYTUyNjVmLmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.B68ClwHam1WzfazJ8GUu1td-2CcVGgpkd4HORhyJdAo"})}),Object(r.jsx)(b.b,{to:"/userprofile",children:Object(r.jsx)("img",{className:"circle",src:e.profile.img})}),Object(r.jsx)(b.b,{to:"/userprofile",children:Object(r.jsx)("span",{className:"white-text name",children:e.profile.userName})}),Object(r.jsx)("a",{href:"#email",children:Object(r.jsx)("span",{className:"white-text email",children:e.profile.email})})]})})),R=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,c=t.uid?Object(r.jsx)(E,{profile:n}):Object(r.jsx)(S,{}),s=t.uid?Object(r.jsx)(y,{profile:n}):null;return Object(r.jsxs)("nav",{className:"nav-wrapper louvColor navBar",children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(b.b,{to:"/",className:"brand-logo louvFont",children:"Louvre"}),Object(r.jsx)("a",{href:"#","data-target":"slide-out",className:"sidenav-trigger",children:Object(r.jsx)("i",{class:"material-icons",children:"menu"})}),Object(r.jsx)("div",{className:"hide-on-med-and-down",children:Object(r.jsxs)("ul",{className:"right ",children:[Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/welcome",children:"About"})}),c]})})]}),Object(r.jsxs)("ul",{id:"slide-out",class:"sidenav navBarMob",children:[Object(r.jsx)("li",{children:s}),Object(r.jsx)("li",{children:Object(r.jsx)(b.c,{to:"/",className:"louvFont",children:"Louvre"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/welcome",children:"About"})}),c]})]})})),w=n(94),_=n.n(w),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={id:e.props.post.id},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.post;return Object(r.jsx)("div",{className:"post",children:Object(r.jsxs)("div",{className:"card z-depth-0",children:[Object(r.jsx)("div",{className:"card-image postImage",children:Object(r.jsx)("img",{src:e.img,alt:""})}),Object(r.jsx)("div",{className:"card-content postContent",children:Object(r.jsx)("span",{className:"card-title postTitle",children:e.title})}),Object(r.jsx)("div",{className:"card-content greytext text-darken-3",children:_()(e.createdAt.toDate()).calendar()})]})})}}]),n}(i.Component),I=Object(O.b)((function(e){return{profile:e.firebase.profile}}))((function(e,t){var n=e.posts,c=t.profile;return n?Object(r.jsx)("div",{className:"gallery",children:Object(r.jsx)("div",{className:"section posts container",children:n&&n.map((function(e){return Object(r.jsx)(b.b,{to:"/post/"+e.id,children:Object(r.jsx)(k,{post:e,profile:c})},e.id)}))})}):Object(r.jsx)("div",{className:"mainLoader",children:Object(r.jsx)("div",{className:"preloader-wrapper big active",children:Object(r.jsxs)("div",{className:"spinner-layer spinner-blue-only ",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})})})})),F=n(26),T=n(19),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.posts;return e.auth.uid?Object(r.jsx)("div",{children:Object(r.jsx)(I,{posts:t})}):Object(r.jsx)(p.a,{to:"/welcome"})}}]),n}(i.Component),L=Object(T.d)(Object(O.b)((function(e){return{posts:e.firestore.ordered.posts,auth:e.firebase.auth}})),Object(F.firestoreConnect)([{collection:"posts"}]))(D),U=Object(T.d)(Object(O.b)((function(e){return{users:e.firestore.data.users,auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{deleteUser:function(t){return e(function(e){return function(t,n,c){var s=c.getFirestore;c.getFirebase,s().collection("users").doc(e).delete().then((function(){t({type:"DELETE_USER_SUCCESS",user:e})})).catch((function(e){t({type:"DELETE_USER_ERROR",err:e})}))}}(t))}}})),Object(F.firestoreConnect)([{collection:"users"}]))((function(e){var t=e.users,n=e.profile;return t?Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"usersList",children:t&&Object.keys(t).map((function(c,s){return Object(r.jsxs)("div",{className:"card user louvColor",children:["neo"===n.role?Object(r.jsx)("button",{className:"btn z-depth-0 louvColor",onClick:function(t){t.preventDefault(),e.deleteUser(c),e.history.push("/users")},children:Object(r.jsx)("i",{className:"material-icons",children:"clear"})}):null,Object(r.jsx)("img",{src:t[c]&&t[c].img,alt:"userImg",className:"responsive-img"}),Object(r.jsx)("div",{className:"userText louvFont",children:Object(r.jsx)("p",{className:"louvFont",children:t[c]&&t[c].userName})})]})}))})}):Object(r.jsx)("div",{className:"mainLoader",children:Object(r.jsx)("div",{className:"preloader-wrapper big active",children:Object(r.jsxs)("div",{className:"spinner-layer spinner-blue-only ",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})})})})),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={title:"",video:"",content:"",img:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createPost(e.state),e.props.history.push("/")},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.profile;return t.uid?"neo"!==n.role?Object(r.jsx)(p.a,{to:"/"}):Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(r.jsx)("h5",{className:"grey-text text-darken-3",children:"Create new opinion"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title"}),Object(r.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"video",children:"Media"}),Object(r.jsx)("textarea",{id:"video",className:"materialize-textarea",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"content",children:"Content"}),Object(r.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"img",children:"Image"}),Object(r.jsx)("input",{type:"text",id:"img",onChange:this.handleChange})]}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("button",{className:"btn louvColor lighten-1 z-depth-0",children:"Create"})})]})}):Object(r.jsx)(p.a,{to:"/signin"})}}]),n}(i.Component),P=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{createPost:function(t){return e(function(e){return function(t,n,s){var r=(0,s.getFirestore)(),i=n().firebase.profile,a=n().firebase.auth.uid;r.collection("posts").add(Object(c.a)(Object(c.a)({},e),{},{authorUserName:i.userName,authorId:a,createdAt:new Date,likes:0,comments:[],answers:[]})).then((function(){t({type:"CREATE_POST_SUCCESS",post:e})})).catch((function(e){t({type:"CREATE_POST_ERROR",err:e})}))}}(t))}}}))(M),z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={postId:e.props.postId,userId:e.props.auth.uid,userName:e.props.profile.userName,userImg:e.props.profile.img,comment:""},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.leaveComment(e.state),t.target.reset()},e.handleSubSubmit=function(t){t.preventDefault(),e.props.subComment(e.state),t.target.reset()},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.post,c=t.auth,s=t.profile;return Object(r.jsxs)("div",{className:"commentsSection",children:[Object(r.jsxs)("p",{children:["Comments ",Object(r.jsx)("span",{className:"green-text",children:n.comments.length})]}),Object(r.jsx)("div",{className:"comments",children:n.comments&&n.comments.map((function(t,n){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"commentBlock z-depth-0",children:[Object(r.jsx)("img",{src:t.userImg,alt:"userImg",className:"circle responsive-img"}),Object(r.jsxs)("div",{className:"commentContent",children:[Object(r.jsx)("span",{children:t.userName}),Object(r.jsx)("p",{children:t.comment}),Object(r.jsx)("span",{className:"commentFunc green-text",children:"answer "}),c.uid===t.userId||"neo"===s.role?Object(r.jsx)("span",{className:"commentFunc",onClick:function(n){n.preventDefault(),e.props.deleteComment(t)},children:"delete"}):null]})]},n)})}))}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Comment"}),Object(r.jsx)("textarea",{id:"comment",className:"materialize-textarea",onChange:this.handleChange}),Object(r.jsx)("button",{type:"submit",className:"btn z-depth-0 louvColor",children:"Leave a comment"})]})})]})}}]),n}(i.Component),A=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{leaveComment:function(t){return e(function(e){return function(t,n,c){var s=c.getFirestore,r=c.getFirebase,i=s(),a=r();console.log(e),i.collection("posts").doc(e.postId).update({comments:a.firestore.FieldValue.arrayUnion(e)}).then((function(){t({type:"COMMENT_SUCCESS",comment:e})})).catch((function(e){t({type:"COMMENT_ERROR",err:e})}))}}(t))},subComment:function(t){return e(function(e){return function(t,n,c){var s=c.getFirestore,r=c.getFirebase,i=s(),a=r();console.log(e),i.collection("posts").doc(e.postId).update({answers:a.firestore.FieldValue.arrayUnion(e)}).then((function(){t({type:"COMMENT_SUCCESS",comment:e})})).catch((function(e){t({type:"COMMENT_ERROR",err:e})}))}}(t))},deleteComment:function(t){return e(function(e){return function(t,n,c){var s=c.getFirestore,r=c.getFirebase,i=s(),a=r();console.log(e),i.collection("posts").doc(e.postId).update({comments:a.firestore.FieldValue.arrayRemove(e)}).then((function(){t({type:"DELETE_COMMENT_SUCCESS",comment:e})})).catch((function(e){t({type:"DELETE_COMMENT_ERROR",err:e})}))}}(t))}}}))(z),W=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={id:e.props.postId,title:e.props.post.title,video:e.props.post.video,content:e.props.post.content,img:e.props.post.img},e.handleChange=function(t){e.setState(Object(s.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.editPost(e.state)},e}return Object(j.a)(n,[{key:"render",value:function(){return"neo"!==this.props.profile.role?Object(r.jsx)(p.a,{to:"/"}):Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(r.jsx)("h5",{className:"grey-text text-darken-3",children:"Change Post"}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"title",children:"Title"}),Object(r.jsx)("input",{type:"text",id:"title",onChange:this.handleChange,value:this.state.title})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"video",children:"Media"}),Object(r.jsx)("textarea",{id:"video",className:"materialize-textarea",onChange:this.handleChange,value:this.state.video})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"content",children:"Content"}),Object(r.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,value:this.state.content})]}),Object(r.jsxs)("div",{className:"input-field",children:[Object(r.jsx)("label",{htmlFor:"img",children:"Image"}),Object(r.jsx)("input",{type:"text",id:"img",onChange:this.handleChange,value:this.state.img})]}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("button",{className:"btn louvColor lighten-1 z-depth-0",children:"Change"})})]})})}}]),n}(i.Component),G=Object(O.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{editPost:function(t){return e(function(e){return function(t,n,c){(0,c.getFirestore)().collection("posts").doc(e.id).update({title:e.title,video:e.video,content:e.content,img:e.img}).then((function(){t({type:"EDITED_POST_SUCCESS",post:e})})).catch((function(e){t({type:"EDITED_POST_ERROR",err:e})}))}}(t))}}}))(W),J=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.post,c=t.auth,s=t.postId,i=t.profile,a=Object(r.jsx)(G,{post:n,postId:s});return c.uid?n?Object(r.jsx)("div",{className:"container section postDetail",children:Object(r.jsx)("div",{className:"card z-depth-0",children:Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("div",{className:"editMode right",children:"neo"===i.role?Object(r.jsx)("button",{className:"btn louvColor",onClick:function(t){t.preventDefault(),e.setState({editMode:!e.state.editMode})},children:!1===this.state.editMode?Object(r.jsx)("i",{class:"material-icons",children:"edit"}):Object(r.jsx)("i",{class:"material-icons",children:"cancel"})}):null}),!0===this.state.editMode?a:null,Object(r.jsxs)("div",{className:"postTitle",children:[Object(r.jsx)("span",{className:"card-title",children:n.title}),Object(r.jsx)("button",{className:"btn z-depth-0 grey",onClick:function(t){e.props.history.push("/")},children:Object(r.jsx)("i",{className:"material-icons",children:"chevron_left"})}),"neo"===i.role?Object(r.jsx)("div",{className:"edit right",children:Object(r.jsx)("div",{className:"delPost",children:Object(r.jsx)("button",{className:"btn z-depth-0 red",onClick:function(t){t.preventDefault(),e.props.deletePost(s),e.props.history.push("/")},children:Object(r.jsx)("i",{className:"material-icons",children:"clear"})})})}):null]}),n.video?Object(r.jsx)("div",{class:"video-container",children:Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.video}})}):null,Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}}),Object(r.jsx)("div",{className:"like",children:Object(r.jsxs)("button",{className:"btn black pulse",onClick:function(t){t.preventDefault(),e.props.likePost(s)},children:[Object(r.jsx)("i",{class:"material-icons white-text",children:"flash_on"}),n.likes]})}),Object(r.jsxs)("div",{className:"card-action grey lighten-4 grey-text",children:[Object(r.jsxs)("div",{children:["Posted by: ",n.authorUserName]}),Object(r.jsx)("div",{children:_()(n.createdAt.toDate()).calendar()})]}),Object(r.jsx)("div",{className:"comments",children:Object(r.jsx)(A,{post:n,postId:s})})]})})}):Object(r.jsx)("div",{class:"progress",children:Object(r.jsx)("div",{class:"indeterminate"})}):Object(r.jsx)(p.a,{to:"/signin"})}}]),n}(i.Component),X=Object(T.d)(Object(O.b)((function(e,t){var n=t.match.params.id,c=e.firestore.data.posts;return{post:c?c[n]:null,auth:e.firebase.auth,profile:e.firebase.profile,users:e.firestore.data.users,postId:n}}),(function(e){return{likePost:function(t){return e(function(e){return function(t,n,c){var s=c.getFirestore,r=c.getFirebase,i=s(),a=r();i.collection("posts").doc(e).update({likes:a.firestore.FieldValue.increment(1)}).then((function(){t({type:"LIKE_SUCCESS",postToLike:e})})).catch((function(e){t({type:"LIKE_ERROR",err:e})}))}}(t))},deletePost:function(t){return e(function(e){return function(t,n,c){var s=c.getFirestore;c.getFirebase,s().collection("posts").doc(e).delete().then((function(){t({type:"DELETE_POST_SUCCESS",post:e})})).catch((function(e){t({type:"DELETE_POST_ERROR",err:e})}))}}(t))}}})),Object(F.firestoreConnect)([{collection:"posts"},{collection:"users"}]))(J),B=n(214),V=n.n(B),Z=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"introContent",children:[Object(r.jsx)("h1",{children:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 Louvre?"}),Object(r.jsx)("p",{children:'\u0417\u0430 \u043a\u0430\u0436\u0434\u044b\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u043c 21\u0432\u0435\u043a\u0430 \u0441\u0442\u043e\u0438\u0442 \u0446\u0435\u043b\u044b\u0439 \u043d\u0435\u0438\u0437\u0432\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u0438\u0440 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u043e\u0433\u043e, \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u043d\u043d\u043e\u0433\u043e, \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430. \u042f \u0441\u0447\u0438\u0442\u0430\u044e, \u0447\u0442\u043e \u0432\u0441\u0435\u043c \u044d\u0442\u0438\u043c \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c \u043d\u0430\u0434\u043e \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f. \u041d\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043b\u0443\u0447\u0448\u0435 \u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e, \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e "\u0412\u0422\u0424" \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430. \u0418\u043c\u0435\u043d\u043d\u043e \u043f\u043e \u044d\u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d Louvre, \u0446\u0435\u043b\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u0432 \u043b\u044e\u0431\u043e\u0439 \u0444\u043e\u0440\u043c\u0435.'}),Object(r.jsxs)("section",{children:[Object(r.jsx)("img",{src:"https://i.ibb.co/rv2jWzK/undraw-design-inspiration-fmjm.png",alt:"",className:"responsive-img"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"\u041c\u041d\u041e\u0413\u041e \u041a\u0420\u0423\u0422\u041e\u0413\u041e \u041a\u041e\u041d\u0422\u0415\u041d\u0422\u0410 \u0412 \u041e\u0414\u041d\u041e\u041c \u041c\u0415\u0421\u0422\u0415"}),Object(r.jsx)("li",{children:"YouTube: \u0416\u0438\u0437\u043d\u044c, \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0435, \u0412\u0410\u0423 \u0438 \u0412\u0422\u0424 \u043a\u043e\u043d\u0442\u0435\u043d\u0442"}),Object(r.jsx)("li",{children:"\u0424\u0438\u043b\u044c\u043c\u044b: \u0420\u0435\u0432\u044c\u044e, \u0441\u0446\u0435\u043d\u044b \u0438 \u043a\u0430\u0434\u0440\u044b"}),Object(r.jsx)("li",{children:"\u041c\u0443\u0437\u044b\u043a\u0430: \u0413\u043e\u0434\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b, \u0430\u043b\u044c\u0431\u043e\u043c\u044b \u0438 \u043a\u043b\u0438\u043f\u044b."}),Object(r.jsx)("li",{children:"\u041f\u043e\u0441\u0442\u044b: \u041e\u043f\u044f\u0442\u044c \u0436\u0435 \u0436\u0438\u0437\u043d\u044c, \u043f\u043e\u043b\u0435\u0437\u043d\u043e\u0435, \u0412\u0410\u0423 \u0438 \u0412\u0422\u0424"})]})]}),Object(r.jsxs)("section",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u0412\u041e\u0417\u041c\u041e\u0416\u041d\u041e\u0421\u0422\u042c \u041e\u0411\u0421\u0423\u0414\u0418\u0422\u042c \u041a\u0420\u0423\u0422\u041e\u0419 \u041a\u041e\u041d\u0422\u0415\u041d\u0422"}),Object(r.jsx)("p",{children:"\u0415\u0441\u043b\u0438 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043f\u043e\u0441\u0442 \u0432\u0430\u0441 \u0443\u0434\u0438\u0432\u0438\u043b, \u0432\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439. \u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u0431\u0443\u0434\u0435\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u0432\u0435\u0447\u0430\u0442\u044c \u043d\u0430 \u0447\u0443\u0436\u0438\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u044b."})]}),Object(r.jsx)("img",{src:"https://i.ibb.co/Z2Dn6wX/undraw-real-time-collaboration-c62i.png",alt:"",className:"responsive-img"})]}),Object(r.jsxs)("section",{children:[Object(r.jsx)("img",{src:"https://i.ibb.co/NsFR5W6/undraw-typewriter-i8xd.png",alt:"",className:"responsive-img"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u041a\u041e\u041d\u0422\u0415\u041d\u0422, \u041a\u041e\u0422\u041e\u0420\u042b\u0419 \u0417\u0410\u0421\u0422\u0410\u0412\u041b\u042f\u0415\u0422 \u0417\u0410\u0414\u0423\u041c\u0410\u0422\u042c\u0421\u042f"}),Object(r.jsx)("p",{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0446\u0435\u043b\u044c\u044e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430 \u043b\u044e\u0431\u043e\u0433\u043e \u0432\u0438\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0445\u043e\u0442\u044c \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u0441\u043f\u0435\u043a\u0442\u0440 \u044d\u043c\u043e\u0446\u0438\u0439"})]})]})]})})},Y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=document.querySelector("#slide-out");V.a.Sidenav.init(e,{})}},{key:"render",value:function(){return Object(r.jsx)(b.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(N,{}),Object(r.jsx)(R,{}),Object(r.jsx)("main",{children:Object(r.jsxs)(p.d,{children:[Object(r.jsx)(p.b,{exact:!0,path:"/",component:L}),Object(r.jsx)(p.b,{exact:!0,path:"/welcome",component:Z}),Object(r.jsx)(p.b,{exact:!0,path:"/users",component:U}),Object(r.jsx)(p.b,{path:"/post/:id",component:X}),Object(r.jsx)(p.b,{path:"/signin",component:f}),Object(r.jsx)(p.b,{path:"/signup",component:g}),Object(r.jsx)(p.b,{path:"/create",component:P}),Object(r.jsx)(p.b,{path:"/userprofile",component:m})]})}),Object(r.jsx)(C,{})]})})}}]),n}(i.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,410)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))},Q={authError:null},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("fail"),Object(c.a)(Object(c.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("success"),Object(c.a)(Object(c.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout succes"),e;case"SIGNUP_ERROR":return console.log("signup error"),Object(c.a)(Object(c.a)({},e),{},{authError:null});default:return e}},q={post:[{id:1,title:"lol kek",content:"cheburek rek rek erk"},{id:2,title:"lol kek",content:"cheburek rek rek erk"},{id:3,title:"lol kek",content:"cheburek rek rek erk"}]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST_SUCCESS":return console.log("created post",t.post),e;case"CREATE_POST_ERROR":return console.log("create post error",t.err),e;case"EDITED_POST_SUCCESS":return console.log("edited post",t.post),e;case"EDITED_POST_ERROR":return console.log("edited post error",t.err),e;case"DELETE_POST_SUCCESS":return console.log("created post",t.post),e;case"DELETE_POST_ERROR":return console.log("create post error",t.err),e;case"LIKE_SUCCESS":return console.log("liked post",t.postToLike),e;case"LIKE_ERROR":return console.log("like error",t.err),e;case"COMMENT_SUCCESS":return console.log("commented post",t.comment),e;case"COMMENT_ERROR":return console.log("commented error",t.err),e;case"DELETE_COMMENT_SUCCESS":return console.log("deleted post comment",t.comment),e;case"DELETE_COMMENT_ERROR":return console.log("deleted post comment error",t.err),e;case"DELETE_USER_SUCCESS":return console.log("deleted user",t.user),e;case"DELETE_USER_ERROR":return console.log("deleted user error",t.err),e;default:return e}},ee=n(54),te=Object(T.c)({auth:K,post:$,firestore:ee.firestoreReducer,firebase:F.firebaseReducer}),ne=n(215),ce=n(67);n(405),n(407);ce.a.initializeApp({apiKey:"AIzaSyCd0Q4ezDFxqsuWg997QfNo-dkdTSfpLwY",authDomain:"belekcheck.firebaseapp.com",projectId:"belekcheck",storageBucket:"belekcheck.appspot.com",messagingSenderId:"804974182946",appId:"1:804974182946:web:ed81b672aebef07567807b"});var se,re=ce.a,ie=Object(T.e)(te,Object(T.d)(Object(T.a)(ne.a.withExtraArgument({getFirestore:ee.getFirestore,getFirebase:F.getFirebase})),Object(ee.reduxFirestore)(re))),ae=(se={firebase:ce.a,config:re},Object(s.a)(se,"config",{userProfile:"users",useFirestoreForProfile:!0}),Object(s.a)(se,"dispatch",ie.dispatch),Object(s.a)(se,"createFirestoreInstance",ee.createFirestoreInstance),se);function le(e){var t=e.children,n=Object(O.c)((function(e){return e.firebase.auth}));return Object(F.isLoaded)(n)?t:Object(r.jsx)("div",{className:"progress centr2",children:Object(r.jsx)("div",{className:"indeterminate"})})}o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O.a,{store:ie,children:Object(r.jsx)(F.ReactReduxFirebaseProvider,Object(c.a)(Object(c.a)({},ae),{},{children:Object(r.jsx)(le,{children:Object(r.jsx)(Y,{})})}))})}),document.getElementById("root")),H()}},[[409,1,2]]]);
//# sourceMappingURL=main.100bf593.chunk.js.map