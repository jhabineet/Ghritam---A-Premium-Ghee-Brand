'use server';
/**
 * @fileOverview A Genkit flow that generates unique, italicized, and quoted descriptive text
 * for the 'Highlight Section' of the Ghritam website, emphasizing purity and traditional craftsmanship.
 *
 * - generateHighlightText - A function that triggers the text generation process.
 * - GenerateHighlightTextInput - The input type for the generateHighlightText function (void).
 * - GenerateHighlightTextOutput - The return type for the generateHighlightText function (string).
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHighlightTextInputSchema = z.void();
export type GenerateHighlightTextInput = z.infer<typeof GenerateHighlightTextInputSchema>;

const GenerateHighlightTextOutputSchema = z
  .string()
  .describe(
    'The italicized and quoted descriptive text for the highlight section, emphasizing purity and traditional craftsmanship.'
  );
export type GenerateHighlightTextOutput = z.infer<typeof GenerateHighlightTextOutputSchema>;

export async function generateHighlightText(
  input: GenerateHighlightTextInput
): Promise<GenerateHighlightTextOutput> {
  return generateHighlightTextFlow(input);
}

const generateHighlightTextPrompt = ai.definePrompt({
  name: 'generateHighlightTextPrompt',
  input: {schema: GenerateHighlightTextInputSchema},
  output: {schema: GenerateHighlightTextOutputSchema},
  prompt: `You are a professional copywriter for a premium pure ghee brand called Ghritam, which sells ghee made using the traditional bilona process from A2 cow milk.
Your task is to craft a unique, descriptive, and appealing text for the "Highlight Section" of the website.
The text must be:
1.  Enclosed in double quotes.
2.  The main descriptive part within the quotes must be italicized using markdown syntax (e.g., *this is italicized*).
3.  It should communicate the purity, tradition, and craftsmanship of Ghritam's ghee.
4.  The tone should be premium, clean, traditional, and trustworthy.

Example tone: "Purity at its peak – crafted with tradition and care to deliver the finest quality ghee"

Generate only the quoted and italicized text, without any introductory or concluding remarks.`,
});

const generateHighlightTextFlow = ai.defineFlow(
  {
    name: 'generateHighlightTextFlow',
    inputSchema: GenerateHighlightTextInputSchema,
    outputSchema: GenerateHighlightTextOutputSchema,
  },
  async input => {
    const {output} = await generateHighlightTextPrompt(input);
    return output!;
  }
);
