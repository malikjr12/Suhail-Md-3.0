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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_50_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgNzksXG4gICAgICAgIDMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgxLFxuICAgICAgICA2NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFk4SnJuUTBCdmpQaXcrRDdSM3dCTStRQmJXVHUxYVhncHZ1d1dEWnBFST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib21lRm00MUZSSkdNSFpwbWVYeEVHQVwiLFxuICBcInBob25lSWRcIjogXCJlMjVjYWFjYy1jMWI3LTQ3OGUtOTVhOS0yN2QwNjI3NDIwZWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgNTUsXG4gICAgICAyMDcsXG4gICAgICAxOCxcbiAgICAgIDE5NSxcbiAgICAgIDE4MyxcbiAgICAgIDE1NyxcbiAgICAgIDM5LFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAxMDgsXG4gICAgICAyNDEsXG4gICAgICAyMTMsXG4gICAgICAzNCxcbiAgICAgIDUzLFxuICAgICAgMjUxLFxuICAgICAgMTc0LFxuICAgICAgMjQ4LFxuICAgICAgMTMsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxODEsXG4gICAgICAyMzcsXG4gICAgICAyMzIsXG4gICAgICAxNTMsXG4gICAgICA5NCxcbiAgICAgIDk4LFxuICAgICAgMTI0LFxuICAgICAgMTI3LFxuICAgICAgNTYsXG4gICAgICAxNTIsXG4gICAgICAxODgsXG4gICAgICAxMTMsXG4gICAgICAyNixcbiAgICAgIDE3NCxcbiAgICAgIDE3OCxcbiAgICAgIDEyNSxcbiAgICAgIDI0MCxcbiAgICAgIDE2NixcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIS0E1Qk1OUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDk3NzQ5MjIzOjYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXNhZCBNYWxpa1wiLFxuICAgIFwibGlkXCI6IFwiMTAzNjIwODY3NTQzMTAyOjYzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUTjIyZ1FoOHJ0d0FZWUxDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieXR2dXErNmNLNmt5SVg2dS9KdDVNU1I4bkZPRzM1ZDVNa1RMS2tpZWxUQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUMFFqTjFsY2h6cmhXM0VFNWNFTnY5VWhOeFBRaEl0MkR1Q2FzSyt0d3B1RGgvYkMzSHZxd0QwUjJXVWxPUnlDbTJpTnpPRnRQMFpjZTcrbHdzcFRDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4d0RzUHVmUlcxQXArSGdVZHZ2MmJnVkZwcnhYbzhQRTFEUlF6ZFA2bFhrejFianBqTUZ3RkhLc0U4bWNWODlrUjhzRWcyR1N0cy9YcVhKUW9MYnlCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0OTc3NDkyMjM6NjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ2NjI1ODAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSWhJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJaEkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoczg4aUgyNUVtRHE2UmZ5b1puMDVFL2hQL3dWR1VIMkxUU2pQMnE5am9ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxOTYwNDY2MCxcImN1cnJlbnRJbmRleFwiOjQzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDQyLDQzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY2MjU3MDIyNjhcIn0iCn0="  // PUT your SESSION_ID 


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
