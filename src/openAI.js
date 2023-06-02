
import { Configuration, OpenAIApi } from "openai"
import readLine from "readline"

const API_KEY = ""


const openai = new OpenAIApi(new Configuration({
    apiKey: API_KEY
}))

export default async function sendPrompt(text) {
    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text}]
    })
        console.log(res.data.choices[0].message.content)
 }