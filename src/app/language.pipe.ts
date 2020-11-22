import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  languageSet = {
    ENGLISH: {
      HELLO: "Hello",
      HOME: "Home",
      LOGIN: "Login",
      SIGNUP: "SignUp",
      LIFECYCLE: "LifeCycle",
      DUMMY: "Dummy",
      PAGINATION: "Pagination",
      USERLIST: "User List",
      USERVIEW: "User View",
      CONTACT: "Contact",
/////////////login
      LOGINPAGE: "Login Page",
      ENTERUSERNAME: "Enter Username",
      USERNAMEISREQUIERD: "UserName Is Requierd",
      ENTERPASSWORD: "Enter Password",
      PASSWORDISREQUIERD: "Password Is Requierd",
      Login: "Login",
      REMEMBERPASSWORD:"Remember Password",
      /////////////signup
      FIRSTNAME: "First Name",
      PAGE: "Page",
      FILL: "Fill in this form to create an account",
      LASTNAME: "Last Name",
      GENDER: "Gender",
      MALE: "Male",
      FEMALE: "Female",
      NEWPASSWORD: "New Password",
      CONFIRMPASSWORD: "Confirm Password",
      ACCEPT: "I Acceptthe Terms of Use & Privacy Policy",
      ///////pagination
      ID: "ID",
      NAME: "Name",
      MESSAGE:"Message",
      FIRST:"First",
      LAST:"Last",
      ITEMPERPAGES:"Item Per Pages",
      /////////userlist
     AGE:"Age",
     VIEWPROFILE:"ViewProfile"
     /////////USERVIEW

    },
    TAMIL: {
      HELLO: "வணக்கம்",
      HOME: "முகப்பு",
      LOGIN: "உள்நுழைய",
      SIGNUP: "பதிவுபெறுதல்",
      LIFECYCLE: "வாழ்க்கை சுழற்சி",
      DUMMY: "போலி",
      PAGINATION: "பக்கம்",
      USERLIST: "பயனர் பட்டியல்",
      USERVIEW: "பயனர் பார்வை",
      CONTACT: "தொடர்பு",
      /////////login
      LOGINPAGE: "உள்நுழைவு பக்கம்",
      ENTERUSERNAME: "பயனர்பெயரை உள்ளிடவும்",
      USERNAMEISREQUIERD: "பயனர் பெயர் தேவைப்படுகிறது",
      ENTERPASSWORD: "கடவுச்சொல்லை உள்ளிடவும்",
      PASSWORDISREQUIERD: "கடவுச்சொல் தேவைப்படுகிறது",
      REMEMBERPASSWORD:"கடவுச்சொல்லை நினைவுகொள்",
     /////////////signup
     FIRSTNAME: "முதல் பெயர்",
     PAGE: "பக்கம்",
     FILL: "ஒரு கணக்கை உருவாக்க இந்த படிவத்தை நிரப்பவும்",
     LASTNAME: "கடைசி பெயர்",
     GENDER: "பாலினம்",
     MALE: "ஆண்",
     FEMALE: "பெண்",
     NEWPASSWORD: "புதிய கடவுச்சொல்",
     CONFIRMPASSWORD: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
     ACCEPT: "பயன்பாட்டு விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை நான் ஏற்றுக்கொள்கிறேன்",

    ///////pagination
    ID: "அடையாளம்",
    NAME: "பெயர்",
    MESSAGE:"செய்தி",
    FIRST:"முதல்",
    LAST:"கடந்த",
    ITEMPERPAGES:"பக்கங்களுக்கான பொருள்",
    /////////userlist
    AGE:"வயது",
    VIEWPROFILE:"சுயவிவரம் காண"
    /////////USERVIEW


    },
    HINDI: {
      HELLO: "नमस्कार",
      HOME: "घर",
      LOGIN: "लॉग इन",
      SIGNUP: "साइन अप करें",
      LIFECYCLE: "जीवनकाल",
      DUMMY: " डमी",
      PAGINATION: "पृष्ठ",
      USERLIST: "उपयोगकर्ता सूची",
      USERVIEW: "उपयोगकर्ता देखें",
      CONTACT: "संपर्क करें",
      /////////login
      LOGINPAGE: "लॉगिन वाला पन्ना",
      ENTERUSERNAME: "उपयोगकर्ता नाम दर्ज करें",
      USERNAMEISREQUIERD: "उपयोगकर्ता नाम आवश्यक है",
      ENTERPASSWORD: "पास वर्ड दर्ज करें",
      PASSWORDISREQUIERD: "पासवर्ड आवश्यक है",
      REMEMBERPASSWORD:"पासवर्ड याद रखें",
      /////////////signup
      FIRSTNAME: "पहला नाम",
      PAGE: "पृष्ठ",
      FILL: "खाता बनाने के लिए इस फॉर्म को भरें",
      LASTNAME: "उपनाम",
      GENDER: "लिंग",
      MALE: "नर",
      FEMALE: "मादा",
      NEWPASSWORD: "नया पासवर्ड",
      CONFIRMPASSWORD: "पासवर्ड की पुष्टि कीजिये",
      ACCEPT: "मैं उपयोग की शर्तें और गोपनीयता नीति स्वीकार करता हूं",
      ///////pagination
    ID: "पहचान",
    NAME: "नाम",
    MESSAGE:"संदेश",
    FIRST:"प्रथम",
    LAST:"पिछले",
    ITEMPERPAGES:"आइटम प्रति पृष्ठ",
    /////////userlist
    AGE:"आयु",
    VIEWPROFILE:"प्रोफाइल देखिये"
    /////////USERVIEW
    },


    CHINESE: {
      HELLO: "你好",
      HOME: "家",
      LOGIN: "登录",
      SIGNUP: "注册",
      LIFECYCLE: "生命周期",
      DUMMY: "假",
      PAGINATION: "页",
      USERLIST: "用户列表",
      USERVIEW: "用户视图",
      CONTACT: "联系",
      //////////////login
      LOGINPAGE: "登录页面",
      ENTERUSERNAME: "输入用户名",
      USERNAMEISREQUIERD: "需要用户名",
      ENTERPASSWORD: "输入密码",
      PASSWORDISREQUIERD: "需要密码",
      REMEMBERPASSWORD:"记住密码",
      /////////////signup
     FIRSTNAME: "名字",
     PAGE: "页",
     FILL: "填写此表格以创建一个帐户",
     LASTNAME: "姓",
     GENDER: "性别",
     MALE: "男",
     FEMALE: "女",
     NEWPASSWORD: "新密码",
     CONFIRMPASSWORD: "确认密码",
     ACCEPT: "我接受使用条款和隐私政策",
       ///////pagination
    ID: "身分识别",
    NAME: "名称",
    MESSAGE:"信息",
    FIRST:"第一",
    LAST:"持续",
    ITEMPERPAGES:"每页项目",
    /////////userlist
    AGE:"年龄",
    VIEWPROFILE:"查看资料"
    /////////USERVIEW


    }
  }

  transform(value: string, ...args: unknown[]): unknown {
    let language = "ENGLISH";
    value = value.toUpperCase();
    if (this.languageSet[language][value]) {
      return this.languageSet[language][value];
    }
    return 'jegan';
  }

}
