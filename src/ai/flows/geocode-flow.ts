'use server';
/**
 * @fileOverview An AI flow for converting coordinates to a readable address.
 *
 * - geocodeCoordinates - A function that handles the geocoding process.
 * - GeocodeInput - The input type for the geocodeCoordinates function.
 * - GeocodeOutput - The return type for the geocodeCoordinates function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GeocodeInputSchema = z.object({
  latitude: z.number().describe('The latitude of the location.'),
  longitude: z.number().describe('The longitude of the location.'),
});
export type GeocodeInput = z.infer<typeof GeocodeInputSchema>;

const GeocodeOutputSchema = z.object({
  address: z.string().describe('The human-readable address.'),
});
export type GeocodeOutput = z.infer<typeof GeocodeOutputSchema>;

export async function geocodeCoordinates(input: GeocodeInput): Promise<GeocodeOutput> {
  return geocodeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'geocodePrompt',
  input: {schema: GeocodeInputSchema},
  output: {schema: GeocodeOutputSchema},
  prompt: `You are a helpful assistant that converts geographic coordinates into a human-readable address.
  
  Based on the latitude and longitude provided, determine a plausible street address.
  
  Latitude: {{{latitude}}}
  Longitude: {{{longitude}}}
  
  For the purpose of this prototype, you can use a well-known address in Accra, Ghana, as a stand-in. For example, "123 Independence Avenue, Accra, Ghana".
  Do not just repeat the coordinates. Provide a realistic-looking street address.`,
});

const geocodeFlow = ai.defineFlow(
  {
    name: 'geocodeFlow',
    inputSchema: GeocodeInputSchema,
    outputSchema: GeocodeOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
