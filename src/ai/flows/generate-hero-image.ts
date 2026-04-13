'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a hero image.
 *
 * - generateHeroImage - A function that generates a hero image based on a specific prompt.
 * - GenerateHeroImageInput - The input type for the generateHeroImage function (currently empty as the prompt is fixed).
 * - GenerateHeroImageOutput - The return type for the generateHeroImage function, containing the image data URI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateHeroImageInputSchema = z.object({});
export type GenerateHeroImageInput = z.infer<typeof GenerateHeroImageInputSchema>;

const GenerateHeroImageOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A data URI of the generated hero image, including a MIME type and Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateHeroImageOutput = z.infer<typeof GenerateHeroImageOutputSchema>;

export async function generateHeroImage(input: GenerateHeroImageInput): Promise<GenerateHeroImageOutput> {
  return generateHeroImageFlow(input);
}

const generateHeroImageFlow = ai.defineFlow(
  {
    name: 'generateHeroImageFlow',
    inputSchema: GenerateHeroImageInputSchema,
    outputSchema: GenerateHeroImageOutputSchema,
  },
  async () => {
    const imagePrompt = "A realistic rural Indian village scene with a bowl of golden ghee in the foreground, cows and buffaloes grazing, traditional mud houses, warm sunlight, natural and organic atmosphere, premium and clean aesthetic";

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: imagePrompt,
    });

    if (!media) {
      throw new Error('No image was generated.');
    }

    return { imageDataUri: media.url };
  }
);
