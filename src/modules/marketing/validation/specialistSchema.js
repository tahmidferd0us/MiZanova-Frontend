import { z } from 'zod';

export const PROFESSIONAL_CATEGORY_OPTIONS = [
  'Psychologist',
  'Occupational Therapist',
  'Speech Pathologist',
  'Behaviour Support Practitioner',
  'Social Worker',
  'Special Education Teacher',
].map((value) => ({ value, label: value }));

export const specialistSchema = z.object({
  firstName: z.string().trim().min(2, 'First name is required'),
  lastName: z.string().trim().min(2, 'Last name is required'),
  email: z.string().trim().min(1, 'Email address is required').email('Enter a valid email address'),
  category: z.string().min(1, 'Select a professional category'),
  registrationNumber: z.string().trim().min(3, 'Registration number is required'),
  yearsExperience: z.coerce.number({ invalid_type_error: 'Enter your years of experience' }).min(3, 'We accept 3+ years of experience').max(60, 'Enter a realistic number'),
  linkedinUrl: z.string().trim().url('Enter a valid URL').optional().or(z.literal('')),
  bio: z.string().trim().min(20, 'Tell us a little about your specialisation').max(1000, 'Keep this under 1000 characters'),
});
