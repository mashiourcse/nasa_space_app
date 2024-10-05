import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatMistralAI } from "@langchain/mistralai";
import { BufferMemory } from "langchain/memory";

const model = new ChatMistralAI({
  model: "mistral-large-latest",
  temperature: 0,
  apiKey: MistralAI
});
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a chatbot assisstant of NASA space app, your job is to consolidate all queries of the user. You'll be provided data of a planet from which you'll answer the user's query accordingly.",
  ],
  new MessagesPlaceholder("history"),
  ["human", "{input}"],
]);
const memory = new BufferMemory({
    returnMessages: true,
    inputKey: "input",
    outputKey: "output",
    memoryKey: "history"
});

export async function ChatBOT(userInput) {
  const chain = RunnableSequence.from([
    {
      input: (initialInput) => initialInput.input,
      memory: () => memory.loadMemoryVariables({})
    },
    {
      input: (previousOutput) => previousOutput.input,
      history: (previousOutput) => previousOutput.memory.history
    },
    prompt,
    model
  ]);

  const inputs = {
    input: userInput
  };

  const response = await chain.invoke(inputs);

  console.log(response);

  await memory.saveContext(inputs, {
      output: response.content
  });

  return(response.content)
}