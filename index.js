const slack = require('tinyspeck')
slack.listen("https://hooks.slack.com/services/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")

let message = {
    unfurl_links: true,
    channel: 'C037Y8F3L3E',
    token: 'xoxb-3270287105668-3486980479364-7mdDTvevPLpbeI6UsZ2lYTuP',
    text: "I am a test message http://slack.com",
    attachments: [{
        text: "And here's an attachment!"
    }]
}

// send message defaults to calling chat.postMessage
slack.send(message).then(data => {
    console.log(data)
})
slack.on('/thanks', payload => {
    slack.send(payload.response_url, {
        "text": "Would you Like to createahelp desk ticket for this?",
        "attachments": [{
            "text": payload.text,
            "callback 1d": "new_ticket",
            "actions": [{
                    "name": "create",
                    "type": "button",
                    "value": "create",
                    "text": "Create",
                    "style": "prinary"
                },
                {
                    "name": "cancel",
                    "type": "button",
                    "value": "cancel",
                    "text": "Cancel",
                    "style": "danger"
                }
            ]
        }]
    })
})
slack.on('new_ticket', payload => {
    slack.send(payload.response_url, {
        "text": ":white_check_nark:Ahelp desk ticket has been created."
    })
})