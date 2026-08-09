import { z } from 'zod';

export const ROLE_OPTIONS = ['Principal / Leadership', 'Deputy Principal', 'Learning Support Coordinator', 'Wellbeing Lead', 'Business Manager', 'Other'].map((value) => ({ value, label: value }));

export const STUDENT_COUNT_OPTIONS = ['Under 250', '250 - 800', '800+', 'Multi-campus'].map((value) => ({ value, label: value }));

export const STATE_OPTIONS = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'].map((value) => ({ value, label: value }));

export const pilotSchema = z.object({
  schoolName: z.string().trim().min(2, 'School name is required'),
  abn: z.string().trim().min(1, 'ABN or CRICOS is required'),
  contactName: z.string().trim().min(2, 'Contact name is required'),
  role: z.string().min(1, 'Select a role'),
  email: z.string().trim().min(1, 'School email is required').email('Enter a valid email address'),
  phone: z.string().trim().min(6, 'Enter a contact phone number'),
  studentCount: z.string().min(1, 'Select a student range'),
  state: z.string().min(1, 'Select a state'),
  interest: z.string().trim().max(1000, 'Keep this under 1000 characters').optional().or(z.literal('')),
  startDate: z.string().optional().or(z.literal('')),
});
