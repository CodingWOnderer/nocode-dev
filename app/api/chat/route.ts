import { CAPCONS_SAGE_PROMPT } from '@/config/assistant-config';
import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Call the language model
  const result = await streamText({
    model: openai('gpt-4o'),
    system: CAPCONS_SAGE_PROMPT,
    messages: convertToCoreMessages(messages),
  });

  // Respond with the stream
  return result.toDataStreamResponse();
}
