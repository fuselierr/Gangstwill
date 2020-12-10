const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'crip ';

const fs = require('fs');
let ppl = [];
let pc = [];
let contr = [];
let cash = 0n;

client.once('ready', () => {
    console.log('Gangstwill is online');
    var interval = setInterval (function () {
        for (i = 0; i < pc.length; i++) {
            cash += BigInt(pc[i]);
            contr[i] += pc[i];
        }
      }, 10000); 
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) {
        const rawmsg = message.content;
        const msg = message.content.toLowerCase();
        let count = 0;

        if (msg === 'who is mixsy') {
            message.channel.send('who is mixsy');
        } else if (msg.includes("raca")) {
            message.channel.send('You are now answerable to the court, you blasphemy!');
            count++;
        } else if (rawmsg === 'I hereby declare that I am a piece of blasphemic scum for my actions and request that I be purified to become wholly again.') {
            var rand = Math.floor(Math.random() * 50);
            let member = message.member;
            let role = message.guild.roles.cache.find(r => r.name === 'Scum');
            if (message.member.roles.cache.find(r => r.name === "Scum")) {
                if (rand == 2) {
                    message.channel.send('The purification worked and you are now no longer the scum of the earth.');
                    member.roles.remove(role).catch(console.error);
                } else {
                    message.channel.send('You tried to purify but were too scum to lift the blood on your head. Try again.');
                }
            } else {
                message.channel.send('wtf dude you aren\'t even scum the heck you doing man');
            }
        } else if (msg === 'ouey') {
            message.channel.send('koko wa bu neh soh');
        } else if (msg === 'eren') {
            var attach = new Discord.MessageAttachment('');
            message.channel.send('kono baka des');
        } 
        else if (msg === 'moshi mosh') {
            message.channel.send('Daijoubu deska?');
        }
        if (msg.includes("fool")) {
            message.channel.send('Look who is in danger of the fire of hell tsk tsk');
            count++;
        } else if (msg.includes("Red sus")) {
            var ran = Math.floor(Math.random() * 7);
            if (ran == 0) {
                message.channel.send('would you kindly');
            } else if (ran == 1) {
                message.channel.send('could ya');
            } else if (ran == 2) {
                message.channel.send('may this sir');
            } else if (ran == 3) {
                message.channel.send('do you want to');
            } else if (ran == 4) {
                message.channel.send('Is it not hard to');
            } else if (ran == 5) {
                message.channel.send('heeeeEEEYYYYY. I am coming to your house right now to quickly ask you to');
            } else if (ran == 6) {
                message.channel.send('Rintaro. Hory cow! So I said we should');
            }
            ran = Math.floor(Math.random() * 7);
            if (ran == 0) {
                message.channel.send('just stfu');
            } else if (ran == 1) {
                message.channel.send('shut yer fatty trap');
            } else if (ran == 2) {
                message.channel.send('please not speak out of turn');
            } else if (ran == 3) {
                message.channel.send('die');
            } else if (ran == 4) {
                message.channel.send('go play getting over it or something');
            } else if (ran == 5) {
                message.channel.send('uuurruUUUUSAIIIII');
            } else if (ran == 6) {
                message.channel.send('play us a sad song on the worlds smallest violin');
            }
            ran = Math.floor(Math.random() * 7);
            if (ran == 0) {
                message.channel.send('as I could easily see japanese shaman girls but am forced to stay here due to you');
            } else if (ran == 1) {
                message.channel.send('do you really have nothing better to do than send these retrded copypastas');
            } else if (ran == 2) {
                message.channel.send('what do you expect me to say, "you do you"?');
            } else if (ran == 3) {
                message.channel.send('I am sad that I live in the same planet as you');
            } else if (ran == 4) {
                message.channel.send('I wish I could chop off those dirty fingers until they move no more');
            } else if (ran == 5) {
                message.channel.send('yeah @Moderator  you gotta help me man my wife is tryna kill me');
            } else if (ran == 6) {
                message.channel.send('mans literally an addict');
            }
            ran = Math.floor(Math.random() * 7);
            if (ran == 0) {
                message.channel.send('dont be a literal incantation of a baka mitai');
            } else if (ran == 1) {
                message.channel.send('among us is a dead game and we all know it');
            } else if (ran == 2) {
                message.channel.send('please escort yourself back to the social recluse you came from');
            } else if (ran == 3) {
                message.channel.send('~Tu tu ru~ Mayushii desu そして私はあなたに死ぬように命じます');
            } else if (ran == 4) {
                message.channel.send('ill call upon the mixsy gods and throw you out of this area');
            } else if (ran == 5) {
                message.channel.send('talk about this more and I might have to give you the scum rank');
            } else if (ran == 6) {
                message.channel.send('I bet your parents regretted giving birth to you :P');
            }
        }
        if (msg.includes("swear")) {
            message.channel.send('Anything beyond yes or no comes from the evil one blasphemous man');
            count++;
        }
        if (msg.includes("allah") || msg.includes("muhammad") || msg.includes("buddha") || msg.includes("molech") || msg.includes("krishna") || msg.includes("baal")) {
            message.channel.send('your iq sounds like it is below that of a tapeworm which lives inside your mother\'s belly, feeding on the excess brain matter you left behind after being born you MONKEY');
            count++;
        }
        if (rawmsg.includes("jesus") || rawmsg.includes("god") || rawmsg.includes("Gods")) {
            if (rawmsg.includes("gods") || rawmsg.includes("Gods")) {
                message.channel.send("are you literally a troll? I'd have you burned at the stake if it were my choice :no_mouth:");
            } else {
                message.channel.send('HOW DARE YOU SPEAK OF THE LORD\'S NAME IN LOWERCASE FIE SCUM');
            }
            count++;
        }
        if (msg.includes("greg")) {
            message.channel.send("ew that guy");
        }
        if (msg.includes(("do") || msg.includes("doo")) && msg.includes("someone")) {
            var rand = Math.floor(Math.random() * 3);
            if (rand == 0) {
                message.channel.send("OHH");
            } else if (rand == 1) {
                message.channel.send("ooooooooooOOOOOOOOOOHHHHHHH");
            } else if (rand == 2) {
                message.channel.send("ooooooooooooooooooooooooooooooooooooooooooooooooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
            }
            message.channel.send("LIFE COULD BE DREAM");
            rand = Math.floor(Math.random() * 2);
            if (rand == 0) {
                message.channel.send("SHABOOBY BIBBY DIDDLY DODDY");
            } else if (rand == 1) {
                message.channel.send("SHABOOBY BATEY TAKE YOU ONE A");
            }
            rand = Math.floor(Math.random() * 3);
            if (rand == 0) {
                message.channel.send("BIDDLY BODDY BADDY BOOM");
            } else if (rand == 1) {
                message.channel.send("PARADISE UP ABOVE");
            } else if (rand == 2) {
                message.channel.send("THE ONLY ONE THAT U LOVE");
            }
            message.channel.send("LIFE COULD BE DREAM WE ARE");
            message.channel.send("nunununununuNUNUNUNUNUNUNUNUNununUNUNUNuNUNUnuNUUNUUUU");
        } else if (msg.includes("hehe")) {
            message.channel.send("https://tenor.com/view/paimon-gif-18680170");
        }
        if (count >= 5) {
            let role = message.guild.roles.cache.find(r => r.name === "Scum");
            let member = message.member;
            member.roles.add(role).catch(console.error);
            message.channel.send('by the messages above you have proven to be the true scum of the earth. You are now considered impure and you must purify to be able to attend the synogogues again.');
            message.channel.send('Say: I hereby declare that I am a piece of blasphemic scum for my actions and request that I be purified to become wholly again.');
        }
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'pingree') {
        var rand = Math.floor(Math.random() * 5);
        if (rand === 0) {
            const attachment = new Discord.MessageAttachment('https://emoji.gg/assets/emoji/PingReee.png');
            message.channel.send(args, attachment);
        } else if (rand === 1) {
            const attachment = new Discord.MessageAttachment('https://emoji.gg/assets/emoji/PandaPingRee.gif');
            message.channel.send(args, attachment);
        } else if (rand === 2) {
            const attachment = new Discord.MessageAttachment('https://storage.googleapis.com/discordstreet/emojis/18b5c3ba-85f1-4bf6-8f52-5b794a96cf64.gif');
            message.channel.send(args, attachment);
        } else if (rand === 3) {
            const attachment = new Discord.MessageAttachment('https://i.pinimg.com/originals/cd/71/fd/cd71fde2199908a1c659a0e571f82378.gif');
            message.channel.send(args, attachment);
        } else {
            const attachment = new Discord.MessageAttachment('https://emoji.gg/assets/emoji/6293_PingPong.png');
            message.channel.send(args, attachment);
        }
    } else if (command === 'help') {
        message.channel.send('get your help somewhere else empty headed one');
    } else if (command === 'naisuvideo') {
        var rand = Math.floor(Math.random() * 21);
        switch (rand) {
            case 0: message.channel.send('https://www.youtube.com/watch?v=jfAc95-llWo');
            break;
            case 1: message.channel.send('https://www.youtube.com/watch?v=d6E5QihWEc0');
            break;
            case 2: message.channel.send('https://www.youtube.com/watch?v=p709WEqcBUc');
            break;
            case 3: message.channel.send('https://www.youtube.com/watch?v=iQa6hyPHvhk');
            break;
            case 4: message.channel.send('https://www.youtube.com/watch?v=_Tr5eUBTClw');
            break;
            case 5: message.channel.send('https://www.youtube.com/watch?v=sNVx-6gKf8g');
            break;
            case 6: message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            break;
            case 7: message.channel.send('https://www.youtube.com/watch?v=R37p9447ayM');
            break;
            case 8: message.channel.send('https://www.youtube.com/watch?v=e_swTGkLgXQ');
            break;
            case 9: message.channel.send('https://www.youtube.com/watch?v=eh32gwjPg4w');
            break;
            case 10: message.channel.send('https://www.youtube.com/watch?v=WCVUUbcVI9o');
            break;
            case 11: message.channel.send('https://www.youtube.com/watch?v=eSa9gTBy9EU');
            break;
            case 12: message.channel.send('https://www.youtube.com/watch?v=szz40SZMzpI');
            break;
            case 13: message.channel.send('https://www.youtube.com/watch?v=7U6eHY1M9WM');
            break;
            case 14: message.channel.send('https://www.youtube.com/watch?v=vg5qDljEw7Q');
            break;
            case 15: message.channel.send('https://www.youtube.com/watch?v=xYRpfelozeA');
            break;
            case 16: message.channel.send('https://www.youtube.com/watch?v=4HVAM75-TxE');
            break;
            case 17: message.channel.send('https://www.youtube.com/watch?v=RFgjQXV890A');
            break;
            case 18: message.channel.send('https://www.youtube.com/watch?v=XsYEw-v01OY');
            break;
            case 19: message.channel.send('https://www.youtube.com/watch?v=RFgjQXV890A');
            break;
            case 20: message.channel.send('https://www.youtube.com/watch?v=5N9KyCfBbEQ');
        }
    } else if (command === 'faith') {
        if (message.member.roles.cache.find(r => r.name === "Scum")) {
            var faith = Math.floor(Math.random() * 21);
        } else {
            var faith = Math.floor(Math.random() * 101);
        }
        if (!(args instanceof Array && args.length)) {
            message.channel.send('You test your faith...\nYour faith level is: ' + faith);
            message.channel.send('Your faith:');
        } else {
            message.channel.send('You test ' + args + '\'s faith\n' + args + '\'s faith level is: ' + faith);
            message.channel.send(args + '\'s faith:');
        }
        if (faith <= 20) {
            if (faith == 0) {
                message.channel.send('`is the salt that is thrown out and trampled underfoot`');
            } else {
                message.channel.send('`is below that of the Pharisees and the Teachers of the law`');
            }
            if (message.member.roles.cache.find(r => r.name === "Scum")) {
                message.channel.send('*scum*');
            }
        } else if (faith > 20 && faith <= 40) {
            message.channel.send('`is that of a mustard seed`');
        } else if (faith > 40 && faith <= 60) {
            message.channel.send('`sets commands aside and teaches them accordingly`');
        } else if (faith > 60 && faith <= 80) {
            if (faith == 69) {
                message.channel.send('`is *nice*`');
            } else {
                message.channel.send('`makes the light of the world`');
            }
        } else {
            if (faith == 100) {
                message.channel.send('`is that of exorcist Bob Larson`');
            } else {
                message.channel.send('`rivals that of the apostles, great is the reward waiting in heaven`');
            }
        }
    } else if (command === 'bq') {
        if (args[0] === '1-15') {
            var q = Math.floor(Math.random() * 1938) + 1;
            var set = fs.readFileSync("./Questions.txt", {"encoding": "utf-8"});
        } else if (args[0] === '1-8') {
            var q = Math.floor(Math.random() * 1087) + 1;
            var set = fs.readFileSync("./Questions1.txt", {"encoding": "utf-8"});
        } else if (args[0] === '9-15') {
            var q = Math.floor(Math.random() * 851) + 1;
            var set = fs.readFileSync("./Questions2.txt", {"encoding": "utf-8"});
        } else if (args[0] === 'help') {
            message.channel.send("List of possible commands: bq 1-8, bq 9-15, bq 16-20, bq 21-28, bq 1-15, bq 1-20, bq all (every single verse in the quiz book)");
            return;
        } else if (args[0] === 'all') {
            var q = Math.floor(Math.random() * 3712) + 1;
            var set = fs.readFileSync("./AllQuestions.txt", {"encoding": "utf-8"});
        } else if (args[0] === '16-20') {
            var q = Math.floor(Math.random() * 687) + 1;
            var set = fs.readFileSync("./Questions3.txt", {"encoding": "utf-8"});
        } else if (args[0] === '21-28') {
            var q = Math.floor(Math.random() * 1087) + 1;
            var set = fs.readFileSync("./Questions4.txt", {"encoding": "utf-8"});
        } else if (args[0] === '1-20') {
            var q = Math.floor(Math.random() * 2625) + 1;
            var set = fs.readFileSync("./Questions5.txt", {"encoding": "utf-8"});
        } else {
            message.channel.send('invalid, may be updated if lemen inbred feels like it');
            return;
        }
        var question = set.split("\n");
        var sub = question[q * 3].replace(/[�]/g, '<<');
        message.channel.send(sub + "\n||" + question[q * 3 + 1] + "||");
    } else if (command === 'genshin') {
        var rand = Math.floor(Math.random() * 1000);
        var meteor;
        if (rand <= 6) {
            meteor = new Discord.MessageAttachment('https://media1.tenor.com/images/cffde741d0bd97ff79c8403c4c83c6dc/tenor.gif?itemid=18846258');
        } else if (rand >= 929) {
            meteor = new Discord.MessageAttachment('https://media1.tenor.com/images/17f64ce3809e2d329599e1c38f488703/tenor.gif?itemid=18856455');
        } else {
            meteor = new Discord.MessageAttachment('https://media1.tenor.com/images/07ba26656b41f374bc4ed25597ccd852/tenor.gif?itemid=19409288');
        }
        message.channel.send(meteor);
        setTimeout(function(){ 
            if (rand <= 6) {
                var ran = Math.floor(Math.random() * 20);
                if (ran == 0) {
                    message.channel.send('GANGSTWILL 5 :star: ');
                } else if (ran == 1) {
                    message.channel.send('PASTOR GREG EASTON 5 :star: ');
                } else if (ran == 2) {
                    message.channel.send('EXORCIST BOB LARSON 5 :star: ');
                } else if (ran == 3) {
                    message.channel.send('ALT MIXSY 5 :star: ');
                    message.channel.send('wowee');
                } else if (ran == 4) {
                    message.channel.send('GEMINI ABBY 5 :star: ');
                } else if (ran == 5) {
                    message.channel.send('IDOL MOLECH 5 :star: ');
                } else if (ran == 6) {
                    message.channel.send('ILLNESS AIDS 5 :star: ');
                } else if (ran == 7) {
                    message.channel.send('PREIST DEVIN 5 :star: ');
                } else if (ran == 8) {
                    message.channel.send('HIS BROTHER ZEBIDEE 5 :star: ');
                } else if (ran == 9) {
                    message.channel.send('AN EXTRA CHROMOSOME 5 :star: ');
                } else {
                    message.channel.send('a weapon lmao 5 :star: ');
                }
                message.channel.send('@everyone THIS IS UNPRECEDENTED');
            } else if (rand >= 929) {
                var ran = Math.floor(Math.random() * 29);
                if (ran == 0) {
                    message.channel.send('EGGRIC TAN 4 :star: ');
                } else if (ran == 1) {
                    message.channel.send('PEILOU 4 :star: ');
                } else if (ran == 2) {
                    message.channel.send('OILVER 4 :star:');
                } else if (ran == 3) {
                    message.channel.send('MIKE THE RTARD 4 :star: ');
                } else if (ran == 4) {
                    message.channel.send('COLT 4 :star: ');
                } else if (ran == 5) {
                    message.channel.send('BARBARA 4 :star: ');
                } else if (ran == 6) {
                    message.channel.send('ADAM HOSSEINI 4 :star: ');
                } else if (ran == 8) {
                    message.channel.send('SIMON LEE 4 :star: ');
                } else if (ran == 9) {
                    message.channel.send('PHARISEE 4 :star: ');
                } else if (ran == 10) {
                    message.channel.send('TEMPLE GUARDS 4 :star: ');
                } else if (ran == 11) {
                    message.channel.send('NESS 4 :star: ');
                } else if (ran == 12) {
                    message.channel.send('CORPSE HUSBAND 4 :star: ');
                } else if (ran == 13) {
                    message.channel.send('SAYYAM 4 :star: ');
                } else if (ran == 14) {
                    message.channel.send('MAKI NISHIKINO 4 :star: ');
                } else {
                    message.channel.send('a weapon lmao 4 :star: ');
                }
            } else {
                var ran = Math.floor(Math.random() * 16);
                switch (ran) {
                    case 0: const attachment = new Discord.MessageAttachment('https://i.ytimg.com/vi/mZ3skOgoPGE/maxresdefault.jpg');
                    message.channel.send('debate club 3 :star: ', attachment);
                    break;
                    case 1: const attachment1 = new Discord.MessageAttachment('https://oyster.ignimgs.com/mediawiki/apis.ign.com/genshin-impact/1/18/Genshin_Impact_20200929215301.jpg?width=1280');
                    message.channel.send('bloodtainted greatsword 3 :star: ', attachment1);
                    break;
                    case 2: const attachment2 = new Discord.MessageAttachment('https://www.gensh.in/fileadmin/Database/Weapons/Sword/3_skyrider_sword.jpg');
                    message.channel.send('skyrider sword 3 :star: ', attachment2);
                    break;
                    case 3: const attachment3 = new Discord.MessageAttachment('https://i.ytimg.com/vi/gyjQhs49SA0/maxresdefault.jpg');
                    message.channel.send('ferrous shadow 3 :star: ', attachment3);
                    break;
                    case 4: const attachment4 = new Discord.MessageAttachment('https://www.gensh.in/fileadmin/Database/Weapons/Polearm/3_halberd.jpg');
                    message.channel.send('halberd 3 :star: ', attachment4);
                    break;
                    case 5: const attachment5 = new Discord.MessageAttachment('https://i.ytimg.com/vi/62ROawW3uI8/hqdefault.jpg');
                    message.channel.send('raven bow 3 :star: ', attachment5);
                    break;
                    case 6: const attachment6 = new Discord.MessageAttachment('https://i.pinimg.com/originals/7d/3f/a9/7d3fa967c7e6c31d98001d0004a64744.gif');
                    message.channel.send('donald trump 3 :star: ', attachment6);
                    break;
                    case 7: const attachment7 = new Discord.MessageAttachment('C:/Users/mikeg/OneDrive/Desktop/Gangstwill/greg.png');
                    message.channel.send('gangstgreg 3 :star: ', attachment7);
                    break;
                    case 8: const attachment8 = new Discord.MessageAttachment('https://i.pinimg.com/236x/80/d9/18/80d9187d55fe9d8f0fada699f2605fd4--fashion.jpg');
                    message.channel.send('eromanga sensei 3 :star: ', attachment8);
                    break;
                    case 9: const attachment9 = new Discord.MessageAttachment('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5cc3f035-afb2-4140-9acd-3ab91e92fdf6/dczeezc-16b4f18d-35ae-48af-a44c-8a0ba9564def.png/v1/fill/w_1280,h_997,q_80,strp/furry_levi_by_okamiwolvenart_dczeezc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05OTciLCJwYXRoIjoiXC9mXC81Y2MzZjAzNS1hZmIyLTQxNDAtOWFjZC0zYWI5MWU5MmZkZjZcL2RjemVlemMtMTZiNGYxOGQtMzVhZS00OGFmLWE0NGMtOGEwYmE5NTY0ZGVmLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.DPeCbgnTCNcyrr6LVc5mbRf7hApwC0p1XX7hjCKd-SE');
                    message.channel.send('paw paw levi 3 :star: ', attachment9);
                    break;
                    case 10: const attachment10 = new Discord.MessageAttachment('https://i.ytimg.com/vi/4YocgI3xcwo/hqdefault.jpg');
                    message.channel.send('yandere dev 3 :star: ', attachment10);
                    break;
                    case 11: const attachment11 = new Discord.MessageAttachment('https://i.ytimg.com/vi/GW_BB4da8hU/hqdefault.jpg');
                    message.channel.send('pac man 3 :star: ', attachment11);
                    break;
                    case 12: const attachment12 = new Discord.MessageAttachment('https://i.ytimg.com/vi/t6QO1ms4nLE/maxresdefault.jpg');
                    message.channel.send('ligma 3 :star: ', attachment12);
                    break;
                    case 13: const attachment13 = new Discord.MessageAttachment('https://i.pinimg.com/736x/cd/4b/ee/cd4bee57f3a832b2931445516672aefc.jpg');
                    message.channel.send('jamescha 3 :star: ', attachment13);
                    break;
                    case 14: const attachment14 = new Discord.MessageAttachment('https://i.ytimg.com/vi/mZ3skOgoPGE/maxresdefault.jpg');
                    message.channel.send('debate club 3 :star: ', attachment14);
                    break;
                    case 15: const attachment15 = new Discord.MessageAttachment('https://i.ytimg.com/vi/mZ3skOgoPGE/maxresdefault.jpg');
                    message.channel.send('debate club 3 :star: ', attachment15);
                    break;
                }
            }
        }, 9200);
    } else if (command === 'gang') {
        if (args[0] === 'cash') {
            message.channel.send("OCAC's total cash is: " + cash);
        } else if (args[0] === 'add') {
            if (ppl.includes(message.member.user.tag)) {
                var b = ppl.indexOf(message.member.user.tag);
                pc[b] *= 1.1;
                pc[b] = parseInt(pc[b]);
            } else {
                message.channel.send('not found');
            }
        } else if (args[0] === 'check') {
            if (ppl.includes(message.member.user.tag)) {
                var b = ppl.indexOf(message.member.user.tag);
                message.channel.send('Your earning per turn is: ' + pc[b] + '\nYour total contribution is: ' + contr[b]);
            }
        } else if (args[0] === 'board') {
            var e = contr.sort();
            var c = pc.sort();
            message.channel.send("**CONTRIBUTION BOARD**");
            for (i = 0; i < e.length; i++) {
                message.channel.send(i + 1 + ". " + ppl[contr.indexOf(e[i])] + ", $" + e[i]);
            }
            message.channel.send("\n**EARNINGS BOARD**");
            for (i = 0; i < c.length; i++) {
                message.channel.send(i + 1 + ". " + ppl[pc.indexOf(c[i])] + ", $" + c[i])
            }
            e = [];
            c = [];
        } else if (args[0] === 'start') {
            if (ppl.includes(message.author.id)) {
                message.channel.send('WTH man you already started');
            } else {
                message.channel.send(message.member.user.tag + ' has started contributing to the OCAC cashpile.\nRight now, you earn $30 per turn.');
                ppl.push(message.member.user.tag);
                pc.push(30);
                contr.push(0);
            }
        } else if (args[0] === 'help') {
            message.channel.send('gang cash: check all the money in the OCAC cashpile.\ngang check: check your contribution and salary per turn\ngang add: increases your salary (spam this to gain salary)\ngang board: see the top 5 contributors and salaries');
        }
    }
});

client.login(process.env.token);