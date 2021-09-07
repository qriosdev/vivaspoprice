const fetch = require('node-fetch')
const { MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID } = process.env

const handler = async function (event) {
  const body = await JSON.parse(event.body)

  try {
    const request = await fetch(
      `https://us19.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          Authorization: `Basic ${MAILCHIMP_API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: body.email,
          status: 'subscribed',
        }),
      }
    )

    const response = await request.json()
    console.log(response)

    if (
      response.status === 'subscribed' ||
      response.title === 'Member Exists'
    ) {
      return {
        statusCode: 200,
        body: JSON.stringify('success'),
      }
    }

    if (response.status === 400 && response.detail.includes('valid email')) {
      return {
        statusCode: 200,
        body: JSON.stringify('invalid'),
      }
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: response.status,
      body: JSON.stringify(response.detail),
    }
  }
}

module.exports = { handler }
