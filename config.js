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

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_15_03_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjE4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDYwLFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA3NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4UEY3UEtsQjlUNWIzQ3JuYU1PRTZLR1RSWm9HNE9COGg0R0lGMGFNcWhRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2REI0VlkwVFNYcVJxSEZQQkljUWFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlYzMyYmFmLWM3YTctNDFlYi1hOWM5LTg4ZTI3MmZiYWI4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxNTksXG4gICAgICAxMDMsXG4gICAgICA5MSxcbiAgICAgIDMxLFxuICAgICAgMjA0LFxuICAgICAgMTIyLFxuICAgICAgMTEsXG4gICAgICAxNzQsXG4gICAgICAxNDIsXG4gICAgICAxMTYsXG4gICAgICAxNzQsXG4gICAgICA2MCxcbiAgICAgIDQ1LFxuICAgICAgNzksXG4gICAgICAxOTIsXG4gICAgICAxNzMsXG4gICAgICAxMTQsXG4gICAgICAxNzEsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgOTgsXG4gICAgICAxODgsXG4gICAgICAxMTUsXG4gICAgICAxNjYsXG4gICAgICAxNzcsXG4gICAgICA0NSxcbiAgICAgIDE5NCxcbiAgICAgIDE5LFxuICAgICAgMjAxLFxuICAgICAgMTY2LFxuICAgICAgMjI2LFxuICAgICAgMjE2LFxuICAgICAgMTgxLFxuICAgICAgNTYsXG4gICAgICAyNixcbiAgICAgIDI4LFxuICAgICAgMTg2LFxuICAgICAgNyxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRNQ0xQVzFTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ2MTQ1MjE2OjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRWxpdGVcIixcbiAgICBcImxpZFwiOiBcIjI3MTkzMTgxMTA1MzYxNDo2OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSGl5TElFRUszb3A3NEdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5SaEMvMjk1VG1JSnRzcTBhcitRMGhGb0xydE9KRnd2YVhzamRzWjdLZ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwici93dGdJbHBhT0xQTThmSTdad3h5YkNKSFM2UGdqVDlKV1U0QWR6ZFg5SlBGTXBkb0lsdnhibnZDZnVYNHdlb2FJMm5OSmpENXl3VnJqbThhWGkzQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFpDMy8xK1hDUzN1bjhUVSs5bkxiRmpiWVVZNk5DZUdYZlhtd0YzbGFjeUhzVHVzWXpEU3ArWFN1VDRKTHFMT0ZjbzhkaWw1NnN4cHBXRjlpYnorZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0NjE0NTIxNjo2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQxMjg4NDk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
