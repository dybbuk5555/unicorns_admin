"use strict";(self.webpackChunkCrypto_Unicorns_Admin=self.webpackChunkCrypto_Unicorns_Admin||[]).push([[1402],{31402:function(e,s,t){t.r(s);s.default={common:{or:"or",cancel:"Cancel",reset:"Reset",save:"Save",search:"Search",edit:"Edit",new:"New",export:"Export to Excel",noDataToExport:"No data to export",import:"Import",discard:"Discard",yes:"Yes",no:"No",pause:"Pause",areYouSure:"Are you sure?",view:"View",destroy:"Delete",mustSelectARow:"Must select a row",start:"Start",end:"End",select:"Select",continue:"Continue",filters:"Filters",more:"More"},app:{title:"Crypto Unicoins"},auth:{tenants:"Companies",profile:{title:"Profile",success:"Profile successfully updated"},createAnAccount:"Create an account",rememberMe:"Remember me",forgotPassword:"Forgot password",signin:"Sign in",signup:"Sign up",signout:"Sign out",alreadyHaveAnAccount:"Already have an account? Sign in.",social:{errors:{"auth-invalid-provider":"This email is already registered to another provider.","auth-no-email":"The email associated with this account is private or inexistent."}},signinWithAnotherAccount:"Sign in with another account",emailUnverified:{message:"Please confirm your email at <strong>{0}</strong> to continue.",submit:"Resend email verification"},emptyPermissions:{message:"You have no permissions yet. Wait for the admin to grant you privileges."},passwordResetEmail:{message:"Send password reset email",error:"Email not recognized"},passwordReset:{message:"Reset password"},passwordChange:{title:"Change Password",success:"Password successfully changed",mustMatch:"Passwords must match"},emailAddressVerificationEmail:{error:"Email not recognized"},verificationEmailSuccess:"Verification email successfully sent",passwordResetEmailSuccess:"Password reset email successfully sent",passwordResetSuccess:"Password successfully changed",verifyEmail:{success:"Email successfully verified.",message:"Just a moment, your email is being verified..."}},roles:{admin:{label:"Admin",description:"Full access to all resources"},custom:{label:"Custom Role",description:"Custom role access"}},user:{fields:{id:"Id",avatars:"Avatar",email:"Email",emails:"Email(s)",fullName:"Name",firstName:"First Name",lastName:"Last Name",status:"Status",phoneNumber:"Phone Number",role:"Role",createdAt:"Created at",updatedAt:"Updated at",roleUser:"Role/User",roles:"Roles",createdAtRange:"Created at",password:"Password",oldPassword:"Old Password",newPassword:"New Password",newPasswordConfirmation:"New Password Confirmation",rememberMe:"Remember me"},status:{active:"Active",invited:"Invited","empty-permissions":"Waiting for Permissions"},invite:"Invite",validations:{email:"Email ${value} is invalid"},title:"Users",menu:"Users",doAddSuccess:"User(s) successfully saved",doUpdateSuccess:"User successfully saved",exporterFileName:"users_export",doDestroySuccess:"User successfully deleted",doDestroyAllSelectedSuccess:"Users successfully deleted",edit:{title:"Edit User"},new:{title:"Invite User(s)",titleModal:"Invite User",emailsHint:"Separate multiple email addresses using the comma character."},view:{title:"View User",activity:"Activity"},importer:{title:"Import Users",fileName:"users_import_template",hint:"Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space."},errors:{userAlreadyExists:"User with this email already exists",userNotFound:"User not found",revokingOwnPermission:"You can't revoke your own admin permission"}},auditLog:{menu:"Audit Logs",title:"Audit Logs",exporterFileName:"audit_log_export",entityNamesHint:"Separate multiple entities using the comma character.",fields:{id:"Id",timestampRange:"Period",entityName:"Entity",entityNames:"Entities",entityId:"Entity ID",action:"Action",values:"Values",timestamp:"Date",createdByEmail:"User Email"}},settings:{title:"Settings",menu:"Settings",save:{success:"Settings successfully saved. The page will reload in {0} seconds for changes to take effect."},fields:{primary:"Primary Color",secondary:"Secondary Color",logos:"Logo",backgroundImages:"Background Images",shade:"Shade"}},home:{name:"home",label:"Home",menu:"Home",overview:"Overview",sold:"Most sold bundles",card1:{title:"Total sales value",count:""},card2:{title:"# of sales"}},bundle:{name:"bundle",label:"Bundles",menu:"Bundles",create:{success:"Bundle successfully saved"},update:{success:"Bundle successfully saved"},destroy:{success:"Bundle successfully deleted"},destroyAll:{success:"Bundle(s) successfully deleted"},edit:{title:"Bundle Store"},fields:{},enumerators:{},placeholders:{},hints:{},new:{title:"New Bundle"},view:{title:"View Bundle"}},segment:{name:"segment",menu:"Segments"},rebate:{name:"rebate",menu:"Rebates"},experiment:{name:"experiment",menu:"Experiments"},errors:{backToHome:"Back to home",403:"Sorry, you don't have access to this page",404:"Sorry, the page you visited does not exist",500:"Sorry, the server is reporting an error",429:"Too many requests. Please try again later.",forbidden:{message:"Forbidden"},validation:{message:"An error occurred"},defaultErrorMessage:"Ops, an error occurred"},preview:{error:"Sorry, this operation is not allowed in preview mode."},validation:{mixed:{default:"${path} is invalid",required:"${path} is required",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:function(e){var s=e.path,t=e.type;e.value,e.originalValue;return"".concat(s," must be a ").concat(t)}},string:{length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string",selected:"${path} must be selected"},number:{min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",notEqual:"${path} must be not equal to ${notEqual}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},date:{min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},boolean:{},object:{noUnknown:"${path} field cannot have keys not specified in the object shape"},array:{min:function(e){var s=e.min,t=e.path;return 1===s?"".concat(t," is required"):"".concat(t," field must have at least ").concat(s," items")},max:"${path} field must have less than or equal to ${max} items"}},fileUploader:{upload:"Upload",image:"You must upload an image",size:"File is too big. Max allowed size is {0}",formats:"Invalid format. Must be one of: {0}."},importer:{line:"Line",status:"Status",pending:"Pending",imported:"Imported",error:"Error",total:"{0} imported, {1} pending and {2} with error",importedMessage:"Processed {0} of {1}.",noNavigateAwayMessage:"Do not navigate away from this page or import will be stopped.",completed:{success:"Import completed. All rows were successfully imported.",someErrors:"Processing completed, but some rows were unable to be imported.",allErrors:"Import failed. There are no valid rows."},form:{downloadTemplate:"Download the template",hint:"Click or drag the file to this area to continue"},list:{discardConfirm:"Are you sure? Non-imported data will be lost."},errors:{invalidFileEmpty:"The file is empty",invalidFileExcel:"Only excel (.xlsx) files are allowed",invalidFileUpload:"Invalid file. Make sure you are using the last version of the template.",importHashRequired:"Import hash is required",importHashExistent:"Data has already been imported"}},autocomplete:{loading:"Loading...",noOptions:"No data found"},customViewer:{default:"No Data",noData:"No {0}"},imagesViewer:{noImage:"No image"},table:{noData:"No records found",loading:"Loading..."},pagination:{labelDisplayedRows:"{0}-{1} of {2}",labelRowsPerPage:"Per page:"}}}}]);