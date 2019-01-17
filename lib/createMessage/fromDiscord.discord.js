const handleEmojis = require('../discord/handleEmojis')
module.exports = message => {
  return {
    body: handleEmojis(message.content),
    opts: {
      embeds: message.embeds,
      username: message.author.username,
      avatarURL: message.author.avatarURL,
      files: message.attachments.map(attachment => ({ attachment: attachment.url, name: attachment.filename }))
    }
  }
}
