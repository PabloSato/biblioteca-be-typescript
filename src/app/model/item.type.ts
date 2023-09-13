import { z } from 'zod';

const itemSchema = z.object({
  uuid: z.string().uuid(),
  name: z.string().min(1).max(50),
  slug: z.string()
});

export type Item = z.infer<typeof itemSchema>;
