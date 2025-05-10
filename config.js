const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "ASAD";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923497749223";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_00_05_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAzNSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaVdYdmM5K0xJekVSZ2JLZkV4MTJncUwvb2hpLzF5NjZJS1J0M2VwaENUOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYVFMX1MxUFhRbzZKVm9yNFp3dlk5QVwiLFxuICBcInBob25lSWRcIjogXCJjY2ZiMGNlNi1hOGRjLTQwNzYtOWIyMS00YWI3YTY1NWM4MjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAyMzgsXG4gICAgICAxNzQsXG4gICAgICAyMDQsXG4gICAgICAxOCxcbiAgICAgIDE3OCxcbiAgICAgIDEzNixcbiAgICAgIDI1MSxcbiAgICAgIDgzLFxuICAgICAgMTE4LFxuICAgICAgMTk4LFxuICAgICAgMjEwLFxuICAgICAgMTA0LFxuICAgICAgMjQ0LFxuICAgICAgODYsXG4gICAgICA3MyxcbiAgICAgIDE5LFxuICAgICAgMTc3LFxuICAgICAgMTcsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgODEsXG4gICAgICAxMTMsXG4gICAgICA0NSxcbiAgICAgIDIzMixcbiAgICAgIDksXG4gICAgICAxMjgsXG4gICAgICAxODQsXG4gICAgICA2MixcbiAgICAgIDEzMCxcbiAgICAgIDYwLFxuICAgICAgMjQ1LFxuICAgICAgNyxcbiAgICAgIDQ4LFxuICAgICAgMjI0LFxuICAgICAgMTU5LFxuICAgICAgMTczLFxuICAgICAgMTQ5LFxuICAgICAgOTAsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMURaMTFUUTVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5Nzc0OTIyMzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFzYWQgTWFsaWtcIixcbiAgICBcImxpZFwiOiBcIjEwMzYyMDg2NzU0MzEwMjo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVE4yMmdReWVEK3dBWVlMeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInl0dnVxKzZjSzZreUlYNnUvSnQ1TVNSOG5GT0czNWQ1TWtUTEtraWVsVEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2c4MnczMHN6dUlrV3JjcHpObWxIWUhxcDNPcUJXejRPeFFtTFVjWmE1WmdUK2duOWNseXlsQnJKUllUVG1FTmd3WWFjenY3dVRNR2ZFNld2Zys4QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwielVMU0xlUmRqRC96MjlQQ1NMbyt3Wk1zNEFBWmRPaHVIUWo1WTRGU1l6cEIyb0FlOVhuK1JuNDg1RVpWRWN4UG54dmVlcTdwNjVKc3dHSEloZ0VmaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk3NzQ5MjIzOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjkwNzIxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUloSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWhJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaHM4OGlIMjVFbURxNlJmeW9abjA1RS9oUC93VkdVSDJMVFNqUDJxOWpvWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTk2MDQ2NjAsXCJjdXJyZW50SW5kZXhcIjo0MyxcImRldmljZUluZGV4ZXNcIjpbMCw0Miw0M119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Asad",
  packname: process.env.PACK_NAME || "💗ASAD",
  botname : process.env.BOT_NAME  || "ASAD-MD",
  ownername:process.env.OWNER_NAME|| "ASAD MALIK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Asad Malik"  ).toUpperCase(),



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
