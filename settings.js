const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Alphabot-Mdོ X ＡＬＩＥＮ ＡＬＦＡ"
global.ownername= "ᴹᴿ᭄ ZeeoneOfcོ x ＡＬＩＥＮ ＡＬＦＡ"
global.myweb ="https://api-alphabot.herokuapp.com/"
global.youtube = "https://youtube.com/c/alienalfa"
global.github = "https://alien-alfa.github.io/"
global.ownernomer = "447405935355"
global.ownernomerr = "+447405935355"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" //max size 30 kb, so that the welcome image doesn't get delayed
global.owner = ["62887435047326","62887435047326","6285342106390","447405935355"] //change so that the owner feature can be used
global.packname = '© Alphabot-Mdོ /n/n/n/n/n' //sticker wm
global.author = 'ZeeoneOfc x ＡＬＩＥＮ ＡＬＦＡ' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Okey Bro~',
    admin: 'This command can only be used by admins!',
    botAdmin: 'This command can only be used when the bot becomes an admin!',
    owner: 'This command can only be used by the owner!',
    group: 'This command can only be used in groups !',
    private: 'This command can only be used in private!',
	bot: 'Bot Number User Special Features',
    errtoimg: 'Sorry Currently Not Support Gif Sticker!',
    wait: '⏳ In Process',
	lockCmd: 'Feature Not Enabled By Owner!',
	example1: 'Welcome @user to the @subject group. Do not forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @date (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
