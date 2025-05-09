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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_18_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDg4LFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgNixcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIktNRXlaVEpOcExlcE1MckhZUjBSa0gwNVpLT2NOWGpoOUhkN2o4QmJLOUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1nenlrWVVjUlJPOERoMmZ5dFN2YkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmViNzQ4ZDktNzdkMC00NzRlLTkzMTYtY2Y2MWY2OTcyZmRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDE1MixcbiAgICAgIDI1LFxuICAgICAgMTkxLFxuICAgICAgMTMzLFxuICAgICAgMTUsXG4gICAgICAxOSxcbiAgICAgIDE1MCxcbiAgICAgIDQzLFxuICAgICAgODYsXG4gICAgICAxMTksXG4gICAgICAzMyxcbiAgICAgIDQxLFxuICAgICAgOTYsXG4gICAgICA5OCxcbiAgICAgIDIsXG4gICAgICAxNTQsXG4gICAgICAxLFxuICAgICAgNCxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgNjcsXG4gICAgICA1NixcbiAgICAgIDk2LFxuICAgICAgMTgwLFxuICAgICAgNjQsXG4gICAgICA3NSxcbiAgICAgIDEyNixcbiAgICAgIDE0OCxcbiAgICAgIDMzLFxuICAgICAgMTA4LFxuICAgICAgMTI2LFxuICAgICAgNTYsXG4gICAgICAxNDYsXG4gICAgICAyMjQsXG4gICAgICAyMSxcbiAgICAgIDE1MyxcbiAgICAgIDExMCxcbiAgICAgIDk3LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzhBUUY2UlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ5Nzc0OTIyMzo2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFzYWQgTWFsaWtcIixcbiAgICBcImxpZFwiOiBcIjEwMzYyMDg2NzU0MzEwMjo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVE4yMmdRMXJuNHdBWVlMaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInl0dnVxKzZjSzZreUlYNnUvSnQ1TVNSOG5GT0czNWQ1TWtUTEtraWVsVEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNFcwVSswcGllcE1lNFBsQ2pubG11dGRwblZrbjRxSHcyUkRZbG5RQXA2SDA2WnZyNkZiQ0tncjVsbXFSVXJGTTM1QXJjWnJ0cnhUdG41akhYLzUyQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0dqMU9qdDN5Qm9TcEs3RE1iMFNESWpQME5DVFNaOWpnQ0pkSWVseXBQWkJKU09mM2ROL2NjWVBsS1BrK3lyM09WK0FUQVdpbXI5RTJiOE5FMW9GaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk3NzQ5MjIzOjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NjgwMzkzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUloSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWhJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaHM4OGlIMjVFbURxNlJmeW9abjA1RS9oUC93VkdVSDJMVFNqUDJxOWpvWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTk2MDQ2NjAsXCJjdXJyZW50SW5kZXhcIjo0MyxcImRldmljZUluZGV4ZXNcIjpbMCw0Miw0M119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
