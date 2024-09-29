import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";
import { BufferMemory } from "langchain/memory";

const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  openAIApiKey: process.env.OpenAI,
});
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a chatbot assisstant of NASA space app, your job is to consolidate all queries of the user.",
  ],
  new MessagesPlaceholder("history"),
  ["human", "{input}"],
]);
const memory = new BufferMemory({
  returnMessages: true,
  inputKey: "input",
  outputKey: "output",
  memoryKey: "history",
});

export async function ChatBOT(userInput) {
  const chain = RunnableSequence.from([
    {
      input: (initialInput) => initialInput.input,
      memory: () => memory.loadMemoryVariables({}),
    },
    {
      input: (previousOutput) => previousOutput.input,
      history: (previousOutput) => previousOutput.memory.history,
    },
    prompt,
    model,
  ]);

  const inputs = {
    input: userInput,
  };

  const response = await chain.invoke(inputs);

  console.log(response);

  await memory.saveContext(inputs, {
    output: response.content,
  });

  return response.content;
}
