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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_06_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxeXpvcVUxQVhSZVUzeHNMQWFDTFhGdTRFK2ZrdEd4eVFrOUkwbUxhbUg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaZS1ialNIRFNkdXZCWFROQVhQbVVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyZjE5YTNjLTI1MWMtNDJlOC1iMmJmLTYzMTJhNTUzN2I1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDIzMSxcbiAgICAgIDEwNSxcbiAgICAgIDIyNyxcbiAgICAgIDYxLFxuICAgICAgMTI2LFxuICAgICAgNDUsXG4gICAgICAyNDAsXG4gICAgICA0NSxcbiAgICAgIDIxOSxcbiAgICAgIDEzNyxcbiAgICAgIDc2LFxuICAgICAgMjE1LFxuICAgICAgOTMsXG4gICAgICAxNCxcbiAgICAgIDIwMyxcbiAgICAgIDE0NixcbiAgICAgIDE1MyxcbiAgICAgIDEzOCxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgNTAsXG4gICAgICA0LFxuICAgICAgNTAsXG4gICAgICAxOTMsXG4gICAgICAxMjQsXG4gICAgICAxNjAsXG4gICAgICA0NSxcbiAgICAgIDQyLFxuICAgICAgMTk4LFxuICAgICAgMjU1LFxuICAgICAgMjA4LFxuICAgICAgMTU4LFxuICAgICAgMzMsXG4gICAgICAxODcsXG4gICAgICA0MCxcbiAgICAgIDIyMixcbiAgICAgIDE5MCxcbiAgICAgIDIzMCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1NTRLUVJLTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk3NzQ5MjIzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQVwiLFxuICAgIFwibGlkXCI6IFwiMTAzNjIwODY3NTQzMTAyOjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUTjIyZ1E2L080d0FZWUlpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXR2dXErNmNLNmt5SVg2dS9KdDVNU1I4bkZPRzM1ZDVNa1RMS2tpZWxUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXank0Z3BYWGVhQzZ5RHJ1NnMxSzhhKzB6THg3NzBBREN3MkVESzJHTkRvZ2wxWWFWY3ZWbHA0VkhMOVJzdzJqR0k1a1lvTkNPUUVJYkc0M3dKVWNEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEcHVSSWIxUmhMcGdhVmZlODJSdnlTZDRkaWFYUENtRFVlM1laUGorbk8wZWQxNmE4d081ZXlySjk5aDFRWjBPdkNlTlhKak9JdWkxcGJveGNBd0pnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTc3NDkyMjM6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NzYyNzk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWdnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZ2cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1Y2F1Ty9CeWMrVU5qMlo3V3EzbjJnWDBQdm9OVjVKcjRBNThtckd4aDNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxOTYwNDY2MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
