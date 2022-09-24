module.exports = {
    name:"e",
    aliased:["man", "erkek", "boy"],
    code:`
    $addCmdReactions[<:limon:1016758552867635200>]
    $giveRole[786692350255693824;$mentioned[1];1020058834443714640]
    $takeRole[786692350255693824;$mentioned[1];1020058831247646760]
    
    $changeNickname[$mentioned[1]; $noMentionMessage[1] | $noMentionMessage[2]]
   
    $channelSendMessage[1023204761257910323;<@$mentioned[1]> Aramıza Katıldı Ona Hoş Geldin Diyelim <#1019690772565610567> Kanalını Okumuş Sayılacaksın. İyi Eğlenceler.]
    $channelSendMessage[1023204853004107838;
   
    **Kayıt Edilen Kullanıcı:** \`$userTag[$mentioned[1]]\` \`($mentioned[1])\`
    
    **Kayıt Eden Yetkili:** \`$userTag[$authorID]\` \`($authorID)\`
    
    **Kullanıcının Yeni İsmi:** \` $noMentionMessage[1] | $noMentionMessage[2]\`
    
    **Kayıt Türü:** \`Erkek ♂️\`
    **Verilen Rol:** \`$roleName[1020058834443714640]\`
    
       
    $onlyIf[$noMentionMessage[2]!=;
    **Kişinin Yaşını Girin!**{delete:7s}]
    
    $onlyIf[$noMentionMessage[1]!=;
    **Kişinin Adını Girin!**{delete:7s}]
    
    $onlyIf[$mentioned[1]!=;
    **Bir Kişi Etiketleyin!**{delete:7s}]

    $onlyForRoles[1020058833281876059;Bu komuda **ERİŞİM** yektin yok.]
    $onlyForServers[786692350255693824;]
    `
    }