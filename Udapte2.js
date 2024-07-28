const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "237652145256" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "237695809111";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237652145256";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_19_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkxLFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5V2x2RmZXUHE4V04rVFFSVmRKU25WVyszdFdYc3JJdWJMRHQ4bDVNWE1VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0aVVqVEQ1M1JPdUlyUEhnV19qV01BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFmYjQzZmY2LTllYmEtNDc4Yy04MjkxLWQ3YmUxNWM2N2FiNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyNDYsXG4gICAgICA1MixcbiAgICAgIDE3NSxcbiAgICAgIDM0LFxuICAgICAgMSxcbiAgICAgIDE0NixcbiAgICAgIDEyNixcbiAgICAgIDIzNCxcbiAgICAgIDI1NCxcbiAgICAgIDE5OCxcbiAgICAgIDEwOSxcbiAgICAgIDI0NCxcbiAgICAgIDE0NSxcbiAgICAgIDE0MSxcbiAgICAgIDE0MSxcbiAgICAgIDE5NCxcbiAgICAgIDI0MSxcbiAgICAgIDgxLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyMzcsXG4gICAgICAyMDYsXG4gICAgICAyMjQsXG4gICAgICA1MSxcbiAgICAgIDg1LFxuICAgICAgMTExLFxuICAgICAgNTIsXG4gICAgICAyMDMsXG4gICAgICAyNTIsXG4gICAgICAxNDcsXG4gICAgICAxMDgsXG4gICAgICAxMzksXG4gICAgICAyMTIsXG4gICAgICAyMTAsXG4gICAgICAyNyxcbiAgICAgIDIzNyxcbiAgICAgIDEzOSxcbiAgICAgIDUzLFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEx4OXNVRUVLcWFtTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXN0lEMjVORTF3cTBCT01WdDArTkhUZ0VSVmhpUDVTR3JabHVrMGY0dVhBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpySzBrd1FrMThGaE1LWS9TSVYxWmdXSmdrN1JNcS9RYlhsWXdzQUxFam1Mckw5Mld2dWIwNzQwVGk0UTk0VjlDL1pUakJhNnlJQkVPUmI1SkErMkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlExYVJnNXNCdk8zeDRoTVJKbk50dHljM0lwUjlmTXhaQjI4OXlzeXJ6ZExUVFZVNXBKaENKZ2hkSit3OXZSdlZXNkZDZTE2NVl0U0g1cG5XZE1SMkJRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjUxNjkyMTcyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTcxNjg0NTk4MTczOTo2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjUxNjkyMTcyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxNTgzODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGWGdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZYZi5qc29uIjogIntcImtleURhdGFcIjpcInlzN3FtSkhlYWgzMm9iNlV4bnBNNDR6bmxadm9iWFNsSnh0Z3IyWjRweWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMDM5MzIwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlhnLmpzb24iOiAie1wia2V5RGF0YVwiOlwibEVDWGxUalhiNTlZTXlLVmI2bm5OUndId1c3RENGdGdnc2xIS1VRVHlhTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjIwMzkzMjAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIyMTU4MTM4NTI4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍ",
  ownername:process.env.OWNER_NAME|| "〄༒⚚𝑴𝑨𝑫𝑨𝑹𝑨✫𝑼𝑪𝑯𝑰𝑾𝑨⚚༒〄",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
